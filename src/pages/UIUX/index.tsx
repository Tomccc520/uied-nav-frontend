import { NavMenuType } from "../../types";
/**
 * @file UIUX/index.tsx
 * @description UI导航页面 - UI设计工具与资源导航
 * @copyright 版权所有 (c) 2024 UIED技术团队
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
import SEO from '../../components/SEO'; // 导入设计文章组件
import { useNavigation, type Tool, type DataService } from '../../hooks/useNavigation';
import { 
  uiuxCategories,
  allUIUXTools,
  getToolsByCategory,
  getHotTools,
  getFeaturedTools,
  searchTools,
  getToolsBySubCategory,
  getSubCategoriesByCategory,
  getSubCategoryStats
} from '../../data/uiuxToolsDatabase';
import '../../styles/common.css'; // 使用通用页面样式
import './index.css'; // UI/UX页面特定样式
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
  'tools': IconTool,        // 车载设计图标
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
  'visualization': IconDigital,   // 数字孪生图标
  'digital': IconDigital,         // 新增：数字孪生图标（正确的键名）
  'system': IconSystem,           // 设计系统图标
  'designTeam': IconDesignTeam,   // 设计团队图标
  'designteam': IconDesignTeam,   // 新增：设计团队图标（正确的键名）
  'carUI': IconCarUI,             // 车载UI图标
  'carui': IconCarUI,             // 新增：车载UI图标（正确的键名）
  'default': IconTool
};

/**
 * UI/UX工具数据服务类 - 实现DataService接口
 */
class UIUXDataService implements DataService {
  /**
   * 将分类数据转换为导航项格式
   */
  getNavItems(): NavItem[] {
    return uiuxCategories.map(cat => ({
      id: cat.id,
      name: cat.name,
      count: getToolsByCategory(cat.id).length,
      icon: iconMap[cat.icon] || iconMap.default,
      color: cat.color
    }));
  }

  /**
   * 获取UI/UX工具数据
   */
  getWebsites(params?: {
    category?: string;
    featured?: boolean;
    hot?: boolean;
    limit?: number;
  }): Tool[] {
    let tools: Tool[] = [];

    // 按分类筛选
    if (params?.category && params.category !== 'all') {
      tools = getToolsByCategory(params.category);
    } else if (params?.featured) {
      tools = getFeaturedTools();
    } else if (params?.hot) {
      tools = getHotTools();
    } else {
      tools = [...allUIUXTools];
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
      totalWebsites: allUIUXTools.length,
      totalCategories: uiuxCategories.length,
      updateDate: new Date().toISOString().split('T')[0]
    };
  }
}

/**
 * UI导航页面组件
 * 展示UI设计相关工具和资源
 */
const UIUXPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 创建数据服务实例
  const dataService = useMemo(() => new UIUXDataService(), []);
  
  // 新增：添加全站搜索跳转功能
  const handleGlobalSearch = useCallback((query: string) => {
    if (query && query.trim()) {
      // 跳转到Search页面，并传递搜索查询和类型参数
      navigate(`/search?q=${encodeURIComponent(query.trim())}&type=uiux`);
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
    navType: NavMenuType.UIUX,
    dataService,
    searchPageType: 'uiux'
  });

  // 当前导航类型状态
  const [currentNavType, setCurrentNavType] = useState<NavMenuType>(NavMenuType.UIUX);

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
  const hotSearchTags = ['Figma', 'UI设计', 'UX设计', '插件', '组件库', '交互设计'];

  // 侧边栏配置
  const sidebarConfig: SidebarConfig = {
    title: 'UI导航',
    type: NavMenuType.UIUX
  };

  // 导航切换选项配置
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
      name: '设计导航',
      icon: DesignIcons.Design
    }
  ];

  // 处理导航切换
  const handleNavSwitch = (navType: NavMenuType) => {
    if (navType === NavMenuType.AI) {
      navigate('/ai');
    } else if (navType === NavMenuType.DESIGN) {
      navigate('/home');
    }
    // 当前页面是UIUX，不需要跳转
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
  const renderUIUXToolCards = useCallback((tools: Tool[]) => {
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
    title: 'UI导航',
    description: '优质UI设计工具与资源导航，包含设计软件、素材、灵感、字体等资源。',
    keywords: 'UI导航, UI设计工具, 设计资源, Figma, Sketch, Adobe XD, UI素材'
  };
  
  // 当前导航信息
  const currentNav = {
    id: 'uiux',
    name: 'UI导航',
    path: '/uiux'
  };

  return (
    <div className="home-page uiux-page" style={{ '--bg-image': `url(${bgImage})` } as React.CSSProperties}>
      {/* SEO优化 */}
      <SEO 
        title="UI导航"
        description="UIED UI导航，精选优质UI/UX设计工具、设计灵感、设计素材、原型工具等UI设计师必备资源导航。"
        keywords="UI导航,UX设计,设计工具,Figma,Sketch,Adobe XD,设计灵感,UI素材,原型设计,界面设计"
        url="https://hao.uied.cn/"
      />
      
      {/* 头部Hero区域 */}
      <HeroBanner 
        pageType="uiux"
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
          {/* 热门工具推荐区域 - 使用跟首页一样的配置 */}
          {/* 热门工具推荐区域 - 这里没有包装div，直接使用组件 */}
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
            defaultSubCategory="UI"
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
                  {renderUIUXToolCards(searchResults)}
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
                    showTitle={false} /* 不显示标题，避免重复 */
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
                    {renderUIUXToolCards(dataService.getWebsites({ category: navItem.id }))}
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

export default UIUXPage; 