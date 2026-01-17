# 🐳 UIED 导航网站 - Docker 部署教程（宝塔 + CentOS 7）

> 适用于：CentOS 7 无法安装 Node 18+ 的情况
> 
> 优点：不影响现有 WordPress 网站，完全隔离
>
> **最后更新**: 2026-01-15

---

## 📋 部署概览

| 部分 | 部署方式 |
|------|----------|
| **frontend** | 本地构建 → 上传静态文件到网站根目录 |
| **admin** | 本地构建 → 上传静态文件到 /admin 目录 |
| **backend** | Docker 容器运行 |

---

## 🚀 第一步：准备 Docker

### 1.1 确认 Docker 已安装

在宝塔「终端」执行：

```bash
docker --version
```

如果显示版本号，说明已安装。如果没有，去宝塔「软件商店」安装 Docker 管理器。

### 1.2 配置 Docker 镜像加速（国内服务器必做）

```bash
mkdir -p /etc/docker

cat > /etc/docker/daemon.json << 'EOF'
{
  "registry-mirrors": [
    "https://docker.1ms.run",
    "https://docker.xuanyuan.me"
  ]
}
EOF

systemctl daemon-reload
systemctl restart docker
```

### 1.3 拉取 Node.js 镜像

```bash
docker pull node:20
```

⚠️ **重要**：必须使用 `node:20` 完整镜像，不要用 `node:20-alpine`（Alpine 版本缺少 Prisma 需要的 OpenSSL 库）

---

## 📤 第二步：上传项目文件

### 2.1 创建目录结构

```bash
mkdir -p /www/wwwroot/hao.uied.cn/admin
mkdir -p /www/wwwroot/hao.uied.cn/backend
```

### 2.2 上传文件

使用宝塔「文件」功能上传：

| 本地文件 | 上传到服务器 |
|----------|--------------|
| `frontend/build/` 里的所有文件 | `/www/wwwroot/hao.uied.cn/`（网站根目录） |
| `admin/dist/` 里的所有文件 | `/www/wwwroot/hao.uied.cn/admin/` |
| `backend/` 整个文件夹（不含 node_modules） | `/www/wwwroot/hao.uied.cn/backend/` |

### 2.3 最终目录结构

```
/www/wwwroot/hao.uied.cn/
├── index.html          # 前端入口
├── static/             # 前端静态资源
├── admin/              # 管理后台
│   ├── index.html
│   └── assets/
└── backend/            # 后端代码
    ├── src/
    ├── prisma/
    │   └── dev.db      # 数据库文件
    ├── node_modules/   # 依赖（服务器安装）
    └── package.json
```

---

## ⚙️ 第三步：安装后端依赖

### 3.1 使用 Docker 安装依赖

```bash
cd /www/wwwroot/hao.uied.cn/backend

# 安装依赖
docker run --rm -v $(pwd):/app -w /app node:20 npm install --production

# 生成 Prisma 客户端（必须！）
docker run --rm -v $(pwd):/app -w /app node:20 npx prisma generate
```

---

## 🐳 第四步：创建 .env 文件并启动容器

### 4.1 创建 .env 配置文件

在服务器上创建 `.env` 文件（推荐方式，方便管理）：

```bash
cd /www/wwwroot/hao.uied.cn/backend

# 创建 .env 文件
cat > .env << 'EOF'
DATABASE_URL="file:./prisma/dev.db"
PORT=3001
NODE_ENV=production

# 安全配置
JWT_SECRET="change-this-to-a-very-long-random-string-in-production"
JWT_EXPIRES_IN="24h"
PASSWORD_SALT="change-this-salt-in-production"

# CORS 配置
CORS_ORIGINS="https://hao.uied.cn"
FRONTEND_URL="https://hao.uied.cn"
EOF
```

⚠️ **重要**：上面的 `JWT_SECRET` 和 `PASSWORD_SALT` 是示例值，建议修改为随机字符串（但不是必须的）。

### 4.2 创建并启动容器

```bash
docker run -d \
  --name uied-api \
  --restart always \
  -p 3001:3001 \
  -v /www/wwwroot/hao.uied.cn/backend:/app \
  -w /app \
  --env-file /www/wwwroot/hao.uied.cn/backend/.env \
  node:20 node src/index.js
```

💡 **说明**：使用 `--env-file` 参数让容器读取 `.env` 文件，这样配置更清晰，以后修改配置只需编辑 `.env` 文件然后重启容器即可。

### 4.3 验证启动成功

```bash
# 查看容器状态
docker ps

# 测试 API
curl http://127.0.0.1:3001/api/health
```

应该看到：`{"status":"ok","message":"UIED API is running"}`

### 4.4 首次部署：重置管理员密码

⚠️ **重要**：如果你上传的 `dev.db` 数据库文件是从本地复制的，密码可能无法登录。需要重置密码：

```bash
# 重置管理员密码
docker exec uied-api node src/utils/resetAdminPassword.js
```

执行后会显示：`✅ 管理员密码已重置为: admin123`

现在可以使用以下账号登录管理后台：
- 用户名：`admin`
- 密码：`admin123`

💡 **说明**：只有首次部署或更换数据库文件时才需要重置密码。以后更新代码不需要重置。

### 4.5 查看日志（如果有问题）

```bash
docker logs uied-api
```

---

## 🔄 第五步：配置数据库权限

确保数据库文件有正确的权限：

```bash
# 修复数据库文件权限
chmod 666 /www/wwwroot/hao.uied.cn/backend/prisma/dev.db
chown www:www /www/wwwroot/hao.uied.cn/backend/prisma/dev.db

# 修复 prisma 目录权限（重要！）
chmod 777 /www/wwwroot/hao.uied.cn/backend/prisma
chown www:www /www/wwwroot/hao.uied.cn/backend/prisma
```

---

## 🌐 第六步：配置 Nginx

在宝塔「网站」→ `hao.uied.cn` → 「设置」→「配置文件」，使用以下配置：

```nginx
server
{
    listen 80;
    listen 443 ssl http2;
    server_name hao.uied.cn www.hao.uied.cn;
    index index.html;
    root /www/wwwroot/hao.uied.cn;

    # SSL 配置（保留宝塔自动生成的）

    # 禁止访问敏感文件
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.env|\.svn)
    {
        return 404;
    }

    # API 代理（转发到 Docker 容器）
    location /api {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        client_max_body_size 10m;
    }

    # 上传文件访问
    location /uploads {
        alias /www/wwwroot/hao.uied.cn/backend/uploads;
        expires 30d;
    }

    # SEO 文件
    location ~ ^/(sitemap\.xml|robots\.txt)$ {
        root /www/wwwroot/hao.uied.cn/backend/public;
        expires 1d;
    }

    # 管理后台静态资源（必须放在 /admin 之前）
    location ^~ /admin/assets {
        alias /www/wwwroot/hao.uied.cn/admin/assets;
        expires 30d;
    }

    # 管理后台
    location /admin {
        alias /www/wwwroot/hao.uied.cn/admin;
        index index.html;
        try_files $uri $uri/ /admin/index.html;
    }

    # 前端路由（放在最后）
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 30d;
    }

    access_log  /www/wwwlogs/hao.uied.cn.log;
    error_log  /www/wwwlogs/hao.uied.cn.error.log;
}
```

---

## 🔒 第七步：配置 SSL 证书

在宝塔「网站」→ `hao.uied.cn` → 「SSL」→ 申请 Let's Encrypt 证书

---

## ✅ 第八步：验证部署

访问以下链接确认一切正常：

- ✅ **前端首页**：https://hao.uied.cn
- ✅ **管理后台**：https://hao.uied.cn/admin
- ✅ **更新日志页**：https://hao.uied.cn/changelog
- ✅ **API健康检查**：https://hao.uied.cn/api/health

**管理后台登录**：
- 用户名：`admin`
- 密码：`admin123`（首次登录后请立即修改）

---

## 🔧 常用 Docker 命令

```bash
# 查看容器状态
docker ps

# 查看日志
docker logs uied-api

# 实时日志
docker logs -f uied-api

# 重启容器
docker restart uied-api

# 停止容器
docker stop uied-api

# 删除容器
docker rm uied-api

# 进入容器内部（调试用）
docker exec -it uied-api sh
```

---

## 🔄 更新部署

### 更新前端/管理后台

1. 本地重新构建
2. 上传新的文件覆盖
3. 清除浏览器缓存刷新

### 更新后端代码

⚠️ **重要**：更新时**不要覆盖**以下文件：
- `.env` - 配置文件
- `prisma/dev.db` - 数据库文件
- `uploads/` - 上传的图片

**更新步骤**：

```bash
# 1. 上传新的 backend/src/ 代码文件（覆盖旧文件）

# 2. 如果 package.json 有变化，重新安装依赖
cd /www/wwwroot/hao.uied.cn/backend
docker run --rm -v $(pwd):/app -w /app node:20 npm install --production

# 3. 如果 schema.prisma 有变化，重新生成 Prisma 客户端
docker run --rm -v $(pwd):/app -w /app node:20 npx prisma generate

# 4. 重启容器
docker restart uied-api

# 5. 验证更新成功
curl http://127.0.0.1:3001/api/health
```

💡 **提示**：只要不覆盖 `.env` 和 `dev.db`，就不需要重置密码！

---

## 🐛 常见问题

### 问题1：数据库无法打开 (Error code 14)

**原因**：DATABASE_URL 使用了相对路径

**解决**：重新创建容器，使用绝对路径：
```bash
docker stop uied-api
docker rm uied-api

# 重新创建，注意 DATABASE_URL 使用绝对路径
docker run -d \
  --name uied-api \
  ... \
  -e "DATABASE_URL=file:/app/prisma/dev.db" \
  ...
```

### 问题2：Prisma 报错 libssl 找不到

**原因**：使用了 `node:20-alpine` 镜像

**解决**：使用完整的 `node:20` 镜像，并重新生成 Prisma 客户端：
```bash
docker run --rm -v /www/wwwroot/hao.uied.cn/backend:/app -w /app node:20 npx prisma generate
```

### 问题3：管理后台空白

**原因**：admin 的 React Router 没有设置 basename

**解决**：确保 `admin/vite.config.ts` 中设置了 `base: '/admin/'`，并且 `admin/src/App.tsx` 中 BrowserRouter 设置了 `basename="/admin"`

### 问题4：前端请求 localhost:3001

**原因**：前端构建时没有正确读取环境变量

**解决**：
1. 确认 `frontend/.env.production` 内容为 `REACT_APP_API_URL=https://hao.uied.cn/api`
2. 重新构建前端：`npm run build`
3. 上传新的 build 文件

### 问题5：容器自动停止

**原因**：启动报错

**解决**：查看日志找原因
```bash
docker logs uied-api
```

### 问题6：首次部署或更换数据库后无法登录管理后台

**原因**：数据库的密码哈希与当前 `.env` 文件中的 `PASSWORD_SALT` 不匹配

**解决方案**：重置管理员密码

```bash
# 方法1：使用 docker exec（推荐）
docker exec uied-api node src/utils/resetAdminPassword.js

# 方法2：使用 docker run
cd /www/wwwroot/hao.uied.cn/backend
docker run --rm \
  -v $(pwd):/app \
  -w /app \
  --env-file .env \
  node:20 node src/utils/resetAdminPassword.js
```

执行后会显示：`✅ 管理员密码已重置为: admin123`

**登录信息**：
- 用户名：`admin`
- 密码：`admin123`

⚠️ **重要说明**：
- 只有首次部署或更换 `dev.db` 文件时才需要重置密码
- 以后更新代码时，只要不覆盖 `.env` 和 `dev.db`，就不需要重置密码
- 登录后请立即在管理后台修改密码

---

## ✅ 检查清单

- [ ] Docker 已安装并运行
- [ ] 镜像加速已配置
- [ ] 使用 `node:20` 完整镜像（不是 alpine）
- [ ] 前端文件已上传到网站根目录
- [ ] 管理后台文件已上传到 `/admin/`
- [ ] 后端代码已上传到 `/backend/`
- [ ] 数据库文件 `dev.db` 已上传
- [ ] 已执行 `npm install --production`
- [ ] 已执行 `npx prisma generate`
- [ ] Docker 容器已启动（DATABASE_URL 使用绝对路径）
- [ ] Nginx 配置已修改（包含 /admin/assets 配置）
- [ ] SSL 证书已申请
- [ ] API 测试通过：`curl https://hao.uied.cn/api/health`

---

**完成后访问：**
- 前端：https://hao.uied.cn
- 管理后台：https://hao.uied.cn/admin
- API：https://hao.uied.cn/api/health
