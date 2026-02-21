/**
 * @file pages/Articles/ArticleDetail.tsx
 * @description 文章详情页组件 - 沉浸式阅读设计
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 */

import React, { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getArticleDetail, recordArticleView } from '../../services/articleService';
import { ArticleDetail as ArticleDetailType } from '../../types/article';
import SEO from '../../components/SEO';
import { useLicense, FEATURES } from '../../hooks/useLicense';
import ArticleComments from './ArticleComments';
import './ArticleDetail.css';

const formatDate = (value: string | number | null): string => {
  if (!value) return '';
  const date = typeof value === 'number' ? new Date(value) : new Date(value);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { hasFeature } = useLicense();
  
  const [article, setArticle] = useState<ArticleDetailType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      try {
        setLoading(true);
        const data = await getArticleDetail(slug);
        setArticle(data);
      } catch (err) {
        const axiosError = err as AxiosError;
        if (axiosError.response?.status === 404) {
          setError('文章不存在或已被删除');
        } else {
          setError('加载文章失败，请检查网络');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchArticle();
  }, [slug]);

  // 记录阅读量
  useEffect(() => {
    if (!article?.id) return;
    const key = `viewed_article_${article.id}`;
    if (sessionStorage.getItem(key)) return;
    
    const timer = setTimeout(() => {
      recordArticleView(article.id).catch(() => {});
      sessionStorage.setItem(key, '1');
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [article?.id]);

  if (loading) return <div className="detail-loading"><div className="spinner" /></div>;
  
  if (error || !article) {
    return (
      <div className="detail-error">
        <h2>{error || '文章不存在'}</h2>
        <button onClick={() => navigate('/articles')} className="back-btn">返回文章列表</button>
      </div>
    );
  }

  return (
    <article className="article-detail-page">
      <SEO
        title={article.seoTitle || article.title}
        description={article.seoDescription || article.excerpt}
        keywords={article.tags.map(t => t.name).join(',')}
        image={article.coverImage}
        type="article"
      />

      {/* 沉浸式头部背景 */}
      <div className="detail-hero-bg"></div>

      <div className="detail-container">
        {/* 导航面包屑 */}
        <nav className="detail-nav">
          <Link to="/articles">文章列表</Link>
          <span className="separator">/</span>
          <span className="current">{article.category}</span>
        </nav>

        {/* 文章头部信息 */}
        <header className="detail-header">
          <div className="detail-meta-tags">
            <span className="category-badge">{article.category}</span>
            <time className="publish-date">{formatDate(article.publishedAt)}</time>
          </div>
          
          <h1 className="detail-title">{article.title}</h1>
          
          <div className="detail-author-bar">
            <div className="author-info">
              <div className="author-avatar">
                {article.author.charAt(0).toUpperCase()}
              </div>
              <div className="author-text">
                <span className="author-name">{article.author}</span>
                <span className="read-count">{article.viewCount} 次阅读</span>
              </div>
            </div>
          </div>
        </header>

        {/* 封面图 */}
        {article.coverImage && (
          <figure className="detail-cover">
            <img src={article.coverImage} alt={article.title} />
          </figure>
        )}

        {/* 正文区域 */}
        <div className="detail-content-wrapper">
          <div 
            className="detail-content typography"
            dangerouslySetInnerHTML={{ __html: article.content }} // 注意：实际项目中建议使用 renderMarkdown 或 DOMPurify
          />
        </div>

        {/* 底部标签 */}
        {article.tags.length > 0 && (
          <div className="detail-tags">
            {article.tags.map(tag => (
              <Link key={tag.id} to={`/articles?tag=${tag.slug}`} className="tag-chip">
                # {tag.name}
              </Link>
            ))}
          </div>
        )}

        <hr className="detail-divider" />

        {/* 评论区 */}
        {hasFeature(FEATURES.ARTICLE_COMMENTS) && (
          <section className="detail-comments">
            <h3>评论互动</h3>
            <ArticleComments articleId={String(article.id)} />
          </section>
        )}
      </div>
    </article>
  );
};

export default ArticleDetail;
