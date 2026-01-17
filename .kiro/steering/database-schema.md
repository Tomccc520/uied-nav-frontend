---
inclusion: fileMatch
fileMatchPattern: "backend/prisma/**"
---

# 数据库 Schema 参考

## 核心模型

### Category (分类)
- 支持父子分类 (parentId)
- 关联 Website 和 PageCategory

### Website (网站)
- 属于一个 Category
- 包含监控状态字段 (status, lastCheckedAt)
- tags 存储为 JSON 字符串

### Page (页面)
- 动态页面配置
- Hero Banner 配置 (heroTitle, heroBgType 等)
- 通过 PageCategory 关联分类

## 常用查询模式

```javascript
// 获取页面及其分类和网站
const page = await prisma.page.findUnique({
  where: { slug },
  include: {
    pageCategories: {
      include: {
        category: {
          include: { websites: true }
        }
      },
      orderBy: { order: 'asc' }
    }
  }
});

// 获取分类树
const categories = await prisma.category.findMany({
  where: { parentId: null },
  include: { children: true },
  orderBy: { order: 'asc' }
});
```

## 迁移命令

```bash
# 生成迁移
npx prisma migrate dev --name description

# 应用迁移
npx prisma migrate deploy

# 重置数据库
npx prisma migrate reset

# 打开数据库 GUI
npx prisma studio
```
