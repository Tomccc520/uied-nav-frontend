/**
 * @file services/articleService.ts
 * @description 文章相关 API 服务
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import api from './api';
import { 
  ArticleListResponse, 
  ArticleListParams, 
  ArticleDetail, 
  CommentListResponse, 
  CreateCommentParams,
  TagMeta,
  CategoryMeta,
  CommentItem
} from '../types/article';
import { PaginationParams } from '../types/api';

import { unwrapApiResponse } from '../utils/apiResponse';

/**
 * 获取文章列表
 * GET /api/articles
 */
export const getArticles = async (params: ArticleListParams): Promise<ArticleListResponse> => {
  // 确保参数名与 API 文档一致
  // API: page, pageSize, category, tag
  const apiParams = {
    page: params.page,
    pageSize: params.pageSize,
    category: params.category,
    tag: params.tag
  };
  
  const response = await api.get<any>('/articles', { params: apiParams });
  const data = unwrapApiResponse<any>(response.data, {});
  
  // 适配后端返回结构 { lists: [], total: 0, page: 1, pageSize: 10, totalPages: 0 }
  return {
    data: Array.isArray(data.lists) ? data.lists : [],
    pagination: {
      total: data.total || 0,
      page: data.page || 1,
      pageSize: data.pageSize || 10,
      totalPages: data.totalPages || 0,
      hasMore: (data.page || 1) < (data.totalPages || 0)
    }
  };
};

/**
 * 获取文章详情
 * GET /api/articles/:slug
 */
export const getArticleDetail = async (slug: string): Promise<ArticleDetail> => {
  const response = await api.get<ArticleDetail>(`/articles/${slug}`);
  return unwrapApiResponse<ArticleDetail>(response.data, {} as ArticleDetail);
};

/**
 * 获取文章分类元数据
 * GET /api/articles/meta/categories
 */
export const getArticleCategories = async (): Promise<CategoryMeta[]> => {
  const response = await api.get<CategoryMeta[]>('/articles/meta/categories');
  return unwrapApiResponse<CategoryMeta[]>(response.data, []);
};

/**
 * 获取文章标签元数据
 * GET /api/articles/meta/tags
 */
export const getArticleTags = async (): Promise<TagMeta[]> => {
  const response = await api.get<TagMeta[]>('/articles/meta/tags');
  return unwrapApiResponse<TagMeta[]>(response.data, []);
};

/**
 * 记录文章阅读
 * POST /api/articles/:id/view
 */
export const recordArticleView = async (id: number): Promise<void> => {
  await api.post(`/articles/${id}/view`, { id });
};

/**
 * 获取评论列表
 * GET /api/articles/:id/comments
 */
export const getArticleComments = async (id: number, params?: PaginationParams): Promise<CommentListResponse> => {
  const response = await api.get<CommentListResponse>(`/articles/${id}/comments`, { params });
  const data = unwrapApiResponse<any>(response.data, {});
  
  // 适配后端返回结构 { lists: [], total: 0, page: 1, pageSize: 10, totalPages: 0 }
  return {
    data: data.lists || [],
    pagination: {
      total: data.total || 0,
      page: data.page || 1,
      pageSize: data.pageSize || 10,
      totalPages: data.totalPages || 0,
      hasMore: (data.page || 1) < (data.totalPages || 0)
    }
  };
};

/**
 * 发布评论
 * POST /api/articles/:id/comments
 */
export const createArticleComment = async (id: number, params: CreateCommentParams): Promise<CommentItem> => {
  const response = await api.post<CommentItem>(`/articles/${id}/comments`, params);
  return unwrapApiResponse<CommentItem>(response.data, {} as CommentItem);
};

/**
 * 收藏文章
 * POST /api/article/collect/toggle
 */
export const toggleArticleCollect = async (articleId: number): Promise<boolean> => {
  const response = await api.post('/article/collect/toggle', { articleId });
  return unwrapApiResponse<any>(response.data, {}).collected;
};

/**
 * 点赞文章
 * POST /api/article/like/toggle
 */
export const toggleArticleLike = async (articleId: number): Promise<boolean> => {
  const response = await api.post('/article/like/toggle', { articleId });
  return unwrapApiResponse<any>(response.data, {}).liked;
};

/**
 * 点赞评论
 * POST /api/article/comment/like/toggle
 */
export const toggleCommentLike = async (commentId: number): Promise<boolean> => {
  const response = await api.post('/article/comment/like/toggle', { commentId });
  return unwrapApiResponse<any>(response.data, {}).liked;
};

/**
 * 举报评论
 * POST /api/article/comment/report/add
 */
export const reportComment = async (commentId: number, reason: string): Promise<void> => {
  await api.post('/article/comment/report/add', { commentId, reason });
};

/**
 * 获取用户收藏的文章列表
 * POST /api/user/article/collect/list
 */
export const getUserCollectedArticles = async (params: { page?: number; pageSize?: number }): Promise<any> => {
  const response = await api.post('/user/article/collect/list', params);
  return unwrapApiResponse<any>(response.data, { lists: [], total: 0 });
};

/**
 * 获取用户点赞的文章列表
 * POST /api/user/article/like/list
 */
export const getUserLikedArticles = async (params: { page?: number; pageSize?: number }): Promise<any> => {
  const response = await api.post('/user/article/like/list', params);
  return unwrapApiResponse<any>(response.data, { lists: [], total: 0 });
};
