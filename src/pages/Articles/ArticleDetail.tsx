/**
 * @file pages/Articles/ArticleDetail.tsx
 * @description 文章详情页组件（Pro 功能）
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// @pro-feature-start: articles
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../services/api';
import SEO from '../../components/SEO';
import { useLicense, FEATURES } from '../../hooks/useLicense';
import ArticleComments from './ArticleComments';
import './ArticleDetail.css';

/** 文章标签 */
interface ArticleTag {
  id: number;
  name: string;
  slug: string;
  color?: string;
}

/** 文章详情数据（匹配后端 formatArticle 返回格式） */
interface Article {
  id: number;
  title: string;
  content: string;
  excerpt: string;
  coverImage?: string;
  author: string;
  category: string;
  slug: string;
  status?: string;
  viewCount: number;
  seoTitle?: string;
  seoDescription?: string;
  publishedAt: number | null;
  createdAt: number | null;
  updatedAt: number | null;
  tags: ArticleTag[];
}

/**
 * 格式化日期
 * 支持 Unix 毫秒时间戳和日期字符串
 */
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

/**
 * 简单的 Markdown 渲染
 * 注意：当前实现适用于管理员创建的可信内容
 * 如果允许用户提交内容，必须使用 DOMPurify 进行 XSS 防护：
 * import DOMPurify from 'dompurify';
 * return DOMPurify.sanitize(html);
 */
const renderMarkdown = (content: string): string => {
  let html = content
    // 代码块
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    // 行内代码
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // 标题
    .replace(/^### (.*$)/gm, '<h3>$1</h3>')
    .replace(/^## (.*$)/gm, '<h2>$1</h2>')
    .replace(/^# (.*$)/gm, '<h2>$1</h2>') // H1 保留给文章标题
    // 粗体和斜体
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // 链接
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    // 图片
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" />')
    // 无序列表
    .replace(/^\s*[-*]\s+(.*)$/gm, '<li>$1</li>')
    // 有序列表
    .replace(/^\s*\d+\.\s+(.*)$/gm, '<li>$1</li>')
    // 引用
    .replace(/^>\s+(.*)$/gm, '<blockquote>$1</blockquote>')
    // 分割线
    .replace(/^---$/gm, '<hr />')
    // 段落
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br />');

  // 包装列表
  html = html.replace(/(<li>.*<\/li>)+/g, '<ul>$&</ul>');
  
  return `<p>${html}</p>`;
};

/**
 * 文章详情页组件
 */
const ArticleDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { hasFeature } = useLicense();
  
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * 获取文章详情
   */
  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        setError('文章不存在');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await api.get(`/api/articles/${slug}`);

        if (response.data.success) {
          setArticle(response.data.data);
        }
      } catch (err: any) {
        console.error('获取文章详情失败:', err);
        if (err.response?.status === 404) {
          setError('文章不存在');
        } else {
          setError('获取文章详情失败');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  /**
   * 记录浏览量
   * 同一会话中同一文章只计数一次
   */
  useEffect(() => {
    if (!article?.id) return;

    // 获取或创建会话 ID
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }

    // 检查是否已经记录过这篇文章
    const viewedArticlesKey = 'viewedArticles';
    const viewedArticles = JSON.parse(sessionStorage.getItem(viewedArticlesKey) || '[]');
    
    if (viewedArticles.includes(article.id)) {
      // 同一会话已经记录过，跳过
      return;
    }

    const recordView = async () => {
      try {
        await api.post(`/api/articles/${article.id}/view`, {
          sessionId,
        });
        
        // 记录已浏览的文章
        viewedArticles.push(article.id);
        sessionStorage.setItem(viewedArticlesKey, JSON.stringify(viewedArticles));
      } catch (err) {
        // 静默失败
      }
    };

    // 延迟记录，确保是真实浏览
    const timer = setTimeout(recordView, 3000);
    return () => clearTimeout(timer);
  }, [article?.id]);

  if (loading) {
    return (
      <div className="blog-detail-container">
        <div className="blog-detail-loading">
          <div className="blog-loading-spinner"></div>
          <p>加载中...</p>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="blog-detail-container">
        <div className="blog-detail-error">
          <h2>😕 出错了</h2>
          <p>{error || '文章不存在'}</p>
          <Link to="/articles" className="blog-btn-back">
            返回文章列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="blog-detail-container">
      {/* SEO */}
      <SEO
        title={article.seoTitle || article.title}
        description={article.seoDescription || article.excerpt}
        keywords={article.tags.map(t => t.name).join(',')}
        image={article.coverImage}
        url={`https://hao.uied.cn/article/${article.slug}`}
        type="article"
      />

      {/* 返回链接 */}
      <Link to="/articles" className="blog-back-link">
        ← 返回文章列表
      </Link>

      {/* 文章头部 */}
      <header className="blog-header">
        <div className="blog-meta-top">
          <span className="blog-category">{article.category}</span>
          <time>{formatDate(article.publishedAt)}</time>
        </div>
        
        <h1 className="blog-title">{article.title}</h1>
        
        <div className="blog-meta-bottom">
          <span className="blog-author">作者：{article.author}</span>
          <span className="blog-views">阅读：{article.viewCount}</span>
        </div>

        {/* 标签 */}
        {article.tags.length > 0 && (
          <div className="blog-tags">
            {article.tags.map((tag) => (
              <Link
                key={tag.id}
                to={`/articles?tag=${tag.slug}`}
                className="blog-detail-tag"
                style={tag.color ? { borderColor: tag.color, color: tag.color } : undefined}
              >
                {tag.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* 封面图 */}
      {article.coverImage && (
        <div className="blog-cover">
          <img src={article.coverImage} alt={article.title} />
        </div>
      )}

      {/* 文章内容 */}
      <section 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(article.content) }}
      />

      {/* 文章底部 */}
      <footer className="blog-footer">
        <p className="blog-update-time">
          最后更新：{formatDate(article.updatedAt)}
        </p>
      </footer>

      {/* 评论区（Pro 功能） */}
      {hasFeature(FEATURES.ARTICLE_COMMENTS) && (
        <ArticleComments
          articleId={String(article.id)}
        />
      )}
    </article>
  );
};

export default ArticleDetail;
// @pro-feature-end: articles
