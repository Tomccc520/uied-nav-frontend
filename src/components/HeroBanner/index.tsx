/**
 * @file HeroBanner/index.tsx
 * @description 首页横幅组件 - 包含滚动图标背景，支持旧版本接口兼容
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.0.0
 */

import React, { useState, useEffect } from 'react';
import { aiTools } from '../../data/aiToolsDatabase';
import { allWebsites } from '../../data/websiteDatabase';
import { allUIUXTools } from '../../data/uiuxToolsDatabase';
import { allThreeDTools } from '../../data/threeDToolsDatabase';
import { allEcommerceTools } from '../../data/ecommerceToolsDatabase';
import { allInteriorTools } from '../../data/interiorToolsDatabase';
import { allFontTools } from '../../data/fontToolsDatabase';
import { getAllDesignTools } from '../../data/designToolsDatabase';
import { hotRecommendations } from '../../data/hotRecommendations';
import './index.css';
import './index.mobile.css'; // 引入独立的移动端样式

// 旧版本接口兼容
interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  totalCount?: number;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  hotTags?: string[];
  onTagClick?: (tag: string) => void;
  searchPlaceholder?: string;
  searchPageType?: string;
  // 新增：页面特定配置
  pageType?: 'home' | 'ai' | 'uiux' | 'design' | 'search' | 'threed' | 'ecommerce' | 'interior' | 'font';
  customTitle?: string;
  customDescription?: string;
  showStats?: boolean;
}



/**
 * 首页横幅组件 - 兼容旧版本接口
 */
const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  totalCount,
  searchValue,
  onSearchChange,
  hotTags,
  onTagClick,
  searchPlaceholder = "搜索网站名称...",
  searchPageType = '',
  pageType = 'home',
  customTitle,
  customDescription,
  showStats = true
}) => {
  // 如果没有传入props，使用默认的新版本样式
  const isNewVersion = !title && !subtitle;

  // 网站收录数量统计
  const [websiteCount, setWebsiteCount] = useState(0);
  const [pageTitle, setPageTitle] = useState('');
  const [pageDescription, setPageDescription] = useState('');

  // 根据页面类型计算数量和设置内容
  useEffect(() => {
    try {
      let count = 0;
      let title = '';
      let description = '';
      
      switch (pageType) {
        case 'ai':
          count = Array.isArray(aiTools) ? aiTools.length : 0;
          title = customTitle || '发现强大的AI工具';
          description = customDescription || '聚合国内外AI精选内容，探索AI技术前沿与应用';
          break;
          
        case 'uiux':
          count = Array.isArray(allUIUXTools) ? allUIUXTools.length : 0;
          title = customTitle || '发现专业UI/UX工具';
          description = customDescription || '精选UI/UX设计师必备工具与资源，提升设计效率与创意灵感';
          break;
          
        case 'design':
          const designTools = getAllDesignTools();
          count = Array.isArray(designTools) ? designTools.length : 0;
          title = customTitle || '发现优质设计资源';
          description = customDescription || '汇聚全球优质设计网站与资源，为设计师提供无限创意灵感';
          break;
          
        case 'threed':
          count = Array.isArray(allThreeDTools) ? allThreeDTools.length : 0;
          title = customTitle || '发现专业3D工具';
          description = customDescription || '精选3D建模、渲染、动画等专业工具，助力三维设计创作';
          break;
          
        case 'ecommerce':
          count = Array.isArray(allEcommerceTools) ? allEcommerceTools.length : 0;
          title = customTitle || '发现电商设计工具';
          description = customDescription || '专业电商设计工具与资源，助力电商视觉营销与品牌建设';
          break;
          
        case 'interior':
          count = Array.isArray(allInteriorTools) ? allInteriorTools.length : 0;
          title = customTitle || '发现室内设计工具';
          description = customDescription || '专业室内设计软件与资源，打造理想空间设计方案';
          break;
          
        case 'font':
          count = Array.isArray(allFontTools) ? allFontTools.length : 0;
          title = customTitle || '发现优质字体资源';
          description = customDescription || '精选字体资源、字体工具与字体设计软件，助力字体设计创作';
          break;
          
        case 'search':
          // 搜索页面显示总数
          let total = 0;
          if (Array.isArray(aiTools)) total += aiTools.length;
          if (Array.isArray(allWebsites)) total += allWebsites.length;
          if (Array.isArray(allUIUXTools)) total += allUIUXTools.length;
          if (Array.isArray(allThreeDTools)) total += allThreeDTools.length;
          if (Array.isArray(allEcommerceTools)) total += allEcommerceTools.length;
          if (Array.isArray(allInteriorTools)) total += allInteriorTools.length;
          if (Array.isArray(hotRecommendations)) total += hotRecommendations.length;
          count = total;
          title = customTitle || '全站搜索';
          description = customDescription || '搜索全站工具与资源，快速找到您需要的内容';
          break;
          
        default: // home
          let homeTotal = 0;
          if (Array.isArray(aiTools)) homeTotal += aiTools.length;
          if (Array.isArray(allWebsites)) homeTotal += allWebsites.length;
          if (Array.isArray(allUIUXTools)) homeTotal += allUIUXTools.length;
          if (Array.isArray(allThreeDTools)) homeTotal += allThreeDTools.length;
          if (Array.isArray(allEcommerceTools)) homeTotal += allEcommerceTools.length;
          if (Array.isArray(allInteriorTools)) homeTotal += allInteriorTools.length;
          if (Array.isArray(hotRecommendations)) homeTotal += hotRecommendations.length;
          count = homeTotal;
          title = customTitle || '发现全世界最前沿的AI产品';
          description = customDescription || '为UI/UX设计师精心收集的AI工具导航，助力设计创新与效率提升';
          break;
      }
      
      setWebsiteCount(count);
      setPageTitle(title);
      setPageDescription(description);
    } catch (error) {
      console.error('计算网站数量失败:', error);
      setWebsiteCount(30000); // 设置默认值
      setPageTitle(customTitle || '发现优质工具');
      setPageDescription(customDescription || '精选优质工具与资源导航');
    }
  }, [pageType, customTitle, customDescription]);

  // 处理subtitle中的数字替换，支持HTML内容
  const processedSubtitle = subtitle ? subtitle.replace(
    /{count}/g, 
    totalCount ? totalCount.toLocaleString() : '0'
  ) : '';

  /**
   * 处理搜索
   */
  const handleSearch = (keyword: string) => {
    if (!keyword.trim()) return;
    
    // 新版本默认跳转到搜索页面
    if (isNewVersion) {
      window.location.href = `/search?q=${encodeURIComponent(keyword.trim())}`;
      return;
    }
    
    // 旧版本使用回调
    if (onSearchChange) {
      onSearchChange(keyword);
    }
  };

  /**
   * 处理回车键搜索
   */
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const target = e.target as HTMLInputElement;
      handleSearch(target.value);
    }
  };

  /**
   * 处理热门标签点击
   */
  const handleTagClick = (tag: string) => {
    if (isNewVersion) {
      window.location.href = `/search?q=${encodeURIComponent(tag)}`;
      return;
    }
    
    if (onSearchChange) {
      onSearchChange(tag);
    }
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  // 根据页面类型设置不同的热门搜索标签
  const getHotTags = () => {
    switch (pageType) {
      case 'ai':
        return [
          "即梦AI", "通义千问", "智谱清言", "文心一格", 
          "讯飞星火", "豆包", "月之暗面", "6pen Art", "意间AI"
        ];
      case 'uiux':
        return [
          "Figma", "蓝湖", "Figma插件", "Sketch", 
          "Axure", "UIED", "稿定设计"
        ];
      case 'design':
        return [
          "站酷", "平面灵感", "花瓣网", "UIED", "海报", 
          "设计灵感", "古田路9号", "堆糖"
        ];
      case 'threed':
        return [
          "3ds Max", "Maya", "Blender", "SketchUp", "KeyShot", 
          "V-Ray", "Corona", "Lumion", "Enscape"
        ];
      case 'ecommerce':
        return [
          "淘宝美工", "电商设计", "产品摄影", "详情页", "主图设计", 
          "店铺装修", "营销素材", "包装设计", "千牛设计"
        ];
      case 'interior':
        return [
          "SketchUp", "3ds Max", "AutoCAD", "V-Ray", "Lumion", 
          "Enscape", "室内设计", "家装设计", "效果图"
        ];
      case 'font':
        return [
          "中文字体", "英文字体", "免费商用字体", 
          "思源字体", "苹方"
        ];
      case 'search':
        return [
          "AI工具", "设计资源", "UI组件", "图标库", "字体", 
          "配色", "原型工具", "代码生成", "设计系统"
        ];
      default: // home
        return [
          "文心一言", "文心一格", "即时设计", "飞书", "智谱清言", 
          "6pen Art", "创客贴", "美图秀秀", "MasterGo"
        ];
    }
  };

  const currentHotTags = hotTags || getHotTags();

  // 根据页面类型添加主题类名
  const getThemeClass = () => {
    switch (pageType) {
      case 'ai':
        return 'ai-theme';
      case 'uiux':
        return 'uiux-theme';
      case 'threed':
        return 'threed-theme';
      case 'ecommerce':
        return 'ecommerce-theme';
      case 'interior':
        return 'interior-theme';
      case 'design':
        return 'design-theme';
      default:
        return '';
    }
  };

  return (
    <div className={`hero-banner ${isNewVersion ? 'hero-banner-new' : 'hero-banner-legacy'} ${getThemeClass()}`}>
      {/* 主要内容 */}
      <div className="hero-content">
        {isNewVersion ? (
          // 新版本样式 - 
          <div className="hero-text">
            <h1 className="hero-title">
              {pageType === 'ai' ? (
                <>
                  发现强大的<span className="highlight-text">AI工具</span>
                </>
              ) : pageType === 'uiux' ? (
                <>
                  发现专业<span className="highlight-text">UI/UX工具</span>
                </>
              ) : pageType === 'threed' ? (
                <>
                  发现顶级<span className="highlight-text">3D设计工具</span>
                </>
              ) : pageType === 'ecommerce' ? (
                <>
                  发现优质<span className="highlight-text">电商设计工具</span>
                </>
              ) : pageType === 'interior' ? (
                <>
                  发现专业<span className="highlight-text">室内设计工具</span>
                </>
              ) : pageType === 'design' ? (
                <>
                  发现精选<span className="highlight-text">平面设计资源</span>
                </>
              ) : pageTitle.includes('AI产品') ? (
                <>
                  发现全世界最前沿的
                  <span className="highlight-text">AI产品</span>
                </>
              ) : (
                pageTitle
              )}
            </h1>
            <p className="hero-description">
              {pageDescription}
            </p>
            
            {/* 网站收录数量统计 */}
            {showStats && (
              <div className="website-stats">
                <span className="stats-text">当前已收录</span>
                <span className="stats-number">{websiteCount.toLocaleString()}+</span>
                <span className="stats-text">个优质{pageType === 'ai' ? 'AI工具' : pageType === 'uiux' ? 'UI/UX工具' : pageType === 'design' ? '设计资源' : pageType === 'threed' ? '3D工具' : pageType === 'ecommerce' ? '电商设计工具' : pageType === 'interior' ? '室内设计工具' : '网站'}</span>
              </div>
            )}
            
            {/* 现代化搜索框 - */}
            <div className="hero-search-modern">
              <div className="search-container">
                <div className="search-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  onKeyPress={handleKeyPress}
                  className="search-input"
                />
                <button 
                  type="button"
                  className="search-btn"
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                    handleSearch(input.value);
                  }}
                >
                  搜索
                </button>
              </div>
            </div>

            {/* 热门搜索标签 */}
            <div className="hot-tags-modern">
              <span className="tags-label">热门搜索：</span>
              <div className="tags-list">
                {currentHotTags.slice(0, 6).map((tag, index) => (
                  <button
                    key={index}
                    className="tag-btn"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // 旧版本兼容样式
          <div className="hero-legacy-content">
            <h1 
              className="hero-title"
              dangerouslySetInnerHTML={{ __html: title || '' }}
            />
            <p 
              className="hero-subtitle"
              dangerouslySetInnerHTML={{ __html: processedSubtitle }}
            />
            
            {/* 搜索框 */}
            {onSearchChange && (
              <div className="hero-search">
                <div className="hero-search-input">
                  <div className="search-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="m21 21-4.35-4.35"/>
                    </svg>
                  </div>
                  <input
                    placeholder={searchPlaceholder}
                    value={searchValue || ''}
                    onChange={(e) => onSearchChange(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button 
                    className="search-button"
                    onClick={() => handleSearch(searchValue || '')}
                  >
                    搜索
                  </button>
                </div>
              </div>
            )}

            {/* 热门搜索标签 */}
            {hotTags && hotTags.length > 0 && (
              <div className="hot-search-tags">
                <span className="tag-label">热门搜索：</span>
                {hotTags.map((tag, index) => (
                  <button
                    key={index}
                    className="tag-item"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner; 