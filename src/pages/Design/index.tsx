import { NavMenuType } from "../../types";
/**
 * @file Design/index.tsx
 * @description 平面导航页面 - 平面设计工具与资源导航
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
  IconTools,
  IconDigital, 
  IconSystem, 
  IconDesignTeam, 
  IconCarUI,
  IconEducation,
  IconLearning,
  IconInspiration,
  IconMaterial,
  IconFont,
  IconColor,
  IconPrint,
  IconGraphic,
  IconBrand,
  IconPhoto,
  IconArt
} from '../../components/UI';
import CategorySidebar, { type NavItem, type SidebarConfig, type NavSwitchItem } from '../../components/CategorySidebar';
import HeroBanner from '../../components/HeroBanner';
import ToolCard from '../../components/ToolCard';
import HotRecommendations from '../../components/HotRecommendations';
import DesignArticleGrid from '../../components/DesignArticleGrid';
import SEO from '../../components/SEO';
import { useNavigation, type Tool, type DataService } from '../../hooks/useNavigation';
import { 
  designCategories,
  allDesignTools,
  getAllDesignTools,
  getToolsByCategory,
  getToolsBySubCategory,
  getHotTools,
  getFeaturedTools,
  searchTools,
  getSubCategoriesByCategory,
  getSubCategoryStats
} from '../../data/designToolsDatabase';
import '../../styles/common.css';
import './index.css';
import './index.mobile.css';

// 使用public目录下的背景图片
const bgImage = '/bg.jpg';

// 图标映射
const iconMap: Record<string, React.ComponentType<any>> = {
  // 平面设计主分类图标
  'tools': IconTools,             // 常用工具
  'inspiration': IconInspiration, // 平面灵感
  'material': IconMaterial,       // 设计素材
  'font': IconFont,              // 字体资源
  'color': IconColor,            // 配色工具
  'print': IconPrint,            // 印刷设计
  'graphic': IconGraphic,        // 图形设计
  'brand': IconBrand,            // 品牌设计
  'photo': IconPhoto,            // 图片处理
  'art': IconArt,                // 艺术创作
  'education': IconEducation,     // 设计高校
  'learning': IconLearning,       // 自学网站
  
  // 其他图标映射（保持兼容性）
  'ai': DesignIcons.AI,
  'image': DesignIcons.Image,
  'tutorial': DesignIcons.Tutorial,
  'ui': DesignIcons.UI,
  'design-resources': IconMaterial,
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
  'icons': DesignIcons.Icons,
  'kit': DesignIcons.Kit,
  'prototype': DesignIcons.Prototype,
  '3d': DesignIcons['3D'],
  'ecommerce': DesignIcons.Ecommerce,
  'plugin': DesignIcons.Plugin,
  'developer': DesignIcons.Developer,
  'learn': DesignIcons.Learn,
  'analytics': DesignIcons.Analytics,
  'visualization': IconDigital,
  'digital': IconDigital,
  'system': IconSystem,
  'designTeam': IconDesignTeam,
  'designteam': IconDesignTeam,
  'carUI': IconCarUI,
  'carui': IconCarUI,
  'tool': IconTool,
  'default': IconTool
};

/**
 * 平面设计工具数据服务类
 */
class DesignDataService implements DataService {
  getNavItems(): NavItem[] {
    return designCategories.map(cat => ({
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

  getWebsites(params?: {
    category?: string;
    subcategory?: string;
    featured?: boolean;
    hot?: boolean;
    limit?: number;
  }): Tool[] {
    let tools: Tool[] = [];

    // 转换数据格式以匹配Tool接口
    const convertedTools = getAllDesignTools().map(tool => ({
      ...tool
      // url字段已经存在，不需要转换
    }));

    // 按分类或子分类筛选
    if (params?.subcategory) {
      // 按子分类筛选
      tools = convertedTools.filter(tool => tool.subcategory === params.subcategory);
    } else if (params?.category && params.category !== 'all') {
      // 按主分类筛选
      tools = convertedTools.filter(tool => tool.category === params.category);
    } else if (params?.featured) {
      tools = convertedTools.filter(tool => tool.isFeatured);
    } else if (params?.hot) {
      tools = convertedTools.filter(tool => tool.isHot);
    } else {
      tools = [...convertedTools];
    }

    // 排序
    tools.sort((a, b) => {
      if (a.isHot && !b.isHot) return -1;
      if (!a.isHot && b.isHot) return 1;
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });

    if (params?.limit) {
      tools = tools.slice(0, params.limit);
    }

    return tools;
  }

  searchWebsites(keyword: string, limit?: number): Tool[] {
    const results = searchTools(keyword).map(tool => ({
      ...tool
      // url字段已经存在，不需要转换
    }));
    return limit ? results.slice(0, limit) : results;
  }

  getStats() {
    return {
      totalWebsites: getAllDesignTools().length,
      totalCategories: designCategories.length,
      updateDate: new Date().toISOString().split('T')[0]
    };
  }
}

/**
 * 平面导航页面组件
 */
const DesignPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 创建数据服务实例
  const dataService = useMemo(() => new DesignDataService(), []);
  
  // 全站搜索跳转功能
  const handleGlobalSearch = useCallback((query: string) => {
    if (query && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}&type=design`);
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
    navType: NavMenuType.DESIGN,
    dataService,
    searchPageType: 'design'
  });

  // 当前导航类型状态
  const [currentNavType, setCurrentNavType] = useState<NavMenuType>(NavMenuType.DESIGN);

  // 使用 useRef 来存储 setActiveCategory 引用
  const setActiveCategoryRef = useRef(setActiveCategory);
  setActiveCategoryRef.current = setActiveCategory;

  // 用户点击标记和时间戳
  const userClickedRef = useRef<boolean>(false);
  const clickTimeRef = useRef<number>(0);
  const USER_CLICK_LOCK_DURATION = 1500;
  
  // 自定义导航点击处理函数
  const handleCategoryItemClick = useCallback((itemId: string) => {
    // 如果点击的是字体资源分类，跳转到字体导航（新窗口）
    if (itemId === 'font') {
      window.open('/font', '_blank');
      return;
    }
    
    userClickedRef.current = true;
    clickTimeRef.current = Date.now();
    
    handleNavItemClick(itemId);
  }, [handleNavItemClick, navigate]);

  // 自定义handleTagClick，增加搜索跳转功能
  const handleTagClick = useCallback((tag: string) => {
    setSearchValue(tag);
    handleGlobalSearch(tag);
  }, [setSearchValue, handleGlobalSearch]);

  // 热门搜索标签
  const hotSearchTags = ['Photoshop', 'Illustrator', '字体', '颜色', '海报设计', '品牌设计'];

  // 侧边栏配置
  const sidebarConfig: SidebarConfig = {
    title: '平面导航',
    type: NavMenuType.DESIGN
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
      name: '平面导航',
      icon: DesignIcons.Design
    }
  ];

  // 处理导航切换
  const handleNavSwitch = (navType: NavMenuType) => {
    if (navType === NavMenuType.AI) {
      navigate('/ai');
    } else if (navType === NavMenuType.UIUX) {
      navigate('/');
    }
    // 当前页面是DESIGN，不需要跳转
  };

  // 优化的滚动监听
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
      
      if (userClickedRef.current && (now - clickTimeRef.current < USER_CLICK_LOCK_DURATION)) {
        return;
      }

      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      const navbarOffset = 464;
      const viewportCenter = scrollTop + viewportHeight / 2;
      
      let activeId = navItems[0].id;
      let closestDistance = Infinity;
      
      navItems.forEach(navItem => {
        const element = document.getElementById(`category-${navItem.id}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollTop - navbarOffset;
          const elementCenter = elementTop + rect.height / 2;
          const distance = Math.abs(viewportCenter - elementCenter);
          
          if (distance < closestDistance) {
            closestDistance = distance;
            activeId = navItem.id;
          }
        }
      });
      
      if (activeId !== activeCategory) {
        setActiveCategoryRef.current(activeId);
      }
    };

    const requestScrollUpdate = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    return () => {
      window.removeEventListener('scroll', requestScrollUpdate);
    };
  }, [isSearchMode, navItems, activeCategory]);

  /**
   * 渲染工具卡片
   */
  const renderDesignToolCards = useCallback((tools: Tool[]) => {
    const toolCardData = renderToolCards(tools);
    
    return toolCardData.map(({ key, tool, onClick }, index) => (
      <ToolCard
        key={key}
        tool={tool}
        onClick={onClick}
        index={index}
      />
    ));
  }, [renderToolCards]);

  return (
    <div className="home-page design-page" style={{ '--bg-image': `url(${bgImage})` } as React.CSSProperties}>
      {/* SEO优化 */}
      <SEO 
        title="平面设计导航"
        description="UIED平面设计导航，精选优质平面设计工具、字体资源、配色工具、印刷设计、品牌设计等平面设计师必备资源。"
        keywords="平面设计,设计工具,字体,配色,印刷设计,品牌设计,图形设计,艺术创作,设计素材,平面导航"
        url="https://hao.uied.cn/design"
      />
      
      {/* 头部Hero区域 */}
      <HeroBanner 
        pageType="design"
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
          {/* 热门推荐区域 */}
          <HotRecommendations 
            limit={35}
            title="热门推荐"
            showMoreButton={false}
            categoryFilter="hot-recommendations"
            enableSubCategories={true}
            defaultSubCategory="hot-recommendations-hot"
          />
          
          {/* 平面设计文章区域 */}
          <DesignArticleGrid
            title="平面文章"
            limit={6}
            useMock={false}
            enableSubCategories={true}
            defaultSubCategory="graphic"
            showMoreButton={true}
            moreButtonLink="https://www.uied.cn/category/graphic"
          />
          
          {/* 搜索结果区域 */}
          {isSearchMode && (
            <section id="search-results" className="content-section">
              <div className="section-header-simple">
                <h2>搜索结果</h2>
                <span className="resource-count">共找到 {searchResults.length} 个相关平面设计工具</span>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="tools-grid">
                  {renderDesignToolCards(searchResults)}
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
                    {renderDesignToolCards(dataService.getWebsites({ category: navItem.id }))}
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

export default DesignPage; 