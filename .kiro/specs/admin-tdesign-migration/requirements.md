# 需求文档：管理后台 TDesign 迁移

## 简介

本文档定义了将 UIED 设计导航项目的管理后台从 Ant Design 迁移到 TDesign React 的功能需求。此迁移旨在提供更现代的设计风格、更好的性能和更灵活的主题定制能力，同时保持所有现有功能和业务逻辑不变。

## 术语表

- **Admin**: 管理后台应用，基于 React 19 + TypeScript + Vite
- **TDesign**: 腾讯开源的企业级设计体系和 React 组件库
- **Ant_Design**: 当前使用的 UI 组件库（蚂蚁金服开源）
- **Layout_System**: 页面布局系统，包括侧边栏、顶部栏、内容区和页脚
- **Page_Template**: 可复用的页面模板组件（列表页、表单页、详情页）
- **Migration**: 迁移过程，指将组件从 Ant Design 替换为 TDesign
- **Advertisement_Slot**: 广告位，用于展示 fsuied.com 和作者官网链接
- **Core_Page**: 核心页面，包括网站管理、分类管理、站点设置等开源版必需页面

## 需求

### 需求 1：环境配置和依赖管理

**用户故事**：作为开发者，我希望正确配置 TDesign 开发环境，以便能够使用 TDesign 组件库进行开发。

#### 验收标准

1. WHEN 安装 TDesign 依赖时，THE System SHALL 安装 tdesign-react 和 tdesign-icons-react 包
2. WHEN 配置 Vite 时，THE System SHALL 支持 TDesign 组件的按需加载和样式导入
3. WHEN 设置全局样式时，THE System SHALL 导入 TDesign 的基础样式和主题变量
4. WHEN 卸载旧依赖时，THE System SHALL 完全移除 antd 和 @ant-design/icons 包
5. THE System SHALL 在 package.json 中记录所有 TDesign 相关依赖的版本信息

### 需求 2：布局系统迁移

**用户故事**：作为管理员，我希望使用基于 TDesign 的新布局系统，以便获得更现代的界面体验。

#### 验收标准

1. WHEN 创建主布局组件时，THE Layout_System SHALL 使用 TDesign 的 Layout 组件替代 Ant Design 的 Layout
2. WHEN 渲染侧边栏时，THE Layout_System SHALL 使用 TDesign Menu 组件并支持折叠/展开功能
3. WHEN 渲染顶部导航栏时，THE Layout_System SHALL 包含面包屑导航和用户下拉菜单
4. WHEN 渲染页脚时，THE Layout_System SHALL 保留 fsuied.com 链接和作者官网链接
5. WHEN 用户切换侧边栏状态时，THE Layout_System SHALL 保持状态并平滑过渡动画
6. THE Layout_System SHALL 保持与现有路由系统的完全兼容性

### 需求 3：页面模板组件创建

**用户故事**：作为开发者，我希望创建可复用的页面模板组件，以便减少重复代码并提高开发效率。

#### 验收标准

1. WHEN 创建列表页模板时，THE Page_Template SHALL 包含搜索表单、数据表格和分页组件
2. WHEN 创建表单页模板时，THE Page_Template SHALL 包含表单验证、提交处理和错误提示
3. WHEN 创建详情页模板时，THE Page_Template SHALL 包含数据展示和操作按钮区域
4. THE Page_Template SHALL 使用 TDesign 的 Table、Form、Input、Button 等组件
5. THE Page_Template SHALL 支持通过 props 自定义配置和扩展功能
6. THE Page_Template SHALL 包含统一的加载状态和错误处理

### 需求 4：核心页面迁移

**用户故事**：作为管理员，我希望核心管理页面迁移到 TDesign，以便使用新的 UI 组件进行日常管理操作。

#### 验收标准

1. WHEN 迁移网站管理页面时，THE Core_Page SHALL 保持所有现有功能（增删改查、批量操作、Favicon 获取）
2. WHEN 迁移分类管理页面时，THE Core_Page SHALL 保持树形结构展示和拖拽排序功能
3. WHEN 迁移站点设置页面时，THE Core_Page SHALL 保持所有配置项和保存功能
4. WHEN 迁移系统设置页面时，THE Core_Page SHALL 保持所有系统配置选项
5. WHEN 创建主题配置页面时，THE Core_Page SHALL 提供 TDesign 主题变量的可视化配置
6. THE Core_Page SHALL 使用新的页面模板组件以保持一致性
7. THE Core_Page SHALL 保持与现有 API 的完全兼容性

### 需求 5：次要页面迁移

**用户故事**：作为管理员，我希望所有管理页面都迁移到 TDesign，以便获得统一的用户体验。

#### 验收标准

1. WHEN 迁移页面管理时，THE System SHALL 保持所有页面配置功能
2. WHEN 迁移用户提交管理时，THE System SHALL 保持审核和处理功能
3. WHEN 迁移横幅管理时，THE System SHALL 保持图片上传和排序功能
4. WHEN 迁移用户管理时，THE System SHALL 保持用户增删改查功能
5. WHEN 迁移热门推荐管理时，THE System SHALL 保持推荐配置功能
6. WHEN 迁移社交媒体组管理时，THE System SHALL 保持分组和链接管理功能
7. WHEN 迁移数据导出页面时，THE System SHALL 保持导出功能
8. WHEN 迁移 SEO 设置页面时，THE System SHALL 保持 SEO 配置功能
9. WHEN 迁移监控页面时，THE System SHALL 保持监控和告警功能
10. WHEN 迁移操作日志页面时，THE System SHALL 保持日志查询和展示功能
11. WHEN 迁移统计页面时，THE System SHALL 保持数据统计和图表展示功能
12. WHEN 迁移 WordPress 设置页面时，THE System SHALL 保持 WordPress 集成配置功能

### 需求 6：广告位保留和展示

**用户故事**：作为项目所有者，我希望在新界面中保留所有广告位，以便维持开源版本的变现渠道。

#### 验收标准

1. THE Advertisement_Slot SHALL 在页脚显示 fsuied.com 链接
2. THE Advertisement_Slot SHALL 在页脚显示作者官网链接
3. THE Advertisement_Slot SHALL 在页脚显示版权信息 "版权所有 (c) 2026 UIED技术团队"
4. WHERE 侧边栏底部广告卡片存在，THE Advertisement_Slot SHALL 保持其展示位置和样式
5. WHERE 登录页左侧宣传区域存在，THE Advertisement_Slot SHALL 保持其展示内容
6. THE Advertisement_Slot SHALL 使用 TDesign 组件进行样式美化
7. THE Advertisement_Slot SHALL 确保所有链接可点击并在新标签页打开

### 需求 7：样式和主题定制

**用户故事**：作为开发者，我希望配置 TDesign 主题，以便匹配项目的品牌风格。

#### 验收标准

1. WHEN 配置主题变量时，THE System SHALL 支持自定义主色调、辅助色和中性色
2. WHEN 配置组件样式时，THE System SHALL 支持覆盖 TDesign 默认样式
3. WHEN 应用暗色模式时，THE System SHALL 支持主题切换功能
4. THE System SHALL 提供主题配置页面供管理员可视化调整主题
5. THE System SHALL 将主题配置持久化存储到数据库或本地存储

### 需求 8：代码清理和优化

**用户故事**：作为开发者，我希望清理所有 Ant Design 相关代码，以便减少项目体积和维护成本。

#### 验收标准

1. WHEN 删除组件引用时，THE System SHALL 移除所有 Ant Design 组件的 import 语句
2. WHEN 卸载依赖时，THE System SHALL 从 package.json 中移除 antd 和 @ant-design/icons
3. WHEN 清理样式文件时，THE System SHALL 删除所有 Ant Design 相关的 CSS 导入
4. WHEN 清理配置文件时，THE System SHALL 移除 Vite 配置中的 Ant Design 相关配置
5. THE System SHALL 确保清理后项目可以正常构建和运行
6. THE System SHALL 在清理前创建备份分支以防回滚需要

### 需求 9：文件头注释和版权声明

**用户故事**：作为项目维护者，我希望所有新创建的文件都包含版权声明，以便保护知识产权。

#### 验收标准

1. WHEN 创建新的 TypeScript/JavaScript 文件时，THE System SHALL 添加标准文件头注释
2. WHEN 创建新的 CSS 文件时，THE System SHALL 添加标准文件头注释
3. THE System SHALL 在文件头注释中包含 @file、@description、@author、@copyright、@website、@license 和 @version 字段
4. THE System SHALL 使用 "Tomda" 作为作者名
5. THE System SHALL 使用 "版权所有 (c) 2026 UIED技术团队" 作为版权声明
6. THE System SHALL 使用 "https://fsuied.com" 作为网站地址
7. THE System SHALL 使用 "MIT" 作为许可证类型

### 需求 10：渐进式迁移和兼容性

**用户故事**：作为开发者，我希望采用渐进式迁移策略，以便在迁移过程中保持系统稳定运行。

#### 验收标准

1. WHEN 开始迁移时，THE Migration SHALL 优先迁移核心页面（网站管理、分类管理）
2. WHEN 迁移单个页面时，THE Migration SHALL 确保该页面功能完整可用后再迁移下一个
3. WHEN 迁移过程中发现问题时，THE Migration SHALL 支持快速回滚到 Ant Design 版本
4. THE Migration SHALL 保持所有 API 调用和数据结构不变
5. THE Migration SHALL 保持所有业务逻辑和状态管理不变
6. THE Migration SHALL 在每个迁移阶段进行功能测试和验证

### 需求 11：图标系统迁移

**用户故事**：作为开发者，我希望将图标系统迁移到 TDesign Icons，以便保持图标风格的一致性。

#### 验收标准

1. WHEN 迁移图标时，THE System SHALL 使用 tdesign-icons-react 替代 @ant-design/icons
2. WHEN 找不到对应图标时，THE System SHALL 选择语义相近的 TDesign 图标
3. WHEN 更新图标配置时，THE System SHALL 更新 admin/src/config/icons.tsx 文件
4. THE System SHALL 保持所有图标的语义和功能不变
5. THE System SHALL 确保图标在不同尺寸下显示正常

### 需求 12：响应式布局支持

**用户故事**：作为管理员，我希望管理后台支持响应式布局，以便在不同设备上使用。

#### 验收标准

1. WHEN 在移动设备上访问时，THE Layout_System SHALL 自动折叠侧边栏
2. WHEN 在平板设备上访问时，THE Layout_System SHALL 调整布局以适应屏幕宽度
3. WHEN 在桌面设备上访问时，THE Layout_System SHALL 展示完整的侧边栏和内容区
4. THE Layout_System SHALL 使用 TDesign 的响应式工具类和断点系统
5. THE Layout_System SHALL 确保所有交互元素在触摸设备上可用

### 需求 13：性能优化

**用户故事**：作为用户，我希望管理后台加载速度快，以便提高工作效率。

#### 验收标准

1. WHEN 加载组件时，THE System SHALL 使用按需加载减少初始包体积
2. WHEN 渲染大型列表时，THE System SHALL 使用虚拟滚动优化性能
3. WHEN 切换页面时，THE System SHALL 使用路由懒加载减少加载时间
4. THE System SHALL 使用 TDesign 的性能优化特性（如虚拟列表、懒加载等）
5. THE System SHALL 确保首屏加载时间不超过 3 秒（在正常网络条件下）

### 需求 14：可访问性支持

**用户故事**：作为有特殊需求的用户，我希望管理后台支持无障碍访问，以便我能够正常使用。

#### 验收标准

1. WHEN 使用键盘导航时，THE System SHALL 支持 Tab 键切换焦点
2. WHEN 使用屏幕阅读器时，THE System SHALL 提供正确的 ARIA 标签
3. THE System SHALL 确保所有交互元素有足够的对比度
4. THE System SHALL 确保所有表单元素有正确的标签关联
5. THE System SHALL 使用 TDesign 组件的内置可访问性特性
