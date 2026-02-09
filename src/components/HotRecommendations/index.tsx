/**
 * @file index.tsx
 * @description 推荐热门组件 - 展示最受欢迎的AI工具，支持子分类切换
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.4.0 - 移除静态数据依赖，完全使用 API
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useHotRecommendations, HotRecommendation } from '../../hooks/useHotRecommendations';
import { Tool } from '../../hooks/useNavigation';
import ToolCard from '../ToolCard';
import { ToolGridSkeleton } from '../Skeleton';
import { useFrontendConfig } from '../../hooks/useFrontendConfig';
import { usePermalinkConfig, generateWebsiteUrl } from '../../hooks/usePermalinkConfig';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './index.css';
import './index.mobile.css';
import { debugLog, FrontendDebugHelper } from '../../utils/debugHelper';

// 子分类类型
interface SubCategory {
  id: string;
  name: string;
  count?: number;
  description?: string;
}

// 自定义数据源接口
interface CustomDataSource {
  getBySubCategory?: (subCategoryId: string, limit?: number) => any[];
  getSubCategories?: (categoryId: string) => any[];
  getSubCategoryStats?: (categoryId: string) => any;
  getHotTools?: (limit?: number) => any[];
  getFeaturedTools?: (limit?: number) => any[];
}

interface HotRecommendationsProps {
  /** 显示的工具数量 */
  limit?: number;
  /** 是否显示标题 */
  showTitle?: boolean;
  /** 自定义标题 */
  title?: string;
  /** 是否显示查看更多按钮 */
  showMoreButton?: boolean;
  /** 点击查看更多的回调 */
  onSeeMore?: () => void;
  /** 指定分类ID，如果指定则只显示该分类的子分类 */
  categoryFilter?: string;
  /** 是否启用子分类切换功能 */
  enableSubCategories?: boolean;
  /** 默认选中的子分类 */
  defaultSubCategory?: string;
  /** 自定义数据源 */
  customDataSource?: CustomDataSource;
  /** 是否使用 API 数据（默认 true） */
  useApi?: boolean;
  /** 页面 slug（用于 API 筛选） */
  pageSlug?: string;
  /** 位置筛选：hot/featured/ad */
  position?: 'hot' | 'featured' | 'ad';
  /** 网站点击回调 - 用于显示跳转弹窗 */
  onWebsiteClick?: (tool: Tool) => void;
}

/**
 * 推荐热门组件
 */
const HotRecommendations: React.FC<HotRecommendationsProps> = ({
  limit = 8,
  showTitle = true,
  title = '热门推荐',
  showMoreButton = false,
  onSeeMore,
  categoryFilter,
  enableSubCategories = false,
  defaultSubCategory,
  customDataSource,
  useApi = true, // 默认使用 API
  pageSlug,
  position = 'hot',
  onWebsiteClick
}) => {
  // 获取前端全局配置（直达箭头等）
  const { config: frontendConfig } = useFrontendConfig();
  const { config: permalinkConfig } = usePermalinkConfig();
  const navigate = useNavigate();
  const showDirectArrow = frontendConfig?.pageGlobalConfig?.showDirectArrow ?? false;
  const websiteClickMode = frontendConfig?.pageGlobalConfig?.websiteClickMode ?? 'detail';
  const directArrowNewWindow = frontendConfig?.pageGlobalConfig?.directArrowNewWindow ?? true;
  // 根据模式决定箭头文案和方向
  const arrowLabel = websiteClickMode === 'directExternal' ? '查看详情' : '直达网站';
  const arrowIsExternal = websiteClickMode !== 'directExternal';

  // 直达箭头点击回调 - 与 useNavigation.ts 逻辑保持一致
  const handleDirectVisit = useCallback((tool: Tool, e: React.MouseEvent) => {
    if (websiteClickMode === 'directExternal') {
      // 直达网站模式下，箭头跳转到详情页
      const detailUrl = generateWebsiteUrl(permalinkConfig, { 
        id: tool.id, 
        slug: (tool as any).slug 
      });
      if (directArrowNewWindow) {
        window.open(detailUrl, '_blank');
      } else {
        navigate(detailUrl);
        window.scrollTo(0, 0);
      }
    } else {
      // 其他模式下，箭头直达外部网址
      if (directArrowNewWindow) {
        window.open(tool.url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = tool.url;
      }
    }
  }, [websiteClickMode, directArrowNewWindow, permalinkConfig, navigate]);

  // 热门推荐点击行为配置（独立配置）
  const [hotRecommendationClickMode, setHotRecommendationClickMode] = useState<'direct' | 'modal'>('direct');
  
  // 获取热门推荐点击行为配置
  useEffect(() => {
    const fetchClickConfig = async () => {
      try {
        const res = await api.get('/settings/hot-recommendation-click');
        const data = res.data.data || res.data;
        setHotRecommendationClickMode(data.clickMode || 'direct');
      } catch (error) {
        // 默认直接跳转
        setHotRecommendationClickMode('direct');
      }
    };
    fetchClickConfig();
  }, []);
  
  // 判断是否应该使用 API（没有自定义数据源时使用 API）
  const shouldUseApi = useApi && !customDataSource;
  
  // 从 API 获取热门推荐数据 - 获取所有 position 的数据
  const { items: apiItems, loading: apiLoading, recordClick, positionStats } = useHotRecommendations({
    pageSlug,
    position: 'all', // 获取所有位置的数据
    limit: 100,
    enabled: shouldUseApi
  });
  
  // 获取子分类列表 - 如果使用 API，则使用 position 作为子分类
  const subCategories: SubCategory[] = useMemo(() => {
    if (!enableSubCategories) return [];
    
    // 如果使用 API 数据，使用 positionStats 作为子分类
    if (shouldUseApi && apiItems.length > 0) {
      return positionStats.map(stat => ({
        id: stat.position,
        name: stat.name,
        count: stat.count
      }));
    }
    
    // 如果有自定义数据源，使用自定义的获取方法
    if (customDataSource?.getSubCategories && categoryFilter) {
      const subCats = customDataSource.getSubCategories(categoryFilter);
      if (process.env.NODE_ENV === 'development') {
        debugLog.pagination(`[HotRecommendations] 获取子分类 - categoryFilter: ${categoryFilter}, 子分类数量: ${subCats.length}`);
      }
      return subCats;
    }
    
    return [];
  }, [enableSubCategories, shouldUseApi, apiItems, positionStats, customDataSource, categoryFilter]);

  // 当前选中的子分类
  const [activeSubCategory, setActiveSubCategory] = useState<string>('');
  
  // 当前选中的位置（用于 API 数据）- 初始为空，等待数据加载后设置
  const [activePosition, setActivePosition] = useState<string>('');
  
  // 分页状态
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 12; // 每页显示12个工具
  
  // 初始化标记
  const [initialized, setInitialized] = useState(false);

  // 当子分类数据加载后，设置默认选中的子分类（只在首次加载时）
  React.useEffect(() => {
    if (!initialized && enableSubCategories && subCategories.length > 0) {
      // 如果使用 API，默认选中第一个 position
      if (shouldUseApi && apiItems.length > 0) {
        const firstPosition = subCategories[0]?.id || 'hot';
        setActivePosition(firstPosition);
        setActiveSubCategory(firstPosition);
      } else {
        const defaultSub = defaultSubCategory || subCategories[0]?.id || '';
        setActiveSubCategory(defaultSub);
      }
      setCurrentPage(1);
      setInitialized(true);
    }
  }, [initialized, enableSubCategories, subCategories, defaultSubCategory, shouldUseApi, apiItems]);

  // 获取所有工具列表（不分页）
  const allTools: Tool[] = useMemo(() => {
    if (process.env.NODE_ENV === 'development') {
      debugLog.pagination(`[HotRecommendations] allTools计算 - shouldUseApi: ${shouldUseApi}, apiItems: ${apiItems.length}, activePosition: ${activePosition}`);
    }
    
    // 如果有自定义数据源，优先使用
    if (customDataSource) {
      if (enableSubCategories && activeSubCategory && customDataSource.getBySubCategory) {
        const tools = customDataSource.getBySubCategory(activeSubCategory, 0);
        return tools;
      }
      if (enableSubCategories && !activeSubCategory && customDataSource.getSubCategories && customDataSource.getBySubCategory && categoryFilter) {
        const subCats = customDataSource.getSubCategories(categoryFilter);
        if (subCats && subCats.length > 0) {
          return customDataSource.getBySubCategory(subCats[0].id, 0);
        }
      }
      if (customDataSource.getHotTools) {
        return customDataSource.getHotTools(limit);
      }
    }
    
    // 使用 API 数据
    if (shouldUseApi && apiItems.length > 0) {
      // 如果启用子分类，按 position 筛选
      let filteredItems: HotRecommendation[] = apiItems;
      if (enableSubCategories) {
        // 确定要使用的 position
        let targetPosition = activePosition;
        
        // 如果没有选中的 position，使用第一个有数据的 position
        if (!targetPosition && positionStats.length > 0) {
          targetPosition = positionStats[0]?.position || 'hot';
        }
        
        // 如果还是没有，默认使用 'hot'
        if (!targetPosition) {
          targetPosition = 'hot';
        }
        
        // 按 position 筛选
        filteredItems = apiItems.filter(item => item.position === targetPosition);
        if (process.env.NODE_ENV === 'development') {
          debugLog.pagination(`[HotRecommendations] 按 position 筛选: ${targetPosition}, 筛选后数量: ${filteredItems.length}, 总数据: ${apiItems.length}`);
        }
      }
      
      const tools: Tool[] = filteredItems.map(item => ({
        id: String(item.id),
        name: item.name,
        description: item.description,
        url: item.url,
        iconUrl: item.iconUrl,
        category: 'hot-recommendations',
        tags: [],
        isHot: item.position === 'hot',
        isFeatured: item.position === 'featured',
        isNew: false
      }));
      return limit > 0 && !enableSubCategories ? tools.slice(0, limit) : tools;
    }
    
    return [];
  }, [shouldUseApi, apiItems, enableSubCategories, activeSubCategory, activePosition, categoryFilter, limit, customDataSource, positionStats]);

  // 计算分页数据
  const paginationData = useMemo(() => {
    const totalItems = allTools.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const currentPageTools = allTools.slice(startIndex, endIndex);
    
    const data = {
      totalItems,
      totalPages,
      currentPageTools,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1
    };
    
    // 调试分页信息（仅开发环境）
    debugLog.pagination('分页数据计算:', {
      totalItems,
      totalPages,
      currentPage,
      pageSize,
      categoryFilter,
      activeSubCategory,
      hasNextPage: data.hasNextPage,
      hasPrevPage: data.hasPrevPage
    });
    
    // 详细分页调试
    FrontendDebugHelper.debugPagination({
      totalItems,
      totalPages,
      currentPage,
      pageSize,
      categoryId: categoryFilter,
      subCategoryId: activeSubCategory
    });
    
    return data;
  }, [allTools, currentPage, pageSize, categoryFilter, activeSubCategory]);

  // 处理子分类切换
  const handleSubCategoryChange = (subCategoryId: string) => {
    debugLog.pagination('切换子分类:', subCategoryId);
    setActiveSubCategory(subCategoryId);
    // 如果使用 API，同时更新 activePosition
    if (shouldUseApi) {
      setActivePosition(subCategoryId);
    }
    setCurrentPage(1); // 切换子分类时重置到第一页
  };

  // 处理分页
  const handlePrevPage = () => {
    if (paginationData.hasPrevPage) {
      debugLog.pagination('上一页:', currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (paginationData.hasNextPage) {
      debugLog.pagination('下一页:', currentPage + 1);
      setCurrentPage(currentPage + 1);
    }
  };

  if (allTools.length === 0) {
    // 如果正在加载，显示骨架屏
    if (shouldUseApi && apiLoading) {
      return (
        <section 
          id="hot-recommendations-section" 
          className={`hot-recommendations ${showMoreButton ? 'show-more-button' : ''} ${enableSubCategories ? 'with-sub-categories' : ''}`}
        >
          {showTitle && (
            <div className="hot-recommendations-header">
              <h2 className="hot-recommendations-title">
                {title}
              </h2>
            </div>
          )}
          
          {/* 骨架屏加载状态 */}
          <ToolGridSkeleton count={limit > 0 ? Math.min(limit, 8) : 8} />
        </section>
      );
    }
    
    return (
      <section 
        id="hot-recommendations-section" 
        className={`hot-recommendations ${showMoreButton ? 'show-more-button' : ''} ${enableSubCategories ? 'with-sub-categories' : ''}`}
      >
        {showTitle && (
          <div className="hot-recommendations-header">
            <h2 className="hot-recommendations-title">
              {title}
            </h2>
          </div>
        )}

        {/* 子分类切换标签 - 即使没有数据也显示标签 */}
        {enableSubCategories && subCategories.length > 0 && (
          <div className="hot-recommendations-subcategories">
            <div className="subcategory-header">
              <div className="subcategory-tabs">
                {subCategories.map((subCat: SubCategory) => (
                  <button
                    key={subCat.id}
                    className={`subcategory-tab ${activeSubCategory === subCat.id ? 'active' : ''}`}
                    onClick={() => handleSubCategoryChange(subCat.id)}
                    title={subCat.description}
                  >
                    <span className="tab-name">{subCat.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* 空数据提示 */}
        <div className="hot-recommendations-empty">
          <h3>暂无数据</h3>
          <p>该分类下暂时没有工具或资源，请尝试其他分类。</p>
        </div>
      </section>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSeeMore = () => {
    if (onSeeMore) {
      onSeeMore();
    } else {
      // 默认跳转到AI工具页面
      window.location.href = '/ai';
    }
  };

  return (
    <section 
      id="hot-recommendations-section" 
      className={`hot-recommendations ${showMoreButton ? 'show-more-button' : ''} ${enableSubCategories ? 'with-sub-categories' : ''}`}
    >
      {showTitle && (
        <div className="hot-recommendations-header">
          <h2 className="hot-recommendations-title">
            {title}
          </h2>
        </div>
      )}

      {/* 子分类切换标签 */}
      {enableSubCategories && subCategories.length > 0 && (
        <div className="hot-recommendations-subcategories">
          <div className="subcategory-header">
            <div className="subcategory-tabs">
              {subCategories.map((subCat: SubCategory) => (
                <button
                  key={subCat.id}
                  className={`subcategory-tab ${activeSubCategory === subCat.id ? 'active' : ''}`}
                  onClick={() => handleSubCategoryChange(subCat.id)}
                  title={subCat.description}
                >
                  <span className="tab-name">{subCat.name}</span>
                </button>
              ))}
            </div>
            
            {/* 分页按钮 */}
            {paginationData.totalPages > 1 && (
              <div className="pagination-controls">
                <button
                  className={`pagination-btn prev ${!paginationData.hasPrevPage ? 'disabled' : ''}`}
                  onClick={handlePrevPage}
                  disabled={!paginationData.hasPrevPage}
                  title="上一页"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <span className="pagination-info">
                  {currentPage} / {paginationData.totalPages}
                </span>
                <button
                  className={`pagination-btn next ${!paginationData.hasNextPage ? 'disabled' : ''}`}
                  onClick={handleNextPage}
                  disabled={!paginationData.hasNextPage}
                  title="下一页"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="hot-recommendations-grid">
        {paginationData.currentPageTools.map((tool: Tool, index: number) => (
          <ToolCard 
            key={tool.id} 
            tool={tool}
            showDirectArrow={showDirectArrow}
            onDirectVisit={handleDirectVisit}
            arrowLabel={arrowLabel}
            arrowIsExternal={arrowIsExternal}
            directArrowNewWindow={directArrowNewWindow}
            onClick={() => {
              // 记录点击（只有当使用 API 数据且没有自定义数据源时才记录）
              if (shouldUseApi && tool.id) {
                recordClick(tool.id);
              }
              
              // 如果有外部点击回调（由页面传入），优先使用它
              // 这样页面可以统一控制跳转行为（详情页/弹窗/直接跳转）
              if (onWebsiteClick) {
                onWebsiteClick(tool);
                return;
              }
              
              // 没有外部回调时，根据热门推荐点击模式配置决定行为
              switch (hotRecommendationClickMode) {
                case 'modal':
                  // 显示跳转确认弹窗（无回调时直接打开）
                  window.open(tool.url, '_blank');
                  break;
                case 'direct':
                default:
                  // 直接打开外部链接
                  window.open(tool.url, '_blank');
                  break;
              }
            }}
            index={index}
          />
        ))}
      </div>


    </section>
  );
};

export default HotRecommendations; 