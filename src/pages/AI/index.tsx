import { NavMenuType } from "../../types";
/**
 * @file AI/index.tsx
 * @description AI工具导航页面 - 专门展示AI相关工具和服务
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.0.0 - 重构布局，参考UIUX页面设计
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
import HotRecommendations from '../../components/HotRecommendations';
import DesignArticleGrid from '../../components/DesignArticleGrid';
import ToolCard from '../../components/ToolCard';
import SEO from '../../components/SEO';
import { useNavigation, type Tool, type DataService } from '../../hooks/useNavigation';
import { 
  categories as dbCategories,
  getAIToolsByCategory,
  getFeaturedAITools,
  getHotAITools,
  searchAITools,
  getSubCategories,
  getAIToolsBySubCategory,
  hasSubCategories,
  getAIToolsStats
} from '../../data/aiToolsDatabase';
import '../../styles/common.css'; // 使用通用页面样式
import '../../styles/common.mobile.css'; // 使用通用移动端样式
import './index.css'; // AI页面特定样式
import './index.mobile.css'; // AI页面专用移动端样式

// 使用public目录下的背景图片，避免部署后路径问题
const bgImage = '/bg.jpg';

// AI工具接口定义（继承自通用Tool接口，添加rating字段）
interface AITool extends Tool {
  rating?: number; // rating字段可选
}

// 统计数据接口
interface AIStats {
  totalWebsites: number;
  totalCategories: number;
  updateDate: string;
}

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
  'digital': IconDigital,   // 数字孪生图标
  'system': IconSystem,     // 设计系统图标
  'designTeam': IconDesignTeam,  // 设计团队图标
  'carUI': IconCarUI,       // 车载UI图标
  // AI工具分类图标映射
  'briefcase': DesignIcons.Template,    // AI办公工具 -> 模板图标
  'palette': DesignIcons.Graphic,       // AI设计工具 -> 图形设计图标  
  'academic-cap': DesignIcons.Learn,    // AI学习平台 -> 学习图标
  'globe-alt': DesignIcons.Web,         // AI平台网站 -> 网页图标
  'shopping-cart': DesignIcons.Ecommerce, // AI电商工具 -> 电商图标
  'music': DesignIcons.Audio,           // AI音频工具 -> 音频图标
  'default': IconTool
};

/**
 * AI数据服务类 - 实现DataService接口
 */
class AIDataService implements DataService {
  /**
   * 获取AI分类导航项
   */
  getNavItems(): NavItem[] {
    return dbCategories.map(cat => ({
      id: cat.id,
      name: cat.name,
      count: getAIToolsByCategory(cat.id).length,
      icon: iconMap[cat.icon] || iconMap.default,
      color: cat.color
    }));
  }

  /**
   * 获取AI工具列表
   */
  getWebsites(params?: {
    category?: string;
    subCategory?: string;
    featured?: boolean;
    hot?: boolean;
    limit?: number;
  }): AITool[] {
    let tools: AITool[] = [];

    // 按子分类筛选
    if (params?.subCategory) {
      tools = getAIToolsBySubCategory(params.subCategory);
    }
    // 按分类筛选
    else if (params?.category && params.category !== 'all') {
      tools = getAIToolsByCategory(params.category);
    } else if (params?.featured) {
      tools = getFeaturedAITools();
    } else if (params?.hot) {
      tools = getHotAITools();
    } else {
      // 获取所有工具
      tools = getAIToolsByCategory('all') || [];
      if (tools.length === 0) {
        // 如果没有'all'分类，获取所有分类的工具
        tools = dbCategories.reduce((allTools, category) => {
          return allTools.concat(getAIToolsByCategory(category.id));
        }, [] as AITool[]);
      }
    }

    // 排序：热门 > 推荐 > 新增 > 评分
    tools.sort((a, b) => {
      // 第一优先级：热门工具
      if (a.isHot && !b.isHot) return -1;
      if (!a.isHot && b.isHot) return 1;
      
      // 第二优先级：推荐工具
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      
      // 第三优先级：新增工具
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      
      // 第四优先级：按评分排序（高到低）
      return (b.rating || 0) - (a.rating || 0);
    });

    // 限制数量
    if (params?.limit) {
      tools = tools.slice(0, params.limit);
    }

    return tools;
  }

  /**
   * 搜索AI工具
   */
  searchWebsites(keyword: string, limit?: number): AITool[] {
    const searchResult = searchAITools(keyword);
    const results = searchResult.results || [];
    return limit ? results.slice(0, limit) : results;
  }

  /**
   * 获取统计数据
   */
  getStats(): AIStats {
    const stats = getAIToolsStats();
    return {
      totalWebsites: stats.total,
      totalCategories: Object.keys(stats.categories).length,
      updateDate: new Date().toISOString().split('T')[0]
    };
  }
}

/**
 * AI工具导航页面组件
 */
const AIPage: React.FC = () => {
  const navigate = useNavigate();
  
  // 创建数据服务实例
  const dataService = useMemo(() => new AIDataService(), []);
  
  // 新增：添加全站搜索跳转功能
  const handleGlobalSearch = useCallback((query: string) => {
    if (query && query.trim()) {
      // 跳转到Search页面，并传递搜索查询和类型参数
      navigate(`/search?q=${encodeURIComponent(query.trim())}&type=ai`);
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
    setActiveCategory,
    stats,
    handleSearch,
    handleKeyPress,
    handleNavItemClick,
    handleExitSearchMode,
    renderToolCards
  } = useNavigation({
    navType: NavMenuType.AI,
    dataService,
    searchPageType: 'ai'
  });

  // 当前导航类型状态
  const [currentNavType, setCurrentNavType] = useState<NavMenuType>(NavMenuType.AI);
  
  // 子分类状态
  const [activeSubCategory, setActiveSubCategory] = useState<string>('');
  const [subCategories, setSubCategories] = useState<any[]>([]);

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
    
    // 处理子分类
    if (hasSubCategories(itemId)) {
      const categorySubCategories = getSubCategories(itemId);
      setSubCategories(categorySubCategories);
      setActiveSubCategory(categorySubCategories[0]?.id || '');
    } else {
      setSubCategories([]);
      setActiveSubCategory('');
    }
  }, [handleNavItemClick]);

  // 处理子分类切换
  const handleSubCategoryClick = useCallback((subCategoryId: string) => {
    setActiveSubCategory(subCategoryId);
  }, []);

  // 自定义handleTagClick，增加搜索跳转功能
  const handleTagClick = useCallback((tag: string) => {
    setSearchValue(tag);
    // 当点击标签时直接跳转到搜索页面
    handleGlobalSearch(tag);
  }, [setSearchValue, handleGlobalSearch]);

  // 初始化和更新子分类状态
  useEffect(() => {
    if (activeCategory && hasSubCategories(activeCategory)) {
      const categorySubCategories = getSubCategories(activeCategory);
      setSubCategories(categorySubCategories);
      // 如果当前没有选中的子分类或者当前子分类不属于这个分类，选择第一个
      if (!activeSubCategory || !categorySubCategories.find(sub => sub.id === activeSubCategory)) {
        setActiveSubCategory(categorySubCategories[0]?.id || '');
      }
    } else {
      setSubCategories([]);
      setActiveSubCategory('');
    }
  }, [activeCategory, activeSubCategory]);

  // 热门搜索标签
  const hotSearchTags = ['AI绘画', 'AI写作', 'AI翻译', 'ChatGPT', 'AI建站', '模型训练'];

  // 侧边栏配置
  const sidebarConfig: SidebarConfig = {
    title: 'AI工具导航',
    type: currentNavType,
    showSearch: true,
    searchLabel: 'AI搜索结果',
    searchIcon: DesignIcons.AI
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
    if (navType === NavMenuType.UIUX) {
      navigate('/');
    } else if (navType === NavMenuType.DESIGN) {
      navigate('/home');
    }
    // 当前页面是AI，不需要跳转
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
        // 使用ref调用setActiveCategory避免依赖问题
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
   * 渲染工具卡片 - 使用通用ToolCard组件，支持Motion动效
   */
  const renderAIToolCards = useCallback((tools: AITool[]) => {
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

  // 数据和MetaData
  const metaData = {
    title: 'AI工具导航',
    description: '精选优质AI工具和资源，包含AI绘画、AI写作、AI编程、AI设计等人工智能工具。',
    keywords: 'AI工具, 人工智能, AI绘画, AI写作, AI编程, ChatGPT, Midjourney, AI设计'
  };
  
  // 当前导航信息
  const currentNav = {
    id: 'ai',
    name: 'AI工具导航',
    path: '/ai'
  };

  return (
    <div className="home-page ai-page" style={{ '--bg-image': `url(${bgImage})` } as React.CSSProperties}>
      {/* SEO优化 */}
      <SEO 
        title="AI工具导航"
        description="UIED AI工具导航，精选优质AI工具和资源，包含AI绘画、AI写作、AI编程、AI设计等人工智能工具。"
        keywords="AI工具,人工智能,AI绘画,AI写作,AI编程,ChatGPT,Midjourney,AI设计,机器学习,深度学习"
        url="https://hao.uied.cn/ai"
      />
      
      {/* 头部Hero区域 */}
      <HeroBanner 
        pageType="ai"
        showStats={true}
      />

      <div className="main-layout">
        {/* 使用新的通用侧边栏组件 */}
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
          {/* 热门推荐区域 - 支持子分类切换 */}
          <HotRecommendations 
            limit={12}
            title="热门推荐"
            showMoreButton={false}
            categoryFilter="hot-recommendations"
            enableSubCategories={true}
            defaultSubCategory="hot-recommendations-hot"
          />

          {/* AI设计文章区域 - 只在非搜索模式下显示 */}
          {!isSearchMode && (
            <DesignArticleGrid
              title="AIGC文章"
              limit={6}
              useMock={false}
              enableSubCategories={true}
              defaultSubCategory="AIGC"
              showMoreButton={false}
            />
          )}

          {/* 搜索结果区域 */}
          {isSearchMode && (
            <section id="search-results" className="content-section">
              <div className="section-header-simple">
                <h2>搜索结果</h2>
                <span className="resource-count">共找到 {searchResults.length} 个相关AI工具</span>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="tools-grid">
                  {renderAIToolCards(searchResults)}
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
            const currentSubCategories = hasSubCategories(navItem.id) ? getSubCategories(navItem.id) : [];
            const hasSubCategoriesFlag = currentSubCategories.length > 0;
            
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
                {hasSubCategoriesFlag ? (
                  <HotRecommendations 
                    limit={0}
                    title=""
                    showTitle={false} /* 不显示标题，避免重复 */
                    showMoreButton={false}
                    categoryFilter={navItem.id}
                    enableSubCategories={true}
                    defaultSubCategory={currentSubCategories[0]?.id}
                    customDataSource={{
                      getBySubCategory: (subCategoryId) => getAIToolsBySubCategory(subCategoryId),
                      getSubCategories: (categoryId) => getSubCategories(categoryId),
                      getSubCategoryStats: (categoryId) => {
                        const subCats = getSubCategories(categoryId);
                        return subCats.map(subCat => ({
                          id: subCat.id,
                          name: subCat.name,
                          description: subCat.description,
                          count: getAIToolsBySubCategory(subCat.id).length
                        }));
                      }
                    }}
                  />
                ) : (
                  // 如果没有子分类，直接显示工具网格
                  <div className="tools-grid">
                    {renderAIToolCards(dataService.getWebsites({ category: navItem.id }))}
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

export default AIPage; 