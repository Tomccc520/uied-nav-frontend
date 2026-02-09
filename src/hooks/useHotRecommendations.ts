/**
 * @file useHotRecommendations.ts
 * @description 热门推荐数据 Hook - 从 API 获取热门推荐
 */

import { useState, useEffect, useCallback } from 'react';
import api from '../services/api';

export interface HotRecommendation {
  id: string;
  name: string;
  description: string;
  url: string;
  iconUrl?: string;
  pageSlug?: string;
  position: 'hot' | 'featured' | 'ad';
  order: number;
  visible: boolean;
  clickCount: number;
}

interface UseHotRecommendationsOptions {
  pageSlug?: string;
  position?: 'hot' | 'featured' | 'ad' | 'all'; // 新增 'all' 选项
  limit?: number;
  enabled?: boolean;
}

interface UseHotRecommendationsReturn {
  items: HotRecommendation[];
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
  recordClick: (id: string) => Promise<void>;
  getByPosition: (position: 'hot' | 'featured' | 'ad') => HotRecommendation[];
  // 新增：获取所有位置的统计
  positionStats: { position: string; name: string; count: number }[];
}

// 位置名称映射
const positionNames: Record<string, string> = {
  'hot': '热门推荐',
  'featured': '精选推荐',
  'ad': 'UIED系列',
};

/**
 * 热门推荐 Hook
 */
export const useHotRecommendations = (
  options: UseHotRecommendationsOptions = {}
): UseHotRecommendationsReturn => {
  const { pageSlug, position, limit = 50, enabled = true } = options;
  
  const [items, setItems] = useState<HotRecommendation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!enabled) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const params: Record<string, any> = { limit };
      if (pageSlug) params.pageSlug = pageSlug;
      // 如果 position 是 'all' 或未指定，不传 position 参数，获取所有
      if (position && position !== 'all') params.position = position;
      
      const response = await api.get('/hot-recommendations/active', { params });
      setItems(response.data);
    } catch (err) {
      setError(err as Error);
      console.error('Failed to fetch hot recommendations:', err);
    } finally {
      setLoading(false);
    }
  }, [pageSlug, position, limit, enabled]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // 记录点击
  const recordClick = useCallback(async (id: string) => {
    try {
      await api.post(`/hot-recommendations/${id}/click`);
    } catch (err) {
      console.error('Failed to record click:', err);
    }
  }, []);

  // 按位置筛选
  const getByPosition = useCallback((pos: 'hot' | 'featured' | 'ad') => {
    return items.filter(item => item.position === pos);
  }, [items]);

  // 计算位置统计
  const positionStats = useCallback(() => {
    const stats: { position: string; name: string; count: number }[] = [];
    const positions = ['hot', 'featured', 'ad'] as const;
    
    positions.forEach(pos => {
      const count = items.filter(item => item.position === pos).length;
      if (count > 0) {
        stats.push({
          position: pos,
          name: positionNames[pos] || pos,
          count
        });
      }
    });
    
    return stats;
  }, [items])();

  return {
    items,
    loading,
    error,
    refetch: fetchData,
    recordClick,
    getByPosition,
    positionStats,
  };
};

export default useHotRecommendations;
