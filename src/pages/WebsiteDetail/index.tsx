/**
 * @file pages/WebsiteDetail/index.tsx
 * @description 网址详情页主组件
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.1.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';
import { useLicense, FEATURES } from '../../hooks/useLicense';
import SEO from '../../components/SEO';
import Sidebar from './Sidebar';
import RelatedWebsites from './RelatedWebsites';
import RatingWidget from './RatingWidget';
import CommentsSection from './CommentsSection';
import FavoriteButton from './FavoriteButton';
import ShareButtons from './ShareButtons';
import { getFullImageUrl, processContentImageUrls } from '../../utils/urlUtils';
import { unwrapApiList, unwrapApiResponse } from '../../utils/apiResponse';
import { debugLog } from '../../utils/debugHelper';
import './index.css';

/**
 * 网站详情数据类型
 */
interface WebsiteDetailData {
  id: string;
  name: string;
  slug?: string;
  description: string;
  url: string;
  iconUrl?: string;
  category: {
    id: string;
    name: string;
    slug?: string;
    parent?: {
      id: string;
      name: string;
      slug?: string;
    };
  };
  tags: string[];
  createdAt: string;
  updatedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  detailContent?: string;
  screenshots?: string | string[];
  thumbnail?: string;
  visitBtnText?: string;
  averageRating?: number | null;
  totalRatings?: number;
  userRating?: number | null;
  isFavorited?: boolean;
  commentsCount?: number;
}

interface RelatedWebsite {
  id: string;
  name: string;
  slug?: string;
  description: string;
  url?: string;
  iconUrl?: string;
  category?: {
    name: string;
  };
}

interface WebsiteTag {
  id: string;
  name: string;
  slug: string;
  color?: string;
}

interface DetailPageConfig {
  copyrightEnabled?: boolean;
  copyrightText?: string;
  copyrightLink?: string;
  disclaimerEnabled?: boolean;
  disclaimerText?: string;
  footerTipEnabled?: boolean;
  footerTipText?: string;
  shareEnabled?: boolean;
  shareText?: string;
  reportEnabled?: boolean;
  reportText?: string;
  reportEmail?: string;
  // 直达按钮配置
  visitArrowEnabled?: boolean;
  visitArrowText?: string;
  visitBtnNewWindow?: boolean;
}

const WebsiteDetailPage: React.FC = () => {
  const { idOrSlug } = useParams<{ idOrSlug?: string }>();
  const navigate = useNavigate();
  const { isLoading: licenseLoading, hasFeature } = useLicense();
  
  const [website, setWebsite] = useState<WebsiteDetailData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedWebsites, setRelatedWebsites] = useState<RelatedWebsite[]>([]);
  const [relatedLoading, setRelatedLoading] = useState<boolean>(false);
  const [websiteTags, setWebsiteTags] = useState<WebsiteTag[]>([]);
  
  // 图片灯箱状态
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // 获取详情页配置
  // 由于 License 类型暂未包含 config，这里使用默认配置
  const detailPageConfig: DetailPageConfig = {
    visitBtnNewWindow: true,
    copyrightEnabled: true,
    copyrightText: '© 2026 UIED',
    reportEnabled: true,
  };

  // 获取网站详情
  const fetchWebsiteDetail = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const identifier = String(idOrSlug || '').replace(/\.html$/, '');
      if (!identifier) {
        throw new Error('未找到网站ID或别名');
      }

      const response = await api.get(`/websites/${identifier}`);
      const data = unwrapApiResponse<WebsiteDetailData | null>(response.data, null);
      
      if (!data) {
        throw new Error('未找到该网站信息');
      }
      
      // 处理内容中的图片URL
      if (data.detailContent) {
        data.detailContent = processContentImageUrls(data.detailContent);
      }
      
      setWebsite(data);
      
      // 获取相关推荐和标签
      fetchRelatedWebsites(data.id, data.category.id);
      fetchWebsiteTags(data.id);
      
    } catch (err) {
      console.error('获取网站详情失败:', err);
      const axiosError = err as AxiosError<{ message?: string; error?: string }>;
      if (axiosError.response?.status === 404) {
        setError('抱歉，该网站不存在或已被删除');
      } else if (axiosError.response) {
        setError(axiosError.response.data?.message || axiosError.response.data?.error || '获取网站详情失败，请稍后重试');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('获取网站详情失败，请稍后重试');
      }
    } finally {
      setLoading(false);
    }
  }, [idOrSlug]);

  // 获取相关推荐
  const fetchRelatedWebsites = async (websiteId: string, categoryId: string) => {
    try {
      setRelatedLoading(true);
      // 获取同分类下的其他网站作为相关推荐
      const response = await api.get('/websites', {
        params: {
          category: categoryId,
          page: 1,
          limit: 6,
          sort: 'popular' // 按热度排序
        }
      });
      
      const list = unwrapApiList<RelatedWebsite>(response);
      // 过滤掉当前网站
      const filtered = list.filter(w => w.id !== websiteId).slice(0, 5);
      setRelatedWebsites(filtered);
    } catch (err) {
      console.error('获取相关推荐失败:', err);
    } finally {
      setRelatedLoading(false);
    }
  };

  // 获取网站标签
  const fetchWebsiteTags = async (websiteId: string) => {
    try {
      const response = await api.get(`/websites/${websiteId}/tags`);
      const tags = unwrapApiList<WebsiteTag>(response);
      setWebsiteTags(tags);
    } catch (err) {
      debugLog.warn('获取标签失败 (非关键错误):', err);
    }
  };

  useEffect(() => {
    fetchWebsiteDetail();
    // 滚动到顶部
    window.scrollTo(0, 0);
  }, [fetchWebsiteDetail]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRatingChange = (newRating: number) => {
    if (website) {
      setWebsite({
        ...website,
        userRating: newRating
      });
    }
  };

  // 截图列表
  const screenshots = website?.screenshots 
    ? (Array.isArray(website.screenshots) ? website.screenshots : [website.screenshots]) 
    : [];

  // 渲染Markdown内容 (简单处理)
  const renderContent = (content: string) => {
    if (!content) return '';
    // 这里可以接入 markdown-it 或其他库，暂时使用简单的替换
    // 实际项目中建议使用 react-markdown
    return content
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^- (.*$)/gim, '<li>$1</li>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/\n/g, '<br />');
  };

  // 加载状态
  if (loading || licenseLoading) {
    return (
      <div className="detail-page">
        <div className="detail-loading">
          <div className="loading-spinner"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  // 错误状态
  if (error || !website) {
    return (
      <div className="detail-page">
        <div className="detail-error">
          <h2>😕 出错了</h2>
          <p>{error || '网站不存在'}</p>
          <button onClick={handleGoBack} className="btn-back">返回上一页</button>
        </div>
      </div>
    );
  }

  // 合并标签
  const allTags = [
    ...(website.tags || []),
    ...websiteTags.map(t => t.name)
  ].filter((v, i, a) => a.indexOf(v) === i);

  // 格式化日期
  const formattedDate = new Date(website.createdAt).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="detail-page">
      <SEO
        title={website.seoTitle || website.name}
        description={website.seoDescription || website.description}
        keywords={website.seoKeywords || `${website.name},${website.category.name},${allTags.join(',')}`}
        image={website.iconUrl}
        url={`https://hao.uied.cn/website/${website.slug || website.id}`}
        type="website"
      />

      {/* 两栏布局 */}
      <div className="detail-layout">
        {/* 主内容区 - 文章样式 */}
        <main className="detail-main">
          <article className="detail-article">
            {/* 头部区域 */}
            <header className="article-header">
              <div className="article-meta-top">
                {website.category.parent && (
                  <Link 
                    to={`/category/${website.category.parent.slug || website.category.parent.id}`}
                    className="article-category"
                  >
                    {website.category.parent.name}
                  </Link>
                )}
                <span className="article-divider">/</span>
                <Link 
                  to={`/category/${website.category.slug || website.category.id}`}
                  className="article-category"
                >
                  {website.category.name}
                </Link>
              </div>

              <h1 className="article-title">{website.name}</h1>
              
              <div className="article-meta">
                <span className="meta-item date">{formattedDate}</span>
                <span className="meta-item author">UIED精选</span>
                <div className="meta-actions">
                  {hasFeature(FEATURES.FAVORITES) && (
                    <FavoriteButton
                      websiteId={website.id}
                      initialFavorited={website.isFavorited ?? false}
                      userId={undefined}
                    />
                  )}
                </div>
              </div>

              <div className="article-subtitle">{website.description}</div>
            </header>

            {/* 缩略图/Banner */}
            {website.thumbnail && (
              <div className="article-banner">
                <img 
                  src={getFullImageUrl(website.thumbnail)} 
                  alt={`${website.name} 预览`} 
                  loading="lazy"
                  onClick={() => {
                    setLightboxIndex(-1);
                    setLightboxOpen(true);
                  }}
                />
              </div>
            )}

            {/* 访问按钮 (顶部) */}
            <div className="article-actions-top">
              <a 
                href={website.url} 
                target={detailPageConfig.visitBtnNewWindow !== false ? '_blank' : '_self'}
                rel={detailPageConfig.visitBtnNewWindow !== false ? 'noopener noreferrer' : undefined}
                className="btn-visit-large"
              >
                {website.visitBtnText || '访问网站'}
                <svg className="icon-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>

            {/* 正文内容 */}
            <div className="article-content">
              {website.detailContent ? (
                <div 
                  className="content-body"
                  dangerouslySetInnerHTML={{ __html: renderContent(website.detailContent) }}
                />
              ) : (
                <div className="content-body empty-content">
                  <p>暂无详细介绍，请直接访问网站体验。</p>
                </div>
              )}
            </div>

            {/* 标签 */}
            {allTags.length > 0 && (
              <div className="article-tags">
                {allTags.map((tag, index) => (
                  <span key={index} className="tag-item">#{tag}</span>
                ))}
              </div>
            )}

            {/* 产品截图 */}
            {screenshots.length > 0 && (
              <section className="article-section screenshots-section">
                <h3 className="section-title">产品截图</h3>
                <div className="screenshots-grid">
                  {screenshots.map((url, index) => (
                    <div 
                      key={index} 
                      className="screenshot-item"
                      onClick={() => {
                        setLightboxIndex(index);
                        setLightboxOpen(true);
                      }}
                    >
                      <img src={getFullImageUrl(url)} alt={`截图 ${index + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 互动区域 */}
            <div className="article-interaction">
              {hasFeature(FEATURES.RATINGS) && (
                <div className="interaction-block">
                  <RatingWidget
                    websiteId={website.id}
                    averageRating={website.averageRating ?? null}
                    totalRatings={website.totalRatings ?? 0}
                    userRating={website.userRating ?? null}
                    userId={undefined}
                    onRatingChange={handleRatingChange}
                  />
                </div>
              )}
              
              {hasFeature(FEATURES.SHARING) && (
                <div className="interaction-block share-block">
                  <span className="share-label">分享：</span>
                  <ShareButtons
                    websiteId={website.id}
                    websiteName={website.name}
                    websiteDescription={website.description}
                    websiteUrl={website.url}
                  />
                </div>
              )}
            </div>

            {/* 评论区 */}
            {hasFeature(FEATURES.COMMENTS) && (
              <section className="article-comments">
                <CommentsSection
                  websiteId={website.id}
                  initialCount={website.commentsCount ?? 0}
                  userId={undefined}
                />
              </section>
            )}

            {/* 版权和免责声明 */}
            {detailPageConfig && (detailPageConfig.disclaimerEnabled || detailPageConfig.copyrightEnabled) && (
              <footer className="article-footer">
                {detailPageConfig.copyrightEnabled && detailPageConfig.copyrightText && (
                  <p className="copyright-text">
                    {detailPageConfig.copyrightLink ? (
                      <a href={detailPageConfig.copyrightLink} target="_blank" rel="noopener noreferrer">
                        {detailPageConfig.copyrightText}
                      </a>
                    ) : (
                      detailPageConfig.copyrightText
                    )}
                  </p>
                )}
                {detailPageConfig.disclaimerEnabled && detailPageConfig.disclaimerText && (
                  <p className="disclaimer-text">{detailPageConfig.disclaimerText}</p>
                )}
                {detailPageConfig.reportEnabled && (
                  <div className="report-action">
                    <a 
                      href={detailPageConfig.reportEmail ? `mailto:${detailPageConfig.reportEmail}?subject=举报网站：${website.name}` : '#'}
                      className="btn-report"
                    >
                      {detailPageConfig.reportText || '举报问题'}
                    </a>
                  </div>
                )}
              </footer>
            )}

            {/* 底部相关推荐 (移动端显示) */}
            <div className="mobile-related">
              <RelatedWebsites 
                websites={relatedWebsites} 
                loading={relatedLoading}
              />
            </div>
          </article>
        </main>

        {/* 侧边栏 */}
        <Sidebar
          relatedWebsites={relatedWebsites}
          tags={website.tags || []}
          websiteTags={websiteTags}
          loading={relatedLoading}
        />
      </div>

      {/* 图片灯箱 */}
      {lightboxOpen && (lightboxIndex === -1 ? (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>×</button>
            <img src={getFullImageUrl(website.thumbnail || '')} alt={`${website.name} 预览`} />
          </div>
        </div>
      ) : screenshots.length > 0 && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxOpen(false)}>×</button>
            <img src={getFullImageUrl(screenshots[lightboxIndex])} alt={`截图 ${lightboxIndex + 1}`} />
            {screenshots.length > 1 && (
              <div className="lightbox-nav">
                <button 
                  className="lightbox-prev"
                  onClick={() => setLightboxIndex((lightboxIndex - 1 + screenshots.length) % screenshots.length)}
                >
                  ‹
                </button>
                <span className="lightbox-counter">{lightboxIndex + 1} / {screenshots.length}</span>
                <button 
                  className="lightbox-next"
                  onClick={() => setLightboxIndex((lightboxIndex + 1) % screenshots.length)}
                >
                  ›
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebsiteDetailPage;
