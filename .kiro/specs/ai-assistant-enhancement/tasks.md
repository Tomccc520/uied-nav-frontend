# Implementation Plan: AI Assistant Enhancement

## Overview

本实现计划将 AI 助手增强功能分解为可执行的编码任务，按照后端 API → 前端 Hook → 组件增强 → 样式优化的顺序实现。

## Tasks

- [x] 1. 后端流式 API 实现
  - [x] 1.1 添加 SSE 流式聊天端点
    - 在 `backend/src/routes/aiConfigRoutes.js` 添加 `/chat/stream` 端点
    - 设置 SSE 响应头 (`Content-Type: text/event-stream`)
    - 实现流式转发 AI 服务响应
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  - [ ]* 1.2 编写后端流式 API 属性测试
    - **Property 2: SSE 响应头正确性**
    - **Validates: Requirements 4.2**

- [x] 2. Checkpoint - 验证后端流式 API
  - 使用 curl 或 Postman 测试 SSE 端点
  - 确保流式响应正常工作

- [x] 3. 前端依赖安装和 Hook 实现
  - [x] 3.1 安装 @ant-design/x-markdown 依赖
    - 在 admin 目录执行 `npm install @ant-design/x-markdown`
    - _Requirements: 2.1, 2.2, 2.3, 2.5_
  - [x] 3.2 创建 useStreamChat Hook
    - 创建 `admin/src/hooks/useStreamChat.ts`
    - 实现 SSE 连接管理和消息状态管理
    - 支持取消流式传输
    - _Requirements: 1.1, 1.2, 1.4, 1.6_
  - [ ]* 3.3 编写流式内容累积属性测试
    - **Property 1: 流式内容累积正确性**
    - **Validates: Requirements 1.2, 4.3**

- [x] 4. AIAssistant 组件增强
  - [x] 4.1 重构 AIAssistant 组件支持流式输出
    - 集成 useStreamChat Hook
    - 添加流式状态显示（typing 指示器）
    - 支持 enableStreaming 属性
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 3.8_
  - [x] 4.2 集成 Markdown 渲染
    - 使用 @ant-design/x-markdown 的 Markdown 组件
    - 配置代码高亮和复制功能
    - _Requirements: 2.1, 2.5, 2.6_
  - [ ]* 4.3 编写 Markdown 渲染属性测试
    - **Property 3: Markdown 语法渲染完整性**
    - **Validates: Requirements 2.1, 2.5**

- [x] 5. Checkpoint - 验证流式输出和 Markdown 渲染
  - 测试流式对话功能
  - 验证代码块、列表等 Markdown 语法渲染

- [x] 6. 界面设计优化
  - [x] 6.1 添加头像和时间戳显示
    - 为用户和 AI 消息配置不同头像
    - 在消息下方显示格式化时间戳
    - _Requirements: 3.1, 3.2_
  - [ ]* 6.2 编写消息时间戳属性测试
    - **Property 4: 消息时间戳存在性**
    - **Validates: Requirements 3.2**
  - [x] 6.3 实现快捷提问功能
    - 添加欢迎界面和快捷提问按钮
    - 点击快捷提问自动发送
    - _Requirements: 3.4, 3.5_
  - [x] 6.4 优化输入组件
    - 配置 Sender 组件支持多行输入
    - 添加快捷键发送支持
    - _Requirements: 3.6_

- [x] 7. 主题适配和样式完善
  - [x] 7.1 实现主题适配
    - 支持浅色和深色主题
    - 使用 CSS 变量管理主题色
    - _Requirements: 3.7_
  - [x] 7.2 优化滚动和动画效果
    - 实现平滑滚动到最新消息
    - 添加消息出现动画
    - _Requirements: 3.3_

- [x] 8. Final Checkpoint - 完整功能验证
  - 确保所有测试通过
  - 验证流式输出、Markdown 渲染、界面优化功能
  - 测试错误处理和降级逻辑

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- 后端流式 API 需要先实现，前端才能进行集成测试
- @ant-design/x-markdown 需要单独安装，不包含在 @ant-design/x 中
- 流式输出依赖 AI 服务支持 stream 模式
