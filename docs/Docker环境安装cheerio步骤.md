# Docker 环境安装 cheerio - 详细步骤

## 问题说明

你的服务器使用 Docker 部署，npm 命令在宿主机上不可用。需要在 Docker 容器内安装 cheerio。

## 🔧 解决方案

### 方法一：进入 Docker 容器安装（推荐）

```bash
# 1. 查看运行中的容器
docker ps

# 2. 找到后端容器名称（通常是 uied-api 或类似名称）
# 输出示例：
# CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS   PORTS   NAMES
# abc123def456   node:18   ...       ...       ...      ...     uied-api

# 3. 进入容器
docker exec -it uied-api /bin/sh
# 或者
docker exec -it uied-api /bin/bash

# 4. 在容器内安装 cheerio
cd /app
npm install cheerio

# 5. 验证安装
npm list cheerio

# 6. 退出容器
exit

# 7. 重启容器
docker restart uied-api
```

### 方法二：使用 docker exec 直接安装（更简单）

```bash
# 一条命令完成安装
docker exec -it uied-api npm install cheerio --prefix /app

# 重启容器
docker restart uied-api
```

### 方法三：修改 package.json 后重新构建（最彻底）

这个方法需要在本地修改 package.json，然后重新构建 Docker 镜像。

#### 步骤 1：修改本地 package.json

在本地的 `backend/package.json` 中添加 cheerio：

```json
{
  "dependencies": {
    // ... 其他依赖
    "cheerio": "^1.0.0"
  }
}
```

#### 步骤 2：上传到服务器

上传整个 backend 文件夹到服务器。

#### 步骤 3：重新构建 Docker 镜像

```bash
# 进入项目目录
cd /www/wwwroot/hao.uied.cn

# 停止并删除旧容器
docker-compose down

# 重新构建镜像
docker-compose build

# 启动容器
docker-compose up -d
```

---

## 📋 完整部署步骤（推荐流程）

### 第一步：上传文件

使用宝塔面板或 FTP 上传以下文件：

1. **后端文件**（3个）：
   ```
   backend/src/services/seoScraperService.js
   backend/src/routes/seoScraperRoutes.js
   backend/src/index.js
   ```

2. **管理后台**：
   ```
   admin/dist/（整个文件夹）
   ```

3. **前端**（可选）：
   ```
   frontend/build/（整个文件夹）
   ```

### 第二步：安装 cheerio

```bash
# SSH 连接到服务器后执行

# 方法 A：进入容器安装（推荐）
docker exec -it uied-api sh
cd /app
npm install cheerio
exit

# 方法 B：直接安装（更快）
docker exec -it uied-api npm install cheerio --prefix /app
```

### 第三步：重启容器

```bash
docker restart uied-api
```

### 第四步：验证部署

```bash
# 1. 检查容器状态
docker ps

# 2. 查看容器日志
docker logs uied-api --tail 50

# 3. 测试 API
curl http://localhost:3001/api/health

# 预期输出：
# {"status":"ok","message":"UIED API is running"}
```

### 第五步：测试 SEO 功能

1. 打开管理后台：https://hao.uied.cn/admin
2. 登录账号
3. 进入"网站管理"
4. 点击"添加网站"
5. 输入 URL：`https://dribbble.com`
6. 点击"SEO"按钮
7. 验证是否自动填充了标题、描述、标签

---

## 🚨 常见问题

### 问题1：找不到容器名称

**症状**：
```bash
docker ps
# 没有输出或找不到 uied-api
```

**解决**：
```bash
# 查看所有容器（包括停止的）
docker ps -a

# 查看 docker-compose 配置
cd /www/wwwroot/hao.uied.cn
cat docker-compose.yml

# 找到 services 下的服务名称
```

### 问题2：容器名称不是 uied-api

**解决**：
```bash
# 假设容器名称是 backend 或其他名称
docker exec -it backend npm install cheerio --prefix /app
docker restart backend
```

### 问题3：npm install 失败

**症状**：
```bash
npm ERR! network timeout
```

**解决**：
```bash
# 使用国内镜像
docker exec -it uied-api sh
npm config set registry https://registry.npmmirror.com
npm install cheerio
exit
```

### 问题4：权限问题

**症状**：
```bash
EACCES: permission denied
```

**解决**：
```bash
# 使用 root 用户进入容器
docker exec -it -u root uied-api sh
cd /app
npm install cheerio
exit
```

### 问题5：容器内找不到 /app 目录

**解决**：
```bash
# 先进入容器查看目录结构
docker exec -it uied-api sh
pwd
ls -la

# 找到 package.json 所在目录
find / -name "package.json" 2>/dev/null

# 进入正确的目录后安装
cd /正确的目录
npm install cheerio
```

---

## 🔍 调试命令

### 查看容器信息

```bash
# 查看容器详细信息
docker inspect uied-api

# 查看容器日志
docker logs uied-api

# 实时查看日志
docker logs -f uied-api

# 查看最近 100 行日志
docker logs uied-api --tail 100
```

### 检查 cheerio 是否安装成功

```bash
# 进入容器
docker exec -it uied-api sh

# 检查 package.json
cat package.json | grep cheerio

# 检查 node_modules
ls -la node_modules | grep cheerio

# 测试导入
node -e "const cheerio = require('cheerio'); console.log('cheerio installed');"
```

---

## 📝 宝塔面板操作（图形界面）

如果你使用宝塔面板，可以通过图形界面操作：

### 方法 1：使用宝塔 Docker 管理器

1. 打开宝塔面板
2. 进入"软件商店" > "已安装"
3. 找到"Docker 管理器"
4. 点击"容器列表"
5. 找到 `uied-api` 容器
6. 点击"终端"按钮
7. 在终端中执行：
   ```bash
   cd /app
   npm install cheerio
   ```
8. 关闭终端
9. 点击"重启"按钮

### 方法 2：使用宝塔终端

1. 打开宝塔面板
2. 点击左侧"终端"
3. 执行命令：
   ```bash
   docker exec -it uied-api npm install cheerio --prefix /app
   docker restart uied-api
   ```

---

## ✅ 验证清单

安装完成后，请验证以下内容：

- [ ] cheerio 已安装（`docker exec -it uied-api npm list cheerio`）
- [ ] 容器已重启（`docker ps` 显示容器正在运行）
- [ ] API 健康检查通过（`curl http://localhost:3001/api/health`）
- [ ] 后端日志无错误（`docker logs uied-api --tail 50`）
- [ ] SEO 抓取功能测试通过（管理后台测试）

---

## 🎯 快速命令（复制粘贴）

```bash
# 一键安装并重启（推荐）
docker exec -it uied-api npm install cheerio --prefix /app && docker restart uied-api

# 验证安装
docker exec -it uied-api npm list cheerio

# 查看日志
docker logs uied-api --tail 50

# 测试 API
curl http://localhost:3001/api/health
```

---

**安装完成！** 🎉

如果遇到问题，请提供以下信息：
1. `docker ps` 的输出
2. `docker logs uied-api --tail 50` 的输出
3. 具体的错误信息
