# 网址图标获取功能使用指南

## 概述

本项目提供了完整的网址图标(favicon)获取解决方案，**优先使用Cravatar Favicon API**，支持多种获取方式、缓存机制和错误重试。Cravatar API提供国内外加速访问，稳定性和速度都有保障。

## 主要功能

### 1. Cravatar API图标获取 (推荐)

```javascript
import { getCravatarFavicon } from '../utils/faviconUtils';

// 基础获取
const iconUrl = getCravatarFavicon('https://www.figma.com');
// 结果: https://cn.cravatar.com/favicon/api/index.php?url=www.figma.com

// 强制刷新缓存
const freshIconUrl = getCravatarFavicon('https://www.figma.com', true);
// 结果: https://cn.cravatar.com/favicon/api/index.php?url=www.figma.com&refresh=1

// 使用特定端点
const iconUrl2 = getCravatarFavicon('https://www.sketch.com', false, 'https://cravatar.cn/favicon/api/index.php');
```

### 2. 基础图标获取 (自动选择最佳API)

```javascript
import { getFaviconUrl } from '../utils/faviconUtils';

// 自动优先使用Cravatar API，失败时降级到Google API
const iconUrl = getFaviconUrl('https://www.figma.com', 32);
```

### 3. 高质量图标获取

```javascript
import { getHighQualityFavicon } from '../utils/faviconUtils';

// 获取高质量图标，优先使用Cravatar API
const iconUrl = getHighQualityFavicon('https://www.sketch.com', 64);
```

### 4. 批量图标获取

```javascript
import { batchGetFavicons } from '../utils/faviconUtils';

const websites = [
  { id: 1, name: 'Figma', url: 'https://www.figma.com' },
  { id: 2, name: 'Sketch', url: 'https://www.sketch.com' }
];

// 批量添加图标 (使用Cravatar API)
const websitesWithIcons = batchGetFavicons(websites, 32);
```

### 5. 智能图标获取 (推荐)

```javascript
import { getSmartFavicon, getCachedSmartFavicon } from '../utils/faviconUtils';

// 带重试机制的智能获取 (包含Cravatar多端点重试)
const iconUrl = await getSmartFavicon('https://www.adobe.com', 32);

// 带缓存的智能获取 (推荐用于生产环境)
const cachedIconUrl = await getCachedSmartFavicon('https://www.adobe.com', 32);
```

### 6. 强制刷新图标

```javascript
import { refreshFavicon } from '../utils/faviconUtils';

// 强制刷新图标并更新缓存 (使用Cravatar的refresh功能)
const newIconUrl = await refreshFavicon('https://www.adobe.com');
```

## API 参考

### getCravatarFavicon(url, forceRefresh, endpoint)

使用Cravatar API获取网址图标。

**参数:**
- `url` (string): 网址URL
- `forceRefresh` (boolean): 是否强制刷新缓存，默认false
- `endpoint` (string): API端点，默认使用主端点

**返回:** string - Cravatar图标URL

### getFaviconUrl(url, size)

最基础的图标获取方法，优先使用Cravatar API。

**参数:**
- `url` (string): 网址URL
- `size` (number): 图标尺寸，默认32 (Cravatar会自动处理)

**返回:** string - 图标URL

### getHighQualityFavicon(url, size)

获取高质量图标，优先使用Cravatar API。

**参数:**
- `url` (string): 网址URL  
- `size` (number): 图标尺寸，默认64

**返回:** string - 高质量图标URL

### batchGetFavicons(websites, size)

批量为网站列表添加图标。

**参数:**
- `websites` (Array): 网站对象数组
- `size` (number): 图标尺寸，默认32

**返回:** Array - 包含图标的网站数组

### getSmartFavicon(url, size)

智能图标获取，包含Cravatar多端点重试。

**参数:**
- `url` (string): 网址URL
- `size` (number): 图标尺寸，默认32

**返回:** Promise<string> - 图标URL

### getCachedSmartFavicon(url, size)

带缓存的智能图标获取，生产环境推荐使用。

**参数:**
- `url` (string): 网址URL
- `size` (number): 图标尺寸，默认32

**返回:** Promise<string> - 图标URL

### refreshFavicon(url)

强制刷新图标缓存。

**参数:**
- `url` (string): 网址URL

**返回:** Promise<string> - 新的图标URL

### getFaviconCacheStats()

获取缓存统计信息。

**返回:** Object - 包含缓存统计的对象

### cleanExpiredFavicons(maxAge)

清理过期缓存。

**参数:**
- `maxAge` (number): 最大缓存时间 (毫秒，默认7天)

**返回:** number - 清理的条目数量

## 图标服务优先级

本工具按以下优先级获取图标：

1. **Cravatar API** (主要选择)
   - `https://cn.cravatar.com/favicon/api/index.php?url=domain.com`
   - 支持国内外访问，速度快，稳定性高
   - 支持强制刷新缓存功能

2. **Cravatar备用端点**
   - `https://cravatar.cn/favicon/api/index.php?url=domain.com` (国内加速)
   - `https://en.cravatar.com/favicon/api/index.php?url=domain.com` (海外加速)

3. **传统备选方案**
   - Google Favicon API: `https://www.google.com/s2/favicons?domain=domain.com&sz=32`
   - FaviconKit API: `https://api.faviconkit.com/domain.com/64`
   - DuckDuckGo API: `https://icons.duckduckgo.com/ip3/domain.com.ico`
   - 直接获取: `https://domain.com/favicon.ico`

## 缓存机制

### 本地存储缓存

图标URL会自动缓存到 localStorage，默认缓存7天，并记录图标来源。

```javascript
// 缓存数据结构
{
  "figma.com": {
    "url": "https://cn.cravatar.com/favicon/api/index.php?url=figma.com",
    "timestamp": 1704067200000,
    "source": "cravatar"
  }
}
```

### 缓存管理

```javascript
// 获取缓存统计
import { getFaviconCacheStats, cleanExpiredFavicons } from '../utils/faviconUtils';

const stats = getFaviconCacheStats();
console.log('缓存统计:', stats);
// 输出: { totalCached: 15, cravatarCount: 12, otherCount: 3, ... }

// 清理过期缓存
const cleaned = cleanExpiredFavicons();
console.log(`清理了 ${cleaned} 个过期缓存`);
```

## 在 React 组件中使用

### 基础使用 (Cravatar API)

```javascript
import React, { useState, useEffect } from 'react';
import { getFaviconUrl } from '../utils/faviconUtils';

const WebsiteCard = ({ website }) => {
  const [iconUrl, setIconUrl] = useState('');

  useEffect(() => {
    // 自动使用Cravatar API
    const url = getFaviconUrl(website.url);
    setIconUrl(url);
  }, [website.url]);

  return (
    <div className="website-card">
      <img src={iconUrl} alt={website.name} />
      <span>{website.name}</span>
    </div>
  );
};
```

### 智能使用 (推荐)

```javascript
import React, { useState, useEffect } from 'react';
import { getCachedSmartFavicon } from '../utils/faviconUtils';

const SmartWebsiteCard = ({ website }) => {
  const [iconUrl, setIconUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        // 优先使用Cravatar，包含缓存和重试
        const url = await getCachedSmartFavicon(website.url, 32);
        setIconUrl(url);
      } catch (error) {
        console.error('加载图标失败:', error);
      } finally {
        setLoading(false);
      }
    };

    loadIcon();
  }, [website.url]);

  return (
    <div className="website-card">
      {loading ? (
        <div className="icon-placeholder">⏳</div>
      ) : (
        <img 
          src={iconUrl} 
          alt={website.name}
          onError={(e) => {
            // 图标加载失败时的降级处理
            e.target.style.display = 'none';
          }}
        />
      )}
      <span>{website.name}</span>
    </div>
  );
};
```

### 带刷新功能的组件

```javascript
import React, { useState, useEffect } from 'react';
import { getCachedSmartFavicon, refreshFavicon } from '../utils/faviconUtils';

const RefreshableWebsiteCard = ({ website }) => {
  const [iconUrl, setIconUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadIcon = async () => {
    try {
      const url = await getCachedSmartFavicon(website.url, 32);
      setIconUrl(url);
    } catch (error) {
      console.error('加载图标失败:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const newUrl = await refreshFavicon(website.url);
      setIconUrl(newUrl);
    } catch (error) {
      console.error('刷新图标失败:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadIcon();
  }, [website.url]);

  return (
    <div className="website-card">
      <div className="icon-container">
        {loading ? (
          <div className="icon-placeholder">⏳</div>
        ) : (
          <img src={iconUrl} alt={website.name} />
        )}
        <button 
          onClick={handleRefresh} 
          disabled={refreshing}
          className="refresh-btn"
          title="刷新图标"
        >
          {refreshing ? '🔄' : '↻'}
        </button>
      </div>
      <span>{website.name}</span>
    </div>
  );
};
```

## 性能优化建议

### 1. 使用Cravatar API优势

- **国内外双线加速**: 智能选择最快的服务器
- **CDN缓存**: Cravatar提供全球CDN加速
- **强制刷新**: 支持强制更新过期图标
- **高可用性**: 多个备用端点保证服务稳定

### 2. 合理使用缓存

```javascript
// 推荐：生产环境使用缓存版本
const iconUrl = await getCachedSmartFavicon(website.url);

// 定期清理过期缓存
setInterval(() => {
  cleanExpiredFavicons();
}, 24 * 60 * 60 * 1000); // 每天清理一次
```

### 3. 预加载重要图标

```javascript
import { getCravatarFavicon, preloadFavicon } from '../utils/faviconUtils';

// 预加载重要网站图标
const importantSites = ['figma.com', 'sketch.com', 'adobe.com'];
importantSites.forEach(domain => {
  const iconUrl = getCravatarFavicon(`https://${domain}`);
  preloadFavicon(iconUrl);
});
```

### 4. 错误处理和降级

```javascript
<img 
  src={iconUrl} 
  alt={website.name}
  onError={async (e) => {
    // 使用强制刷新重试
    try {
      const refreshedUrl = await refreshFavicon(website.url);
      e.target.src = refreshedUrl;
    } catch (error) {
      // 最终降级到默认图标
      e.target.src = '/default-favicon.png';
    }
  }}
/>
```

## 配置说明

### Cravatar配置

```javascript
// 在 faviconUtils.js 中的配置
const CRAVATAR_CONFIG = {
  primaryEndpoint: 'https://cn.cravatar.com/favicon/api/index.php',  // 主端点
  fallbackEndpoints: [
    'https://cravatar.cn/favicon/api/index.php',      // 国内加速
    'https://en.cravatar.com/favicon/api/index.php'   // 海外加速
  ],
  timeout: 5000  // 超时时间 5秒
};
```

### 自定义配置

如需修改配置，可以直接编辑 `src/utils/faviconUtils.js` 文件中的 `CRAVATAR_CONFIG` 对象。

## 故障排除

### 图标显示不出来

1. **检查Cravatar服务状态**: 访问 https://cravatar.com 确认服务正常
2. **尝试强制刷新**: 使用 `refreshFavicon()` 函数
3. **检查网址格式**: 确保URL格式正确
4. **查看浏览器控制台**: 检查是否有网络错误

### 图标加载慢

1. **使用缓存版本**: 优先使用 `getCachedSmartFavicon()`
2. **预加载重要图标**: 对常用网站进行预加载
3. **检查网络环境**: 确认网络连接稳定
4. **使用合适端点**: 国内用户优先使用 `cravatar.cn`

### 缓存相关问题

```javascript
// 查看缓存状态
const stats = getFaviconCacheStats();
console.log('缓存统计:', stats);

// 清除所有缓存
localStorage.removeItem('faviconCache');

// 清除特定网站缓存
const cache = JSON.parse(localStorage.getItem('faviconCache') || '{}');
delete cache['domain.com'];
localStorage.setItem('faviconCache', JSON.stringify(cache));

// 强制刷新特定网站图标
await refreshFavicon('https://domain.com');
```

## 更新日志

- **v2.0.0**: 集成Cravatar Favicon API，提供国内外加速访问
- **v1.0.0**: 初始版本，支持基础图标获取
- 后续版本将继续优化性能和增加更多功能 