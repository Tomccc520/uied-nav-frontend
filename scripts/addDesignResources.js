/**
 * @file addDesignResources.js
 * @description 手动添加精选设计素材工具到电商数据库
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

// 电商数据库文件路径
const ecommerceDbPath = path.join(__dirname, '../src/data/ecommerceToolsDatabase.js');

// 精选的设计素材工具数据
const designResourceTools = [
  // 图标素材
  {
    id: 'iconfont-alibaba',
    name: 'Iconfont 阿里巴巴矢量图标库',
    description: '阿里巴巴矢量图标库，国内最大的图标和插画资源平台，提供海量素材',
    url: 'https://www.iconfont.cn/',
    iconUrl: 'https://www.iconfont.cn/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-icons',
    tags: ['图标', '阿里巴巴', '矢量', '中文', '插画'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.9
  },
  {
    id: 'flaticon-global',
    name: 'Flaticon',
    description: '超过63万个免费矢量图标，支持SVG、PSD、PNG、EPS格式和图标字体',
    url: 'https://www.flaticon.com/',
    iconUrl: 'https://www.flaticon.com/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-icons',
    tags: ['图标', '矢量', '免费', 'SVG', 'PSD'],
    isHot: true,
    isFeatured: false,
    isNew: false,
    rating: 4.8
  },
  
  // 图片素材
  {
    id: 'unsplash-photos',
    name: 'Unsplash',
    description: '高质量免费图片素材库，涵盖自然、旅行、建筑、人物等多种类型，支持中文搜索，可商用',
    url: 'https://unsplash.com/',
    iconUrl: 'https://unsplash.com/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-images',
    tags: ['图片', '高质量', '免费', '商用', '摄影'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.9
  },
  {
    id: 'pexels-photos',
    name: 'Pexels',
    description: '高质量免费可商用图片素材库，无需注册即可下载，提供多种分辨率选择',
    url: 'https://www.pexels.com/',
    iconUrl: 'https://www.pexels.com/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-images',
    tags: ['图片', '免费', '商用', '摄影', '高清'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.8
  },
  
  // 插画素材
  {
    id: 'undraw-illustrations',
    name: 'unDraw',
    description: '免费商用的扁平风格插画图库，支持在线更改配色，可下载SVG和PNG格式',
    url: 'https://undraw.co/',
    iconUrl: 'https://undraw.co/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '扁平', 'SVG', '配色', '免费'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.9
  },
  
  // 字体素材
  {
    id: 'google-fonts',
    name: 'Google Fonts',
    description: '通过出色的排版使网页更美观、更快速、更开放',
    url: 'https://fonts.google.com/',
    iconUrl: 'https://fonts.google.com/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '网页', '开源', '免费', 'Google'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.9
  },
  {
    id: 'alibaba-puhuiti-font',
    name: '阿里巴巴普惠体',
    description: '阿里巴巴推出的永久免费商用字体，适合多种场景应用，字形简洁有辨识度',
    url: 'https://www.alibabafonts.com/#/home',
    iconUrl: 'https://www.alibabafonts.com/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '中文', '免费', '商用', '阿里巴巴'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.9
  },
  
  // 样机素材
  {
    id: 'mockup-world',
    name: 'Mockup World',
    description: '全面的样机资源网站，从基础样机到包装、杂志、服装、室外摆拍等种类丰富，大部分免费可商用',
    url: 'https://www.mockupworld.co/',
    iconUrl: 'https://www.mockupworld.co/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '多类型', '免费', '商用', 'PSD'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.9
  },
  
  // 3D素材
  {
    id: 'duiyou-3d',
    name: '堆友',
    description: '阿里巴巴设计团队打造的设计师服务平台，提供海量高品质3D素材、实时在线渲染和多元场景功能应用',
    url: 'https://d.design/',
    iconUrl: 'https://d.design/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-3d',
    tags: ['3D', '素材', '阿里巴巴', '在线', '免费商用'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.9
  },
  
  // 视频素材
  {
    id: 'pexels-videos',
    name: 'Pexels Videos',
    description: '高质量免费可商用视频素材库，无需注册即可下载，提供多种分辨率选择',
    url: 'https://www.pexels.com/videos/',
    iconUrl: 'https://www.pexels.com/favicon.ico',
    category: 'ecommerce-materials',
    subcategory: 'design-resources-video',
    tags: ['视频', '高清', '免费', '商用', '多分辨率'],
    isHot: true,
    isFeatured: true,
    isNew: false,
    rating: 4.9
  }
];

function addDesignResourcesTools() {
  try {
    // 读取电商数据库文件
    const content = fs.readFileSync(ecommerceDbPath, 'utf8');
    
    // 找到数组结束位置（最后一个工具的 } 后面）
    const lastToolEndIndex = content.lastIndexOf('    rating: 4.6\n  }');
    
    if (lastToolEndIndex === -1) {
      throw new Error('找不到最后一个工具的结束位置');
    }
    
    // 分割内容
    const beforeLastTool = content.substring(0, lastToolEndIndex + '    rating: 4.6\n  }'.length);
    const afterLastTool = content.substring(lastToolEndIndex + '    rating: 4.6\n  }'.length);
    
    // 构建新工具的字符串
    let newToolsString = '';
    designResourceTools.forEach((tool, index) => {
      newToolsString += ',\n  {\n';
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
    });
    
    // 重新组合内容
    const newContent = beforeLastTool + newToolsString + afterLastTool;
    
    // 写入文件
    fs.writeFileSync(ecommerceDbPath, newContent, 'utf8');
    
    console.log(`✅ 成功添加 ${designResourceTools.length} 个设计素材工具到电商数据库！`);
    console.log('\n📊 添加的工具：');
    designResourceTools.forEach((tool, index) => {
      console.log(`${index + 1}. ${tool.name} (${tool.subcategory})`);
    });
    
  } catch (error) {
    console.error('❌ 添加设计素材工具失败:', error.message);
    process.exit(1);
  }
}

// 运行脚本
addDesignResourcesTools(); 