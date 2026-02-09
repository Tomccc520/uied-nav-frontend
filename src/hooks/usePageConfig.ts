/**
 * @file usePageConfig.ts
 * @description 页面配置 Hook - 获取页面的 Hero 区域配置和滚动网站数据
 */

import { useState, useEffect } from 'react';
import api from '../services/api';

interface PageConfig {
  heroTitle?: string;
  heroSubtitle?: string;
  heroHighlightText?: string;
  hotSearchTags?: string | string[];
  heroDisplayMode?: string;
  heroScrollWebsites?: string;
  heroBgType?: string;
  heroBgValue?: string;
  searchPlaceholder?: string;
  searchEnabled?: boolean;
  showHotRecommendations?: boolean;
  showCategories?: boolean;
  showSidebar?: boolean;
  themeColor?: string;
}

interface ScrollWebsite {
  id: string;
  name: string;
  iconUrl?: string;
  url: string;
}

interface UsePageConfigReturn {
  pageConfig: PageConfig | null;
  heroScrollWebsites: ScrollWebsite[];
  dynamicHotTags: string[];
  loading: boolean;
  error: Error | null;
}

/**
 * 页面配置 Hook
 * @param slug - 页面 slug
 * @param enabled - 是否启用（默认 true）
 */
export const usePageConfig = (slug: string, enabled: boolean = true): UsePageConfigReturn => {
  const [pageConfig, setPageConfig] = useState<PageConfig | null>(null);
  const [heroScrollWebsites, setHeroScrollWebsites] = useState<ScrollWebsite[]>([]);
  const [dynamicHotTags, setDynamicHotTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  // 获取页面配置
  useEffect(() => {
    if (!enabled || !slug) return;

    setLoading(true);
    api.get(`/pages/${slug}/full`)
      .then(res => {
        setPageConfig(res.data.page);
        setError(null);
      })
      .catch(err => {
        console.error('获取页面配置失败:', err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug, enabled]);

  // 获取动态热门标签（按点击量排序）
  useEffect(() => {
    if (!enabled || !slug) return;

    api.get(`/pages/${slug}/hot-tags`, { params: { limit: 10 } })
      .then(res => {
        const tags = res.data.tags || [];
        setDynamicHotTags(tags);
      })
      .catch(err => {
        console.error('获取热门标签失败:', err);
        // 失败时不影响其他功能
      });
  }, [slug, enabled]);

  // 获取滚动图标墙的网站数据
  useEffect(() => {
    console.log('[usePageConfig] heroDisplayMode:', pageConfig?.heroDisplayMode);
    console.log('[usePageConfig] heroScrollWebsites:', pageConfig?.heroScrollWebsites);
    
    if (!pageConfig?.heroDisplayMode || pageConfig.heroDisplayMode !== 'iconScroll') {
      setHeroScrollWebsites([]);
      return;
    }

    if (!pageConfig.heroScrollWebsites) {
      setHeroScrollWebsites([]);
      return;
    }

    try {
      const websiteIds = JSON.parse(pageConfig.heroScrollWebsites);
      console.log('[usePageConfig] Parsed websiteIds:', websiteIds);
      
      if (!Array.isArray(websiteIds) || websiteIds.length === 0) {
        setHeroScrollWebsites([]);
        return;
      }

      api.get('/websites', { params: { ids: websiteIds.join(','), limit: 100 } })
        .then(res => {
          console.log('[usePageConfig] Websites API response:', res.data);
          const websites = res.data.websites || res.data || [];
          // 按原顺序排列，支持新数字ID和旧cuid格式匹配，使用字符串比较确保类型匹配
          const sortedWebsites = websiteIds
            .map((id: string | number) => websites.find((w: any) => String(w.id) === String(id) || w.oldId === String(id)))
            .filter(Boolean)
            .map((w: any) => ({
              id: w.id,
              name: w.name,
              iconUrl: w.iconUrl,
              url: w.url
            }));
          console.log('[usePageConfig] Final heroScrollWebsites:', sortedWebsites);
          setHeroScrollWebsites(sortedWebsites);
        })
        .catch(err => {
          console.error('获取滚动网站数据失败:', err);
        });
    } catch (e) {
      console.error('解析滚动网站ID失败:', e);
      setHeroScrollWebsites([]);
    }
  }, [pageConfig?.heroDisplayMode, pageConfig?.heroScrollWebsites]);

  return {
    pageConfig,
    heroScrollWebsites,
    dynamicHotTags,
    loading,
    error
  };
};

export default usePageConfig;
