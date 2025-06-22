/**
 * @file fontToolsDatabase.js
 * @description 字体工具数据库 - 精选优质字体资源与字体设计工具
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.0.0 - 更新为UIED文章数据
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

// 字体工具数据 - 从UIED文章数据导入
export const fontTools = [
  {
    id: "uied-article-92526",
    name: "寒蝉有机体（ChillOrganic）中文免费字体免费商用字体下载",
    description: "来自UIED的优质文章：寒蝉有机体（ChillOrganic）中文免费字体免费商用字体下载",
    url: "https://www.uied.cn/92526.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92520",
    name: "又又意宋中文免费字体免费商用字体下载",
    description: "来自UIED的优质文章：又又意宋中文免费字体免费商用字体下载",
    url: "https://www.uied.cn/92520.html",
    category: "chinese-fonts",
    subcategory: "chinese-serif",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92518",
    name: "开源字体 | Inter 免费商用可变英文体下载",
    description: "来自UIED的优质文章：开源字体 | Inter 免费商用可变英文体下载",
    url: "https://www.uied.cn/92518.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92516",
    name: "开源字体 | Open Runde 免费商用英文体下载",
    description: "来自UIED的优质文章：开源字体 | Open Runde 免费商用英文体下载",
    url: "https://www.uied.cn/92516.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92514",
    name: "飞波正点体中文免费字体免费书法体下载",
    description: "来自UIED的优质文章：飞波正点体中文免费字体免费书法体下载",
    url: "https://www.uied.cn/92514.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92469",
    name: "也字工厂小石头中文免费字体免费商用字体下载",
    description: "来自UIED的优质文章：也字工厂小石头中文免费字体免费商用字体下载",
    url: "https://www.uied.cn/92469.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92466",
    name: "免费字体下载——ZQKFreefont",
    description: "来自UIED的优质文章：免费字体下载——ZQKFreefont",
    url: "https://www.uied.cn/92466.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92261",
    name: "程荣光刻楷免费可商用字体",
    description: "来自UIED的优质文章：程荣光刻楷免费可商用字体",
    url: "https://www.uied.cn/92261.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92257",
    name: "免费商用！浪漫之都珠海就该有属于自己的字体!鼎猎珠海体正式发布！",
    description: "来自UIED的优质文章：免费商用！浪漫之都珠海就该有属于自己的字体!鼎猎珠海体正式发布！",
    url: "https://www.uied.cn/92257.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92243",
    name: "[开源]小黑滚滚体（GUNGUNTI）免费商用英文体下载",
    description: "来自UIED的优质文章：[开源]小黑滚滚体（GUNGUNTI）免费商用英文体下载",
    url: "https://www.uied.cn/92243.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92237",
    name: "vivo Sans 中文免费字体免费商用字体下载",
    description: "来自UIED的优质文章：vivo Sans 中文免费字体免费商用字体下载",
    url: "https://www.uied.cn/92237.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92233",
    name: "免费使用 | 全兴定制字体「万事全兴体」全网发布！",
    description: "来自UIED的优质文章：免费使用 | 全兴定制字体「万事全兴体」全网发布！",
    url: "https://www.uied.cn/92233.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-92227",
    name: "Plix 普力士中文免费字体免费商用字体下载",
    description: "来自UIED的优质文章：Plix 普力士中文免费字体免费商用字体下载",
    url: "https://www.uied.cn/92227.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-91328",
    name: "汇文港黑免费中文复古印刷字体下载",
    description: "来自UIED的优质文章：汇文港黑免费中文复古印刷字体下载",
    url: "https://www.uied.cn/91328.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-91326",
    name: "字库江湖古风体",
    description: "来自UIED的优质文章：字库江湖古风体",
    url: "https://www.uied.cn/91326.html",
    category: "font-resources",
    subcategory: "font-blog",
    tags: [
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-91308",
    name: "昆明海鸥体中文免费字体免费商用字体下载",
    description: "来自UIED的优质文章：昆明海鸥体中文免费字体免费商用字体下载",
    url: "https://www.uied.cn/91308.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-91209",
    name: "荷塘月色手写体中文免费字体免费商用字体下载",
    description: "来自UIED的优质文章：荷塘月色手写体中文免费字体免费商用字体下载",
    url: "https://www.uied.cn/91209.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-91129",
    name: "字库星球飞扬体中文免费书法字体免费商用字体下载",
    description: "来自UIED的优质文章：字库星球飞扬体中文免费书法字体免费商用字体下载",
    url: "https://www.uied.cn/91129.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-91127",
    name: "栗壳坚坚体免费商用字体下载",
    description: "来自UIED的优质文章：栗壳坚坚体免费商用字体下载",
    url: "https://www.uied.cn/91127.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-91123",
    name: "昭源环方免费开源字体下载",
    description: "来自UIED的优质文章：昭源环方免费开源字体下载",
    url: "https://www.uied.cn/91123.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90983",
    name: "浪课江湖联盟简体字库设计 | 永久免费商用",
    description: "来自UIED的优质文章：浪课江湖联盟简体字库设计 | 永久免费商用",
    url: "https://www.uied.cn/90983.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90980",
    name: "随峰体Plus中文免费可商用手写字体下载",
    description: "来自UIED的优质文章：随峰体Plus中文免费可商用手写字体下载",
    url: "https://www.uied.cn/90980.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90976",
    name: "Breach 免费商用英文字库下载",
    description: "来自UIED的优质文章：Breach 免费商用英文字库下载",
    url: "https://www.uied.cn/90976.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90970",
    name: "Catalyst 免费商用可变英文字库下载",
    description: "来自UIED的优质文章：Catalyst 免费商用可变英文字库下载",
    url: "https://www.uied.cn/90970.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90939",
    name: "行黑 免费商用英文字库下载",
    description: "来自UIED的优质文章：行黑 免费商用英文字库下载",
    url: "https://www.uied.cn/90939.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90931",
    name: "免费商用英文字库推荐仿宋伴侣Fangson+gBuddy下载",
    description: "来自UIED的优质文章：免费商用英文字库推荐仿宋伴侣Fangson+gBuddy下载",
    url: "https://www.uied.cn/90931.html",
    category: "chinese-fonts",
    subcategory: "chinese-serif",
    tags: [
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90920",
    name: "隶书伴侣免费商用英文字库下载",
    description: "来自UIED的优质文章：隶书伴侣免费商用英文字库下载",
    url: "https://www.uied.cn/90920.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90776",
    name: "免费商用彩色西文 | 浪漫的本质是不确定性",
    description: "来自UIED的优质文章：免费商用彩色西文 | 浪漫的本质是不确定性",
    url: "https://www.uied.cn/90776.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90768",
    name: "免费商用字体推荐！字体传奇南安体下载",
    description: "来自UIED的优质文章：免费商用字体推荐！字体传奇南安体下载",
    url: "https://www.uied.cn/90768.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90748",
    name: "猫啃网风雅宋高质量免费商用中文字体下载",
    description: "来自UIED的优质文章：猫啃网风雅宋高质量免费商用中文字体下载",
    url: "https://www.uied.cn/90748.html",
    category: "chinese-fonts",
    subcategory: "chinese-serif",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90747",
    name: "免费商用中文字体：江西拙楷体-打包下载",
    description: "来自UIED的优质文章：免费商用中文字体：江西拙楷体-打包下载",
    url: "https://www.uied.cn/90747.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90442",
    name: "香蕉闻雪灵感体字形俊秀免费可商用字体",
    description: "来自UIED的优质文章：香蕉闻雪灵感体字形俊秀免费可商用字体",
    url: "https://www.uied.cn/90442.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "inspiration",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90434",
    name: "一品启航体！免费可商用",
    description: "来自UIED的优质文章：一品启航体！免费可商用",
    url: "https://www.uied.cn/90434.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90430",
    name: "Science Gothic免费可商用可变字体",
    description: "来自UIED的优质文章：Science Gothic免费可商用可变字体",
    url: "https://www.uied.cn/90430.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90425",
    name: "余思源颜黄体是一款可免费商用的行楷字体！",
    description: "来自UIED的优质文章：余思源颜黄体是一款可免费商用的行楷字体！",
    url: "https://www.uied.cn/90425.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-90423",
    name: "淘宝买菜体，免费可商用！",
    description: "来自UIED的优质文章：淘宝买菜体，免费可商用！",
    url: "https://www.uied.cn/90423.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-89112",
    name: "7款治愈系手写字体",
    description: "来自UIED的优质文章：7款治愈系手写字体",
    url: "https://www.uied.cn/89112.html",
    category: "font-resources",
    subcategory: "font-blog",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80043",
    name: "Work Sans清晰易读的现代无衬线字体免费可商用",
    description: "来自UIED的优质文章：Work Sans清晰易读的现代无衬线字体免费可商用",
    url: "https://www.uied.cn/80043.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80045",
    name: "Josefin Sans：优雅与复古气息兼具的无衬线字体",
    description: "来自UIED的优质文章：Josefin Sans：优雅与复古气息兼具的无衬线字体",
    url: "https://www.uied.cn/80045.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80049",
    name: "鼎猎客家体：客家文化字体，永久免费商用",
    description: "来自UIED的优质文章：鼎猎客家体：客家文化字体，永久免费商用",
    url: "https://www.uied.cn/80049.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80051",
    name: "寒蝉端黑体：基于思源黑体的免费开源多变字体推荐",
    description: "来自UIED的优质文章：寒蝉端黑体：基于思源黑体的免费开源多变字体推荐",
    url: "https://www.uied.cn/80051.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80053",
    name: "寒蝉活黑体：复古油墨风格字体免费下载，支持商用",
    description: "来自UIED的优质文章：寒蝉活黑体：复古油墨风格字体免费下载，支持商用",
    url: "https://www.uied.cn/80053.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80003",
    name: "AODEPS：手写涂鸦字体推荐，免费可商用",
    description: "来自UIED的优质文章：AODEPS：手写涂鸦字体推荐，免费可商用",
    url: "https://www.uied.cn/80003.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80011",
    name: "字制区喜脉喜欢体：带有文艺清新气息的手写字体，免费可商用",
    description: "来自UIED的优质文章：字制区喜脉喜欢体：带有文艺清新气息的手写字体，免费可商用",
    url: "https://www.uied.cn/80011.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80017",
    name: "云峰字库重庆山城棒棒体：融合书法艺术与山城精神的免费商用字体",
    description: "来自UIED的优质文章：云峰字库重庆山城棒棒体：融合书法艺术与山城精神的免费商用字体",
    url: "https://www.uied.cn/80017.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80075",
    name: "Sagrada哥特式英文字体，免费商用字体",
    description: "来自UIED的优质文章：Sagrada哥特式英文字体，免费商用字体",
    url: "https://www.uied.cn/80075.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80063",
    name: "Furut字体：简约线性风格的免费商用英文字体，让设计焕发新生",
    description: "来自UIED的优质文章：Furut字体：简约线性风格的免费商用英文字体，让设计焕发新生",
    url: "https://www.uied.cn/80063.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80077",
    name: "Neotrax未来科幻英文字体，免费可商用",
    description: "来自UIED的优质文章：Neotrax未来科幻英文字体，免费可商用",
    url: "https://www.uied.cn/80077.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80079",
    name: "游趣体开源字体：免费可商用的简体中文可爱风格字体",
    description: "来自UIED的优质文章：游趣体开源字体：免费可商用的简体中文可爱风格字体",
    url: "https://www.uied.cn/80079.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80081",
    name: "爱点风雅黑：免费商用中文字体，适合广告和UI设计",
    description: "来自UIED的优质文章：爱点风雅黑：免费商用中文字体，适合广告和UI设计",
    url: "https://www.uied.cn/80081.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-80085",
    name: "Craze几何英文字体：现代抽象风格，免费可商用",
    description: "来自UIED的优质文章：Craze几何英文字体：现代抽象风格，免费可商用",
    url: "https://www.uied.cn/80085.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-79514",
    name: "免费可商数字价格字体有哪些？",
    description: "来自UIED的优质文章：免费可商数字价格字体有哪些？",
    url: "https://www.uied.cn/79514.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-79120",
    name: "苹方字体(6字重) 全套打包",
    description: "来自UIED的优质文章：苹方字体(6字重) 全套打包",
    url: "https://www.uied.cn/79120.html",
    category: "font-resources",
    subcategory: "font-blog",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-78652",
    name: "字体安装教程：Windows、Mac、iPad及Procreate的全指南",
    description: "来自UIED的优质文章：字体安装教程：Windows、Mac、iPad及Procreate的全指南",
    url: "https://www.uied.cn/78652.html",
    category: "font-resources",
    subcategory: "font-blog",
    tags: [
      "font",
      "ui-design",
      "tutorial",
      "photoshop",
      "frontend",
      "premium"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-64020",
    name: "阿里妈妈刀隶体现代艺术灵感的免费商用中文字体",
    description: "来自UIED的优质文章：阿里妈妈刀隶体现代艺术灵感的免费商用中文字体",
    url: "https://www.uied.cn/64020.html",
    category: "chinese-fonts",
    subcategory: "chinese-decorative",
    tags: [
      "font",
      "ui-design",
      "inspiration",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64160",
    name: "Paralines现代线条风格英文字体，免费商用",
    description: "来自UIED的优质文章：Paralines现代线条风格英文字体，免费商用",
    url: "https://www.uied.cn/64160.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64234",
    name: "Blackberry趣味卡通风格英文字体，免费商用",
    description: "来自UIED的优质文章：Blackberry趣味卡通风格英文字体，免费商用",
    url: "https://www.uied.cn/64234.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64236",
    name: "Moscow Metro免费商用的动感线条英文字体",
    description: "来自UIED的优质文章：Moscow Metro免费商用的动感线条英文字体",
    url: "https://www.uied.cn/64236.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64278",
    name: "Васёк（Vasek）自然风格的免费商用手写字体",
    description: "来自UIED的优质文章：Васёк（Vasek）自然风格的免费商用手写字体",
    url: "https://www.uied.cn/64278.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-74472",
    name: "Press Start 2P免费商用的像素风格英文字体",
    description: "来自UIED的优质文章：Press Start 2P免费商用的像素风格英文字体",
    url: "https://www.uied.cn/74472.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64006",
    name: "Stretch Pro可拉伸无衬线英文字体",
    description: "来自UIED的优质文章：Stretch Pro可拉伸无衬线英文字体",
    url: "https://www.uied.cn/64006.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "premium"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-76009",
    name: "思源宋体 - 免费开源衬线字体，适用于多语言设计与视觉呈现",
    description: "来自UIED的优质文章：思源宋体 - 免费开源衬线字体，适用于多语言设计与视觉呈现",
    url: "https://www.uied.cn/76009.html",
    category: "chinese-fonts",
    subcategory: "chinese-serif",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-76003",
    name: "思源黑体 - 免费开源商用字体，适用于多语言设计与视觉呈现",
    description: "来自UIED的优质文章：思源黑体 - 免费开源商用字体，适用于多语言设计与视觉呈现",
    url: "https://www.uied.cn/76003.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72556",
    name: "点点中文像素字体开源免费可商用",
    description: "来自UIED的优质文章：点点中文像素字体开源免费可商用",
    url: "https://www.uied.cn/72556.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-75724",
    name: "问藏书房字体 - 古雅风格的免费商用艺术字体",
    description: "来自UIED的优质文章：问藏书房字体 - 古雅风格的免费商用艺术字体",
    url: "https://www.uied.cn/75724.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-75722",
    name: "阿里巴巴普惠体 - 免费商用的高质量标准非衬线字体",
    description: "来自UIED的优质文章：阿里巴巴普惠体 - 免费商用的高质量标准非衬线字体",
    url: "https://www.uied.cn/75722.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-74530",
    name: "Boba - 免费商用的时尚英文字体推荐",
    description: "来自UIED的优质文章：Boba - 免费商用的时尚英文字体推荐",
    url: "https://www.uied.cn/74530.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-74534",
    name: "Monti - 免费商用的极简无衬线英文字体推荐",
    description: "来自UIED的优质文章：Monti - 免费商用的极简无衬线英文字体推荐",
    url: "https://www.uied.cn/74534.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-75269",
    name: "Craze 几何英文字体：适用于游戏设计和电影标题的免费可商用字体",
    description: "来自UIED的优质文章：Craze 几何英文字体：适用于游戏设计和电影标题的免费可商用字体",
    url: "https://www.uied.cn/75269.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-74556",
    name: "欣意吉祥宋：免费商用的优雅宋体推荐",
    description: "来自UIED的优质文章：欣意吉祥宋：免费商用的优雅宋体推荐",
    url: "https://www.uied.cn/74556.html",
    category: "chinese-fonts",
    subcategory: "chinese-serif",
    tags: [
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-74586",
    name: "免费可商用Spectrum概念英文字体推荐",
    description: "来自UIED的优质文章：免费可商用Spectrum概念英文字体推荐",
    url: "https://www.uied.cn/74586.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-74608",
    name: "优雅与潮流并存的字体推荐-文道潮黑体免费可商用",
    description: "来自UIED的优质文章：优雅与潮流并存的字体推荐-文道潮黑体免费可商用",
    url: "https://www.uied.cn/74608.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-74604",
    name: "APERAT朋克风英文字体，免费商用版",
    description: "来自UIED的优质文章：APERAT朋克风英文字体，免费商用版",
    url: "https://www.uied.cn/74604.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-74614",
    name: "免费可商用的Cappadocia极简风格英文字体",
    description: "来自UIED的优质文章：免费可商用的Cappadocia极简风格英文字体",
    url: "https://www.uied.cn/74614.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "design-tool",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72326",
    name: "免费可商用字体推荐：阿里巴巴普惠体3.0，设计必备",
    description: "来自UIED的优质文章：免费可商用字体推荐：阿里巴巴普惠体3.0，设计必备",
    url: "https://www.uied.cn/72326.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72362",
    name: "免费商用字体推荐：阿里汉仪智能黑体，设计师的绝佳选择",
    description: "来自UIED的优质文章：免费商用字体推荐：阿里汉仪智能黑体，设计师的绝佳选择",
    url: "https://www.uied.cn/72362.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72394",
    name: "字体视界法棍体，免费可商用",
    description: "来自UIED的优质文章：字体视界法棍体，免费可商用",
    url: "https://www.uied.cn/72394.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72396",
    name: "问藏书房中文字体，免费可商用",
    description: "来自UIED的优质文章：问藏书房中文字体，免费可商用",
    url: "https://www.uied.cn/72396.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72428",
    name: "OPPO Sans 3.0：可商用的高品质免费字体",
    description: "来自UIED的优质文章：OPPO Sans 3.0：可商用的高品质免费字体",
    url: "https://www.uied.cn/72428.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72434",
    name: "Viana Script 手写英文字体，免费可商用",
    description: "来自UIED的优质文章：Viana Script 手写英文字体，免费可商用",
    url: "https://www.uied.cn/72434.html",
    category: "english-fonts",
    subcategory: "english-script",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72444",
    name: "THRONE 手绘英文字体，免费可商用",
    description: "来自UIED的优质文章：THRONE 手绘英文字体，免费可商用",
    url: "https://www.uied.cn/72444.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72546",
    name: "Zimbra 英文字体免费下载：高级立体压纹风格，适合商业和个人使用",
    description: "来自UIED的优质文章：Zimbra 英文字体免费下载：高级立体压纹风格，适合商业和个人使用",
    url: "https://www.uied.cn/72546.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "resource",
      "frontend",
      "free",
      "premium"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72584",
    name: "Metaphor英文字体：坚固与时尚的完美结合，免费可商用",
    description: "来自UIED的优质文章：Metaphor英文字体：坚固与时尚的完美结合，免费可商用",
    url: "https://www.uied.cn/72584.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72604",
    name: "Hyrbo 几何图形英文字体，免费可商用，创意项目首选",
    description: "来自UIED的优质文章：Hyrbo 几何图形英文字体，免费可商用，创意项目首选",
    url: "https://www.uied.cn/72604.html",
    category: "english-fonts",
    subcategory: "english-display",
    tags: [
      "font",
      "ui-design",
      "inspiration",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72610",
    name: "Pomidor时尚英文字体，免费可商用",
    description: "来自UIED的优质文章：Pomidor时尚英文字体，免费可商用",
    url: "https://www.uied.cn/72610.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72612",
    name: "Rahovets 复古英文字体，免费可商用",
    description: "来自UIED的优质文章：Rahovets 复古英文字体，免费可商用",
    url: "https://www.uied.cn/72612.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72632",
    name: "Aldi 手写英文字体，免费可商用",
    description: "来自UIED的优质文章：Aldi 手写英文字体，免费可商用",
    url: "https://www.uied.cn/72632.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72640",
    name: "字体传奇特战体，永久免费商用！",
    description: "来自UIED的优质文章：字体传奇特战体，永久免费商用！",
    url: "https://www.uied.cn/72640.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72652",
    name: "Razan 手绘英文字体，免费可商用",
    description: "来自UIED的优质文章：Razan 手绘英文字体，免费可商用",
    url: "https://www.uied.cn/72652.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72684",
    name: "优雅复古风英文字体推荐：适用于个人和商业项目的衬线样式字体",
    description: "来自UIED的优质文章：优雅复古风英文字体推荐：适用于个人和商业项目的衬线样式字体",
    url: "https://www.uied.cn/72684.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-72690",
    name: "BRUTALISM 无衬线创意英文字体推荐，免费可商用",
    description: "来自UIED的优质文章：BRUTALISM 无衬线创意英文字体推荐，免费可商用",
    url: "https://www.uied.cn/72690.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "inspiration",
      "english-font",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63284",
    name: "Hiatus 笔刷英文字体，免费可商用",
    description: "来自UIED的优质文章：Hiatus 笔刷英文字体，免费可商用",
    url: "https://www.uied.cn/63284.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63258",
    name: "峰广明锐体，免费可商用",
    description: "来自UIED的优质文章：峰广明锐体，免费可商用",
    url: "https://www.uied.cn/63258.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63288",
    name: "鸿蒙免费商用字体 HarmonyOS Sans",
    description: "来自UIED的优质文章：鸿蒙免费商用字体 HarmonyOS Sans",
    url: "https://www.uied.cn/63288.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63328",
    name: "Spacer几何极简现代字体，免费可商用！",
    description: "来自UIED的优质文章：Spacer几何极简现代字体，免费可商用！",
    url: "https://www.uied.cn/63328.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63454",
    name: "Dongle可爱的韩文字体 - 免费可商用韩文字体下载",
    description: "来自UIED的优质文章：Dongle可爱的韩文字体 - 免费可商用韩文字体下载",
    url: "https://www.uied.cn/63454.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63468",
    name: "免费商用的Lonely Ghost幽灵风格英文字体 - 高品质字体免费下载",
    description: "来自UIED的优质文章：免费商用的Lonely Ghost幽灵风格英文字体 - 高品质字体免费下载",
    url: "https://www.uied.cn/63468.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63488",
    name: "免费商用的SkateR Initials滑板装饰英文字体 - 高品质字体免费下载",
    description: "来自UIED的优质文章：免费商用的SkateR Initials滑板装饰英文字体 - 高品质字体免费下载",
    url: "https://www.uied.cn/63488.html",
    category: "english-fonts",
    subcategory: "english-display",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63490",
    name: "免费商用的白无常可可体 - 高品质字体免费下载",
    description: "来自UIED的优质文章：免费商用的白无常可可体 - 高品质字体免费下载",
    url: "https://www.uied.cn/63490.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63480",
    name: "设计师必备：三极字库4款免费商用中文字体",
    description: "来自UIED的优质文章：设计师必备：三极字库4款免费商用中文字体",
    url: "https://www.uied.cn/63480.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63482",
    name: "免费下载美呗嘿嘿体2.0：免费可商用的优质字体",
    description: "来自UIED的优质文章：免费下载美呗嘿嘿体2.0：免费可商用的优质字体",
    url: "https://www.uied.cn/63482.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63508",
    name: "仓迹高德国妙黑，免费可商用",
    description: "来自UIED的优质文章：仓迹高德国妙黑，免费可商用",
    url: "https://www.uied.cn/63508.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63552",
    name: "庞门正道细线体，免费可商用",
    description: "来自UIED的优质文章：庞门正道细线体，免费可商用",
    url: "https://www.uied.cn/63552.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63772",
    name: "Jellee：免费商用的圆润柔和无衬线字体，适合海报和标题设计",
    description: "来自UIED的优质文章：Jellee：免费商用的圆润柔和无衬线字体，适合海报和标题设计",
    url: "https://www.uied.cn/63772.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63776",
    name: "标小智无界黑，免费商用字体",
    description: "来自UIED的优质文章：标小智无界黑，免费商用字体",
    url: "https://www.uied.cn/63776.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63784",
    name: "免费可商用的全小素8×8像素字体资源",
    description: "来自UIED的优质文章：免费可商用的全小素8×8像素字体资源",
    url: "https://www.uied.cn/63784.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63792",
    name: "Chillax 字体免费下载与使用指南——时尚圆润的无衬线英文字体",
    description: "来自UIED的优质文章：Chillax 字体免费下载与使用指南——时尚圆润的无衬线英文字体",
    url: "https://www.uied.cn/63792.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63950",
    name: "Venus+ 字体系列免费下载与使用指南——适用于各种创意项目的优秀选择",
    description: "来自UIED的优质文章：Venus+ 字体系列免费下载与使用指南——适用于各种创意项目的优秀选择",
    url: "https://www.uied.cn/63950.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "inspiration",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63968",
    name: "字魂扁桃体，免费开源字体",
    description: "来自UIED的优质文章：字魂扁桃体，免费开源字体",
    url: "https://www.uied.cn/63968.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63998",
    name: "免费下载！Beatrick几何风格英文字体，完美适用于商业项目",
    description: "来自UIED的优质文章：免费下载！Beatrick几何风格英文字体，完美适用于商业项目",
    url: "https://www.uied.cn/63998.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64008",
    name: "Grind Grotesque现代英文宽字体，免费可商用",
    description: "来自UIED的优质文章：Grind Grotesque现代英文宽字体，免费可商用",
    url: "https://www.uied.cn/64008.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64082",
    name: "如何免费获取Anvha科技风格英文字体并应用于商用项目？",
    description: "来自UIED的优质文章：如何免费获取Anvha科技风格英文字体并应用于商用项目？",
    url: "https://www.uied.cn/64082.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64200",
    name: "Fonarto 2.0无衬线英文字体，免费可商用",
    description: "来自UIED的优质文章：Fonarto 2.0无衬线英文字体，免费可商用",
    url: "https://www.uied.cn/64200.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64296",
    name: "Grainy圆角窄体英文字体，免费可商用",
    description: "来自UIED的优质文章：Grainy圆角窄体英文字体，免费可商用",
    url: "https://www.uied.cn/64296.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64358",
    name: "Garute无衬线英文字体，免费可商用",
    description: "来自UIED的优质文章：Garute无衬线英文字体，免费可商用",
    url: "https://www.uied.cn/64358.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63802",
    name: "资源圆体完整版，免费商用字体",
    description: "来自UIED的优质文章：资源圆体完整版，免费商用字体",
    url: "https://www.uied.cn/63802.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "tutorial",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63808",
    name: "鸿雷行书简体，免费商用字体",
    description: "来自UIED的优质文章：鸿雷行书简体，免费商用字体",
    url: "https://www.uied.cn/63808.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63836",
    name: "宅在家粉条甜中文字体，免费可商用",
    description: "来自UIED的优质文章：宅在家粉条甜中文字体，免费可商用",
    url: "https://www.uied.cn/63836.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63566",
    name: "荆南麦圆体，免费可商用",
    description: "来自UIED的优质文章：荆南麦圆体，免费可商用",
    url: "https://www.uied.cn/63566.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63568",
    name: "荆南波波黑：免费可商用的可爱卡通标题字体",
    description: "来自UIED的优质文章：荆南波波黑：免费可商用的可爱卡通标题字体",
    url: "https://www.uied.cn/63568.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63600",
    name: "创客贴金刚体，免费可商用",
    description: "来自UIED的优质文章：创客贴金刚体，免费可商用",
    url: "https://www.uied.cn/63600.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63692",
    name: "Roboto Flex：谷歌推出的全新可变商用字体",
    description: "来自UIED的优质文章：Roboto Flex：谷歌推出的全新可变商用字体",
    url: "https://www.uied.cn/63692.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63758",
    name: "汇文明朝体：免费可商用的历史文献风中文字体",
    description: "来自UIED的优质文章：汇文明朝体：免费可商用的历史文献风中文字体",
    url: "https://www.uied.cn/63758.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63754",
    name: "Dela Gothic One德拉黑体：免费开源的中文字体",
    description: "来自UIED的优质文章：Dela Gothic One德拉黑体：免费开源的中文字体",
    url: "https://www.uied.cn/63754.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63762",
    name: "铁蒺藜体：免费可商用的尖锐造型中文字体",
    description: "来自UIED的优质文章：铁蒺藜体：免费可商用的尖锐造型中文字体",
    url: "https://www.uied.cn/63762.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63788",
    name: "未来荧黑字体：免费商用的全功能开源黑体",
    description: "来自UIED的优质文章：未来荧黑字体：免费商用的全功能开源黑体",
    url: "https://www.uied.cn/63788.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63790",
    name: "演示春风楷、演示夏行楷、演示秋鸿楷：免费可商用书法字体",
    description: "来自UIED的优质文章：演示春风楷、演示夏行楷、演示秋鸿楷：免费可商用书法字体",
    url: "https://www.uied.cn/63790.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63800",
    name: "摄图摩登小方体：免费商用的现代中文字体",
    description: "来自UIED的优质文章：摄图摩登小方体：免费商用的现代中文字体",
    url: "https://www.uied.cn/63800.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63810",
    name: "萌神拼音体：适用于教育类的免费商用中文拼音字体",
    description: "来自UIED的优质文章：萌神拼音体：适用于教育类的免费商用中文拼音字体",
    url: "https://www.uied.cn/63810.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63814",
    name: "Fancy Me：优雅的英文字体，免费商用",
    description: "来自UIED的优质文章：Fancy Me：优雅的英文字体，免费商用",
    url: "https://www.uied.cn/63814.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63826",
    name: "壱城ラウラフォント：可商用手写日文字体",
    description: "来自UIED的优质文章：壱城ラウラフォント：可商用手写日文字体",
    url: "https://www.uied.cn/63826.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63832",
    name: "动感时尚的无衬线英文字体 Nikea 免费可商用",
    description: "来自UIED的优质文章：动感时尚的无衬线英文字体 Nikea 免费可商用",
    url: "https://www.uied.cn/63832.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63880",
    name: "免费可商用中文字体：全字库正宋体、正楷体和说文解字",
    description: "来自UIED的优质文章：免费可商用中文字体：全字库正宋体、正楷体和说文解字",
    url: "https://www.uied.cn/63880.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64022",
    name: "阿里妈妈灵动体：多功能可变免费商用字体",
    description: "来自UIED的优质文章：阿里妈妈灵动体：多功能可变免费商用字体",
    url: "https://www.uied.cn/64022.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63798",
    name: "阿里妈妈数黑体 - 免费可商用的AI生成中文字体",
    description: "来自UIED的优质文章：阿里妈妈数黑体 - 免费可商用的AI生成中文字体",
    url: "https://www.uied.cn/63798.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63820",
    name: "金山云技术体 - 免费可商用的中文字体",
    description: "来自UIED的优质文章：金山云技术体 - 免费可商用的中文字体",
    url: "https://www.uied.cn/63820.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63830",
    name: "字体圈伟君黑 - 免费可商用的多字重黑体字库",
    description: "来自UIED的优质文章：字体圈伟君黑 - 免费可商用的多字重黑体字库",
    url: "https://www.uied.cn/63830.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63868",
    name: "Typefesse - 免费可商用的俏皮\"翘臀\"字体",
    description: "来自UIED的优质文章：Typefesse - 免费可商用的俏皮\"翘臀\"字体",
    url: "https://www.uied.cn/63868.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63846",
    name: "LINE Seed 红点奖字体，免费可商用",
    description: "来自UIED的优质文章：LINE Seed 红点奖字体，免费可商用",
    url: "https://www.uied.cn/63846.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63870",
    name: "全新荣耀免费可商用字体 HONOR Sans",
    description: "来自UIED的优质文章：全新荣耀免费可商用字体 HONOR Sans",
    url: "https://www.uied.cn/63870.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63908",
    name: "鸿雷拙书简体，免费商用字体",
    description: "来自UIED的优质文章：鸿雷拙书简体，免费商用字体",
    url: "https://www.uied.cn/63908.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63890",
    name: "钉钉进步体，免费可商用",
    description: "来自UIED的优质文章：钉钉进步体，免费可商用",
    url: "https://www.uied.cn/63890.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63900",
    name: "阿里妈妈东方大楷，免费可商用",
    description: "来自UIED的优质文章：阿里妈妈东方大楷，免费可商用",
    url: "https://www.uied.cn/63900.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63850",
    name: "得意黑2.0，免费可商用",
    description: "来自UIED的优质文章：得意黑2.0，免费可商用",
    url: "https://www.uied.cn/63850.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63930",
    name: "Dry Hard Sans有机手绘字体，免费可商用",
    description: "来自UIED的优质文章：Dry Hard Sans有机手绘字体，免费可商用",
    url: "https://www.uied.cn/63930.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63932",
    name: "云峰字库3款免商书法字体",
    description: "来自UIED的优质文章：云峰字库3款免商书法字体",
    url: "https://www.uied.cn/63932.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63898",
    name: "光良酒干杯体-优化版，免费可商用",
    description: "来自UIED的优质文章：光良酒干杯体-优化版，免费可商用",
    url: "https://www.uied.cn/63898.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64054",
    name: "京华老宋体：免费商用的中文字体",
    description: "来自UIED的优质文章：京华老宋体：免费商用的中文字体",
    url: "https://www.uied.cn/64054.html",
    category: "chinese-fonts",
    subcategory: "chinese-serif",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64088",
    name: "朱雀仿宋：开源免费商用的高质量仿宋中文字体",
    description: "来自UIED的优质文章：朱雀仿宋：开源免费商用的高质量仿宋中文字体",
    url: "https://www.uied.cn/64088.html",
    category: "chinese-fonts",
    subcategory: "chinese-serif",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64124",
    name: "猴尊宋体，免费商用字体",
    description: "来自UIED的优质文章：猴尊宋体，免费商用字体",
    url: "https://www.uied.cn/64124.html",
    category: "chinese-fonts",
    subcategory: "chinese-serif",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64172",
    name: "Sejjarah：独特的英文线性字体，免费可商用",
    description: "来自UIED的优质文章：Sejjarah：独特的英文线性字体，免费可商用",
    url: "https://www.uied.cn/64172.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-63926",
    name: "快看世界体字体介绍 - 免费可商用的年轻潮流字体",
    description: "来自UIED的优质文章：快看世界体字体介绍 - 免费可商用的年轻潮流字体",
    url: "https://www.uied.cn/63926.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64018",
    name: "阿里妈妈方圆体，免费商用字体",
    description: "来自UIED的优质文章：阿里妈妈方圆体，免费商用字体",
    url: "https://www.uied.cn/64018.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64060",
    name: "优设鲨鱼菲特健康体，免费商用字体",
    description: "来自UIED的优质文章：优设鲨鱼菲特健康体，免费商用字体",
    url: "https://www.uied.cn/64060.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64096",
    name: "Ludwig Grotesk：可商用工业风英文字体",
    description: "来自UIED的优质文章：Ludwig Grotesk：可商用工业风英文字体",
    url: "https://www.uied.cn/64096.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64120",
    name: "THUNDER可商用无衬线英文字体",
    description: "来自UIED的优质文章：THUNDER可商用无衬线英文字体",
    url: "https://www.uied.cn/64120.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64102",
    name: "DFM Pen Script Font手绘线性涂鸦字体，免费商用字体",
    description: "来自UIED的优质文章：DFM Pen Script Font手绘线性涂鸦字体，免费商用字体",
    url: "https://www.uied.cn/64102.html",
    category: "english-fonts",
    subcategory: "english-script",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64104",
    name: "DFM Thorny Doodle Y2K 锐利变形字体，免费商用字体",
    description: "来自UIED的优质文章：DFM Thorny Doodle Y2K 锐利变形字体，免费商用字体",
    url: "https://www.uied.cn/64104.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64116",
    name: "Neoda现代几何英文字体——免费可商用的理想选择",
    description: "来自UIED的优质文章：Neoda现代几何英文字体——免费可商用的理想选择",
    url: "https://www.uied.cn/64116.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64142",
    name: "饅頭黑體，免费商用字体",
    description: "来自UIED的优质文章：饅頭黑體，免费商用字体",
    url: "https://www.uied.cn/64142.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64176",
    name: "Journey可商用手写英文字体",
    description: "来自UIED的优质文章：Journey可商用手写英文字体",
    url: "https://www.uied.cn/64176.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64190",
    name: "阿里健康体2.0，免费可商用",
    description: "来自UIED的优质文章：阿里健康体2.0，免费可商用",
    url: "https://www.uied.cn/64190.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64270",
    name: "BIOWEAPON海报英文标题字体介绍 - 免费可商用的独特设计",
    description: "来自UIED的优质文章：BIOWEAPON海报英文标题字体介绍 - 免费可商用的独特设计",
    url: "https://www.uied.cn/64270.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64266",
    name: "EV_Hater手绘涂鸦英文字体介绍 - 独特生动的创意设计",
    description: "来自UIED的优质文章：EV_Hater手绘涂鸦英文字体介绍 - 独特生动的创意设计",
    url: "https://www.uied.cn/64266.html",
    category: "english-fonts",
    subcategory: "english-display",
    tags: [
      "font",
      "ui-design",
      "inspiration",
      "english-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64310",
    name: "TASA Typeface Collection 免费商用开源字体",
    description: "来自UIED的优质文章：TASA Typeface Collection 免费商用开源字体",
    url: "https://www.uied.cn/64310.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64326",
    name: "DEPOK CUBISM 几何图形英文字体，免费可商用",
    description: "来自UIED的优质文章：DEPOK CUBISM 几何图形英文字体，免费可商用",
    url: "https://www.uied.cn/64326.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64258",
    name: "玄冬楷书：免费可商用的楷书字体",
    description: "来自UIED的优质文章：玄冬楷书：免费可商用的楷书字体",
    url: "https://www.uied.cn/64258.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64318",
    name: "Massivertical：免费可商用的窄体风格英文字体",
    description: "来自UIED的优质文章：Massivertical：免费可商用的窄体风格英文字体",
    url: "https://www.uied.cn/64318.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64306",
    name: "Threshold：可商用的像素风格字体",
    description: "来自UIED的优质文章：Threshold：可商用的像素风格字体",
    url: "https://www.uied.cn/64306.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64332",
    name: "The WEEKEND时尚英文字体，免费可商用",
    description: "来自UIED的优质文章：The WEEKEND时尚英文字体，免费可商用",
    url: "https://www.uied.cn/64332.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64184",
    name: "Accent时尚线性风格英文字体，免费可商用",
    description: "来自UIED的优质文章：Accent时尚线性风格英文字体，免费可商用",
    url: "https://www.uied.cn/64184.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64188",
    name: "Toolie字体介绍：现代工业风格的免费商用字体",
    description: "来自UIED的优质文章：Toolie字体介绍：现代工业风格的免费商用字体",
    url: "https://www.uied.cn/64188.html",
    category: "font-tools",
    subcategory: "font-inspector",
    tags: [
      "font",
      "ui-design",
      "design-tool",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64248",
    name: "Lambretta：独特的现代衬线英文字体免费可商用",
    description: "来自UIED的优质文章：Lambretta：独特的现代衬线英文字体免费可商用",
    url: "https://www.uied.cn/64248.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64394",
    name: "Daydreaming：天空灵感的装饰性英文字体",
    description: "来自UIED的优质文章：Daydreaming：天空灵感的装饰性英文字体",
    url: "https://www.uied.cn/64394.html",
    category: "english-fonts",
    subcategory: "english-display",
    tags: [
      "font",
      "ui-design",
      "inspiration",
      "english-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64250",
    name: "XSHOW字体：街头潮流风格的商用英文字体",
    description: "来自UIED的优质文章：XSHOW字体：街头潮流风格的商用英文字体",
    url: "https://www.uied.cn/64250.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64256",
    name: "临海隶书：体现古城文化的免费商用字体",
    description: "来自UIED的优质文章：临海隶书：体现古城文化的免费商用字体",
    url: "https://www.uied.cn/64256.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64288",
    name: "AVA字体：极简风格的免费商用英文字体",
    description: "来自UIED的优质文章：AVA字体：极简风格的免费商用英文字体",
    url: "https://www.uied.cn/64288.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64346",
    name: "Plus Jakarta Sans 现代可变英文字体，免费可商用",
    description: "来自UIED的优质文章：Plus Jakarta Sans 现代可变英文字体，免费可商用",
    url: "https://www.uied.cn/64346.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64264",
    name: "Knit2仿针织效果英文装饰字体，免费可商用",
    description: "来自UIED的优质文章：Knit2仿针织效果英文装饰字体，免费可商用",
    url: "https://www.uied.cn/64264.html",
    category: "english-fonts",
    subcategory: "english-display",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64272",
    name: "Tourist极简无衬线英文字体，免费可商用",
    description: "来自UIED的优质文章：Tourist极简无衬线英文字体，免费可商用",
    url: "https://www.uied.cn/64272.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64274",
    name: "Dimkin圆润优雅的英文字体，免费可商用",
    description: "来自UIED的优质文章：Dimkin圆润优雅的英文字体，免费可商用",
    url: "https://www.uied.cn/64274.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64356",
    name: "Murs Gothic 字体：厚重英文字体的独特风格与免费商用",
    description: "来自UIED的优质文章：Murs Gothic 字体：厚重英文字体的独特风格与免费商用",
    url: "https://www.uied.cn/64356.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64374",
    name: "芫茜雅楷可商用字体，支持简体和繁体汉字",
    description: "来自UIED的优质文章：芫茜雅楷可商用字体，支持简体和繁体汉字",
    url: "https://www.uied.cn/64374.html",
    category: "chinese-fonts",
    subcategory: "chinese-calligraphy",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64376",
    name: "Croco Tears 运动时尚英文字体，免费可商用",
    description: "来自UIED的优质文章：Croco Tears 运动时尚英文字体，免费可商用",
    url: "https://www.uied.cn/64376.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64378",
    name: "Desyatiy 字体：现代简约与创意风格的无衬线字体",
    description: "来自UIED的优质文章：Desyatiy 字体：现代简约与创意风格的无衬线字体",
    url: "https://www.uied.cn/64378.html",
    category: "font-resources",
    subcategory: "font-blog",
    tags: [
      "font",
      "ui-design",
      "inspiration",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64382",
    name: "Fleuron：迷人的花卉图形英文装饰字体，免费商用",
    description: "来自UIED的优质文章：Fleuron：迷人的花卉图形英文装饰字体，免费商用",
    url: "https://www.uied.cn/64382.html",
    category: "english-fonts",
    subcategory: "english-display",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64384",
    name: "乡立方黑体：简约现代的免费商用黑体字体",
    description: "来自UIED的优质文章：乡立方黑体：简约现代的免费商用黑体字体",
    url: "https://www.uied.cn/64384.html",
    category: "chinese-fonts",
    subcategory: "chinese-sans",
    tags: [
      "font",
      "ui-design",
      "chinese-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64390",
    name: "华光俊秀体：免费商用字体的多样应用与独特魅力",
    description: "来自UIED的优质文章：华光俊秀体：免费商用字体的多样应用与独特魅力",
    url: "https://www.uied.cn/64390.html",
    category: "font-tools",
    subcategory: "font-inspector",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64392",
    name: "Chill Pixels 像素字体免费可商用",
    description: "来自UIED的优质文章：Chill Pixels 像素字体免费可商用",
    url: "https://www.uied.cn/64392.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64404",
    name: "PF频凡胡涂体，免费可商用",
    description: "来自UIED的优质文章：PF频凡胡涂体，免费可商用",
    url: "https://www.uied.cn/64404.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64406",
    name: "Monster Wedah 重金属英文摇滚字体，免费可商用",
    description: "来自UIED的优质文章：Monster Wedah 重金属英文摇滚字体，免费可商用",
    url: "https://www.uied.cn/64406.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64414",
    name: "探索复古风格：Funky Round 字体，免费可商用！",
    description: "来自UIED的优质文章：探索复古风格：Funky Round 字体，免费可商用！",
    url: "https://www.uied.cn/64414.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64434",
    name: "Capo Armor粗犷风英文标题字体，免费可商用",
    description: "来自UIED的优质文章：Capo Armor粗犷风英文标题字体，免费可商用",
    url: "https://www.uied.cn/64434.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64438",
    name: "Deux Deriche：免费可商用的双风格英文字体",
    description: "来自UIED的优质文章：Deux Deriche：免费可商用的双风格英文字体",
    url: "https://www.uied.cn/64438.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "ux-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64444",
    name: "Romes 现代易读英文字体：流畅自然与简洁衬线的完美结合",
    description: "来自UIED的优质文章：Romes 现代易读英文字体：流畅自然与简洁衬线的完美结合",
    url: "https://www.uied.cn/64444.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-64442",
    name: "免费可商用Drip液态英文字体",
    description: "来自UIED的优质文章：免费可商用Drip液态英文字体",
    url: "https://www.uied.cn/64442.html",
    category: "english-fonts",
    subcategory: "english-sans",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2023/01/tFJFPJ-20230130.jpeg"
  },
  {
    id: "uied-article-61940",
    name: "Zfont: 免费商用字体资源平台 — 快速查找并使用合适的字体",
    description: "来自UIED的优质文章：Zfont: 免费商用字体资源平台 — 快速查找并使用合适的字体",
    url: "https://www.uied.cn/61940.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-61805",
    name: "一款时尚免费商用字体Break-UIED推荐",
    description: "来自UIED的优质文章：一款时尚免费商用字体Break-UIED推荐",
    url: "https://www.uied.cn/61805.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free",
      "collection"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-38434",
    name: "抖音美好体全新字体发布！免费可商用",
    description: "来自UIED的优质文章：抖音美好体全新字体发布！免费可商用",
    url: "https://www.uied.cn/38434.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2022/12/bfb8au.jpeg"
  },
  {
    id: "uied-article-9251",
    name: "疯了阿里妈妈发布两款智造字\"数智体\"和\"东方大楷\"",
    description: "来自UIED的优质文章：疯了阿里妈妈发布两款智造字\"数智体\"和\"东方大楷\"",
    url: "https://www.uied.cn/9251.html",
    category: "font-resources",
    subcategory: "font-blog",
    tags: [
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2022/12/bfb8au.jpeg"
  },
  {
    id: "uied-article-8758",
    name: "钉钉推出免费商用字体，进步体！（附下载）",
    description: "来自UIED的优质文章：钉钉推出免费商用字体，进步体！（附下载）",
    url: "https://www.uied.cn/8758.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "resource",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-7723",
    name: "咖啡豆 - 字体和刻字",
    description: "来自UIED的优质文章：咖啡豆 - 字体和刻字",
    url: "https://www.uied.cn/7723.html",
    category: "font-resources",
    subcategory: "font-blog",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://thirdqq.qlogo.cn/g?b=oidb&k=yibCK7HbMticoTmy4N0yTibgA&kti=Y_YRggAAAAA&s=100&t=1656776552"
  },
  {
    id: "uied-article-7338",
    name: "时尚的 Ligature Serif 字体",
    description: "来自UIED的优质文章：时尚的 Ligature Serif 字体",
    url: "https://www.uied.cn/7338.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://thirdqq.qlogo.cn/g?b=oidb&k=yibCK7HbMticoTmy4N0yTibgA&kti=Y_YRggAAAAA&s=100&t=1656776552"
  },
  {
    id: "uied-article-6993",
    name: "优雅时尚复古连体英文字体",
    description: "来自UIED的优质文章：优雅时尚复古连体英文字体",
    url: "https://www.uied.cn/6993.html",
    category: "english-fonts",
    subcategory: "english-script",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://thirdqq.qlogo.cn/g?b=oidb&k=yibCK7HbMticoTmy4N0yTibgA&kti=Y_YRggAAAAA&s=100&t=1656776552"
  },
  {
    id: "uied-article-6979",
    name: "又一款免费字体！ 金山云发布免费商用字体库",
    description: "来自UIED的优质文章：又一款免费字体！ 金山云发布免费商用字体库",
    url: "https://www.uied.cn/6979.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "free"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-6969",
    name: "小米也出了可商用的品牌字体Mi San！",
    description: "来自UIED的优质文章：小米也出了可商用的品牌字体Mi San！",
    url: "https://www.uied.cn/6969.html",
    category: "font-resources",
    subcategory: "font-learning",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend",
      "branding"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://img.uied.cn/wp-content/uploads/2025/06/4fnJpQ-20250609.jpg"
  },
  {
    id: "uied-article-6899",
    name: "优雅奢华复古英文衬线字体",
    description: "来自UIED的优质文章：优雅奢华复古英文衬线字体",
    url: "https://www.uied.cn/6899.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://thirdqq.qlogo.cn/g?b=oidb&k=yibCK7HbMticoTmy4N0yTibgA&kti=Y_YRggAAAAA&s=100&t=1656776552"
  },
  {
    id: "uied-article-6836",
    name: "现代时尚连体经典英文字体",
    description: "来自UIED的优质文章：现代时尚连体经典英文字体",
    url: "https://www.uied.cn/6836.html",
    category: "english-fonts",
    subcategory: "english-script",
    tags: [
      "font",
      "ui-design",
      "english-font",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://thirdqq.qlogo.cn/g?b=oidb&k=yibCK7HbMticoTmy4N0yTibgA&kti=Y_YRggAAAAA&s=100&t=1656776552"
  },
  {
    id: "uied-article-5035",
    name: "英文古典衬线字体",
    description: "来自UIED的优质文章：英文古典衬线字体",
    url: "https://www.uied.cn/5035.html",
    category: "english-fonts",
    subcategory: "english-serif",
    tags: [
      "font",
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://thirdqq.qlogo.cn/g?b=oidb&k=yibCK7HbMticoTmy4N0yTibgA&kti=Y_YRggAAAAA&s=100&t=1656776552"
  },
  {
    id: "uied-article-6227",
    name: "设计师交流群",
    description: "来自UIED的优质文章：设计师交流群",
    url: "https://www.uied.cn/announcement/6227.html",
    category: "font-resources",
    subcategory: "font-blog",
    tags: [
      "ui-design",
      "photoshop",
      "frontend"
    ],
    isHot: false,
    isFeatured: false,
    iconUrl: "https://www.google.com/s2/favicons?domain=uied.cn&sz=128"
  }
];

// 导出别名，兼容旧的导入名称
export const allFontTools = fontTools;

// 工具函数：根据分类筛选字体工具
export const getToolsByCategory = (categoryId) => {
  return fontTools.filter(tool => tool.category === categoryId);
};

// 工具函数：根据子分类筛选字体工具
export const getToolsBySubCategory = (subcategoryId) => {
  return fontTools.filter(tool => tool.subcategory === subcategoryId);
};

// 工具函数：获取热门字体工具
export const getHotTools = () => {
  return fontTools.filter(tool => tool.isHot);
};

// 工具函数：获取推荐字体工具
export const getFeaturedTools = () => {
  return fontTools.filter(tool => tool.isFeatured);
};

// 工具函数：搜索字体工具
export const searchTools = (query) => {
  const searchTerm = query.toLowerCase();
  return fontTools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm) ||
    tool.description.toLowerCase().includes(searchTerm) ||
    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

// 工具函数：获取某个分类下的所有子分类
export const getSubCategoriesByCategory = (categoryId) => {
  const category = fontCategories.find(cat => cat.id === categoryId);
  return category ? category.subcategories : [];
};

// 工具函数：获取子分类统计信息
export const getSubCategoryStats = (categoryId) => {
  const subcategories = getSubCategoriesByCategory(categoryId);
  return subcategories.map(subcat => ({
    ...subcat,
    count: getToolsBySubCategory(subcat.id).length
  }));
};
