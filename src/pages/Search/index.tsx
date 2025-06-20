import { NavMenuType } from "../../types";
/**
 * @file Search/index.tsx
 * @description 优化的搜索页面 - 整合真实数据源，包含HeroBanner组件
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.1.0 - 增加UIUX数据源搜索
 */

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconTool } from '../../components/UI';
import HeroBanner from '../../components/HeroBanner';
import { searchAITools, getAIToolsStats } from '../../data/aiToolsDatabase';
import { searchWebsites, allWebsites } from '../../data/websiteDatabase';
import { hotRecommendations } from '../../data/hotRecommendations';
import { searchTools as searchUIUXTools, allUIUXTools } from '../../data/uiuxToolsDatabase';
import { searchTools as searchDesignTools, getAllDesignTools } from '../../data/designToolsDatabase';
import { searchTools as searchThreeDTools, allThreeDTools } from '../../data/threeDToolsDatabase';
import { searchTools as searchInteriorTools, allInteriorTools } from '../../data/interiorToolsDatabase';
import { searchTools as searchEcommerceTools, allEcommerceTools } from '../../data/ecommerceToolsDatabase';
import { searchTools as searchFontTools, allFontTools } from '../../data/fontToolsDatabase';
import './index.css';

// 使用public目录下的背景图片，避免部署后路径问题
const bgImage = '/bg.jpg';

// 临时替代变量，直到文件导入问题解决
const convertedAiTools: any[] = [];

// 搜索结果接口
interface SearchResult {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  isNew?: boolean;
  isHot?: boolean;
  isFeatured?: boolean;
  rating?: number;
  pricing?: string;
  source?: string; // 数据源标识
  icon?: string; // 图标URL
}

// 搜索过滤器
interface SearchFilters {
  category: string;
  sortBy: string;
  pricing: string;
  rating: string;
  source: string;
}

const SearchPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    sortBy: 'relevance',
    pricing: 'all',
    rating: 'all',
    source: 'all'
  });
  const [totalResults, setTotalResults] = useState(0);
  const [allDataCount, setAllDataCount] = useState(0);

  // 热门搜索标签
  const hotTags = ['AI绘画', 'ChatGPT', 'Figma', '免费工具', 'UI设计', 'Midjourney', '视频制作', '图标库'];

  // 从URL获取搜索参数
  useEffect(() => {
    try {
      const params = new URLSearchParams(location.search);
      const query = params.get('q') || '';
      const type = params.get('type') || '';
      
      setSearchQuery(query);
      
      // 根据type设置默认过滤器
      if (type === 'ai') {
        setFilters(prev => ({ ...prev, source: 'ai' }));
      } else if (type === 'design') {
        setFilters(prev => ({ ...prev, source: 'design' }));
      } else if (type === 'uiux') {
        setFilters(prev => ({ ...prev, source: 'uiux' }));
      }
      
      // 计算总数据量 - 无论有没有查询都计算
      calculateTotalCount();
      
      // 如果没有查询参数，默认显示热门推荐，而不是全部数据
      if (!query) {
        performDefaultSearch();
      } else {
        performSearch(query);
      }
    } catch (error) {
      console.error('处理URL参数时出错:', error);
      // 确保即使出错也设置loading为false
      setLoading(false);
    }
  }, [location.search]);

  // 计算总数据量
  const calculateTotalCount = () => {
    try {
      let totalCount = 0;
      
      try {
        const aiToolsStats = getAIToolsStats();
        totalCount += aiToolsStats.total || 0;
      } catch (error) {
        console.error('获取AI工具统计失败:', error);
      }
      
      try {
        const convertedCount = Array.isArray(convertedAiTools) ? convertedAiTools.length : 0;
        totalCount += convertedCount;
      } catch (error) {
        console.error('获取转换AI工具数据失败:', error);
      }
      
      try {
        const websiteCount = Array.isArray(allWebsites) ? allWebsites.length : 0;
        totalCount += websiteCount;
      } catch (error) {
        console.error('获取网站数据库失败:', error);
      }
      
      try {
        const hotCount = Array.isArray(hotRecommendations) ? hotRecommendations.length : 0;
        totalCount += hotCount;
      } catch (error) {
        console.error('获取热门推荐失败:', error);
      }
      
      // 新增：获取UIUX工具数量
      try {
        const uiuxCount = Array.isArray(allUIUXTools) ? allUIUXTools.length : 0;
        totalCount += uiuxCount;
      } catch (error) {
        console.error('获取UIUX工具数据库失败:', error);
      }
      
      // 新增：获取设计工具数量
      try {
        const designTools = getAllDesignTools();
        const designCount = Array.isArray(designTools) ? designTools.length : 0;
        totalCount += designCount;
      } catch (error) {
        console.error('获取设计工具数据库失败:', error);
      }
      
      // 新增：获取3D工具数量
      try {
        const threeDCount = Array.isArray(allThreeDTools) ? allThreeDTools.length : 0;
        totalCount += threeDCount;
      } catch (error) {
        console.error('获取3D工具数据库失败:', error);
      }
      
      // 新增：获取室内设计工具数量
      try {
        const interiorCount = Array.isArray(allInteriorTools) ? allInteriorTools.length : 0;
        totalCount += interiorCount;
      } catch (error) {
        console.error('获取室内设计工具数据库失败:', error);
      }
      
      // 新增：获取电商工具数量
      try {
        const ecommerceCount = Array.isArray(allEcommerceTools) ? allEcommerceTools.length : 0;
        totalCount += ecommerceCount;
      } catch (error) {
        console.error('获取电商工具数据库失败:', error);
      }
      
      // 新增：获取字体工具数量
      try {
        const fontCount = Array.isArray(allFontTools) ? allFontTools.length : 0;
        totalCount += fontCount;
      } catch (error) {
        console.error('获取字体工具数据库失败:', error);
      }
      
      // 如果计算结果为0，至少显示一个默认值
      setAllDataCount(totalCount > 0 ? totalCount : 1000);
    } catch (error) {
      console.error('计算数据总量失败:', error);
      setAllDataCount(1000); // 设置一个默认值，避免显示为0
    }
  };

  // 默认搜索：显示热门和推荐工具，限制数量避免数据过多
  const performDefaultSearch = async () => {
    setLoading(true);
    
    try {
      let defaultResults: SearchResult[] = [];
      
      // 获取热门推荐（使用hotRecommendations.js的getHotRecommendations方法，按评分排序）
      try {
        // 导入getHotRecommendations函数
        const { getHotRecommendations } = await import('../../data/hotRecommendations');
        const hotResults = getHotRecommendations(25).map((item: any) => ({
          id: item.id || `hot-${Math.random().toString(36).substr(2, 9)}`,
          name: item.name || '热门推荐',
          description: item.description || '',
          url: item.url || '#',
          category: item.category || '',
          tags: Array.isArray(item.tags) ? item.tags : [],
          isNew: !!item.isNew,
          isHot: true, // 标记为热门
          isFeatured: !!item.isFeatured,
          rating: typeof item.rating === 'number' ? item.rating : undefined,
          pricing: item.pricing || '',
          source: 'hot-recommendations',
          icon: item.iconUrl || item.icon || ''
        }));
        defaultResults = [...defaultResults, ...hotResults];
        console.log('获取热门推荐成功:', hotResults.length, '个');
      } catch (error) {
        console.error('获取热门推荐失败:', error);
        // 备用方案：直接使用hotRecommendations原数组
        if (Array.isArray(hotRecommendations)) {
          const backupResults = hotRecommendations.slice(0, 25).map((item: any) => ({
            id: item.id || `hot-${Math.random().toString(36).substr(2, 9)}`,
            name: item.name || '热门推荐',
            description: item.description || '',
            url: item.url || '#',
            category: item.category || '',
            tags: Array.isArray(item.tags) ? item.tags : [],
            isNew: !!item.isNew,
            isHot: true,
            isFeatured: !!item.isFeatured,
            rating: typeof item.rating === 'number' ? item.rating : undefined,
            pricing: item.pricing || '',
            source: 'hot-recommendations',
            icon: item.iconUrl || item.icon || ''
          }));
          defaultResults = [...defaultResults, ...backupResults];
        }
      }
      
            // 从各个数据库获取少量特色工具作为补充（每个数据库最多3个）
      const databases = [
        { search: searchAITools, name: 'ai-database', label: 'AI工具' },
        { search: searchUIUXTools, name: 'uiux-database', label: 'UI/UX工具' },
        { search: searchDesignTools, name: 'design-database', label: '设计工具' },
        { search: searchThreeDTools, name: '3d-database', label: '3D工具' },
        { search: searchInteriorTools, name: 'interior-database', label: '室内设计工具' },
        { search: searchEcommerceTools, name: 'ecommerce-database', label: '电商工具' },
        { search: searchFontTools, name: 'font-database', label: '字体工具' }
      ];
      
      // 只选择前4个数据库，减少补充内容
      for (const db of databases.slice(0, 4)) {
        try {
          let dbResults: any[] = [];
          
          if (db.search === searchAITools) {
            // AI工具数据库特殊处理
            const searchResult = searchAITools('', {
              sortBy: 'featured',
              limit: 3
            });
            dbResults = searchResult?.results || [];
          } else {
            // 其他数据库 - 先获取搜索结果，然后处理
            const searchResult = db.search('');
            dbResults = Array.isArray(searchResult) ? searchResult.slice(0, 3) : [];
          }
          
          const mappedResults = dbResults.map((item: any) => ({
            id: item.id || `${db.name}-${Math.random().toString(36).substr(2, 9)}`,
            name: item.name || db.label,
            description: item.description || '',
            url: item.url || '#',
            category: item.category || '',
            tags: Array.isArray(item.tags) ? item.tags : [],
            isNew: !!item.isNew,
            isHot: !!item.isHot,
            isFeatured: !!item.isFeatured,
            rating: typeof item.rating === 'number' ? item.rating : undefined,
            pricing: item.pricing || '',
            source: db.name,
            icon: item.icon || ''
          }));
          
          // 只选择特色工具，如果没有特色工具则选择评分最高的
          const featuredResults = mappedResults.filter(item => item.isFeatured || item.isHot);
          const topResults = featuredResults.length > 0 ? featuredResults.slice(0, 2) : mappedResults.slice(0, 2);
          
          defaultResults = [...defaultResults, ...topResults];
        } catch (error) {
          console.error(`获取${db.label}默认数据失败:`, error);
        }
      }
      
      // 去重并排序
      const uniqueResults = defaultResults.filter((item, index, self) => 
        index === self.findIndex(t => t.url === item.url)
      );
      
      // 按优先级排序：热门推荐 > 热门 > 特色 > 新品 > 评分 > 其他
      uniqueResults.sort((a, b) => {
        // 热门推荐来源优先级最高
        const aFromHotRec = a.source === 'hot-recommendations' ? 10 : 0;
        const bFromHotRec = b.source === 'hot-recommendations' ? 10 : 0;
        
        const aScore = aFromHotRec + (a.isHot ? 4 : 0) + (a.isFeatured ? 3 : 0) + (a.isNew ? 2 : 0) + (a.rating ? a.rating * 0.5 : 0);
        const bScore = bFromHotRec + (b.isHot ? 4 : 0) + (b.isFeatured ? 3 : 0) + (b.isNew ? 2 : 0) + (b.rating ? b.rating * 0.5 : 0);
        
        return bScore - aScore;
      });
      
      // 限制总数量为50个，避免加载过多数据影响性能
      const limitedResults = uniqueResults.slice(0, 50);
      
      setSearchResults(limitedResults);
      setTotalResults(limitedResults.length);
    } catch (error) {
      console.error('默认搜索失败:', error);
      setSearchResults([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  };

  // 整合所有数据源进行搜索
  const performSearch = async (query: string) => {
    setLoading(true);
    
    try {
      let allResults: SearchResult[] = [];
      
      // 搜索主要AI工具数据库
      if (filters.source === 'all' || filters.source === 'ai') {
        try {
          const aiSearchResult = searchAITools(query, {
            category: filters.category !== 'all' ? filters.category : undefined,
            sortBy: filters.sortBy as any,
            limit: 50
          });
          
          if (aiSearchResult && aiSearchResult.results && Array.isArray(aiSearchResult.results)) {
            const aiResults = aiSearchResult.results.map((item: any) => ({
              id: item.id || `ai-${Math.random().toString(36).substr(2, 9)}`,
              name: item.name || 'AI工具',
              description: item.description || '',
              url: item.url || '#',
              category: item.category || '',
              tags: Array.isArray(item.tags) ? item.tags : [],
              isNew: !!item.isNew,
              isHot: !!item.isHot,
              isFeatured: !!item.isFeatured,
              rating: typeof item.rating === 'number' ? item.rating : undefined,
              pricing: item.pricing || '',
              source: 'ai-database',
              icon: item.icon || ''
            }));
            allResults = [...allResults, ...aiResults];
          }
        } catch (error) {
          console.error('搜索AI工具数据库失败:', error);
        }
      }
      
      // 搜索转换的AI工具数据
      if (filters.source === 'all' || filters.source === 'ai') {
        try {
          if (Array.isArray(convertedAiTools)) {
            const convertedResults = convertedAiTools.filter((item: any) =>
              (item.name && item.name.toLowerCase().includes(query.toLowerCase())) ||
              (item.description && item.description.toLowerCase().includes(query.toLowerCase())) ||
              (Array.isArray(item.tags) && item.tags.some((tag: string) => 
                typeof tag === 'string' && tag.toLowerCase().includes(query.toLowerCase())
              ))
            ).map((item: any) => ({
              id: item.id || `converted-${Math.random().toString(36).substr(2, 9)}`,
              name: item.name || 'AI工具',
              description: item.description || '',
              url: item.url || '#',
              category: item.category || '',
              tags: Array.isArray(item.tags) ? item.tags : [],
              isNew: !!item.isNew,
              isHot: !!item.isHot,
              isFeatured: !!item.isFeatured,
              rating: typeof item.rating === 'number' ? item.rating : undefined,
              pricing: item.pricing || '',
              source: 'converted-ai',
              icon: item.icon || ''
            }));
            allResults = [...allResults, ...convertedResults];
          }
        } catch (error) {
          console.error('搜索转换AI工具失败:', error);
        }
      }
      
      // 搜索网站数据库
      if (filters.source === 'all' || filters.source === 'design') {
        try {
          if (Array.isArray(allWebsites)) {
            const websiteResults = allWebsites.filter((item: any) =>
              (item.name && item.name.toLowerCase().includes(query.toLowerCase())) ||
              (item.description && item.description.toLowerCase().includes(query.toLowerCase())) ||
              (Array.isArray(item.tags) && item.tags.some((tag: string) => 
                typeof tag === 'string' && tag.toLowerCase().includes(query.toLowerCase())
              ))
            ).map((item: any) => ({
              id: item.id || `website-${Math.random().toString(36).substr(2, 9)}`,
              name: item.name || '设计资源',
              description: item.description || '',
              url: item.url || '#',
              category: item.category || '',
              tags: Array.isArray(item.tags) ? item.tags : [],
              isNew: !!item.isNew,
              isHot: !!item.isHot,
              isFeatured: !!item.isFeatured,
              rating: typeof item.rating === 'number' ? item.rating : undefined,
              pricing: item.pricing || '',
              source: 'website-database',
              icon: item.icon || ''
            }));
            allResults = [...allResults, ...websiteResults];
          }
        } catch (error) {
          console.error('搜索网站数据库失败:', error);
        }
      }
      
      // 搜索热门推荐
      if (filters.source === 'all') {
        try {
          if (Array.isArray(hotRecommendations)) {
            const hotResults = hotRecommendations.filter((item: any) =>
              (item.name && item.name.toLowerCase().includes(query.toLowerCase())) ||
              (item.description && item.description.toLowerCase().includes(query.toLowerCase())) ||
              (Array.isArray(item.tags) && item.tags.some((tag: string) => 
                typeof tag === 'string' && tag.toLowerCase().includes(query.toLowerCase())
              ))
            ).map((item: any) => ({
              id: item.id || `hot-${Math.random().toString(36).substr(2, 9)}`,
              name: item.name || '热门推荐',
              description: item.description || '',
              url: item.url || '#',
              category: item.category || '',
              tags: Array.isArray(item.tags) ? item.tags : [],
              isNew: !!item.isNew,
              isHot: !!item.isHot,
              isFeatured: !!item.isFeatured,
              rating: typeof item.rating === 'number' ? item.rating : undefined,
              pricing: item.pricing || '',
              source: 'hot-recommendations',
              icon: item.icon || ''
            }));
            allResults = [...allResults, ...hotResults];
          }
        } catch (error) {
          console.error('搜索热门推荐失败:', error);
        }
      }
      
      // 新增：搜索UIUX工具数据库
      if (filters.source === 'all' || filters.source === 'uiux') {
        try {
          const uiuxResults = searchUIUXTools(query).map((item: any) => ({
            id: item.id || `uiux-${Math.random().toString(36).substr(2, 9)}`,
            name: item.name || 'UI/UX工具',
            description: item.description || '',
            url: item.url || '#',
            category: item.category || '',
            tags: Array.isArray(item.tags) ? item.tags : [],
            isNew: !!item.isNew,
            isHot: !!item.isHot,
            isFeatured: !!item.isFeatured,
            rating: typeof item.rating === 'number' ? item.rating : undefined,
            pricing: item.pricing || '',
            source: 'uiux-database',
            icon: item.icon || ''
          }));
          allResults = [...allResults, ...uiuxResults];
        } catch (error) {
          console.error('搜索UIUX工具数据库失败:', error);
        }
      }
      
      // 新增：搜索设计工具数据库
      if (filters.source === 'all' || filters.source === 'design') {
        try {
          const designResults = searchDesignTools(query).map((item: any) => ({
            id: item.id || `design-${Math.random().toString(36).substr(2, 9)}`,
            name: item.name || '设计工具',
            description: item.description || '',
            url: item.url || '#',
            category: item.category || '',
            tags: Array.isArray(item.tags) ? item.tags : [],
            isNew: !!item.isNew,
            isHot: !!item.isHot,
            isFeatured: !!item.isFeatured,
            rating: typeof item.rating === 'number' ? item.rating : undefined,
            pricing: item.pricing || '',
            source: 'design-database',
            icon: item.icon || ''
          }));
          allResults = [...allResults, ...designResults];
        } catch (error) {
          console.error('搜索设计工具数据库失败:', error);
        }
      }
      
      // 新增：搜索3D工具数据库
      if (filters.source === 'all' || filters.source === '3d') {
        try {
          const threeDResults = searchThreeDTools(query).map((item: any) => ({
            id: item.id || `3d-${Math.random().toString(36).substr(2, 9)}`,
            name: item.name || '3D工具',
            description: item.description || '',
            url: item.url || '#',
            category: item.category || '',
            tags: Array.isArray(item.tags) ? item.tags : [],
            isNew: !!item.isNew,
            isHot: !!item.isHot,
            isFeatured: !!item.isFeatured,
            rating: typeof item.rating === 'number' ? item.rating : undefined,
            pricing: item.pricing || '',
            source: '3d-database',
            icon: item.icon || ''
          }));
          allResults = [...allResults, ...threeDResults];
        } catch (error) {
          console.error('搜索3D工具数据库失败:', error);
        }
      }
      
      // 新增：搜索室内设计工具数据库
      if (filters.source === 'all' || filters.source === 'interior') {
        try {
          const interiorResults = searchInteriorTools(query).map((item: any) => ({
            id: item.id || `interior-${Math.random().toString(36).substr(2, 9)}`,
            name: item.name || '室内设计工具',
            description: item.description || '',
            url: item.url || '#',
            category: item.category || '',
            tags: Array.isArray(item.tags) ? item.tags : [],
            isNew: !!item.isNew,
            isHot: !!item.isHot,
            isFeatured: !!item.isFeatured,
            rating: typeof item.rating === 'number' ? item.rating : undefined,
            pricing: item.pricing || '',
            source: 'interior-database',
            icon: item.icon || ''
          }));
          allResults = [...allResults, ...interiorResults];
        } catch (error) {
          console.error('搜索室内设计工具数据库失败:', error);
        }
      }
      
      // 新增：搜索电商工具数据库
      if (filters.source === 'all' || filters.source === 'ecommerce') {
        try {
          const ecommerceResults = searchEcommerceTools(query).map((item: any) => ({
            id: item.id || `ecommerce-${Math.random().toString(36).substr(2, 9)}`,
            name: item.name || '电商工具',
            description: item.description || '',
            url: item.url || '#',
            category: item.category || '',
            tags: Array.isArray(item.tags) ? item.tags : [],
            isNew: !!item.isNew,
            isHot: !!item.isHot,
            isFeatured: !!item.isFeatured,
            rating: typeof item.rating === 'number' ? item.rating : undefined,
            pricing: item.pricing || '',
            source: 'ecommerce-database',
            icon: item.icon || ''
          }));
          allResults = [...allResults, ...ecommerceResults];
        } catch (error) {
          console.error('搜索电商工具数据库失败:', error);
        }
      }
      
      // 新增：搜索字体工具数据库
      if (filters.source === 'all' || filters.source === 'font') {
        try {
          const fontResults = searchFontTools(query).map((item: any) => ({
            id: item.id || `font-${Math.random().toString(36).substr(2, 9)}`,
            name: item.name || '字体工具',
            description: item.description || '',
            url: item.url || '#',
            category: item.category || '',
            tags: Array.isArray(item.tags) ? item.tags : [],
            isNew: !!item.isNew,
            isHot: !!item.isHot,
            isFeatured: !!item.isFeatured,
            rating: typeof item.rating === 'number' ? item.rating : undefined,
            pricing: item.pricing || '',
            source: 'font-database',
            icon: item.icon || ''
          }));
          allResults = [...allResults, ...fontResults];
        } catch (error) {
          console.error('搜索字体工具数据库失败:', error);
        }
      }
      
      // 应用额外过滤器并排序
      try {
        // 应用额外过滤器
        let filteredResults = allResults;
        
        // 分类过滤
        if (filters.category !== 'all') {
          filteredResults = filteredResults.filter(item => item.category === filters.category);
        }
        
        // 评分过滤
        if (filters.rating !== 'all') {
          const minRating = parseFloat(filters.rating);
          filteredResults = filteredResults.filter(item => 
            item.rating && item.rating >= minRating
          );
        }
        
        // 去重（基于URL和名称）
        const uniqueResults = filteredResults.filter((item, index, self) => {
          // 如果是"全部来源"模式，只通过URL去重，允许不同数据源有相似名称的工具
          if (filters.source === 'all') {
            return index === self.findIndex(t => t.url === item.url);
          } 
          // 如果是特定来源模式，使用URL或名称去重
          else {
            return index === self.findIndex(t => t.url === item.url || t.name === item.name);
          }
        });
        
        // 排序
        if (filters.sortBy === 'name') {
          uniqueResults.sort((a, b) => a.name.localeCompare(b.name));
        } else if (filters.sortBy === 'rating') {
          uniqueResults.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        } else if (filters.sortBy === 'category') {
          uniqueResults.sort((a, b) => a.category.localeCompare(b.category));
        } else {
          // 相关性排序：优先显示热门、推荐、新品
          uniqueResults.sort((a, b) => {
            const aScore = (a.isHot ? 3 : 0) + (a.isFeatured ? 2 : 0) + (a.isNew ? 1 : 0);
            const bScore = (b.isHot ? 3 : 0) + (b.isFeatured ? 2 : 0) + (b.isNew ? 1 : 0);
            return bScore - aScore;
          });
        }
        
        // 设置搜索结果
        setSearchResults(uniqueResults);
        setTotalResults(uniqueResults.length);
      } catch (error) {
        console.error('处理搜索结果时出错:', error);
        // 如果处理过程出错，至少显示已找到的结果
        setSearchResults(allResults);
        setTotalResults(allResults.length);
      }
    } catch (error) {
      console.error('搜索过程中发生错误:', error);
      setSearchResults([]);
      setTotalResults(0);
    } finally {
      // 确保无论如何都取消加载状态
      setLoading(false);
    }
  };

  // 处理新搜索
  const handleSearch = (value: string) => {
    const newQuery = value.trim();
    if (newQuery) {
      navigate(`/search?q=${encodeURIComponent(newQuery)}`);
    }
  };

  // 处理HeroBanner的搜索变化
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
  };

  // 处理热门标签点击
  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    handleSearch(tag);
  };

  // 分类选项（整合所有数据源的分类）
  const categoryOptions = [
    { value: 'all', label: '全部分类' },
    { value: 'ai-huihua', label: 'AI绘画' },
    { value: 'ai-xiezuo', label: 'AI写作' },
    { value: 'ai-shipin', label: 'AI视频' },
    { value: 'ai-yuyin', label: 'AI语音' },
    { value: 'ai-biancheng', label: 'AI编程' },
    { value: 'ui-design', label: 'UI设计' },
    { value: 'icons', label: '图标素材' },
    { value: 'images', label: '图片素材' },
    { value: 'fonts', label: '字体资源' },
    { value: 'colors', label: '配色方案' },
    { value: 'inspiration', label: '设计灵感' },
    { value: 'tools', label: '设计工具' }
  ];

  // 排序选项
  const sortOptions = [
    { value: 'relevance', label: '相关性' },
    { value: 'rating', label: '评分' },
    { value: 'name', label: '名称' },
    { value: 'category', label: '分类' }
  ];

  // 评分选项
  const ratingOptions = [
    { value: 'all', label: '全部评分' },
    { value: '4', label: '4星以上' },
    { value: '3.5', label: '3.5星以上' },
    { value: '3', label: '3星以上' }
  ];

  // 数据源选项
  const sourceOptions = [
    { value: 'all', label: '全部来源' },
    { value: 'ai', label: 'AI工具' },
    { value: 'design', label: '设计资源' },
    { value: 'uiux', label: 'UI/UX工具' },
    { value: '3d', label: '3D工具' },
    { value: 'interior', label: '室内设计' },
    { value: 'ecommerce', label: '电商工具' },
    { value: 'font', label: '字体工具' }
  ];

  return (
    <div className="search-page" style={{ '--bg-image': `url(${bgImage})` } as React.CSSProperties}>
      {/* 使用HeroBanner组件 */}
      <HeroBanner
        pageType="search"
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        hotTags={hotTags}
        onTagClick={handleTagClick}
        searchPlaceholder="搜索AI工具、UI/UX资源、设计资源..."
        searchPageType="all"
        showStats={true}
      />

      {/* 主要内容区域 */}
      <div className="search-content">
        {/* 搜索统计 */}
        {totalResults > 0 && (
          <div className="search-stats">
            {searchQuery ? (
              <>
                <h2>"{searchQuery}" 的搜索结果</h2>
                <p>找到 <strong>{totalResults}</strong> 个相关资源</p>
              </>
            ) : (
              <>
                <h2>热门推荐</h2>
                <p>为您精选 <strong>{totalResults}</strong> 个优质资源</p>
              </>
            )}
          </div>
        )}

        {/* 过滤器区域 */}
        <div className="search-filters">
          <div className="filter-group">
            <span className="filter-label">分类：</span>
            <select
              className="filter-select"
              value={filters.category}
              onChange={(e) => {
                setFilters(prev => ({ ...prev, category: e.target.value }));
                if (searchQuery) {
                  performSearch(searchQuery);
                }
              }}
            >
              {categoryOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-label">排序：</span>
            <select
              className="filter-select"
              value={filters.sortBy}
              onChange={(e) => {
                setFilters(prev => ({ ...prev, sortBy: e.target.value }));
                if (searchQuery) {
                  performSearch(searchQuery);
                }
              }}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-label">评分：</span>
            <select
              className="filter-select"
              value={filters.rating}
              onChange={(e) => {
                setFilters(prev => ({ ...prev, rating: e.target.value }));
                if (searchQuery) {
                  performSearch(searchQuery);
                }
              }}
            >
              {ratingOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <span className="filter-label">来源：</span>
            <select
              className="filter-select"
              value={filters.source}
              onChange={(e) => {
                setFilters(prev => ({ ...prev, source: e.target.value }));
                if (searchQuery) {
                  performSearch(searchQuery);
                }
              }}
            >
              {sourceOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 当前搜索关键词显示 */}
        {searchQuery && (
          <div className="current-search-query">
            <span className="search-label">当前搜索：</span>
            <span className="search-keyword">"{searchQuery}"</span>
            <button 
              className="clear-search" 
              onClick={() => {
                setSearchQuery('');
                navigate('/search');
              }}
              title="清除搜索"
            >
              ✕
            </button>
          </div>
        )}

        {/* 搜索结果 */}
        {loading ? (
          <div className="search-loading">
            <div className="loading"></div>
            <p>正在搜索中...</p>
          </div>
        ) : searchResults.length > 0 ? (
          <div className="search-results">
            {searchResults.map(result => (
              <div
                key={`${result.source}-${result.id}`}
                className="search-result-card"
                onClick={() => window.open(result.url, '_blank')}
              >
                {/* 左侧图标区域 */}
                <div className="search-result-icon">
                  <img 
                    src={`https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=${result.url}`}
                    alt={result.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="search-result-icon-fallback" style={{ display: 'none' }}>
                    {result.name.charAt(0).toUpperCase()}
                  </div>
                </div>

                {/* 右侧内容区域 */}
                <div className="search-result-content">
                  <div className="search-result-header">
                    <div className="search-result-info">
                      <h3 className="search-result-title">{result.name}</h3>
                      <p className="search-result-description">
                        {result.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="search-result-meta">
                    <div className="search-result-tags">
                      {result.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="result-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : searchQuery ? (
          <div className="search-empty">
            <h3 className="search-empty-title">未找到相关结果</h3>
            <p className="search-empty-description">
              尝试使用不同的关键词或调整筛选条件
            </p>
            <div className="search-suggestions">
              <p>推荐搜索：</p>
              <div className="suggestion-tags">
                {hotTags.slice(0, 4).map((tag, index) => (
                  <button
                    key={index}
                    className="suggestion-tag"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="search-welcome">
            <h3 className="search-welcome-title">开始搜索</h3>
            <p className="search-welcome-description">
              从 {allDataCount.toLocaleString()} 个优质资源中找到你需要的工具和素材
            </p>
            <div className="search-features">
              <div className="feature-item">
                <span className="feature-icon">🤖</span>
                <span>AI工具</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🎨</span>
                <span>设计资源</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔥</span>
                <span>热门推荐</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⭐</span>
                <span>精选优质</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage; 