---
inclusion: manual
---

# API 端点参考

## 公开 API (无需认证)

### 网站
- `GET /api/websites` - 获取网站列表
- `GET /api/websites/:id` - 获取单个网站
- `GET /api/websites/category/:categoryId` - 按分类获取

### 分类
- `GET /api/categories` - 获取分类列表
- `GET /api/categories/:id` - 获取单个分类

### 页面
- `GET /api/pages` - 获取页面列表
- `GET /api/pages/:slug` - 获取页面配置

### 设置
- `GET /api/public/settings` - 获取公开设置
- `GET /api/public/site-info` - 获取站点信息
- `GET /api/public/nav-menu` - 获取导航菜单

## 管理 API (需要认证)

### 认证
- `POST /api/auth/login` - 登录
- `POST /api/auth/logout` - 登出
- `GET /api/auth/me` - 获取当前用户

### 网站管理
- `POST /api/admin/websites` - 创建网站
- `PUT /api/admin/websites/:id` - 更新网站
- `DELETE /api/admin/websites/:id` - 删除网站

### 分类管理
- `POST /api/admin/categories` - 创建分类
- `PUT /api/admin/categories/:id` - 更新分类
- `DELETE /api/admin/categories/:id` - 删除分类

### 页面管理
- `POST /api/admin/pages` - 创建页面
- `PUT /api/admin/pages/:id` - 更新页面
- `DELETE /api/admin/pages/:id` - 删除页面

## 请求头

```
Authorization: Bearer <token>
Content-Type: application/json
```
