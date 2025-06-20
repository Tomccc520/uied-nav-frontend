/**
 * @file addMoreEcommerceTools.js
 * @description 为电商工具数据库中不足10个网站的分类添加更多工具
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

// 电商数据库文件路径
const ecommerceDbPath = path.join(__dirname, '../src/data/ecommerceToolsDatabase.js');

// 需要添加的电商工具数据
const newEcommerceTools = [
  // 电商展示类工具（需要添加7个）
  {
    id: 'ecommerce-ecomm-design',
    name: 'Ecomm Design',
    description: '电商设计灵感网站，收集优秀的电商网站设计案例',
    url: 'https://ecomm.design/',
    iconUrl: 'https://ecomm.design/favicon.ico',
    category: 'design-inspiration',
    subcategory: 'ecommerce-showcase',
    tags: ['电商设计', '设计灵感', '案例展示', '界面设计'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.7
  },
  {
    id: 'ecommerce-commerce-cream',
    name: 'Commerce Cream',
    description: '精选电商网站设计展示平台，提供高质量设计灵感',
    url: 'https://commercecream.com/',
    iconUrl: 'https://commercecream.com/favicon.ico',
    category: 'design-inspiration',
    subcategory: 'ecommerce-showcase',
    tags: ['电商案例', '设计展示', '用户体验', '视觉设计'],
    isHot: true,
    isFeatured: false,
    isNew: false,
    rating: 4.6
  },
  {
    id: 'ecommerce-store-inspiration',
    name: 'Store Inspiration',
    description: '电商店铺设计灵感库，展示全球优秀电商设计',
    url: 'https://store-inspiration.com/',
    iconUrl: 'https://store-inspiration.com/favicon.ico',
    category: 'design-inspiration',
    subcategory: 'ecommerce-showcase',
    tags: ['店铺设计', '电商灵感', '全球案例', '创意设计'],
    isHot: false,
    isFeatured: true,
    isNew: false,
    rating: 4.5
  },
  {
    id: 'ecommerce-shopify-gallery',
    name: 'Shopify Design Gallery',
    description: 'Shopify官方设计画廊，展示优秀Shopify店铺设计',
    url: 'https://www.shopify.com/partners/shopify-design-gallery',
    iconUrl: 'https://cdn.shopify.com/s/files/1/0070/7032/files/favicon.ico',
    category: 'design-inspiration',
    subcategory: 'ecommerce-showcase',
    tags: ['Shopify', '官方展示', '优秀案例', '专业设计'],
    isHot: true,
    isFeatured: false,
    isNew: false,
    rating: 4.8
  },
  {
    id: 'ecommerce-awesome-web',
    name: 'Awesome Web Design',
    description: '收集全球最佳电商网站设计的展示平台',
    url: 'https://www.awesomewebdesign.com/ecommerce',
    iconUrl: 'https://www.awesomewebdesign.com/favicon.ico',
    category: 'design-inspiration',
    subcategory: 'ecommerce-showcase',
    tags: ['网站设计', '最佳实践', '全球案例', '设计趋势'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.4
  },
  {
    id: 'ecommerce-siteinspire',
    name: 'SiteInspire',
    description: '网站设计灵感平台，包含大量电商网站案例',
    url: 'https://www.siteinspire.com/',
    iconUrl: 'https://www.siteinspire.com/favicon.ico',
    category: 'design-inspiration',
    subcategory: 'ecommerce-showcase',
    tags: ['网站灵感', '设计案例', '电商网站', '创意展示'],
    isHot: false,
    isFeatured: true,
    isNew: false,
    rating: 4.6
  },
  {
    id: 'ecommerce-httpster',
    name: 'Httpster',
    description: '完全响应式网站展示平台，包含电商设计案例',
    url: 'https://httpster.net/',
    iconUrl: 'https://httpster.net/favicon.ico',
    category: 'design-inspiration',
    subcategory: 'ecommerce-showcase',
    tags: ['响应式设计', '网站展示', '移动端', '用户界面'],
    isHot: false,
    isFeatured: false,
    isNew: false,
    rating: 4.3
  },

  // 店铺建设类工具（需要添加7个）
  {
    id: 'ecommerce-wix',
    name: 'Wix',
    description: '拖拽式网站建设平台，提供电商模板和功能',
    url: 'https://www.wix.com/',
    iconUrl: 'https://static.wixstatic.com/media/favicon.ico',
    category: 'store-design',
    subcategory: 'store-builder',
    tags: ['网站建设', '拖拽设计', '电商模板', '易用性'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.5
  },
  {
    id: 'ecommerce-squarespace',
    name: 'Squarespace',
    description: '专业网站建设平台，提供精美的电商设计模板',
    url: 'https://www.squarespace.com/',
    iconUrl: 'https://static1.squarespace.com/static/ta/5134cbefe4b0c6fb04df8065/10515/assets/logos/favicon.ico',
    category: 'store-design',
    subcategory: 'store-builder',
    tags: ['专业建站', '精美模板', '设计优先', '全功能'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.6
  },
  {
    id: 'ecommerce-bigcommerce',
    name: 'BigCommerce',
    description: '企业级电商平台，提供完整的在线商店解决方案',
    url: 'https://www.bigcommerce.com/',
    iconUrl: 'https://www.bigcommerce.com/favicon.ico',
    category: 'store-design',
    subcategory: 'store-builder',
    tags: ['企业级', '完整解决方案', '可扩展', '专业功能'],
    isHot: true,
    isFeatured: false,
    isNew: false,
    rating: 4.7
  },
  {
    id: 'ecommerce-weebly',
    name: 'Weebly',
    description: 'Square旗下网站建设平台，支持电商功能',
    url: 'https://www.weebly.com/',
    iconUrl: 'https://www.weebly.com/favicon.ico',
    category: 'store-design',
    subcategory: 'store-builder',
    tags: ['Square生态', '简单易用', '集成支付', '移动友好'],
    isHot: false,
    isFeatured: true,
    isNew: false,
    rating: 4.3
  },
  {
    id: 'ecommerce-prestashop',
    name: 'PrestaShop',
    description: '开源电商平台，提供灵活的店铺建设解决方案',
    url: 'https://www.prestashop.com/',
    iconUrl: 'https://www.prestashop.com/favicon.ico',
    category: 'store-design',
    subcategory: 'store-builder',
    tags: ['开源平台', '灵活定制', '多语言', '社区支持'],
    isHot: false,
    isFeatured: false,
    isNew: false,
    rating: 4.4
  },
  {
    id: 'ecommerce-ecwid',
    name: 'Ecwid',
    description: '轻量级电商解决方案，可嵌入任何网站',
    url: 'https://www.ecwid.com/',
    iconUrl: 'https://www.ecwid.com/favicon.ico',
    category: 'store-design',
    subcategory: 'store-builder',
    tags: ['轻量级', '嵌入式', '多平台', '云端管理'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.2
  },
  {
    id: 'ecommerce-volusion',
    name: 'Volusion',
    description: '一体化电商平台，提供完整的在线销售工具',
    url: 'https://www.volusion.com/',
    iconUrl: 'https://www.volusion.com/favicon.ico',
    category: 'store-design',
    subcategory: 'store-builder',
    tags: ['一体化', '销售工具', '库存管理', '营销功能'],
    isHot: false,
    isFeatured: false,
    isNew: false,
    rating: 4.1
  }
];

function addMoreTools() {
  try {
    console.log('🔧 开始为电商工具数据库添加更多工具...');
    
    // 读取电商数据库文件
    const ecommerceContent = fs.readFileSync(ecommerceDbPath, 'utf8');
    
    // 查找最后一个工具的结束位置
    const lastToolPattern = /rating:\s*[0-9.]+\s*\n\s*}\s*,?\s*$/gm;
    const matches = [...ecommerceContent.matchAll(lastToolPattern)];
    
    if (matches.length === 0) {
      throw new Error('找不到最后一个工具的结束位置');
    }
    
    const lastMatch = matches[matches.length - 1];
    const insertPosition = lastMatch.index + lastMatch[0].length;
    
    // 构建新工具的字符串
    let newToolsString = '';
    newEcommerceTools.forEach((tool, index) => {
      if (index === 0) {
        newToolsString += ',\n';
      }
      newToolsString += '  {\n';
      newToolsString += `    id: '${tool.id}',\n`;
      newToolsString += `    name: '${tool.name}',\n`;
      newToolsString += `    description: '${tool.description}',\n`;
      newToolsString += `    url: '${tool.url}',\n`;
      newToolsString += `    iconUrl: '${tool.iconUrl}',\n`;
      newToolsString += `    category: '${tool.category}',\n`;
      newToolsString += `    subcategory: '${tool.subcategory}',\n`;
      newToolsString += `    tags: ${JSON.stringify(tool.tags)},\n`;
      newToolsString += `    isHot: ${tool.isHot},\n`;
      newToolsString += `    isFeatured: ${tool.isFeatured},\n`;
      newToolsString += `    isNew: ${tool.isNew},\n`;
      newToolsString += `    rating: ${tool.rating}\n`;
      newToolsString += '  }';
      
      if (index < newEcommerceTools.length - 1) {
        newToolsString += ',\n';
      }
    });
    
    // 插入新工具
    const beforeInsert = ecommerceContent.substring(0, insertPosition);
    const afterInsert = ecommerceContent.substring(insertPosition);
    
    const newContent = beforeInsert + newToolsString + afterInsert;
    
    // 写入文件
    fs.writeFileSync(ecommerceDbPath, newContent, 'utf8');
    
    console.log(`✅ 成功添加 ${newEcommerceTools.length} 个新的电商工具！`);
    console.log('\n📊 添加的工具分布：');
    
    // 统计添加的工具分类
    const categoryCount = {};
    newEcommerceTools.forEach(tool => {
      const key = `${tool.subcategory}`;
      if (!categoryCount[key]) {
        categoryCount[key] = 0;
      }
      categoryCount[key]++;
    });
    
    Object.entries(categoryCount).forEach(([category, count]) => {
      const categoryNames = {
        'ecommerce-showcase': '电商展示',
        'store-builder': '店铺建设'
      };
      console.log(`- ${categoryNames[category] || category}: ${count} 个工具`);
    });
    
  } catch (error) {
    console.error('❌ 添加工具失败:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// 运行脚本
addMoreTools(); 