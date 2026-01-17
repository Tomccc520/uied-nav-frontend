# GitHub 和 Gitee 上传计划

> 更新时间：2026-01-17  
> 作者：Tomda

---

## 📋 当前状态

### 已上传
- ✅ **Frontend**（前端）
  - GitHub: https://github.com/Tomccc520/uied-nav-frontend.git
  - Gitee: https://gitee.com/tomdac/uied-nav-frontend.git

### 待上传
- ❌ **Backend**（后端）
- ❌ **Admin**（管理后台）
- ❌ **完整项目**（包含前端、后端、管理后台）

---

## 🎯 上传策略

### 方案 1：分仓库上传（推荐）⭐

**优点**：
- 前端、后端、管理后台独立维护
- 可以单独部署
- 更新更灵活

**仓库结构**：
```
1. uied-nav-frontend (已有)
   - 前端用户界面

2. uied-nav-backend (新建)
   - 后端 API 服务

3. uied-nav-admin (新建)
   - 管理后台

4. uied-nav (新建，主仓库)
   - 完整项目文档
   - 部署脚本
   - 子模块引用
```

---

### 方案 2：单仓库上传（简单）

**优点**：
- 管理简单
- 一次性克隆所有代码
- 适合小团队

**仓库结构**：
```
uied-nav-full (新建)
├── frontend/
├── backend/
├── admin/
├── docs/
└── README.md
```

---

## 🚀 实施计划（推荐方案 1）

### Step 1：准备工作

#### 1.1 清理敏感信息

**检查并移除**：
- [ ] 数据库文件（`backend/prisma/dev.db`）
- [ ] 环境变量文件（`.env`）
- [ ] 上传的文件（`backend/uploads/`）
- [ ] 导出的数据（`backend/exports/`）
- [ ] 日志文件
- [ ] node_modules

#### 1.2 更新 .gitignore

**创建 `backend/.gitignore`**：
```gitignore
# 依赖
node_modules/

# 环境变量
.env
.env.local
.env.production

# 数据库
*.db
*.db-journal
*.db.backup*
prisma/dev.db
prisma/test.db

# 上传文件
uploads/*
!uploads/.gitkeep

# 导出文件
exports/*
!exports/.gitkeep

# 日志
*.log
npm-debug.log*

# 系统文件
.DS_Store
```

**创建 `admin/.gitignore`**：
```gitignore
# 依赖
node_modules/

# 环境变量
.env
.env.local
.env.production

# 构建产物
dist/
build/

# 日志
*.log
npm-debug.log*

# 系统文件
.DS_Store
```

#### 1.3 创建占位文件

```bash
# Backend
touch backend/uploads/.gitkeep
touch backend/exports/.gitkeep

# 确保这些目录被 Git 追踪但内容被忽略
```

---

### Step 2：上传 Backend（后端）

#### 2.1 在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 仓库名：`uied-nav-backend`
3. 描述：`UIED 导航系统 - 后端 API 服务`
4. 公开仓库
5. 不要初始化 README（我们已经有了）

#### 2.2 初始化 Git

```bash
cd backend

# 初始化 Git
git init

# 添加 .gitignore
cat > .gitignore << 'EOF'
# 依赖
node_modules/

# 环境变量
.env
.env.local
.env.production

# 数据库
*.db
*.db-journal
*.db.backup*
prisma/dev.db
prisma/test.db

# 上传文件
uploads/*
!uploads/.gitkeep

# 导出文件
exports/*
!exports/.gitkeep

# 日志
*.log
npm-debug.log*

# 系统文件
.DS_Store
EOF

# 创建占位文件
touch uploads/.gitkeep
touch exports/.gitkeep

# 添加所有文件
git add .

# 提交
git commit -m "feat: 初始化后端项目

- Express API 服务
- Prisma ORM + SQLite
- JWT 认证
- 完整的 CRUD 接口
- 测试套件（Vitest）
"

# 添加远程仓库
git remote add origin https://github.com/Tomccc520/uied-nav-backend.git

# 推送到 GitHub
git push -u origin master
```

#### 2.3 推送到 Gitee

```bash
cd backend

# 在 Gitee 创建仓库后
git remote add gitee https://gitee.com/tomdac/uied-nav-backend.git

# 推送到 Gitee
git push -u gitee master
```

---

### Step 3：上传 Admin（管理后台）

#### 3.1 在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 仓库名：`uied-nav-admin`
3. 描述：`UIED 导航系统 - 管理后台`
4. 公开仓库

#### 3.2 初始化 Git

```bash
cd admin

# 初始化 Git
git init

# 添加 .gitignore
cat > .gitignore << 'EOF'
# 依赖
node_modules/

# 环境变量
.env
.env.local
.env.production

# 构建产物
dist/
build/

# 日志
*.log
npm-debug.log*

# 系统文件
.DS_Store
EOF

# 添加所有文件
git add .

# 提交
git commit -m "feat: 初始化管理后台项目

- React 19 + TypeScript + Vite
- Ant Design 6 UI 组件库
- 完整的管理功能
- 响应式设计
"

# 添加远程仓库
git remote add origin https://github.com/Tomccc520/uied-nav-admin.git

# 推送到 GitHub
git push -u origin master
```

#### 3.3 推送到 Gitee

```bash
cd admin

# 在 Gitee 创建仓库后
git remote add gitee https://gitee.com/tomdac/uied-nav-admin.git

# 推送到 Gitee
git push -u gitee master
```

---

### Step 4：创建主仓库（完整项目）

#### 4.1 在 GitHub 创建仓库

1. 访问 https://github.com/new
2. 仓库名：`uied-nav`
3. 描述：`🌟 UIED 导航系统 - 开源的设计师导航网站`
4. 公开仓库

#### 4.2 初始化主仓库

```bash
# 在项目根目录
git init

# 添加 .gitignore
cat > .gitignore << 'EOF'
# 系统文件
.DS_Store
.vscode/
.idea/

# 依赖
node_modules/

# 环境变量
.env
.env.local
.env.production

# 日志
*.log

# 数据库
*.db
*.db-journal
*.db.backup*

# 构建产物
dist/
build/

# 上传文件
backend/uploads/*
!backend/uploads/.gitkeep

# 导出文件
backend/exports/*
!backend/exports/.gitkeep

# 子项目的 Git
frontend/.git/
backend/.git/
admin/.git/
EOF

# 创建占位文件
touch backend/uploads/.gitkeep
touch backend/exports/.gitkeep

# 添加所有文件
git add .

# 提交
git commit -m "feat: 初始化 UIED 导航系统

🎯 项目简介
- 开源的设计师导航网站系统
- 前后端分离架构
- 完整的管理后台

📦 项目结构
- frontend: React 19 用户前端
- backend: Express API 服务
- admin: React 19 管理后台

✨ 核心功能
- 网站管理（增删改查）
- 分类管理（含子分类）
- 页面管理
- 批量导入/导出
- Favicon 自动获取
- 基础搜索
- SEO 优化

🚀 技术栈
- Frontend: React 19 + TypeScript
- Backend: Express + Prisma + SQLite
- Admin: React 19 + Ant Design 6

📄 协议
MIT License
"

# 添加远程仓库
git remote add origin https://github.com/Tomccc520/uied-nav.git

# 推送到 GitHub
git push -u origin master
```

#### 4.3 推送到 Gitee

```bash
# 在项目根目录

# 在 Gitee 创建仓库后
git remote add gitee https://gitee.com/tomdac/uied-nav.git

# 推送到 Gitee
git push -u gitee master
```

---

### Step 5：创建完整的 README.md

**创建 `README.md`**：

```markdown
# 🌟 UIED 导航系统

> 开源、免费、强大的设计师导航网站系统

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Tomccc520/uied-nav.svg)](https://github.com/Tomccc520/uied-nav/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Tomccc520/uied-nav.svg)](https://github.com/Tomccc520/uied-nav/network)

[English](README.md) | [简体中文](README_zh-CN.md)

---

## 📖 项目简介

UIED 导航系统是一个现代化的设计资源导航网站系统，采用前后端分离架构，提供完整的管理后台。

### ✨ 核心特性

- 🎨 **现代化设计**：简洁美观的用户界面
- 🚀 **高性能**：React 19 + Express，快速响应
- 📱 **响应式**：完美支持移动端和桌面端
- 🔧 **易于部署**：5 分钟快速部署
- 🎯 **功能完整**：网站管理、分类管理、SEO 优化等
- 🔒 **安全可靠**：JWT 认证，数据加密

---

## 🎯 功能特性

### 核心功能

- ✅ 网站管理（增删改查）
- ✅ 分类管理（含子分类）
- ✅ 页面管理
- ✅ 批量导入/导出
- ✅ Favicon 自动获取
- ✅ 基础搜索
- ✅ 用户提交
- ✅ SEO 设置
- ✅ 站点配置

### 管理功能

- ✅ 用户管理
- ✅ 权限管理
- ✅ 数据统计
- ✅ 操作日志
- ✅ 系统设置

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装步骤

#### 1. 克隆项目

```bash
git clone https://github.com/Tomccc520/uied-nav.git
cd uied-nav
```

#### 2. 安装依赖

```bash
# 安装后端依赖
cd backend
npm install

# 安装前端依赖
cd ../frontend
npm install

# 安装管理后台依赖
cd ../admin
npm install
```

#### 3. 配置环境变量

```bash
# 后端配置
cd backend
cp .env.example .env
# 编辑 .env 文件，配置数据库等信息

# 前端配置
cd ../frontend
cp .env.example .env
# 编辑 .env 文件，配置 API 地址

# 管理后台配置
cd ../admin
cp .env.example .env
# 编辑 .env 文件，配置 API 地址
```

#### 4. 初始化数据库

```bash
cd backend
npm run db:migrate
npm run db:seed
```

#### 5. 启动服务

```bash
# 启动后端（端口 3001）
cd backend
npm run dev

# 启动前端（端口 3000）
cd frontend
npm start

# 启动管理后台（端口 5173）
cd admin
npm run dev
```

#### 6. 访问系统

- 前端：http://localhost:3000
- 管理后台：http://localhost:5173
- 默认管理员账号：admin / admin123

---

## 📦 项目结构

```
uied-nav/
├── frontend/          # 前端用户界面
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # 后端 API 服务
│   ├── src/
│   ├── prisma/
│   └── package.json
├── admin/             # 管理后台
│   ├── src/
│   └── package.json
├── docs/              # 文档
├── docker/            # Docker 配置
└── README.md
```

---

## 🛠️ 技术栈

### Frontend（前端）
- React 19
- TypeScript
- React Router v7
- 原生 CSS

### Backend（后端）
- Express.js
- Prisma ORM
- SQLite
- JWT
- Vitest

### Admin（管理后台）
- React 19
- TypeScript
- Ant Design 6
- Vite

---

## 📚 文档

- [安装指南](docs/installation/)
- [配置文档](docs/configuration/)
- [API 文档](docs/api/)
- [开发指南](docs/development/)
- [部署指南](docs/deployment/)

---

## 🤝 贡献

欢迎贡献代码！请阅读 [贡献指南](CONTRIBUTING.md)。

### 贡献者

感谢所有贡献者！

---

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议。

---

## 🔗 相关链接

- [官网](https://fsuied.com)
- [GitHub](https://github.com/Tomccc520/uied-nav)
- [Gitee](https://gitee.com/tomdac/uied-nav)
- [演示站点](https://demo.fsuied.com)

---

## 💖 支持项目

如果这个项目对你有帮助，请给个 ⭐️ Star 支持一下！

---

## 📧 联系方式

- 作者：Tomda
- 网站：https://fsuied.com
- Email: your-email@example.com

---

**© 2026 UIED技术团队. All Rights Reserved.**
```

---

## ✅ 检查清单

### 上传前检查

- [ ] 移除所有敏感信息
  - [ ] .env 文件
  - [ ] 数据库文件
  - [ ] 上传的文件
  - [ ] API 密钥

- [ ] 更新 .gitignore
  - [ ] backend/.gitignore
  - [ ] admin/.gitignore
  - [ ] 根目录 .gitignore

- [ ] 创建占位文件
  - [ ] backend/uploads/.gitkeep
  - [ ] backend/exports/.gitkeep

- [ ] 创建文档
  - [ ] README.md
  - [ ] README_zh-CN.md
  - [ ] LICENSE
  - [ ] CONTRIBUTING.md

### 上传后检查

- [ ] GitHub 仓库创建成功
  - [ ] uied-nav-backend
  - [ ] uied-nav-admin
  - [ ] uied-nav

- [ ] Gitee 仓库创建成功
  - [ ] uied-nav-backend
  - [ ] uied-nav-admin
  - [ ] uied-nav

- [ ] 代码推送成功
  - [ ] 所有文件都已上传
  - [ ] 敏感信息已移除
  - [ ] .gitignore 生效

- [ ] 文档完整
  - [ ] README 清晰易懂
  - [ ] 安装步骤正确
  - [ ] 链接都可访问

---

## 🚀 下一步行动

### 立即执行（今天）

1. **清理敏感信息**
   ```bash
   # 检查是否有敏感文件
   find . -name ".env" -not -path "*/node_modules/*"
   find . -name "*.db" -not -path "*/node_modules/*"
   ```

2. **创建 .gitignore**
   - backend/.gitignore
   - admin/.gitignore

3. **上传 Backend**
   - 在 GitHub 创建仓库
   - 初始化 Git
   - 推送代码

### 本周完成

4. **上传 Admin**
5. **创建主仓库**
6. **编写完整文档**
7. **测试克隆和部署**

---

## 💡 注意事项

### 1. 敏感信息

**绝对不要上传**：
- ❌ .env 文件
- ❌ 数据库文件（*.db）
- ❌ API 密钥
- ❌ 密码
- ❌ 上传的文件

### 2. 文件大小

**GitHub 限制**：
- 单个文件 < 100MB
- 仓库总大小 < 1GB

**如果超过**：
- 使用 Git LFS
- 或者不上传大文件

### 3. 提交信息

**规范的提交信息**：
```
feat: 添加新功能
fix: 修复 bug
docs: 更新文档
style: 代码格式调整
refactor: 代码重构
test: 添加测试
chore: 构建工具或辅助工具的变动
```

### 4. 分支管理

**推荐策略**：
```
main (master)     # 稳定版本
  ├── develop     # 开发版本
  ├── feature/*   # 功能分支
  └── hotfix/*    # 紧急修复
```

---

**记住**：上传前一定要检查敏感信息！

