import { NavMenuType } from "../../types";
/**
 * @file Home/index.tsx
 * @description 首页组件 - 参考AIBase设计，包含轮播图和最新AI资讯
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import DesignArticleGrid from '../../components/DesignArticleGrid';
import wordPressApi from '../../services/wordpress-api';
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

// 轮播图数据
const carouselData = [
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

/**
 * 首页组件
 * @returns 首页JSX元素
 */
const Home: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  /**
   * 获取最新文章数据
   */
  const fetchLatestArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await wordPressApi.getLatestPosts({
        page: 1,
        perPage: 10, // 减少到10条，适合排行榜显示
        orderBy: 'date',
        order: 'desc',
        useMock: false
      });
      
      if (Array.isArray(response) && response.length > 0) {
        setArticles(response);
      } else {
        setError('暂无文章数据');
      }
    } catch (err) {
      console.error('获取最新文章失败:', err);
      setError('获取文章数据失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

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
  const handleSlideClick = (slide: typeof carouselData[0]) => {
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

  // 组件挂载时获取数据
  useEffect(() => {
    fetchLatestArticles();
  }, []);

  // 轮播图自动切换
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

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
      {/* 顶部区域：轮播图和排行榜并排 */}
      <div className="home-top-section">
        {/* 左侧：轮播图 */}
        <div className="home-carousel-section">
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

        {/* 右侧：最新文章排行榜 */}
        <div className="home-ranking-section">
          <div className="ranking-header">
            <h2 className="ranking-title">最新文章</h2>
          </div>

          <div className="ranking-content">
            {loading ? (
              <div className="ranking-loading">
                <div className="loading-spinner"></div>
                <div className="loading-text">正在加载排行榜...</div>
              </div>
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
      </div>

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
        />
      </div>
    </div>
  );
};

export default Home; 