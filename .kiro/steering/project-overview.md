---
inclusion: always
---

# UIED 设计导航项目概览

这是一个现代化的设计资源导航网站系统，采用前后端分离架构。

## 🎯 商业模式

采用 **开源 + 商业** 的双轨制策略：

### 版本对比

| 版本 | 价格 | 特性 | 代码 |
|------|------|------|------|
| **开源版** | 免费 | 所有基础功能 | 完整源码（MIT） |
| **个人版** | ¥699 永久 | + 云同步 + 高级搜索 + 去广告 | 构建文件 |
| **企业版** | ¥2999 永久 | + 数据统计 + 网站监控 + 优先支持 | 完整源码授权 |

### 功能区分

**开源版（Free）**：
- ✅ 网站管理、分类管理、页面管理
- ✅ 批量导入/导出、Favicon 获取
- ✅ 基础搜索、SEO 设置
- ✅ 安装向导、在线更新
- ✅ 网址详情页（基础版）
- ❌ 无高级功能

**个人版（Personal - ¥699）**：
- ✅ 开源版所有功能
- 🤖 **AI 智能推荐**（核心卖点）
  - 基于浏览历史的个性化推荐
  - AI 分析用户兴趣，智能推送相关网站
  - 每日 AI 精选内容
- 🤖 **AI 搜索助手**（核心卖点）
  - 自然语言搜索（"帮我找设计灵感网站"）
  - AI 理解搜索意图，智能匹配结果
  - 搜索结果智能排序和摘要
- 🤖 **AI 内容生成**（核心卖点）
  - AI 自动生成网站描述
  - AI 提取网站关键词和标签
  - AI 生成相关文章推荐
- ✅ **文章/博客系统**
- ✅ **网址详情页增强**（评论、评分、分享）
- ✅ **用户收藏夹** + 智能分类
- ✅ **浏览历史** + AI 分析
- ✅ 去广告
- ✅ 1 个域名授权
- ✅ 1 年免费更新（之后 ¥199/年续费）

**企业版（Enterprise - ¥2999）**：
- ✅ 个人版所有功能
- 🤖 **AI 数据分析**（企业级）
  - AI 分析用户行为模式
  - AI 预测热门趋势
  - AI 生成数据洞察报告
- 🤖 **AI 内容审核**（企业级）
  - AI 自动审核用户提交
  - AI 检测垃圾内容和违规信息
  - AI 质量评分系统
- ✅ 数据统计分析
- ✅ 网站监控告警
- ✅ 高级 SEO 功能
- ✅ **API 接口**（新增）
- ✅ **多用户管理**（新增）
- ✅ 多端云同步
- ✅ 3 个域名授权
- ✅ 完整源码授权
- ✅ 终身免费更新
- ✅ 优先技术支持

### 实施路线

1. **Phase 1（1-2周）**：开源版准备和发布
2. **Phase 2（2-3周）**：许可证系统和商业化基础
3. **Phase 3（4-6周）**：Pro 功能开发
4. **Phase 4（7周）**：支付集成
5. **Phase 5（8-9周）**：销售网站
6. **Phase 6（10-12周）**：发布和推广

详见：`.kiro/specs/open-source-commercialization/`

## 📦 项目结构

这是一个包含三个主要部分的完整系统：

## 技术栈

### Backend (后端)
- **框架**: Express.js (ES Module)
- **数据库**: SQLite + Prisma ORM
- **认证**: JWT
- **测试**: Vitest + fast-check
- **端口**: 3001

### Frontend (前端用户界面)
- **框架**: React 19 + TypeScript
- **路由**: React Router v7
- **状态**: Zustand + React Query
- **样式**: 原生 CSS (非 Tailwind)
- **端口**: 3000

### Admin (管理后台)
- **框架**: React 19 + TypeScript + Vite
- **UI库**: Ant Design 6
- **图标**: @ant-design/icons + @untitled-ui/icons-react
- **端口**: 5173

## 项目结构

```
/backend          # Express API 服务
  /src
    /routes       # API 路由
    /services     # 业务逻辑
    /utils        # 工具函数
  /prisma         # 数据库 schema 和迁移

/frontend         # 用户前端
  /src
    /components   # 可复用组件
    /pages        # 页面组件
    /hooks        # 自定义 hooks
    /services     # API 调用服务
    /data         # 静态数据

/admin            # 管理后台
  /src
    /pages        # 管理页面
    /components   # 管理组件
    /config       # 配置文件
```

## 启动命令

```bash
# 后端
cd backend && npm run dev

# 前端
cd frontend && npm start

# 管理后台
cd admin && npm run dev
```

## API 基础路径

- 开发环境: `http://localhost:3001/api`
- 生产环境: 通过 `.env.production` 配置
