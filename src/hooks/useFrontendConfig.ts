/**
 * @file useFrontendConfig.ts
 * @description 前端功能配置 Hook - 获取后台配置的功能开关
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.0.0
 */

import { useState, useEffect, useCallback } from 'react';
import publicSettingService from '../services/publicSettingService';

// ==================== 接口定义 ====================

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
  autoRedirect?: boolean;
  autoRedirectSeconds?: number;
  openInNewWindow?: boolean;
  showAd?: boolean;
  adCode?: string;
  adPosition?: 'top' | 'bottom';
  hotRecommendationsEnabled?: boolean;
  pageOverrides?: { [pageSlug: string]: PageOverrideConfig };
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
  websiteClickMode: 'detail' | 'direct' | 'directExternal';
  detailPageNewWindow?: boolean;
  showDirectArrow?: boolean;
  directArrowNewWindow?: boolean;
  hotRecommendationClickMode?: 'direct' | 'modal'; // 热门推荐独立配置
}

/** 外观配置 */
interface AppearanceConfig {
  primaryColor: string;
  backgroundColor: string;
  cardBackgroundColor: string;
  textPrimaryColor: string;
  fontFamily: string;
  baseFontSize: number;
  borderRadius: number;
  contentMaxWidth: number;
  customCss: string;
}

/** 首页配置 */
interface HomepageConfig {
  heroBannerEnabled: boolean;
  heroBgType: 'default' | 'color' | 'gradient' | 'image';
  heroBgValue: string;
  heroDisplayMode: 'search' | 'iconScroll';
  heroShowStats: boolean;
  heroShowHotTags: boolean;
  bannerCardsEnabled: boolean;
  hotRecommendationsEnabled: boolean;
  hotRecommendationsTitle: string;
  topAdEnabled: boolean;
  topAdCode: string;
}

/** 卡片样式配置 */
interface CardStyleConfig {
  defaultLayout: 'grid' | 'list';
  gridColumns: number;
  showDescription: boolean;
  maxDescriptionLines: number;
  showTags: boolean;
  showFavicon: boolean;
  showUrl: boolean;
  hoverEffect: 'translateUp' | 'borderOnly' | 'shadow' | 'none';
}

/** 侧边栏配置 */
interface SidebarConfig {
  enabled: boolean;
  position: 'left' | 'right';
  width: number;
  showCategories: boolean;
  showCategoryCount: boolean;
  expandSubCategories: boolean;
  sticky: boolean;
}

/** 搜索配置 */
interface SearchConfig {
  placeholder: string;
  debounceDelay: number;
  aiSearchEnabled: boolean;
  aiSearchBtnText: string;
  highlightKeyword: boolean;
  resultsPerPage: number;
}

interface FrontendConfig {
  exitModalEnabled: boolean;
  exitModalConfig: ExitModalConfig;
  pageGlobalConfig: PageGlobalConfig;
  appearanceConfig: AppearanceConfig;
  homepageConfig: HomepageConfig;
  cardStyleConfig: CardStyleConfig;
  sidebarConfig: SidebarConfig;
  searchConfig: SearchConfig;
}

// ==================== 默认值 ====================

const defaultExitModalConfig: ExitModalConfig = {
  enabled: false,
  title: '即将离开本站',
  description: '您即将访问第三方网站，请注意保护个人信息安全。',
  confirmText: '继续访问',
  cancelText: '返回',
  showReport: true,
  reportText: '举报此链接',
  autoRedirect: false,
  autoRedirectSeconds: 5,
  openInNewWindow: true,
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
  websiteClickMode: 'detail',
  detailPageNewWindow: false,
  showDirectArrow: false,
  directArrowNewWindow: true,
  hotRecommendationClickMode: 'direct', // 热门推荐默认直达
};

const defaultAppearanceConfig: AppearanceConfig = {
  primaryColor: '#0066ff',
  backgroundColor: '#f6f8fb',
  cardBackgroundColor: '#ffffff',
  textPrimaryColor: '#333333',
  fontFamily: '',
  baseFontSize: 16,
  borderRadius: 12,
  contentMaxWidth: 1200,
  customCss: '',
};

const defaultHomepageConfig: HomepageConfig = {
  heroBannerEnabled: true,
  heroBgType: 'default',
  heroBgValue: '',
  heroDisplayMode: 'search',
  heroShowStats: true,
  heroShowHotTags: true,
  bannerCardsEnabled: true,
  hotRecommendationsEnabled: true,
  hotRecommendationsTitle: '热门推荐',
  topAdEnabled: false,
  topAdCode: '',
};

const defaultCardStyleConfig: CardStyleConfig = {
  defaultLayout: 'grid',
  gridColumns: 4,
  showDescription: true,
  maxDescriptionLines: 2,
  showTags: true,
  showFavicon: true,
  showUrl: false,
  hoverEffect: 'translateUp',
};

const defaultSidebarConfig: SidebarConfig = {
  enabled: true,
  position: 'left',
  width: 240,
  showCategories: true,
  showCategoryCount: true,
  expandSubCategories: false,
  sticky: true,
};

const defaultSearchConfig: SearchConfig = {
  placeholder: '搜索网站名称...',
  debounceDelay: 300,
  aiSearchEnabled: true,
  aiSearchBtnText: 'AI 搜索',
  highlightKeyword: true,
  resultsPerPage: 20,
};

const defaultConfig: FrontendConfig = {
  exitModalEnabled: true,
  exitModalConfig: defaultExitModalConfig,
  pageGlobalConfig: defaultPageGlobalConfig,
  appearanceConfig: defaultAppearanceConfig,
  homepageConfig: defaultHomepageConfig,
  cardStyleConfig: defaultCardStyleConfig,
  sidebarConfig: defaultSidebarConfig,
  searchConfig: defaultSearchConfig,
};

// ==================== 缓存 ====================

let cachedConfig: FrontendConfig | null = null;
let configPromise: Promise<FrontendConfig> | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 60000; // 60秒

/** 清除配置缓存 */
export const clearConfigCache = () => {
  cachedConfig = null;
  configPromise = null;
  cacheTimestamp = 0;
};

// ==================== 构建配置 ====================

const buildConfig = (data: any): FrontendConfig => ({
  exitModalEnabled: data.exitModalEnabled ?? true,
  exitModalConfig: { ...defaultExitModalConfig, ...(data.exitModalConfig || {}) },
  pageGlobalConfig: { ...defaultPageGlobalConfig, ...(data.pageGlobalConfig || {}) },
  appearanceConfig: { ...defaultAppearanceConfig, ...(data.appearanceConfig || {}) },
  homepageConfig: { ...defaultHomepageConfig, ...(data.homepageConfig || {}) },
  cardStyleConfig: { ...defaultCardStyleConfig, ...(data.cardStyleConfig || {}) },
  sidebarConfig: { ...defaultSidebarConfig, ...(data.sidebarConfig || {}) },
  searchConfig: { ...defaultSearchConfig, ...(data.searchConfig || {}) },
});

// ==================== Hook ====================

/** 获取前端功能配置 */
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
    configPromise = publicSettingService.getPublicSettings()
      .then(settings => {
        const newConfig = buildConfig({
          pageGlobalConfig: settings.pageGlobal,
          appearanceConfig: settings.appearance,
          homepageConfig: settings.homepage,
          cardStyleConfig: settings.cardStyle,
          sidebarConfig: settings.sidebar,
          searchConfig: settings.search,
          exitModalConfig: settings.exitModal,
        });
        cachedConfig = newConfig;
        cacheTimestamp = Date.now();
        return newConfig;
      })
      .catch((err) => {
        console.error('加载前端配置失败，使用默认配置:', err);
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

/** 直接获取配置（非 Hook 版本） */
export const getFrontendConfig = async (forceRefresh = false): Promise<FrontendConfig> => {
  const now = Date.now();
  const cacheValid = cachedConfig && (now - cacheTimestamp) < CACHE_TTL;

  if (!forceRefresh && cacheValid) {
    return cachedConfig!;
  }

  try {
    const settings = await publicSettingService.getPublicSettings();
    cachedConfig = buildConfig({
      pageGlobalConfig: settings.pageGlobal,
      appearanceConfig: settings.appearance,
      homepageConfig: settings.homepage,
      cardStyleConfig: settings.cardStyle,
      sidebarConfig: settings.sidebar,
      searchConfig: settings.search,
      exitModalConfig: settings.exitModal,
    });
    cacheTimestamp = Date.now();
    return cachedConfig;
  } catch {
    return defaultConfig;
  }
};

// ==================== 类型导出 ====================

export type {
  FrontendConfig,
  ExitModalConfig,
  PageGlobalConfig,
  AppearanceConfig,
  HomepageConfig,
  CardStyleConfig,
  SidebarConfig,
  SearchConfig,
};

export default useFrontendConfig;
