/**
 * @file pages/WebsiteDetail/Sidebar.tsx
 * @description 网址详情页侧边栏组件
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WebsiteFavicon from '../../components/WebsiteFavicon';
import api from '../../services/api';
import { unwrapApiResponse } from '../../utils/apiResponse';
import { debugLog } from '../../utils/debugHelper';

/**
 * 侧边栏配置接口
 */
interface SidebarConfig {
  enabled: boolean;
  showRelated: boolean;
  relatedTitle: string;
  relatedCount: number;
  relatedMode: 'auto' | 'manual';
  manualWebsiteIds: string[];
  showTags: boolean;
  tagsTitle: string;
  showCategory: boolean;
  categoryTitle: string;
}

interface RelatedWebsite {
  id: string;
  name: string;
  slug?: string;
  description: string;
  url?: string;
  iconUrl?: string;
  category?: {
    name: string;
  };
}

interface WebsiteTag {
  id: string;
  name: string;
  slug: string;
  color?: string;
}

interface SidebarProps {
  relatedWebsites: RelatedWebsite[];
  tags: string[];
  websiteTags?: WebsiteTag[];
  loading?: boolean;
}

/**
 * 侧边栏组件
 */
const Sidebar: React.FC<SidebarProps> = ({ relatedWebsites, tags, websiteTags, loading }) => {
  const [config, setConfig] = useState<SidebarConfig>({
    enabled: true,
    showRelated: true,
    relatedTitle: '你可能还喜欢',
    relatedCount: 6,
    relatedMode: 'auto',
    manualWebsiteIds: [],
    showTags: true,
    tagsTitle: '深入探索',
    showCategory: true,
    categoryTitle: '相关分类',
  });

  // 获取侧边栏配置
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await api.get('/public/detail-sidebar-config');
        const data = unwrapApiResponse<Partial<SidebarConfig>>(res.data, {});
        setConfig(prev => ({ ...prev, ...data }));
      } catch (error) {
        debugLog.error('获取侧边栏配置失败:', error);
      }
    };
    fetchConfig();
  }, []);

  // 如果侧边栏被禁用，不渲染
  if (!config.enabled) {
    return null;
  }

  // 限制显示的相关网站数量
  const displayedRelated = relatedWebsites.slice(0, config.relatedCount);

  // 合并标签：优先使用 websiteTags（新系统），否则使用 tags（旧系统）
  const displayTags = websiteTags && websiteTags.length > 0 
    ? websiteTags 
    : tags.map((tag, index) => ({ id: `legacy-${index}`, name: tag, slug: tag, color: undefined }));

  return (
    <aside className="website-detail-sidebar">
      {/* 相关推荐 */}
      {config.showRelated && (
        <div className="sidebar-section">
          <h3 className="sidebar-title">{config.relatedTitle}</h3>
          {loading ? (
            <div className="sidebar-loading">加载中...</div>
          ) : displayedRelated.length > 0 ? (
            <div className="sidebar-related-list">
              {displayedRelated.map((site) => (
                <Link
                  key={site.id}
                  to={`/website/${site.slug || site.id}`}
                  className="sidebar-related-item"
                >
                  <div className="sidebar-related-icon">
                    <WebsiteFavicon
                      websiteUrl={site.url}
                      iconUrl={site.iconUrl}
                      name={site.name}
                      size={32}
                    />
                  </div>
                  <div className="sidebar-related-info">
                    <div className="sidebar-related-name">{site.name}</div>
                    <div className="sidebar-related-desc">{site.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="sidebar-empty">暂无相关推荐</div>
          )}
        </div>
      )}

      {/* 标签云 */}
      {config.showTags && displayTags.length > 0 && (
        <div className="sidebar-section">
          <h3 className="sidebar-title">{config.tagsTitle}</h3>
          <div className="sidebar-tags">
            {displayTags.map((tag) => (
              <Link
                key={tag.id}
                to={`/search?q=${encodeURIComponent(tag.name)}`}
                className="sidebar-tag"
                style={tag.color ? { borderColor: tag.color, color: tag.color } : undefined}
              >
                @ {tag.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
