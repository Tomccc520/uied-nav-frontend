/**
 * @file useNavigation.ts
 * @description 通用导航页面Hook - 处理搜索、图标获取、数据管理等共通逻辑
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getCachedSmartFavicon, getCravatarFavicon } from '../utils/faviconUtils';
import { type NavItem } from '../components/CategorySidebar';
import { NavMenuType } from "../types";

// 通用工具接口
export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon?: string;
  iconUrl?: string; // 自定义图标URL，优先级高于自动获取的icon
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
  isHot?: boolean;
  tags: string[];
}

// 统计数据接口
export interface Stats {
  totalWebsites: number;
  totalCategories: number;
  updateDate: string;
}

// 数据服务接口
export interface DataService {
  getNavItems(): NavItem[];
  getWebsites(params?: {
    category?: string;
    featured?: boolean;
    hot?: boolean;
    limit?: number;
  }): Tool[];
  searchWebsites(keyword: string, limit?: number): Tool[];
  getStats(): Stats;
}

// Hook配置接口
export interface NavigationConfig {
  navType: NavMenuType;
  dataService: DataService;
  searchPageType?: string; // 搜索页面类型参数
}

// 工具卡片数据接口
export interface ToolCardData {
  key: string;
  tool: Tool;
  onClick: () => void;
}

// Hook返回值接口
export interface NavigationHookReturn {
  // 状态
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  searchResults: Tool[];
  isSearchMode: boolean;
  navItems: NavItem[];
  activeCategory: string;
  setActiveCategory: React.Dispatch<React.SetStateAction<string>>;
  stats: Stats;
  loading: boolean;
  
  // 方法
  handleSearch: (value: string) => Promise<void>;
  handleKeyPress: (e: React.KeyboardEvent) => void;
  handleNavItemClick: (itemId: string) => void;
  handleExitSearchMode: () => void;
  handleWebsiteClick: (tool: Tool) => void;
  handleTagClick: (tag: string) => void;
  getFaviconUrl: (url: string, size?: number) => string;
  renderToolCards: (tools: Tool[]) => ToolCardData[];
  initializeData: () => Promise<void>;
}

/**
 * 通用导航页面Hook
 * @param config Hook配置
 * @returns Hook返回值
 */
export const useNavigation = (config: NavigationConfig): NavigationHookReturn => {
  const navigate = useNavigate();
  const location = useLocation(); // 获取当前位置，包括hash
  const { navType, dataService, searchPageType = '' } = config;
  
  // 使用ref存储dataService避免依赖问题
  const dataServiceRef = useRef(dataService);
  dataServiceRef.current = dataService;
  
  // 状态管理
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState<Tool[]>([]);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [stats, setStats] = useState<Stats>({
    totalWebsites: 0,
    totalCategories: 0,
    updateDate: new Date().toISOString().split('T')[0]
  });
  const [loading, setLoading] = useState(false);
  
  // 存储导航项ID和页面元素ID的映射关系
  const navItemToElementIdMap = useRef<Record<string, string>>({});

  /**
   * 从URL hash或数据属性获取当前活动类别ID
   */
  const getCategoryIdFromHash = useCallback(() => {
    if (!location.hash || location.hash === '#') return '';
    
    const hash = location.hash.substring(1); // 去掉#符号
    
    // 尝试从hash中获取类别ID
    // 情况1: hash格式为 category-{navType}-{itemId}
    const hashMatch = hash.match(new RegExp(`category-${navType}-(.+)`));
    if (hashMatch && hashMatch[1]) {
      return hashMatch[1];
    }
    
    // 情况2: hash格式为 category-{itemId}
    const simpleHashMatch = hash.match(/category-(.+)/);
    if (simpleHashMatch && simpleHashMatch[1]) {
      return simpleHashMatch[1];
    }
    
    // 情况3: hash格式为 category-home-{itemId}
    const homeHashMatch = hash.match(/category-home-(.+)/);
    if (homeHashMatch && homeHashMatch[1]) {
      return homeHashMatch[1];
    }
    
    // 情况4: 直接是itemId
    const directElement = document.getElementById(hash);
    if (directElement && directElement.getAttribute('data-category-id')) {
      return directElement.getAttribute('data-category-id') || '';
    }
    
    // 查找具有data-category-id属性的元素
    const elements = document.querySelectorAll(`[data-category-id]`);
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      const id = element.getAttribute('data-category-id');
      const elementId = element.id;
      
      if (elementId === hash && id) {
        return id;
      }
    }
    
    return '';
  }, [location.hash, navType]);

  /**
   * 获取网址图标的工具函数
   */
  const getFaviconUrl = useCallback((url: string, size: number = 32): string => {
    try {
      return getCravatarFavicon(url);
    } catch (error) {
      console.error('获取favicon失败:', error);
      
      try {
        const domain = new URL(url).hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;
      } catch (fallbackError) {
        console.error('降级获取favicon失败:', fallbackError);
        return '';
      }
    }
  }, []);

  /**
   * 批量更新网址图标
   */
  const updateWebsiteIcons = useCallback(async (websites: Tool[]): Promise<Tool[]> => {
    const updatedWebsites = await Promise.allSettled(
      websites.map(async (site) => {
        if (site.icon) {
          return site;
        }
        
        try {
          const iconUrl = await getCachedSmartFavicon(site.url, 32);
          return {
            ...site,
            icon: iconUrl || getFaviconUrl(site.url, 32)
          };
        } catch (error) {
          console.warn(`获取图标失败: ${site.name}`, error);
          return {
            ...site,
            icon: getFaviconUrl(site.url, 32)
          };
        }
      })
    );

    return updatedWebsites
      .filter((result): result is PromiseFulfilledResult<Tool> => result.status === 'fulfilled')
      .map(result => result.value);
  }, [getFaviconUrl]);

  /**
   * 初始化页面数据
   */
  const initializeData = useCallback(async () => {
    try {
      setLoading(true);
      
      const statsData = dataServiceRef.current.getStats();
      const navItemsData = dataServiceRef.current.getNavItems();

      setStats(statsData);
      setNavItems(navItemsData);
      
      // 构建导航项和元素ID的映射
      const idMap: Record<string, string> = {};
      navItemsData.forEach(item => {
        // 尝试不同的ID组合
        const possibleIds = [
          `category-${item.id}`, // 优先使用简单格式，例如 category-common-recommendations
          `category-${config.navType}-${item.id}`, // 例如 category-uiux-common-recommendations
          `category-home-${item.id}` // 针对首页的格式
        ];
        
        for (const id of possibleIds) {
          const element = document.getElementById(id);
          if (element) {
            idMap[item.id] = id;
            break;
          }
        }
        
        // 如果找不到ID，尝试通过data-category-id查找
        if (!idMap[item.id]) {
          const elements = document.querySelectorAll(`[data-category-id="${item.id}"]`);
          if (elements.length > 0) {
            const element = elements[0] as HTMLElement;
            if (element.id) {
              idMap[item.id] = element.id;
            }
          }
        }
      });
      
      navItemToElementIdMap.current = idMap;
      
      // 尝试从URL hash获取初始活动类别
      const hashCategory = getCategoryIdFromHash();
      if (hashCategory && navItemsData.some(item => item.id === hashCategory)) {
        setActiveCategory(hashCategory);
      } else if (navItemsData.length > 0) {
        setActiveCategory(navItemsData[0].id);
      }
      
    } catch (error) {
      console.error('初始化数据失败:', error);
    } finally {
      setLoading(false);
    }
  }, [getCategoryIdFromHash, config.navType]);

  /**
   * 处理搜索
   */
  const handleSearch = useCallback(async (value: string) => {
    if (value.trim()) {
      try {
        const results = dataServiceRef.current.searchWebsites(value, 50);
        const resultsWithIcons = await updateWebsiteIcons(results);
        setSearchResults(resultsWithIcons);
        setIsSearchMode(true);
        setActiveCategory('search-results');
        
        // 搜索结果为空时的处理可以在组件层面决定
      } catch (error) {
        console.error('搜索失败:', error);
      }
    } else {
      setIsSearchMode(false);
      setSearchResults([]);
      if (navItems.length > 0) {
        setActiveCategory(navItems[0].id);
      }
    }
  }, [updateWebsiteIcons, navItems]);

  /**
   * 处理搜索框回车
   */
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch(searchValue);
    }
  }, [searchValue, handleSearch]);

  /**
   * 处理导航项点击
   */
  const handleNavItemClick = useCallback((itemId: string) => {
    // 如果是跳转到搜索页面
    if (itemId === 'search-page') {
      let searchUrl = `/search?q=${encodeURIComponent(searchValue)}`;
      if (searchPageType) {
        searchUrl += `&type=${searchPageType}`;
      }
      navigate(searchUrl);
      return;
    }
    
    setActiveCategory(itemId);
    
    // 首先检查是否有已经缓存的元素ID映射
    let targetElementId = navItemToElementIdMap.current[itemId];
    let targetElement = targetElementId ? document.getElementById(targetElementId) : null;
    
    // 如果没有缓存，尝试查找
    if (!targetElement) {
    // 根据当前导航类型构建可能的目标元素ID
    const possibleIds = [
        `category-${itemId}`, // 优先使用简单格式，例如 category-common-recommendations
      `category-${config.navType}-${itemId}`, // 例如 category-uiux-common-recommendations
        `category-home-${itemId}` // 针对首页的格式
    ];
    
    // 尝试所有可能的ID
    for (const id of possibleIds) {
      const element = document.getElementById(id);
      if (element) {
        targetElement = element;
          targetElementId = id;
          navItemToElementIdMap.current[itemId] = id; // 缓存找到的ID
        break;
      }
    }
    
    // 如果找不到特定页面的锚点，还可以尝试查找带data-category-id属性的元素
    if (!targetElement) {
      const elements = document.querySelectorAll(`[data-category-id="${itemId}"]`);
      if (elements.length > 0) {
        targetElement = elements[0] as HTMLElement;
          if (targetElement.id) {
            targetElementId = targetElement.id;
            navItemToElementIdMap.current[itemId] = targetElementId; // 缓存找到的ID
          }
        }
      }
    }
    
    if (targetElement) {
      // 设置URL hash，但不触发额外的滚动
      if (targetElementId && !location.hash.includes(targetElementId)) {
        // 使用replaceState更新URL，但不添加历史记录
        window.history.replaceState(
          null, 
          '', 
          `${location.pathname}${location.search}#${targetElementId}`
        );
      }
      
      // 计算更精确的滚动偏移量
      const navbarHeight = 80; // 顶部导航栏高度
      const sidebarHeaderHeight = 120; // 侧边栏头部高度
      const extraPadding = 20; // 额外间距
      
      // 总偏移量 = 导航栏 + 侧边栏头部 + 额外间距
      const totalOffset = navbarHeight + sidebarHeaderHeight + extraPadding;
      
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      
      // 使用RAF确保滚动在浏览器绘制帧中平滑执行
      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetTop - totalOffset,
          behavior: 'smooth'
        });
      });
    }
  }, [navigate, searchValue, searchPageType, config.navType, location.hash, location.pathname, location.search]);

  /**
   * 处理退出搜索模式
   */
  const handleExitSearchMode = useCallback(() => {
    setIsSearchMode(false);
    setSearchResults([]);
    setSearchValue('');
    setActiveCategory(navItems.length > 0 ? navItems[0].id : '');
  }, [navItems]);

  /**
   * 处理网址点击
   */
  const handleWebsiteClick = useCallback((tool: Tool) => {
    console.log('点击工具:', tool.name);
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  }, []);

  /**
   * 处理热门标签点击
   */
  const handleTagClick = useCallback((tag: string) => {
    setSearchValue(tag);
    handleSearch(tag);
  }, [handleSearch]);

  /**
   * 渲染工具卡片数据
   */
  const renderToolCards = useCallback((tools: Tool[]): ToolCardData[] => {
    const toolsWithIcons = tools.map(tool => ({
      ...tool,
      icon: tool.icon || getFaviconUrl(tool.url, 32)
    }));
    
    // 返回处理后的数据，让组件自己渲染
    return toolsWithIcons.map(tool => ({
      key: tool.id,
      tool,
      onClick: () => handleWebsiteClick(tool)
    }));
  }, [handleWebsiteClick, getFaviconUrl]);

  // 监听URL hash变化，更新当前选中的导航项
  useEffect(() => {
    if (isSearchMode) return; // 搜索模式下不处理hash变化
    
    const hashCategory = getCategoryIdFromHash();
    if (hashCategory && navItems.some(item => item.id === hashCategory) && hashCategory !== activeCategory) {
      setActiveCategory(hashCategory);
    }
  }, [location.hash, navItems, isSearchMode, getCategoryIdFromHash, activeCategory]);

  // 初始化数据
  useEffect(() => {
    initializeData();
  }, [initializeData]);

  return {
    // 状态
    searchValue,
    setSearchValue,
    searchResults,
    isSearchMode,
    navItems,
    activeCategory,
    setActiveCategory,
    stats,
    loading,
    
    // 方法
    handleSearch,
    handleKeyPress,
    handleNavItemClick,
    handleExitSearchMode,
    handleWebsiteClick,
    handleTagClick,
    getFaviconUrl,
    renderToolCards,
    initializeData
  };
}; 