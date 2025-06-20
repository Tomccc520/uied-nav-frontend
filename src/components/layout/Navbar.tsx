/**
 * @file Navbar.tsx
 * @description 顶部导航栏组件，负责站点顶部的主要导航，支持二级下拉菜单
 * @copyright 版权所有 (c) 2024 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.5.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button, Chip, DesignIcons } from '../UI';
import { categories } from '../../data/aiToolsDatabase'; // 导入AI工具分类数据
import { useNavigate } from 'react-router-dom'; // 导入useNavigate钩子
import './Navbar.css';
import './Navbar.mobile.css'; // 引入独立的移动端样式

/**
 * 导航菜单类型枚举
 */
enum NavMenuType {
  DESIGN = 'design',
  AI = 'ai',
  UIUX = 'uiux',
  THREE_D = '3d',
  ECOMMERCE = 'ecommerce',
  INTERIOR = 'interior',
  FONT = 'font'
}

/**
 * 导航切换选项接口
 */
interface NavSwitchItem {
  type: NavMenuType;
  name: string;
  icon: React.ComponentType<any>;
}

/**
 * 二级菜单项接口定义
 */
interface SubMenuItem {
  id: string;
  text: string;
  link: string;
  external: boolean;
  icon?: string;
  description?: string;
}

/**
 * 菜单项接口定义
 */
interface MenuItem {
  id?: string;
  text: string;
  link?: string;
  external?: boolean;
  label?: string;
  labelType?: 'info' | 'shop' | 'warning' | 'success';
  order?: number;
  visible?: boolean;
  icon?: string;
  description?: string;
  hasSubmenu?: boolean; // 是否有二级菜单
  submenu?: SubMenuItem[]; // 二级菜单项
}

/**
 * 导航栏配置接口
 */
interface NavbarConfig {
  logo: string;
  menuItems: MenuItem[];
}

/**
 * 图标组件映射
 */
const IconMap: { [key: string]: React.FC<{ size?: number; className?: string }> } = {
  home: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  article: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
      <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  material: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  circle: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="9" y1="9" x2="9.01" y2="9" stroke="currentColor" strokeWidth="2"/>
      <line x1="15" y1="9" x2="15.01" y2="9" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  navigation: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="3,11 22,2 13,21 11,13 3,11" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  ai: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 12L8 8" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 8L12 12" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 16L12 12" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 12L16 16" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  image: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  video: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="23,7 16,12 23,17" stroke="currentColor" strokeWidth="2" fill="none"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  text: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polyline points="4,7 4,4 20,4 20,7" stroke="currentColor" strokeWidth="2"/>
      <line x1="9" y1="20" x2="15" y2="20" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  design: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
      <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
      <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  ui: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  figma: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  ),
  // 数字孪生图标
  digital: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15.5 11.5H14.5L13 14.5L11 8.5L9.5 11.5H8.5M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.75009 14.4724 8.97129 18.311 10.948 20.0749C11.3114 20.3991 11.4931 20.5613 11.7058 20.6251C11.8905 20.6805 12.0958 20.6805 12.2805 20.6251C12.4932 20.5613 12.6749 20.3991 13.0383 20.0749C15.015 18.311 19.2362 14.4724 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 设计系统图标
  system: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9.5 7H14.5M9.5 12H14.5M9.5 17H14.5M5 16.5V17.5M5 11.5V12.5M5 6.5V7.5M19.5 3H4.5C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 设计团队图标
  designteam: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M16 18L19 21M18 13C18 15.2091 16.2091 17 14 17C11.7909 17 10 15.2091 10 13C10 10.7909 11.7909 9 14 9C16.2091 9 18 10.7909 18 13ZM4 21C4 17.134 7.13401 14 11 14C11.695 14 12.3663 14.1013 13 14.2899M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 车载UI图标
  carui: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 7H21M6 7V16M18 7V16M6 12H18M3 17H21M9 3H15M7 20.5C7 21.3284 6.32843 22 5.5 22C4.67157 22 4 21.3284 4 20.5C4 19.6716 4.67157 19 5.5 19C6.32843 19 7 19.6716 7 20.5ZM20 20.5C20 21.3284 19.3284 22 18.5 22C17.6716 22 17 21.3284 17 20.5C17 19.6716 17.6716 19 18.5 19C19.3284 19 20 19.6716 20 20.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 三维/3D图标
  threed: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 电商图标
  ecommerce: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // 室内设计图标
  interior: ({ size = 16, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 21H21M4 21V7L12 3L20 7V21M12 11V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 11H20M4 11H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

/**
 * 顶部导航栏组件
 * 负责站点顶部的主要导航，支持后台配置和二级下拉菜单
 * 
 * @version 1.5.0
 * @author UIED技术团队 (https://fsuied.com)
 */
const Navbar = () => {
  const navigate = useNavigate(); // 使用React Router的导航钩子
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [navConfig, setNavConfig] = useState<NavbarConfig | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null); // 激活的二级菜单
  const [currentNavType, setCurrentNavType] = useState<NavMenuType>(NavMenuType.UIUX); // 当前选中的导航类型，默认为UIUX

  // 根据当前路径设置导航类型
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes('/ai')) {
      setCurrentNavType(NavMenuType.AI);
    } else if (path.includes('/design')) {
      setCurrentNavType(NavMenuType.DESIGN);
    } else if (path.includes('/3d')) {
      setCurrentNavType(NavMenuType.THREE_D);
    } else if (path.includes('/ecommerce')) {
      setCurrentNavType(NavMenuType.ECOMMERCE);
    } else if (path.includes('/interior')) {
      setCurrentNavType(NavMenuType.INTERIOR);
    } else if (path.includes('/font')) {
      setCurrentNavType(NavMenuType.FONT);
    } else {
      // 根路径 "/" 和 "/uiux" 都显示为UIUX导航
      setCurrentNavType(NavMenuType.UIUX);
    }
  }, []);

  // 导航切换选项配置 - 包含所有导航类型
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

  // 切换导航类型
  const handleNavSwitch = (navType: NavMenuType) => {
    // 如果已经是当前类型，不做任何操作
    if (navType === currentNavType) {
      return;
    }
    
    setCurrentNavType(navType);
    
    if (navType === NavMenuType.AI) {
      navigate('/ai');
    } else if (navType === NavMenuType.DESIGN) {
      // 平面导航跳转到新的平面导航页面
      navigate('/design');
    } else if (navType === NavMenuType.THREE_D) {
      // 三维导航跳转到三维导航页面
      navigate('/3d');
    } else if (navType === NavMenuType.ECOMMERCE) {
      // 电商导航跳转到电商导航页面
      navigate('/ecommerce');
    } else if (navType === NavMenuType.INTERIOR) {
      // 室内导航跳转到室内导航页面
      navigate('/interior');
    } else if (navType === NavMenuType.FONT) {
      // 字体导航跳转到字体导航页面
      navigate('/font');
    } else if (navType === NavMenuType.UIUX) {
      // UIUX导航跳转到根路径
      navigate('/');
    }
  };

  // 检测屏幕尺寸
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 控制导航栏显示/隐藏的滚动监听
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  // 点击外部关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (anchorEl && !anchorEl.contains(event.target as Node)) {
        setAnchorEl(null);
      }
      
      // 关闭二级菜单
      if (activeSubmenu) {
        // 检查是否点击了导航切换下拉菜单区域外
        if (activeSubmenu === 'nav-switch' && 
            !(event.target as Element).closest('.nav-switch-container')) {
          setActiveSubmenu(null);
        }
        // 检查是否点击了常规二级菜单区域外
        else if (activeSubmenu !== 'nav-switch' && 
                !(event.target as Element).closest('.navbar-submenu-container')) {
          setActiveSubmenu(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorEl, activeSubmenu]);

  // 加载导航配置（使用默认配置）
  useEffect(() => {
    const initNavbarConfig = async () => {
      // 在开发环境中，直接使用默认配置，避免API调用错误
      const defaultConfig: NavbarConfig = {
        logo: "/logo-3.svg",
        menuItems: [
          { 
            id: 'homepage',
            text: '首页', 
            hasSubmenu: true,
            submenu: [
              {
                id: 'home-main',
                text: '首页',
                link: 'https://www.uied.cn/',
                external: true,
                icon: 'home',
                description: 'UIED设计师社区主页'
              },
              {
                id: 'home-articles',
                text: '学习文章',
                link: 'https://www.uied.cn/category/wenzhang',
                external: true,
                icon: 'article',
                description: '设计学习文章和教程'
              },
              {
                id: 'home-materials',
                text: '设计素材',
                link: 'https://www.uied.cn/sucai',
                external: true,
                icon: 'material',
                description: '优质设计素材资源'
              },
              {
                id: 'home-circle',
                text: '摸鱼圈子',
                link: 'https://www.uied.cn/circle',
                external: true,
                icon: 'circle',
                description: '设计师交流摸鱼圈'
              }
            ],
            order: 1,
            visible: true
          },
          { 
            id: '3',
            text: '快讯', 
            link: 'https://uiedtool.com/tools/ai-news', 
            external: true,
            order: 3,
            visible: true
          },
          { 
            id: '4',
            text: '摸鱼', 
            label: '偷学', 
            labelType: 'info', 
            link: 'https://www.uied.cn/circle', 
            external: true,
            order: 4,
            visible: true
          },
          { 
            id: '5',
            text: '榜单', 
            labelType: 'info', 
            link: 'https://hot.uied.cn/', 
            external: true,
            order: 4,
            visible: true
          },
          { 
            id: '6',
            text: 'AIGC', 
            label: 'New', 
            labelType: 'shop', 
            link: 'https://www.uied.cn/aigc', 
            external: true,
            order: 6,
            visible: true
          },
          { 
            id: '7',
            text: '投稿', 
            link: 'https://www.uied.cn/tougao', 
            external: true,
            order: 7,
            visible: true
          },
          { 
            id: '8',
            text: '设计团队', 
            link: 'https://fsuied.com/', 
            external: true,
            order: 8,
            visible: true
          },
          { 
            id: '9',
            text: 'DeepSeek', 
            label: '满血版', 
            labelType: 'info', 
            link: 'https://www.wenxiaobai.com/?forceLogin=true&source=uied&ad_source=uied', 
            external: true,
            order: 9,
            visible: true
          },
          { 
            id: '10',
            text: '在线工具', 
            label: '免费', 
            labelType: 'shop', 
            link: 'https://uiedtool.com/', 
            external: true,
            order: 10,
            visible: true
          },
        ]
      };
      
      setNavConfig(defaultConfig);
      console.log('✅ 导航配置已初始化，包含二级菜单功能');
    };

    initNavbarConfig();
  }, []);

  // 获取可见且排序的菜单项
  const getVisibleMenuItems = (): MenuItem[] => {
    if (!navConfig) return [];
    
    return navConfig.menuItems
      .filter(item => item.visible !== false)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  };

  const handleMenu = (event?: React.MouseEvent<HTMLButtonElement>) => {
    console.log('移动端菜单按钮被点击', {
      navConfig,
      visibleMenuItems: getVisibleMenuItems(),
      anchorEl,
      isMobile
    }); // 详细调试日志
    if (event) {
      setAnchorEl(event.currentTarget);
    } else {
      // 如果没有event参数，创建一个虚拟的元素来触发菜单显示
      setAnchorEl(document.createElement('div'));
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavItemClick = (link: string, external: boolean) => {
    console.log('点击菜单项:', link, external); // 调试信息
    if (external) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      // 使用React Router的navigate进行内部导航，而不是直接修改location
      navigate(link);
    }
    handleClose();
    setActiveSubmenu(null); // 关闭二级菜单
  };

  // 处理二级菜单切换
  const handleSubmenuToggle = (itemId: string, event: React.MouseEvent<Element>) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveSubmenu(activeSubmenu === itemId ? null : itemId);
  };

  // 渲染图标
  const renderIcon = (iconName?: string, size = 16) => {
    if (!iconName || !IconMap[iconName]) return null;
    const IconComponent = IconMap[iconName];
    return <IconComponent size={size} className="navbar-submenu-icon" />;
  };

  // 如果配置还未加载，显示加载状态
  if (!navConfig) {
    return (
      <div className="navbar-container navbar-visible">
        <div className="navbar-content">
          <div className="navbar-logo">
            <div className="navbar-brand">
              <span className="navbar-brand-main">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const visibleMenuItems = getVisibleMenuItems();

  return (
    <div 
      className={`navbar-container ${visible ? 'navbar-visible' : 'navbar-hidden'}`}
    >
      <div className="navbar-content">
        {/* 左侧Logo和导航切换 */}
        <div className="navbar-logo">
          <img
            src={navConfig.logo}
            alt="UIED Logo"
            className="navbar-logo-img"
            onClick={() => navigate('/')} // 使用navigate代替直接修改location
          />
          
          {/* 导航切换区域 */}
          <div className="nav-switch-container">
            <button 
              className="nav-switch-trigger"
              onClick={(e) => setActiveSubmenu(activeSubmenu === 'nav-switch' ? null : 'nav-switch')}
              aria-expanded={activeSubmenu === 'nav-switch'}
              aria-controls="nav-switch-dropdown"
            >
              <div className="nav-switch-current">
                {navSwitchItems.find(item => item.type === currentNavType) && (
                  <>
                    <div className="nav-switch-icon">
                      {React.createElement(navSwitchItems.find(item => item.type === currentNavType)!.icon, { size: 16 })}
                    </div>
                    <span className="nav-switch-name">
                      {navSwitchItems.find(item => item.type === currentNavType)!.name}
                    </span>
                    {/* 显示导航类型标签 */}
                    <div className="nav-switch-type-badge" data-type={currentNavType}>
                      {currentNavType.toUpperCase()}
                    </div>
                  </>
                )}
                <svg 
                  className={`nav-switch-arrow ${activeSubmenu === 'nav-switch' ? 'open' : ''}`}
                  width="12" 
                  height="12" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
            
            {/* 导航切换下拉菜单 */}
            {activeSubmenu === 'nav-switch' && (
              <div 
                className="nav-switch-dropdown"
                id="nav-switch-dropdown"
              >
                {navSwitchItems.map(item => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.type}
                      className={`nav-switch-option ${currentNavType === item.type ? 'active' : ''}`}
                      onClick={() => {
                        handleNavSwitch(item.type);
                        setActiveSubmenu(null);
                      }}
                      aria-selected={currentNavType === item.type}
                    >
                      <div className="nav-switch-option-icon">
                        <IconComponent size={16} />
                      </div>
                      <div className="nav-switch-option-content">
                        <div className="nav-switch-option-name">{item.name}</div>
                        <div className="nav-switch-option-desc">
                          {item.type === NavMenuType.DESIGN ? '平面设计资源导航' : 
                           item.type === NavMenuType.AI ? 'AI工具和资源导航' : 
                           item.type === NavMenuType.UIUX ? 'UI/UX设计资源导航' :
                           item.type === NavMenuType.THREE_D ? '3D设计工具导航' :
                           item.type === NavMenuType.ECOMMERCE ? '电商设计工具导航' :
                           item.type === NavMenuType.INTERIOR ? '室内设计工具导航' :
                           item.type === NavMenuType.FONT ? '字体设计资源导航' : '设计资源导航'}
                        </div>
                      </div>
                      {/* 为每个选项显示类型标签 */}
                      <div className="nav-switch-option-badge" data-type={item.type}>
                        {item.type.toUpperCase()}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* 右侧导航和按钮 */}
        {isMobile ? (
          <div className="navbar-mobile-actions">
            {/* 移动端搜索按钮 */}
            <button
              type="button"
              onClick={() => navigate('/search')}
              className="custom-button custom-button--text custom-button--medium navbar-mobile-search"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21L16.65 16.65"/>
              </svg>
            </button>
            
            <button
              type="button"
              onClick={handleMenu}
              className="custom-button custom-button--text custom-button--medium navbar-mobile-toggle"
            >
              ☰
            </button>
            {Boolean(anchorEl) && (
              <>
                <div className="navbar-mobile-overlay" onClick={handleClose} />
                <div className="navbar-mobile-menu">
                  {visibleMenuItems.map((item) => (
                    <div key={item.id || item.text}>
                      {/* 主菜单项 */}
                      <div 
                        className="navbar-mobile-menu-item"
                        onClick={(e) => {
                          if (item.hasSubmenu) {
                            handleSubmenuToggle(item.id!, e);
                          } else if (item.link) {
                            e.preventDefault();
                            e.stopPropagation();
                            handleNavItemClick(item.link, item.external || false);
                          }
                        }}
                      >
                        <div className="navbar-mobile-menu-content">
                          <span className="navbar-mobile-menu-text">{item.text}</span>
                          {item.label && (
                            <Chip 
                              size="small" 
                              variant={item.labelType === 'info' ? 'info' : 'error'}
                              className="navbar-mobile-chip"
                            >
                              {item.label}
                            </Chip>
                          )}
                        </div>
                                                 {item.hasSubmenu && (
                           <svg 
                             className={`navbar-mobile-arrow ${activeSubmenu === item.id ? 'open' : ''}`}
                             width="14" 
                             height="14" 
                             viewBox="0 0 24 24" 
                             fill="none"
                           >
                             <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                           </svg>
                         )}
                      </div>
                      
                      {/* 二级菜单 */}
                      {item.hasSubmenu && item.submenu && activeSubmenu === item.id && (
                        <div className="navbar-mobile-submenu">
                          {item.submenu.map((subItem) => (
                            <div
                              key={subItem.id}
                              className="navbar-mobile-submenu-item"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleNavItemClick(subItem.link, subItem.external);
                              }}
                            >
                              {renderIcon(subItem.icon, 14)}
                              <div className="navbar-mobile-submenu-content">
                                <span className="navbar-mobile-submenu-text">{subItem.text}</span>
                                {subItem.description && (
                                  <span className="navbar-mobile-submenu-desc">{subItem.description}</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="navbar-menu">
            {visibleMenuItems.map((item) => (
              <div key={item.id || item.text} className="navbar-menu-item">
                {item.hasSubmenu ? (
                  <div className="navbar-submenu-container">
                                                              <Button 
                       type="text"
                       onClick={(e) => handleSubmenuToggle(item.id!, e as React.MouseEvent<Element>)}
                       className="navbar-menu-button navbar-submenu-trigger"
                     >
                       {item.text}
                       <svg 
                         className={`navbar-submenu-arrow ${activeSubmenu === item.id ? 'open' : ''}`}
                         width="12" 
                         height="12" 
                         viewBox="0 0 24 24" 
                         fill="none"
                       >
                         <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </Button>
                    
                    {/* 桌面端二级菜单 */}
                    {activeSubmenu === item.id && item.submenu && (
                      <div className="navbar-submenu">
                        {item.submenu.map((subItem) => (
                          <div
                            key={subItem.id}
                            className="navbar-submenu-item"
                            onClick={() => handleNavItemClick(subItem.link, subItem.external)}
                          >
                            {renderIcon(subItem.icon)}
                            <div className="navbar-submenu-content">
                              <span className="navbar-submenu-text">{subItem.text}</span>
                              {subItem.description && (
                                <span className="navbar-submenu-desc">{subItem.description}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Button 
                    type="text"
                    onClick={() => item.link && handleNavItemClick(item.link, item.external || false)}
                    className="navbar-menu-button"
                  >
                    {item.text}
                  </Button>
                )}
                
                {item.label && (
                  <Chip 
                    size="small" 
                    variant={item.labelType === 'info' ? 'info' : 'error'}
                    className={`navbar-chip navbar-chip--${item.labelType}`}
                  >
                    {item.label}
                  </Chip>
                )}
              </div>
            ))}
            
            {/* 搜索按钮 - 放在最右边，只显示图标 */}
            <Button 
              type="text"
              onClick={() => navigate('/search')}
              className="navbar-search-button"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21L16.65 16.65"/>
              </svg>
            </Button>
          </div>
        )}
      </div>
      
      {/* 背景装饰 */}
      <div className="navbar-decoration" />
    </div>
  );
};

export default Navbar; 