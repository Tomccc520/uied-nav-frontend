# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# 前端开发规则 (Frontend Development Rules)

基于项目对话总结的前端开发最佳实践规则：

## 🎨 设计规范

### 主题色彩
- **主色调**: `#0066ff` (蓝色)
- **辅助色**: 多色标签设计，6种半透明色彩
- **文字色**: `#333` (主要) / `#666` (次要) / `#999` (辅助)

### 字体规范
- **全局字体**: Lexend 优先，系统字体降级
- **字体大小**: 全部使用 rem 单位，响应式调整基准字体大小

### 布局原则
- **全屏设计**: Hero区域使用 `width: 100vw` 实现真正全屏
- **rem自适应**: 所有尺寸使用rem，根据屏幕大小调整基准
- **响应式断点**: 75rem (桌面) / 64rem (平板) / 48rem (手机)

## 🔧 技术规范

### CSS架构
- **CSS变量**: 使用 `:root` 定义主题变量，便于维护
- **无阴影设计**: 保持简洁，避免复杂阴影效果
- **简化交互**: 悬停效果使用 `transform: translateY()` 而非阴影

### 组件设计
- **原生优先**: 复杂需求时使用原生HTML而非UI库组件
- **多色标签**: 使用nth-child选择器实现多色设计
- **自适应网格**: 热门推荐使用4列自适应网格

### 搜索框设计
- **简洁布局**: 图标 + 输入框 + 按钮的内联布局
- **占位符**: 使用具体业务相关的提示文字
- **主题色**: 搜索按钮使用主题蓝色

## 📱 响应式设计

### 屏幕适配
```css
/* 桌面端 */
@media (min-width: 75rem) {
  html { font-size: 16px; }
}

/* 平板端 */
@media (max-width: 64rem) {
  html { font-size: 15px; }
}

/* 手机端 */
@media (max-width: 48rem) {
  html { font-size: 14px; }
}
```

### 布局调整
- **桌面**: 4列网格，侧边栏固定
- **平板**: 网格自适应，导航网格化
- **手机**: 单列布局，垂直堆叠

## 🎯 交互规范

### 悬停效果
- **卡片**: `translateY(-0.25rem)` + 边框色变化
- **按钮**: 背景色深化，无阴影
- **标签**: 轻微上移 + 透明度变化

### 动画时长
- **标准**: `transition: all 0.3s ease`
- **快速**: `transition: all 0.2s ease`

## 📝 代码规范

### 命名约定
- **CSS类名**: kebab-case (hero-banner, search-button)
- **CSS变量**: --primary-color, --text-secondary
- **组件名**: PascalCase

### 文件组织
- **页面样式**: 独立CSS文件，与组件同目录
- **全局样式**: 在页面CSS中定义，使用CSS变量
- **静态资源**: 放在src/assets目录

## 🚀 性能优化

### 资源管理
- **图片**: 放在src/assets，使用相对路径引用
- **字体**: CDN加载或本地引入
- **CSS**: 避免深层嵌套，优先使用类选择器

### 加载优化
- **懒加载**: 非关键资源延迟加载
- **代码分割**: 页面级别的代码分割
- **缓存策略**: 合理设置缓存头

---

*此规则基于实际项目对话总结，持续更新维护*

# UIED 设计资源导航网站

一个现代化的设计资源与AI工具导航平台，为设计师和开发者提供精选的工具和资源。

## ✨ 主要功能

### 🎨 设计工具导航
- **分类浏览**：UI工具、图标素材、配色方案、字体资源等多个分类
- **精选推荐**：热门、推荐、新增工具标记
- **智能搜索**：支持工具名称、描述、标签的多维度搜索
- **实时图标**：自动获取网站favicon，提升视觉体验

### 🤖 AI工具专区
- **AI分类**：文本AI、图像AI、代码AI、设计AI等专业分类
- **热门AI工具**：ChatGPT、Midjourney、Claude等最新AI应用
- **统一体验**：与设计导航保持一致的界面和交互

### 🔍 增强搜索功能
- **搜索建议**：实时显示匹配的工具、标签、分类建议
- **搜索历史**：本地保存搜索记录，支持快速重复搜索
- **高级筛选**：按分类、标签、热度等多维度筛选
- **智能排序**：支持相关性、名称、热度排序

### 🧭 导航切换
- **页面切换**：在设计导航和AI工具间快速切换
- **状态保持**：切换时保持搜索状态和位置
- **面包屑导航**：清晰的导航路径指示

## 🏗️ 技术架构

### 前端技术栈
- **React 18** + **TypeScript** - 现代化类型安全的前端开发
- **React Router 6** - 单页应用路由管理
- **自定义Hook** - 逻辑复用和状态管理
- **CSS Modules** - 组件化样式管理

### 代码架构优化
- **通用Hook**: `useNavigation` - 抽取页面间重复逻辑
- **数据服务层**: 统一的 `DataService` 接口
- **组件复用**: `ToolCard` 通用工具卡片组件
- **增强搜索**: `useEnhancedSearch` 提供高级搜索功能

### 性能优化
- **图标缓存**：智能favicon获取和缓存策略
- **懒加载**：按需加载组件和资源
- **防抖搜索**：避免频繁搜索请求
- **虚拟滚动**：优化大量数据渲染性能

## 📦 组件结构

```
src/
├── components/           # 通用组件
│   ├── UI/              # 基础UI组件
│   ├── CategorySidebar/ # 分类侧边栏
│   ├── HeroBanner/      # Hero横幅组件
│   └── ToolCard/        # 工具卡片组件
├── hooks/               # 自定义Hook
│   ├── useNavigation.ts # 通用导航Hook
│   └── useEnhancedSearch.ts # 增强搜索Hook
├── pages/               # 页面组件
│   ├── Home/           # 设计导航首页
│   ├── AI/             # AI工具页面
│   └── Search/         # 搜索结果页面
├── data/               # 数据层
│   └── websiteDatabase.ts # 网站数据库
└── utils/              # 工具函数
    └── faviconUtils.js # 图标获取工具
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm start
```

### 构建生产版本
```bash
npm run build
```

## 🔧 配置说明

### 搜索配置
```typescript
// 搜索功能配置
const searchConfig = {
  maxHistoryItems: 10,    // 最大历史记录数
  maxSuggestions: 8,      // 最大建议数
  debounceMs: 300         // 搜索防抖延迟
};
```

### 导航配置
```typescript
// 导航类型枚举
enum NavMenuType {
  DESIGN = 'design',      // 设计导航
  AI = 'ai'              // AI工具
}
```

## 🎯 最新更新

### v2.0.0 (2025-01-XX)
- ✅ **代码重构**: 使用通用Hook消除重复代码
- ✅ **搜索优化**: 新增搜索建议、历史记录、高级筛选
- ✅ **组件复用**: 统一的ToolCard组件
- ✅ **性能提升**: 优化图标加载和搜索性能
- ✅ **类型安全**: 完善的TypeScript类型定义

### v1.0.0 (2025-01-XX)
- ✅ 设计工具导航基础功能
- ✅ AI工具专区
- ✅ 导航切换功能
- ✅ 搜索结果页面跳转
- ✅ 响应式设计

## 📱 浏览器支持

- Chrome >= 88
- Firefox >= 85
- Safari >= 14
- Edge >= 88

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

---

**UIED技术团队** | [官网](https://fsuied.com) | [GitHub](https://github.com/uied)
