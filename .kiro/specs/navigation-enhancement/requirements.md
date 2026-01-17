# Requirements Document - 网址导航系统核心增强

## Introduction

基于现有的 UIED 网址导航系统，本文档定义了四个核心增强功能模块，以提升系统的可靠性、SEO 表现和数据管理能力。这些功能是系统走向生产环境的必要基础。

## Glossary

- **System**: UIED 网址导航系统
- **Admin**: 管理员用户
- **Website**: 被收录的网站条目
- **Category**: 网站分类
- **Monitor**: 网站状态监控服务
- **Sitemap**: XML 格式的网站地图文件
- **Structured_Data**: JSON-LD 格式的结构化数据
- **Backup**: 数据库备份文件
- **Export**: 导出的数据文件
- **HTTP_Status**: HTTP 响应状态码

## Requirements

### Requirement 1: 网站状态监控

**User Story:** 作为管理员，我希望系统能够自动监控收录网站的可访问性，以便及时发现和处理失效链接，保证用户体验。

#### Acceptance Criteria

1. THE System SHALL 定期检查所有可见网站的 HTTP 状态
2. WHEN 网站返回 4xx 或 5xx 状态码 THEN THE System SHALL 记录为失效状态
3. WHEN 网站连续 3 次检测失败 THEN THE System SHALL 标记为失效并记录失效时间
4. THE System SHALL 在管理后台显示网站状态统计（正常/失效/未检测）
5. THE System SHALL 允许管理员手动触发单个网站的状态检测
6. THE System SHALL 允许管理员配置检测间隔时间（默认 24 小时）
7. WHERE 网站状态为失效 THE System SHALL 在前端显示失效标识
8. THE System SHALL 记录每次检测的时间和结果

### Requirement 2: SEO 优化 - Sitemap 生成

**User Story:** 作为管理员，我希望系统能够自动生成和更新网站地图，以便搜索引擎更好地索引网站内容，提升 SEO 表现。

#### Acceptance Criteria

1. THE System SHALL 自动生成符合 XML Sitemap 协议的网站地图文件
2. THE System SHALL 在 sitemap.xml 中包含所有公开页面的 URL
3. WHEN 网站或分类数据更新 THEN THE System SHALL 自动重新生成 sitemap.xml
4. THE System SHALL 为每个 URL 设置合适的优先级（priority）和更新频率（changefreq）
5. THE System SHALL 在 sitemap.xml 中包含最后修改时间（lastmod）
6. THE System SHALL 将 sitemap.xml 放置在网站根目录可访问位置
7. THE System SHALL 生成 robots.txt 文件并指向 sitemap.xml
8. THE System SHALL 支持分页 sitemap（当 URL 超过 50000 条时）

### Requirement 3: SEO 优化 - 结构化数据

**User Story:** 作为管理员，我希望系统能够为页面添加结构化数据标记，以便搜索引擎更好地理解页面内容，提升搜索结果展示效果。

#### Acceptance Criteria

1. THE System SHALL 为首页生成 WebSite 类型的 JSON-LD 结构化数据
2. THE System SHALL 为分类页面生成 CollectionPage 类型的结构化数据
3. THE System SHALL 为每个网站条目生成 WebPage 类型的结构化数据
4. THE System SHALL 在结构化数据中包含网站名称、描述、URL、图标等信息
5. THE System SHALL 在结构化数据中包含面包屑导航信息
6. THE System SHALL 确保生成的 JSON-LD 符合 Schema.org 规范
7. THE System SHALL 将结构化数据嵌入到 HTML 页面的 <script> 标签中
8. THE System SHALL 允许管理员在后台预览生成的结构化数据

### Requirement 4: 数据导出和备份

**User Story:** 作为管理员，我希望能够导出系统数据和创建数据库备份，以便数据安全、迁移和分析。

#### Acceptance Criteria

1. THE System SHALL 支持导出网站数据为 CSV 格式
2. THE System SHALL 支持导出网站数据为 JSON 格式
3. THE System SHALL 支持导出分类数据为 CSV 格式
4. THE System SHALL 支持导出分类数据为 JSON 格式
5. WHEN 管理员触发导出 THEN THE System SHALL 生成包含所有字段的完整数据文件
6. THE System SHALL 支持按分类筛选导出网站数据
7. THE System SHALL 支持按时间范围筛选导出数据
8. THE System SHALL 提供数据库完整备份功能
9. WHEN 管理员触发备份 THEN THE System SHALL 创建 SQLite 数据库文件副本
10. THE System SHALL 允许管理员下载导出文件和备份文件
11. THE System SHALL 在导出文件名中包含时间戳
12. THE System SHALL 限制导出文件的访问权限（仅管理员可下载）

