/**
 * @file DesignArticleGrid.tsx
 * @description 组件设计文章网格组件，展示设计文章，一行6个网格布局，支持子分类切换
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.3.0 - 修复切换分类问题，优化缓存机制和交互体验
 */
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './DesignArticleGrid.css';

// 导入实际的WordPress API服务
import wordPressApi from '../services/wordpress-api';

// 导入RankItem类型
interface RankItem {
  id: string;
  name: string;
  description?: string;
  link: string;
  thumbnail?: string;
  date?: string;
  authorName?: string;
  authorAvatar?: string;
  viewCount?: number;
  score?: number;
  timeAgo?: string;
  isNew?: boolean;
  isHot?: boolean;
  isFeatured?: boolean;
  category?: string;
  subCategory?: string;
  tags?: string[];
}

// 子分类选项接口
interface TagOption {
  key: string;
  name: string;
  type: 'category';
  id: number;
  description?: string;
}

// 定义标签选项（更新为新的分类ID）
const TAG_OPTIONS: TagOption[] = [
  { key: 'UI', name: 'UI', type: 'category', id: 334 },
  { key: 'UX', name: 'UX', type: 'category', id: 337 },
  { key: 'product', name: '产品', type: 'category', id: 336 },
  { key: 'graphic', name: '平面', type: 'category', id: 335 },
  { key: '3d', name: '三维', type: 'category', id: 1031 },
  { key: 'tips', name: '设计干货', type: 'category', id: 307 },
  { key: 'inspiration', name: '设计灵感', type: 'category', id: 1861 },
  { key: 'Font', name: '字体', type: 'category', id: 319 }, // 添加字体分类，使用平面设计分类ID
  { key: 'AIGC', name: 'AIGC', type: 'category', id: 417 }, // 添加AIGC分类
];

/**
 * 标签说明:
 * - UI: UI设计内容 (分类ID: 334)
 * - UX: UX设计内容 (分类ID: 337)
 * - product: 产品设计内容 (分类ID: 336)
 * - graphic: 平面设计内容 (分类ID: 335)
 * - 3d: 三维设计内容 (分类ID: 1031)
 * - tips: 设计干货内容 (分类ID: 307)
 * - inspiration: 设计灵感内容 (分类ID: 1861)
 * - Font: 字体设计内容 (分类ID: 335) - 修正字体分类名称
 * - AIGC: AI生成内容设计 (分类ID: 417) - AI设计相关文章
 */

// 常量定义
const CACHE_EXPIRE_TIME = 15 * 60 * 1000; // 15分钟缓存过期，减少缓存时间以保证数据及时更新

// 全局缓存 - 组件级别，持久化到sessionStorage
const getFromSessionStorage = (key: string) => {
  try {
    const storedData = sessionStorage.getItem(key);
    if (storedData) {
      const { data, expiresAt } = JSON.parse(storedData);
      if (expiresAt > Date.now()) {
        return data;
      } else {
        // 缓存过期，清除
        sessionStorage.removeItem(key);
      }
    }
  } catch (e) {
    console.warn('从SessionStorage获取缓存失败', e);
  }
  return null;
};

const saveToSessionStorage = (key: string, data: any) => {
  try {
    const cacheData = {
      data,
      expiresAt: Date.now() + CACHE_EXPIRE_TIME
    };
    sessionStorage.setItem(key, JSON.stringify(cacheData));
  } catch (e) {
    console.warn('保存到SessionStorage失败', e);
  }
};

// 根据环境处理图片URL
const getImageUrl = (url?: string) => {
  if (!url) return undefined;
  return url;
};

// 统一的图片错误处理函数
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const img = e.currentTarget;
  
  if (img.dataset.errorHandled) {
    return;
  }
  
  img.dataset.errorHandled = 'true';
  img.src = 'https://img.uied.cn/wp-content/themes/uied/assets/images/default-thumbnail.jpg';
  
  const container = img.parentElement;
  if (container && container.classList.contains('article-image-container')) {
    container.classList.add('image-error');
  }
};

// 生成一些本地备用数据（如果API完全不可用）
const generateFallbackData = (categoryId: number, count: number): RankItem[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `local-${categoryId}-${index}`,
    name: `设计文章示例 ${index + 1}`,
    description: '这是一篇设计文章的本地备用数据，当API无法访问时显示',
    link: 'https://www.uied.cn',
    thumbnail: 'https://img.uied.cn/wp-content/themes/uied/assets/images/default-thumbnail.jpg',
    date: new Date().toLocaleDateString(),
    timeAgo: '刚刚',
    isNew: true
  }));
};

// 案例数据 - 用于样式调试
const generateMockData = (count: number): RankItem[] => {
  const mockArticles = [
    {
      id: 'mock-1',
      name: '2024年最受欢迎的UI设计趋势',
      description: '探索2024年最热门的UI设计趋势，包括新拟态、玻璃形态和动态交互设计',
      link: 'https://www.uied.cn/article/ui-trends-2024',
      thumbnail: 'https://img.uied.cn/wp-content/uploads/2024/01/ui-trends-cover.jpg',
      date: '2024-01-15',
      timeAgo: '2天前',
      isHot: true
    },
    {
      id: 'mock-2', 
      name: 'Figma插件推荐：提升设计效率的10个神器',
      description: '精选10个必备Figma插件，让你的设计工作效率翻倍',
      link: 'https://www.uied.cn/article/figma-plugins-2024',
      thumbnail: 'https://img.uied.cn/wp-content/uploads/2024/01/figma-plugins.jpg',
      date: '2024-01-14',
      timeAgo: '3天前',
      isFeatured: true
    },
    {
      id: 'mock-3',
      name: '移动端设计规范：iOS vs Android差异对比',
      description: '深度解析iOS和Android设计规范的差异，帮你做出更好的移动端设计',
      link: 'https://www.uied.cn/article/mobile-design-guidelines',
      thumbnail: 'https://img.uied.cn/wp-content/uploads/2024/01/mobile-design.jpg',
      date: '2024-01-13',
      timeAgo: '4天前',
      isNew: true
    },
    {
      id: 'mock-4',
      name: '色彩心理学在UI设计中的应用',
      description: '了解色彩对用户心理的影响，掌握色彩搭配的黄金法则',
      link: 'https://www.uied.cn/article/color-psychology-ui',
      thumbnail: 'https://img.uied.cn/wp-content/uploads/2024/01/color-psychology.jpg',
      date: '2024-01-12',
      timeAgo: '5天前'
    },
    {
      id: 'mock-5',
      name: '2024年网页设计灵感：30个优秀案例分析',
      description: '精选30个2024年优秀网页设计案例，分析设计亮点和创意思路',
      link: 'https://www.uied.cn/article/web-design-inspiration-2024',
      thumbnail: 'https://img.uied.cn/wp-content/uploads/2024/01/web-inspiration.jpg',
      date: '2024-01-11',
      timeAgo: '6天前'
    },
    {
      id: 'mock-6',
      name: 'AI设计工具大盘点：设计师的智能助手',
      description: '盘点最新AI设计工具，探索人工智能如何改变设计行业',
      link: 'https://www.uied.cn/article/ai-design-tools-2024',
      thumbnail: 'https://img.uied.cn/wp-content/uploads/2024/01/ai-design-tools.jpg',
      date: '2024-01-10',
      timeAgo: '1周前'
    },
    {
      id: 'mock-7',
      name: '用户体验设计的5个核心原则',
      description: '深入理解UX设计的基本原则，打造更好的用户体验',
      link: 'https://www.uied.cn/article/ux-design-principles',
      thumbnail: 'https://img.uied.cn/wp-content/uploads/2024/01/ux-principles.jpg',
      date: '2024-01-09',
      timeAgo: '1周前'
    },
    {
      id: 'mock-8',
      name: '设计系统构建指南：从零到一的完整流程',
      description: '学习如何构建一套完整的设计系统，提升团队协作效率',
      link: 'https://www.uied.cn/article/design-system-guide',
      thumbnail: 'https://img.uied.cn/wp-content/uploads/2024/01/design-system.jpg',
      date: '2024-01-08',
      timeAgo: '1周前'
    }
  ];
  
  return mockArticles.slice(0, count);
};

interface DesignArticleGridProps {
  title?: string;
  limit?: number;
  useMock?: boolean; // 是否使用模拟数据
  enableSubCategories?: boolean; // 是否启用子分类切换
  defaultSubCategory?: string; // 默认选中的子分类
  showMoreButton?: boolean; // 是否显示查看更多按钮
  moreButtonLink?: string; // 查看更多按钮链接
}

const DesignArticleGrid: React.FC<DesignArticleGridProps> = ({ 
  title = "设计文章",
  limit = 8, // 默认显示8个文章（超过一行，提供更丰富的内容）
  useMock = false, // 恢复使用接口数据
  enableSubCategories = false, // 默认不启用子分类切换
  defaultSubCategory = 'UI', // 默认选择UI分类
  showMoreButton = false, // 默认不显示查看更多按钮
  moreButtonLink = '/articles' // 默认查看更多按钮链接
}) => {
  // 当前选中的子分类
  const [activeTag, setActiveTag] = useState<string>(defaultSubCategory);
  
  // 状态管理
  const [articles, setArticles] = useState<RankItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  
  // 使用useRef跟踪加载状态，避免重复请求
  const isLoadingRef = useRef(false);
  
  // 使用useRef存储组件是否已挂载
  const isMountedRef = useRef(true);
  
  // 获取当前选中分类的ID
  const getCurrentCategoryId = useCallback(() => {
    const activeOption = TAG_OPTIONS.find(option => option.key === activeTag);
    return activeOption ? activeOption.id : 334; // 默认为UI设计分类
  }, [activeTag]);

  // 获取文章数据
  const fetchArticles = useCallback(async (forceRefresh = false) => {
    // 如果已经在加载中，则跳过
    if (isLoadingRef.current) {
      console.log('DesignArticleGrid: 已在加载中，跳过重复请求');
      return;
    }
    
    const categoryId = getCurrentCategoryId();
    console.log('DesignArticleGrid: 开始获取文章，分类ID:', categoryId, '当前标签:', activeTag, '强制刷新:', forceRefresh);
    
    // 创建缓存键
    const cacheKey = `design-articles-${categoryId}-${limit}`;
    
    // 如果不是强制刷新，首先尝试从sessionStorage获取缓存
    if (!forceRefresh) {
      const cachedData = getFromSessionStorage(cacheKey);
      if (cachedData) {
        console.log('DesignArticleGrid: 使用缓存数据:', cachedData.length, '条');
        if (isMountedRef.current) {
          setArticles(cachedData);
          setIsLoading(false);
          setError(null);
        }
        return;
      }
    }
    
    // 设置加载标志
    if (isMountedRef.current) {
      setIsLoading(true);
      setError(null);
    }
    isLoadingRef.current = true;
    
    try {
      console.log('DesignArticleGrid: 调用API获取数据，参数:', {
        categoryId,
        page: 1,
        perPage: limit,
        orderBy: 'date',
        order: 'desc',
        useMock
      });
      
      let response;
      
      // 如果使用模拟数据，直接返回案例数据
      if (useMock) {
        console.log('DesignArticleGrid: 使用案例数据进行样式调试');
        response = generateMockData(limit);
      } else {
        // 获取最新文章
        response = await wordPressApi.getCategoryPosts({
          categoryId: categoryId,
          page: 1,
          perPage: limit,
          orderBy: 'date',
          order: 'desc',
          useMock: false // 使用实际API数据
        });
      }
      
      console.log('DesignArticleGrid: 返回数据:', response);
      
      // 组件可能已卸载，检查挂载状态
      if (!isMountedRef.current) {
        console.log('DesignArticleGrid: 组件已卸载，停止处理');
        return;
      }
      
      if (Array.isArray(response) && response.length > 0) {
        console.log('DesignArticleGrid: 成功获取', response.length, '条文章');
        // 保存到sessionStorage
        saveToSessionStorage(cacheKey, response);
        
        // 更新状态
        setArticles(response);
        setError(null);
        setRetryCount(0); // 重置重试计数
      } else {
        console.warn('DesignArticleGrid: 未找到文章数据或数据格式错误');
        // 如果API返回空数据，尝试使用备用数据
        const fallbackData = generateFallbackData(categoryId, limit);
        setArticles(fallbackData);
        setError('暂无该分类的文章数据');
      }
    } catch (err) {
      console.error('DesignArticleGrid: 获取设计文章失败:', err);
      
      // 组件可能已卸载，检查挂载状态
      if (!isMountedRef.current) return;
      
      // 尝试从sessionStorage获取任何类别的缓存数据作为后备
      let foundFallback = false;
      for (const option of TAG_OPTIONS) {
        const fallbackCacheKey = `design-articles-${option.id}-${limit}`;
        const fallbackData = getFromSessionStorage(fallbackCacheKey);
        if (fallbackData && fallbackData.length > 0) {
          console.log('DesignArticleGrid: 使用后备缓存数据:', option.name);
          setArticles(fallbackData);
          setError('获取最新数据失败，显示缓存数据');
          foundFallback = true;
          break;
        }
      }
      
      // 如果仍然没有数据，使用本地备用数据
      if (!foundFallback) {
        console.log('DesignArticleGrid: 使用本地备用数据');
        const fallbackData = generateFallbackData(categoryId, limit);
        setArticles(fallbackData);
        setError('暂时无法连接到服务器，显示备用数据');
      }
      
      // 增加重试计数
      setRetryCount(prev => prev + 1);
    } finally {
      // 组件可能已卸载，检查挂载状态
      if (isMountedRef.current) {
        setIsLoading(false);
      }
      isLoadingRef.current = false;
    }
  }, [limit, useMock, getCurrentCategoryId, activeTag]);

  // 处理子分类切换
  const handleTagChange = useCallback((tagKey: string) => {
    // 如果正在加载中，忽略请求
    if (isLoadingRef.current) {
      console.log('DesignArticleGrid: 正在加载中，忽略切换请求');
      return;
    }
    
    console.log('DesignArticleGrid: 切换分类', tagKey);
    setActiveTag(tagKey);
    
    // 切换分类后立即清空数据并重新获取
    setArticles([]);
    setError(null);
    setIsLoading(true);
    
    // 重置加载状态，允许重新获取数据
    isLoadingRef.current = false;
    
    // 使用setTimeout确保状态更新完成后再获取数据
    setTimeout(() => {
      if (isMountedRef.current) {
        fetchArticles(true); // 强制刷新，不使用缓存
      }
    }, 50);
  }, [fetchArticles]);

  // 重试加载数据
  const handleRetry = useCallback(() => {
    if (isLoadingRef.current) return;
    setRetryCount(0);
    fetchArticles(true); // 强制刷新
  }, [fetchArticles]);

  // 组件挂载时获取数据
  useEffect(() => {
    console.log('DesignArticleGrid: 组件挂载，获取初始数据');
    fetchArticles();
    
    // 清理函数
    return () => {
      console.log('DesignArticleGrid: 组件卸载');
      isMountedRef.current = false;
    };
  }, []); // 只在组件挂载时执行一次

  // 当activeTag变化时获取数据
  useEffect(() => {
    // 如果不是初始加载（articles为空），则获取数据
    if (articles.length > 0) {
      console.log('DesignArticleGrid: activeTag变化，重新获取数据');
      fetchArticles(true); // 强制刷新
    }
  }, [activeTag]); // 只依赖activeTag

  // 渲染文章卡片 - 优化鼠标移入效果
  const renderArticles = () => {
    // 橙色色阶，前三名使用不同颜色，后面统一灰色
    const rankColors = [
      '#FF6B00', // 第1名 - 深橙色
      '#FF7E1F', // 第2名 - 中橙色
      '#FF913E', // 第3名 - 浅橙色
      '#9E9E9E', // 第4名及以后 - 灰色
      '#9E9E9E', // 第5名及以后 - 灰色
      '#9E9E9E', // 第6名及以后 - 灰色
      '#9E9E9E', // 第7名及以后 - 灰色
      '#9E9E9E'  // 第8名及以后 - 灰色
    ];
    
    return articles.slice(0, limit).map((article, index) => (
      <motion.div 
        key={article.id} 
        className="article-card" 
        onClick={() => window.open(article.link, '_blank', 'noopener,noreferrer')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.3,
          delay: index * 0.05, // 减少延迟时间
          ease: "easeOut"
        }}
        style={{ cursor: "pointer" }}
      >
        <div className="article-image-container">
          {article.thumbnail ? (
            <motion.img
              alt={article.name || '文章图片'}
              src={article.thumbnail ? getImageUrl(article.thumbnail) : undefined}
              className="article-image"
              onError={handleImageError}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            />
          ) : (
            <div className="article-image-placeholder"></div>
          )}
        </div>
        <div className="article-content">
          <h3 className="article-title" title={article.name}>
            <motion.span 
              className="article-rank"
              style={{ 
                backgroundColor: index < rankColors.length ? rankColors[index] : '#9E9E9E'
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 0.25,
                delay: index * 0.05 + 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              No.{index + 1}
            </motion.span>
            <span className="article-title-text">{article.name}</span>
          </h3>
        </div>
      </motion.div>
    ));
  };

  // 骨架屏加载中
  const renderSkeleton = () => {
    return Array(limit).fill(null).map((_, index) => (
      <motion.div 
        key={`skeleton-${index}`} 
        className="article-card skeleton"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.3,
          delay: index * 0.05,
          ease: "easeOut"
        }}
      >
        <div className="skeleton-image"></div>
        <div className="skeleton-content">
          <div className="skeleton-title"></div>
        </div>
      </motion.div>
    ));
  };

  return (
    <div className="design-article-grid-container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span>{title}</span>
        </motion.div>
        {/* 查看更多按钮 */}
        {showMoreButton && (
          <motion.a 
            href={moreButtonLink} 
            className="view-more-btn desktop-only" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            // 移除鼠标悬停动效
          >
            查看更多 {'>'}
          </motion.a>
        )}
      </motion.div>
      
      {/* 子分类切换标签 - 只有在启用时才显示 */}
      {enableSubCategories && (
        <motion.div 
          className="article-subcategories"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="subcategory-tabs">
            {TAG_OPTIONS.map((tag, index) => (
              <motion.button
                key={tag.key}
                className={`subcategory-tab ${activeTag === tag.key ? 'active' : ''} ${isLoadingRef.current ? 'disabled' : ''}`}
                onClick={() => handleTagChange(tag.key)}
                title={tag.description}
                disabled={isLoadingRef.current} // 加载中时禁用切换
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.4 + index * 0.03,
                  ease: "easeOut"
                }}
                // 移除鼠标悬停动效
              >
                <span className="tab-name">{tag.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
      
      {error && !isLoading ? (
        <div className="empty-container">
          <div className="empty-content">
            <p>{error}</p>
            {retryCount < 5 && (
              <button 
                className="retry-button" 
                onClick={handleRetry}
                disabled={isLoadingRef.current}
              >
                重试
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="article-grid">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="skeleton-grid"
              >
                {renderSkeleton()}
              </motion.div>
            ) : (
              <motion.div
                key={`articles-${activeTag}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="articles-grid"
              >
                {renderArticles()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
      
      {/* 移动端底部的查看更多按钮 */}
      {showMoreButton && (
        <div className="mobile-view-more">
          <a href={moreButtonLink} className="mobile-view-more-btn" target="_blank" rel="noopener noreferrer">
            查看更多 {'>'}
          </a>
        </div>
      )}
    </div>
  );
};

export default DesignArticleGrid;