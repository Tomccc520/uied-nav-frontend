/**
 * @file UserContext.tsx
 * @description 用户状态全局Context
 * @copyright 版权所有 (c) 2026 UIED技术团队
 */

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import userService, { User, LoginParams, RegisterParams } from '../services/userService';

interface UserContextValue {
  user: User | null;
  loading: boolean;
  error: Error | null;
  isLoggedIn: boolean;
  login: (params: LoginParams) => Promise<void>;
  register: (params: RegisterParams) => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  clearError: () => void;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    /**
     * 初始化用户登录态
     */
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userProfile = await userService.getProfile();
          setUser(userProfile);
        } catch (err) {
          console.error('Failed to restore session:', err);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };
    initAuth();
  }, []);

  /**
   * 执行登录并写入用户状态
   */
  const login = useCallback(async (params: LoginParams) => {
    setLoading(true);
    setError(null);
    try {
      const { token, user: userData, userInfo } = await userService.login(params);
      localStorage.setItem('token', token);
      // 优先使用 userInfo，如果不存在则使用 user
      setUser(userInfo || userData);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('登录失败');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * 执行注册并写入用户状态
   */
  const register = useCallback(async (params: RegisterParams) => {
    setLoading(true);
    setError(null);
    try {
      const { token, user: userData, userInfo } = await userService.register(params);
      localStorage.setItem('token', token);
      setUser(userInfo || userData);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('注册失败');
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * 执行注销并清理登录态
   */
  const logout = useCallback(async () => {
    setLoading(true);
    try {
      await userService.logout();
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      localStorage.removeItem('token');
      setUser(null);
      setLoading(false);
    }
  }, []);

  /**
   * 刷新用户信息
   */
  const refreshProfile = useCallback(async () => {
    try {
      const userProfile = await userService.getProfile();
      setUser(userProfile);
    } catch (err) {
      console.error('Refresh profile error:', err);
      // 如果获取用户信息失败（如token过期），可能需要登出
      // 这里暂不自动登出，只记录错误
    }
  }, []);

  /**
   * 清理认证错误信息
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const value: UserContextValue = {
    user,
    loading,
    error,
    isLoggedIn: !!user,
    login,
    register,
    logout,
    refreshProfile,
    clearError,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

/**
 * 获取用户上下文
 */
export const useUser = (): UserContextValue => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
