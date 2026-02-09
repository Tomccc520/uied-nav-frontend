import { NavMenuType } from "../../types";
/**
 * @file UIUX/index.tsx
 * @description UI导航页面 - UI设计工具与资源导航
 * @copyright 版权所有 (c) 2024 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.0.0 - 支持API数据源
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
  WebsiteExitModal
} from '../../components/UI';
import CategorySidebar, { type NavItem, type SidebarConfig, type NavSwitchItem } from '../../components/CategorySidebar';
import HeroBanner from '../../components/HeroBanner';
import ToolCard from '../../components/ToolCard';
import HotRecommendations from '../../components/HotRecommendations';
import DesignArticleGrid from '../../components/DesignArticleGrid';
import AdBanner from '../../components/AdBanner';
import SEO from '../../components/SEO';
import { useNavigation, type Tool, type DataService } from '../../hooks/useNavigation';
import { useAPINavigation } from '../../hooks/useAPINavigation';
import { usePageConfig } from '../../hooks/usePageConfig';
import { iconMap } from '../../config/iconMap';
import '../../styles/common.css';
import './index.css';
import './index.mobile.css';

// 使用public目录下的背景图片，避免部署后路径问题
const bgImage = '/bg.jpg';

/**
 * UI导航页面组件
 * 展示UI设计相关工具和资源
 * 使用API数据源
 */
const UIUXPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 使用API导航Hook
  const apiNavigation = useAPINavigation({
    slug: 'uiux',
    navType: NavMenuType.UIUX,
    iconComponents: iconMap,
    searchPageType: 'uiux'
  });
  
  // 解构导航结果
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
    handleWebsiteClick,
    renderToolCards,
    setActiveCategory,
    isExitModalVisible,
    currentExitWebsite,
    hideExitModal,
    confirmExitVisit,
    reportExitWebsite,
    exitModalConfig,
    // API数据服务
    apiDataService,
    dataSource
  } = apiNavigation;

  // 获取页面配置（用于Hero区域显示模式等）
  const { pageConfig, heroScrollWebsites } = usePageConfig('uiux', true);
  
  // 新增：添加全站搜索跳转功能
  const handleGlobalSearch = useCallback((query: string) => {
    if (query && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}&type=uiux`);
    }
  }, [navigate]);

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
    
    return toolCardData.map(({ key, tool, onClick, showDirectArrow, onDirectVisit, arrowLabel, arrowIsExternal, directArrowNewWindow }) => (
      <ToolCard
        key={key}
        tool={tool}
        onClick={onClick}
        showDirectArrow={showDirectArrow}
        onDirectVisit={onDirectVisit}
        arrowLabel={arrowLabel}
        arrowIsExternal={arrowIsExternal}
        directArrowNewWindow={directArrowNewWindow}
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
        customTitle={pageConfig?.heroTitle}
        customDescription={pageConfig?.heroSubtitle}
        apiHotSearchTags={pageConfig?.hotSearchTags}
        searchPlaceholder={pageConfig?.searchPlaceholder}
        heroBgType={pageConfig?.heroBgType}
        heroBgValue={pageConfig?.heroBgValue}
        highlightText={pageConfig?.heroHighlightText}
        heroDisplayMode={pageConfig?.heroDisplayMode}
        heroScrollWebsites={heroScrollWebsites}
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
            enableSubCategories={true}
            useApi={true}
            pageSlug="uiux"
            onWebsiteClick={handleWebsiteClick}
          />

          {/* 设计文章网格组件 - 显示最新设计文章 */}
          <DesignArticleGrid 
            title="设计文章"
            limit={6}
            enableSubCategories={true}
            defaultSubCategory="UI"
            showMoreButton={false}
            pageSlug="uiux"
            position="main"
          />

          {/* 广告位 - 放在设计文章下方 */}
          <AdBanner pageSlug="uiux" position="top" limit={1} />

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
            // 获取该分类的子分类（使用API数据）
            const subCategories = apiDataService?.getSubCategories(navItem.id) || [];
            const hasSubCategories = subCategories.length > 0;
            
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
                  {/* 显示数据源标识（开发模式） */}
                  {process.env.NODE_ENV === 'development' && (
                    <span style={{ fontSize: '12px', color: '#999', marginLeft: '8px' }}>
                      [{dataSource}]
                    </span>
                  )}
                </div>
                
                {/* 如果有子分类，使用HotRecommendations组件来显示子分类切换（带分页功能） */}
                {hasSubCategories ? (
                  <HotRecommendations 
                    limit={0}
                    title=""
                    showTitle={false}
                    showMoreButton={false}
                    categoryFilter={navItem.id}
                    enableSubCategories={true}
                    defaultSubCategory={subCategories[0]?.id}
                    customDataSource={apiDataService ? {
                      getBySubCategory: (subCategoryId) => apiDataService.getWebsitesBySubCategory(subCategoryId),
                      getSubCategories: (categoryId) => apiDataService.getSubCategories(categoryId),
                      getSubCategoryStats: (categoryId) => apiDataService.getSubCategoryStats(categoryId)
                    } : undefined}
                    onWebsiteClick={handleWebsiteClick}
                  />
                ) : (
                  // 如果没有子分类，直接显示工具网格
                  <div className="tools-grid">
                    {renderUIUXToolCards(
                      apiDataService?.getWebsites({ category: navItem.id }) || []
                    )}
                  </div>
                )}
              </section>
            );
          })}
          
          {/* 底部广告位 */}
          <AdBanner pageSlug="uiux" position="bottom" limit={3} />
        </main>
      </div>

      {/* 网站跳转确认弹窗 */}
      <WebsiteExitModal
        visible={isExitModalVisible}
        website={currentExitWebsite}
        onClose={hideExitModal}
        onConfirm={confirmExitVisit}
        onReport={reportExitWebsite}
        config={exitModalConfig}
      />
    </div>
  );
};

export default UIUXPage; 