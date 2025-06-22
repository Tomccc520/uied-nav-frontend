/**
 * @file Interior/index.tsx
 * @description 室内导航页面 - 室内设计工具与资源导航
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
  IconCarUI,
  Icon3D
} from '../../components/UI';
import CategorySidebar, { type NavItem, type SidebarConfig, type NavSwitchItem } from '../../components/CategorySidebar';
import { NavMenuType } from '../../types';
import HeroBanner from '../../components/HeroBanner';
import ToolCard from '../../components/ToolCard';
import HotRecommendations from '../../components/HotRecommendations';
import DesignArticleGrid from '../../components/DesignArticleGrid';
import SEO from '../../components/SEO';
import { useNavigation, type Tool, type DataService } from '../../hooks/useNavigation';
import { 
  interiorCategories,
  allInteriorTools,
  getToolsByCategory,
  getHotTools,
  getFeaturedTools,
  searchTools,
  getToolsBySubCategory,
  getSubCategoriesByCategory,
  getSubCategoryStats
} from '../../data/interiorToolsDatabase';
import '../../styles/common.css';
import './index.css';
import './index.mobile.css';

// 使用public目录下的背景图片，避免部署后路径问题
const bgImage = '/bg.jpg';

  // 图标映射 - 室内设计专用
  const iconMap: Record<string, React.ComponentType<any>> = {
    // 室内设计专用图标
    'cad': DesignIcons.CAD || IconTool,
    'furniture': DesignIcons.Furniture || IconTool,
    'texture': DesignIcons.Texture || DesignIcons.Material,
    'lighting': DesignIcons.Lighting || IconTool,
    'project': DesignIcons.Project || IconTool,
    'metaverse': DesignIcons.VR || IconDigital,
    '3d': DesignIcons['3D'] || Icon3D,
    'visualization': IconDigital,
  
  // 通用图标
  'ai': DesignIcons.AI,
  'image': DesignIcons.Image,
  'tutorial': DesignIcons.Tutorial,
  'ui': DesignIcons.UI,
  'inspiration': DesignIcons.Inspiration,
  'material': DesignIcons.Material,
  'font': DesignIcons.Font,
  'tools': IconTool,
  'color': DesignIcons.Color,
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
  'brand': DesignIcons.Brand,
  'ecommerce': DesignIcons.Ecommerce,
  'plugin': DesignIcons.Plugin,
  'developer': DesignIcons.Developer,
  'learn': DesignIcons.Learn,
  'photo': DesignIcons.Photo,
  'art': DesignIcons.Art,
  'print': DesignIcons.Print,
  'analytics': DesignIcons.Analytics,
  'digital': IconDigital,
  'system': IconSystem,
  'designTeam': IconDesignTeam,
  'designteam': IconDesignTeam,
  'carUI': IconCarUI,
  'carui': IconCarUI,
  'default': IconTool
};

/**
 * 室内设计工具数据服务类 - 实现DataService接口
 */
class InteriorDataService implements DataService {
  /**
   * 将分类数据转换为导航项格式
   */
  getNavItems(): NavItem[] {
    return interiorCategories.map(cat => ({
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
   * 获取室内设计工具数据
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
      tools = [...allInteriorTools];
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
      totalWebsites: allInteriorTools.length,
      totalCategories: interiorCategories.length,
      updateDate: new Date().toISOString().split('T')[0]
    };
  }
}

/**
 * 室内导航页面组件
 * 展示室内设计相关工具和资源
 */
const InteriorPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 创建数据服务实例
  const dataService = useMemo(() => new InteriorDataService(), []);
  
  // 新增：添加全站搜索跳转功能
  const handleGlobalSearch = useCallback((query: string) => {
    if (query && query.trim()) {
      // 跳转到Search页面，并传递搜索查询和类型参数
      navigate(`/search?q=${encodeURIComponent(query.trim())}&type=interior`);
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
    navType: NavMenuType.INTERIOR,
    dataService,
    searchPageType: 'interior'
  });

  // 当前导航类型状态
  const [currentNavType, setCurrentNavType] = useState<NavMenuType>(NavMenuType.INTERIOR);

  // 使用 useRef 来存储 setActiveCategory 引用，避免依赖问题
  const setActiveCategoryRef = useRef(setActiveCategory);
  setActiveCategoryRef.current = setActiveCategory;

  // 新增：用户点击标记和时间戳
  const userClickedRef = useRef<boolean>(false);
  const clickTimeRef = useRef<number>(0);
  const USER_CLICK_LOCK_DURATION = 1500; // 用户点击后1.5秒内不允许滚动覆盖选择
  
  // 新增：自定义导航点击处理函数，设置用户点击标记
  const handleCategoryItemClick = useCallback((itemId: string) => {
    userClickedRef.current = true;
    clickTimeRef.current = Date.now();
    
    // 调用原始点击处理函数
    handleNavItemClick(itemId);
  }, [handleNavItemClick]);

  // 自定义handleTagClick，增加搜索跳转功能
  const handleTagClick = useCallback((tag: string) => {
    setSearchValue(tag);
    // 当点击标签时直接跳转到搜索页面
    handleGlobalSearch(tag);
  }, [setSearchValue, handleGlobalSearch]);

  // 热门搜索标签
  const hotSearchTags = ['SketchUp', '室内设计', '3D建模', 'CAD', '渲染', 'VR漫游'];

  // 侧边栏配置
  const sidebarConfig: SidebarConfig = {
    title: '室内导航',
    type: NavMenuType.INTERIOR
  };

  // 导航切换选项配置
  const navSwitchItems: NavSwitchItem[] = [
    {
      type: NavMenuType.INTERIOR,
      name: '室内导航',
      icon: DesignIcons['3D']
    },
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
      name: '设计导航',
      icon: DesignIcons.Design
    }
  ];

  // 处理导航切换
  const handleNavSwitch = (navType: NavMenuType) => {
    if (navType === NavMenuType.UIUX) {
      navigate('/uiux');
    } else if (navType === NavMenuType.AI) {
      navigate('/ai');
    } else if (navType === NavMenuType.DESIGN) {
      navigate('/design');
    }
    // 当前页面是INTERIOR，不需要跳转
  };

  // 优化的滚动监听 - 左侧导航跟随右侧内容
  useEffect(() => {
    if (isSearchMode || navItems.length === 0) {
      return;
    }

    let lastUpdateTime = 0;
    const UPDATE_THRESHOLD = 100;

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastUpdateTime < UPDATE_THRESHOLD) {
        return;
      }
      lastUpdateTime = now;
      
      // 如果是用户最近点击过导航项，且在锁定时间内，不进行自动更新
      if (userClickedRef.current && (now - clickTimeRef.current < USER_CLICK_LOCK_DURATION)) {
        return;
      }

      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const navbarOffset = 464;
      const viewportCenter = scrollTop + viewportHeight / 2;
      
      let activeId = navItems[0].id;
      let closestDistance = Infinity;
      
      for (const item of navItems) {
        const element = document.getElementById(`category-${item.id}`);
        if (!element) continue;
        
        const elementRect = element.getBoundingClientRect();
        const elementTop = elementRect.top + scrollTop;
        const elementBottom = elementTop + elementRect.height;
        const elementCenter = elementTop + elementRect.height / 2;
        
        const isVisible = elementBottom > scrollTop + navbarOffset && 
                          elementTop < scrollTop + viewportHeight;
        
        if (isVisible) {
          const distance = Math.abs(elementCenter - viewportCenter);
          
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
  const renderInteriorToolCards = useCallback((tools: Tool[]) => {
    const toolCardData = renderToolCards(tools);
    
    return toolCardData.map(({ key, tool, onClick }) => (
      <ToolCard
        key={key}
        tool={tool}
        onClick={onClick}
      />
    ));
  }, [renderToolCards]);

  // 数据和MetaData
  const metaData = {
    title: '室内导航',
    description: '优质室内设计工具与资源导航，包含CAD软件、3D建模、渲染软件、VR漫游等资源。',
    keywords: '室内导航, 室内设计工具, CAD软件, 3D建模, 渲染软件, VR漫游'
  };
  
  // 当前导航信息
  const currentNav = {
    id: 'interior',
    name: '室内导航',
    path: '/interior'
  };

  return (
    <div className="home-page interior-page" style={{ '--bg-image': `url(${bgImage})` } as React.CSSProperties}>
      {/* SEO优化 */}
      <SEO 
        title="室内导航"
        description="UIED 室内导航，精选优质室内设计工具、CAD软件、3D建模、渲染软件、VR漫游等室内设计师必备资源导航。"
        keywords="室内导航,室内设计,CAD软件,3D建模,渲染软件,VR漫游,SketchUp,AutoCAD,3ds Max,V-Ray"
        url="https://hao.uied.cn/interior"
      />
      
      {/* 头部Hero区域 */}
      <HeroBanner 
        pageType="interior"
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
          // 导航切换相关属性
          showNavSwitch={true}
          navSwitchItems={navSwitchItems}
          currentNavType={currentNavType}
          onNavTypeChange={handleNavSwitch}
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
            defaultSubCategory="室内"
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
                <div className="tools-grid">
                  {renderInteriorToolCards(searchResults)}
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
                
                {/* 如果有子分类，使用HotRecommendations组件来显示子分类切换 */}
                {hasSubCategories ? (
                  <HotRecommendations 
                    limit={0}
                    title=""
                    showTitle={false}
                    showMoreButton={false}
                    categoryFilter={navItem.id}
                    enableSubCategories={true}
                    defaultSubCategory={subCategories[0]?.id}
                    customDataSource={{
                      getBySubCategory: (subCategoryId) => getToolsBySubCategory(subCategoryId),
                      getSubCategories: (categoryId) => getSubCategoriesByCategory(categoryId),
                      getSubCategoryStats: (categoryId) => getSubCategoryStats(categoryId)
                    }}
                  />
                ) : (
                  // 如果没有子分类，直接显示工具网格
                  <div className="tools-grid">
                    {renderInteriorToolCards(dataService.getWebsites({ category: navItem.id }))}
                  </div>
                )}
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default InteriorPage; 