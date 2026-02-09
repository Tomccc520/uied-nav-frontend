/**
 * @file useFrontendConfig.ts
 * @description 前端功能配置 Hook - 获取后台配置的功能开关
 */

import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

interface PageOverrideConfig {
  enabled?: boolean;
  title?: string;
  description?: string;
}

interface ExitModalConfig {
  enabled: boolean;
  title: string;
  description: string;
  confirmText: string;
  cancelText: string;
  showReport: boolean;
  reportText: string;
  // 自动跳转配置
  autoRedirect?: boolean;
  autoRedirectSeconds?: number;
  // 新窗口打开配置
  openInNewWindow?: boolean;
  // 广告配置
  showAd?: boolean;
  adCode?: string;
  adPosition?: 'top' | 'bottom';
  // 热门推荐跳转弹窗
  hotRecommendationsEnabled?: boolean;
  // 页面级配置
  pageOverrides?: {
    [pageSlug: string]: PageOverrideConfig;
  };
}

interface PageGlobalConfig {
  defaultLayout: 'grid' | 'list';
  gridColumns: number;
  showSidebar: boolean;
  sidebarPosition: 'left' | 'right';
  cardStyle: 'default' | 'compact' | 'detailed';
  showCardTags: boolean;
  showCardDescription: boolean;
  maxDescriptionLines: number;
  defaultPageSize: number;
  showPagination: boolean;
  showSearch: boolean;
  searchPlaceholder: string;
  defaultThemeColor: string;
  enableDarkMode: boolean;
  // 网址跳转模式配置
  websiteClickMode: 'detail' | 'direct' | 'directExternal';  // detail: 跳转详情页, direct: 弹窗确认后跳转, directExternal: 直达外部网站
  // 详情页新窗口打开配置
  detailPageNewWindow?: boolean;  // 是否在新窗口打开详情页
  // 卡片直达箭头配置
  showDirectArrow?: boolean;  // 是否在卡片上显示直达网站箭头
  directArrowNewWindow?: boolean;  // 直达箭头是否在新窗口打开
}

interface FrontendConfig {
  exitModalEnabled: boolean;
  exitModalConfig: ExitModalConfig;
  pageGlobalConfig: PageGlobalConfig;
}

const defaultExitModalConfig: ExitModalConfig = {
  enabled: false,  // 默认关闭，点击跳转详情页
  title: '即将离开本站',
  description: '您即将访问第三方网站，请注意保护个人信息安全。',
  confirmText: '继续访问',
  cancelText: '返回',
  showReport: true,
  reportText: '举报此链接',
  autoRedirect: false,
  autoRedirectSeconds: 5,
  openInNewWindow: true,  // 默认新窗口打开
  showAd: false,
  adCode: '',
  adPosition: 'bottom',
  hotRecommendationsEnabled: true,
};

const defaultPageGlobalConfig: PageGlobalConfig = {
  defaultLayout: 'grid',
  gridColumns: 4,
  showSidebar: true,
  sidebarPosition: 'left',
  cardStyle: 'default',
  showCardTags: true,
  showCardDescription: true,
  maxDescriptionLines: 2,
  defaultPageSize: 20,
  showPagination: true,
  showSearch: true,
  searchPlaceholder: '搜索工具...',
  defaultThemeColor: '#2563EB',
  enableDarkMode: false,
  websiteClickMode: 'detail',  // 默认跳转详情页
  detailPageNewWindow: false,  // 默认当前窗口打开
  showDirectArrow: false,  // 默认不显示直达箭头
  directArrowNewWindow: true,  // 默认新窗口打开
};

const defaultConfig: FrontendConfig = {
  exitModalEnabled: true,
  exitModalConfig: defaultExitModalConfig,
  pageGlobalConfig: defaultPageGlobalConfig,
};

// 全局缓存
let cachedConfig: FrontendConfig | null = null;
let configPromise: Promise<FrontendConfig> | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 60000; // 缓存有效期 60 秒

/**
 * 清除配置缓存
 */
export const clearConfigCache = () => {
  cachedConfig = null;
  configPromise = null;
  cacheTimestamp = 0;
};

/**
 * 获取前端功能配置
 */
export const useFrontendConfig = () => {
  const [config, setConfig] = useState<FrontendConfig>(cachedConfig || defaultConfig);
  const [loading, setLoading] = useState(!cachedConfig);

  const fetchConfig = useCallback(async (forceRefresh = false) => {
    const now = Date.now();
    const cacheValid = cachedConfig && (now - cacheTimestamp) < CACHE_TTL;
    
    if (!forceRefresh && cacheValid) {
      setConfig(cachedConfig!);
      setLoading(false);
      return;
    }

    if (configPromise) {
      const result = await configPromise;
      setConfig(result);
      setLoading(false);
      return;
    }

    setLoading(true);
    configPromise = api.get('/settings/frontend-config')
      .then(res => {
        const newConfig: FrontendConfig = {
          exitModalEnabled: res.data.exitModalEnabled ?? true,
          exitModalConfig: { ...defaultExitModalConfig, ...(res.data.exitModalConfig || {}) },
          pageGlobalConfig: { ...defaultPageGlobalConfig, ...(res.data.pageGlobalConfig || {}) },
        };
        cachedConfig = newConfig;
        cacheTimestamp = Date.now();
        return newConfig;
      })
      .catch(() => {
        cachedConfig = defaultConfig;
        cacheTimestamp = Date.now();
        return defaultConfig;
      })
      .finally(() => {
        configPromise = null;
      });

    const result = await configPromise;
    setConfig(result);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchConfig();
  }, [fetchConfig]);

  return { config, loading, refetch: () => fetchConfig(true) };
};

/**
 * 直接获取配置（非 Hook 版本）
 * @param forceRefresh 是否强制刷新缓存
 */
export const getFrontendConfig = async (forceRefresh = false): Promise<FrontendConfig> => {
  const now = Date.now();
  const cacheValid = cachedConfig && (now - cacheTimestamp) < CACHE_TTL;
  
  if (!forceRefresh && cacheValid) {
    return cachedConfig!;
  }
  
  try {
    const res = await api.get('/settings/frontend-config');
    cachedConfig = {
      exitModalEnabled: res.data.exitModalEnabled ?? true,
      exitModalConfig: { ...defaultExitModalConfig, ...(res.data.exitModalConfig || {}) },
      pageGlobalConfig: { ...defaultPageGlobalConfig, ...(res.data.pageGlobalConfig || {}) },
    };
    cacheTimestamp = Date.now();
    return cachedConfig;
  } catch {
    return defaultConfig;
  }
};

export default useFrontendConfig;
