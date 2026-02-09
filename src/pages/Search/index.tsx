/**
 * @file Search/index.tsx
 * @description 全站搜索页面 - 支持AI智能搜索、搜索历史、筛选、分页
 * @version 4.2.0
 */

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import HeroBanner from '../../components/HeroBanner';
import ToolCard from '../../components/ToolCard';
import { WebsiteExitModal } from '../../components/UI';
import AISearchSidebar from '../../components/AISearchSidebar';
import api from '../../services/api';
import { useFrontendConfig } from '../../hooks/useFrontendConfig';
import './index.css';

const bgImage = '/bg.jpg';
const SEARCH_HISTORY_KEY = 'search_history';
const MAX_HISTORY = 10;
const PAGE_SIZE = 24;

// 搜索结果接口
interface SearchResult {
  id: string;
  name: string;
  description: string;
  url: string;
  iconUrl?: string;
  category?: string;
  tags: string[];
  isNew?: boolean;
  isHot?: boolean;
  isFeatured?: boolean;
  source?: string;
  isAiResult?: boolean;
}

// 页面配置
const PAGE_SLUGS = ['uiux', 'ai', 'design', '3d', 'ecommerce', 'interior', 'font'];
const SOURCE_LABELS: Record<string, string> = {
  all: '全部来源',
  uiux: 'UI/UX',
  ai: 'AI工具',
  design: '平面设计',
  '3d': '3D设计',
  ecommerce: '电商',
  interior: '室内设计',
  font: '字体'
};

// AI 思考步骤
const AI_THINKING_STEPS = [
  { text: '理解搜索意图', icon: '🧠', color: '#6366F1' },
  { text: '分析关键词语义', icon: '📝', color: '#8B5CF6' },
  { text: '匹配相关资源', icon: '🔍', color: '#A855F7' },
  { text: '智能排序结果', icon: '⚡', color: '#D946EF' },
  { text: '生成推荐', icon: '✨', color: '#EC4899' }
];

// Framer Motion 动画配置
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      staggerChildren: 0.12
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.25 }
  }
};

const stepVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' as const }
  }
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut' as const
    }
  }
};

const spinnerVariants = {
  spin: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear' as const
    }
  }
};

const progressVariants = {
  initial: { width: 0 },
  animate: (progress: number) => ({
    width: `${progress}%`,
    transition: { duration: 0.5, ease: 'easeOut' as const }
  })
};

// AI 思考动画组件
const AIThinkingAnimation: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const progress = ((currentStep + 1) / AI_THINKING_STEPS.length) * 100;
  
  return (
    <motion.div
      className="ai-thinking-container-v2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* 头部 */}
      <motion.div className="ai-thinking-header-v2">
        <motion.div 
          className="ai-brain-icon"
          variants={pulseVariants}
          animate="pulse"
        >
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="url(#brain-gradient)" fillOpacity="0.15"/>
            <path d="M12 6v6l4 2" stroke="url(#brain-gradient)" strokeWidth="2" strokeLinecap="round"/>
            <defs>
              <linearGradient id="brain-gradient" x1="2" y1="2" x2="22" y2="22">
                <stop stopColor="#6366F1"/>
                <stop offset="1" stopColor="#EC4899"/>
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        <div className="ai-thinking-title-v2">
          <span className="title-text">AI 正在思考</span>
          <motion.span 
            className="thinking-dots"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            ...
          </motion.span>
        </div>
      </motion.div>

      {/* 步骤列表 */}
      <div className="ai-thinking-steps-v2">
        {AI_THINKING_STEPS.map((step, index) => {
          const isActive = index === currentStep;
          const isDone = index < currentStep;
          
          return (
            <motion.div
              key={index}
              className={`ai-step-v2 ${isActive ? 'active' : ''} ${isDone ? 'done' : ''}`}
              variants={stepVariants}
              style={{ 
                '--step-color': step.color,
                borderColor: isActive ? step.color : 'transparent'
              } as React.CSSProperties}
            >
              <motion.div 
                className="step-icon-wrapper"
                animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                transition={{ duration: 0.6, repeat: isActive ? Infinity : 0 }}
              >
                <span className="step-emoji">{step.icon}</span>
              </motion.div>
              
              <span className="step-label">{step.text}</span>
              
              <div className="step-status">
                {isActive && (
                  <motion.div 
                    className="step-spinner"
                    variants={spinnerVariants}
                    animate="spin"
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.2"/>
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </motion.div>
                )}
                {isDone && (
                  <motion.div 
                    className="step-check"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 进度条 */}
      <div className="ai-progress-wrapper">
        <div className="ai-progress-track">
          <motion.div 
            className="ai-progress-fill"
            variants={progressVariants}
            initial="initial"
            animate="animate"
            custom={progress}
          />
        </div>
        <span className="ai-progress-text">{Math.round(progress)}%</span>
      </div>

      {/* 底部提示 */}
      <motion.p 
        className="ai-thinking-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.5 }}
      >
        正在从 {'>'}2000 个资源中智能匹配...
      </motion.p>
    </motion.div>
  );
};

const SearchPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [allResults, setAllResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [totalWebsites, setTotalWebsites] = useState(0);
  
  // 分页状态
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  
  // 筛选状态
  const [sourceFilter, setSourceFilter] = useState('all');
  
  // AI 搜索状态
  const [isAiMode, setIsAiMode] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMessage, setAiMessage] = useState('');
  const [aiThinkingStep, setAiThinkingStep] = useState(0);
  const [showThinking, setShowThinking] = useState(false);
  
  // 搜索历史
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  
  // 搜索建议
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
  // 相关搜索
  const [relatedKeywords, setRelatedKeywords] = useState<string[]>([]);
  
  // 网站跳转弹窗状态
  const [isExitModalVisible, setIsExitModalVisible] = useState(false);
  const [currentExitWebsite, setCurrentExitWebsite] = useState<SearchResult | null>(null);
  
  // 获取前端配置（跳转弹窗自定义文案）
  const { config: frontendConfig } = useFrontendConfig();
  const showDirectArrow = frontendConfig?.pageGlobalConfig?.showDirectArrow ?? false;
  const websiteClickMode = frontendConfig?.pageGlobalConfig?.websiteClickMode ?? 'detail';
  const directArrowNewWindow = frontendConfig?.pageGlobalConfig?.directArrowNewWindow ?? true;
  // 根据模式决定箭头文案和方向
  const arrowLabel = websiteClickMode === 'directExternal' ? '查看详情' : '直达网站';
  const arrowIsExternal = websiteClickMode !== 'directExternal';

  // 直达箭头点击回调
  const handleDirectVisit = useCallback((tool: any, e: React.MouseEvent) => {
    const url = tool?.url;
    if (url) {
      if (directArrowNewWindow) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = url;
      }
    }
  }, [directArrowNewWindow]);
  
  // AI 侧边栏状态
  const [showAiSidebar, setShowAiSidebar] = useState(false);

  // 热门搜索标签
  const hotTags = ['AI绘画', 'ChatGPT', 'Figma', '免费工具', 'UI设计', 'Midjourney', '字体', '图标库', 'SVG'];

  // AI 思考动画
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (aiLoading && showThinking) {
      interval = setInterval(() => {
        setAiThinkingStep(prev => (prev + 1) % AI_THINKING_STEPS.length);
      }, 800);
    }
    return () => clearInterval(interval);
  }, [aiLoading, showThinking]);

  // 加载搜索历史
  useEffect(() => {
    const history = localStorage.getItem(SEARCH_HISTORY_KEY);
    if (history) {
      try {
        setSearchHistory(JSON.parse(history));
      } catch (e) {
        console.error('加载搜索历史失败');
      }
    }
  }, []);

  // 保存搜索历史
  const saveSearchHistory = useCallback((query: string) => {
    if (!query.trim()) return;
    
    setSearchHistory(prev => {
      const newHistory = [query, ...prev.filter(h => h !== query)].slice(0, MAX_HISTORY);
      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  }, []);

  // 清除搜索历史
  const clearSearchHistory = useCallback(() => {
    setSearchHistory([]);
    localStorage.removeItem(SEARCH_HISTORY_KEY);
  }, []);

  // 获取总网站数量
  const fetchTotalCount = useCallback(async () => {
    try {
      const response = await api.get('/websites', { params: { pageSize: 1 } });
      if (response.data?.pagination?.total) {
        setTotalWebsites(response.data.pagination.total);
      }
    } catch (error) {
      console.error('获取网站总数失败:', error);
    }
  }, []);

  // 获取搜索建议
  const fetchSuggestions = useCallback(async (query: string) => {
    if (!query.trim() || query.length < 2) {
      setSuggestions([]);
      return;
    }
    
    try {
      // 从热门标签和历史中生成建议
      const allSuggestions = [...hotTags, ...searchHistory];
      const filtered = allSuggestions
        .filter(s => s.toLowerCase().includes(query.toLowerCase()) && s !== query)
        .slice(0, 5);
      setSuggestions(filtered);
    } catch (error) {
      console.error('获取搜索建议失败:', error);
    }
  }, [searchHistory]);

  // 生成相关搜索关键词
  const generateRelatedKeywords = useCallback((results: SearchResult[], query: string) => {
    const keywords = new Set<string>();
    
    // 从结果的标签中提取关键词
    results.forEach(r => {
      r.tags?.forEach(tag => {
        if (tag && tag !== query && !tag.toLowerCase().includes(query.toLowerCase())) {
          keywords.add(tag);
        }
      });
    });
    
    // 从分类中提取
    results.forEach(r => {
      if (r.category && r.category !== query) {
        keywords.add(r.category);
      }
    });
    
    setRelatedKeywords(Array.from(keywords).slice(0, 8));
  }, []);

  // AI 智能搜索
  const performAiSearch = useCallback(async (query: string) => {
    if (!query.trim()) return;
    
    setAiLoading(true);
    setIsAiMode(true);
    setShowThinking(true);
    setAiThinkingStep(0);
    setAiMessage('');
    saveSearchHistory(query);
    
    try {
      // 使用公开的 AI 搜索接口
      const response = await api.post('/ai-search', {
        query,
        limit: 100
      });
      
      setShowThinking(false);
      
      if (response.data?.results) {
        const results = response.data.results.map((item: any) => ({
          id: item.id,
          name: item.name,
          description: item.description || '',
          url: item.url,
          iconUrl: item.iconUrl,
          category: '',
          tags: item.tags ? (typeof item.tags === 'string' ? item.tags.split(',') : item.tags) : [],
          isNew: false,
          isHot: false,
          isFeatured: false,
          source: 'ai',
          isAiResult: true
        }));
        
        setAllResults(results);
        setSearchResults(results.slice(0, PAGE_SIZE));
        setTotalResults(results.length);
        setHasMore(results.length > PAGE_SIZE);
        setCurrentPage(1);
        
        // 显示 AI 的推荐理由
        const modeText = response.data.mode === 'ai' ? 'AI 智能推荐' : '关键词匹配';
        const reasonText = response.data.reason ? ` - ${response.data.reason}` : '';
        setAiMessage(`${modeText}找到 ${results.length} 个结果${reasonText}`);
        
        generateRelatedKeywords(results, query);
      } else {
        setAllResults([]);
        setSearchResults([]);
        setTotalResults(0);
        setHasMore(false);
        setAiMessage('AI 未找到相关结果，请尝试其他描述');
      }
    } catch (error: any) {
      console.error('AI 搜索失败:', error);
      setShowThinking(false);
      setAiMessage('AI 搜索暂时不可用，已切换到普通搜索');
      setIsAiMode(false);
      performSearch(query);
    } finally {
      setAiLoading(false);
    }
  }, [saveSearchHistory, generateRelatedKeywords]);

  // 普通搜索 - 优化版本，支持名称、描述、标签多维度匹配
  const performSearch = useCallback(async (query: string) => {
    if (!query.trim()) {
      performDefaultSearch();
      return;
    }
    
    setLoading(true);
    setIsAiMode(false);
    saveSearchHistory(query);
    
    try {
      const searchAllResults: SearchResult[] = [];
      const queryLower = query.toLowerCase();
      const queryWords = queryLower.split(/\s+/).filter(w => w.length > 0);
      
      const searchPromises = PAGE_SLUGS.map(async (slug) => {
        try {
          const response = await api.get(`/pages/${slug}/search`, {
            params: { q: query, limit: 100 }
          });
          
          if (response.data?.results) {
            return response.data.results.map((item: any) => ({
              id: item.id,
              name: item.name,
              description: item.description || '',
              url: item.url,
              iconUrl: item.iconUrl,
              category: item.category?.name || '',
              tags: Array.isArray(item.tags) ? item.tags : [],
              isNew: item.isNew,
              isHot: item.isHot,
              isFeatured: item.isFeatured,
              source: slug
            }));
          }
          return [];
        } catch (error) {
          return [];
        }
      });
      
      const results = await Promise.all(searchPromises);
      results.forEach(r => searchAllResults.push(...r));
      
      // 去重
      const uniqueResults = searchAllResults.filter((item, index, self) => 
        index === self.findIndex(t => t.url === item.url)
      );
      
      // 计算相关性得分并排序
      const scoredResults = uniqueResults.map(item => {
        let score = 0;
        const nameLower = item.name.toLowerCase();
        const descLower = item.description.toLowerCase();
        const tagsLower = item.tags.map(t => t.toLowerCase());
        
        // 名称完全匹配 +100
        if (nameLower === queryLower) score += 100;
        // 名称开头匹配 +50
        else if (nameLower.startsWith(queryLower)) score += 50;
        // 名称包含完整关键词 +30
        else if (nameLower.includes(queryLower)) score += 30;
        
        // 每个查询词在名称中出现 +15
        queryWords.forEach(word => {
          if (nameLower.includes(word)) score += 15;
        });
        
        // 描述包含完整关键词 +10
        if (descLower.includes(queryLower)) score += 10;
        
        // 每个查询词在描述中出现 +5
        queryWords.forEach(word => {
          if (descLower.includes(word)) score += 5;
        });
        
        // 标签匹配 +20
        tagsLower.forEach(tag => {
          if (tag === queryLower) score += 20;
          else if (tag.includes(queryLower) || queryLower.includes(tag)) score += 10;
          queryWords.forEach(word => {
            if (tag.includes(word)) score += 5;
          });
        });
        
        // 热门/推荐/新增加分
        if (item.isHot) score += 3;
        if (item.isFeatured) score += 2;
        if (item.isNew) score += 1;
        
        return { ...item, _score: score };
      });
      
      // 按得分排序
      scoredResults.sort((a, b) => b._score - a._score);
      
      // 移除临时得分字段
      const finalResults = scoredResults.map(({ _score, ...rest }) => rest);
      
      setAllResults(finalResults);
      setSearchResults(finalResults.slice(0, PAGE_SIZE));
      setTotalResults(finalResults.length);
      setHasMore(finalResults.length > PAGE_SIZE);
      setCurrentPage(1);
      generateRelatedKeywords(finalResults, query);
    } catch (error) {
      setAllResults([]);
      setSearchResults([]);
      setTotalResults(0);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [saveSearchHistory, generateRelatedKeywords]);

  // 默认搜索
  const performDefaultSearch = useCallback(async () => {
    setLoading(true);
    setIsAiMode(false);
    
    try {
      const defaultResults: SearchResult[] = [];
      
      const hotPromises = PAGE_SLUGS.map(async (slug) => {
        try {
          const response = await api.get(`/pages/${slug}/hot`, { params: { limit: 15 } });
          if (response.data) {
            return response.data.map((item: any) => ({
              id: item.id,
              name: item.name,
              description: item.description || '',
              url: item.url,
              iconUrl: item.iconUrl,
              category: item.category?.name || '',
              tags: Array.isArray(item.tags) ? item.tags : [],
              isNew: item.isNew,
              isHot: item.isHot,
              isFeatured: item.isFeatured,
              source: slug
            }));
          }
          return [];
        } catch (error) {
          return [];
        }
      });
      
      const results = await Promise.all(hotPromises);
      results.forEach(r => defaultResults.push(...r));
      
      const uniqueResults = defaultResults.filter((item, index, self) => 
        index === self.findIndex(t => t.url === item.url)
      );
      
      uniqueResults.sort(() => Math.random() - 0.5);
      
      setAllResults(uniqueResults);
      setSearchResults(uniqueResults.slice(0, PAGE_SIZE));
      setTotalResults(uniqueResults.length);
      setHasMore(uniqueResults.length > PAGE_SIZE);
      setCurrentPage(1);
      setRelatedKeywords([]);
    } catch (error) {
      setAllResults([]);
      setSearchResults([]);
      setTotalResults(0);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, []);

  // 筛选后的结果
  const filteredResults = useMemo(() => {
    if (sourceFilter === 'all') return allResults;
    return allResults.filter(r => r.source === sourceFilter);
  }, [allResults, sourceFilter]);

  // 应用筛选和分页
  useEffect(() => {
    const start = 0;
    const end = currentPage * PAGE_SIZE;
    setSearchResults(filteredResults.slice(start, end));
    setTotalResults(filteredResults.length);
    setHasMore(filteredResults.length > end);
  }, [filteredResults, currentPage]);

  // 加载更多
  const loadMore = useCallback(() => {
    if (!hasMore || loading) return;
    setCurrentPage(prev => prev + 1);
  }, [hasMore, loading]);

  // 从URL获取搜索参数 - 使用普通关键词搜索
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    const source = params.get('source') || 'all';
    
    setSearchQuery(query);
    setSourceFilter(source);
    fetchTotalCount();
    
    if (query) {
      // 使用普通关键词搜索
      performSearch(query);
    } else {
      performDefaultSearch();
    }
  }, [location.search]);

  // 处理搜索 - 使用普通关键词搜索
  const handleSearch = useCallback((value: string) => {
    const newQuery = value.trim();
    setShowSuggestions(false);
    setShowHistory(false);
    
    if (newQuery) {
      const sourceParam = sourceFilter !== 'all' ? `&source=${sourceFilter}` : '';
      const newUrl = `/search?q=${encodeURIComponent(newQuery)}${sourceParam}`;
      const currentUrl = location.pathname + location.search;
      
      if (newUrl !== currentUrl) {
        navigate(newUrl);
      } else {
        // URL 相同，直接触发普通搜索
        performSearch(newQuery);
      }
    } else {
      navigate('/search');
    }
  }, [sourceFilter, location.pathname, location.search, navigate, performSearch]);

  // 处理搜索输入变化
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    fetchSuggestions(value);
    setShowSuggestions(value.length >= 2);
    setShowHistory(false);
  };

  // 处理热门标签点击
  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    handleSearch(tag);
  };

  // 处理筛选变化
  const handleSourceChange = (source: string) => {
    setSourceFilter(source);
    setCurrentPage(1);
  };

  // 处理网站点击
  const handleWebsiteClick = (website: SearchResult) => {
    setCurrentExitWebsite(website);
    setIsExitModalVisible(true);
  };

  // 确认访问网站
  const confirmExitVisit = () => {
    if (currentExitWebsite) {
      api.post(`/websites/${currentExitWebsite.id}/click`).catch(() => {});
      window.open(currentExitWebsite.url, '_blank');
    }
    setIsExitModalVisible(false);
    setCurrentExitWebsite(null);
  };

  const hideExitModal = () => {
    setIsExitModalVisible(false);
    setCurrentExitWebsite(null);
  };

  const isLoading = loading || aiLoading;

  return (
    <div className="search-page" style={{ '--bg-image': `url(${bgImage})` } as React.CSSProperties}>
      <HeroBanner
        pageType="search"
        searchValue={searchQuery}
        onSearchChange={handleSearchChange}
        hotTags={hotTags}
        onTagClick={handleTagClick}
        searchPlaceholder="搜索网站名称、描述、标签..."
        searchPageType="all"
        showStats={true}
        customTitle="全站搜索"
        customDescription={`收录 ${totalWebsites.toLocaleString()} 个优质网站资源`}
      />

      <div className="search-content">
        {/* 搜索历史下拉 */}
        {showHistory && searchHistory.length > 0 && (
          <div className="search-dropdown" ref={suggestionsRef}>
            <div className="dropdown-header">
              <span>搜索历史</span>
              <button onClick={clearSearchHistory}>清除</button>
            </div>
            {searchHistory.map((h, i) => (
              <div key={i} className="dropdown-item" onClick={() => { setSearchQuery(h); handleSearch(h); }}>
                <span className="history-icon">🕐</span>
                {h}
              </div>
            ))}
          </div>
        )}

        {/* 搜索建议下拉 */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="search-dropdown" ref={suggestionsRef}>
            <div className="dropdown-header"><span>搜索建议</span></div>
            {suggestions.map((s, i) => (
              <div key={i} className="dropdown-item" onClick={() => { setSearchQuery(s); handleSearch(s); }}>
                <span className="suggestion-icon">🔍</span>
                {s}
              </div>
            ))}
          </div>
        )}

        {/* 搜索统计和筛选 */}
        <div className="search-header">
          <div className="search-stats-info">
            {searchQuery ? (
              <>
                <h2>"{searchQuery}" 的搜索结果</h2>
                <p>
                  {isAiMode && <span className="ai-badge-inline">AI</span>}
                  找到 <strong>{totalResults}</strong> 个相关资源
                </p>
              </>
            ) : (
              <>
                <h2>热门推荐</h2>
                <p>为您精选 <strong>{totalResults}</strong> 个优质资源</p>
              </>
            )}
          </div>
          
          <div className="search-actions">
            {/* AI 搜索按钮 */}
            <button 
              className={`ai-search-toggle ${showAiSidebar ? 'active' : ''}`}
              onClick={() => setShowAiSidebar(!showAiSidebar)}
              title="AI 智能搜索"
            >
              <span className="ai-toggle-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="10" x="3" y="11" rx="2"/>
                  <circle cx="12" cy="5" r="2"/>
                  <path d="M12 7v4"/>
                  <line x1="8" x2="8" y1="16" y2="16"/>
                  <line x1="16" x2="16" y1="16" y2="16"/>
                </svg>
              </span>
              <span className="ai-toggle-text">AI搜索</span>
            </button>
            
            {/* 来源筛选 */}
            <select 
              className="source-filter"
              value={sourceFilter}
              onChange={(e) => handleSourceChange(e.target.value)}
            >
              {Object.entries(SOURCE_LABELS).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* AI 思考过程动画 - Framer Motion 版本 */}
        <AnimatePresence mode="wait">
          {showThinking && aiLoading && (
            <AIThinkingAnimation currentStep={aiThinkingStep} />
          )}
        </AnimatePresence>

        {/* AI 搜索结果提示 */}
        {isAiMode && aiMessage && !showThinking && (
          <div className="ai-search-info">
            <span className="ai-message">{aiMessage}</span>
          </div>
        )}

        {/* 搜索结果 */}
        <div className="search-results">
          {isLoading && currentPage === 1 && !showThinking ? (
            <div className="search-loading">
              <div className="loading"></div>
              <p>搜索中...</p>
            </div>
          ) : !showThinking && searchResults.length > 0 ? (
            <>
              {searchResults.map((result) => (
                <ToolCard
                  key={result.id}
                  tool={{
                    id: result.id,
                    name: result.name,
                    description: result.description,
                    url: result.url,
                    icon: result.iconUrl || '',
                    category: result.category || '',
                    tags: result.tags,
                    isNew: result.isNew,
                    isHot: result.isHot,
                    isFeatured: result.isFeatured,
                  }}
                  onClick={() => handleWebsiteClick(result)}
                  showDirectArrow={showDirectArrow}
                  onDirectVisit={handleDirectVisit}
                  arrowLabel={arrowLabel}
                  arrowIsExternal={arrowIsExternal}
                  directArrowNewWindow={directArrowNewWindow}
                />
              ))}
            </>
          ) : !showThinking && !isLoading ? (
            <div className="search-empty">
              <div className="search-empty-icon">🔍</div>
              <h3 className="search-empty-title">未找到相关结果</h3>
              <p className="search-empty-description">试试其他关键词</p>
            </div>
          ) : null}
        </div>

        {/* 加载更多 */}
        {hasMore && !isLoading && !showThinking && (
          <div className="load-more-wrapper">
            <button className="load-more-btn" onClick={loadMore}>
              加载更多 ({searchResults.length}/{totalResults})
            </button>
          </div>
        )}

        {/* 相关搜索 */}
        {relatedKeywords.length > 0 && searchQuery && !isLoading && !showThinking && (
          <div className="related-search">
            <h4>相关搜索</h4>
            <div className="related-tags">
              {relatedKeywords.map((keyword, i) => (
                <button key={i} className="related-tag" onClick={() => handleTagClick(keyword)}>
                  {keyword}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <WebsiteExitModal
        visible={isExitModalVisible}
        website={currentExitWebsite ? {
          name: currentExitWebsite.name,
          url: currentExitWebsite.url,
          description: currentExitWebsite.description
        } : null}
        onConfirm={confirmExitVisit}
        onClose={hideExitModal}
        config={frontendConfig.exitModalConfig}
      />
      
      {/* AI 搜索侧边栏 */}
      <AISearchSidebar
        visible={showAiSidebar}
        onClose={() => setShowAiSidebar(false)}
        onWebsiteClick={(website) => {
          setCurrentExitWebsite({
            id: website.id,
            name: website.name,
            description: website.description,
            url: website.url,
            iconUrl: website.iconUrl,
            tags: [],
          });
          setIsExitModalVisible(true);
        }}
      />
    </div>
  );
};

export default SearchPage;
