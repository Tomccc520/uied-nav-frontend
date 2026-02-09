/**
 * @file AdBanner/index.tsx
 * @description 广告 Banner 组件 - 支持多种位置和样式，支持图片和 HTML 代码两种类型
 */

import React, { useEffect, useRef } from 'react';
import { useBanners, Banner } from '../../hooks/useBanners';
import './index.css';

interface AdBannerProps {
  pageSlug?: string;
  position?: 'top' | 'sidebar' | 'bottom' | 'popup';
  limit?: number;
  className?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
  pageSlug,
  position = 'top',
  limit = 5,
  className = '',
}) => {
  const { banners, loading, recordClick } = useBanners({ pageSlug, position, limit });
  const htmlContainerRef = useRef<HTMLDivElement>(null);

  // 处理 HTML 代码类型的广告
  useEffect(() => {
    if (!htmlContainerRef.current || banners.length === 0) return;

    const htmlBanners = banners.filter(b => b.contentType === 'html' && b.htmlContent);
    if (htmlBanners.length === 0) return;

    // 清空容器
    htmlContainerRef.current.innerHTML = '';

    // 插入 HTML 内容
    htmlBanners.forEach(banner => {
      const wrapper = document.createElement('div');
      wrapper.className = 'html-banner-wrapper';
      wrapper.innerHTML = banner.htmlContent || '';
      
      // 记录点击（如果 HTML 中有链接）
      wrapper.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' || target.closest('a')) {
          recordClick(banner.id);
        }
      });

      htmlContainerRef.current?.appendChild(wrapper);
    });

    // 执行 HTML 中的脚本
    const scripts = htmlContainerRef.current.querySelectorAll('script');
    scripts.forEach(oldScript => {
      const newScript = document.createElement('script');
      Array.from(oldScript.attributes).forEach(attr => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = oldScript.textContent;
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [banners, recordClick]);

  const handleClick = (banner: Banner) => {
    recordClick(banner.id);
    if (banner.linkUrl) {
      window.open(banner.linkUrl, banner.linkTarget || '_blank');
    }
  };

  if (loading || banners.length === 0) {
    return null;
  }

  // 分离图片类型和 HTML 类型的广告
  const imageBanners = banners.filter(b => b.contentType !== 'html');
  const htmlBanners = banners.filter(b => b.contentType === 'html');

  // 顶部横幅样式
  if (position === 'top') {
    return (
      <div className={`ad-banner ad-banner-top ${className}`}>
        {/* HTML 代码类型广告 */}
        {htmlBanners.length > 0 && (
          <div ref={htmlContainerRef} className="html-banner-container" />
        )}
        
        {/* 图片类型广告 */}
        {imageBanners.length === 1 ? (
          <div className="banner-single" onClick={() => handleClick(imageBanners[0])}>
            <img src={imageBanners[0].imageUrl} alt={imageBanners[0].title} />
            {imageBanners[0].title && <div className="banner-title">{imageBanners[0].title}</div>}
          </div>
        ) : imageBanners.length > 1 ? (
          <div className="banner-carousel">
            {imageBanners.map((banner, index) => (
              <div
                key={banner.id}
                className="banner-item"
                onClick={() => handleClick(banner)}
                style={{ animationDelay: `${index * 5}s` }}
              >
                <img src={banner.imageUrl} alt={banner.title} />
              </div>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  // 侧边栏样式
  if (position === 'sidebar') {
    return (
      <div className={`ad-banner ad-banner-sidebar ${className}`}>
        {/* HTML 代码类型广告 */}
        {htmlBanners.length > 0 && (
          <div ref={htmlContainerRef} className="html-banner-container" />
        )}
        
        {/* 图片类型广告 */}
        {imageBanners.map(banner => (
          <div
            key={banner.id}
            className="sidebar-banner-item"
            onClick={() => handleClick(banner)}
          >
            <img src={banner.imageUrl} alt={banner.title} />
            {banner.title && <div className="banner-title">{banner.title}</div>}
            {banner.description && <div className="banner-desc">{banner.description}</div>}
          </div>
        ))}
      </div>
    );
  }

  // 底部样式
  if (position === 'bottom') {
    return (
      <div className={`ad-banner ad-banner-bottom ${className}`}>
        {/* HTML 代码类型广告 */}
        {htmlBanners.length > 0 && (
          <div ref={htmlContainerRef} className="html-banner-container" />
        )}
        
        {/* 图片类型广告 */}
        {imageBanners.length > 0 && (
          <div className="bottom-banner-grid">
            {imageBanners.map(banner => (
              <div
                key={banner.id}
                className="bottom-banner-item"
                onClick={() => handleClick(banner)}
              >
                <img src={banner.imageUrl} alt={banner.title} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return null;
};

export default AdBanner;
