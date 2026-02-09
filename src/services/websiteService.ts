/**
 * @file websiteService.ts
 * @description 前端用户界面组件
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import api from './api';
import { Category } from './categoryService';

export interface Website {
  id: string;
  name: string;
  description: string;
  url: string;
  categoryId: string;
  category?: Category;
  isNew: boolean;
  isFeatured: boolean;
  isHot: boolean;
  tags: string[];
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface WebsiteQueryParams {
  category?: string;
  featured?: boolean;
  hot?: boolean;
  new?: boolean;
  search?: string;
}

export const websiteService = {
  // 获取所有网站
  getAll: async (params?: WebsiteQueryParams): Promise<Website[]> => {
    const response = await api.get('/websites', { params });
    return response.data;
  },

  // 获取单个网站
  getById: async (id: string): Promise<Website> => {
    const response = await api.get(`/websites/${id}`);
    return response.data;
  },

  // 获取推荐网站
  getFeatured: async (): Promise<Website[]> => {
    const response = await api.get('/websites/featured/list');
    return response.data;
  },

  // 获取热门网站
  getHot: async (): Promise<Website[]> => {
    const response = await api.get('/websites/hot/list');
    return response.data;
  },

  // 搜索网站
  search: async (keyword: string): Promise<Website[]> => {
    const response = await api.get('/websites', {
      params: { search: keyword }
    });
    return response.data;
  },
};

export default websiteService;
