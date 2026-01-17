# Requirements Document

## Introduction

本文档定义了UIED设计导航系统的API和现有功能优化需求。目标是提升系统性能、改善用户体验、增强代码可维护性，并解决当前存在的潜在问题。

## Glossary

- **API_Server**: 后端Express服务器，提供RESTful API接口
- **Frontend_App**: React前端应用，消费API数据
- **Admin_Panel**: 管理后台应用，用于内容管理
- **Cache_Layer**: 数据缓存层，用于减少重复请求
- **Prisma_Client**: 数据库ORM客户端

## Requirements

### Requirement 1: API响应缓存

**User Story:** As a 前端开发者, I want API响应能够被缓存, so that 减少重复请求提升页面加载速度。

#### Acceptance Criteria

1. WHEN 前端请求页面数据 THEN THE Cache_Layer SHALL 检查是否存在有效缓存并优先返回缓存数据
2. WHEN 缓存过期或不存在 THEN THE API_Server SHALL 从数据库获取数据并更新缓存
3. WHEN 管理后台修改数据 THEN THE Cache_Layer SHALL 自动清除相关缓存
4. THE Cache_Layer SHALL 支持配置不同资源的缓存时间（站点信息30分钟，页面数据5分钟，分类数据10分钟）

### Requirement 2: 前端数据缓存Hook

**User Story:** As a 用户, I want 页面切换时数据能够被复用, so that 减少等待时间提升浏览体验。

#### Acceptance Criteria

1. WHEN 用户访问已加载过的页面 THEN THE Frontend_App SHALL 立即显示缓存数据
2. WHEN 缓存数据存在 THEN THE Frontend_App SHALL 在后台静默刷新数据
3. THE Frontend_App SHALL 提供手动刷新数据的方法
4. WHEN 应用关闭或刷新 THEN THE Cache_Layer SHALL 清除内存缓存

### Requirement 3: API错误处理增强

**User Story:** As a 用户, I want 在API出错时看到友好的错误提示, so that 了解发生了什么并知道如何处理。

#### Acceptance Criteria

1. WHEN API请求失败 THEN THE Frontend_App SHALL 显示用户友好的错误消息
2. WHEN 网络断开 THEN THE Frontend_App SHALL 显示离线提示并提供重试选项
3. THE API_Server SHALL 返回统一格式的错误响应（包含code、message、details字段）
4. IF API请求超时 THEN THE Frontend_App SHALL 自动重试最多2次

### Requirement 4: API分页优化

**User Story:** As a 管理员, I want 大数据量列表支持分页加载, so that 提升后台管理页面的响应速度。

#### Acceptance Criteria

1. WHEN 请求网站列表 THEN THE API_Server SHALL 支持分页参数（page、pageSize）
2. WHEN 请求分类列表 THEN THE API_Server SHALL 支持分页参数
3. THE API_Server SHALL 在分页响应中包含总数、当前页、总页数信息
4. THE Admin_Panel SHALL 使用分页组件展示大数据量列表

### Requirement 5: 数据库查询优化

**User Story:** As a 系统管理员, I want 数据库查询更高效, so that 减少服务器负载提升API响应速度。

#### Acceptance Criteria

1. THE API_Server SHALL 使用数据库索引优化常用查询
2. WHEN 获取页面完整数据 THEN THE API_Server SHALL 使用单次联合查询替代多次查询
3. THE API_Server SHALL 只返回前端需要的字段（字段选择）
4. WHEN 查询大量数据 THEN THE API_Server SHALL 使用游标分页替代偏移分页

### Requirement 6: 前端加载状态优化

**User Story:** As a 用户, I want 在数据加载时看到合适的加载状态, so that 知道页面正在加载而非卡死。

#### Acceptance Criteria

1. WHEN 页面数据加载中 THEN THE Frontend_App SHALL 显示骨架屏而非空白页面
2. WHEN 部分数据加载完成 THEN THE Frontend_App SHALL 渐进式显示已加载内容
3. THE Frontend_App SHALL 在首屏优先加载关键数据
4. WHEN 图片加载中 THEN THE Frontend_App SHALL 显示占位图

### Requirement 7: API请求合并

**User Story:** As a 前端开发者, I want 多个相关API请求能够合并, so that 减少HTTP请求数量。

#### Acceptance Criteria

1. WHEN 页面需要多个数据源 THEN THE Frontend_App SHALL 并行请求而非串行
2. THE API_Server SHALL 提供批量查询接口（如批量获取多个页面配置）
3. WHEN 请求相同数据 THEN THE Frontend_App SHALL 复用进行中的请求

### Requirement 8: 站点信息全局缓存

**User Story:** As a 用户, I want 站点基础信息只加载一次, so that 减少重复请求提升性能。

#### Acceptance Criteria

1. WHEN 应用启动 THEN THE Frontend_App SHALL 加载并缓存站点信息
2. THE Frontend_App SHALL 通过Context全局共享站点信息
3. WHEN 站点信息更新 THEN THE Admin_Panel SHALL 通知前端刷新缓存
4. THE Frontend_App SHALL 在站点信息加载失败时使用默认值

### Requirement 9: 搜索功能优化

**User Story:** As a 用户, I want 搜索响应更快更准确, so that 快速找到需要的工具。

#### Acceptance Criteria

1. WHEN 用户输入搜索词 THEN THE Frontend_App SHALL 防抖处理（300ms延迟）
2. THE API_Server SHALL 支持搜索结果高亮显示匹配词
3. WHEN 搜索无结果 THEN THE Frontend_App SHALL 显示相关推荐
4. THE API_Server SHALL 支持按相关度排序搜索结果

### Requirement 10: 图片加载优化

**User Story:** As a 用户, I want 网站图标加载更快, so that 页面显示更流畅。

#### Acceptance Criteria

1. THE Frontend_App SHALL 使用懒加载方式加载非首屏图片
2. WHEN 图标加载失败 THEN THE Frontend_App SHALL 显示默认图标
3. THE Frontend_App SHALL 支持图片预加载（鼠标悬停时预加载）
4. THE API_Server SHALL 支持返回多种尺寸的图标URL

### Requirement 11: 代码复用优化

**User Story:** As a 开发者, I want 减少重复代码, so that 提升代码可维护性。

#### Acceptance Criteria

1. THE Frontend_App SHALL 将重复的数据获取逻辑抽取为通用Hook
2. THE API_Server SHALL 将重复的数据处理逻辑抽取为工具函数
3. THE Frontend_App SHALL 统一错误处理和加载状态管理
4. THE Admin_Panel SHALL 复用前端的类型定义和工具函数

### Requirement 12: TypeScript类型完善

**User Story:** As a 开发者, I want 完善的TypeScript类型定义, so that 减少运行时错误提升开发效率。

#### Acceptance Criteria

1. THE Frontend_App SHALL 为所有API响应定义完整类型
2. THE Admin_Panel SHALL 与前端共享API类型定义
3. THE Frontend_App SHALL 使用严格的TypeScript配置
4. WHEN 类型不匹配 THEN THE 编译器 SHALL 报错阻止构建
