# Design Document: API和功能优化

## Overview

本设计文档描述UIED设计导航系统的API和现有功能优化方案。优化目标包括：
1. 提升API响应速度和系统性能
2. 改善用户体验（加载状态、错误处理）
3. 增强代码可维护性和类型安全

## Architecture

### 整体架构

```
┌─────────────────────────────────────────────────────────────────┐
│                        Frontend (React)                          │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────────┐  │
│  │ SiteContext │  │ QueryClient │  │ Custom Hooks            │  │
│  │ (全局状态)   │  │ (请求缓存)   │  │ usePageData, useCache  │  │
│  └─────────────┘  └─────────────┘  └─────────────────────────┘  │
│                           │                                      │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    API Service Layer                         ││
│  │  - 请求拦截器 (错误处理、重试)                                 ││
│  │  - 请求去重                                                   ││
│  │  - 响应缓存                                                   ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Backend (Express)                            │
├─────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Cache Middleware                          ││
│  │  - 内存缓存 (node-cache)                                      ││
│  │  - 缓存失效策略                                               ││
│  └─────────────────────────────────────────────────────────────┘│
│                           │                                      │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Route Handlers                            ││
│  │  - 统一错误处理                                               ││
│  │  - 分页支持                                                   ││
│  │  - 字段选择                                                   ││
│  └─────────────────────────────────────────────────────────────┘│
│                           │                                      │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │                    Prisma ORM                                ││
│  │  - 优化查询                                                   ││
│  │  - 索引优化                                                   ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

## Components and Interfaces

### 1. 后端缓存中间件

```typescript
// backend/src/middleware/cache.js
interface CacheConfig {
  stdTTL: number;      // 默认缓存时间（秒）
  checkperiod: number; // 检查过期周期
}

interface CacheMiddleware {
  // 缓存中间件
  cacheMiddleware(ttl?: number): RequestHandler;
  // 清除缓存
  clearCache(pattern?: string): void;
  // 获取缓存统计
  getStats(): CacheStats;
}

// 不同资源的缓存时间配置
const CACHE_TTL = {
  SITE_INFO: 1800,      // 30分钟
  PAGE_DATA: 300,       // 5分钟
  CATEGORIES: 600,      // 10分钟
  WEBSITES: 300,        // 5分钟
  HOT_RECOMMENDATIONS: 300,
};
```

### 2. 统一错误响应格式

```typescript
// 错误响应接口
interface ApiError {
  code: string;        // 错误代码，如 'NOT_FOUND', 'VALIDATION_ERROR'
  message: string;     // 用户友好的错误消息
  details?: unknown;   // 详细错误信息（开发环境）
  timestamp: string;   // 错误发生时间
  path: string;        // 请求路径
}

// 错误代码枚举
enum ErrorCode {
  NOT_FOUND = 'NOT_FOUND',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  RATE_LIMITED = 'RATE_LIMITED',
}
```

### 3. 分页响应格式

```typescript
// 分页请求参数
interface PaginationParams {
  page?: number;       // 当前页，默认1
  pageSize?: number;   // 每页数量，默认20
  cursor?: string;     // 游标（用于游标分页）
}

// 分页响应格式
interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    total: number;       // 总数
    page: number;        // 当前页
    pageSize: number;    // 每页数量
    totalPages: number;  // 总页数
    hasMore: boolean;    // 是否有更多
    nextCursor?: string; // 下一页游标
  };
}
```

### 4. 前端缓存Hook

```typescript
// frontend/src/hooks/useCache.ts
interface UseCacheOptions<T> {
  key: string;                    // 缓存键
  fetcher: () => Promise<T>;      // 数据获取函数
  ttl?: number;                   // 缓存时间（毫秒）
  staleWhileRevalidate?: boolean; // 是否使用SWR策略
  enabled?: boolean;              // 是否启用
}

interface UseCacheReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  isStale: boolean;      // 数据是否过期
  refetch: () => Promise<void>;
  invalidate: () => void;
}
```

### 5. 前端API服务增强

```typescript
// frontend/src/services/api.ts
interface ApiConfig {
  baseURL: string;
  timeout: number;
  retryCount: number;      // 重试次数
  retryDelay: number;      // 重试延迟
}

interface RequestInterceptor {
  // 请求去重
  deduplicateRequest(config: AxiosRequestConfig): Promise<AxiosResponse>;
  // 自动重试
  retryOnError(error: AxiosError): Promise<AxiosResponse>;
}
```

### 6. 站点信息Context

```typescript
// frontend/src/contexts/SiteContext.tsx
interface SiteContextValue {
  siteInfo: SiteInfo | null;
  loading: boolean;
  error: Error | null;
  refresh: () => Promise<void>;
}

// 使用方式
const { siteInfo } = useSiteContext();
```

## Data Models

### 缓存数据结构

```typescript
// 缓存条目
interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
  key: string;
}

// 缓存存储
interface CacheStore {
  entries: Map<string, CacheEntry<unknown>>;
  maxSize: number;
  evictionPolicy: 'LRU' | 'FIFO';
}
```

### 搜索增强数据结构

```typescript
// 搜索结果（带高亮）
interface SearchResult {
  id: string;
  name: string;
  description: string;
  url: string;
  highlights: {
    name?: string[];      // 名称匹配片段
    description?: string[]; // 描述匹配片段
  };
  score: number;          // 相关度分数
}

// 搜索响应
interface SearchResponse {
  results: SearchResult[];
  total: number;
  suggestions?: string[]; // 搜索建议（无结果时）
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: 缓存一致性

*For any* API请求，如果缓存存在且未过期，返回的数据应与缓存数据完全一致；如果缓存不存在或已过期，返回的数据应与数据库数据一致。

**Validates: Requirements 1.1, 1.2**

### Property 2: 缓存失效正确性

*For any* 数据修改操作（创建、更新、删除），相关的缓存条目应被正确清除，后续请求应返回最新数据。

**Validates: Requirements 1.3**

### Property 3: 分页数据完整性

*For any* 分页请求，返回的pagination对象中total应等于所有页数据的总和，且遍历所有页应能获取完整数据集。

**Validates: Requirements 4.1, 4.2, 4.3**

### Property 4: 错误响应格式一致性

*For any* API错误响应，响应体应包含code、message、timestamp、path字段，且code应为预定义的错误代码之一。

**Validates: Requirements 3.3**

### Property 5: 请求重试幂等性

*For any* 幂等请求（GET、PUT、DELETE），重试操作不应产生副作用，最终结果应与单次请求一致。

**Validates: Requirements 3.4**

### Property 6: 搜索结果相关性

*For any* 搜索查询，返回结果中的每个条目应至少在name、description或tags中包含搜索关键词（或其变体）。

**Validates: Requirements 9.2, 9.4**

### Property 7: 防抖请求合并

*For any* 在防抖时间窗口内的多次相同搜索请求，应只发出一次实际API请求。

**Validates: Requirements 9.1**

### Property 8: 降级处理正确性

*For any* 站点信息加载失败的情况，应用应使用预定义的默认值，且不应抛出未捕获的异常。

**Validates: Requirements 8.4**

### Property 9: 图标加载降级

*For any* 图标加载失败的情况，应显示默认图标，且不应显示破损图片。

**Validates: Requirements 10.2**

### Property 10: 并行请求效率

*For any* 需要多个独立数据源的页面，所有数据请求应并行发出，总加载时间应接近最慢单个请求的时间。

**Validates: Requirements 7.1**

## Error Handling

### 后端错误处理

```javascript
// backend/src/middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  const error = {
    code: err.code || 'INTERNAL_ERROR',
    message: err.message || '服务器内部错误',
    timestamp: new Date().toISOString(),
    path: req.path,
  };
  
  // 开发环境返回详细错误
  if (process.env.NODE_ENV === 'development') {
    error.details = err.stack;
  }
  
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json(error);
};
```

### 前端错误处理

```typescript
// frontend/src/utils/errorHandler.ts
const handleApiError = (error: AxiosError): string => {
  if (!error.response) {
    return '网络连接失败，请检查网络设置';
  }
  
  const { code, message } = error.response.data as ApiError;
  
  const errorMessages: Record<string, string> = {
    NOT_FOUND: '请求的资源不存在',
    VALIDATION_ERROR: '输入数据格式错误',
    UNAUTHORIZED: '请先登录',
    RATE_LIMITED: '请求过于频繁，请稍后再试',
    INTERNAL_ERROR: '服务器繁忙，请稍后再试',
  };
  
  return errorMessages[code] || message || '未知错误';
};
```

## Testing Strategy

### 单元测试

1. **缓存中间件测试**
   - 测试缓存命中/未命中逻辑
   - 测试缓存过期逻辑
   - 测试缓存清除逻辑

2. **分页逻辑测试**
   - 测试分页参数解析
   - 测试边界情况（第一页、最后一页）
   - 测试总数计算

3. **错误处理测试**
   - 测试各种错误类型的响应格式
   - 测试错误消息映射

### 属性测试

使用fast-check进行属性测试：

1. **缓存一致性属性测试** - Property 1, 2
2. **分页完整性属性测试** - Property 3
3. **错误格式属性测试** - Property 4
4. **搜索相关性属性测试** - Property 6

### 集成测试

1. **API端到端测试**
   - 测试完整的请求-响应流程
   - 测试缓存与数据库的一致性

2. **前端集成测试**
   - 测试数据加载和缓存行为
   - 测试错误处理和重试逻辑

## Implementation Notes

### 优先级排序

1. **高优先级**（立即实现）
   - 后端缓存中间件
   - 统一错误处理
   - API分页支持

2. **中优先级**（第二阶段）
   - 前端缓存Hook
   - 站点信息Context
   - 搜索优化

3. **低优先级**（第三阶段）
   - 图片懒加载
   - 请求去重
   - TypeScript类型完善

### 技术选型

- **后端缓存**: node-cache（轻量级内存缓存）
- **前端状态管理**: React Context + 自定义Hook
- **属性测试**: fast-check
- **API请求**: axios + 自定义拦截器
