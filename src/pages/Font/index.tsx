/**
 * @file Font/index.tsx
 * @description 字体导航页面 - 字体工具与资源导航
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.0.0 - 使用API数据源
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import CategorySidebar, { type SidebarConfig, type NavSwitchItem } from '../../components/CategorySidebar';
import { NavMenuType } from '../../types';
import HeroBanner from '../../components/HeroBanner';
import ToolCard from '../../components/ToolCard';
import HotRecommendations from '../../components/HotRecommendations';
import DesignArticleGrid from '../../components/DesignArticleGrid';
import AdBanner from '../../components/AdBanner';
import SEO from '../../components/SEO';
import { type Tool } from '../../hooks/useNavigation';
import { useAPINavigation } from '../../hooks/useAPINavigation';
import { usePageConfig } from '../../hooks/usePageConfig';
import '../../styles/common.css';
import './index.css';
import './index.mobile.css';

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
  'palette': DesignIcons.Color,
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
 * 字体导航页面组件
 * 展示字体设计相关工具和资源
 * 使用API数据源
 */
const FontPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 使用API导航Hook
  const apiNavigation = useAPINavigation({
    slug: 'font',
    navType: NavMenuType.FONT,
    iconComponents: iconMap,
    searchPageType: 'font'
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
    // 网站跳转确认弹窗相关
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
  const { pageConfig, heroScrollWebsites } = usePageConfig('font', true);
  
  // 新增：添加全站搜索跳转功能
  const handleGlobalSearch = useCallback((query: string) => {
    if (query && query.trim()) {
      // 跳转到Search页面，并传递搜索查询和类型参数
      navigate(`/search?q=${encodeURIComponent(query.trim())}&type=font`);
    }
  }, [navigate]);

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
          {/* 热门工具推荐区域 */}
          <HotRecommendations 
            limit={12}
            title="热门推荐"
            showMoreButton={false}
            enableSubCategories={true}
            useApi={true}
            pageSlug="font"
            onWebsiteClick={handleWebsiteClick}
          />

          {/* 设计文章网格组件 - 显示最新设计文章 */}
          <DesignArticleGrid 
            title="设计文章"
            limit={6}
            enableSubCategories={true}
            defaultSubCategory="Font"
            showMoreButton={false}
            pageSlug="font"
            position="main"
          />

          {/* 广告位 - 放在设计文章下方 */}
          <AdBanner pageSlug="font" position="top" limit={1} />

          {/* 搜索结果区域 */}
          {isSearchMode && (
            <section id="search-results" className="content-section">
              <div className="section-header-simple">
                <h2>搜索结果</h2>
                <span className="resource-count">共找到 {searchResults.length} 个相关工具</span>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="tools-grid">
                  {renderFontToolCards(searchResults)}
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
                    {renderFontToolCards(
                      apiDataService?.getWebsites({ category: navItem.id }) || []
                    )}
                  </div>
                )}
              </section>
            );
          })}
          
          {/* 底部广告位 */}
          <AdBanner pageSlug="font" position="bottom" limit={3} />
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

export default FontPage; 