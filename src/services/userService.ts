/**
 * @file userService.ts
 * @description 用户中心服务 - 处理登录、注册、用户信息等
 * @copyright 版权所有 (c) 2026 UIED技术团队
 */

import api from './api';

// 用户信息接口
export interface User {
  id: number;
  username: string;
  nickname?: string;
  avatar?: string;
  email?: string;
  mobile?: string;
  userType?: string; // e.g. 'normal', 'author', 'admin'
  userTypeName?: string;
  profileCompletion?: number;
  // 新增字段 (2026-02-20)
  mobileMask?: string;
  sexName?: string;
  channelName?: string;
  createTime?: string;
  lastLoginTime?: string;
  [key: string]: any;
}

// 登录/注册响应接口
export interface AuthResponse {
  token: string;
  user: User;
  userInfo: User; // 兼容不同字段名
}

// 登录参数
export interface LoginParams {
  username?: string;
  account?: string;
  password: string;
}

// 注册参数
export interface RegisterParams {
  username: string;
  password: string;
  confirmPassword?: string;
  nickname?: string;
  mobile?: string;
}

// 用户服务
export const userService = {
  /**
   * 用户登录
   */
  login: async (params: LoginParams): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/user/login', params);
    return response.data;
  },

  /**
   * 用户注册
   */
  register: async (params: RegisterParams): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>('/user/register', params);
    return response.data;
  },

  /**
   * 退出登录
   */
  logout: async (): Promise<void> => {
    await api.post('/user/logout');
  },

  /**
   * 获取用户信息
   */
  getProfile: async (): Promise<User> => {
    const response = await api.get<User>('/user/profile');
    return response.data;
  },

  /**
   * 更新用户信息
   */
  updateProfile: async (data: Partial<User>): Promise<User> => {
    const response = await api.post<User>('/user/profile/update', data);
    return response.data;
  },

  /**
   * 修改密码
   */
  changePassword: async (params: { oldPassword?: string; newPassword: string; confirmPassword: string }): Promise<void> => {
    await api.post('/user/password/change', params);
  },

  /**
   * 获取用户统计信息
   */
  getStats: async (): Promise<any> => {
    const response = await api.post('/user/index/stats');
    return response.data;
  },

  /**
   * 获取订单列表
   */
  getOrderList: async (params: { page?: number; pageSize?: number; status?: string }): Promise<any> => {
    const response = await api.post('/user/order/list', params);
    return response.data;
  },

  /**
   * 获取许可证列表
   */
  getLicenseList: async (params: { page?: number; pageSize?: number }): Promise<any> => {
    const response = await api.post('/user/license/list', params);
    return response.data;
  },

  /**
   * 获取消息列表
   */
  getMessageList: async (params: { page?: number; pageSize?: number; isRead?: boolean }): Promise<any> => {
    const response = await api.post('/user/message/list', params);
    return response.data;
  },

  /**
   * 标记消息已读
   */
  readMessage: async (ids: number[]): Promise<void> => {
    await api.post('/user/message/read', { ids });
  },

  /**
   * 删除消息
   */
  deleteMessage: async (ids: number[]): Promise<void> => {
    await api.post('/user/message/delete', { ids });
  },

  /**
   * 获取登录日志
   */
  getLoginLog: async (params: { page?: number; pageSize?: number }): Promise<any> => {
    const response = await api.post('/user/login/log', params);
    return response.data;
  },

  /**
   * 获取作者中心详情
   */
  getAuthorCenterDetail: async (): Promise<any> => {
    const response = await api.post('/user/author/center/detail');
    return response.data;
  },

  /**
   * 保存作者中心设置
   */
  saveAuthorCenter: async (data: any): Promise<void> => {
    await api.post('/user/author/center/save', data);
  },

  /**
   * 获取作者公开信息
   */
  getAuthorPublicDetail: async (authorId: number): Promise<any> => {
    const response = await api.post('/user/author/public/detail', { authorId });
    return response.data;
  }
};

export default userService;
