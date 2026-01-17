# Design Document: Functional Testing

## Overview

本设计文档定义了导航网站项目的功能测试方案，重点测试网站添加、分类管理和前端展示的核心功能。测试将使用 Vitest 作为测试框架，结合 fast-check 进行属性测试。

## Architecture

测试架构分为三层：

```
┌─────────────────────────────────────────────────────────┐
│                    Test Runner (Vitest)                  │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  API Tests  │  │ Unit Tests  │  │ Property Tests  │  │
│  │  (Backend)  │  │ (Frontend)  │  │   (fast-check)  │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
├─────────────────────────────────────────────────────────┤
│                    Test Utilities                        │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │  Generators │  │   Mocks     │  │   Assertions    │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Components and Interfaces

### Test Components

1. **API Test Suite** (`backend/src/__tests__/api/`)
   - `websites.test.js` - 网站 API 测试
   - `categories.test.js` - 分类 API 测试

2. **Property Test Suite** (`backend/src/__tests__/properties/`)
   - `website.property.test.js` - 网站相关属性测试
   - `category.property.test.js` - 分类相关属性测试

3. **Test Utilities** (`backend/src/__tests__/utils/`)
   - `generators.js` - fast-check 数据生成器
   - `testDb.js` - 测试数据库工具

### Interfaces

```typescript
// 网站数据生成器接口
interface WebsiteGenerator {
  validWebsite(): Arbitrary<Website>;
  invalidWebsite(): Arbitrary<Partial<Website>>;
}

// 分类数据生成器接口
interface CategoryGenerator {
  validCategory(): Arbitrary<Category>;
  categoryWithChildren(): Arbitrary<Category>;
}

// 测试数据库接口
interface TestDatabase {
  setup(): Promise<void>;
  teardown(): Promise<void>;
  seed(data: SeedData): Promise<void>;
  clear(): Promise<void>;
}
```

## Data Models

### Website Test Data

```typescript
interface WebsiteTestData {
  name: string;           // 1-100 字符
  url: string;            // 有效 URL 格式
  description?: string;   // 0-500 字符
  iconUrl?: string;       // 有效 URL 或 null
  categoryId?: string;    // 有效分类 ID 或 null
  tags?: string[];        // 标签数组
}
```

### Category Test Data

```typescript
interface CategoryTestData {
  name: string;           // 1-50 字符
  slug: string;           // URL 友好标识
  parentId?: string;      // 父分类 ID 或 null
  order?: number;         // 排序顺序
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Website Creation Returns Valid Data

*For any* valid website data (with name and URL), when creating a website via POST /api/websites, the response SHALL contain the created website with a valid ID and all provided fields preserved.

**Validates: Requirements 1.1, 1.5**

### Property 2: Website-Category Association Integrity

*For any* website created with a valid categoryId, the website's category reference SHALL match the provided categoryId, and fetching websites by that categoryId SHALL include the created website.

**Validates: Requirements 1.2, 3.1, 3.2**

### Property 3: Required Field Validation

*For any* website creation request missing required fields (name or URL), the API SHALL return a 400 validation error with field-specific error information.

**Validates: Requirements 1.4**

### Property 4: Category Hierarchy Preservation

*For any* category created with a parentId, the category SHALL appear in the parent's children array when fetching the parent category.

**Validates: Requirements 2.3**

### Property 5: Category Update Persistence

*For any* category update operation, the updated fields SHALL be persisted and returned in subsequent GET requests.

**Validates: Requirements 2.5**

### Property 6: Website Filtering by Category

*For any* set of websites distributed across multiple categories, filtering by a specific categoryId SHALL return only websites belonging to that category.

**Validates: Requirements 3.2, 3.3**

### Property 7: Pagination Consistency

*For any* paginated request to /api/websites, the response SHALL contain correct pagination metadata (total, page, pageSize) and the number of items SHALL not exceed pageSize.

**Validates: Requirements 6.1**

### Property 8: Website Card Content Completeness

*For any* website data, when rendered as a card component, the output SHALL contain the website name, and if provided, the description and icon.

**Validates: Requirements 4.4, 5.1**

### Property 9: API Error Response Format

*For any* API error (validation, not found, server error), the response SHALL include an appropriate HTTP status code and a descriptive error message.

**Validates: Requirements 6.4**

### Property 10: Authentication Token Validity

*For any* valid login credentials, the returned JWT token SHALL be verifiable and contain the correct user information.

**Validates: Requirements 7.1, 7.3**

### Property 11: Banner Active Filtering

*For any* set of banners with various visibility and date settings, fetching active banners SHALL return only those that are visible and within their valid date range.

**Validates: Requirements 8.2**

### Property 12: Page Full Data Completeness

*For any* page with associated categories and websites, fetching the full page data SHALL include all categories, subcategories, and their websites organized correctly.

**Validates: Requirements 9.1**

### Property 13: Search Relevance Ordering

*For any* search query within a page, the results SHALL be ordered by relevance score with exact name matches ranked highest.

**Validates: Requirements 9.2**

### Property 14: Submission URL Uniqueness

*For any* website submission, the system SHALL prevent duplicate URLs from being submitted if they already exist in the database or pending queue.

**Validates: Requirements 10.2**

### Property 15: Click Count Increment

*For any* click event on a website, banner, or recommendation, the click count SHALL increment by exactly 1.

**Validates: Requirements 8.4, 12.3**

### Property 16: Navigation Menu Tree Structure

*For any* set of navigation menus with parent-child relationships, fetching nav-menus SHALL return a properly nested tree structure with only visible items.

**Validates: Requirements 13.1**

## Error Handling

### Test Error Scenarios

1. **Database Connection Errors**
   - 测试应在数据库不可用时优雅失败
   - 使用 mock 隔离数据库依赖

2. **Invalid Input Handling**
   - 测试各种无效输入格式
   - 验证错误消息的准确性

3. **Concurrent Operations**
   - 测试并发创建/更新操作
   - 验证数据一致性

## Testing Strategy

### Dual Testing Approach

本项目采用单元测试和属性测试相结合的方式：

1. **单元测试 (Unit Tests)**
   - 测试特定示例和边界情况
   - 验证错误处理逻辑
   - 测试组件集成点

2. **属性测试 (Property-Based Tests)**
   - 使用 fast-check 库
   - 每个属性测试运行 100+ 次迭代
   - 验证跨所有输入的通用属性

### Test Configuration

```javascript
// vitest.config.js
export default {
  test: {
    globals: true,
    environment: 'node',
    include: ['src/**/*.test.js', 'src/**/*.property.test.js'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
};
```

### Property Test Annotation Format

每个属性测试必须包含注释引用设计文档中的属性：

```javascript
// **Feature: functional-testing, Property 1: Website Creation Returns Valid Data**
// **Validates: Requirements 1.1, 1.5**
test.prop([validWebsiteArb])('website creation returns valid data', async (websiteData) => {
  // test implementation
});
```

### Test Data Generators

使用 fast-check 创建智能数据生成器：

```javascript
import * as fc from 'fast-check';

// 有效网站数据生成器
const validWebsiteArb = fc.record({
  name: fc.string({ minLength: 1, maxLength: 100 }),
  url: fc.webUrl(),
  description: fc.option(fc.string({ maxLength: 500 })),
  iconUrl: fc.option(fc.webUrl()),
});

// 有效分类数据生成器
const validCategoryArb = fc.record({
  name: fc.string({ minLength: 1, maxLength: 50 }),
  slug: fc.string({ minLength: 1, maxLength: 50 }).map(s => s.toLowerCase().replace(/\s+/g, '-')),
});
```
