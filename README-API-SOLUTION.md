# 解决WordPress API获取失败/被拉黑问题说明文档

## 问题说明

在`DesignArticleGrid.tsx`组件中，在获取WordPress API数据时频繁出现失败或被拉黑的情况。主要原因包括：

1. **频繁请求** - 每次切换子分类或组件重新渲染时都会请求API，导致短时间内多次请求
2. **请求头不完善** - 没有设置适当的`User-Agent`等请求头，容易被识别为爬虫
3. **没有错误重试机制** - 请求失败后没有合理的重试策略
4. **缓存机制不完善** - 只有内存缓存，页面刷新后缓存丢失

## 解决方案

我们采取了以下解决策略：

### 1. 优化API请求方式

修改了`wordpress-api.js`文件，添加了以下功能：

- **伪装浏览器请求头** - 添加随机User-Agent和其他浏览器请求头
- **请求频率限制** - 实现了请求限流，防止短时间内发送过多请求
- **随机延迟请求** - 每次请求添加随机延迟，使请求更像人类行为
- **重试机制** - 请求失败时自动重试，最多3次

### 2. 改进DesignArticleGrid组件

修改了`DesignArticleGrid.tsx`组件：

- **使用SessionStorage持久化缓存** - 页面刷新后缓存依然有效
- **添加备用数据策略** - API完全不可用时显示本地备用数据
- **避免重复请求** - 使用useRef防止多次渲染时重复请求
- **优化组件挂载/卸载逻辑** - 防止组件卸载后仍然更新状态
- **轮询更新** - 定时轮询更新数据，减少用户手动刷新
- **更友好的错误提示和重试按钮** - 用户可手动触发重试

### 3. 改进样式和交互

- 优化了文章排行标签样式，使用橙色渐变背景色
- 添加了重试按钮样式
- 加载中状态时禁用分类切换，防止用户频繁切换导致API请求过多

### 4. 提供代理服务器解决方案

创建了`proxy-server.js`文件，提供了一个Node.js代理服务器：

- 代理所有WordPress API请求
- 添加请求头伪装
- 实现请求限流
- 提供错误处理和重试
- 可部署在自己的服务器上，避免直接访问WordPress API

## 使用方法

### 方案一：使用优化后的客户端解决方案

直接使用优化后的代码，无需其他配置。这种方式依然直接请求WordPress API，但添加了许多保护措施减少被拉黑风险。

### 方案二：使用代理服务器（推荐）

1. 安装依赖：
   ```bash
   npm install express axios cors morgan express-rate-limit
   ```

2. 启动代理服务器：
   ```bash
   node proxy-server.js
   ```

3. 修改`src/services/wordpress-api.js`中的API基础URL：
   ```javascript
   const API_BASE_URL = 'http://localhost:3001/api';
   ```

4. 部署到生产环境时，使用PM2等工具管理代理服务器进程：
   ```bash
   npm install -g pm2
   pm2 start proxy-server.js --name "wp-api-proxy"
   ```

## 后续优化建议

1. **缓存服务器** - 考虑使用Redis等缓存服务器存储API响应
2. **使用CDN** - 对静态资源使用CDN分发
3. **预加载数据** - 构建时预获取部分数据，减少运行时API请求
4. **Serverless函数** - 考虑使用Serverless函数作为API代理
5. **完整的后端API** - 长期解决方案是自建完整后端API，减少对WordPress API的依赖

## 注意事项

1. 即使使用了这些优化措施，过于频繁的请求仍可能导致被拉黑
2. 定期监控API请求情况，及时调整策略
3. 代理服务器需要有足够的资源处理请求
4. 考虑使用Nginx等配置缓存和请求限制

## 故障排查

如果仍然遇到API获取问题：

1. 检查网络连接是否正常
2. 查看浏览器控制台是否有错误信息
3. 尝试清除浏览器缓存
4. 检查代理服务器日志
5. 暂时使用备用数据模式
6. 联系WordPress管理员解除IP限制（如适用）

---

如有任何问题，请联系技术团队。 