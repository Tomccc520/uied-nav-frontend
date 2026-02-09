/**
 * @file useWebsites.ts
 * @description 前端用户界面组件
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import { useState, useEffect } from 'react';
import { websiteService, Website, WebsiteQueryParams } from '../services/websiteService';

export const useWebsites = (params?: WebsiteQueryParams) => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true);
        const data = await websiteService.getAll(params);
        setWebsites(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch websites:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
  }, [JSON.stringify(params)]);

  return { websites, loading, error };
};

export const useFeaturedWebsites = () => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true);
        const data = await websiteService.getFeatured();
        setWebsites(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch featured websites:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);

  return { websites, loading, error };
};

export const useHotWebsites = () => {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchWebsites = async () => {
      try {
        setLoading(true);
        const data = await websiteService.getHot();
        setWebsites(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        console.error('Failed to fetch hot websites:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWebsites();
  }, []);

  return { websites, loading, error };
};
