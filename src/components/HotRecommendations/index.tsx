/**
 * @file index.tsx
 * @description 推荐热门组件 - 展示最受欢迎的AI工具，支持子分类切换
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.1.0 - 增加子分类支持
 */

import React, { useState, useMemo } from 'react';
import { 
  getHotRecommendations, 
  getHotRecommendationsByCategory, 
  getHotRecommendationsBySubCategory,
  getSubCategoriesByCategory 
} from '../../data/hotRecommendations';
import ToolCard from '../ToolCard';
import './index.css';
import './index.mobile.css';
import { debugLog, FrontendDebugHelper } from '../../utils/debugHelper';

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
  customDataSource
}) => {
  // 获取子分类列表
  const subCategories = useMemo(() => {
    if (!enableSubCategories || !categoryFilter) return [];
    
    // 如果有自定义数据源，使用自定义的获取方法
    if (customDataSource?.getSubCategories) {
      return customDataSource.getSubCategories(categoryFilter);
    }
    
    // 否则使用默认的热门推荐数据源
    return getSubCategoriesByCategory(categoryFilter);
  }, [enableSubCategories, categoryFilter, customDataSource]);

  // 当前选中的子分类
  const [activeSubCategory, setActiveSubCategory] = useState<string>('');
  
  // 分页状态
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 12; // 每页显示12个工具

  // 当子分类数据加载后，设置默认选中的子分类
  React.useEffect(() => {
    if (enableSubCategories && subCategories.length > 0) {
      const defaultSub = defaultSubCategory || subCategories[0]?.id || '';
      setActiveSubCategory(defaultSub);
      setCurrentPage(1); // 重置到第一页
    } else {
      setActiveSubCategory('');
      setCurrentPage(1);
    }
  }, [enableSubCategories, subCategories, defaultSubCategory]);

  // 获取所有工具列表（不分页）
  const allTools = useMemo(() => {
    // 如果启用子分类且有选中的子分类
    if (enableSubCategories && activeSubCategory) {
      // 如果有自定义数据源，使用自定义的获取方法
      if (customDataSource?.getBySubCategory) {
        return customDataSource.getBySubCategory(activeSubCategory, 0); // 获取所有数据
      }
      return getHotRecommendationsBySubCategory(activeSubCategory, 0); // 获取所有数据
    }
    // 如果有分类过滤
    if (categoryFilter) {
      return getHotRecommendationsByCategory(categoryFilter, limit);
    }
    // 如果有自定义热门工具数据源，优先使用
    if (customDataSource?.getHotTools) {
      return customDataSource.getHotTools(limit);
    }
    // 默认获取所有热门推荐
    return getHotRecommendations(limit);
  }, [enableSubCategories, activeSubCategory, categoryFilter, limit, customDataSource]);

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
                {subCategories.map((subCat) => (
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
              {subCategories.map((subCat) => (
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
        {paginationData.currentPageTools.map((tool, index) => (
          <ToolCard 
            key={tool.id} 
            tool={tool}
            onClick={() => window.open(tool.url, '_blank')}
            index={index}
          />
        ))}
      </div>


    </section>
  );
};

export default HotRecommendations; 