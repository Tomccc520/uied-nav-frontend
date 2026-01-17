# SEO 抓取功能部署检查清单

## 📋 部署前检查

### 1. 环境变量配置

在服务器的 `.env` 文件中确认以下配置：

```bash
# 生产环境标识（重要！）
NODE_ENV=production

# API 基础配置
PORT=3001
CORS_ORIGINS=https://hao.uied.cn,https://admin.hao.uied.cn

# JWT 密钥（必须设置）
JWT_SECRET=your-secret-key-here
```

### 2. 依赖包检查

确保 `cheerio` 已安装：

```bash
cd backend
npm install cheerio
```

### 3. 文件上传检查

需要上传的文件：
- ✅ `backend/src/services/seoScraperService.js`
- ✅ `backend/src/routes/seoScraperRoutes.js`
- ✅ `backend/src/index.js`（已修改）
- ✅ `admin/dist/`（管理后台构建文件）
- ✅ `frontend/build/`（前端构建文件，如需更新 Changelog）

### 4. 后端重启

```bash
# Docker 方式
docker restart uied-api

# PM2 方式
pm2 restart backend

# 或直接重启
cd backend && npm run dev
```

### 5. 前端部署

```bash
# 管理后台（必须）
# 上传 admin/dist/ 到服务器 /www/wwwroot/hao.uied.cn/admin/dist/

# 前端（可选，如果更新了 Changelog）
# 上传 frontend/build/ 到服务器 /www/wwwroot/hao.uied.cn/frontend/build/
```

---

## 🔒 安全配置（建议）

### 1. 添加速率限制

在 `backend/src/index.js` 中添加 SEO 抓取速率限制：

```javascript
// SEO 抓取接口速率限制
const seoScraperLimiter = rateLimit({
  windowMs: 60 * 1000, // 1分钟
  max: 30, // 每个IP每分钟最多30次
  message: { error: 'SEO抓取请求过于频繁，请稍后再试' },
});

app.use('/api/seo-scraper', authMiddleware, seoScraperLimiter, seoScraperRoutes);
```

### 2. 添加请求日志

在 `backend/src/services/seoScraperService.js` 中添加日志：

```javascript
export async function scrapeSeoInfo(url) {
  console.log(`[SEO抓取] 开始抓取: ${url}`);
  try {
    // ... 现有代码
    console.log(`[SEO抓取] 成功: ${url} - ${title}`);
    return { title, description, keywords };
  } catch (error) {
    console.error(`[SEO抓取] 失败: ${url} - ${error.message}`);
    // ... 现有代码
  }
}
```

### 3. 添加缓存（可选）

如果同一个 URL 被频繁抓取，可以添加缓存：

```javascript
// 简单的内存缓存
const seoCache = new Map();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24小时

export async function scrapeSeoInfo(url) {
  // 检查缓存
  const cached = seoCache.get(url);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    console.log(`[SEO抓取] 使用缓存: ${url}`);
    return cached.data;
  }
  
  // ... 抓取逻辑
  
  // 保存到缓存
  seoCache.set(url, {
    data: { title, description, keywords },
    timestamp: Date.now()
  });
  
  return { title, description, keywords };
}
```

---

## ✅ 生产环境测试

### 1. 测试 SEO 抓取功能

登录管理后台后：
1. 进入"网站管理"页面
2. 点击"添加网站"
3. 输入测试 URL（如：https://dribbble.com）
4. 点击"SEO"按钮
5. 验证标题、描述、标签是否正确填充

### 2. 测试不同类型的网站

- ✅ 英文网站（dribbble.com, figma.com）
- ✅ 中文网站（uisdc.com, zcool.com.cn）
- ✅ 无 SEO 信息的网站
- ✅ 慢速网站（测试超时处理）

### 3. 测试图标 URL 功能

1. 在添加网站时，找到"或输入图标URL"输入框
2. 输入图标 URL（如：https://example.com/icon.png）
3. 按回车或点击"确定"
4. 验证图标是否正确显示

---

## 🚨 常见问题排查

### 问题1：SEO 抓取返回空数据

**原因**：
- 目标网站没有 SEO meta 标签
- 网站使用 JavaScript 渲染（SPA）
- 网站屏蔽了爬虫

**解决**：
- 检查网站源代码是否有 meta 标签
- 使用浏览器"查看源代码"确认
- 如果是 SPA，考虑使用 Puppeteer（但会增加复杂度）

### 问题2：SSL 证书错误

**原因**：
- 生产环境 NODE_ENV 未设置为 production
- 目标网站证书确实有问题

**解决**：
```bash
# 检查环境变量
echo $NODE_ENV

# 如果未设置，在 .env 中添加
NODE_ENV=production
```

### 问题3：请求超时

**原因**：
- 目标网站响应慢
- 网络问题

**解决**：
- 当前超时设置为 10 秒，可以适当增加
- 在 `seoScraperService.js` 中修改 `timeout: 15000`

### 问题4：中文乱码

**原因**：
- 网站编码不是 UTF-8

**解决**：
- cheerio 会自动处理大部分编码
- 如果仍有问题，可以使用 `iconv-lite` 转换编码

---

## 📊 监控建议

### 1. 添加操作日志

在 `backend/src/routes/seoScraperRoutes.js` 中：

```javascript
router.post('/fetch', async (req, res) => {
  try {
    const { url } = req.body;
    const adminId = req.admin.id; // 从认证中间件获取
    
    // 记录操作日志
    await prisma.operationLog.create({
      data: {
        adminId,
        action: 'SEO_SCRAPE',
        target: url,
        details: `抓取 SEO 信息: ${url}`,
      }
    });
    
    const seoInfo = await scrapeSeoInfo(url);
    res.json({ success: true, data: seoInfo });
  } catch (error) {
    // ...
  }
});
```

### 2. 监控抓取成功率

定期检查日志，统计：
- 总抓取次数
- 成功次数
- 失败次数
- 常见失败原因

---

## 🎯 性能优化建议

### 1. 并发控制

如果需要批量抓取，添加并发限制：

```javascript
import pLimit from 'p-limit';

const limit = pLimit(5); // 最多5个并发请求

const results = await Promise.all(
  urls.map(url => limit(() => scrapeSeoInfo(url)))
);
```

### 2. 超时优化

根据实际情况调整超时时间：
- 快速网站：5秒
- 一般网站：10秒（当前设置）
- 慢速网站：15秒

### 3. 重试机制

对于临时失败的请求，可以添加重试：

```javascript
async function scrapeSeoInfoWithRetry(url, retries = 2) {
  for (let i = 0; i <= retries; i++) {
    try {
      return await scrapeSeoInfo(url);
    } catch (error) {
      if (i === retries) throw error;
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
}
```

---

## ✅ 部署完成检查

- [ ] 后端依赖已安装（cheerio）
- [ ] 环境变量已配置（NODE_ENV=production）
- [ ] 后端服务已重启
- [ ] 管理后台已更新（admin/dist/）
- [ ] 前端已更新（frontend/build/，如需要）
- [ ] SEO 抓取功能测试通过
- [ ] 图标 URL 功能测试通过
- [ ] 中文网站测试通过
- [ ] 英文网站测试通过
- [ ] 速率限制已配置（可选）
- [ ] 操作日志已添加（可选）

---

**部署完成！** 🎉

现在你可以在生产环境中使用 SEO 抓取和图标 URL 功能了！
