/**
 * @file fontToolsDatabase.js
 * @description 字体工具数据库 - 精选优质字体资源与字体设计工具
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// 字体工具分类定义
export const fontCategories = [
  {
    id: 'chinese-fonts',
    name: '中文字体',
    description: '优质中文字体资源下载',
    iconUrl: 'font',
    color: '#FF6B6B',
    subcategories: [
      { id: 'chinese-serif', name: '中文衬线' },
      { id: 'chinese-sans', name: '中文无衬线' },
      { id: 'chinese-calligraphy', name: '中文书法' },
      { id: 'chinese-decorative', name: '中文装饰' }
    ]
  },
  {
    id: 'english-fonts',
    name: '英文字体',
    description: '精选英文字体库',
    iconUrl: 'font',
    color: '#4ECDC4',
    subcategories: [
      { id: 'english-serif', name: '英文衬线' },
      { id: 'english-sans', name: '英文无衬线' },
      { id: 'english-script', name: '英文手写' },
      { id: 'english-display', name: '英文展示' }
    ]
  },
  {
    id: 'font-tools',
    name: '字体工具',
    description: '字体设计与管理工具',
    iconUrl: 'tool',
    color: '#45B7D1',
    subcategories: [
      { id: 'font-editor', name: '字体编辑器' },
      { id: 'font-manager', name: '字体管理器' },
      { id: 'font-converter', name: '字体转换器' },
      { id: 'font-inspector', name: '字体检测器' }
    ]
  },
  {
    id: 'font-pairing',
    name: '字体搭配',
    description: '字体配对与搭配工具',
    iconUrl: 'palette',
    color: '#96CEB4',
    subcategories: [
      { id: 'pairing-tools', name: '搭配工具' },
      { id: 'pairing-gallery', name: '搭配灵感' },
      { id: 'pairing-guide', name: '搭配指南' },
      { id: 'pairing-analysis', name: '搭配分析' }
    ]
  },
  {
    id: 'web-fonts',
    name: 'Web字体',
    description: '网页字体服务与CDN',
    iconUrl: 'web',
    color: '#FFEAA7',
    subcategories: [
      { id: 'web-cdn', name: '字体CDN' },
      { id: 'web-optimization', name: '字体优化' },
      { id: 'web-loading', name: '字体加载' },
      { id: 'web-fallback', name: '字体回退' }
    ]
  },
  {
    id: 'font-resources',
    name: '字体资源',
    description: '字体学习与资源站点',
    iconUrl: 'resource',
    color: '#DDA0DD',
    subcategories: [
      { id: 'font-learning', name: '字体学习' },
      { id: 'font-community', name: '字体社区' },
      { id: 'font-blog', name: '字体博客' },
      { id: 'font-news', name: '字体资讯' }
    ]
  }
];

// 字体热门搜索标签配置
export const fontHotTags = [
  // 热门字体分类
  { id: 'hot-fonts', name: '热门字体', category: 'hot-recommendations', subCategory: 'hot-recommendations-hot' },
  { id: 'free-fonts', name: '免费字体', category: 'hot-recommendations', subCategory: 'hot-recommendations-hot' },
  { id: 'commercial-fonts', name: '商用字体', category: 'hot-recommendations', subCategory: 'hot-recommendations-hot' },
  { id: 'chinese-fonts-hot', name: '中文字体', category: 'hot-recommendations', subCategory: 'hot-recommendations-hot' },
  { id: 'english-fonts-hot', name: '英文字体', category: 'hot-recommendations', subCategory: 'hot-recommendations-hot' },
  { id: 'web-fonts-hot', name: 'Web字体', category: 'hot-recommendations', subCategory: 'hot-recommendations-hot' },
  { id: 'font-tools-hot', name: '字体工具', category: 'hot-recommendations', subCategory: 'hot-recommendations-hot' },
  { id: 'font-pairing-hot', name: '字体搭配', category: 'hot-recommendations', subCategory: 'hot-recommendations-hot' },
  
  // UIED系列
  { id: 'uied-fonts', name: 'UIED字体', category: 'hot-recommendations', subCategory: 'hot-recommendations-uied' },
  { id: 'uied-typography', name: 'UIED排版', category: 'hot-recommendations', subCategory: 'hot-recommendations-uied' },
  { id: 'uied-design', name: 'UIED设计', category: 'hot-recommendations', subCategory: 'hot-recommendations-uied' },
];

// 字体工具数据
export const fontTools = [
  /* =========================================================
   * 中文字体 - 中文衬线 (chinese-serif)
   * ========================================================= */
  {
    id: 'siyuan-serif',
    name: '思源宋体',
    description: 'Adobe与Google联合开发的开源中文衬线字体',
    url: 'https://github.com/adobe-fonts/source-han-serif',
    category: 'chinese-fonts',
    subcategory: 'chinese-serif',
    tags: ['开源', '思源', '衬线', '多语言'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://github.com/favicon.ico'
  },
  {
    id: 'noto-serif-cjk',
    name: 'Noto Serif CJK',
    description: 'Google开发的Noto字体系列中文衬线版本',
    url: 'https://fonts.google.com/noto/fonts',
    category: 'chinese-fonts',
    subcategory: 'chinese-serif',
    tags: ['Google', 'Noto', '开源', 'CJK'],
    isHot: true,
    iconUrl: 'https://fonts.google.com/favicon.ico'
  },
  {
    id: 'fandol-song',
    name: 'Fandol宋体',
    description: '开源中文衬线字体，适合学术和正式文档',
    url: 'https://ctan.org/pkg/fandol',
    category: 'chinese-fonts',
    subcategory: 'chinese-serif',
    tags: ['开源', '学术', '文档', 'LaTeX'],
    isHot: false,
    iconUrl: 'https://ctan.org/favicon.ico'
  },

  /* =========================================================
   * 中文字体 - 中文无衬线 (chinese-sans)
   * ========================================================= */
  {
    id: 'siyuan-sans',
    name: '思源黑体',
    description: 'Adobe与Google联合开发的开源中文无衬线字体',
    url: 'https://github.com/adobe-fonts/source-han-sans',
    category: 'chinese-fonts',
    subcategory: 'chinese-sans',
    tags: ['开源', '思源', '无衬线', '多语言'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://github.com/favicon.ico'
  },
  {
    id: 'noto-sans-cjk',
    name: 'Noto Sans CJK',
    description: 'Google开发的Noto字体系列中文无衬线版本',
    url: 'https://fonts.google.com/noto/fonts',
    category: 'chinese-fonts',
    subcategory: 'chinese-sans',
    tags: ['Google', 'Noto', '开源', 'CJK'],
    isHot: true,
    iconUrl: 'https://fonts.google.com/favicon.ico'
  },
  {
    id: 'mi-sans',
    name: 'MiSans 小米兰亭',
    description: '小米公司开发的现代无衬线中文字体',
    url: 'https://hyperos.mi.com/font',
    category: 'chinese-fonts',
    subcategory: 'chinese-sans',
    tags: ['小米', '现代', '品牌字体', '免费'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://hyperos.mi.com/favicon.ico'
  },
  {
    id: 'harmonyos-sans',
    name: 'HarmonyOS Sans',
    description: '华为鸿蒙系统官方字体',
    url: 'https://developer.harmonyos.com/cn/design/des-resources/general-0000001157868857',
    category: 'chinese-fonts',
    subcategory: 'chinese-sans',
    tags: ['华为', '鸿蒙', '系统字体', '免费'],
    isHot: true,
    iconUrl: 'https://developer.harmonyos.com/favicon.ico'
  },
  {
    id: 'lxgw-wenkai',
    name: '霞鹜文楷',
    description: '基于Klee改造的开源中文字体',
    url: 'https://github.com/lxgw/LxgwWenKai',
    category: 'chinese-fonts',
    subcategory: 'chinese-sans',
    tags: ['开源', '文楷', '手写风格', '中文'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://github.com/favicon.ico'
  },

  /* =========================================================
   * 中文字体 - 中文书法 (chinese-calligraphy)
   * ========================================================= */
  {
    id: 'zhuque-fangsong',
    name: '朱雀仿宋',
    description: '开源仿宋字体，适合古典文档排版',
    url: 'https://github.com/TrionesType/zhuque',
    category: 'chinese-fonts',
    subcategory: 'chinese-calligraphy',
    tags: ['开源', '仿宋', '古典', '排版'],
    isHot: false,
    iconUrl: 'https://github.com/favicon.ico'
  },
  {
    id: 'kangxi-radicals',
    name: '康熙字典体',
    description: '基于康熙字典的传统书法字体',
    url: 'https://github.com/MaruTama/Mengshen-pinyin-font',
    category: 'chinese-fonts',
    subcategory: 'chinese-calligraphy',
    tags: ['康熙', '字典', '传统', '书法'],
    isHot: false,
    iconUrl: 'https://github.com/favicon.ico'
  },

  /* =========================================================
   * 英文字体 - 英文衬线 (english-serif)
   * ========================================================= */
  {
    id: 'google-fonts',
    name: 'Google Fonts',
    description: '全球最大的免费网络字体库',
    url: 'https://fonts.google.com',
    category: 'english-fonts',
    subcategory: 'english-serif',
    tags: ['Google', '免费', '网络字体', '全球'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://fonts.google.com/favicon.ico'
  },
  {
    id: 'adobe-fonts',
    name: 'Adobe Fonts',
    description: 'Adobe官方字体库，包含数千种专业字体',
    url: 'https://fonts.adobe.com',
    category: 'english-fonts',
    subcategory: 'english-serif',
    tags: ['Adobe', '专业', '付费', '高质量'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://fonts.adobe.com/favicon.ico'
  },
  {
    id: 'font-squirrel',
    name: 'Font Squirrel',
    description: '优质免费字体下载站点',
    url: 'https://www.fontsquirrel.com',
    category: 'english-fonts',
    subcategory: 'english-serif',
    tags: ['免费', '下载', '商用', '优质'],
    isHot: true,
    iconUrl: 'https://www.fontsquirrel.com/favicon.ico'
  },
  {
    id: 'dafont',
    name: 'DaFont',
    description: '全球知名的字体下载网站',
    url: 'https://www.dafont.com',
    category: 'english-fonts',
    subcategory: 'english-serif',
    tags: ['下载', '丰富', '分类', '全球'],
    isHot: true,
    iconUrl: 'https://www.dafont.com/favicon.ico'
  },

  /* =========================================================
   * 英文字体 - 英文无衬线 (english-sans)
   * ========================================================= */
  {
    id: 'inter',
    name: 'Inter',
    description: '专为UI界面设计的现代无衬线字体',
    url: 'https://rsms.me/inter/',
    category: 'english-fonts',
    subcategory: 'english-sans',
    tags: ['UI', '界面', '现代', '开源'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://rsms.me/favicon.ico'
  },
  {
    id: 'roboto',
    name: 'Roboto',
    description: 'Google Material Design官方字体',
    url: 'https://fonts.google.com/specimen/Roboto',
    category: 'english-fonts',
    subcategory: 'english-sans',
    tags: ['Google', 'Material', '系统字体', '现代'],
    isHot: true,
    iconUrl: 'https://fonts.google.com/favicon.ico'
  },
  {
    id: 'open-sans',
    name: 'Open Sans',
    description: '使用最广泛的网络字体之一',
    url: 'https://fonts.google.com/specimen/Open+Sans',
    category: 'english-fonts',
    subcategory: 'english-sans',
    tags: ['流行', '网络字体', '易读', '通用'],
    isHot: true,
    iconUrl: 'https://fonts.google.com/favicon.ico'
  },

  /* =========================================================
   * 字体工具 - 字体编辑器 (font-editor)
   * ========================================================= */
  {
    id: 'fontforge',
    name: 'FontForge',
    description: '开源字体编辑器，功能强大',
    url: 'https://fontforge.org',
    category: 'font-tools',
    subcategory: 'font-editor',
    tags: ['开源', '编辑器', '专业', '跨平台'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://fontforge.org/favicon.ico'
  },
  {
    id: 'glyphs',
    name: 'Glyphs',
    description: 'Mac平台专业字体设计软件',
    url: 'https://glyphsapp.com',
    category: 'font-tools',
    subcategory: 'font-editor',
    tags: ['Mac', '专业', '付费', '字体设计'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://glyphsapp.com/favicon.ico'
  },
  {
    id: 'fontlab',
    name: 'FontLab',
    description: '专业字体设计和制作软件',
    url: 'https://www.fontlab.com',
    category: 'font-tools',
    subcategory: 'font-editor',
    tags: ['专业', '付费', '字体制作', '工业标准'],
    isHot: true,
    iconUrl: 'https://www.fontlab.com/favicon.ico'
  },
  {
    id: 'birdfont',
    name: 'BirdFont',
    description: '免费的字体编辑器软件',
    url: 'https://birdfont.org',
    category: 'font-tools',
    subcategory: 'font-editor',
    tags: ['免费', '开源', '简单', '跨平台'],
    isHot: false,
    iconUrl: 'https://birdfont.org/favicon.ico'
  },

  /* =========================================================
   * 字体工具 - 字体管理器 (font-manager)
   * ========================================================= */
  {
    id: 'adobe-fonts-manager',
    name: 'Adobe Creative Cloud',
    description: 'Adobe字体管理和同步工具',
    url: 'https://creativecloud.adobe.com/apps/all/desktop/pdp/creative-cloud',
    category: 'font-tools',
    subcategory: 'font-manager',
    tags: ['Adobe', '管理', '同步', '专业'],
    isHot: true,
    iconUrl: 'https://creativecloud.adobe.com/favicon.ico'
  },
  {
    id: 'font-explorer',
    name: 'Font Explorer X',
    description: '专业字体管理软件',
    url: 'https://www.fontexplorerx.com',
    category: 'font-tools',
    subcategory: 'font-manager',
    tags: ['管理', '专业', '预览', '分类'],
    isHot: true,
    iconUrl: 'https://www.fontexplorerx.com/favicon.ico'
  },
  {
    id: 'nexusfont',
    name: 'NexusFont',
    description: 'Windows平台免费字体管理器',
    url: 'http://www.xiles.net/nexusfont/',
    category: 'font-tools',
    subcategory: 'font-manager',
    tags: ['Windows', '免费', '管理', '预览'],
    isHot: false,
    iconUrl: 'http://www.xiles.net/favicon.ico'
  },

  /* =========================================================
   * 字体工具 - 字体转换器 (font-converter)
   * ========================================================= */
  {
    id: 'cloudconvert-font',
    name: 'CloudConvert',
    description: '在线字体格式转换工具',
    url: 'https://cloudconvert.com/font-converter',
    category: 'font-tools',
    subcategory: 'font-converter',
    tags: ['在线', '转换', '多格式', '云端'],
    isHot: true,
    iconUrl: 'https://cloudconvert.com/favicon.ico'
  },
  {
    id: 'font-converter',
    name: 'Font Converter',
    description: '免费在线字体格式转换',
    url: 'https://www.fontconverter.io',
    category: 'font-tools',
    subcategory: 'font-converter',
    tags: ['免费', '在线', 'TTF', 'OTF'],
    isHot: true,
    iconUrl: 'https://www.fontconverter.io/favicon.ico'
  },
  {
    id: 'transfonter',
    name: 'Transfonter',
    description: '网络字体生成和转换工具',
    url: 'https://transfonter.org',
    category: 'font-tools',
    subcategory: 'font-converter',
    tags: ['网络字体', 'WOFF', 'CSS', '生成'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://transfonter.org/favicon.ico'
  },

  /* =========================================================
   * 字体搭配 - 搭配工具 (pairing-tools)
   * ========================================================= */
  {
    id: 'fontjoy',
    name: 'Fontjoy',
    description: '基于AI的字体配对工具',
    url: 'https://fontjoy.com',
    category: 'font-pairing',
    subcategory: 'pairing-tools',
    tags: ['AI', '配对', '搭配', '智能'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://fontjoy.com/favicon.ico'
  },
  {
    id: 'font-pair',
    name: 'Font Pair',
    description: 'Google Fonts字体配对灵感库',
    url: 'https://www.fontpair.co',
    category: 'font-pairing',
    subcategory: 'pairing-tools',
    tags: ['Google Fonts', '配对', '灵感', '实例'],
    isHot: true,
    iconUrl: 'https://www.fontpair.co/favicon.ico'
  },
  {
    id: 'typewolf',
    name: 'Typewolf',
    description: '网站字体使用案例和搭配灵感',
    url: 'https://www.typewolf.com',
    category: 'font-pairing',
    subcategory: 'pairing-tools',
    tags: ['网站', '案例', '灵感', '搭配'],
    isHot: true,
    iconUrl: 'https://www.typewolf.com/favicon.ico'
  },

  /* =========================================================
   * Web字体 - 字体CDN (web-cdn)
   * ========================================================= */
  {
    id: 'google-fonts-cdn',
    name: 'Google Fonts CDN',
    description: 'Google官方字体CDN服务',
    url: 'https://fonts.googleapis.com',
    category: 'web-fonts',
    subcategory: 'web-cdn',
    tags: ['CDN', 'Google', '免费', '全球'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://fonts.google.com/favicon.ico'
  },
  {
    id: 'adobe-fonts-cdn',
    name: 'Adobe Fonts Web',
    description: 'Adobe字体网络服务',
    url: 'https://fonts.adobe.com/fonts',
    category: 'web-fonts',
    subcategory: 'web-cdn',
    tags: ['Adobe', '付费', '专业', '网络'],
    isHot: true,
    iconUrl: 'https://fonts.adobe.com/favicon.ico'
  },
  {
    id: 'font-display',
    name: 'Font Display',
    description: '字体显示优化属性参考',
    url: 'https://font-display.glitch.me',
    category: 'web-fonts',
    subcategory: 'web-optimization',
    tags: ['优化', '显示', '性能', 'CSS'],
    isHot: false,
    iconUrl: 'https://glitch.com/favicon.ico'
  },

  /* =========================================================
   * 字体资源 - 字体学习 (font-learning)
   * ========================================================= */
  {
    id: 'typography-handbook',
    name: 'Typography Handbook',
    description: '字体排版学习手册',
    url: 'https://typographyhandbook.com',
    category: 'font-resources',
    subcategory: 'font-learning',
    tags: ['学习', '排版', '手册', '教程'],
    isHot: true,
    iconUrl: 'https://typographyhandbook.com/favicon.ico'
  },
  {
    id: 'practical-typography',
    name: 'Practical Typography',
    description: '实用字体排版指南',
    url: 'https://practicaltypography.com',
    category: 'font-resources',
    subcategory: 'font-learning',
    tags: ['实用', '指南', '排版', '专业'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://practicaltypography.com/favicon.ico'
  },
  {
    id: 'fonts-in-use',
    name: 'Fonts In Use',
    description: '字体使用案例展示和分析',
    url: 'https://fontsinuse.com',
    category: 'font-resources',
    subcategory: 'font-learning',
    tags: ['案例', '展示', '分析', '实践'],
    isHot: true,
    iconUrl: 'https://fontsinuse.com/favicon.ico'
  }
];

// 所有字体工具列表
export const allFontTools = fontTools;

// 工具筛选函数
export const getToolsByCategory = (categoryId) => {
  return fontTools.filter(tool => tool.category === categoryId);
};

export const getToolsBySubCategory = (subCategoryId, limit = 0) => {
  const filtered = fontTools.filter(tool => tool.subcategory === subCategoryId);
  return limit > 0 ? filtered.slice(0, limit) : filtered;
};

export const getHotTools = (limit = 10) => {
  const hotTools = fontTools.filter(tool => tool.isHot);
  return limit > 0 ? hotTools.slice(0, limit) : hotTools;
};

export const getFeaturedTools = (limit = 10) => {
  const featuredTools = fontTools.filter(tool => tool.isFeatured);
  return limit > 0 ? featuredTools.slice(0, limit) : featuredTools;
};

export const searchTools = (keyword) => {
  const lowercaseKeyword = keyword.toLowerCase();
  return fontTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseKeyword) ||
    tool.description.toLowerCase().includes(lowercaseKeyword) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowercaseKeyword))
  );
};

export const getSubCategoriesByCategory = (categoryId) => {
  const category = fontCategories.find(cat => cat.id === categoryId);
  return category ? category.subcategories : [];
};

export const getSubCategoryStats = (categoryId) => {
  const subcategories = getSubCategoriesByCategory(categoryId);
  return subcategories.map(sub => ({
    ...sub,
    count: getToolsBySubCategory(sub.id).length
  }));
}; 