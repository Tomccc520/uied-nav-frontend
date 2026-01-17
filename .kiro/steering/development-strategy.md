---
inclusion: always
---

# 渐进式开发策略

## 🎯 核心理念

**先发布开源版，边开发边预留商业化接口**

这种策略让你可以：
- ✅ 快速验证市场需求
- ✅ 建立用户基础和口碑
- ✅ 获得真实用户反馈
- ✅ 边开发边调整方向
- ✅ 降低初期开发压力

## 📅 三阶段策略

### Phase 1: 开源版发布（第 1-2 周）🔴 P0

**目标**：快速发布可用的开源版本

**核心功能**：
- ✅ 网站管理（增删改查）
- ✅ 分类管理（含子分类）
- ✅ 页面管理
- ✅ 批量导入/导出
- ✅ Favicon 自动获取
- ✅ 基础搜索
- ✅ 网址详情页（基础版）
- ✅ 安装向导
- ✅ 在线更新系统

**预留接口**：
```javascript
// 功能开关系统（预留）
const FEATURES = {
  free: ['basic_management', 'basic_search', 'basic_detail'],
  personal: ['...free', 'articles', 'comments', 'favorites'],
  enterprise: ['...personal', 'statistics', 'monitoring', 'api']
};

// 许可证检查中间件（预留，开源版直接返回 true）
function checkLicense(feature) {
  // 开源版：直接返回 true
  // Pro 版：检查许可证
  return true;
}
```

**发布渠道**：
- GitHub（主仓库）
- Gitee（国内镜像）
- 演示站点

---

### Phase 2: 商业化基础（第 2-3 周）🟡 P1

**目标**：搭建商业化基础设施，不影响开源版

**核心任务**：
- ✅ 许可证服务器（独立服务）
- ✅ 许可证验证中间件
- ✅ 功能开关系统
- ✅ 数据库架构扩展（License、Order 表）

**代码分支策略**：
```
main (开源版)
  ├── 所有基础功能
  └── MIT 协议

pro (商业版)
  ├── 基于 main 分支
  ├── 增加 Pro 功能
  ├── 许可证验证
  └── 不开源
```

**关键原则**：
- 开源版代码保持纯净
- Pro 功能通过插件式架构添加
- 不在开源版暴露商业化代码

---

### Phase 3: Pro 功能开发（第 4-12 周）🟢 P2

**目标**：逐步添加 Pro 功能，持续迭代

**个人版功能（¥699）**：
1. **🤖 AI 智能推荐**（第 4 周）⭐ 核心卖点
   - 基于用户浏览历史的个性化推荐
   - AI 分析用户兴趣标签
   - 每日 AI 精选内容推送
   - 使用 OpenAI API 或本地模型

2. **🤖 AI 搜索助手**（第 5 周）⭐ 核心卖点
   - 自然语言搜索理解
   - AI 智能匹配和排序
   - 搜索结果智能摘要
   - 对话式搜索体验

3. **🤖 AI 内容生成**（第 6 周）⭐ 核心卖点
   - AI 自动生成网站描述
   - AI 提取关键词和标签
   - AI 生成相关推荐理由
   - 批量 AI 处理

4. **网址详情页增强**（第 7 周）
   - 用户评论系统
   - 评分功能
   - 社交分享
   - AI 生成的相关推荐

5. **用户系统 + 智能收藏**（第 8 周）
   - 用户注册/登录
   - 智能收藏夹（AI 自动分类）
   - 浏览历史 + AI 分析
   - 个人主页

6. **文章/博客系统**（第 9 周）
   - 文章管理（增删改查）
   - Markdown 编辑器
   - AI 辅助写作建议
   - SEO 优化

**企业版功能（¥2999）**：
7. **🤖 AI 数据分析**（第 10 周）⭐ 企业级
   - AI 分析用户行为模式
   - AI 预测热门趋势
   - AI 生成数据洞察报告
   - 智能业务建议

8. **🤖 AI 内容审核**（第 11 周）⭐ 企业级
   - AI 自动审核用户提交
   - AI 检测垃圾内容
   - AI 质量评分
   - 智能推荐审核决策

9. **数据统计 + 监控**（第 12 周）
   - 访问统计和用户行为分析
   - 网站可用性监控
   - 性能监控和告警
   - 数据报表导出

10. **API 接口 + 多用户**（第 13 周）
    - RESTful API
    - API 文档
    - 角色权限管理
    - 团队协作功能

## 🔧 技术实现

### 功能开关系统

```javascript
// backend/src/config/features.js
/**
 * @file config/features.js
 * @description 功能开关配置
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

const FEATURES = {
  // 开源版功能
  free: [
    'website_management',
    'category_management',
    'page_management',
    'basic_search',
    'basic_detail',
    'import_export',
    'favicon_fetch',
  ],
  
  // 个人版功能
  personal: [
    'articles',           // 文章系统
    'comments',           // 评论功能
    'ratings',            // 评分功能
    'favorites',          // 收藏夹
    'history',            // 浏览历史
    'cloud_sync',         // 云同步
    'advanced_search',    // 高级搜索
    'no_ads',             // 去广告
  ],
  
  // 企业版功能
  enterprise: [
    'statistics',         // 数据统计
    'monitoring',         // 网站监控
    'advanced_seo',       // 高级 SEO
    'api_access',         // API 接口
    'multi_user',         // 多用户管理
  ]
};

// 检查功能权限
function hasFeature(license, feature) {
  if (!license || license.type === 'free') {
    return FEATURES.free.includes(feature);
  }
  
  const features = [
    ...FEATURES.free,
    ...FEATURES.personal,
    ...(license.type === 'enterprise' ? FEATURES.enterprise : [])
  ];
  
  return features.includes(feature);
}

module.exports = { FEATURES, hasFeature };
```

### 路由保护

```javascript
// backend/src/middleware/featureGuard.js
/**
 * @file middleware/featureGuard.js
 * @description 功能权限中间件
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

const { hasFeature } = require('../config/features');

function requireFeature(featureName) {
  return async (req, res, next) => {
    const license = req.license || { type: 'free' };
    
    if (!hasFeature(license, featureName)) {
      return res.status(403).json({
        success: false,
        message: `此功能需要 ${getRequiredVersion(featureName)} 版本`,
        feature: featureName,
        currentVersion: license.type
      });
    }
    
    next();
  };
}

function getRequiredVersion(feature) {
  const { FEATURES } = require('../config/features');
  
  if (FEATURES.enterprise.includes(feature)) return '企业版';
  if (FEATURES.personal.includes(feature)) return '个人版';
  return '开源版';
}

module.exports = { requireFeature };
```

### 前端功能控制

```typescript
// frontend/src/hooks/useLicense.ts
/**
 * @file hooks/useLicense.ts
 * @description 许可证状态管理
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import { useEffect, useState } from 'react';
import api from '../services/api';

interface License {
  type: 'free' | 'personal' | 'enterprise';
  features: string[];
  expiresAt?: string;
}

export const useLicense = () => {
  const [license, setLicense] = useState<License>({
    type: 'free',
    features: []
  });
  
  useEffect(() => {
    // 获取许可证信息
    api.get('/license/info')
      .then(res => setLicense(res.data))
      .catch(() => setLicense({ type: 'free', features: [] }));
  }, []);
  
  const hasFeature = (feature: string) => {
    return license.features.includes(feature);
  };
  
  const isPro = () => {
    return license.type === 'personal' || license.type === 'enterprise';
  };
  
  const isEnterprise = () => {
    return license.type === 'enterprise';
  };
  
  return { license, hasFeature, isPro, isEnterprise };
};
```

## 📦 版本分发策略

### 开源版（GitHub/Gitee）

```
uied-nav-free/
├── frontend/          # 完整源码
├── admin/             # 完整源码
├── backend/           # 完整源码
├── docs/              # 文档
├── LICENSE            # MIT 协议
└── README.md
```

### 个人版（付费下载）

```
uied-nav-personal-v1.0.0.zip
├── frontend/
│   └── build/         # 编译后的文件
├── admin/
│   └── dist/          # 编译后的文件
├── backend/
│   └── src/           # 源码（需要配置）
├── install.sh         # 安装脚本
└── README.md
```

### 企业版（完整源码授权）

```
uied-nav-enterprise-v1.0.0.zip
├── frontend/          # 完整源码
├── admin/             # 完整源码
├── backend/           # 完整源码
├── LICENSE            # 商业协议
└── README.md
```

## 🎯 关键里程碑

### 里程碑 1：开源版发布（第 2 周）
- [ ] 核心功能完成
- [ ] 文档完善
- [ ] GitHub 发布
- [ ] 演示站点上线
- **目标**：获得 100+ 安装量

### 里程碑 2：商业化基础（第 3 周）
- [ ] 许可证系统运行
- [ ] 功能开关正常工作
- [ ] 支付集成完成
- **目标**：可以开始销售

### 里程碑 3：个人版发布（第 8 周）
- [ ] 5 个核心 Pro 功能完成
- [ ] 销售网站上线
- [ ] 早鸟优惠活动
- **目标**：10+ 销售

### 里程碑 4：企业版发布（第 12 周）
- [ ] 所有功能完成
- [ ] 文档完善
- [ ] 案例展示
- **目标**：3+ 企业客户

## 💡 最佳实践

### 1. 保持开源版纯净
- 不在开源版暴露商业化代码
- 功能开关默认返回 true
- 许可证检查可选

### 2. 插件式架构
- Pro 功能独立模块
- 可插拔设计
- 最小化耦合

### 3. 向后兼容
- 数据库迁移向后兼容
- API 版本控制
- 配置文件兼容

### 4. 用户体验
- 免费用户不受干扰
- Pro 功能优雅降级
- 升级提示友好

### 5. 持续迭代
- 每周发布更新
- 收集用户反馈
- 快速响应问题

## 📊 成功指标

### 开源版（第 1-2 个月）
- GitHub Star: 500+
- 安装量: 1000+
- 社区用户: 500+

### 个人版（第 3-6 个月）
- 销售量: 50+
- 收入: ¥35,000+
- 续费率: 60%+

### 企业版（第 6-12 个月）
- 销售量: 10+
- 收入: ¥30,000+
- 客户满意度: 90%+

## 🚀 下一步行动

1. **立即开始**：完成开源版核心功能
2. **预留接口**：添加功能开关系统
3. **准备文档**：编写安装和使用文档
4. **发布开源版**：GitHub + 演示站点
5. **收集反馈**：建立用户社区
6. **开发 Pro 功能**：根据反馈调整优先级

---

**记住**：先做出来，再做完美。快速迭代，持续改进！
