/**
 * @file pages/Articles/ArticleCard.tsx
 * @description 文章卡片组件（Pro 功能）
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// @pro-feature-start: articles
import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleCardProps {
  article: {
    id: number | string;
    title: string;
    excerpt: string;
    coverImage?: string;
    author: string;
    category: string;
    slug: string;
    viewCount: number;
    publishedAt: string | number | null;
    tags: Array<{ id: number | string; name: string; slug: string; color?: string }>;
  };
}

/**
 * 格式化日期（支持时间戳和日期字符串）
 */
const formatDate = (dateValue: string | number | null): string => {
  if (!dateValue) return '';
  const date = typeof dateValue === 'number' ? new Date(dateValue) : new Date(dateValue);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * 眼睛图标
 */
const EyeIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

/**
 * 文章卡片组件
 */
const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link to={`/article/${article.slug}`} className="blog-card">
      {/* 封面图 */}
      <div className="blog-card-cover">
        {article.coverImage ? (
          <img 
            src={article.coverImage} 
            alt={article.title}
            loading="lazy"
          />
        ) : (
          <div className="blog-card-cover-placeholder">
            <span>{article.title.charAt(0)}</span>
          </div>
        )}
        <span className="blog-card-category">{article.category}</span>
      </div>

      {/* 内容 */}
      <div className="blog-card-content">
        <h3 className="blog-card-title">{article.title}</h3>
        <p className="blog-card-excerpt">
          {article.excerpt.length > 100 
            ? article.excerpt.slice(0, 100) + '...' 
            : article.excerpt}
        </p>

        {/* 标签 */}
        {article.tags && article.tags.length > 0 && (
          <div className="blog-card-tags">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="blog-tag"
                style={tag.color ? { backgroundColor: tag.color + '20', color: tag.color, borderColor: tag.color + '40' } : undefined}
              >
                {tag.name}
              </span>
            ))}
          </div>
        )}

        {/* 元信息 */}
        <div className="blog-card-meta">
          <span className="blog-card-author">{article.author}</span>
          <span className="blog-card-date">{formatDate(article.publishedAt)}</span>
          <span className="blog-card-views">
            <EyeIcon />
            {article.viewCount}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
// @pro-feature-end: articles
