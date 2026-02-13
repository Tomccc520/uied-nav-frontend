/**
 * @file pages/WebsiteDetail/index.tsx
 * @description 网址详情页主组件 - 参考 maomu.com 设计风格
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.0.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../../services/api';
import { useLicense, FEATURES } from '../../hooks/useLicense';
import SEO from '../../components/SEO';
import WebsiteFavicon from '../../components/WebsiteFavicon';
import Sidebar from './Sidebar';
import RelatedWebsites from './RelatedWebsites';
import RatingWidget from './RatingWidget';
import CommentsSection from './CommentsSection';
import FavoriteButton from './FavoriteButton';
import ShareButtons from './ShareButtons';
import { getFullImageUrl, processContentImageUrls } from '../../utils/urlUtils';
import './index.css';

/**
 * 网站详情数据类型
 */
interface WebsiteDetail {
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
  // 访问按钮新窗口打开配置
  visitBtnNewWindow?: boolean;
}

const WebsiteDetail: React.FC = () => {
  const { idOrSlug } = useParams<{ idOrSlug: string }>();
  const navigate = useNavigate();
  const { hasFeature, isLoading: licenseLoading } = useLicense();
  
  const [website, setWebsite] = useState<WebsiteDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedWebsites, setRelatedWebsites] = useState<RelatedWebsite[]>([]);
  const [relatedLoading, setRelatedLoading] = useState(false);
  const [websiteTags, setWebsiteTags] = useState<WebsiteTag[]>([]);
  const [detailPageConfig, setDetailPageConfig] = useState<DetailPageConfig>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // 获取网站详情
  useEffect(() => {
    // 页面加载时滚动到顶部
    window.scrollTo(0, 0);
    
    const fetchWebsiteDetail = async () => {
      if (!idOrSlug) {
        setError('网站 ID 不存在');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const response = await api.get(`/websites/${idOrSlug}`);
        setWebsite(response.data);
      } catch (err: any) {
        console.error('获取网站详情失败:', err);
        if (err.response?.status === 404) {
          setError('网站不存在');
        } else {
          setError('获取网站详情失败，请稍后重试');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWebsiteDetail();
  }, [idOrSlug]);

  // 获取相关推荐
  useEffect(() => {
    const fetchRelatedWebsites = async () => {
      if (!website?.id) return;
      
      setRelatedLoading(true);
      try {
        const response = await api.get(`/websites/${website.id}/related`, {
          params: { limit: 6 }
        });
        setRelatedWebsites(response.data.data || response.data || []);
      } catch (err) {
        console.error('获取相关推荐失败:', err);
        setRelatedWebsites([]);
      } finally {
        setRelatedLoading(false);
      }
    };

    fetchRelatedWebsites();
  }, [website?.id]);

  // 获取网站标签
  useEffect(() => {
    const fetchWebsiteTags = async () => {
      if (!website?.id) return;
      
      try {
        const response = await api.get(`/settings/website/${website.id}/tags`);
        setWebsiteTags(response.data.data || []);
      } catch (err) {
        console.error('获取网站标签失败:', err);
        setWebsiteTags([]);
      }
    };

    fetchWebsiteTags();
  }, [website?.id]);

  // 获取详情页配置
  useEffect(() => {
    const fetchDetailPageConfig = async () => {
      try {
        const response = await api.get('/settings/detailPageConfig');
        if (response.data.success) {
          setDetailPageConfig(response.data.data || {});
        }
      } catch (err) {
        console.error('获取详情页配置失败:', err);
        setDetailPageConfig({});
      }
    };

    fetchDetailPageConfig();
  }, []);

  // 获取后台配置的 Favicon API 列表 — 已由 WebsiteFavicon 组件统一处理

  const handleRatingChange = useCallback((newRating: number, newAverage: number, newTotal: number) => {
    setWebsite(prev => prev ? {
      ...prev,
      userRating: newRating,
      averageRating: newAverage,
      totalRatings: newTotal,
    } : null);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  // 解析截图
  const screenshots: string[] = (() => {
    if (!website?.screenshots) return [];
    if (Array.isArray(website.screenshots)) return website.screenshots;
    if (typeof website.screenshots === 'string') {
      try {
        const parsed = JSON.parse(website.screenshots);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  })();

  // 渲染 Markdown/HTML 内容
  const renderContent = (content: string): string => {
    if (!content) return '';
    
    // 使用统一的工具函数处理图片路径
    let processed = processContentImageUrls(content);
    
    return processed
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/^\- (.*$)/gim, '<li>$1</li>')
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
        {/* 主内容区 */}
        <main className="detail-main">
          <div className="detail-container">
            {/* 头部区域 */}
            <header className="detail-header">
              <div className="detail-icon">
                <WebsiteFavicon
                  websiteUrl={website.url}
                  iconUrl={website.iconUrl}
                  name={website.name}
                  size={64}
                  alt={website.name}
                />
              </div>
              <div className="detail-title-section">
                <h1 className="detail-title">{website.name}</h1>
                <p className="detail-subtitle">{website.description}</p>
              </div>

            </header>

            {/* 标签区域 */}
            <div className="detail-tags">
              <span className="tags-label">标签：</span>
              {website.category.parent && (
                <Link 
                  to={`/category/${website.category.parent.slug || website.category.parent.id}`}
                  className="detail-tag category-tag"
                >
                  {website.category.parent.name}
                </Link>
              )}
              <Link 
                to={`/category/${website.category.slug || website.category.id}`}
                className="detail-tag category-tag"
              >
                {website.category.name}
              </Link>
              {allTags.slice(0, 5).map((tag, index) => (
                <span key={index} className="detail-tag">{tag}</span>
              ))}
            </div>

            {/* 缩略图预览 */}
            {website.thumbnail && (
              <section className="detail-thumbnail">
                <img 
                  src={getFullImageUrl(website.thumbnail)} 
                  alt={`${website.name} 预览`} 
                  loading="lazy"
                  onClick={() => {
                    setLightboxIndex(-1);
                    setLightboxOpen(true);
                  }}
                />
              </section>
            )}

            {/* 详情内容 */}
            <article className="detail-content">
              {website.detailContent ? (
                <div 
                  className="content-body"
                  dangerouslySetInnerHTML={{ __html: renderContent(website.detailContent) }}
                />
              ) : (
                <div className="content-body">
                  <p>{website.description}</p>
                </div>
              )}
            </article>

            {/* 产品截图 */}
            {screenshots.length > 0 && (
              <section className="detail-screenshots">
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
                      <div className="screenshot-overlay" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 访问按钮 */}
            <div className="detail-actions">
              <a 
                href={website.url} 
                target={detailPageConfig.visitBtnNewWindow !== false ? '_blank' : '_self'}
                rel={detailPageConfig.visitBtnNewWindow !== false ? 'noopener noreferrer' : undefined}
                className="btn-visit-main"
              >
                {website.visitBtnText || '访问网站'} →
              </a>
            </div>

            {/* Pro 功能区域 */}
            {hasFeature(FEATURES.RATINGS) && (
              <RatingWidget
                websiteId={website.id}
                averageRating={website.averageRating ?? null}
                totalRatings={website.totalRatings ?? 0}
                userRating={website.userRating ?? null}
                userId={undefined}
                onRatingChange={handleRatingChange}
              />
            )}

            {(hasFeature(FEATURES.FAVORITES) || hasFeature(FEATURES.SHARING)) && (
              <div className="detail-social">
                {hasFeature(FEATURES.FAVORITES) && (
                  <FavoriteButton
                    websiteId={website.id}
                    initialFavorited={website.isFavorited ?? false}
                    userId={undefined}
                  />
                )}
                {hasFeature(FEATURES.SHARING) && (
                  <ShareButtons
                    websiteId={website.id}
                    websiteName={website.name}
                    websiteDescription={website.description}
                    websiteUrl={website.url}
                  />
                )}
              </div>
            )}

            {hasFeature(FEATURES.COMMENTS) && (
              <CommentsSection
                websiteId={website.id}
                initialCount={website.commentsCount ?? 0}
                userId={undefined}
              />
            )}

            {/* 版权和免责声明 */}
            {detailPageConfig && (detailPageConfig.disclaimerEnabled || detailPageConfig.copyrightEnabled) && (
              <footer className="detail-footer">
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
                {detailPageConfig.footerTipEnabled && detailPageConfig.footerTipText && (
                  <p className="footer-tip">{detailPageConfig.footerTipText}</p>
                )}
                {detailPageConfig.reportEnabled && (
                  <a 
                    href={detailPageConfig.reportEmail ? `mailto:${detailPageConfig.reportEmail}?subject=举报网站：${website.name}` : '#'}
                    className="btn-report"
                  >
                    {detailPageConfig.reportText || '举报问题'}
                  </a>
                )}
              </footer>
            )}

            {/* 相关推荐（底部） */}
            <RelatedWebsites 
              websites={relatedWebsites} 
              loading={relatedLoading}
            />
          </div>
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

export default WebsiteDetail;
