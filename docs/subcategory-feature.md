# 热门推荐子分类功能

## 功能概述

为热门推荐组件增加了子分类功能，用户可以在主分类下切换不同的子分类，实现更精细化的内容筛选和展示。

## 功能特性

### 1. 子分类切换
- 在指定主分类下显示相关的子分类标签
- 支持点击切换不同子分类
- 每个子分类标签显示该分类下的工具数量
- 响应式设计，支持移动端横向滚动

### 2. 数据结构扩展
- 为每个热门推荐工具添加了 `subCategory` 字段
- 定义了完整的子分类体系 `hotRecommendationSubCategories`
- 提供了相关的数据查询和统计函数

### 3. 用户体验优化
- 子分类标签采用圆角设计，视觉效果现代化
- 活跃状态有明显的视觉反馈
- 支持鼠标悬停效果
- 移动端优化，触摸友好

## 子分类体系

### AI大模型 (ai-damoxing)
- **对话AI** (`ai-damoxing-chatbot`) - 智能对话和问答AI工具
- **多模态AI** (`ai-damoxing-multimodal`) - 支持文字、图像、语音等多种输入的AI
- **企业级AI** (`ai-damoxing-enterprise`) - 面向企业的大模型解决方案
- **开源模型** (`ai-damoxing-open`) - 开源的大语言模型

### AI办公工具 (ai-bangong)
- **文档处理** (`ai-bangong-document`) - PPT、Word等文档生成工具
- **表格工具** (`ai-bangong-excel`) - Excel处理和数据分析工具
- **会议工具** (`ai-bangong-meeting`) - 会议记录和智能助手
- **流程自动化** (`ai-bangong-workflow`) - 办公流程优化工具

### AI写作工具 (ai-xiezuo)
- **内容创作** (`ai-xiezuo-content`) - 文章、博客、营销文案生成
- **学术写作** (`ai-xiezuo-academic`) - 论文、报告等学术写作工具
- **创意写作** (`ai-xiezuo-creative`) - 小说、剧本等创意内容
- **文本优化** (`ai-xiezuo-correction`) - 语法检查和文本润色

### AI绘画工具 (ai-huihua)
- **人像绘画** (`ai-huihua-portrait`) - 头像、肖像画生成工具
- **风景绘画** (`ai-huihua-landscape`) - 风景、场景图像生成
- **动漫风格** (`ai-huihua-anime`) - 二次元、动漫风格图像
- **商业设计** (`ai-huihua-commercial`) - 电商、广告图像生成

### AI视频生成 (ai-shipin)
- **文生视频** (`ai-shipin-text2video`) - 从文本描述生成视频
- **视频剪辑** (`ai-shipin-editing`) - 智能视频编辑和处理
- **动画制作** (`ai-shipin-animation`) - AI动画和特效制作
- **短视频** (`ai-shipin-short`) - 短视频制作和优化

### AI开发工具 (ai-kaifa)
- **代码生成** (`ai-kaifa-code`) - 智能代码编写和补全
- **调试工具** (`ai-kaifa-debug`) - 代码调试和错误检测
- **智能体开发** (`ai-kaifa-agent`) - Agent和工作流开发
- **API工具** (`ai-kaifa-api`) - API开发和测试工具

### AI设计工具 (ai-sheji)
- **UI设计** (`ai-sheji-ui`) - 界面设计和原型工具
- **平面设计** (`ai-sheji-graphic`) - 海报、logo等平面设计
- **3D设计** (`ai-sheji-3d`) - 三维建模和渲染
- **设计素材** (`ai-sheji-material`) - 设计资源和素材库

### AI工具集合 (ai-gongju)
- **效率工具** (`ai-gongju-productivity`) - 提升工作效率的实用工具
- **格式转换** (`ai-gongju-converter`) - 文件格式转换工具
- **图像处理** (`ai-gongju-image`) - 图片编辑和处理工具
- **实用工具** (`ai-gongju-utility`) - 其他实用小工具

## 组件使用方法

### 基础用法（不使用子分类）
```tsx
<HotRecommendations 
  limit={12}
  title="热门推荐"
  showMoreButton={true}
  onSeeMore={() => navigate('/ai')}
/>
```

### 启用子分类功能
```tsx
<HotRecommendations 
  limit={12}
  title="AI大模型推荐"
  showMoreButton={true}
  onSeeMore={() => navigate('/ai')}
  categoryFilter="ai-damoxing"           // 指定主分类
  enableSubCategories={true}             // 启用子分类
  defaultSubCategory="ai-damoxing-chatbot" // 默认选中的子分类
/>
```

### 组件属性说明

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `limit` | `number` | `8` | 显示的工具数量 |
| `showTitle` | `boolean` | `true` | 是否显示标题 |
| `title` | `string` | `"热门推荐"` | 自定义标题 |
| `showMoreButton` | `boolean` | `false` | 是否显示查看更多按钮 |
| `onSeeMore` | `function` | - | 点击查看更多的回调 |
| `categoryFilter` | `string` | - | 指定分类ID，如果指定则只显示该分类的子分类 |
| `enableSubCategories` | `boolean` | `false` | 是否启用子分类切换功能 |
| `defaultSubCategory` | `string` | - | 默认选中的子分类 |

## 数据管理

### 新增的数据查询函数

```javascript
// 根据子分类获取热门推荐
getHotRecommendationsBySubCategory(subCategoryId, limit = 4)

// 获取指定分类的所有子分类
getSubCategoriesByCategory(categoryId)

// 获取分类下的所有子分类统计信息
getSubCategoryStats(categoryId)
```

### 数据结构示例

```javascript
// 热门推荐工具数据结构
{
  id: 'dangbei-ai',
  name: '当贝AI',
  description: '满血版DeepSeek R1 671B，免登录、极速、不卡顿！',
  url: 'https://ai.dangbei.com/',
  category: 'ai-damoxing',           // 主分类
  subCategory: 'ai-damoxing-chatbot', // 子分类
  tags: ['DeepSeek', '免登录', '大模型', 'R1'],
  rating: 4.6
}

// 子分类定义
{
  id: 'ai-damoxing-chatbot',
  name: '对话AI',
  description: '智能对话和问答AI工具'
}
```

## 样式定制

### CSS类名结构
```
.hot-recommendations
├── .hot-recommendations-header
├── .hot-recommendations-subcategories
│   └── .subcategory-tabs
│       └── .subcategory-tab
│           ├── .tab-name
│           └── .tab-count
├── .hot-recommendations-grid
└── .hot-recommendations-footer
```

### 主要样式变量
- `--primary-color`: 主色调
- `--primary-light`: 主色调浅色版本
- `--primary-dark`: 主色调深色版本
- `--border-color`: 边框颜色
- `--background-light`: 浅色背景

## 移动端适配

- 子分类标签支持横向滚动
- 针对小屏幕设备优化字体大小和间距
- 触摸友好的最小点击区域
- 适配深色模式

## 示例场景

### 场景1：首页展示AI大模型工具
在首页展示AI大模型相关工具，用户可以在"对话AI"、"多模态AI"、"企业级AI"、"开源模型"之间切换。

### 场景2：分类页面的细分展示
在具体的分类页面，可以进一步细分显示该分类下的子分类内容。

### 场景3：搜索结果优化
在搜索结果页面，可以根据搜索关键词智能匹配相关的子分类进行展示。

## 扩展性

### 添加新的子分类
1. 在 `hotRecommendationSubCategories` 中添加新的子分类定义
2. 为相关工具添加 `subCategory` 字段
3. 根据需要调整组件的使用配置

### 自定义样式
可以通过覆盖CSS变量或类名来自定义子分类标签的外观。

## 注意事项

1. **性能优化**: 使用了 `useMemo` 来缓存计算结果，避免不必要的重复计算
2. **数据一致性**: 确保 `subCategory` 字段与 `hotRecommendationSubCategories` 中的定义保持一致
3. **用户体验**: 子分类标签的数量建议控制在5个以内，避免界面过于拥挤
4. **响应式设计**: 在不同屏幕尺寸下都有良好的显示效果

这个子分类功能为用户提供了更精细化的内容浏览体验，同时保持了良好的可扩展性和维护性。 