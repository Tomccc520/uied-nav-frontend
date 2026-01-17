# Design Document - 网址导航系统核心增强

## Overview

本设计文档描述了四个核心增强功能的技术实现方案：网站状态监控、SEO Sitemap 生成、结构化数据标记和数据导出备份。这些功能将提升系统的可靠性、搜索引擎可见性和数据管理能力。

## Architecture

### 系统架构图

```
┌─────────────────────────────────────────────────────────────┐
│                      Frontend (React)                        │
│  - 失效网站标识显示                                          │
│  - 管理后台监控面板                                          │
│  - 导出/备份操作界面                                         │
└────────────────────────┬────────────────────────────────────┘
                         │ HTTP/REST API
┌────────────────────────┴────────────────────────────────────┐
│                   Backend (Express + Prisma)                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Monitor      │  │ SEO          │  │ Export       │     │
│  │ Service      │  │ Service      │  │ Service      │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│         │                  │                  │             │
│         └──────────────────┴──────────────────┘             │
│                            │                                 │
└────────────────────────────┼─────────────────────────────────┘
                             │
                    ┌────────┴────────┐
                    │  SQLite Database │
                    │  + File System   │
                    └──────────────────┘
```

### 技术选型

- **HTTP 客户端**: axios（网站状态检测）
- **定时任务**: node-cron（定期监控）
- **XML 生成**: xmlbuilder2（sitemap 生成）
- **数据导出**: json2csv（CSV 导出）
- **文件压缩**: archiver（备份压缩）

## Components and Interfaces

### 1. 网站状态监控模块

#### 1.1 数据模型扩展

在 `Website` 模型中添加状态字段：

```prisma
model Website {
  // ... 现有字段
  status          String   @default("unchecked") // unchecked, active, failed
  lastCheckedAt   DateTime? // 最后检测时间
  failedCount     Int      @default(0) // 连续失败次数
  statusMessage   String?  // 状态消息（错误信息）
}

// 新增监控配置表
model MonitorConfig {
  id              String   @id @default(cuid())
  checkInterval   Int      @default(86400) // 检测间隔（秒），默认24小时
  timeout         Int      @default(10000) // 请求超时（毫秒）
  maxRetries      Int      @default(3) // 最大重试次数
  enabled         Boolean  @default(true) // 是否启用监控
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

// 新增监控日志表
model MonitorLog {
  id              String   @id @default(cuid())
  websiteId       String
  website         Website  @relation(fields: [websiteId], references: [id], onDelete: Cascade)
  status          String   // success, failed
  httpStatus      Int?     // HTTP 状态码
  responseTime    Int?     // 响应时间（毫秒）
  errorMessage    String?  // 错误信息
  checkedAt       DateTime @default(now())

  @@index([websiteId])
  @@index([checkedAt])
}
```

#### 1.2 Monitor Service

```javascript
// backend/src/services/monitorService.js

class MonitorService {
  // 检查单个网站状态
  async checkWebsite(websiteId) {
    const website = await prisma.website.findUnique({ where: { id: websiteId } });
    const config = await this.getConfig();
    
    try {
      const response = await axios.get(website.url, {
        timeout: config.timeout,
        validateStatus: (status) => status < 500 // 只有5xx才算失败
      });
      
      const isSuccess = response.status >= 200 && response.status < 400;
      
      // 更新网站状态
      await prisma.website.update({
        where: { id: websiteId },
        data: {
          status: isSuccess ? 'active' : 'failed',
          lastCheckedAt: new Date(),
          failedCount: isSuccess ? 0 : website.failedCount + 1,
          statusMessage: isSuccess ? null : `HTTP ${response.status}`
        }
      });
      
      // 记录日志
      await prisma.monitorLog.create({
        data: {
          websiteId,
          status: isSuccess ? 'success' : 'failed',
          httpStatus: response.status,
          responseTime: response.duration,
          errorMessage: isSuccess ? null : `HTTP ${response.status}`
        }
      });
      
      return { success: isSuccess, status: response.status };
    } catch (error) {
      // 处理网络错误
      await prisma.website.update({
        where: { id: websiteId },
        data: {
          status: 'failed',
          lastCheckedAt: new Date(),
          failedCount: website.failedCount + 1,
          statusMessage: error.message
        }
      });
      
      await prisma.monitorLog.create({
        data: {
          websiteId,
          status: 'failed',
          errorMessage: error.message
        }
      });
      
      return { success: false, error: error.message };
    }
  }
  
  // 批量检查所有网站
  async checkAllWebsites() {
    const websites = await prisma.website.findMany({
      where: { visible: true }
    });
    
    const results = [];
    for (const website of websites) {
      const result = await this.checkWebsite(website.id);
      results.push({ websiteId: website.id, ...result });
      
      // 避免请求过快
      await this.sleep(1000);
    }
    
    return results;
  }
  
  // 获取监控统计
  async getStatistics() {
    const total = await prisma.website.count({ where: { visible: true } });
    const active = await prisma.website.count({ where: { status: 'active', visible: true } });
    const failed = await prisma.website.count({ where: { status: 'failed', visible: true } });
    const unchecked = await prisma.website.count({ where: { status: 'unchecked', visible: true } });
    
    return { total, active, failed, unchecked };
  }
  
  // 获取失效网站列表
  async getFailedWebsites() {
    return await prisma.website.findMany({
      where: { status: 'failed', visible: true },
      include: { category: true },
      orderBy: { lastCheckedAt: 'desc' }
    });
  }
}
```

#### 1.3 定时任务

```javascript
// backend/src/jobs/monitorJob.js
const cron = require('node-cron');
const monitorService = require('../services/monitorService');

// 每天凌晨2点执行监控
cron.schedule('0 2 * * *', async () => {
  console.log('[Monitor] Starting website status check...');
  const results = await monitorService.checkAllWebsites();
  console.log(`[Monitor] Completed. Checked ${results.length} websites.`);
});
```

### 2. SEO Sitemap 生成模块

#### 2.1 Sitemap Service

```javascript
// backend/src/services/sitemapService.js
const { create } = require('xmlbuilder2');
const fs = require('fs').promises;
const path = require('path');

class SitemapService {
  constructor() {
    this.sitemapPath = path.join(__dirname, '../../public/sitemap.xml');
    this.robotsPath = path.join(__dirname, '../../public/robots.txt');
  }
  
  // 生成 sitemap.xml
  async generateSitemap() {
    const baseUrl = process.env.FRONTEND_URL || 'https://www.uied.cn';
    
    // 获取所有公开页面
    const pages = await this.getAllPages();
    const categories = await prisma.category.findMany({
      where: { visible: true },
      orderBy: { updatedAt: 'desc' }
    });
    const websites = await prisma.website.findMany({
      where: { visible: true },
      orderBy: { updatedAt: 'desc' }
    });
    
    // 构建 XML
    const root = create({ version: '1.0', encoding: 'UTF-8' })
      .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });
    
    // 添加首页
    root.ele('url')
      .ele('loc').txt(baseUrl).up()
      .ele('changefreq').txt('daily').up()
      .ele('priority').txt('1.0').up()
      .ele('lastmod').txt(new Date().toISOString()).up();
    
    // 添加页面
    pages.forEach(page => {
      root.ele('url')
        .ele('loc').txt(`${baseUrl}/${page.slug}`).up()
        .ele('changefreq').txt('weekly').up()
        .ele('priority').txt('0.8').up()
        .ele('lastmod').txt(page.updatedAt.toISOString()).up();
    });
    
    // 添加分类页面
    categories.forEach(category => {
      root.ele('url')
        .ele('loc').txt(`${baseUrl}/category/${category.slug}`).up()
        .ele('changefreq').txt('daily').up()
        .ele('priority').txt('0.7').up()
        .ele('lastmod').txt(category.updatedAt.toISOString()).up();
    });
    
    const xml = root.end({ prettyPrint: true });
    
    // 写入文件
    await fs.writeFile(this.sitemapPath, xml, 'utf8');
    
    return { success: true, urlCount: 1 + pages.length + categories.length };
  }
  
  // 生成 robots.txt
  async generateRobots() {
    const baseUrl = process.env.FRONTEND_URL || 'https://www.uied.cn';
    
    const content = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;
    
    await fs.writeFile(this.robotsPath, content, 'utf8');
    
    return { success: true };
  }
  
  // 获取所有页面
  async getAllPages() {
    return await prisma.page.findMany({
      where: { visible: true },
      orderBy: { updatedAt: 'desc' }
    });
  }
}
```

### 3. 结构化数据模块

#### 3.1 Structured Data Service

```javascript
// backend/src/services/structuredDataService.js

class StructuredDataService {
  // 生成网站首页结构化数据
  generateWebSiteSchema() {
    const baseUrl = process.env.FRONTEND_URL || 'https://www.uied.cn';
    
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'UIED 设计资源导航',
      'url': baseUrl,
      'description': '专业的设计资源与AI工具导航平台',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': `${baseUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }
  
  // 生成分类页面结构化数据
  generateCollectionPageSchema(category, websites) {
    const baseUrl = process.env.FRONTEND_URL || 'https://www.uied.cn';
    
    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': category.name,
      'description': category.description || `${category.name}相关资源`,
      'url': `${baseUrl}/category/${category.slug}`,
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': '首页',
            'item': baseUrl
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': category.name,
            'item': `${baseUrl}/category/${category.slug}`
          }
        ]
      },
      'mainEntity': {
        '@type': 'ItemList',
        'numberOfItems': websites.length,
        'itemListElement': websites.map((website, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'url': website.url,
          'name': website.name
        }))
      }
    };
  }
  
  // 生成网站详情结构化数据
  generateWebPageSchema(website, category) {
    const baseUrl = process.env.FRONTEND_URL || 'https://www.uied.cn';
    
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      'name': website.name,
      'description': website.description,
      'url': website.url,
      'image': website.iconUrl,
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': '首页',
            'item': baseUrl
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': category.name,
            'item': `${baseUrl}/category/${category.slug}`
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': website.name,
            'item': website.url
          }
        ]
      }
    };
  }
}
```

### 4. 数据导出和备份模块

#### 4.1 Export Service

```javascript
// backend/src/services/exportService.js
const { Parser } = require('json2csv');
const archiver = require('archiver');
const fs = require('fs');
const path = require('path');

class ExportService {
  constructor() {
    this.exportDir = path.join(__dirname, '../../exports');
  }
  
  // 导出网站数据为 CSV
  async exportWebsitesCSV(filters = {}) {
    const websites = await prisma.website.findMany({
      where: filters,
      include: { category: true },
      orderBy: { createdAt: 'desc' }
    });
    
    const fields = [
      'id', 'name', 'description', 'url', 'iconUrl',
      'category.name', 'isNew', 'isFeatured', 'isHot',
      'tags', 'order', 'clickCount', 'status',
      'createdAt', 'updatedAt'
    ];
    
    const parser = new Parser({ fields });
    const csv = parser.parse(websites);
    
    const filename = `websites_${Date.now()}.csv`;
    const filepath = path.join(this.exportDir, filename);
    
    await fs.promises.writeFile(filepath, csv, 'utf8');
    
    return { filename, filepath, count: websites.length };
  }
  
  // 导出网站数据为 JSON
  async exportWebsitesJSON(filters = {}) {
    const websites = await prisma.website.findMany({
      where: filters,
      include: { category: true },
      orderBy: { createdAt: 'desc' }
    });
    
    const filename = `websites_${Date.now()}.json`;
    const filepath = path.join(this.exportDir, filename);
    
    await fs.promises.writeFile(
      filepath,
      JSON.stringify(websites, null, 2),
      'utf8'
    );
    
    return { filename, filepath, count: websites.length };
  }
  
  // 导出分类数据为 CSV
  async exportCategoriesCSV() {
    const categories = await prisma.category.findMany({
      include: {
        _count: { select: { websites: true } }
      },
      orderBy: { order: 'asc' }
    });
    
    const fields = [
      'id', 'name', 'slug', 'icon', 'color',
      'description', 'parentId', 'order', 'visible',
      '_count.websites', 'createdAt', 'updatedAt'
    ];
    
    const parser = new Parser({ fields });
    const csv = parser.parse(categories);
    
    const filename = `categories_${Date.now()}.csv`;
    const filepath = path.join(this.exportDir, filename);
    
    await fs.promises.writeFile(filepath, csv, 'utf8');
    
    return { filename, filepath, count: categories.length };
  }
  
  // 创建数据库备份
  async createBackup() {
    const dbPath = path.join(__dirname, '../../prisma/dev.db');
    const filename = `backup_${Date.now()}.db`;
    const filepath = path.join(this.exportDir, filename);
    
    // 复制数据库文件
    await fs.promises.copyFile(dbPath, filepath);
    
    // 创建压缩包
    const zipFilename = `backup_${Date.now()}.zip`;
    const zipFilepath = path.join(this.exportDir, zipFilename);
    
    await this.createZip(filepath, zipFilepath);
    
    // 删除未压缩的备份文件
    await fs.promises.unlink(filepath);
    
    const stats = await fs.promises.stat(zipFilepath);
    
    return {
      filename: zipFilename,
      filepath: zipFilepath,
      size: stats.size
    };
  }
  
  // 创建 ZIP 压缩包
  createZip(sourceFile, targetFile) {
    return new Promise((resolve, reject) => {
      const output = fs.createWriteStream(targetFile);
      const archive = archiver('zip', { zlib: { level: 9 } });
      
      output.on('close', () => resolve());
      archive.on('error', (err) => reject(err));
      
      archive.pipe(output);
      archive.file(sourceFile, { name: path.basename(sourceFile) });
      archive.finalize();
    });
  }
}
```

## Data Models

### 数据库 Schema 更新

```prisma
// 在 schema.prisma 中添加以下模型

model Website {
  // ... 现有字段
  status          String   @default("unchecked")
  lastCheckedAt   DateTime?
  failedCount     Int      @default(0)
  statusMessage   String?
  monitorLogs     MonitorLog[]
}

model MonitorConfig {
  id              String   @id @default(cuid())
  checkInterval   Int      @default(86400)
  timeout         Int      @default(10000)
  maxRetries      Int      @default(3)
  enabled         Boolean  @default(true)
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

model MonitorLog {
  id              String   @id @default(cuid())
  websiteId       String
  website         Website  @relation(fields: [websiteId], references: [id], onDelete: Cascade)
  status          String
  httpStatus      Int?
  responseTime    Int?
  errorMessage    String?
  checkedAt       DateTime @default(now())

  @@index([websiteId])
  @@index([checkedAt])
}
```

## API Endpoints

### 监控相关 API

```
GET    /api/monitor/statistics          # 获取监控统计
GET    /api/monitor/failed-websites     # 获取失效网站列表
POST   /api/monitor/check/:id            # 手动检查单个网站
POST   /api/monitor/check-all            # 手动检查所有网站
GET    /api/monitor/config               # 获取监控配置
PUT    /api/monitor/config               # 更新监控配置
GET    /api/monitor/logs/:websiteId      # 获取网站监控日志
```

### SEO 相关 API

```
POST   /api/seo/generate-sitemap         # 生成 sitemap.xml
POST   /api/seo/generate-robots          # 生成 robots.txt
GET    /api/seo/structured-data/home     # 获取首页结构化数据
GET    /api/seo/structured-data/category/:slug  # 获取分类页结构化数据
GET    /api/seo/structured-data/website/:id     # 获取网站详情结构化数据
```

### 导出备份相关 API

```
POST   /api/export/websites/csv          # 导出网站数据为 CSV
POST   /api/export/websites/json         # 导出网站数据为 JSON
POST   /api/export/categories/csv        # 导出分类数据为 CSV
POST   /api/export/categories/json       # 导出分类数据为 JSON
POST   /api/backup/create                # 创建数据库备份
GET    /api/export/download/:filename    # 下载导出文件
GET    /api/export/list                  # 获取导出文件列表
DELETE /api/export/:filename             # 删除导出文件
```

## Error Handling

### 错误类型定义

```javascript
// 监控错误
MONITOR_TIMEOUT: '网站请求超时'
MONITOR_NETWORK_ERROR: '网络连接失败'
MONITOR_HTTP_ERROR: 'HTTP 错误'

// SEO 错误
SEO_GENERATION_FAILED: 'SEO 文件生成失败'
SEO_FILE_WRITE_ERROR: '文件写入失败'

// 导出错误
EXPORT_NO_DATA: '没有可导出的数据'
EXPORT_FILE_ERROR: '文件创建失败'
BACKUP_DB_NOT_FOUND: '数据库文件不存在'
```

### 错误处理策略

1. **监控错误**: 记录日志，不中断其他网站检测
2. **SEO 生成错误**: 返回错误信息，保留旧文件
3. **导出错误**: 返回详细错误信息，清理临时文件

## Testing Strategy

### Unit Tests

- 监控服务单元测试（HTTP 请求模拟）
- Sitemap 生成测试（XML 格式验证）
- 结构化数据生成测试（Schema.org 验证）
- 导出服务测试（文件生成验证）

### Integration Tests

- 完整监控流程测试
- SEO 文件生成和访问测试
- 导出下载流程测试

### Manual Tests

- 在 Google Search Console 验证 sitemap
- 使用 Google Rich Results Test 验证结构化数据
- 测试大量数据导出性能

## Deployment Considerations

### 环境变量

```env
# 监控配置
MONITOR_ENABLED=true
MONITOR_INTERVAL=86400
MONITOR_TIMEOUT=10000

# SEO 配置
FRONTEND_URL=https://www.uied.cn

# 导出配置
EXPORT_DIR=./exports
MAX_EXPORT_SIZE=100MB
```

### 文件权限

- `public/sitemap.xml` - 可读
- `public/robots.txt` - 可读
- `exports/` 目录 - 仅管理员可访问

### 性能优化

1. **监控**: 使用队列避免同时请求过多
2. **Sitemap**: 缓存生成结果，仅在数据变更时重新生成
3. **导出**: 大数据量时使用流式处理

