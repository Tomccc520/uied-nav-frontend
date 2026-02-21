/**
 * @file Home/index.tsx
 * @description 首页组件 - 参考AIBase设计，包含轮播图和最新AI资讯
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Banner from '../../components/Banner';
import DesignArticleGrid from '../../components/DesignArticleGrid';
import { RankingListSkeleton } from '../../components/Skeleton';
import api from '../../services/api';
import { useBanners } from '../../hooks/useBanners';
import { useFrontendConfig } from '../../hooks/useFrontendConfig';
import { unwrapApiResponse } from '../../utils/apiResponse';
import './index.css';
import './mobile.css';

// 简单的火焰图标组件
const FireIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8.5 12.5L11 10L13.5 12.5L16 10V18C16 19.1046 15.1046 20 14 20H10C8.89543 20 8 19.1046 8 18V10L8.5 12.5Z" 
          fill="currentColor" opacity="0.8"/>
    <path d="M12 2C12 2 16 6 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 6 12 2 12 2Z" 
          fill="currentColor"/>
  </svg>
);

// 简单的眼睛图标组件
const EyeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface CarouselSlide {
  id: string | number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  bannerId?: string;
}

// 轮播图默认数据（当后台未配置广告时使用）
const defaultCarouselData: CarouselSlide[] = [
  {
    id: 1,
    title: '纳米AI超级搜索智能体炸裂升级！',
    subtitle: '一键生成PPT、视频、口播稿，医学科研也能秒搜',
    image: '/carousel1.jpg',
    link: '/ai'
  },
  {
    id: 2,
    title: '加速发展:Gartner 预测生成 AI 应用',
    subtitle: '将实现50% 的交付时间缩减',
    image: '/carousel2.jpg',
    link: '/ai'
  },
  {
    id: 3,
    title: 'Match Group新研究:AI伴侣受青睐',
    subtitle: '60%认为不构成出轨',
    image: '/carousel3.jpg',
    link: '/ai'
  },
  {
    id: 4,
    title: '博世联手阿里云，AI 智能座舱技术',
    subtitle: '迈入新纪元！',
    image: '/carousel4.jpg',
    link: '/ai'
  }
];

// 文章数据接口
interface Article {
  id: string;
  name: string;
  description: string;
  link: string;
  thumbnail: string;
  date: string;
  authorName: string;
  authorAvatar: string;
  viewCount: number;
  score: number;
  timeAgo: string;
  isNew: boolean;
  isHot: boolean;
  isFeatured: boolean;
}

interface BackendArticleListPayload {
  lists?: Array<{
    id?: number | string;
    title?: string;
    excerpt?: string;
    coverImage?: string;
    author?: string;
    slug?: string;
    viewCount?: number;
    publishedAt?: number | string | null;
    createdAt?: number | string | null;
  }>;
}

/**
 * 首页组件
 * @returns 首页JSX元素
 */
const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { config: frontendConfig } = useFrontendConfig();
  const { banners: homeBanners, recordClick: recordBannerClick } = useBanners({
    position: 'home',
    limit: 4,
  });
  const homepageConfig = frontendConfig.homepageConfig;
  const carouselEnabled = homepageConfig.homeCarouselEnabled !== false;
  const recommendationEnabled = homepageConfig.homeRecommendationEnabled !== false;
  const recommendationContentEnabled = homepageConfig.hotRecommendationsEnabled !== false;

  /**
   * 将时间值格式化为 YYYY-MM-DD 字符串
   */
  const formatDateString = useCallback((value: number | string | null | undefined): string => {
    if (value === null || value === undefined || value === '') return '';
    const date = typeof value === 'number'
      ? new Date(value > 1e12 ? value : value * 1000)
      : new Date(value);
    if (isNaN(date.getTime())) return '';
    return date.toISOString().slice(0, 10);
  }, []);

  /**
   * 将后台文章列表转换为首页推荐区结构
   */
  const mapBackendArticles = useCallback((payload: unknown): Article[] => {
    const unwrapped = unwrapApiResponse<BackendArticleListPayload>(payload, {});
    const lists = Array.isArray(unwrapped?.lists) ? unwrapped.lists : [];
    const now = Date.now();
    return lists.map((item, index) => {
      const id = String(item?.id || `article-${index}`);
      const title = String(item?.title || '');
      const excerpt = String(item?.excerpt || '');
      const publishedAt = item?.publishedAt ?? item?.createdAt ?? null;
      const publishedDate = formatDateString(publishedAt);
      const publishedTs = typeof publishedAt === 'number'
        ? (publishedAt > 1e12 ? publishedAt : publishedAt * 1000)
        : Date.parse(String(publishedAt || ''));
      const isNew = Number.isFinite(publishedTs) ? (now - Number(publishedTs) <= 7 * 24 * 3600 * 1000) : false;
      const viewCount = Number(item?.viewCount || 0);
      return {
        id,
        name: title,
        description: excerpt,
        link: `/article/${String(item?.slug || id)}`,
        thumbnail: String(item?.coverImage || ''),
        date: publishedDate,
        authorName: String(item?.author || 'UIED'),
        authorAvatar: '',
        viewCount,
        score: Math.max(60, Math.min(999, Math.floor(viewCount / 5))),
        timeAgo: publishedDate || '',
        isNew,
        isHot: viewCount >= 100,
        isFeatured: index < 3,
      };
    });
  }, [formatDateString]);

  /**
   * 将后台 Banner 转为首页轮播数据
   */
  const carouselData = useMemo<CarouselSlide[]>(() => {
    if (!homeBanners || homeBanners.length === 0) {
      return defaultCarouselData;
    }
    return homeBanners.map((banner, index) => ({
      id: banner.id || `banner-${index}`,
      title: banner.title || `推荐内容 ${index + 1}`,
      subtitle: banner.description || '精选推荐内容',
      image: banner.imageUrl || '',
      link: banner.linkUrl || '/ai',
      bannerId: banner.id,
    }));
  }, [homeBanners]);

  /**
   * 计算首页顶部模块展示顺序。
   */
  const topModules = useMemo<Array<'carousel' | 'recommendation'>>(() => {
    const modules = [
      { key: 'carousel' as const, enabled: carouselEnabled, sort: Number(homepageConfig.homeCarouselSort || 10) },
      { key: 'recommendation' as const, enabled: recommendationEnabled, sort: Number(homepageConfig.homeRecommendationSort || 20) },
    ];
    return modules
      .filter((module) => module.enabled)
      .sort((a, b) => a.sort - b.sort)
      .map((module) => module.key);
  }, [
    carouselEnabled,
    recommendationEnabled,
    homepageConfig.homeCarouselSort,
    homepageConfig.homeRecommendationSort,
  ]);

  /**
   * 获取最新文章数据
   */
  const fetchLatestArticles = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.get('/articles', {
        params: {
          page: 1,
          pageSize: 10,
        },
      });

      const mappedArticles = mapBackendArticles(response.data);
      if (mappedArticles.length > 0) {
        setArticles(mappedArticles);
      } else {
        setError('暂无文章数据');
        setArticles([]);
      }
    } catch (err) {
      console.error('获取最新文章失败:', err);
      setError('获取文章数据失败，请稍后重试');
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [mapBackendArticles]);

  /**
   * 处理文章点击
   */
  const handleArticleClick = (article: Article) => {
    if (article.link) {
      window.open(article.link, '_blank', 'noopener,noreferrer');
    }
  };

  /**
   * 处理轮播图点击
   */
  const handleSlideClick = (slide: CarouselSlide) => {
    if (slide.bannerId) {
      recordBannerClick(slide.bannerId).catch(() => {});
    }
    if (slide.link) {
      window.open(slide.link, '_blank', 'noopener,noreferrer');
    }
  };

  /**
   * 重试获取数据
   */
  const handleRetry = () => {
    fetchLatestArticles();
  };

  // 推荐区开启时才请求内容
  useEffect(() => {
    if (!recommendationEnabled || !recommendationContentEnabled) {
      setLoading(false);
      setError(null);
      setArticles([]);
      return;
    }
    fetchLatestArticles();
  }, [fetchLatestArticles, recommendationEnabled, recommendationContentEnabled]);

  // 当轮播数据源变化时，保证当前索引不越界
  useEffect(() => {
    if (currentSlide >= carouselData.length) {
      setCurrentSlide(0);
    }
  }, [carouselData.length, currentSlide]);

  // 轮播图自动切换
  useEffect(() => {
    if (!carouselEnabled || carouselData.length === 0) {
      return undefined;
    }
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [carouselData.length, carouselEnabled]);

  // 渲染排行榜项目（参考AntRankingPage设计）
  const renderRankingItem = (article: Article, index: number) => {
    return (
      <div 
        key={article.id} 
        className="ranking-item"
        onClick={() => handleArticleClick(article)}
      >
        <div className={`rank-number-container rank-number-${index < 3 ? index + 1 : 'other'}`}>
          <span className="rank-number">{index + 1}</span>
        </div>
        
        <div className="ranking-item-content">
          <div className="ranking-item-title">
            {article.name}
            {article.isNew && <span className="new-tag">新</span>}
            {article.isHot && <span className="hot-tag">热</span>}
          </div>
          
          <div className="ranking-item-meta">
            <span className="ranking-item-views">
              <EyeIcon size={12} />
              {article.viewCount || 0}
            </span>
            <span className="ranking-item-score">
              <FireIcon size={12} />
              {Math.floor(article.score || 0)}°
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="home-container">
      {/* 顶部区域：按后台排序渲染轮播和推荐模块 */}
      {topModules.length > 0 && (
        <div className="home-top-section">
          {topModules.map((moduleKey) => {
            if (moduleKey === 'carousel') {
              return (
                <div className="home-carousel-section" key="carousel">
                  <div className="carousel-container">
                    <div className="carousel-wrapper">
                      {carouselData.map((slide, index) => (
                        <div
                          key={slide.id}
                          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
                          onClick={() => handleSlideClick(slide)}
                        >
                          <div className="slide-content">
                            <h3 className="slide-title">{slide.title}</h3>
                            <p className="slide-subtitle">{slide.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 轮播指示器 */}
                    <div className="carousel-indicators">
                      {carouselData.map((_, index) => (
                        <button
                          key={index}
                          className={`indicator ${index === currentSlide ? 'active' : ''}`}
                          onClick={() => setCurrentSlide(index)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div className="home-ranking-section" key="recommendation">
                <div className="ranking-header">
                  <h2 className="ranking-title">
                    {homepageConfig.hotRecommendationsTitle || '最新文章'}
                  </h2>
                </div>

                <div className="ranking-content">
                  {!recommendationContentEnabled ? (
                    <div className="ranking-error">
                      <div className="error-message">推荐内容已在后台关闭</div>
                    </div>
                  ) : loading ? (
                    <RankingListSkeleton count={10} />
                  ) : error ? (
                    <div className="ranking-error">
                      <div className="error-icon">⚠️</div>
                      <div className="error-message">{error}</div>
                      <button className="retry-button" onClick={handleRetry}>
                        重新加载
                      </button>
                    </div>
                  ) : (
                    <div className="ranking-list">
                      {articles.map((article, index) => renderRankingItem(article, index))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 中间：Banner区域 */}
      <div className="home-banner-section">
        <Banner />
      </div>

      {/* 下方：设计文章网格 */}
      <div className="home-design-section">
        <DesignArticleGrid 
          title="热门设计文章"
          limit={6}
          useMock={false}
          enableSubCategories={true}
          defaultSubCategory="UI"
          showMoreButton={true}
          moreButtonLink="/uiux"
          pageSlug="home"
          position="main"
        />
      </div>
    </div>
  );
};

export default Home; 
