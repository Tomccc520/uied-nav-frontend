# Implementation Plan: 网址导航系统核心增强

## Overview

本实施计划将四个核心功能分解为可执行的开发任务，按照优先级和依赖关系组织。每个任务都包含具体的实现步骤和验收标准。

## Tasks

- [x] 1. 数据库 Schema 更新
  - 运行 Prisma migration 添加监控相关表
  - 为 Website 表添加状态字段
  - 创建 MonitorConfig 和 MonitorLog 表
  - _Requirements: 1.1, 1.2, 1.3, 1.8_

- [x] 2. 网站状态监控功能
  - [x] 2.1 创建 MonitorService 服务类
    - 实现 checkWebsite() 方法（单个网站检测）
    - 实现 checkAllWebsites() 方法（批量检测）
    - 实现 getStatistics() 方法（统计数据）
    - 实现 getFailedWebsites() 方法（失效列表）
    - 添加错误处理和重试逻辑
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

  - [x] 2.2 创建监控 API 路由
    - GET /api/monitor/statistics
    - GET /api/monitor/failed-websites
    - POST /api/monitor/check/:id
    - POST /api/monitor/check-all
    - GET /api/monitor/config
    - PUT /api/monitor/config
    - 添加认证中间件保护
    - _Requirements: 1.4, 1.5, 1.6_

  - [x] 2.3 创建定时任务
    - 使用 node-cron 配置定时任务
    - 默认每天凌晨2点执行
    - 支持从配置读取执行间隔
    - 添加任务执行日志
    - _Requirements: 1.1, 1.6_

  - [x] 2.4 前端：管理后台监控面板
    - 创建监控统计页面组件
    - 显示正常/失效/未检测数量
    - 显示失效网站列表
    - 添加手动检测按钮
    - 添加配置设置界面
    - _Requirements: 1.4, 1.5, 1.6_

  - [x] 2.5 前端：失效网站标识
    - 在网站卡片上显示失效标识
    - 添加失效提示文字
    - 使用灰色或警告色样式
    - _Requirements: 1.7_

- [x] 3. SEO Sitemap 生成功能
  - [x] 3.1 创建 SitemapService 服务类
    - 实现 generateSitemap() 方法
    - 实现 generateRobots() 方法
    - 实现 getAllPages() 辅助方法
    - 使用 xmlbuilder2 生成 XML
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

  - [x] 3.2 创建 SEO API 路由
    - POST /api/seo/generate-sitemap
    - POST /api/seo/generate-robots
    - 添加认证中间件保护
    - _Requirements: 2.1, 2.7_

  - [x] 3.3 配置静态文件访问
    - 在 Express 中配置 public 目录
    - 确保 sitemap.xml 可公开访问
    - 确保 robots.txt 可公开访问
    - _Requirements: 2.6_

  - [x] 3.4 添加自动更新触发器（改为手动触发）
    - 管理后台提供手动生成按钮
    - 支持一键生成所有 SEO 文件
    - _Requirements: 2.3_

  - [x] 3.5 前端：管理后台 SEO 管理页面
    - 创建 SEO 管理页面组件
    - 添加手动生成 sitemap 按钮
    - 添加手动生成 robots.txt 按钮
    - 显示最后生成时间
    - 添加预览链接
    - _Requirements: 2.1, 2.7_

- [-] 4. 结构化数据功能（可选，后续优化）
  - [ ] 4.1 创建 StructuredDataService 服务类
    - 实现 generateWebSiteSchema() 方法
    - 实现 generateCollectionPageSchema() 方法
    - 实现 generateWebPageSchema() 方法
    - 确保符合 Schema.org 规范
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ] 4.2 创建结构化数据 API 路由
    - GET /api/seo/structured-data/home
    - GET /api/seo/structured-data/category/:slug
    - GET /api/seo/structured-data/website/:id
    - _Requirements: 3.1, 3.2, 3.3_

  - [ ] 4.3 前端：集成结构化数据
    - 在首页 HTML 中嵌入 WebSite schema
    - 在分类页 HTML 中嵌入 CollectionPage schema
    - 在网站详情页 HTML 中嵌入 WebPage schema
    - 使用 <script type="application/ld+json"> 标签
    - _Requirements: 3.7_

  - [ ] 4.4 前端：管理后台预览功能
    - 创建结构化数据预览组件
    - 显示 JSON-LD 格式数据
    - 添加复制按钮
    - 添加验证链接（Google Rich Results Test）
    - _Requirements: 3.8_

- [x] 5. 数据导出和备份功能
  - [x] 5.1 创建 ExportService 服务类
    - 实现 exportWebsitesCSV() 方法
    - 实现 exportWebsitesJSON() 方法
    - 实现 exportCategoriesCSV() 方法
    - 实现 exportCategoriesJSON() 方法
    - 实现 createBackup() 方法
    - 实现 createZip() 辅助方法
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.8, 4.9_

  - [x] 5.2 创建导出备份 API 路由
    - POST /api/export/websites/csv
    - POST /api/export/websites/json
    - POST /api/export/categories/csv
    - POST /api/export/categories/json
    - POST /api/backup/create
    - GET /api/export/download/:filename
    - GET /api/export/list
    - DELETE /api/export/:filename
    - 添加认证中间件保护
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.8, 4.9, 4.10, 4.12_

  - [x] 5.3 实现筛选功能
    - 支持按分类筛选导出
    - 支持按时间范围筛选导出
    - 支持按状态筛选导出
    - _Requirements: 4.6, 4.7_

  - [x] 5.4 前端：管理后台导出页面
    - 创建数据导出页面组件
    - 添加导出格式选择（CSV/JSON）
    - 添加筛选条件表单
    - 添加导出按钮
    - 显示导出进度
    - 显示导出历史列表
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6, 4.7, 4.10_

  - [x] 5.5 前端：管理后台备份页面
    - 创建数据备份页面组件（已集成在数据导出页面）
    - 添加创建备份按钮
    - 显示备份文件列表
    - 添加下载按钮
    - 添加删除按钮
    - 显示文件大小和创建时间
    - _Requirements: 4.8, 4.9, 4.10, 4.11_

- [x] 6. 安装依赖包
  - 安装 axios（HTTP 客户端）
  - 安装 node-cron（定时任务）
  - 安装 xmlbuilder2（XML 生成）
  - 安装 json2csv（CSV 导出）
  - 安装 archiver（文件压缩）
  - 更新 package.json

- [x] 7. 环境配置
  - 添加环境变量到 .env
  - 添加环境变量到 .env.production.example
  - 创建 exports 目录
  - 配置 .gitignore 忽略导出文件

- [x] 8. 测试和文档
  - 编写监控服务单元测试
  - 编写 SEO 服务单元测试
  - 编写导出服务单元测试
  - 更新 API 文档
  - 更新部署文档（宝塔部署教程已更新，包含完整技术栈说明）

- [x] 9. 最终检查
  - [x] 确保所有 API 都有认证保护
  - [x] 确保所有错误都有适当处理
  - [x] 确保所有日志都正确记录
  - [ ] 在 Google Search Console 提交 sitemap（部署后操作）
  - [ ] 使用 Google Rich Results Test 验证结构化数据（可选）

## Notes

- 任务按照依赖关系排序，建议按顺序执行
- 每个任务完成后应进行测试验证
- 监控功能可以先实现基础版本，后续优化性能
- SEO 功能需要在生产环境验证效果
- 导出功能需要注意大数据量的性能问题

