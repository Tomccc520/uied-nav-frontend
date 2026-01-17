---
inclusion: always
---

# 编码规范

## 文件头注释

所有源代码文件必须包含版权声明和文件信息：

### TypeScript/JavaScript 文件

```typescript
/**
 * @file ComponentName/index.tsx
 * @description 组件功能描述
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */
```

### CSS 文件

```css
/**
 * @file ComponentName/index.css
 * @description 组件样式描述
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */
```

### 后端文件

```javascript
/**
 * @file routes/categoryRoutes.js
 * @description 分类管理路由
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */
```

## 通用原则

- 代码简洁，避免过度工程
- 函数单一职责，保持短小
- 变量命名清晰有意义
- 中文注释说明业务逻辑
- 所有新文件必须添加文件头注释

## TypeScript/JavaScript

- 优先使用 `const`，必要时用 `let`
- 使用可选链 `?.` 和空值合并 `??`
- 异步操作使用 `async/await`

## 错误处理

```typescript
// 前端
try {
  const data = await api.getData();
} catch (error) {
  console.error('获取数据失败:', error);
  message.error('操作失败，请重试');
}

// 后端
try {
  const result = await prisma.model.create({ data });
  res.json({ success: true, data: result });
} catch (error) {
  console.error('创建失败:', error);
  res.status(500).json({ success: false, message: '创建失败' });
}
```

## Git 提交

- feat: 新功能
- fix: 修复 bug
- refactor: 重构
- style: 样式调整
- docs: 文档更新

## 测试

后端测试使用 Vitest:

```bash
cd backend && npm test        # 运行测试
cd backend && npm run test:watch  # 监听模式
```
