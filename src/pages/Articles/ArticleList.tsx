/**
 * @file pages/Articles/ArticleList.tsx
 * @description 文章列表页组件（Pro 功能）
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// @pro-feature-start: articles
import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api';
import SEO from '../../components/SEO';
import ArticleCard from './ArticleCard';
import { unwrapApiList, unwrapApiResponse } from '../../utils/apiResponse';
import './ArticleList.css';

/** 文章标签 */
interface ArticleTag {
  id: number;
  name: string;
  slug: string;
  color?: string;
}

/** 文章列表项 */
interface Article {
  id: number;
  title: string;
  excerpt: string;
  coverImage?: string;
  author: string;
  category: string;
  slug: string;
  viewCount: number;
  publishedAt: string | number | null;
  tags: ArticleTag[];
}

/** 标签元数据（含文章数量） */
interface TagMeta {
  id: number;
  name: string;
  slug: string;
  color?: string;
  articleCount: number;
}

interface ArticleListProps {
  pageTitle?: string;
}

interface ArticleListPayload {
  lists?: Article[];
  total?: number;
  page?: number;
  pageSize?: number;
  totalPages?: number;
}

/**
 * 文章列表页组件
 */
const ArticleList: React.FC<ArticleListProps> = ({ pageTitle = '文章' }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<TagMeta[]>([]);

  // 从 URL 获取过滤参数
  const currentCategory = searchParams.get('category') || '';
  const currentTag = searchParams.get('tag') || '';

  /**
   * 统一解析文章列表响应，兼容数组直出与分页对象。
   */
  const parseArticleListResponse = useCallback((payload: unknown) => {
    const unwrapped = unwrapApiResponse<Article[] | ArticleListPayload>(payload as ArticleListPayload, []);
    if (Array.isArray(unwrapped)) {
      return {
        lists: unwrapped,
        total: unwrapped.length,
        totalPages: 1,
      };
    }

    const lists = Array.isArray(unwrapped?.lists) ? unwrapped.lists : [];
    const total = Number(unwrapped?.total ?? lists.length) || 0;
    const fallbackTotalPages = Math.ceil(total / 12) || 1;
    const totalPages = Number(unwrapped?.totalPages ?? fallbackTotalPages) || 1;
    return { lists, total, totalPages };
  }, []);

  /**
   * 获取文章列表
   */
  const fetchArticles = useCallback(async (pageNum: number = 1) => {
    try {
      setLoading(true);
      setError(null);

      const params: Record<string, string | number> = {
        page: pageNum,
        pageSize: 12,
      };

      if (currentCategory) params.category = currentCategory;
      if (currentTag) params.tag = currentTag;

      const response = await api.get('/api/articles', { params });
      const normalized = parseArticleListResponse(response.data);
      setArticles(normalized.lists);
      setTotal(normalized.total);
      setTotalPages(normalized.totalPages);
      setPage(pageNum);
    } catch (err: unknown) {
      console.error('获取文章列表失败:', err);
      setError('获取文章列表失败');
      setArticles([]);
      setTotal(0);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  }, [currentCategory, currentTag, parseArticleListResponse]);

  /**
   * 获取分类和标签元数据
   */
  const fetchMeta = useCallback(async () => {
    try {
      const [categoriesRes, tagsRes] = await Promise.all([
        api.get('/api/articles/meta/categories'),
        api.get('/api/articles/meta/tags'),
      ]);
      setCategories(unwrapApiList<string>(categoriesRes.data));
      setTags(unwrapApiList<TagMeta>(tagsRes.data));
    } catch (err) {
      console.error('获取分类标签失败:', err);
    }
  }, []);

  useEffect(() => {
    fetchArticles(1);
    fetchMeta();
  }, [fetchArticles, fetchMeta]);

  /**
   * 切换分类
   */
  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category) {
      newParams.set('category', category);
    } else {
      newParams.delete('category');
    }
    newParams.delete('tag'); // 切换分类时清除标签
    setSearchParams(newParams);
  };

  /**
   * 切换标签
   */
  const handleTagChange = (tagSlug: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (tagSlug) {
      newParams.set('tag', tagSlug);
    } else {
      newParams.delete('tag');
    }
    setSearchParams(newParams);
  };

  /**
   * 翻页
   */
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchArticles(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="blog-list-container">
      <SEO
        title={`${pageTitle} - UIED 设计导航`}
        description="发现优质设计文章，学习设计知识和技巧"
      />

      {/* 页面标题 */}
      <div className="blog-list-header">
        <h1>{pageTitle}</h1>
        <p className="blog-list-subtitle">发现优质设计文章，学习设计知识和技巧</p>
      </div>

      {/* 过滤器 */}
      <div className="blog-filters">
        {/* 分类过滤 */}
        {categories.length > 0 && (
          <div className="blog-filter-group">
            <span className="blog-filter-label">分类：</span>
            <div className="blog-filter-tags">
              <button
                className={`blog-filter-tag ${!currentCategory ? 'active' : ''}`}
                onClick={() => handleCategoryChange('')}
              >
                全部
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`blog-filter-tag ${currentCategory === cat ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 标签过滤 */}
        {tags.length > 0 && (
          <div className="blog-filter-group">
            <span className="blog-filter-label">标签：</span>
            <div className="blog-filter-tags">
              <button
                className={`blog-filter-tag ${!currentTag ? 'active' : ''}`}
                onClick={() => handleTagChange('')}
              >
                全部
              </button>
              {tags.slice(0, 10).map((tag) => (
                <button
                  key={tag.id}
                  className={`blog-filter-tag ${currentTag === tag.slug ? 'active' : ''}`}
                  onClick={() => handleTagChange(tag.slug)}
                  style={
                    currentTag === tag.slug && tag.color
                      ? { backgroundColor: tag.color, borderColor: tag.color }
                      : undefined
                  }
                >
                  {tag.name}
                  {tag.articleCount > 0 && (
                    <span className="blog-filter-tag-count">{tag.articleCount}</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 文章列表 */}
      {loading ? (
        <div className="blog-list-loading">
          <div className="blog-loading-spinner"></div>
          <p>加载中...</p>
        </div>
      ) : error ? (
        <div className="blog-list-error">
          <p>{error}</p>
          <button onClick={() => fetchArticles(page)}>重试</button>
        </div>
      ) : articles.length === 0 ? (
        <div className="blog-list-empty">
          <p>暂无文章</p>
        </div>
      ) : (
        <>
          <div className="blog-grid">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* 分页 */}
          {totalPages > 1 && (
            <div className="blog-pagination">
              <button
                className="blog-pagination-btn"
                disabled={page <= 1}
                onClick={() => handlePageChange(page - 1)}
              >
                上一页
              </button>
              <span className="blog-pagination-info">
                第 {page} 页 / 共 {totalPages} 页（{total} 篇文章）
              </span>
              <button
                className="blog-pagination-btn"
                disabled={page >= totalPages}
                onClick={() => handlePageChange(page + 1)}
              >
                下一页
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ArticleList;
// @pro-feature-end: articles
