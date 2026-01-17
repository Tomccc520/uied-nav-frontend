# Implementation Plan: Frontend API Integration

## Overview

本实现计划将剩余5个前端页面（3D、电商、室内、字体、平面设计）从静态数据源切换到后端API数据源。每个页面的修改模式相同，参考已完成的UIUX和AI页面实现。

## Tasks

- [x] 1. 3D页面API对接
  - [x] 1.1 添加API导航Hook和数据源切换逻辑
    - 导入useAPINavigation和APIDataService
    - 添加DATA_SOURCE环境变量读取
    - 创建静态数据服务实例作为后备
    - 使用useAPINavigation替代useNavigation
    - _Requirements: 1.1, 1.2, 1.3, 6.1, 6.2, 6.3_
  - [x] 1.2 修改子分类数据获取逻辑
    - 获取apiDataService实例
    - 修改getSubCategories调用优先使用API数据
    - 修改HotRecommendations组件的customDataSource
    - _Requirements: 1.5_
  - [x] 1.3 添加开发模式数据源标识
    - 在分类标题旁显示当前数据源
    - _Requirements: 6.4_

- [x] 2. 电商页面API对接
  - [x] 2.1 添加API导航Hook和数据源切换逻辑
    - 导入useAPINavigation和APIDataService
    - 添加DATA_SOURCE环境变量读取
    - 创建静态数据服务实例作为后备
    - 使用useAPINavigation替代useNavigation
    - _Requirements: 2.1, 2.2, 2.3, 6.1, 6.2, 6.3_
  - [x] 2.2 修改子分类数据获取逻辑
    - 获取apiDataService实例
    - 修改getSubCategories调用优先使用API数据
    - 修改HotRecommendations组件的customDataSource
    - _Requirements: 2.5_
  - [x] 2.3 添加开发模式数据源标识
    - 在分类标题旁显示当前数据源
    - _Requirements: 6.4_

- [x] 3. 室内页面API对接
  - [x] 3.1 添加API导航Hook和数据源切换逻辑
    - 导入useAPINavigation和APIDataService
    - 添加DATA_SOURCE环境变量读取
    - 创建静态数据服务实例作为后备
    - 使用useAPINavigation替代useNavigation
    - _Requirements: 3.1, 3.2, 3.3, 6.1, 6.2, 6.3_
  - [x] 3.2 修改子分类数据获取逻辑
    - 获取apiDataService实例
    - 修改getSubCategories调用优先使用API数据
    - 修改HotRecommendations组件的customDataSource
    - _Requirements: 3.5_
  - [x] 3.3 添加开发模式数据源标识
    - 在分类标题旁显示当前数据源
    - _Requirements: 6.4_

- [x] 4. 字体页面API对接
  - [x] 4.1 添加API导航Hook和数据源切换逻辑
    - 导入useAPINavigation和APIDataService
    - 添加DATA_SOURCE环境变量读取
    - 创建静态数据服务实例作为后备
    - 使用useAPINavigation替代useNavigation
    - _Requirements: 4.1, 4.2, 4.3, 6.1, 6.2, 6.3_
  - [x] 4.2 修改子分类数据获取逻辑
    - 获取apiDataService实例
    - 修改getSubCategories调用优先使用API数据
    - 修改HotRecommendations组件的customDataSource
    - _Requirements: 4.5_
  - [x] 4.3 添加开发模式数据源标识
    - 在分类标题旁显示当前数据源
    - _Requirements: 6.4_

- [x] 5. 平面设计页面API对接
  - [x] 5.1 添加API导航Hook和数据源切换逻辑
    - 导入useAPINavigation和APIDataService
    - 添加DATA_SOURCE环境变量读取
    - 创建静态数据服务实例作为后备
    - 使用useAPINavigation替代useNavigation
    - _Requirements: 5.1, 5.2, 5.3, 6.1, 6.2, 6.3_
  - [x] 5.2 修改子分类数据获取逻辑
    - 获取apiDataService实例
    - 修改getSubCategories调用优先使用API数据
    - 修改HotRecommendations组件的customDataSource
    - _Requirements: 5.5_
  - [x] 5.3 添加开发模式数据源标识
    - 在分类标题旁显示当前数据源
    - _Requirements: 6.4_

- [x] 6. Checkpoint - 前端页面对接完成
  - 确保所有5个页面都能正确加载API数据
  - 确保API失败时能正确回退到静态数据
  - 确保搜索功能正常工作
  - 确保子分类切换正常工作

- [ ] 7. 后端数据初始化验证
  - [ ] 7.1 验证页面配置数据
    - 检查数据库中是否有3d, ecommerce, interior, font, design页面配置
    - 如果缺失，运行seedPages脚本
    - _Requirements: 7.1_
  - [ ] 7.2 验证分类数据
    - 检查各页面是否有关联的分类数据
    - 如果缺失，运行数据导入脚本
    - _Requirements: 7.2, 7.4_
  - [ ] 7.3 验证网站数据
    - 检查各分类是否有关联的网站数据
    - 如果缺失，运行数据导入脚本
    - _Requirements: 7.3_

- [ ] 8. 更新文档
  - [ ] 8.1 更新前后端对接状态文档
    - 更新各页面的对接状态
    - 更新数据库统计信息
    - _Requirements: N/A_
  - [ ] 8.2 更新README文档
    - 添加数据源配置说明
    - 添加API对接说明
    - _Requirements: N/A_

- [ ] 9. Final Checkpoint - 全部完成
  - 确保所有页面API对接完成
  - 确保文档更新完成
  - 确保所有测试通过

## Notes

- 每个页面的修改模式相同，参考UIUX和AI页面的实现
- 修改时注意保持与现有代码风格一致
- 确保静态数据服务作为后备始终可用
- 开发模式下显示数据源标识有助于调试
