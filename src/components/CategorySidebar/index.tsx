/**
 * @file CategorySidebar/index.tsx
 * @description 通用导航侧边栏组件 - 支持多种导航类型和Motion动效
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.1.0 - 增加Motion动效支持
 */

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconSearch } from '../UI/Icons/index';
import { NavMenuType } from '../../types';
import { 
  DesignIcons, 
  IconTool, 
  IconTools,
  IconDigital, 
  IconSystem, 
  IconDesignTeam, 
  IconCarUI,
  IconGameUI,
  IconMetaverse,
  IconAIDesign,
  IconOtherContent,
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
  IconArt,
  // 电商相关图标
  IconStore,
  IconCamera,
  IconLayout,
  IconMarketing,
  IconPlatform,
  IconLiveStreaming,
  IconBanner,
  IconPackage,
  IconIllustration,
  IconComponents,
  IconMockup,
  IconPalette,
  // 室内设计相关图标
  IconCAD,
  IconFurniture,
  IconTexture,
  IconLighting,
  IconProject,
  IconVR,
  Icon3D
} from '../UI/Icons';
import './index.css';
import './index.mobile.css'; // 引入独立的移动端样式

// 简单的箭头向下图标组件
const ArrowDownIcon: React.FC<{ size?: number; className?: string }> = ({ size = 12, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 简单的外部链接图标组件
const ExternalLinkIcon: React.FC<{ size?: number }> = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// 子分类接口定义
export interface SubNavItem {
  id: string;
  name: string;
  count?: number;
}

// 导航项接口定义（通用）
export interface NavItem {
  id: string;
  name: string;
  count?: number;
  icon?: React.ComponentType<any> | string;
  color?: string;
  badge?: string; // 新增：徽章文本（如"新"、"热门"等）
  disabled?: boolean; // 新增：是否禁用
  subcategories?: SubNavItem[]; // 新增：子分类列表
  }
  
  // 侧边栏配置接口
export interface SidebarConfig {
  title: string;                    // 侧边栏标题
  type: NavMenuType;               // 导航类型
  showSearch?: boolean;            // 是否显示搜索结果导航
  searchLabel?: string;            // 搜索结果标签
  searchIcon?: React.ComponentType<any>; // 搜索图标
}

// 组件属性接口
export interface CategorySidebarProps {
  config: SidebarConfig;           // 侧边栏配置
  navItems: NavItem[];             // 导航项列表
  activeItem: string;              // 当前激活项ID
  onItemClick: (itemId: string) => void; // 导航项点击回调
  isSearchMode?: boolean;          // 是否为搜索模式
  searchResultsCount?: number;     // 搜索结果数量
  onExitSearchMode?: () => void;   // 退出搜索模式回调
  isSticky?: boolean;              // 是否启用固定定位
  className?: string;              // 自定义样式类
  // 新增：导航切换相关属性
  showNavSwitch?: boolean;         // 是否显示导航切换
  navSwitchItems?: NavSwitchItem[]; // 导航切换选项
  currentNavType?: NavMenuType;     // 当前导航类型
  onNavTypeChange?: (navType: NavMenuType) => void; // 导航类型切换回调
}

// 新增：导航切换项接口
export interface NavSwitchItem {
  type: NavMenuType;
  name: string;
  icon: React.ComponentType<any>;
  description?: string;
}

// 默认图标映射
const defaultIconMap: Record<string, React.ComponentType<any>> = {
  default: IconTool,
  tool: IconTool,
  tools: IconTools,
  digital: IconDigital,
  system: IconSystem,
  carui: IconCarUI,
  designteam: IconDesignTeam,
  // 添加新分类的图标映射
  gameui: IconGameUI,
  metaverse: IconMetaverse,
  aidesign: IconAIDesign,
  othercontent: IconOtherContent,
  // 平面设计分类图标映射
  education: IconEducation,
  learning: IconLearning,
  inspiration: IconInspiration,
  material: IconMaterial,
  font: IconFont,
  color: IconColor,
  print: IconPrint,
  graphic: IconGraphic,
  brand: IconBrand,
  photo: IconPhoto,
  art: IconArt,
  // 添加大写版本的映射
  Tool: IconTool,
  Tools: IconTools,
  Digital: IconDigital,
  System: IconSystem,
  CarUI: IconCarUI,
  DesignTeam: IconDesignTeam,
  GameUI: IconGameUI,
  Metaverse: IconMetaverse,
  AIDesign: IconAIDesign,
  OtherContent: IconOtherContent,
  Education: IconEducation,
  Learning: IconLearning,
  Inspiration: IconInspiration,
  Material: IconMaterial,
  Font: IconFont,
  Color: IconColor,
  Print: IconPrint,
  Graphic: IconGraphic,
  Brand: IconBrand,
  Photo: IconPhoto,
  Art: IconArt,
  // 电商相关图标映射
  store: IconStore,
  camera: IconCamera,
  layout: IconLayout,
  marketing: IconMarketing,
  platform: IconPlatform,
  livestreaming: IconLiveStreaming,
  // 电商图标大写版本
  Store: IconStore,
  Camera: IconCamera,
  Layout: IconLayout,
  Marketing: IconMarketing,
  Platform: IconPlatform,
  LiveStreaming: IconLiveStreaming,
  Banner: IconBanner,
  
  // 室内设计相关图标映射
  cad: IconCAD,
  furniture: IconFurniture,
  texture: IconTexture,
  lighting: IconLighting,
  project: IconProject,
  vr: IconVR,
  '3d': Icon3D,
  // 室内图标大写版本
  CAD: IconCAD,
  Furniture: IconFurniture,
  Texture: IconTexture,
  Lighting: IconLighting,
  Project: IconProject,
  VR: IconVR,
  '3D': Icon3D,
  Package: IconPackage,
  Illustration: IconIllustration,
  Components: IconComponents,
  Mockup: IconMockup,
  Palette: IconPalette
};

// 根据导航类型获取默认配置
const getDefaultConfig = (type: NavMenuType): Partial<SidebarConfig> => {
  switch (type) {
    case NavMenuType.DESIGN:
      return {
        title: '设计导航',
        showSearch: true,
        searchLabel: '搜索结果',
        searchIcon: IconSearch
      };
    case NavMenuType.AI:
      return {
        title: 'AI工具导航',
        showSearch: true,
        searchLabel: 'AI搜索结果',
        searchIcon: DesignIcons.AI
      };
    case NavMenuType.THREE_D:
      return {
        title: '3D工具导航',
        showSearch: true,
        searchLabel: '3D搜索结果',
        searchIcon: IconTool
      };
    case NavMenuType.ECOMMERCE:
      return {
        title: '电商工具导航',
        showSearch: true,
        searchLabel: '电商搜索结果',
        searchIcon: IconTool
      };
    case NavMenuType.INTERIOR:
      return {
        title: '室内设计导航',
        showSearch: true,
        searchLabel: '室内搜索结果',
        searchIcon: IconTool
      };
    case NavMenuType.FONT:
      return {
        title: '字体导航',
        showSearch: true,
        searchLabel: '字体搜索结果',
        searchIcon: DesignIcons.Font
      };
    case NavMenuType.TOOLS:
      return {
        title: '工具导航',
        showSearch: true,
        searchLabel: '工具搜索结果',
        searchIcon: IconTool
      };
    case NavMenuType.RESOURCES:
      return {
        title: '资源导航',
        showSearch: true,
        searchLabel: '资源搜索结果',
        searchIcon: DesignIcons.Resource
      };
    default:
      return {
        title: '导航',
        showSearch: false,
        searchIcon: IconSearch
      };
  }
};

/**
 * 获取导航项图标组件
 * @param icon 图标（组件或字符串）
 * @returns 图标组件
 */
const getIconComponent = (icon?: React.ComponentType<any> | string): React.ComponentType<any> => {
  if (!icon) return defaultIconMap.default;
  if (typeof icon === 'string') {
    // 尝试直接匹配
    const directMatch = defaultIconMap[icon];
    if (directMatch) return directMatch;
    
    // 尝试小写匹配
    const lowerMatch = defaultIconMap[icon.toLowerCase()];
    if (lowerMatch) return lowerMatch;
    
    // 尝试大写匹配
    const upperMatch = defaultIconMap[icon.toUpperCase()];
    if (upperMatch) return upperMatch;
    
    return defaultIconMap.default;
  }
  return icon;
};

/**
 * 通用导航侧边栏组件
 * @param props 组件属性
 * @returns 侧边栏JSX元素
 */
const CategorySidebar: React.FC<CategorySidebarProps> = ({
  config,
  navItems,
  activeItem,
  onItemClick,
  isSearchMode = false,
  searchResultsCount = 0,
  onExitSearchMode,
  isSticky = true,
  className = '',
  // 新增参数
  showNavSwitch = false,
  navSwitchItems = [],
  currentNavType,
  onNavTypeChange
}) => {
  // 合并默认配置
  const finalConfig = { ...getDefaultConfig(config.type), ...config };
  const SearchIcon = finalConfig.searchIcon || IconSearch;
  
  // 侧边栏状态管理
  const [sidebarPosition, setSidebarPosition] = useState<'sticky' | 'static'>('static');
  const sidebarRef = useRef<HTMLElement>(null);
  
  // 记录最后一次选中的项目，用于调试比较
  const lastActiveItemRef = useRef<string | null>(null);
  
  // 在activeItem变化时，确保对应的导航项可见（滚动到视图）
  useEffect(() => {
    if (activeItem !== lastActiveItemRef.current) {
      lastActiveItemRef.current = activeItem;
      
      if (activeItem) {
        const navItem = document.querySelector(`.category-nav-item[data-item="${activeItem}"]`);
        if (navItem instanceof HTMLElement) {
          setTimeout(() => {
            navItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }, 100);
        }
      }
    }
  }, [activeItem]);

  useEffect(() => {
    // 如果不启用固定定位，直接返回
    if (!isSticky) {
      setSidebarPosition('static');
      return;
    }
    
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          
          // 查找热门推荐组件的位置
          const hotRecommendationsElement = document.getElementById('hot-recommendations-section');
          let triggerPoint = 300; // 默认触发点
          
          if (hotRecommendationsElement) {
            // 获取热门推荐组件距离页面顶部的位置
            const rect = hotRecommendationsElement.getBoundingClientRect();
            const elementTop = rect.top + scrollTop;
            // 当滚动到热门推荐组件顶部时开始固定
            triggerPoint = Math.max(elementTop - 100, 200); // 至少200px，避免过早触发
          }
          
          // 根据滚动位置决定是否固定
          const newPosition = scrollTop > triggerPoint ? 'sticky' : 'static';
          setSidebarPosition(prev => prev !== newPosition ? newPosition : prev);
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // 使用throttle优化滚动性能
    let throttleTimer: NodeJS.Timeout;
    const throttledHandleScroll = () => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          handleScroll();
          throttleTimer = null as any;
        }, 16); // ~60fps
      }
    };
    
    // 监听滚动事件
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // 初始化检查
    handleScroll();
    
    // 清理
    return () => {
      if (throttleTimer) {
        clearTimeout(throttleTimer);
      }
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [isSticky]);

  // 根据状态确定CSS类名
  const getSidebarClass = () => {
    const baseClass = 'category-sidebar';
    if (!isSticky) return `${baseClass} static`;
    
    return sidebarPosition === 'sticky' 
      ? `${baseClass} sticky` 
      : `${baseClass} static`;
  };

  // 处理导航项点击 - 直接使用传入的函数，不做任何修改
  const handleItemClick = useCallback((itemId: string) => {
    if (onItemClick) {
      onItemClick(itemId);
    }
  }, [onItemClick]);

  return (
    <aside 
      ref={sidebarRef} 
      className={`${getSidebarClass()} ${className}`}
    >
      <div className="sidebar-header">
        {/* 只显示标题，不提供导航切换功能 */}
        <h3 className="sidebar-header-title">
          {finalConfig.title}
          <div className="sidebar-type-badge" data-type={config.type}>
            {config.type.toUpperCase()}
          </div>
        </h3>
      </div>
      
      <nav className="category-nav">
        {/* 搜索结果导航项 - 修改为跳转到独立搜索页面 */}
        {isSearchMode && finalConfig.showSearch && (
          <button
            className={`category-nav-item search-item ${activeItem === 'search-results' ? 'active' : ''}`}
            onClick={() => handleItemClick('search-page')} // 修改为跳转到搜索页面
          >
            <div className="category-nav-icon">
              <SearchIcon size={18} />
            </div>
            <span className="category-nav-name">查看搜索页面</span>
            <span className="category-nav-count">{searchResultsCount}</span>
            <div className="category-nav-external">
              <ExternalLinkIcon size={14} />
            </div>
          </button>
        )}
        
        {/* 导航项列表 */}
        {navItems.map(item => {
          // 特殊处理几个有问题的图标
          let IconComponent;
          if (item.id === 'data-visualization') {
            IconComponent = IconDigital;
          } else if (item.id === 'automotive-design') {
            IconComponent = IconCarUI;
          } else if (item.id === 'design-teams') {
            IconComponent = IconDesignTeam;
          } else if (item.id === 'game-ui') {
            IconComponent = IconGameUI;
          } else if (item.id === 'metaverse-vrar') {
            IconComponent = IconMetaverse;
          } else if (item.id === 'ai-design') {
            IconComponent = IconAIDesign;
          } else if (item.id === 'other-content') {
            IconComponent = IconOtherContent;
          } 
          // 电商分类特殊处理
          else if (item.id === 'store-design') {
            IconComponent = IconStore;
          } else if (item.id === 'product-photo') {
            IconComponent = IconCamera;
          } else if (item.id === 'detail-page') {
            IconComponent = IconLayout;
          } else if (item.id === 'marketing-material') {
            IconComponent = IconMarketing;
          } else if (item.id === 'brand-design') {
            IconComponent = IconBrand;
          } else if (item.id === 'data-analysis') {
            IconComponent = DesignIcons.Analytics;
          } else if (item.id === 'live-streaming') {
            IconComponent = IconLiveStreaming;
          } else if (item.id === 'platform-tools') {
            IconComponent = IconPlatform;
          } else if (item.id === 'banner-design') {
            IconComponent = IconBanner;
          } else if (item.id === 'packaging-design') {
            IconComponent = IconPackage;
          } else if (item.id === 'icon-illustration') {
            IconComponent = IconIllustration;
          } else if (item.id === 'ui-components') {
            IconComponent = IconComponents;
          } else if (item.id === 'mockup-tools') {
            IconComponent = IconMockup;
          } else if (item.id === 'color-palette') {
            IconComponent = IconPalette;
          } else if (item.id === 'design-inspiration') {
            IconComponent = DesignIcons.Inspiration;
          }
          // 室内设计分类特殊处理
          else if (item.id === 'cad-software') {
            IconComponent = IconCAD;
          } else if (item.id === '3d-modeling') {
            IconComponent = Icon3D;
          } else if (item.id === 'rendering') {
            IconComponent = IconDigital;
          } else if (item.id === 'vr-walkthrough') {
            IconComponent = IconVR;
          } else if (item.id === 'furniture-design') {
            IconComponent = IconFurniture;
          } else if (item.id === 'material-library') {
            IconComponent = IconTexture;
          } else if (item.id === 'lighting-design') {
            IconComponent = IconLighting;
          } else if (item.id === 'project-management') {
            IconComponent = IconProject;
          } else {
            // 原有逻辑
            IconComponent = getIconComponent(item.icon);
          }
          
          const isActive = activeItem === item.id;
          const isDisabled = item.disabled;
          
          return (
            <button
              key={item.id}
              className={`category-nav-item ${isActive ? 'active' : ''} ${isDisabled ? 'disabled' : ''}`}
              onClick={() => !isDisabled && handleItemClick(item.id)}
              data-item={item.id}
              style={{ '--item-color': item.color } as React.CSSProperties}
              disabled={isDisabled}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="category-nav-icon">
                <IconComponent size={18} />
              </div>
              <span className="category-nav-name">{item.name}</span>
              
              {/* 计数显示 */}
              {typeof item.count === 'number' && (
                <span className="category-nav-count">{item.count}</span>
              )}
              
              {/* 徽章显示 */}
              {item.badge && (
                <span className="category-nav-badge">{item.badge}</span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

// 导出类型和组件
export default CategorySidebar; 