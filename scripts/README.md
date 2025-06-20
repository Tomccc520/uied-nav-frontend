# 数据转换脚本使用说明

## JSON to JavaScript 转换脚本

这个脚本用于将88设计网等网站导出的JSON格式导航数据转换为符合UIED项目标准的JavaScript对象格式。

### 📁 文件位置
- 脚本文件：`scripts/convertJsonToJs.js`
- 这个位置确保脚本**不会被前端打包工具包含**

### 🚀 使用方法

#### 方法1：使用 npm scripts (推荐)
```bash
# 显示帮助信息
npm run convert:help

# 转换单个文件
npm run convert-json <输入JSON文件> <输出JS文件>

# 示例
npm run convert-json src/data/demo.json src/data/demo_converted.js
```

#### 方法2：直接使用 Node.js
```bash
# 转换单个文件
node scripts/convertJsonToJs.js <输入JSON文件> <输出JS文件>

# 显示帮助
node scripts/convertJsonToJs.js --help

# 示例
node scripts/convertJsonToJs.js src/data/88sheji_navigation_2025-06-05.json src/data/ai_tools.js
```

#### 方法3：交互式转换
```bash
# 运行脚本，然后按提示操作
node scripts/convertJsonToJs.js
```

### 📋 输出格式

生成的JavaScript文件格式符合项目标准：

```javascript
export const aiTools = [
  {
    id: 'tool-001',
    name: '工具名称',
    description: '工具描述',
    url: 'https://example.com',
    category: 'ai-huihua',
    tags: ['ai', 'design', 'template'],
    isHot: false,
    isFeatured: false,
    isNew: false,
    pricing: 'freemium',
    rating: 4.2
  }
  // ... 更多工具
];

export default aiTools;
```

### 🔧 脚本功能

- ✅ **智能ID生成**：基于标题和URL自动生成唯一ID
- ✅ **名称提取**：智能提取工具真实名称
- ✅ **描述优化**：清理和改善描述文本
- ✅ **自动定价检测**：识别免费/付费/企业版等定价模式
- ✅ **评分生成**：基于功能特性生成合理评分
- ✅ **标签处理**：自动生成相关标签
- ✅ **分类映射**：自动分配到合适的分类

### 📊 转换统计

每次转换后会显示详细统计信息：
- 转换项目总数
- 分类分布
- 定价分布
- 特殊标记统计

### ⚠️ 注意事项

1. **文件安全**：脚本在 `scripts/` 目录下，不会被前端打包
2. **数据备份**：转换前建议备份原始JSON文件
3. **批量处理**：如需批量转换，可使用 `scripts/batch-convert.js`
4. **格式验证**：转换后建议检查生成的JavaScript文件语法

### 🛠️ 开发说明

如需修改转换逻辑，主要关注以下函数：
- `extractName()` - 名称提取逻辑
- `cleanDescription()` - 描述处理逻辑
- `detectPricing()` - 定价检测逻辑
- `generateTags()` - 标签生成逻辑 