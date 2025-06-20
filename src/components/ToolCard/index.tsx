/**
 * @file ToolCard/index.tsx
 * @description 通用工具卡片组件 - 使用Motion动效，性能优化版本
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.3.0 - 恢复Motion动效，优化性能
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, Chip } from '../UI';
import type { Tool } from '../../hooks/useNavigation';
import { debugLog } from '../../utils/debugHelper';
import './index.mobile.css';

// 工具卡片属性接口
interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
  className?: string;
  index?: number; // 用于动画延迟
}

/**
 * 获取网站的favicon，多重备用方案
 * @param url 网站URL
 * @returns favicon URL数组（按优先级排序）
 */
const getFaviconUrls = (url: string): string[] => {
  try {
    const urlObj = new URL(url);
    const domain = urlObj.hostname;
    
    return [
      // 1. 直接获取网站根目录favicon（最可靠）
      `${urlObj.protocol}//${domain}/favicon.ico`,
      // 2. 使用icon.horse服务（稳定性好）
      `https://icon.horse/icon/${domain}`,
      // 3. 尝试常见favicon路径
      `${urlObj.protocol}//${domain}/favicon.png`,
      `${urlObj.protocol}//${domain}/apple-touch-icon.png`,
      // 4. 使用DuckDuckGo的favicon服务
      `https://icons.duckduckgo.com/ip3/${domain}.ico`,
      // 5. 使用百度图标服务
      `https://statics.dnspod.cn/proxy_favicon/_/favicon?domain=${domain}`,
      // 6. 使用UomgAPI图标服务
      `https://api.uomg.com/api/get.favicon?url=${domain}`,
      // 7. 使用360搜索图标服务
      `https://ico.chinaz.net/${domain}`,
      // 8. Google Favicon API（备选）
      `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
      // 9. Favicon.yandex服务
      `https://favicon.yandex.net/favicon/${domain}`
    ];
  } catch (error) {
    debugLog.warn('无法解析URL:', url, error);
    return [];
  }
};

/**
 * 通用工具卡片组件 - Motion动效版本
 * @param props 组件属性
 * @returns 工具卡片JSX元素
 */
const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick, className = '', index = 0 }) => {
  // 优先使用自定义iconUrl，然后是自动获取的icon
  const [currentIconUrl, setCurrentIconUrl] = useState<string | null>(tool.iconUrl || tool.icon || null);
  const [iconError, setIconError] = useState(false);
  const [fallbackUrls, setFallbackUrls] = useState<string[]>([]);
  const [currentFallbackIndex, setCurrentFallbackIndex] = useState(0);

  // 初始化备用favicon URLs
  useEffect(() => {
    if (tool.url) {
      // 获取API备用方案
      const apiUrls = getFaviconUrls(tool.url);
      
      if (tool.iconUrl) {
        // 如果有自定义iconUrl，将其作为第一选择，API方案作为备用
        const allUrls = [tool.iconUrl, ...apiUrls];
        setFallbackUrls(allUrls);
        setCurrentIconUrl(tool.iconUrl);
        setCurrentFallbackIndex(0);
      } else if (tool.icon) {
        // 如果有icon字段，使用它，不设置备用方案
        setCurrentIconUrl(tool.icon);
        setFallbackUrls([]);
        setCurrentFallbackIndex(0);
      } else {
        // 没有自定义图标时，使用API获取方案
        setFallbackUrls(apiUrls);
        if (apiUrls.length > 0) {
          setCurrentIconUrl(apiUrls[0]);
          setCurrentFallbackIndex(0);
        }
      }
    }
  }, [tool.iconUrl, tool.icon, tool.url]);

  /**
   * 处理图标加载错误，尝试下一个备用URL
   */
  const handleIconError = () => {
    const isCustomIcon = currentFallbackIndex === 0 && tool.iconUrl;
    const currentType = isCustomIcon ? '自定义图标' : 'API图标';
    
    debugLog.dev(`[${tool.name}] ${currentType}加载失败: ${currentIconUrl}`);
    
    if (fallbackUrls.length > 0 && currentFallbackIndex < fallbackUrls.length - 1) {
      const nextIndex = currentFallbackIndex + 1;
      setCurrentFallbackIndex(nextIndex);
      setCurrentIconUrl(fallbackUrls[nextIndex]);
      
      const nextType = nextIndex === 1 && tool.iconUrl ? 'API备用方案' : `备用方案${nextIndex + 1}`;
      debugLog.dev(`[${tool.name}] 尝试${nextType}: ${fallbackUrls[nextIndex]}`);
    } else {
      // 所有备用方案都失败，显示文字图标
      debugLog.dev(`[${tool.name}] 所有图标获取方案失败，使用文字图标`);
      setIconError(true);
      setCurrentIconUrl(null);
    }
  };

  /**
   * 处理图标加载成功
   */
  const handleIconLoad = () => {
    setIconError(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3,
        delay: index * 0.05, // 减少延迟时间，提升性能
        ease: "easeOut"
      }}
      className="tool-card-wrapper"
    >
      <Card
        hoverable
        className={`tool-item-card ${className}`}
        onClick={onClick}
      >
        {/* 左侧网址图标 - 更大尺寸 */}
        <div className="tool-item-icon">
          {currentIconUrl && !iconError ? (
            <motion.img 
              src={currentIconUrl} 
              alt={`${tool.name} favicon`}
              loading="lazy"
              onError={handleIconError}
              onLoad={handleIconLoad}
              className="tool-icon-img"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.2,
                delay: index * 0.05 + 0.1,
                ease: "easeOut"
              }}
            />
          ) : (
            <motion.div 
              className="tool-item-icon-fallback"
              title={`${tool.name} 图标`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.2,
                delay: index * 0.05 + 0.1,
                ease: "easeOut"
              }}
            >
              {tool.name.charAt(0).toUpperCase()}
            </motion.div>
          )}
        </div>

        {/* 右侧内容区域 */}
        <div className="tool-item-content">
          <div className="tool-item-header">
            <div className="tool-item-info">
              <h4 className="tool-item-name">{tool.name}</h4>
            </div>
          </div>
          
          <p className="tool-item-description">{tool.description}</p>
          
          <div className="tool-item-meta">
            <div className="tool-item-tags">
              {tool.tags.slice(0, 3).map(tag => (
                <span key={tag} className="tool-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ToolCard; 