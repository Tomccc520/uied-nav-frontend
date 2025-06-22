import { NavMenuType } from "../../types";
/**
 * @file Font/index.tsx
 * @description 字体导航页面 - 字体工具与资源导航
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  DesignIcons, 
  IconTool, 
  IconDigital, 
  IconSystem, 
  IconDesignTeam, 
  IconCarUI 
} from '../../components/UI';
import CategorySidebar, { type NavItem, type SidebarConfig, type NavSwitchItem } from '../../components/CategorySidebar';
import HeroBanner from '../../components/HeroBanner';
import ToolCard from '../../components/ToolCard';
import HotRecommendations from '../../components/HotRecommendations';
import DesignArticleGrid from '../../components/DesignArticleGrid';
import SEO from '../../components/SEO';
import { useNavigation, type Tool, type DataService } from '../../hooks/useNavigation';
import { 
  fontCategories,
  allFontTools,
  getToolsByCategory,
  getHotTools,
  getFeaturedTools,
  searchTools,
  getToolsBySubCategory,
  getSubCategoriesByCategory,
  getSubCategoryStats
} from '../../data/fontToolsDatabase';
import '../../styles/common.css'; // 使用通用页面样式
import './index.css'; // 字体页面特定样式
import './index.mobile.css'; // 引入独立的移动端样式

// 使用public目录下的背景图片，避免部署后路径问题
const bgImage = '/bg.jpg';

// 图标映射
const iconMap: Record<string, React.ComponentType<any>> = {
  'ai': DesignIcons.AI,
  'image': DesignIcons.Image,
  'tutorial': DesignIcons.Tutorial,
  'ui': DesignIcons.UI,
  'inspiration': DesignIcons.Inspiration,
  'material': DesignIcons.Material,
  'font': DesignIcons.Font,
  'tools': IconTool,
  'tool': IconTool,
  'color': DesignIcons.Color,
  'palette': DesignIcons.Color, // 字体搭配使用颜色图标
  'video': DesignIcons.Video,
  'audio': DesignIcons.Audio,
  'code': DesignIcons.Code,
  'web': DesignIcons.Web,
  'mobile': DesignIcons.Mobile,
  'animation': DesignIcons.Animation,
  'community': DesignIcons.Community,
  'specs': DesignIcons.Specs,
  'data': DesignIcons.Data,
  'blog': DesignIcons.Blog,
  'template': DesignIcons.Template,
  'graphic': DesignIcons.Graphic,
  'icons': DesignIcons.Icons,
  'kit': DesignIcons.Kit,
  'prototype': DesignIcons.Prototype,
  '3d': DesignIcons['3D'],
  'brand': DesignIcons.Brand,
  'ecommerce': DesignIcons.Ecommerce,
  'plugin': DesignIcons.Plugin,
  'developer': DesignIcons.Developer,
  'learn': DesignIcons.Learn,
  'photo': DesignIcons.Photo,
  'art': DesignIcons.Art,
  'print': DesignIcons.Print,
  'analytics': DesignIcons.Analytics,
  'visualization': IconDigital,
  'digital': IconDigital,
  'system': IconSystem,
  'designTeam': IconDesignTeam,
  'designteam': IconDesignTeam,
  'carUI': IconCarUI,
  'carui': IconCarUI,
  'resource': DesignIcons.Resource,
  'default': IconTool
};

/**
 * 字体工具数据服务类 - 实现DataService接口
 */
class FontDataService implements DataService {
  /**
   * 将分类数据转换为导航项格式
   */
  getNavItems(): NavItem[] {
    return fontCategories.map(cat => ({
      id: cat.id,
      name: cat.name,
      count: getToolsByCategory(cat.id).length,
      icon: iconMap[cat.iconUrl] || iconMap.default,
      color: cat.color,
      // 添加子分类支持
      subcategories: cat.subcategories?.map(sub => ({
        id: sub.id,
        name: sub.name,
        count: getToolsBySubCategory(sub.id).length
      }))
    }));
  }

  /**
   * 获取字体工具数据
   */
  getWebsites(params?: {
    category?: string;
    subcategory?: string;
    featured?: boolean;
    hot?: boolean;
    limit?: number;
  }): Tool[] {
    let tools: Tool[] = [];

    // 按子分类筛选
    if (params?.subcategory) {
      tools = getToolsBySubCategory(params.subcategory);
    }
    // 按分类筛选
    else if (params?.category && params.category !== 'all') {
      tools = getToolsByCategory(params.category);
    } else if (params?.featured) {
      tools = getFeaturedTools();
    } else if (params?.hot) {
      tools = getHotTools();
    } else {
      tools = [...allFontTools];
    }

    // 排序：热门 > 推荐 > 评分
    tools.sort((a, b) => {
      if (a.isHot && !b.isHot) return -1;
      if (!a.isHot && b.isHot) return 1;
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });

    // 限制数量
    if (params?.limit) {
      tools = tools.slice(0, params.limit);
    }

    return tools;
  }

  /**
   * 搜索工具
   */
  searchWebsites(keyword: string, limit?: number): Tool[] {
    const results = searchTools(keyword);
    return limit ? results.slice(0, limit) : results;
  }

  /**
   * 获取统计数据
   */
  getStats() {
    return {
      totalWebsites: allFontTools.length,
      totalCategories: fontCategories.length,
      updateDate: new Date().toISOString().split('T')[0]
    };
  }
}

/**
 * 字体导航页面组件
 * 展示字体设计相关工具和资源
 */
const FontPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 创建数据服务实例
  const dataService = useMemo(() => new FontDataService(), []);
  
  // 新增：添加全站搜索跳转功能
  const handleGlobalSearch = useCallback((query: string) => {
    if (query && query.trim()) {
      // 跳转到Search页面，并传递搜索查询和类型参数
      navigate(`/search?q=${encodeURIComponent(query.trim())}&type=font`);
    }
  }, [navigate]);
  
  // 使用通用导航Hook
  const {
    searchValue,
    setSearchValue,
    searchResults,
    isSearchMode,
    navItems,
    activeCategory,
    stats,
    handleSearch,
    handleKeyPress,
    handleNavItemClick,
    handleExitSearchMode,
    renderToolCards,
    setActiveCategory
  } = useNavigation({
    navType: NavMenuType.FONT,
    dataService
  });

  // 侧边栏配置
  const sidebarConfig: SidebarConfig = {
    title: '字体导航',
    type: NavMenuType.FONT
  };

  // 导航切换配置
  const navSwitchItems: NavSwitchItem[] = [
    {
      type: NavMenuType.UIUX,
      name: 'UI导航',
      icon: DesignIcons.Figma
    },
    {
      type: NavMenuType.AI,
      name: 'AI导航',
      icon: DesignIcons.AI
    },
    {
      type: NavMenuType.DESIGN,
      name: '平面导航',
      icon: DesignIcons.Design
    },
    {
      type: NavMenuType.THREE_D,
      name: '三维导航',
      icon: DesignIcons['3D']
    },
    {
      type: NavMenuType.ECOMMERCE,
      name: '电商导航',
      icon: DesignIcons.Ecommerce
    },
    {
      type: NavMenuType.INTERIOR,
      name: '室内导航',
      icon: DesignIcons.Design
    },
    {
      type: NavMenuType.FONT,
      name: '字体导航',
      icon: DesignIcons.Font
    }
  ];

  // 当前导航类型
  const [currentNavType, setCurrentNavType] = useState<NavMenuType>(NavMenuType.FONT);

  // 导航切换处理
  const handleNavSwitch = (navType: NavMenuType) => {
    if (navType === currentNavType) return;
    
    setCurrentNavType(navType);
    
    if (navType === NavMenuType.AI) {
      navigate('/ai');
    } else if (navType === NavMenuType.DESIGN) {
      navigate('/design');
    } else if (navType === NavMenuType.THREE_D) {
      navigate('/3d');
    } else if (navType === NavMenuType.ECOMMERCE) {
      navigate('/ecommerce');
    } else if (navType === NavMenuType.INTERIOR) {
      navigate('/interior');
    } else if (navType === NavMenuType.UIUX) {
      navigate('/');
    }
  };

  // 分类点击处理
  const handleCategoryItemClick = useCallback((categoryId: string) => {
    handleNavItemClick(categoryId);
  }, [handleNavItemClick]);

  // 用于跟踪用户是否手动点击了导航项
  const userClickedRef = useRef(false);
  const setActiveCategoryRef = useRef(setActiveCategory);
  setActiveCategoryRef.current = setActiveCategory;

  // 滚动监听 - 自动高亮当前可见的分类
  useEffect(() => {
    if (isSearchMode || navItems.length === 0) return;

    const handleScroll = () => {
      // 如果用户刚刚点击了导航项，跳过这次滚动更新
      if (userClickedRef.current) {
        return;
      }

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      let activeId = navItems[0].id;
      let closestDistance = Infinity;
      
      for (const item of navItems) {
        const element = document.getElementById(`category-${item.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollTop;
          const distance = Math.abs(elementTop - scrollTop - 200);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            activeId = item.id;
          }
        }
      }
      
      if (scrollTop < 450) {
        return;
      }
      
      if (scrollTop + viewportHeight >= documentHeight - 100) {
        activeId = navItems[navItems.length - 1].id;
      }
      
      // 在滚动更新时重置用户点击标记
      if (activeId !== activeCategory) {
        userClickedRef.current = false;
        setActiveCategoryRef.current(activeId);
      }
    };

    let ticking = false;
    const requestScrollUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    window.addEventListener('resize', requestScrollUpdate, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', requestScrollUpdate);
      window.removeEventListener('resize', requestScrollUpdate);
    };
  }, [navItems, isSearchMode, activeCategory]);

  /**
   * 渲染工具卡片 - 使用通用ToolCard组件
   */
  const renderFontToolCards = useCallback((tools: Tool[]) => {
    const toolCardData = renderToolCards(tools);
    
    return toolCardData.map(({ key, tool, onClick }) => (
      <ToolCard
        key={key}
        tool={tool}
        onClick={onClick}
      />
    ));
  }, [renderToolCards]);

  /**
   * 渲染字体文章样式卡片 - 类似设计文章的卡片样式
   */
  const renderFontArticleCards = useCallback((tools: Tool[]) => {
    const toolCardData = renderToolCards(tools);
    
    return toolCardData.map(({ key, tool, onClick }) => (
      <div
        key={key}
        className="font-article-card"
        onClick={onClick}
      >
        {/* 缩略图容器 */}
        <div className="font-article-image-container">
          {tool.iconUrl || tool.icon ? (
            <img 
              src={tool.iconUrl || tool.icon} 
              alt={`${tool.name} 图标`}
              className="font-article-image"
              loading="lazy"
              onError={(e) => {
                const img = e.currentTarget;
                if (img.dataset.errorHandled) return;
                img.dataset.errorHandled = 'true';
                // 使用文字替代图标
                const container = img.parentElement;
                if (container) {
                  container.innerHTML = `<div class="font-article-image-fallback">${tool.name.charAt(0).toUpperCase()}</div>`;
                }
              }}
            />
          ) : (
            <div className="font-article-image-fallback">
              {tool.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        
        {/* 内容区域 */}
        <div className="font-article-content">
          <h4 className="font-article-title">
            <span className="font-article-title-text">{tool.name}</span>
          </h4>
          {tool.description && (
            <p className="font-article-description">{tool.description}</p>
          )}
          <div className="font-article-tags">
            {tool.tags.slice(0, 2).map(tag => (
              <span key={tag} className="font-article-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    ));
  }, [renderToolCards]);

  // 数据和MetaData
  const metaData = {
    title: '字体导航',
    description: '优质字体工具与资源导航，包含中英文字体、字体工具、字体搭配等资源。',
    keywords: '字体导航, 字体工具, 字体资源, Google Fonts, Adobe Fonts, 思源字体, 字体搭配'
  };
  
  // 当前导航信息
  const currentNav = {
    id: 'font',
    name: '字体导航',
    path: '/font'
  };

  return (
    <div className="home-page font-page" style={{ '--bg-image': `url(${bgImage})` } as React.CSSProperties}>
      {/* SEO优化 */}
      <SEO 
        title="字体导航"
        description="UIED 字体导航，精选优质中英文字体、字体工具、字体搭配、Web字体等字体设计师必备资源导航。"
        keywords="字体导航,字体工具,字体资源,Google Fonts,Adobe Fonts,思源字体,字体搭配,Web字体,字体编辑器,字体管理"
        url="https://hao.uied.cn/font"
      />
      
      {/* 头部Hero区域 */}
      <HeroBanner 
        pageType="font"
        showStats={true}
      />

      <div className="main-layout">
        {/* 使用通用侧边栏组件 */}
        <CategorySidebar
          config={sidebarConfig}
          navItems={navItems}
          activeItem={activeCategory}
          onItemClick={handleCategoryItemClick}
          isSearchMode={isSearchMode}
          searchResultsCount={searchResults.length}
          onExitSearchMode={handleExitSearchMode}
          isSticky={true}
        />

        {/* 右侧内容区域 */}
        <main className="tools-main">
          {/* 热门工具推荐区域 */}
          <HotRecommendations 
            limit={12}
            title="热门推荐"
            showMoreButton={false}
            categoryFilter="hot-recommendations"
            enableSubCategories={true}
            defaultSubCategory="hot-recommendations-hot"
          />

          {/* 设计文章网格组件 - 显示最新设计文章 */}
          <DesignArticleGrid 
            title="设计文章"
            limit={6}
            enableSubCategories={true}
            defaultSubCategory="Font"
            showMoreButton={false}
          />

          {/* 搜索结果区域 */}
          {isSearchMode && (
            <section id="search-results" className="content-section">
              <div className="section-header-simple">
                <h2>搜索结果</h2>
                <span className="resource-count">共找到 {searchResults.length} 个相关工具</span>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="font-articles-grid">
                  {renderFontArticleCards(searchResults)}
                </div>
              ) : (
                <div className="empty-result">
                  <p>没有找到相关结果，请尝试其他关键词</p>
                </div>
              )}
            </section>
          )}

          {/* 所有分类区域 - 只在非搜索模式下显示，支持子分类切换 */}
          {!isSearchMode && navItems.map(navItem => {
            // 获取该分类的子分类
            const subCategories = getSubCategoriesByCategory(navItem.id);
            const hasSubCategories = subCategories && subCategories.length > 0;
            
            // 确保ID唯一性，使用具体页面前缀避免不同页面间的ID冲突
            const uniqueElementId = `category-${navItem.id}`;
            
            return (
              <section 
                key={navItem.id} 
                id={uniqueElementId} 
                className="content-section"
                data-category-id={navItem.id}
              >
                <div className="section-header-simple">
                  <h2 data-category={navItem.id}>{navItem.name}</h2>
                </div>
                
                {/* 所有分类都使用新的字体文章样式 */}
                <div className="font-articles-grid">
                  {renderFontArticleCards(dataService.getWebsites({ category: navItem.id }))}
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default FontPage; 