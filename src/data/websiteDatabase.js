/**
 * @file websiteDatabase.js
 * @description 设计网站数据库 - 包含所有分类和网址数据
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// 分类数据
export const categories = [
  { id: '1', name: 'AI工具', slug: 'ai-tools', icon: 'ai', color: '#667EEA' },
  { id: '2', name: 'UI设计', slug: 'ui-design', icon: 'ui', color: '#F093FB' },
  { id: '3', name: '平面设计', slug: 'graphic-design', icon: 'graphic', color: '#4FACFE' },
  { id: '4', name: '设计素材', slug: 'design-materials', icon: 'material', color: '#43E97B' },
  { id: '5', name: '配色工具', slug: 'color-tools', icon: 'color', color: '#FA709A' },
  { id: '6', name: '设计灵感', slug: 'design-inspiration', icon: 'inspiration', color: '#FFECD2' },
  { id: '7', name: '原型工具', slug: 'prototype-tools', icon: 'prototype', color: '#A8EDEA' },
  { id: '8', name: '图标字体', slug: 'icons-fonts', icon: 'font', color: '#D299C2' },
  { id: '9', name: '动画工具', slug: 'animation-tools', icon: 'animation', color: '#89F7FE' },
  { id: '10', name: '设计教程', slug: 'design-tutorials', icon: 'learn', color: '#FCB69F' },
  { id: '11', name: '图片素材', slug: 'image-resources', icon: 'photo', color: '#FF9A9E' },
  { id: '12', name: '设计工具', slug: 'design-tools', icon: 'kit', color: '#A8E6CF' },
  { id: '13', name: '前端开发', slug: 'frontend-dev', icon: 'developer', color: '#FFD93D' },
  { id: '14', name: '设计规范', slug: 'design-specs', icon: 'specs', color: '#6BCF7F' },
  { id: '15', name: '设计社区', slug: 'design-community', icon: 'community', color: '#4D79A4' }
];

// AI工具类网站
export const aiTools = [
  {
    id: 'ai_001',
    name: 'ChatGPT',
    description: 'OpenAI开发的大型语言模型，支持对话和文本生成',
    url: 'https://chat.openai.com',
    category: '1',
    isNew: false,
    isFeatured: true,
    isHot: true,
    tags: ['AI对话', '文本生成', 'OpenAI']
  },
  {
    id: 'ai_002',
    name: 'Midjourney',
    description: '基于AI的图像生成工具，创造惊人的艺术作品',
    url: 'https://www.midjourney.com',
    category: '1',
    isNew: false,
    isFeatured: true,
    isHot: true,
    tags: ['AI绘画', '图像生成', '艺术创作']
  },
  {
    id: 'ai_003',
    name: 'Stable Diffusion',
    description: '开源的AI图像生成模型，免费且功能强大',
    url: 'https://stability.ai/stable-diffusion',
    category: '1',
    isNew: false,
    isFeatured: false,
    isHot: true,
    tags: ['AI绘画', '开源', '图像生成']
  },
  {
    id: 'ai_004',
    name: 'Claude',
    description: 'Anthropic开发的AI助手，擅长分析和创作',
    url: 'https://claude.ai',
    category: '1',
    isNew: true,
    isFeatured: false,
    isHot: false,
    tags: ['AI助手', '文本分析', 'Anthropic']
  },
  {
    id: 'ai_005',
    name: 'DALL-E 2',
    description: 'OpenAI的AI图像生成工具，从文本描述创建图像',
    url: 'https://openai.com/dall-e-2/',
    category: '1',
    isNew: false,
    isFeatured: true,
    isHot: true,
    tags: ['AI绘画', 'OpenAI', '文生图']
  },
  {
    id: 'ai_006',
    name: '文心一言',
    description: '百度推出的知识增强大语言模型',
    url: 'https://yiyan.baidu.com',
    category: '1',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['AI对话', '百度', '中文']
  },
  {
    id: 'ai_007',
    name: 'Runway ML',
    description: '强大的AI视频生成和编辑工具',
    url: 'https://runwayml.com',
    category: '1',
    isNew: true,
    isFeatured: true,
    isHot: true,
    tags: ['AI视频', '视频编辑', '创意工具']
  },
  {
    id: 'ai_008',
    name: 'Notion AI',
    description: '集成在Notion中的AI写作助手',
    url: 'https://www.notion.so/product/ai',
    category: '1',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['AI写作', 'Notion', '效率工具']
  }
];

// UI设计工具
export const uiDesignTools = [
  {
    id: 'ui_001',
    name: 'Figma',
    description: '强大的界面设计和原型制作工具，支持实时协作设计',
    url: 'https://www.figma.com',
    category: '2',
    isNew: false,
    isFeatured: true,
    isHot: true,
    tags: ['设计工具', 'UI设计', '原型', '协作']
  },
  {
    id: 'ui_002',
    name: 'Adobe XD',
    description: '专业的用户体验设计工具，Adobe Creative Suite的一部分',
    url: 'https://www.adobe.com/products/xd.html',
    category: '2',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['设计工具', 'UI设计', 'Adobe']
  },
  {
    id: 'ui_003',
    name: 'Sketch',
    description: 'Mac平台专业的界面设计工具，矢量图形编辑器',
    url: 'https://www.sketch.com',
    category: '2',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['设计工具', 'UI设计', 'Mac', '矢量']
  },
  {
    id: 'ui_004',
    name: 'InVision',
    description: '数字产品设计协作平台，支持原型和设计交付',
    url: 'https://www.invisionapp.com',
    category: '2',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['原型工具', '协作', '设计交付']
  },
  {
    id: 'ui_005',
    name: 'Principle',
    description: 'Mac平台的交互原型设计工具',
    url: 'https://principleformac.com',
    category: '2',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['原型工具', '交互设计', 'Mac']
  },
  {
    id: 'ui_006',
    name: 'Marvel',
    description: '简单易用的原型设计工具',
    url: 'https://marvelapp.com',
    category: '2',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['原型工具', '简单易用', '协作']
  }
];

// 平面设计工具
export const graphicDesignTools = [
  {
    id: 'gd_001',
    name: 'Adobe Photoshop',
    description: '世界领先的图像编辑和设计软件',
    url: 'https://www.adobe.com/products/photoshop.html',
    category: '3',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['图像编辑', 'Adobe', '专业设计']
  },
  {
    id: 'gd_002',
    name: 'Adobe Illustrator',
    description: '专业的矢量图形设计软件',
    url: 'https://www.adobe.com/products/illustrator.html',
    category: '3',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['矢量设计', 'Adobe', 'Logo设计']
  },
  {
    id: 'gd_003',
    name: 'Canva',
    description: '简单易用的在线设计平台，适合非专业设计师',
    url: 'https://www.canva.com',
    category: '3',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['在线设计', '模板', '易用']
  },
  {
    id: 'gd_004',
    name: 'GIMP',
    description: '免费开源的图像编辑器，功能强大',
    url: 'https://www.gimp.org',
    category: '3',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['免费', '开源', '图像编辑']
  },
  {
    id: 'gd_005',
    name: 'Affinity Designer',
    description: '专业的矢量图形设计工具，一次购买终身使用',
    url: 'https://affinity.serif.com/designer/',
    category: '3',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['矢量设计', '一次购买', '专业工具']
  }
];

// 设计素材网站
export const designMaterials = [
  {
    id: 'dm_001',
    name: 'Freepik',
    description: '数百万免费矢量图、PSD、图标和照片',
    url: 'https://www.freepik.com',
    category: '4',
    isNew: false,
    isFeatured: true,
    isHot: true,
    tags: ['免费素材', '矢量图', 'PSD模板']
  },
  {
    id: 'dm_002',
    name: 'IconFont',
    description: '阿里巴巴矢量图标库，丰富的图标资源',
    url: 'https://www.iconfont.cn',
    category: '4',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['图标', '矢量', '免费']
  },
  {
    id: 'dm_003',
    name: 'Flaticon',
    description: '世界上最大的免费图标数据库',
    url: 'https://www.flaticon.com',
    category: '4',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['图标', '免费', '数据库']
  },
  {
    id: 'dm_004',
    name: 'Pixabay',
    description: '百万张免费高清图片，高质量可商用',
    url: 'https://pixabay.com',
    category: '4',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['免费图片', '高清', '商用']
  }
];

// 配色工具
export const colorTools = [
  {
    id: 'ct_001',
    name: 'Coolors',
    description: '快速生成配色方案的在线工具',
    url: 'https://coolors.co',
    category: '5',
    isNew: false,
    isFeatured: true,
    isHot: true,
    tags: ['配色', '调色板', '在线工具']
  },
  {
    id: 'ct_002',
    name: 'Adobe Color',
    description: 'Adobe官方配色工具，提供丰富的色彩搭配',
    url: 'https://color.adobe.com',
    category: '5',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['配色', 'Adobe', '色轮']
  },
  {
    id: 'ct_003',
    name: 'ColorHunt',
    description: '精美的配色方案分享平台',
    url: 'https://colorhunt.co',
    category: '5',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['配色方案', '分享', '灵感']
  }
];

// 设计灵感网站
export const designInspiration = [
  {
    id: 'di_001',
    name: 'Dribbble',
    description: '设计师作品展示和灵感分享社区',
    url: 'https://dribbble.com',
    category: '6',
    isNew: false,
    isFeatured: true,
    isHot: true,
    tags: ['设计灵感', '作品展示', '社区']
  },
  {
    id: 'di_002',
    name: 'Behance',
    description: 'Adobe旗下的创意作品展示平台',
    url: 'https://www.behance.net',
    category: '6',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['作品展示', '设计灵感', 'Adobe']
  },
  {
    id: 'di_003',
    name: 'Pinterest',
    description: '全球最大的图片分享和发现平台',
    url: 'https://www.pinterest.com',
    category: '6',
    isNew: false,
    isFeatured: true,
    isHot: true,
    tags: ['图片分享', '发现', '灵感']
  },
  {
    id: 'di_004',
    name: '花瓣网',
    description: '采集你喜欢的美好事物，启发设计灵感',
    url: 'https://huaban.com',
    category: '6',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['中文', '采集', '设计灵感']
  }
];

// 原型工具
export const prototypeTools = [
  {
    id: 'pt_001',
    name: 'Framer',
    description: '交互式原型设计工具，将设计转化为真实的网站',
    url: 'https://www.framer.com',
    category: '7',
    isNew: true,
    isFeatured: true,
    isHot: true,
    tags: ['原型工具', '交互设计', '网站生成']
  },
  {
    id: 'pt_002',
    name: 'ProtoPie',
    description: '高保真交互原型设计工具，无需编程',
    url: 'https://www.protopie.io',
    category: '7',
    isNew: true,
    isFeatured: false,
    isHot: true,
    tags: ['原型工具', '交互设计', '无代码']
  }
];

// 图标字体工具
export const iconFontTools = [
  {
    id: 'if_001',
    name: 'Google Fonts',
    description: 'Google提供的免费网页字体库',
    url: 'https://fonts.google.com',
    category: '8',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['字体', '免费', 'Google']
  },
  {
    id: 'if_002',
    name: 'Font Awesome',
    description: '最流行的图标字体库',
    url: 'https://fontawesome.com',
    category: '8',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['图标字体', '流行', 'Web开发']
  }
];

// 动画工具
export const animationTools = [
  {
    id: 'at_001',
    name: 'Lottie',
    description: 'Airbnb开源的动画库，支持Web和移动端',
    url: 'https://lottiefiles.com',
    category: '9',
    isNew: false,
    isFeatured: true,
    isHot: true,
    tags: ['动画', '开源', 'Airbnb']
  },
  {
    id: 'at_002',
    name: 'After Effects',
    description: 'Adobe专业动画和视觉特效软件',
    url: 'https://www.adobe.com/products/aftereffects.html',
    category: '9',
    isNew: false,
    isFeatured: false,
    isHot: false,
    tags: ['动画', '特效', 'Adobe']
  }
];

// 设计教程网站
export const designTutorials = [
  {
    id: 'dt_001',
    name: '优设网',
    description: '专业的设计师学习平台，提供丰富的设计教程',
    url: 'https://www.uisdc.com',
    category: '10',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['设计教程', '学习', '中文']
  },
  {
    id: 'dt_002',
    name: '站酷',
    description: '设计师互动平台，分享创意设计',
    url: 'https://www.zcool.com.cn',
    category: '10',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['设计社区', '中文', '创意分享']
  }
];

// 图片素材网站
export const imageResources = [
  {
    id: 'ir_001',
    name: 'Unsplash',
    description: '高质量免费图片素材库，摄影师作品分享平台',
    url: 'https://unsplash.com',
    category: '11',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['免费图片', '素材', '摄影']
  },
  {
    id: 'ir_002',
    name: 'Pexels',
    description: '免费高质量图片和视频素材',
    url: 'https://www.pexels.com',
    category: '11',
    isNew: false,
    isFeatured: true,
    isHot: false,
    tags: ['免费图片', '视频素材', '高质量']
  }
];

// 合并所有网站数据
export const allWebsites = [
  ...aiTools,
  ...uiDesignTools,
  ...graphicDesignTools,
  ...designMaterials,
  ...colorTools,
  ...designInspiration,
  ...prototypeTools,
  ...iconFontTools,
  ...animationTools,
  ...designTutorials,
  ...imageResources
];

/**
 * 按分类获取网站数据
 * @param {string} categoryId - 分类ID
 * @returns {Array} 该分类下的网站列表
 */
export const getWebsitesByCategory = (categoryId) => {
  return allWebsites.filter(site => site.category === categoryId);
};

/**
 * 获取推荐网站
 * @returns {Array} 推荐网站列表
 */
export const getFeaturedWebsites = () => {
  return allWebsites.filter(site => site.isFeatured);
};

/**
 * 获取热门网站
 * @returns {Array} 热门网站列表
 */
export const getHotWebsites = () => {
  return allWebsites.filter(site => site.isHot);
};

/**
 * 搜索网站
 * @param {string} keyword - 搜索关键词
 * @returns {Array} 搜索结果
 */
export const searchWebsites = (keyword) => {
  const lowercaseKeyword = keyword.toLowerCase();
  return allWebsites.filter(site => 
    site.name.toLowerCase().includes(lowercaseKeyword) ||
    site.description.toLowerCase().includes(lowercaseKeyword) ||
    site.tags.some(tag => tag.toLowerCase().includes(lowercaseKeyword))
  );
};

export default {
  categories,
  allWebsites,
  getWebsitesByCategory,
  getFeaturedWebsites,
  getHotWebsites,
  searchWebsites
}; 