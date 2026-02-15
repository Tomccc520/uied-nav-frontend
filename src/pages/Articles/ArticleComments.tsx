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
import api from '../../services/api';
import { unwrapApiResponse } from '../../utils/apiResponse';
import './ArticleComments.css';

interface Comment {
  id: string;
  text: string;
  createdAt: string;
  user: {
    id: string;
    name: string;
    avatar?: string;
  };
}

interface ArticleCommentsProps {
  articleId: string;
  initialCount?: number;
  userId?: string; // Pro 版本中从认证获取
}

interface CommentListPayload {
  lists?: unknown[];
  total?: number;
  page?: number;
  pageSize?: number;
  totalPages?: number;
}

interface CommentUserPayload {
  id?: string | number;
  name?: string;
  avatar?: string;
}

interface CommentPayload {
  id?: string | number;
  text?: string;
  content?: string;
  createdAt?: string | number;
  createTime?: string | number;
  create_time?: string | number;
  user?: CommentUserPayload;
  userId?: string | number;
  userName?: string;
  nickname?: string;
}

/**
 * 标准化评论数据，兼容旧版 user/text 结构与新版 nickname/content 结构。
 */
const normalizeComment = (item: CommentPayload): Comment => {
  const nickname = item?.user?.name || item?.nickname || item?.userName || '匿名用户';
  const rawCreatedAt = item?.createdAt || item?.createTime || item?.create_time || '';

  return {
    id: String(item?.id ?? ''),
    text: String(item?.text ?? item?.content ?? ''),
    createdAt: String(rawCreatedAt),
    user: {
      id: String(item?.user?.id ?? item?.userId ?? 'anonymous'),
      name: String(nickname),
      avatar: item?.user?.avatar,
    },
  };
};

/**
 * 解析评论列表接口响应，统一输出分页信息和评论数组。
 */
const parseCommentListPayload = (payload: unknown) => {
  const unwrapped = unwrapApiResponse<unknown[] | CommentListPayload>(payload as CommentListPayload, []);

  if (Array.isArray(unwrapped)) {
    const lists = unwrapped.map(normalizeComment);
    return {
      lists,
      total: lists.length,
      totalPages: 1,
      page: 1,
    };
  }

  const lists = Array.isArray(unwrapped?.lists) ? unwrapped.lists.map(normalizeComment) : [];
  const page = Number(unwrapped?.page ?? 1) || 1;
  const pageSize = Number(unwrapped?.pageSize ?? 10) || 10;
  const total = Number(unwrapped?.total ?? lists.length) || 0;
  const fallbackTotalPages = Math.ceil(total / pageSize) || 1;
  const totalPages = Number(unwrapped?.totalPages ?? fallbackTotalPages) || 1;

  return {
    lists,
    total,
    totalPages,
    page,
  };
};

/**
 * 默认头像组件
 */
const DefaultAvatar: React.FC<{ name: string; size?: number }> = ({ name, size = 40 }) => {
  const initial = name.charAt(0).toUpperCase();
  const colors = ['#1890ff', '#52c41a', '#faad14', '#f5222d', '#722ed1', '#13c2c2', '#eb2f96', '#fa8c16'];
  const colorIndex = name.charCodeAt(0) % colors.length;
  
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
  const [comments, setComments] = useState<Comment[]>([]);
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
  const fetchComments = useCallback(async (pageNum: number = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.get(`/api/articles/${articleId}/comments`, {
        params: { page: pageNum, pageSize: 10 }
      });
      const normalized = parseCommentListPayload(response.data);
      if (pageNum === 1) {
        setComments(normalized.lists);
      } else {
        setComments(prev => [...prev, ...normalized.lists]);
      }
      setTotal(normalized.total);
      setTotalPages(normalized.totalPages);
      setPage(normalized.page);
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
    fetchComments(1);
  }, [fetchComments]);

  /**
   * 提交评论
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!userId) {
      setError('请先登录后再评论');
      return;
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
      
      const response = await api.post(`/api/articles/${articleId}/comments`, {
        text: trimmedText,
        userId,
      });
      const comment = normalizeComment(unwrapApiResponse<CommentPayload>(response.data, {}));
      if (comment.id) {
        // 文章评论按正序排列，新评论添加到列表末尾
        setComments(prev => [...prev, comment]);
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
      fetchComments(page + 1);
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
                  {comment.user.avatar ? (
                    <img src={comment.user.avatar} alt={comment.user.name} />
                  ) : (
                    <DefaultAvatar name={comment.user.name} />
                  )}
                </div>
                <div className="article-comment-content">
                  <div className="article-comment-header">
                    <span className="article-comment-author">{comment.user.name}</span>
                    <span className="article-comment-time">{formatTime(comment.createdAt)}</span>
                  </div>
                  <p className="article-comment-text">{comment.text}</p>
                </div>
              </div>
            ))}
            
            {page < totalPages && (
              <button 
                className="article-btn-load-more"
                onClick={handleLoadMore}
                disabled={loading}
              >
                {loading ? '加载中...' : '加载更多'}
              </button>
            )}
          </>
        )}
      </div>
      
      {error && (
        <p className="article-comments-error">{error}</p>
      )}
      
      {/* 评论表单 */}
      <form className="article-comment-form" onSubmit={handleSubmit}>
        <textarea
          className="article-comment-input"
          placeholder={userId ? '写下你的评论...' : '登录后即可评论'}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          maxLength={1000}
          disabled={!userId || submitting}
          rows={4}
        />
        <div className="article-comment-form-footer">
          <span className="article-comment-char-count">
            {commentText.length}/1000
          </span>
          <button 
            type="submit" 
            className="article-btn-submit-comment"
            disabled={!userId || submitting || !commentText.trim()}
          >
            {submitting ? '发表中...' : '发表评论'}
          </button>
        </div>
        {!userId && (
          <p className="article-comment-login-hint">登录后即可发表评论</p>
        )}
      </form>
    </div>
  );
};

export default ArticleComments;
// @pro-feature-end: article-comments
