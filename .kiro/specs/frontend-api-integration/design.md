# Design Document

## Overview

本设计文档描述了UIED设计导航网站前端页面API对接的技术实现方案。核心目标是将剩余5个页面（3D、电商、室内、字体、平面设计）从静态数据源切换到后端API数据源，同时保持与已完成页面（UIUX、AI）一致的架构模式。

## Architecture

### 整体架构

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend (React)                         │
├─────────────────────────────────────────────────────────────────┤
│  Pages                                                           │
│  ├── UIUX (✅ API对接完成)                                       │
│  ├── AI (✅ API对接完成)                                         │
│  ├── 3D (⏳ 待对接)                                              │
│  ├── Ecommerce (⏳ 待对接)                                       │
│  ├── Interior (⏳ 待对接)                                        │
│  ├── Font (⏳ 待对接)                                            │
│  └── Design (⏳ 待对接)                                          │
├─────────────────────────────────────────────────────────────────┤
│  Hooks                                                           │
│  ├── useAPINavigation (API导航Hook)                              │
│  ├── useNavigation (通用导航Hook)                                │
│  └── usePageData (页面数据Hook)                                  │
├─────────────────────────────────────────────────────────────────┤
│  Services                                                        │
│  ├── apiDataService (API数据服务)                                │
│  ├── pageService (页面服务)                                      │
│  └── api (基础API配置)                                           │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Backend (Express + Prisma)                  │
├─────────────────────────────────────────────────────────────────┤
│  Routes                                                          │
│  ├── /api/pages/:slug/full (页面完整数据)                        │
│  ├── /api/pages/:slug/hot (热门推荐)                             │
│  ├── /api/pages/:slug/search (页面内搜索)                        │
│  ├── /api/categories (分类管理)                                  │
│  └── /api/websites (网站管理)                                    │
├─────────────────────────────────────────────────────────────────┤
│  Database (SQLite via Prisma)                                    │
│  ├── Page (页面配置)                                             │
│  ├── Category (分类，支持父子关系)                               │
│  ├── Website (网站/工具)                                         │
│  └── PageCategory (页面-分类关联)                                │
└─────────────────────────────────────────────────────────────────┘
```

### 数据流

```
1. 页面加载
   Page Component → useAPINavigation → APIDataService → pageService → Backend API

2. 数据回退
   API失败 → useAPINavigation检测 → 切换到StaticDataService → 本地数据文件

3. 搜索流程
   用户输入 → handleSearch → searchWebsites → API或本地搜索
```

## Components and Interfaces

### 1. DataService 接口

```typescript
interface DataService {
  getNavItems(): NavItem[];
  getWebsites(params?: {
    category?: string;
    subCategory?: string;
    featured?: boolean;
    hot?: boolean;
    limit?: number;
  }): Tool[];
  searchWebsites(keyword: string, limit?: number): Tool[];
  getStats(): Stats;
}
```

### 2. APIDataService 扩展方法

```typescript
class APIDataService implements DataService {
  // 基础方法
  getNavItems(): NavItem[];
  getWebsites(params?: WebsiteParams): Tool[];
  searchWebsites(keyword: string, limit?: number): Tool[];
  getStats(): Stats;
  
  // 扩展方法（用于子分类）
  getSubCategories(categoryId: string): SubCategory[];
  getWebsitesBySubCategory(subCategoryId: string): Tool[];
  getSubCategoryStats(categoryId: string): SubCategoryStat[];
}
```

### 3. useAPINavigation Hook

```typescript
interface UseAPINavigationConfig {
  slug: string;                    // 页面slug，如 '3d', 'ecommerce'
  navType: NavMenuType;            // 导航类型枚举
  iconComponents: Record<string, React.ComponentType<any>>;  // 图标映射
  searchPageType?: string;         // 搜索页面类型
  fallbackDataService?: DataService;  // 静态数据服务作为后备
}

interface UseAPINavigationReturn extends NavigationHookReturn {
  dataSource: 'api' | 'static' | 'loading';  // 当前数据源
  apiError: Error | null;                     // API错误
  apiDataService: APIDataService | null;      // API数据服务实例
  refetchData: () => Promise<void>;           // 重新获取数据
}
```

### 4. 页面组件结构

```typescript
// 页面组件模板
const PageComponent: React.FC = () => {
  // 1. 创建静态数据服务（作为后备）
  const staticDataService = useMemo(() => new StaticDataService(), []);
  
  // 2. 根据配置选择数据源
  const useAPI = DATA_SOURCE === 'api' || DATA_SOURCE === 'auto';
  
  // 3. 使用API导航Hook
  const apiNavigation = useAPINavigation({
    slug: 'page-slug',
    navType: NavMenuType.PAGE_TYPE,
    iconComponents: iconMap,
    searchPageType: 'page-type',
    fallbackDataService: staticDataService
  });
  
  // 4. 使用静态数据导航Hook（作为对比）
  const staticNavigation = useNavigation({
    navType: NavMenuType.PAGE_TYPE,
    dataService: staticDataService,
    searchPageType: 'page-type'
  });
  
  // 5. 选择使用哪个导航结果
  const navigation = useAPI ? apiNavigation : staticNavigation;
  
  // 6. 渲染页面...
};
```

## Data Models

### 1. API响应格式

```typescript
// GET /api/pages/:slug/full
interface PageFullResponse {
  page: {
    id: string;
    name: string;
    slug: string;
    type: string;
    icon?: string;
    description?: string;
    searchPlaceholder?: string;
    searchEnabled: boolean;
    showHotRecommendations: boolean;
    showCategories: boolean;
  };
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    icon: string;
    color: string;
    description?: string;
    order: number;
    subCategories: Array<{
      id: string;
      name: string;
      slug: string;
    }>;
  }>;
  websitesByCategory: Record<string, Array<{
    id: string;
    name: string;
    description: string;
    url: string;
    isHot: boolean;
    isFeatured: boolean;
    isNew: boolean;
    tags: string[];
  }>>;
  stats: {
    totalCategories: number;
    totalWebsites: number;
  };
}
```

### 2. 数据库模型关系

```
Page (1) ──── (N) PageCategory (N) ──── (1) Category
                                              │
                                              │ (1)
                                              ▼
                                        Category (N) [子分类]
                                              │
                                              │ (1)
                                              ▼
                                        Website (N)
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: API数据加载一致性

*For any* page slug, when API data is successfully loaded, the returned categories count SHALL equal the stats.totalCategories value.

**Validates: Requirements 1.2, 2.2, 3.2, 4.2, 5.2, 8.1**

### Property 2: 数据源回退正确性

*For any* page, when API request fails, the frontend SHALL display data from static data service without errors.

**Validates: Requirements 1.3, 2.3, 3.3, 4.3, 5.3, 6.3**

### Property 3: 搜索结果一致性

*For any* search query on a page, the search results SHALL only contain websites that belong to that page's categories.

**Validates: Requirements 1.4, 2.4, 3.4, 4.4, 5.4, 9.2**

### Property 4: 子分类数据完整性

*For any* category with sub-categories, the sum of websites in all sub-categories SHALL equal the total websites shown for that category.

**Validates: Requirements 1.5, 2.5, 3.5, 4.5, 5.5**

### Property 5: 环境变量控制正确性

*For any* value of REACT_APP_DATA_SOURCE, the frontend SHALL use the correct data source as specified.

**Validates: Requirements 6.1, 6.2, 6.3**

## Error Handling

### 1. API请求失败

```typescript
// 在useAPINavigation中处理
try {
  const service = createAPIDataService(slug, iconComponents);
  await service.loadData();
  
  if (service.isLoaded() && !service.getError()) {
    setApiDataService(service);
    setDataSource('api');
  } else {
    throw new Error('API数据为空或无效');
  }
} catch (err) {
  console.warn(`API加载失败，使用静态数据: ${slug}`, err);
  setApiError(err as Error);
  setDataSource('static');
}
```

### 2. 数据格式错误

```typescript
// 在APIDataService中处理
getWebsites(params?: WebsiteParams): Tool[] {
  if (!this.data) return [];
  
  // 安全地访问数据
  const websites = this.data.websitesByCategory[categoryId] || [];
  return websites.map(w => websiteToTool(w, categoryId));
}
```

### 3. 网络超时

```typescript
// 在api.ts中配置
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,  // 10秒超时
});
```

## Testing Strategy

### 单元测试

1. **APIDataService测试**
   - 测试数据加载成功场景
   - 测试数据加载失败场景
   - 测试getNavItems返回正确格式
   - 测试getWebsites按分类筛选
   - 测试searchWebsites搜索功能

2. **useAPINavigation测试**
   - 测试API数据源切换
   - 测试静态数据回退
   - 测试refetchData功能

### 集成测试

1. **页面组件测试**
   - 测试页面正确渲染API数据
   - 测试页面正确渲染静态数据
   - 测试搜索功能
   - 测试子分类切换

### E2E测试

1. **用户流程测试**
   - 测试页面加载完整流程
   - 测试搜索流程
   - 测试分类导航流程

## Implementation Notes

### 修改文件清单

1. **frontend/src/pages/3D/index.tsx**
   - 添加useAPINavigation导入
   - 添加DATA_SOURCE环境变量读取
   - 修改数据源选择逻辑
   - 添加apiDataService用于子分类

2. **frontend/src/pages/Ecommerce/index.tsx**
   - 同上修改

3. **frontend/src/pages/Interior/index.tsx**
   - 同上修改

4. **frontend/src/pages/Font/index.tsx**
   - 同上修改

5. **frontend/src/pages/Design/index.tsx** (或 Graphic)
   - 同上修改

### 参考实现

参考已完成的UIUX和AI页面实现：
- `frontend/src/pages/UIUX/index.tsx`
- `frontend/src/pages/AI/index.tsx`

### 关键代码模式

```typescript
// 1. 环境变量读取
const DATA_SOURCE = process.env.REACT_APP_DATA_SOURCE || 'auto';

// 2. 数据源选择
const useAPI = DATA_SOURCE === 'api' || DATA_SOURCE === 'auto';

// 3. API导航Hook使用
const apiNavigation = useAPINavigation({
  slug: 'page-slug',
  navType: NavMenuType.PAGE_TYPE,
  iconComponents: iconMap,
  searchPageType: 'page-type',
  fallbackDataService: staticDataService
});

// 4. 获取API数据服务（用于子分类）
const apiDataService = useAPI && dataSource === 'api' 
  ? apiNavigation.apiDataService
  : null;

// 5. 子分类数据获取
const subCategories = apiDataService 
  ? apiDataService.getSubCategories(navItem.id)
  : getSubCategoriesByCategory(navItem.id);
```
