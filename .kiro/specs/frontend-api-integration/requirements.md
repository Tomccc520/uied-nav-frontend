# Requirements Document

## Introduction

本文档定义了UIED设计导航网站前端页面API对接的需求规范。项目目标是将剩余5个前端页面（3D、电商、室内、字体、平面设计）从静态数据源切换到后端API数据源，实现前后端数据统一管理。

## Glossary

- **Frontend**: 用户前端应用，基于React + TypeScript构建
- **Backend**: API后端服务，基于Express + Prisma + SQLite构建
- **Admin**: 管理后台应用，基于React + Ant Design构建
- **Page**: 导航页面，如UIUX、AI、3D等
- **Category**: 分类，网站工具的分组
- **SubCategory**: 子分类，分类下的细分
- **Website**: 网站/工具条目
- **DataService**: 数据服务接口，定义获取数据的方法
- **APIDataService**: API数据服务，从后端API获取数据
- **StaticDataService**: 静态数据服务，从本地JS文件获取数据
- **useAPINavigation**: API导航Hook，支持API数据源和静态数据源切换

## Requirements

### Requirement 1: 3D页面API对接

**User Story:** As a user, I want the 3D page to load data from the backend API, so that I can see the latest 3D design tools managed by administrators.

#### Acceptance Criteria

1. WHEN the 3D page loads, THE Frontend SHALL fetch data from `/api/pages/3d/full` endpoint
2. WHEN API data is successfully loaded, THE Frontend SHALL display categories and websites from API response
3. IF API request fails, THEN THE Frontend SHALL fallback to static data from `threeDToolsDatabase.js`
4. WHEN user searches on 3D page, THE Frontend SHALL search within API data if available
5. THE Frontend SHALL support sub-category switching using API data

### Requirement 2: 电商页面API对接

**User Story:** As a user, I want the Ecommerce page to load data from the backend API, so that I can see the latest e-commerce design tools.

#### Acceptance Criteria

1. WHEN the Ecommerce page loads, THE Frontend SHALL fetch data from `/api/pages/ecommerce/full` endpoint
2. WHEN API data is successfully loaded, THE Frontend SHALL display categories and websites from API response
3. IF API request fails, THEN THE Frontend SHALL fallback to static data from `ecommerceToolsDatabase.js`
4. WHEN user searches on Ecommerce page, THE Frontend SHALL search within API data if available
5. THE Frontend SHALL support sub-category switching using API data

### Requirement 3: 室内页面API对接

**User Story:** As a user, I want the Interior page to load data from the backend API, so that I can see the latest interior design tools.

#### Acceptance Criteria

1. WHEN the Interior page loads, THE Frontend SHALL fetch data from `/api/pages/interior/full` endpoint
2. WHEN API data is successfully loaded, THE Frontend SHALL display categories and websites from API response
3. IF API request fails, THEN THE Frontend SHALL fallback to static data from `interiorToolsDatabase.js`
4. WHEN user searches on Interior page, THE Frontend SHALL search within API data if available
5. THE Frontend SHALL support sub-category switching using API data

### Requirement 4: 字体页面API对接

**User Story:** As a user, I want the Font page to load data from the backend API, so that I can see the latest font tools and resources.

#### Acceptance Criteria

1. WHEN the Font page loads, THE Frontend SHALL fetch data from `/api/pages/font/full` endpoint
2. WHEN API data is successfully loaded, THE Frontend SHALL display categories and websites from API response
3. IF API request fails, THEN THE Frontend SHALL fallback to static data from `fontToolsDatabase.js`
4. WHEN user searches on Font page, THE Frontend SHALL search within API data if available
5. THE Frontend SHALL support sub-category switching using API data

### Requirement 5: 平面设计页面API对接

**User Story:** As a user, I want the Design/Graphic page to load data from the backend API, so that I can see the latest graphic design tools.

#### Acceptance Criteria

1. WHEN the Design page loads, THE Frontend SHALL fetch data from `/api/pages/design/full` endpoint
2. WHEN API data is successfully loaded, THE Frontend SHALL display categories and websites from API response
3. IF API request fails, THEN THE Frontend SHALL fallback to static data from `designToolsDatabase.js`
4. WHEN user searches on Design page, THE Frontend SHALL search within API data if available
5. THE Frontend SHALL support sub-category switching using API data

### Requirement 6: 数据源切换机制

**User Story:** As a developer, I want to control data source via environment variable, so that I can easily switch between API and static data during development.

#### Acceptance Criteria

1. WHEN `REACT_APP_DATA_SOURCE` is set to `api`, THE Frontend SHALL only use API data source
2. WHEN `REACT_APP_DATA_SOURCE` is set to `static`, THE Frontend SHALL only use static data source
3. WHEN `REACT_APP_DATA_SOURCE` is set to `auto` or not set, THE Frontend SHALL prefer API data with static fallback
4. THE Frontend SHALL display data source indicator in development mode

### Requirement 7: 后端数据初始化

**User Story:** As an administrator, I want the backend to have initial data for all pages, so that the frontend can display content immediately.

#### Acceptance Criteria

1. THE Backend SHALL have page configurations for: 3d, ecommerce, interior, font, design
2. THE Backend SHALL have categories imported from static data files for each page
3. THE Backend SHALL have websites imported from static data files for each page
4. THE Backend SHALL maintain parent-child relationships for categories

### Requirement 8: API响应格式一致性

**User Story:** As a frontend developer, I want consistent API response format, so that I can use the same data service for all pages.

#### Acceptance Criteria

1. THE Backend `/api/pages/:slug/full` endpoint SHALL return page config, categories, websitesByCategory, and stats
2. THE Backend SHALL return categories with subCategories array
3. THE Backend SHALL return websites grouped by categoryId
4. THE Backend SHALL parse tags JSON string to array in response

### Requirement 9: 搜索功能API支持

**User Story:** As a user, I want to search within a specific page, so that I can find relevant tools quickly.

#### Acceptance Criteria

1. WHEN user enters search query, THE Frontend SHALL call `/api/pages/:slug/search` endpoint
2. THE Backend SHALL search in website name and description fields
3. THE Backend SHALL return results sorted by relevance (hot, featured first)
4. THE Frontend SHALL display search results count

### Requirement 10: 热门推荐API支持

**User Story:** As a user, I want to see hot recommendations on each page, so that I can discover popular tools.

#### Acceptance Criteria

1. THE Frontend SHALL fetch hot websites from `/api/pages/:slug/hot` endpoint
2. THE Backend SHALL return websites with isHot=true for the specified page
3. THE Frontend SHALL display hot recommendations in dedicated section
