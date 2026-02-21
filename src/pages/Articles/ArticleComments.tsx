/**
 * @file pages/Articles/ArticleComments.tsx
 * @description 文章评论组件（Pro 功能）
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// @pro-feature-start: article-comments
import React, { useState, useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';
import { getArticleComments, createArticleComment } from '../../services/articleService';
import { CommentItem } from '../../types/article';
import './ArticleComments.css';

interface ArticleCommentsProps {
  articleId: string;
  initialCount?: number;
  userId?: string; // Pro 版本中从认证获取
}

/**
 * 默认头像组件
 */
const DefaultAvatar: React.FC<{ name: string; size?: number }> = ({ name, size = 40 }) => {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  const colors = ['#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1', '#13c2c2', '#eb2f96', '#fa8c16'];
  const colorIndex = name ? name.charCodeAt(0) % colors.length : 0;
  
  return (
    <div 
      className="article-comment-avatar-default"
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: colors[colorIndex],
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 600,
        fontSize: size * 0.4,
        flexShrink: 0,
      }}
    >
      {initial}
    </div>
  );
};

/**
 * 格式化时间
 */
const formatTime = (dateString: string): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  
  if (minutes < 1) return '刚刚';
  if (minutes < 60) return `${minutes} 分钟前`;
  if (hours < 24) return `${hours} 小时前`;
  if (days < 30) return `${days} 天前`;
  
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * 文章评论组件
 */
const ArticleComments: React.FC<ArticleCommentsProps> = ({
  articleId,
  initialCount = 0,
  userId,
}) => {
  const [comments, setComments] = useState<CommentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [commentText, setCommentText] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(initialCount);

  /**
   * 获取评论列表
   */
  const fetchCommentsData = useCallback(async (pageNum: number = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await getArticleComments(Number(articleId), {
        page: pageNum, 
        pageSize: 10 
      });

      if (pageNum === 1) {
        setComments(response.data);
      } else {
        setComments(prev => [...prev, ...response.data]);
      }
      setTotal(response.pagination.total);
      setTotalPages(response.pagination.totalPages);
      setPage(response.pagination.page);
    } catch (err: unknown) {
      console.error('获取文章评论失败:', err);
      setError('获取评论失败');
    } finally {
      setLoading(false);
    }
  }, [articleId]);

  /**
   * 初始加载
   */
  useEffect(() => {
    fetchCommentsData(1);
  }, [fetchCommentsData]);

  /**
   * 提交评论
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 注意：当前 API 文档中发表评论需要 token，这里假设 api.ts 的拦截器会处理 token
    // 或者需要从 context 获取 token 并手动传递
    // 这里暂时假设全局 axios 实例已包含 token 或无需手动传递（根据 API 文档，需要 Header: token）
    // 如果 api.ts 没有自动处理 token，这里可能需要调整

    // 检查是否登录 (简单判断 userId 是否存在，实际应该检查 auth context)
    if (!userId) {
      // 尝试从 localStorage 获取 token，如果也没有则提示
      const token = localStorage.getItem('token');
      if (!token) {
        setError('请先登录后再评论');
        return;
      }
    }
    
    const trimmedText = commentText.trim();
    if (!trimmedText) {
      setError('评论内容不能为空');
      return;
    }
    
    // 文章评论限制 1000 字符
    if (trimmedText.length > 1000) {
      setError('评论内容不能超过 1000 字符');
      return;
    }
    
    try {
      setSubmitting(true);
      setError(null);
      
      const newComment = await createArticleComment(Number(articleId), {
        text: trimmedText,
        parentId: 0
      });

      if (newComment && newComment.id) {
        // 文章评论按正序排列，新评论添加到列表末尾
        setComments(prev => [...prev, newComment]);
        setTotal(prev => prev + 1);
        setCommentText('');
      }
    } catch (err: unknown) {
      console.error('发表评论失败:', err);
      const axiosError = err as AxiosError<{ message?: string }>;
      setError(axiosError.response?.data?.message || '发表评论失败，请稍后重试');
    } finally {
      setSubmitting(false);
    }
  };

  /**
   * 加载更多
   */
  const handleLoadMore = () => {
    if (page < totalPages) {
      fetchCommentsData(page + 1);
    }
  };

  return (
    <div className="article-comments-section">
      <h3 className="article-comments-title">
        评论
        {total > 0 && <span className="article-comments-count">({total})</span>}
      </h3>
      
      {/* 评论列表 */}
      <div className="article-comments-list">
        {loading && comments.length === 0 ? (
          <div className="article-comments-loading">加载中...</div>
        ) : comments.length === 0 ? (
          <div className="article-comments-empty">
            <p>暂无评论，来发表第一条评论吧！</p>
          </div>
        ) : (
          <>
            {comments.map((comment) => (
              <div key={comment.id} className="article-comment-item">
                <div className="article-comment-avatar">
                  {comment.avatar ? (
                    <img src={comment.avatar} alt={comment.nickname} />
                  ) : (
                    <DefaultAvatar name={comment.nickname} />
                  )}
                </div>
                <div className="article-comment-content">
                  <div className="article-comment-header">
                    <span className="article-comment-author">{comment.nickname}</span>
                    <span className="article-comment-time">{formatTime(comment.createTime)}</span>
                  </div>
                  <div className="article-comment-text">{comment.content}</div>
                </div>
              </div>
            ))}
          </>
        )}
        
        {/* 加载更多 */}
        {page < totalPages && (
          <div className="article-comments-load-more">
            <button 
              onClick={handleLoadMore} 
              disabled={loading}
              className="article-load-more-btn"
            >
              {loading ? '加载中...' : '加载更多评论'}
            </button>
          </div>
        )}
      </div>

      {/* 发表评论表单 */}
      <div className="article-comment-form-container">
        <h4>发表评论</h4>
        {error && <div className="article-comment-error">{error}</div>}
        <form className="article-comment-form" onSubmit={handleSubmit}>
          <textarea
            className="article-comment-textarea"
            placeholder="写下你的评论..."
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            disabled={submitting}
            rows={4}
          />
          <div className="article-comment-actions">
            <button 
              type="submit" 
              className="article-comment-submit-btn"
              disabled={submitting || !commentText.trim()}
            >
              {submitting ? '发表中...' : '发表评论'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArticleComments;
// @pro-feature-end: article-comments
