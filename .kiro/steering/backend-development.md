---
inclusion: fileMatch
fileMatchPattern: "backend/**/*.js"
---

# Backend 开发规范

## 代码风格

- 使用 ES Module (`import/export`)
- 异步函数使用 `async/await`
- 错误处理使用 try-catch 包裹

## 路由文件结构

```javascript
import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// GET 列表
router.get('/', async (req, res) => {
  try {
    const items = await prisma.model.findMany();
    res.json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
```

## API 响应格式

```javascript
// 成功响应
{ success: true, data: {...}, message?: "操作成功" }

// 列表响应
{ success: true, data: [...], total: 100, page: 1, pageSize: 20 }

// 错误响应
{ success: false, message: "错误描述" }
```

## Prisma 常用操作

```javascript
// 查询带关联
await prisma.website.findMany({
  include: { category: true },
  where: { visible: true },
  orderBy: { order: 'asc' }
});

// 分页查询
const [items, total] = await Promise.all([
  prisma.model.findMany({ skip, take }),
  prisma.model.count({ where })
]);

// 事务操作
await prisma.$transaction([
  prisma.model.update(...),
  prisma.model.delete(...)
]);
```

## 认证中间件

需要认证的路由添加 `authMiddleware`:

```javascript
import { authMiddleware } from '../middleware/auth.js';
router.post('/', authMiddleware, async (req, res) => {...});
```

## 输入验证

使用 express-validator:

```javascript
import { body, validationResult } from 'express-validator';

router.post('/',
  body('name').notEmpty().withMessage('名称不能为空'),
  body('url').isURL().withMessage('URL格式不正确'),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    // ...
  }
);
```

## 文件命名

- 路由: `xxxRoutes.js` (如 `websiteRoutes.js`)
- 服务: `xxxService.js` (如 `exportService.js`)
- 工具: 描述性名称 (如 `checkDuplicateUrls.js`)
