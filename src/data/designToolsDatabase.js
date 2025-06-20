/**
 * @file designToolsDatabase.js
 * @description 平面设计工具数据库 - 精选优质平面设计工具与资源
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */



// 平面设计工具分类定义
export const designCategories = [
  {
    id: 'common-tools',
    name: '常用工具',
    description: '设计师日常必备的实用工具集合',
    iconUrl: 'tools',
    color: '#6366F1',
    subcategories: [
      { id: 'efficiency-tools', name: '效率工具' },
      { id: 'one-click-cutout', name: '一键抠图' },
      { id: 'online-tools', name: '在线工具' },
      { id: 'collaborative-office', name: '协同办公' },
      { id: 'online-color', name: '在线配色' },
      { id: 'online-docs', name: '在线文档' },
      { id: 'online-generator', name: '在线生成' },
      { id: 'format-conversion', name: '格式转换' }
    ]
  },
  {
    id: 'inspiration',
    name: '平面灵感',
    description: '优秀平面设计作品与创意灵感展示',
    iconUrl: 'inspiration',
    color: '#3B82F6',
    subcategories: [
      { id: 'inspiration-general', name: '平面灵感' },
      { id: 'inspiration-poster', name: '海报灵感' },
      { id: 'inspiration-logo', name: 'Logo灵感' },
      { id: 'inspiration-packaging', name: '包装灵感' },
      { id: 'inspiration-branding', name: '品牌灵感' },
      { id: 'inspiration-typography', name: '字体灵感' },
      { id: 'inspiration-magazine', name: '设计杂志' },
      { id: 'inspiration-portfolio', name: '设计师作品集' }
    ]
  },
  {
    id: 'design-resources',
    name: '设计素材',
    description: '高质量设计素材与资源库',
    iconUrl: 'material',
    color: '#F59E0B',
    subcategories: [
      { id: 'design-resources-plane', name: '平面素材' },
      { id: 'design-resources-ui', name: 'UI素材' },
      { id: 'design-resources-icons', name: '图标素材' },
      { id: 'design-resources-images', name: '可商用图库' },
      { id: 'design-resources-illustrations', name: '可商用插画' },
      { id: 'design-resources-video', name: '可商用视频' },
      { id: 'design-resources-fonts', name: '可商用字体' },
      { id: 'design-resources-mockups', name: '样机素材' },
      { id: 'design-resources-fontwebsites', name: '字体网站' },
      { id: 'design-resources-soundeffects', name: '音效网站' },
      { id: 'design-resources-ppt', name: 'PPT资源' },
      { id: 'design-resources-3d', name: '3D素材' },
      { id: 'design-resources-3dmodels', name: '3D模型' },
      { id: 'design-resources-aepr', name: 'AE/PR模板' },
      { id: 'design-resources-cutout', name: '免抠素材' }
    ]
  },
  {
    id: 'font',
    name: '字体资源',
    description: '中英文字体下载与字体设计工具',
    iconUrl: 'font',
    color: '#9C27B0'
  },
  {
    id: 'color',
    name: '配色工具',
    description: '色彩搭配、色彩理论与调色工具',
    iconUrl: 'color',
    color: '#F44336',
    subcategories: [
      { id: 'color-palette', name: '配色方案' },
      { id: 'color-theory', name: '色彩理论' },
      { id: 'color-tools', name: '调色工具' },
      { id: 'color-inspiration', name: '配色灵感' }
    ]
  },
  {
    id: 'print',
    name: '印刷设计',
    description: '印刷品设计相关的工具与资源',
    iconUrl: 'print',
    color: '#607D8B',
    subcategories: [
      { id: 'print-business', name: '名片设计' },
      { id: 'print-brochure', name: '宣传册' },
      { id: 'print-poster', name: '海报设计' },
      { id: 'print-packaging', name: '包装设计' }
    ]
  },
  {
    id: 'graphic',
    name: '图形设计',
    description: '图形创意、标志设计等图形设计工具',
    iconUrl: 'graphic',
    color: '#4CAF50',
    subcategories: [
      { id: 'graphic-logo', name: '标志设计' },
      { id: 'graphic-illustration', name: '插画设计' },
      { id: 'graphic-icon', name: '图标设计' },
      { id: 'graphic-vector', name: '矢量图形' }
    ]
  },
  {
    id: 'brand',
    name: '品牌设计',
    description: '品牌视觉识别系统与品牌设计相关资源',
    iconUrl: 'brand',
    color: '#E91E63',
    subcategories: [
      { id: 'brand-identity', name: '品牌识别' },
      { id: 'brand-guidelines', name: '品牌规范' },
      { id: 'brand-cases', name: '品牌案例' },
      { id: 'brand-tools', name: '品牌工具' }
    ]
  },
  {
    id: 'photo',
    name: '图片处理',
    description: '图片编辑、修图与照片处理工具',
    iconUrl: 'photo',
    color: '#00BCD4',
    subcategories: [
      { id: 'photo-editing', name: '图片编辑' },
      { id: 'photo-filters', name: '滤镜效果' },
      { id: 'photo-compression', name: '图片压缩' },
      { id: 'photo-enhancement', name: '图片增强' }
    ]
  },
  {
    id: 'art',
    name: '艺术创作',
    description: '数字艺术创作与绘画工具',
    iconUrl: 'art',
    color: '#795548',
    subcategories: [
      { id: 'art-painting', name: '数字绘画' },
      { id: 'art-sketching', name: '草图绘制' },
      { id: 'art-concept', name: '概念艺术' },
      { id: 'art-tools', name: '绘画工具' }
    ]
  },
  {
    id: 'design-colleges',
    name: '设计高校',
    description: '国内外知名设计院校与艺术学院',
    iconUrl: 'education',
    color: '#FF9800',
    subcategories: [
      { id: 'design-colleges-default', name: '设计高校' }
    ]
  },
  {
    id: 'self-learning',
    name: '自学网站',
    description: '设计师自学平台与在线教育资源',
    iconUrl: 'learning',
    color: '#4FC3F7',
    subcategories: [
      { id: 'self-learning-default', name: '自学网站' }
    ]
  }
];

// 平面设计工具数据
export const designTools = [
  /* =========================================================
   * 常用工具 - 效率工具 (efficiency-tools)
   * ========================================================= */
  {
    id: 'notion',
    name: 'Notion',
    description: '全能的工作空间，支持笔记、项目管理、团队协作',
    url: 'https://www.notion.so',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['笔记工具', '项目管理', '协作'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 'todoist',
    name: 'Todoist',
    description: '专业的任务管理和待办事项工具',
    url: 'https://todoist.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['任务管理', '待办事项', '效率'],
    isHot: true,
    isFeatured: false,
  },

  /* =========================================================
   * 常用工具 - 一键抠图 (one-click-cutout)
   * ========================================================= */
  {
    id: 'removebg',
    name: 'Remove.bg',
    description: 'AI一键抠图工具，快速去除图片背景',
    url: 'https://www.remove.bg',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['抠图', 'AI', '去背景'],
    isHot: true,
    isFeatured: true,
  },

  /* =========================================================
   * 常用工具 - 在线工具 (online-tools)
   * ========================================================= */
  {
    id: 'tinypng',
    name: 'TinyPNG',
    description: '在线图片压缩工具，保持质量的同时减小文件大小',
    url: 'https://tinypng.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['图片压缩', '在线工具', '优化'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 'photopea',
    name: 'Photopea',
    description: '在线版Photoshop，免费的图片编辑器',
    url: 'https://www.photopea.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['图片编辑', '在线PS', '免费'],
    isHot: true,
    isFeatured: true,
  },

  /* =========================================================
   * 常用工具 - 协同办公 (collaborative-office)
   * ========================================================= */
  {
    id: 'slack',
    name: 'Slack',
    description: '团队沟通和协作平台',
    url: 'https://slack.com',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: ['团队协作', '沟通', '办公'],
    isHot: true,
    isFeatured: false,
  },
  {
    id: 'zoom',
    name: 'Zoom',
    description: '视频会议和远程协作工具',
    url: 'https://zoom.us',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: ['视频会议', '远程办公', '协作'],
    isHot: true,
    isFeatured: false,
  },

  /* =========================================================
   * 常用工具 - 在线配色 (online-color)
   * ========================================================= */
  {
    id: 'coolors-tool',
    name: 'Coolors',
    description: '快速生成配色方案的在线工具',
    url: 'https://coolors.co',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['配色', '调色板', '在线工具'],
    isHot: true,
    isFeatured: true,
  },

  /* =========================================================
   * 常用工具 - 在线文档 (online-docs)
   * ========================================================= */
  {
    id: 'google-docs',
    name: 'Google Docs',
    description: '免费的在线文档编辑和协作工具',
    url: 'https://docs.google.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['在线文档', '协作', '免费'],
    isHot: true,
    isFeatured: false,
  },

  /* =========================================================
   * 常用工具 - 在线生成 (online-generator)
   * ========================================================= */
  {
    id: 'favicon-generator',
    name: 'Favicon Generator',
    description: '在线favicon图标生成器',
    url: 'https://favicon.io',
    category: 'common-tools',
    subcategory: 'online-generator',
    tags: ['favicon', '图标生成', '在线工具'],
    isHot: false,
    isFeatured: false,
  },

  /* =========================================================
   * 常用工具 - 格式转换 (format-conversion)
   * ========================================================= */
  {
    id: 'convertio',
    name: 'Convertio',
    description: '在线文件格式转换工具，支持多种格式',
    url: 'https://convertio.co',
    category: 'common-tools',
    subcategory: 'format-conversion',
    tags: ['格式转换', '在线工具', '文件转换'],
    isHot: true,
    isFeatured: false,
  },

  /* =========================================================
   * 平面灵感 - 平面灵感 (inspiration-general)
   * ========================================================= */
  {
    id: 'designspiration',
    name: 'DesignSpiration',
    description: '全球设计灵感与创意图片资源分享平台',
    url: 'https://www.designspiration.com/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['设计灵感', '创意图片', '资源分享'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.designspiration.com'
  },
  {
    id: 'behance',
    name: 'Behance',
    description: 'Adobe旗下全球最大的创意作品展示平台',
    url: 'https://www.behance.net/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['作品展示', '创意平台', '设计师社区'],
    isHot: true,
    isFeatured: true,
    rating: 4.8,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.behance.net'
  },
  {
    id: 'dribbble',
    name: 'Dribbble',
    description: '设计师社区，优秀设计作品分享平台',
    url: 'https://dribbble.com',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['设计社区', '作品展示', '设计灵感'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    description: '丰富的视觉素材平台，支持瀑布流浏览和收藏',
    url: 'http://www.pinterest.com',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['视觉素材', '灵感收集', '创意平台'],
    isHot: true,
    isFeatured: false,
    rating: 4.5,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.pinterest.com'
  },
  {
    id: 'inspirationgrid',
    name: 'Inspiration Grid',
    description: '加拿大设计灵感网站，每日更新高质量创意作品',
    url: 'https://theinspirationgrid.com',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['设计灵感', '创意作品', '每日更新'],
    isHot: false,
    isFeatured: false,
    rating: 4.2,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://theinspirationgrid.com'
  },
  {
    id: 'zcool',
    name: '站酷 ZCOOL',
    description: '中国最大的设计师互动平台，汇聚优秀设计作品和创意灵感',
    url: 'https://www.zcool.com.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['中国设计', '设计师社区', '作品展示', '创意灵感'],
    isHot: true,
    isFeatured: true,
    rating: 4.8,
    iconUrl: 'https://static.zcool.cn/git_z/z/site/favicon.ico'
  },
  {
    id: 'uied-pingmian',
    name: 'UIED平面文章',
    description: 'UIED平面设计文章专栏，提供优质的平面设计教程、技巧和行业资讯',
    url: 'https://www.uied.cn/category/wenzhang/pingmian-wenzhang',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['平面设计', '设计教程', '设计文章', 'UIED'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png'
  },
  {
    id: 'reeoo',
    name: 'Reeoo',
    description: '中国优秀网页设计灵感库，收录国内外优秀网站设计案例',
    url: 'https://reeoo.com/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['网页设计', '设计灵感', '中国设计', '案例收录'],
    isHot: false,
    isFeatured: true,
    rating: 4.3,
    iconUrl: 'https://reeoo.com/favicon.ico'
  },
  {
    id: 'iconfont',
    name: 'Iconfont阿里巴巴矢量图标库',
    description: '阿里巴巴矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
    url: 'https://www.iconfont.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['矢量图标', '阿里巴巴', '图标库', '免费下载'],
    isHot: true,
    isFeatured: true,
    rating: 4.7,
    iconUrl: 'https://www.iconfont.cn/favicon.ico'
  },
  {
    id: 'chuangkit',
    name: '创客贴',
    description: '极简的平面设计工具，让每个人都能轻松做设计',
    url: 'https://www.chuangkit.com/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['在线设计', '平面设计', '设计工具', '模板设计'],
    isHot: true,
    isFeatured: false,
    rating: 4.4,
    iconUrl: 'https://www.chuangkit.com/favicon.ico'
  },
  {
    id: 'yestone',
    name: '野兽派设计',
    description: '专业的设计师社区，分享创意设计作品和设计灵感',
    url: 'https://www.yestone.com/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['设计师社区', '创意作品', '设计灵感', '中国设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.1,
    iconUrl: 'https://www.yestone.com/favicon.ico'
  },
  {
    id: 'huaban',
    name: '花瓣网',
    description: '设计师寻找灵感的天堂！图片素材领导者，帮你采集、发现网络上你喜欢的事物',
    url: 'https://huaban.com/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['设计灵感', '图片素材', '采集工具', '创意收集'],
    isHot: true,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://huaban.com/favicon.ico'
  },
  {
    id: 'doooor',
    name: 'Doooor设计门',
    description: '设计师的网址导航，收录优质设计网站和工具',
    url: 'https://www.doooor.com/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['设计导航', '设计工具', '网址收录', '中国导航'],
    isHot: false,
    isFeatured: true,
    rating: 4.2,
    iconUrl: 'https://www.doooor.com/favicon.ico'
  },
  {
    id: 'seeseed',
    name: 'Seeseed无穷尽设计可能',
    description: '发现设计灵感，分享创意作品，连接设计师与设计爱好者',
    url: 'https://www.seeseed.com/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['设计灵感', '创意作品', '设计师社区', '设计分享'],
    isHot: false,
    isFeatured: false,
    rating: 4.0,
    iconUrl: 'https://www.seeseed.com/favicon.ico'
  },
  {
    id: 'logofree-cn',
    name: 'LogoFree',
    description: '免费在线Logo设计生成器，3分钟制作公司Logo',
    url: 'https://www.logofree.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo设计', '在线生成', '免费工具', '中国工具'],
    isHot: true,
    isFeatured: true,
    rating: 4.3
  },
  {
    id: 'nipic',
    name: '昵图网',
    description: '中国素材共享平台，提供图片、设计模板、矢量图等素材',
    url: 'https://www.nipic.com/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['素材平台', '设计模板', '矢量图', '中国素材'],
    isHot: true,
    isFeatured: false,
    rating: 4.2
  },
  {
    id: 'fotor-cn',
    name: 'Fotor懒设计',
    description: '在线快速图片和视频编辑，不会PS也能搞定设计',
    url: 'https://www.fotor.com.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['在线设计', '图片编辑', '视频编辑', '懒设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.4
  },
  {
    id: 'qianku',
    name: '千库网',
    description: '免费PNG图片背景素材下载，设计师必备素材库',
    url: 'https://588ku.com/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['PNG素材', '背景素材', '免费下载', '设计师素材'],
    isHot: true,
    isFeatured: true,
    rating: 4.3
  },
  {
    id: 'woofeng',
    name: '我要自学网',
    description: '专业的设计教程网站，提供PS、AI、CDR等软件教程',
    url: 'https://www.51zxw.net/',
    category: 'inspiration',
    subcategory: 'inspiration-general',
    tags: ['设计教程', '软件教程', 'PS教程', '自学网'],
    isHot: false,
    isFeatured: true,
    rating: 4.1
  },

  /* =========================================================
   * 平面灵感 - 海报灵感 (inspiration-poster)
   * ========================================================= */
  {
    id: 'olly-moss',
    name: 'Olly Moss',
    description: '优秀海报设计师个人作品集，提供高质量创意海报',
    url: 'http://ollymoss.com/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['海报设计', '个人作品集', '创意设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.2,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://ollymoss.com'
  },
  {
    id: 'typographic-posters',
    name: 'Typo/graphic Posters',
    description: '专注于文字排版和图形类型海报的设计灵感资源',
    url: 'https://www.typographicposters.com/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['排版设计', '海报设计', '文字图形'],
    isHot: false,
    isFeatured: true,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.typographicposters.com'
  },
  {
    id: 'posterspy',
    name: 'PosterSpy',
    description: '电影海报设计灵感收集平台，汇集全球优秀电影海报',
    url: 'https://posterspy.com/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['电影海报', '海报设计', '设计灵感'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://posterspy.com/favicon.ico'
  },
  {
    id: 'posteritty',
    name: 'Posteritty',
    description: '海报设计灵感和模板资源平台',
    url: 'https://posteritty.com/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['海报模板', '设计灵感', '创意海报'],
    isHot: false,
    isFeatured: false,
    rating: 4.0,
    iconUrl: 'https://posteritty.com/favicon.ico'
  },
  {
    id: 'posterwall',
    name: 'Poster Wall',
    description: '海报设计作品展示和灵感分享社区',
    url: 'https://posterwall.co/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['海报展示', '设计社区', '创意分享'],
    isHot: false,
    isFeatured: false,
    rating: 3.9,
    iconUrl: 'https://posterwall.co/favicon.ico'
  },
  {
    id: 'haibao-design',
    name: '海报设计网',
    description: '专业的海报设计素材和灵感分享平台',
    url: 'https://www.haibao.design/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['海报设计', '中国设计', '设计素材', '海报灵感'],
    isHot: false,
    isFeatured: true,
    rating: 4.1,
    iconUrl: 'https://www.haibao.design/favicon.ico'
  },
  {
    id: 'fotor-poster',
    name: 'Fotor海报设计',
    description: 'Fotor在线海报设计工具，提供丰富的海报模板',
    url: 'https://www.fotor.com.cn/design/poster/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['在线设计', '海报模板', '中国工具', 'Fotor'],
    isHot: true,
    isFeatured: false,
    rating: 4.3,
    iconUrl: 'https://static.fotor.com/web/assets/images/favicon.ico'
  },
  {
    id: 'canva-cn',
    name: 'Canva可画',
    description: 'Canva中国版，免费在线设计工具，海量海报模板一键生成',
    url: 'https://www.canva.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['在线设计', 'Canva', '海报模板', '免费设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.6
  },
  {
    id: 'tubangzhu',
    name: '图帮主',
    description: '在线图片编辑器，提供海报设计、名片制作等功能',
    url: 'https://www.tubangzhu.com/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['在线编辑', '海报设计', '名片制作', '中国工具'],
    isHot: false,
    isFeatured: false,
    rating: 4.1
  },
  
  // 88设计网海报灵感资源
  {
    id: 'voicer',
    name: 'VOICER｜分享生活和设计的美学',
    description: 'VOICER 是一本分享生活美学的在線雜志, 由幾個廣告人,媒體人,設計師於 2007 年創辦于中国，上海',
    url: 'http://www.voicer.me/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['生活美学', '设计杂志', '广告设计', '中国设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.voicer.me'
  },
  {
    id: 'themovingposter',
    name: 'The Moving Poster',
    description: '动态海报设计灵感平台，专注于动态视觉设计',
    url: 'https://themovingposter.com/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['动态海报', '视觉设计', '动画设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://themovingposter.com'
  },
  {
    id: 'designspiration-poster',
    name: 'DesignSpiration海报灵感',
    description: '全球设计灵感与创意图片资源分享平台，海报设计专区',
    url: 'https://www.designspiration.com/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['设计灵感', '创意图片', '海报设计', '全球资源'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.designspiration.com'
  },
  {
    id: 'anothergraphic',
    name: 'Another Graphic',
    description: '探索全球高质量字体设计，启发视觉创意灵感',
    url: 'https://anothergraphic.org/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['字体设计', '视觉创意', '海报排版', '全球设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://anothergraphic.org'
  },
  {
    id: 'cndesign',
    name: 'CND设计网',
    description: 'CND设计网-设计领域第一网络媒体，涵盖平面设计、包装设计、室内设计等多个领域',
    url: 'http://www.cndesign.com',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['设计媒体', '平面设计', '包装设计', '中国设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.2,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.cndesign.com'
  },
  {
    id: 'typographicposters-88',
    name: 'Typo/graphic Posters',
    description: '收集不同国家设计师的平面海报设计站点，通过海报设计可以链接到设计师/工作室网站',
    url: 'https://www.typographicposters.com',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['平面海报', '设计师作品', '工作室展示', '国际设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.typographicposters.com'
  },
  {
    id: 'notefolio',
    name: 'Notefolio',
    description: '综合性设计灵感网站，内容涵盖平面设计、艺术、排版、3D、UI、品牌、插画、包装等多个领域',
    url: 'https://notefolio.net',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['设计灵感', '平面设计', '排版设计', '品牌设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.7,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://notefolio.net'
  },
  {
    id: 'pinterest-poster',
    name: 'Pinterest海报灵感',
    description: 'Pinterest海报设计专区，素材丰富，以瀑布流形式展现，无需翻页，素材自动加载',
    url: 'http://www.pinterest.com',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['海报素材', '瀑布流', '设计灵感', '图片收集'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.pinterest.com'
  },
  {
    id: 'huaban-poster',
    name: '花瓣网-海报灵感',
    description: '花瓣网海报灵感专区，设计师寻找灵感的天堂！帮你采集、发现网络上你喜欢的海报设计',
    url: 'https://huaban.com/boards/78418074',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['海报灵感', '设计采集', '中国平台', '素材收集'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://huaban.com'
  },
  {
    id: 'gaoding-poster',
    name: '稿定设计海报模板',
    description: '在线快速图片和视频编辑，海报、简历、PPT、公众号配图等海量模板快速出图',
    url: 'https://www.gaoding.com/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['在线设计', '海报模板', '快速出图', '中国工具'],
    isHot: true,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gaoding.com'
  },
  {
    id: 'digitaling-poster',
    name: '数英网海报案例',
    description: '数英网海报设计案例专区，大中华区数字媒体平台，涵盖市场营销、广告传媒、创意设计等领域',
    url: 'https://www.digitaling.com/search/projects/?kw=海报',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['海报案例', '广告设计', '创意设计', '中国平台'],
    isHot: false,
    isFeatured: true,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.digitaling.com'
  },
  {
    id: 'gradienta',
    name: 'Gradienta高级渐变背景',
    description: '高级渐变背景素材库，为海报设计提供优质的渐变背景资源',
    url: 'https://gradienta.io/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['渐变背景', '海报背景', '色彩设计', '背景素材'],
    isHot: false,
    isFeatured: false,
    rating: 4.2,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://gradienta.io'
  },
  {
    id: 'inspirationde',
    name: 'Inspiration DE',
    description: '超强灵感社区，在线设计灵感来源，涵盖摄影、室内、网页设计、UI和UX、数字艺术、插画、平面设计等',
    url: 'https://www.inspirationde.com/',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['设计灵感', '灵感社区', '平面设计', '数字艺术'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.inspirationde.com'
  },
  {
    id: 'meiye-poster',
    name: '美叶海报参考',
    description: '美叶为设计师、创意人提供有价值的海报设计参考，灵感采集，优质素材获取',
    url: 'https://www.meiye.art/flag',
    category: 'inspiration',
    subcategory: 'inspiration-poster',
    tags: ['海报参考', '设计参考', '灵感采集', '中国平台'],
    isHot: false,
    isFeatured: true,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.meiye.art'
  },

  /* =========================================================
   * 平面灵感 - Logo灵感 (inspiration-logo)
   * ========================================================= */
  {
    id: 'logopond',
    name: 'Logopond',
    description: '专业的Logo、品牌和视觉识别设计灵感平台',
    url: 'https://logopond.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo设计', '品牌设计', '视觉识别'],
    isHot: false,
    isFeatured: false,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://logopond.com'
  },
  {
    id: 'logolounge',
    name: 'LogoLounge',
    description: '全球最大的Logo设计灵感和展示平台',
    url: 'https://www.logolounge.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo设计', '品牌标识', '设计灵感'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://www.logolounge.com/favicon.ico'
  },
  {
    id: 'logospire',
    name: 'LogoSpire',
    description: 'Logo设计灵感收集和分享平台',
    url: 'https://logospire.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo灵感', '标志设计', '品牌设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.1,
    iconUrl: 'https://logospire.com/favicon.ico'
  },
  {
    id: 'logobook',
    name: 'LogoBook',
    description: '经典Logo设计案例和品牌标识收藏',
    url: 'https://www.logobook.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['经典Logo', '品牌标识', '设计案例'],
    isHot: false,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://www.logobook.com/favicon.ico'
  },
  {
    id: 'logoed',
    name: 'Logoed',
    description: 'Logo设计趋势和创意标识展示平台',
    url: 'https://logoed.co.uk/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo趋势', '创意标识', '设计展示'],
    isHot: false,
    isFeatured: false,
    rating: 4.0,
    iconUrl: 'https://logoed.co.uk/favicon.ico'
  },
  {
    id: 'logo123',
    name: 'Logo123',
    description: '中国专业的Logo设计平台，提供Logo设计服务和灵感',
    url: 'https://www.logo123.net/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo设计', '中国平台', '品牌设计', 'Logo服务'],
    isHot: false,
    isFeatured: true,
    rating: 4.2,
    iconUrl: 'https://www.logo123.net/favicon.ico'
  },
  {
    id: 'logofree',
    name: 'LogoFree',
    description: '免费Logo在线制作工具，提供丰富的Logo模板和设计灵感',
    url: 'https://www.logofree.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['免费Logo', '在线制作', '中国工具', 'Logo模板'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://www.logofree.cn/favicon.ico'
  },

  // 新增88sheji数据中的Logo网站
  {
    id: 'logo123-design',
    name: 'LOGO123',
    description: 'Logo设计，简单就像1，2，3！一个专业的公司logo设计平台',
    url: 'https://www.logo123.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo设计', '公司标识', '专业平台'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.logo123.com'
  },
  {
    id: 'ai-logo123',
    name: '123LOGO生成器',
    description: 'LOGO123旗下的AI智能LOGO生成器，在线生成公司LOGO设计，企业VI等打造个性品牌',
    url: 'https://ai.logo123.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['AI设计', 'Logo生成器', '企业VI', '品牌设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.7,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ai.logo123.com'
  },
  {
    id: 'youicons-logo',
    name: 'YouIcons Logo库',
    description: '提供260万+的LOGO资源！支持免费下载高清分辨率800px的LOGO，满足不同行业和品牌需求',
    url: 'https://cn.youicons.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo资源库', '免费下载', '高清素材', 'Logo灵感'],
    isHot: true,
    isFeatured: true,
    rating: 4.8,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cn.youicons.com'
  },
  {
    id: 'uugai-logo',
    name: 'U钙网Logo制作',
    description: '智能AI商标logo设计，100%原创，仅需输入文字即可自助设计专业精美的LOGO，无限制免费下载',
    url: 'https://www.uugai.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['AI Logo', '智能设计', '免费制作', '中国工具'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.uugai.com'
  },
  {
    id: 'logodust-free',
    name: 'Logodust',
    description: '提供免费LOGO设计案例下载，每周二更新免费LOGO图案设计，可免费下载用于商业项目',
    url: 'https://logodust.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['免费Logo', '商业项目', '设计案例', '每周更新'],
    isHot: false,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://logodust.com/favicon.ico'
  },
  {
    id: 'logotyp-us',
    name: 'Logotyp.us',
    description: '小众但非常好用的品牌矢量logo下载网站，界面简约漂亮，功能强大',
    url: 'https://logotyp.us/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['矢量Logo', '品牌标识', '免费下载', '简约界面'],
    isHot: false,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://logotyp.us'
  },
  {
    id: 'logosc-biaoxiaozhi',
    name: '标小智LOGO神器',
    description: 'LOGO设计神器，公司logo在线设计生成器，专业的标志设计工具',
    url: 'https://www.logosc.cn/logo/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo生成器', '在线设计', '公司标识', '中国工具'],
    isHot: true,
    isFeatured: false,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.logosc.cn/logo'
  },
  {
    id: 'logobook-gallery',
    name: 'Logobook Gallery',
    description: '展示世界上最好的标志设计灵感，拥有超过5000个标识，可按设计师、形状、对象和风格搜索',
    url: 'http://www.logobook.com/',
    category: 'inspiration',
    subcategory: 'inspiration-logo',
    tags: ['Logo画廊', '设计灵感', '标志展示', '搜索功能'],
    isHot: false,
    isFeatured: true,
    rating: 4.7,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.logobook.com'
  },

  /* =========================================================
   * 平面灵感 - 包装灵感 (inspiration-packaging)
   * ========================================================= */
  {
    id: 'dieline',
    name: 'Dieline',
    description: '专注于包装设计的媒体社区，展示全球优秀包装设计作品',
    url: 'https://thedieline.com/',
    category: 'inspiration',
    subcategory: 'inspiration-packaging',
    tags: ['包装设计', '设计社区', '创意平台'],
    isHot: true,
    isFeatured: true,
    rating: 4.7,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://thedieline.com'
  },
  {
    id: 'packaging-of-the-world',
    name: 'Packaging of the World',
    description: '全球包装设计作品展示和灵感分享平台',
    url: 'https://packagingoftheworld.com/',
    category: 'inspiration',
    subcategory: 'inspiration-packaging',
    tags: ['包装设计', '全球作品', '设计灵感'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://packagingoftheworld.com/favicon.ico'
  },
  {
    id: 'lovely-package',
    name: 'Lovely Package',
    description: '精美包装设计作品收集和展示网站',
    url: 'https://lovelypackage.com/',
    category: 'inspiration',
    subcategory: 'inspiration-packaging',
    tags: ['精美包装', '设计作品', '包装灵感'],
    isHot: false,
    isFeatured: false,
    rating: 4.3,
    iconUrl: 'https://lovelypackage.com/favicon.ico'
  },
  {
    id: 'packagingdesignarchive',
    name: 'Packaging Design Archive',
    description: '包装设计历史档案和经典案例收藏',
    url: 'https://packagingdesignarchive.org/',
    category: 'inspiration',
    subcategory: 'inspiration-packaging',
    tags: ['包装历史', '经典案例', '设计档案'],
    isHot: false,
    isFeatured: false,
    rating: 4.1,
    iconUrl: 'https://packagingdesignarchive.org/favicon.ico'
  },
  {
    id: 'package-cn',
    name: '包装设计网',
    description: '中国专业的包装设计行业门户网站',
    url: 'http://www.pkg.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-packaging',
    tags: ['包装设计', '中国门户', '行业资讯', '包装行业'],
    isHot: false,
    isFeatured: true,
    rating: 4.2,
    iconUrl: 'http://www.pkg.cn/favicon.ico'
  },
  {
    id: 'pack-age',
    name: 'Pack Age包装时代',
    description: '包装行业专业媒体，关注包装设计和技术创新',
    url: 'https://www.pack-age.com/',
    category: 'inspiration',
    subcategory: 'inspiration-packaging',
    tags: ['包装媒体', '设计创新', '包装技术', '中国包装'],
    isHot: false,
    isFeatured: false,
    rating: 4.0,
    iconUrl: 'https://www.pack-age.com/favicon.ico'
  },
  {
    id: 'baozhuan-design',
    name: '包装圈',
    description: '包装行业门户网站，提供包装设计、包装材料、包装技术等信息',
    url: 'http://www.baozhuan.com/',
    category: 'inspiration',
    subcategory: 'inspiration-packaging',
    tags: ['包装行业', '包装技术', '行业门户', '包装材料'],
    isHot: false,
    isFeatured: false,
    rating: 3.9
  },

  /* =========================================================
   * 平面灵感 - 品牌灵感 (inspiration-branding)
   * ========================================================= */
  {
    id: 'notefolio',
    name: 'Notefolio',
    description: '韩国综合性设计交流网站，涵盖多个设计领域',
    url: 'https://notefolio.net',
    category: 'inspiration',
    subcategory: 'inspiration-branding',
    tags: ['设计交流', '综合设计', '创作经验'],
    isHot: false,
    isFeatured: false,
    rating: 4.2,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://notefolio.net'
  },
  {
    id: 'brand-new',
    name: 'Brand New',
    description: '专注于品牌设计和企业形象的权威评论网站',
    url: 'https://www.underconsideration.com/brandnew/',
    category: 'inspiration',
    subcategory: 'inspiration-branding',
    tags: ['品牌设计', '企业形象', '设计评论'],
    isHot: true,
    isFeatured: true,
    rating: 4.7,
    iconUrl: 'https://www.underconsideration.com/favicon.ico'
  },
  {
    id: 'bp-o',
    name: 'BP&O',
    description: '品牌包装和观点分享平台，展示优秀品牌设计',
    url: 'https://bpando.org/',
    category: 'inspiration',
    subcategory: 'inspiration-branding',
    tags: ['品牌包装', '品牌设计', '设计观点'],
    isHot: false,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://bpando.org/favicon.ico'
  },
  {
    id: 'mindsparklemag',
    name: 'Mindsparkle Mag',
    description: '创意品牌设计和视觉传达作品展示杂志',
    url: 'https://mindsparklemag.com/',
    category: 'inspiration',
    subcategory: 'inspiration-branding',
    tags: ['品牌设计', '视觉传达', '创意杂志'],
    isHot: false,
    isFeatured: false,
    rating: 4.1,
    iconUrl: 'https://mindsparklemag.com/favicon.ico'
  },
  {
    id: 'brandingchina',
    name: '品牌中国网',
    description: '中国品牌建设和品牌设计的专业平台',
    url: 'http://www.brandcn.com/',
    category: 'inspiration',
    subcategory: 'inspiration-branding',
    tags: ['品牌建设', '中国品牌', '品牌设计', '品牌资讯'],
    isHot: false,
    isFeatured: true,
    rating: 4.2,
    iconUrl: 'http://www.brandcn.com/favicon.ico'
  },
  {
    id: 'vi-china',
    name: 'VI设计网',
    description: '专注于VI设计和企业形象设计的中国专业网站',
    url: 'https://www.vi-china.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-branding',
    tags: ['VI设计', '企业形象', '中国设计', '品牌识别'],
    isHot: false,
    isFeatured: false,
    rating: 4.0,
    iconUrl: 'https://www.vi-china.cn/favicon.ico'
  },

  /* =========================================================
   * 平面灵感 - 字体灵感 (inspiration-typography)
   * ========================================================= */
  {
    id: 'another-graphic',
    name: 'Another Graphic',
    description: '探索全球高质量字体设计，启发视觉创意灵感',
    url: 'https://anothergraphic.org/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['字体设计', '视觉创意', '设计灵感'],
    isHot: false,
    isFeatured: true,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://anothergraphic.org'
  },
  {
    id: 'typewolf',
    name: 'Typewolf',
    description: '网站字体设计灵感和字体识别工具',
    url: 'https://www.typewolf.com/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['字体识别', '网站字体', '字体灵感'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://www.typewolf.com/favicon.ico'
  },
  {
    id: 'fonts-in-use',
    name: 'Fonts In Use',
    description: '字体在实际设计中的应用案例展示',
    url: 'https://fontsinuse.com/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['字体应用', '设计案例', '字体展示'],
    isHot: false,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://fontsinuse.com/favicon.ico'
  },
  {
    id: 'typography-guru',
    name: 'Typography Guru',
    description: '字体设计教程和排版技巧分享平台',
    url: 'https://typography.guru/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['字体教程', '排版技巧', '字体设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.1,
    iconUrl: 'https://typography.guru/favicon.ico'
  },
  {
    id: 'typeface-review',
    name: 'Typeface Review',
    description: '专业字体评论和字体设计分析网站',
    url: 'https://typefacereviews.com/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['字体评论', '字体分析', '专业评测'],
    isHot: false,
    isFeatured: false,
    rating: 4.0,
    iconUrl: 'https://typefacereviews.com/favicon.ico'
  },
  {
    id: 'zitixiazai',
    name: '字体下载网',
    description: '免费中文字体下载和字体设计灵感分享平台',
    url: 'https://www.zitixiazai.org/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['中文字体', '字体下载', '免费字体', '字体设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://www.zitixiazai.org/favicon.ico'
  },
  {
    id: 'fontke',
    name: '字客网',
    description: '中国专业的字体设计和字体下载平台',
    url: 'https://www.fontke.com/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['字体设计', '中国字体', '字体平台', '字体资源'],
    isHot: true,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://www.fontke.com/favicon.ico'
  },
  {
    id: 'hellofont',
    name: 'HelloFont',
    description: '字由出品的字体设计和应用展示平台',
    url: 'https://www.hellofont.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['字体应用', '字由', '字体展示', '中国字体'],
    isHot: false,
    isFeatured: false,
    rating: 4.2,
    iconUrl: 'https://www.hellofont.cn/favicon.ico'
  },
  {
    id: 'ziticq',
    name: '字体传奇网',
    description: '中国字体设计第一站，提供字体设计、字体下载、字体教程',
    url: 'http://www.ziticq.com/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['字体设计', '字体下载', '字体教程', '中国字体'],
    isHot: false,
    isFeatured: true,
    rating: 4.3
  },
  {
    id: 'qiuziti',
    name: '求字体网',
    description: '提供中英文字体识别、字体下载、字体预览等服务',
    url: 'http://www.qiuziti.com/',
    category: 'inspiration',
    subcategory: 'inspiration-typography',
    tags: ['字体识别', '字体下载', '字体预览', '中文字体'],
    isHot: true,
    isFeatured: true,
    rating: 4.4
  },

  /* =========================================================
   * 平面灵感 - 设计杂志 (inspiration-magazine)
   * ========================================================= */
  {
    id: 'voicer',
    name: 'VOICER',
    description: '分享生活和设计的美学在线杂志，专注于设计文化交流',
    url: 'http://www.voicer.me/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['设计美学', '生活杂志', '创意资讯'],
    isHot: false,
    isFeatured: false,
    rating: 4.1,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.voicer.me'
  },
  {
    id: 'its-nice-that',
    name: 'It\'s Nice That',
    description: '优质设计文章和素材集合，提供丰富的创意资源',
    url: 'https://www.itsnicethat.com/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['设计文章', '创意素材', '设计杂志'],
    isHot: false,
    isFeatured: false,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.itsnicethat.com'
  },
  {
    id: 'topys',
    name: 'TOPYS',
    description: '抢先知晓全球最新鲜、最棒的创意资讯，扩充你的灵感库',
    url: 'https://www.topys.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['创意资讯', '设计灵感', '全球创意'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.topys.cn'
  },
  {
    id: 'creative-boom',
    name: 'Creative Boom',
    description: '英国设计杂志，专注于介绍艺术家和设计师作品',
    url: 'https://www.creativeboom.com/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['设计杂志', '艺术家', '设计师'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.creativeboom.com'
  },
  {
    id: 'design-milk-cn',
    name: '设计牛奶',
    description: '关注创意设计和生活美学的中文设计媒体',
    url: 'https://www.design-milk.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['设计媒体', '生活美学', '创意设计', '中文杂志'],
    isHot: false,
    isFeatured: true,
    rating: 4.2,
    iconUrl: 'https://www.design-milk.cn/favicon.ico'
  },
  {
    id: 'arting365',
    name: 'Arting365',
    description: '中国创意产业第一门户，关注设计、艺术和创意文化',
    url: 'http://www.arting365.com/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['创意产业', '设计门户', '艺术文化', '中国创意'],
    isHot: false,
    isFeatured: false,
    rating: 4.1,
    iconUrl: 'http://www.arting365.com/favicon.ico'
  },
  {
    id: 'ad518',
    name: 'AD518',
    description: '最设计，中国设计师网上家园，分享创意设计资讯',
    url: 'http://www.ad518.com/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['设计师社区', '创意资讯', '中国设计', '设计分享'],
    isHot: false,
    isFeatured: true,
    rating: 4.2,
    iconUrl: 'http://www.ad518.com/favicon.ico'
  },
  {
    id: 'thetype',
    name: 'The Type',
    description: '字体与版式设计媒体，关注中文字体设计和排版艺术',
    url: 'https://www.thetype.com/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['字体设计', '版式设计', '排版艺术', '设计媒体'],
    isHot: false,
    isFeatured: true,
    rating: 4.3
  },
  {
    id: 'designboom-cn',
    name: 'Designboom中文版',
    description: '国际知名设计媒体Designboom的中文版，报道全球设计动态',
    url: 'https://www.designboom.cn/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['国际设计', '设计动态', '设计媒体', '全球视野'],
    isHot: false,
    isFeatured: false,
    rating: 4.1
  },
  {
    id: 'shejizhongguowang',
    name: '设计中国网',
    description: '中国设计行业门户网站，提供设计资讯、作品展示、设计教育',
    url: 'http://www.designchina.me/',
    category: 'inspiration',
    subcategory: 'inspiration-magazine',
    tags: ['设计门户', '行业资讯', '作品展示', '设计教育'],
    isHot: false,
    isFeatured: false,
    rating: 4.0
  },

  /* =========================================================
   * 平面灵感 - 设计师作品集 (inspiration-portfolio)
   * ========================================================= */
  {
    id: 'cargo-collective',
    name: 'Cargo Collective',
    description: '优秀设计作品网站集合，涵盖多个创意领域',
    url: 'https://cargo.site',
    category: 'inspiration',
    subcategory: 'inspiration-portfolio',
    tags: ['作品集', '创意网站', '设计师'],
    isHot: false,
    isFeatured: false,
    rating: 4.1,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cargo.site'
  },
  {
    id: 'awwwards',
    name: 'Awwwards',
    description: '全球最佳网站设计作品展示和评选平台',
    url: 'https://www.awwwards.com/',
    category: 'inspiration',
    subcategory: 'inspiration-portfolio',
    tags: ['网站设计', '作品展示', '设计评选'],
    isHot: true,
    isFeatured: true,
    rating: 4.8,
    iconUrl: 'https://www.awwwards.com/favicon.ico'
  },
  {
    id: 'siteinspire',
    name: 'SiteInspire',
    description: '网站设计灵感和优秀案例收集平台',
    url: 'https://www.siteinspire.com/',
    category: 'inspiration',
    subcategory: 'inspiration-portfolio',
    tags: ['网站灵感', '设计案例', '作品收集'],
    isHot: false,
    isFeatured: true,
    rating: 4.3,
    iconUrl: 'https://www.siteinspire.com/favicon.ico'
  },
  {
    id: 'httpster',
    name: 'Httpster',
    description: '精选网站设计作品和创意网站展示',
    url: 'https://httpster.net/',
    category: 'inspiration',
    subcategory: 'inspiration-portfolio',
    tags: ['网站作品', '创意网站', '设计精选'],
    isHot: false,
    isFeatured: false,
    rating: 4.0,
    iconUrl: 'https://httpster.net/favicon.ico'
  },
  {
    id: 'onepagelove',
    name: 'One Page Love',
    description: '单页网站设计灵感和模板资源',
    url: 'https://onepagelove.com/',
    category: 'inspiration',
    subcategory: 'inspiration-portfolio',
    tags: ['单页设计', '网站模板', '设计灵感'],
    isHot: false,
    isFeatured: false,
    rating: 4.2,
    iconUrl: 'https://onepagelove.com/favicon.ico'
  },
  {
    id: 'lofter',
    name: 'LOFTER',
    description: '网易LOFTER，让兴趣，更有趣！设计师作品展示平台',
    url: 'https://www.lofter.com/',
    category: 'inspiration',
    subcategory: 'inspiration-portfolio',
    tags: ['作品展示', '设计师社区', '网易', '中国平台'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://www.lofter.com/favicon.ico'
  },
  {
    id: 'tuchong',
    name: '图虫网',
    description: '优质摄影师和设计师作品分享社区',
    url: 'https://tuchong.com/',
    category: 'inspiration',
    subcategory: 'inspiration-portfolio',
    tags: ['摄影作品', '设计作品', '作品社区', '中国摄影'],
    isHot: true,
    isFeatured: false,
    rating: 4.4,
    iconUrl: 'https://tuchong.com/favicon.ico'
  },
  {
    id: 'zcool-portfolio',
    name: '站酷作品集',
    description: '站酷设计师个人作品集展示平台',
    url: 'https://www.zcool.com.cn/discover',
    category: 'inspiration',
    subcategory: 'inspiration-portfolio',
    tags: ['个人作品集', '站酷', '设计师展示', '中国设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://static.zcool.cn/git_z/z/site/favicon.ico'
  },
/* =========================================================
   * 设计素材 - 图标素材 (design-resources-icons)
   * ========================================================= */
  // 1. Ionicons
  {
    id: 'ionic',
    name: 'Ionicons',
    description: '免费开源、高性能图标库，适用于Web、APP和桌面应用，由知名混合开发框架Ionic团队开发',
    url: 'https://ionic.io/ionicons',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ionic.io/ionicons',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '开源', '前端', '免费', '移动端'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. Doodle Icons
  {
    id: 'khushmeen',
    name: 'Doodle Icons',
    description: '免费商用涂鸦风格图标库，提供独特且充满活力的设计资源',
    url: 'https://khushmeen.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://khushmeen.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['涂鸦', '图标', '商用', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 3. Untitled UI Icons
  {
    id: 'untitledui',
    name: 'Untitled UI Icons',
    description: '终极免费图标库，提供干净、一致和中性的现代UI设计图标',
    url: 'https://www.untitledui.com/icons',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.untitledui.com/icons',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['UI', '图标', '免费', '设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 4. MacOS App Icons
  {
    id: 'macosicons',
    name: 'MacOS App Icons',
    description: '免费高清macOS风格图标库，提供5000+图标，支持icon格式下载，完全开源',
    url: 'https://macosicons.com/#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://macosicons.com/#',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['macOS', '图标', '开源', '免费', '应用'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 5. Streamline Icons
  {
    id: 'streamlinehq',
    name: 'Streamline 像素风图标',
    description: '提供177,000+像素风格SVG图标，包含线性、填充、粗体、彩色等多种风格，支持免费下载',
    url: 'https://www.streamlinehq.com/icons/pixel?tab=free',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.streamlinehq.com/icons/pixel?tab=free',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['像素风', 'SVG', '图标', '免费', '彩色'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 6. Flaticon
  {
    id: 'flaticon',
    name: 'Flaticon在线图标库',
    description: '提供3000+在线图标，支持多种风格和形状选择，可下载PNG、SVG、EPS、PSD和CSS格式',
    url: 'https://www.flaticon.com/icon-fonts-most-downloaded',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.flaticon.com/icon-fonts-most-downloaded',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['在线', '图标', '多格式', 'SVG'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 7. Iconbuddy
  {
    id: 'iconbuddy',
    name: 'Iconbuddy',
    description: '免费开源图标管理器，提供10万+开源图标，支持多种格式导出，适用于网页设计和应用开发',
    url: 'https://iconbuddy.app/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iconbuddy.app',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['管理器', '图标', '开源', '免费', '多格式'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 8. Reshot
  {
    id: 'reshot',
    name: 'Reshot',
    description: '免费商用的图标和插画素材库，提供40000+图标素材和1500+插画素材，支持任何商业项目使用',
    url: 'https://www.reshot.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.reshot.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['商用', '图标', '插画', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 9. MingCute
  {
    id: 'mingcute',
    name: 'MingCute极简风图标库',
    description: '极简风格开源图标库，包含线性和填充两种形式，1800+款图标，支持SVG和PNG格式下载',
    url: 'https://www.mingcute.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mingcute.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['极简', '图标', '开源', 'SVG', '中文'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 10. IconArchive
  {
    id: 'iconarchive',
    name: 'IconArchive',
    description: '提供750000+免费图标资源，专业图标搜索引擎，支持SVG、PNG、ICO、ICNS格式，大部分可商用',
    url: 'https://www.iconarchive.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.iconarchive.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['搜索引擎', '图标', '资源', '免费', '多格式'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 11. Iconhunt
  {
    id: 'iconhunt',
    name: 'Iconhunt',
    description: '免费开源的图标搜索引擎，帮助设计师在繁多的图标中快速定位并轻松使用',
    url: 'https://www.iconhunt.site/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.iconhunt.site',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['搜索引擎', '图标', '开源', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 12. ByteDance IconPark
  {
    id: 'iconpark',
    name: 'ByteDance IconPark',
    description: '字节跳动开发的图标库，提供丰富多样的高质量图标资源',
    url: 'https://iconpark.oceanengine.com/official',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iconpark.oceanengine.com/official',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['字节跳动', '图标', '中文', '官方'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },

  // 13. Dotown
  {
    id: 'dotown',
    name: 'Dotown',
    description: '日系可爱的像素风格图标和头像素材库，支持商用，风格独特',
    url: 'https://dotown.maeda-design-room.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://dotown.maeda-design-room.net',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['像素风', '头像', '图标', '日系', '商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 14. Tabler Icons
  {
    id: 'tabler-icons',
    name: 'Tabler Icons',
    description: '超过2150个免费开源SVG图标，设计简洁一致，适用于网站和应用程序开发',
    url: 'https://tabler-icons.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tabler-icons.io',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['SVG', '图标', '开源', '免费', '前端'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },
  
  // 15. Iconscout
  {
    id: 'iconscout',
    name: 'Iconscout',
    description: '提供470万+高质量矢量图标、插图、3D资源和Lottie动画，支持静态和动态格式',
    url: 'https://iconscout.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iconscout.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['动画', '图标', '3D', '插图', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 16. Iconoir
  {
    id: 'iconoir',
    name: 'Iconoir',
    description: '简洁精致的手工制作SVG图标库，提供统一风格的开源图标',
    url: 'https://iconoir.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iconoir.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['SVG', '图标', '开源', '手工', '简约'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 17. Iconsax
  {
    id: 'iconsax',
    name: 'Iconsax',
    description: 'Vuesax框架的官方图标库，可免费用于个人和商业用途，风格统一',
    url: 'https://iconsax.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iconsax.io',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['Vue', '图标', '开源', '商用', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 18. Phosphor Icons
  {
    id: 'phosphoricons',
    name: 'Phosphor Icons',
    description: '灵活的图标系列，用于界面、图表和演示，风格现代简洁',
    url: 'https://phosphoricons.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://phosphoricons.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['现代', '图标', '界面', '图表', '简洁'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 19. Icon Ninja
  {
    id: 'iconninja',
    name: 'Icon Ninja',
    description: '收集700,000+免费图标，包含16,000+图标集，支持矢量和透明PNG格式，可生成CSS sprites',
    url: 'https://www.iconninja.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.iconninja.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['集合', '图标', 'CSS', '免费', '多格式'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 20. The Noun Project
  {
    id: 'thenounproject',
    name: 'The Noun Project',
    description: '最多样化的图标和照片集合，支持SVG和PNG下载，超过300万优质图标和照片',
    url: 'https://thenounproject.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://thenounproject.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['多样化', '图标', '照片', 'SVG', '集合'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 21. Iconmonstr
  {
    id: 'iconmonstr',
    name: 'Iconmonstr',
    description: '简约风格的免费图标资源库，提供统一风格的SVG和PNG格式图标',
    url: 'https://iconmonstr.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iconmonstr.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['简约', '图标', 'SVG', '免费', '统一风格'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 22. Iconfinder
  {
    id: 'iconfinder',
    name: 'Iconfinder',
    description: '专业的图标搜索平台，提供海量高质量图标，部分免费部分付费',
    url: 'https://www.iconfinder.com/icons',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.iconfinder.com/icons',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['专业', '图标', '搜索', '高质量'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  
  // 23. Arco IconBox
  {
    id: 'arco',
    name: 'Arco IconBox',
    description: '字节跳动官方图标平台，提供企业级产品设计所需的高质量图标资源',
    url: 'https://arco.design/iconbox/libs',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://arco.design/iconbox/libs',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['字节跳动', '图标', '企业级', '设计', '中文'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 24. Favicon Generator
  {
    id: 'favicon-generator',
    name: 'Favicon Generator',
    description: '网站图标生成工具，支持将PNG/JPG/GIF转换为ICO格式，创建favicon和移动应用图标',
    url: 'https://www.favicon-generator.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.favicon-generator.org',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['网站图标', '转换', '生成器', '移动端', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 25. IcoMoon
  {
    id: 'icomoon',
    name: 'IcoMoon',
    description: '图标字体和SVG图标集合，可自定义选择和导出需要的图标，支持图标字体生成',
    url: 'https://icomoon.io/app/#/select',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://icomoon.io/app/#/select',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标字体', 'SVG', '图标', '定制', '工具'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },
  
  // 26. Mono Icons
  {
    id: 'icons',
    name: 'Mono Icons',
    description: '简单、一致的开源图标集，设计简约统一，适用于各种数字产品',
    url: 'https://icons.mono.company/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://icons.mono.company',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['简约', '开源', '图标', '一致性', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 27. EOS Icons
  {
    id: 'eos-icons',
    name: 'EOS Icons',
    description: '超过1000个免费图标，MIT许可证，开源社区支持，适用于商业和非商业用途',
    url: 'https://eos-icons.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://eos-icons.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['开源', '图标', '免费', '社区', '商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 28. Iconstore
  {
    id: 'iconstore',
    name: 'Iconstore',
    description: '一流设计师提供的免费图标库，设计精美且风格多样',
    url: 'https://iconstore.co/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iconstore.co',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['设计师', '图标', '免费', '精美', '多样'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 29. CSS.GG
  {
    id: 'css',
    name: 'CSS.GG',
    description: '700+开源CSS、SVG和Figma UI图标，支持SVG Sprite、样式组件、NPM和API',
    url: 'https://css.gg/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://css.gg',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['CSS', 'SVG', '图标', '开源', 'Figma'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },
  
  // 30. Boxicons
  {
    id: 'boxicons',
    name: 'Boxicons',
    description: '高质量Web图标库，提供简洁一致的设计风格，适用于网页和应用界面',
    url: 'https://boxicons.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://boxicons.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['Web', '图标', '高质量', '在线', '前端'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 31. Ikonate
  {
    id: 'ikonate',
    name: 'Ikonate',
    description: '完全可定制的矢量图标，设计简约现代，适用于各类界面设计',
    url: 'https://ikonate.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ikonate.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['矢量', '图标', '定制', '简约', '现代'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 32. Toicon
  {
    id: 'toicon',
    name: 'Toicon',
    description: '精美的图标集合，分类清晰，提供多种风格选择，适合不同设计需求',
    url: 'https://www.toicon.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.toicon.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['分类', '图标', '多风格', '设计', '精美'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 33. DrawKit Icons
  {
    id: 'drawkit',
    name: 'DrawKit Icons',
    description: '免费矢量图标库，设计精美，风格一致，适用于各类设计项目',
    url: 'https://drawkit.com/free-icons',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://drawkit.com/free-icons',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['矢量', '图标', '免费', '精美', '一致'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 34. Stockio
  {
    id: 'stockio',
    name: 'Stockio',
    description: '免费图标和图标包资源网站，提供多种风格和类型的高质量图标',
    url: 'https://www.stockio.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标包', '图标', '免费', '资源', '多风格'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 35. 图标之家
  {
    id: 'icosky',
    name: '图标之家',
    description: '提供30000+高质量图标免费下载，类型丰富，适合多种应用场景',
    url: 'http://www.icosky.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.icosky.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['中文', '图标', '免费', '高质量', '丰富'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 36. IconBox
  {
    id: 'iconset',
    name: 'IconBox',
    description: '专业的图标设计平台，提供定制图标、logo设计和视觉识别服务',
    url: 'http://iconset.com/realchat.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://iconset.com/realchat.html',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['定制', '图标', '专业', '设计服务', 'logo'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 37. OpenMoji
  {
    id: 'openmoji',
    name: 'OpenMoji',
    description: '开源表情符号和图标项目，由设计师、学生和教授共同创建，风格统一且开放使用',
    url: 'https://www.openmoji.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.openmoji.org',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['表情符号', '图标', '开源', '免费', '协作'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 38. Intudicons
  {
    id: 'intud',
    name: 'Intudicons',
    description: '高质量免费UI设计图标集合，以线条风格为主，包含400+图标，分类清晰且风格统一',
    url: 'https://www.intud.io/intudicons',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.intud.io/intudicons',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['UI设计', '图标', '线条风格', '免费', '高质量'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },
  
  // 39. Axmax图标库
  {
    id: 'axmax',
    name: 'Axmax图标库',
    description: '开箱即用的产品设计资源库，提供丰富的图标素材，方便设计师快速调用',
    url: 'https://axmax.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://axmax.cn',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['产品设计', '图标', '资源库', '中文', '便捷'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 40. JoyPixels
  {
    id: 'joypixels',
    name: 'JoyPixels',
    description: '专业表情图标库，提供丰富多彩的表情符号和图标，适用于多种平台和应用',
    url: 'https://www.joypixels.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.joypixels.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['表情', '图标', '多彩', '专业', '多平台'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 41. Pictogram2
  {
    id: 'pictogram2',
    name: 'Pictogram2',
    description: '人体象形图标工具，提供各种人物动作和姿势的图标，适用于标识和指引设计',
    url: 'https://pictogram2.com/?lang=en',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pictogram2.com/?lang=en',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['人体', '象形图', '图标', '指引', '标识'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 42. Iconmonsters
  {
    id: 'iconsmonster',
    name: 'Iconmonsters',
    description: '提供1200+Windows风格图标，设计统一且适用于各种网站和应用界面',
    url: 'https://www.iconsmonster.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.iconsmonster.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['Windows', '图标', '界面', '统一', '风格'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 43. DryIcons
  {
    id: 'dryicons',
    name: 'DryIcons',
    description: '专业图标资源网站，提供多种风格和类型的图标，适用于各种设计需求',
    url: 'https://dryicons.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://dryicons.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['专业', '图标', '多风格', '资源', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 44. Iconjar
  {
    id: 'geticonjar',
    name: 'Iconjar',
    description: '更好的图标和插图查找管理工具，帮助设计师高效管理和使用图标资源',
    url: 'https://geticonjar.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://geticonjar.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['管理工具', '图标', '插图', '效率', '设计师'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },
  
  // 45. iGoutu
  {
    id: 'igoutu',
    name: 'iGoutu',
    description: '综合设计资源平台，提供图标、插图、照片、音乐和设计工具，满足多样化创作需求',
    url: 'https://igoutu.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://igoutu.cn',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['综合', '图标', '插图', '资源', '中文'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 46. Vexels
  {
    id: 'vexels',
    name: 'Vexels',
    description: '矢量素材网站，提供高质量PNG、AI和PDF格式图标资源，部分免费可商用',
    url: 'https://www.vexels.com/silhouette-vectors/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.vexels.com/silhouette-vectors',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['矢量', '图标', 'AI', '素材', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 47. Fontello
  {
    id: 'fontello',
    name: 'Fontello',
    description: '图标字体生成器，可从多种图标集中选择需要的图标并生成定制字体文件',
    url: 'https://fontello.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fontello.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['字体', '图标', '生成器', '定制', '工具'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 48. 金山云视觉素材库
  {
    id: 'vision',
    name: '金山云视觉素材库',
    description: '金山云提供的视觉素材库，包含丰富的图标和设计资源，适合中文用户使用',
    url: 'http://vision.ksyun.com/#/icon-reposition',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://vision.ksyun.com/#/icon-reposition',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['金山', '图标', '视觉', '素材库', '中文'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 49. Remix Icon
  {
    id: 'remixicon',
    name: 'Remix Icon',
    description: '开源图标库，提供丰富的高质量图标集合，支持多种格式和风格',
    url: 'http://remixicon.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://remixicon.cn',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '开源', '免费', 'SVG', '矢量'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 50. OpenMoji
  {
    id: 'openmoji',
    name: 'OpenMoji',
    description: '面向设计师和开发人员的开源免费表情符号库，提供丰富多样的表情图标',
    url: 'https://openmoji.dashgame.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://openmoji.dashgame.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['表情', '图标', '开源', '免费', 'emoji'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 51. Simple Line Icons
  {
    id: 'simplelineicons',
    name: 'Simple Line Icons',
    description: '简约线性图标集合，提供精美的线框图标，适用于各类界面设计',
    url: 'http://simplelineicons.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://simplelineicons.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '线性', '简约', 'UI', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 52. Font Awesome
  {
    id: 'fontawesome',
    name: 'Font Awesome',
    description: '全球最受欢迎的图标字体库之一，提供丰富的矢量图标和社交Logo',
    url: 'https://fontawesome.com/icons',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fontawesome.com/icons',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '字体', '矢量', 'Web', '前端'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 53. Material Icons
  {
    id: 'material-icons',
    name: 'Material Icons',
    description: 'Google Material Design的官方图标库，提供900多个系统图标，多种尺寸和密度',
    url: 'https://material.io/icons/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://material.io/icons',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['Google', '图标', '字体', 'Material', 'Web'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 54. Flaticon
  {
    id: 'flaticon',
    name: 'Flaticon',
    description: '超过63万个免费矢量图标，支持SVG、PSD、PNG、EPS格式和图标字体',
    url: 'https://www.flaticon.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.flaticon.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '矢量', '免费', 'SVG', 'PSD'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  
  // 55. Easyicon
  {
    id: 'easyicon',
    name: 'Easyicon',
    description: 'PNG、ICO、ICNS格式图标搜索与下载服务，提供丰富的图标资源库',
    url: 'http://www.easyicon.net',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.easyicon.net',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '搜索', 'PNG', 'ICO', '下载'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 56. IcoMoon
  {
    id: 'icomoon',
    name: 'IcoMoon',
    description: '图标字体生成器，支持SVG、PDF和PNG格式，可自定义图标集并生成图标字体',
    url: 'https://icomoon.io/app',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://icomoon.io/app',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '字体', '生成器', 'SVG', '自定义'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 57. FindIcons
  {
    id: 'findicons',
    name: 'FindIcons',
    description: '搜索超过30万个免费图标的平台，提供多种风格和格式的图标资源',
    url: 'https://findicons.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://findicons.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '搜索', '免费', '资源', '多风格'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 58. IconArchive
  {
    id: 'iconarchive2',
    name: 'Icon Archive',
    description: '搜索超过59万个免费图标的专业平台，分类详细，资源丰富',
    url: 'http://www.iconarchive.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.iconarchive.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '搜索', '免费', '分类', '资源库'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 59. Iconmonstr
  {
    id: 'iconmonstr',
    name: 'Iconmonstr',
    description: '为你的下一个项目提供免费简约图标，风格统一，质量优秀',
    url: 'https://iconmonstr.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iconmonstr.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '简约', '免费', '矢量', '设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 60. Iconfont
  {
    id: 'iconfont',
    name: 'Iconfont',
    description: '阿里巴巴矢量图标库，国内最大的图标和插画资源平台，提供海量素材',
    url: 'http://www.iconfont.cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.iconfont.cn',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '阿里巴巴', '矢量', '中文', '插画'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 61. Iconfinder
  {
    id: 'iconfinder',
    name: 'Iconfinder',
    description: '提供超过210万个免费和高级矢量图标，质量优秀，分类详细',
    url: 'https://www.iconfinder.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.iconfinder.com',
    category: 'design-resources',
    subcategory: 'design-resources-icons',
    tags: ['图标', '矢量', '高级', '免费', '搜索'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },

  /* =========================================================
   * 设计素材 - 平面素材 (design-resources-plane)
   * ========================================================= */
  // 1. 千图网
  {
    id: 'qiantu',
    name: '千图网',
    description: '专注免费设计素材下载的网站，提供海量平面设计素材资源',
    url: 'http://www.58pic.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.58pic.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '设计', '图片', '免费'],
    isHot: true,
    isFeatured: true,
    rating: 4.6
  },

  // 2. 千库网
  {
    id: 'qianku',
    name: '千库网',
    description: '免费png图片背景素材下载，提供高质量平面设计素材',
    url: 'http://588ku.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://588ku.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '图片', '免费', 'PNG'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },

  // 3. 我图网
  {
    id: 'ooopic',
    name: '我图网',
    description: '我图网,提供图片素材及模板下载,专注正版设计作品交易',
    url: 'http://www.ooopic.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.ooopic.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '设计', '图片', '模板'],
    isHot: true,
    isFeatured: true,
    rating: 4.5
  },

  // 4. 90设计
  {
    id: '90sheji',
    name: '90设计',
    description: '电商设计（淘宝美工）千图免费淘宝素材库',
    url: 'http://90sheji.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://90sheji.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '设计', '图片', '免费'],
    isHot: true,
    isFeatured: false,
    rating: 4.4
  },

  // 5. 昵图网
  {
    id: 'nipic',
    name: '昵图网',
    description: '原创素材共享平台，提供丰富的平面设计素材',
    url: 'http://www.nipic.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.nipic.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '图片'],
    isHot: false,
    isFeatured: false,
    rating: 4.3
  },

  // 6. 懒人图库
  {
    id: 'lanrentuku',
    name: '懒人图库',
    description: '懒人图库专注于提供网页素材下载',
    url: 'http://www.lanrentuku.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.lanrentuku.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '图片', '网页素材'],
    isHot: false,
    isFeatured: false,
    rating: 4.2
  },

  // 7. 图虫图库
  {
    id: 'tuchong-stock',
    name: '图虫图库',
    description: '海量图库,涵盖创意图片和矢量素材等',
    url: 'https://stock.tuchong.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://stock.tuchong.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '图片', '图标', '创意'],
    isHot: false,
    isFeatured: false,
    rating: 4.4
  },

  // 8. 快图网
  {
    id: 'kuaipng',
    name: '快图网',
    description: '快图网提供免费的PNG元素和高清背景图片素材免费下载',
    url: 'http://www.kuaipng.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.kuaipng.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '图片', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.2
  },

  // 9. Freepik
  {
    id: 'freepik',
    name: 'Freepik',
    description: '非常优质的矢量图素材网站。而且免费商用。搜索图片需要使用英文可以用翻译软件翻译过来再使用，还是很方便的。',
    url: 'https://www.freepik.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.freepik.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '图片', '图标', '免费'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 10. 潮国创意
  {
    id: 'chaopx',
    name: '潮国创意',
    description: '国内正版原创的素材网站，每日更新推荐时下热点设计，是目前国内为设计师、创意机构和创作人员寻找高质量、吸睛创意设计资源的网站。包含高质量3D设计，电商设计，平面设计，原创图片素材；是值得信赖、可商用的潮流设计网站。',
    url: 'https://chaopx.com/?hf=67',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://chaopx.com/?hf=67',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '设计', '图片', '创意'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 11. 品牌规范手册收录
  {
    id: 'branding-style-guides',
    name: 'Branding Style Guides',
    description: '收录全球知名品牌的 VI 设计规范手册，包含微信、华为、小米、联想、麦当劳、星巴克等超过2000册品牌规范，支持免费下载PDF文件',
    url: 'https://brandingstyleguides.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://brandingstyleguides.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '设计', '品牌规范', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 12. 南门网
  {
    id: 'dcpsd',
    name: '南门网',
    description: '国内领先原创综合素材交易平台，提供高质量平面设计素材',
    url: 'http://www.dcpsd.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.dcpsd.com',
    category: 'design-resources',
    subcategory: 'design-resources-plane',
    tags: ['平面素材', '图片'],
    isHot: false,
    isFeatured: false,
    rating: 4.3
  },

  /* =========================================================
   * 设计素材 - UI素材 (design-resources-ui)
   * ========================================================= */
  // 1. Freebiesbug
  {
    id: 'freebiesbug',
    name: 'Freebiesbug',
    description: '提供免费素材的网站，涵盖图标、样机、用户界面、网页模板等多种UI设计资源',
    url: 'https://freebiesbug.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://freebiesbug.com',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '素材', '模板', '免费', '样机'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 2. 应用/App UI素材
  {
    id: 'uied-app',
    name: '应用/App UI素材',
    description: '精选高质量App应用界面UI设计素材与模板，适合移动应用设计参考',
    url: 'https://www.uied.cn/category/ui/app',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/VIE35G-20250609.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', 'App', '应用', '移动端', '素材'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 3. 网页/Web UI素材
  {
    id: 'uied-web',
    name: '网页/Web UI素材',
    description: '优质网页设计UI素材与模板，提供最新Web界面设计趋势与参考',
    url: 'https://www.uied.cn/category/ui/web',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/VIE35G-20250609.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', 'Web', '网页', '素材', '模板'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 4. 图标/Icon UI素材
  {
    id: 'uied-icon',
    name: '图标/Icon UI素材',
    description: '高质量图标设计资源与素材，提供多风格多格式的图标设计参考',
    url: 'https://www.uied.cn/category/ui/icon',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/VIE35G-20250609.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '图标', 'Icon', '素材', '设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 5. 手表/Watch UI素材
  {
    id: 'uied-watch',
    name: '手表/Watch UI素材',
    description: '智能手表与可穿戴设备UI设计资源，提供专业Watch界面设计参考',
    url: 'https://www.uied.cn/category/ui/watch',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/VIE35G-20250609.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '手表', 'Watch', '可穿戴', '素材'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 6. 后台/Dashboard UI素材
  {
    id: 'uied-dashboard',
    name: '后台/Dashboard UI素材',
    description: '管理后台与数据仪表盘UI设计资源，提供专业的Dashboard界面设计参考',
    url: 'https://www.uied.cn/category/ui/dashboard',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/VIE35G-20250609.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '后台', 'Dashboard', '数据', '管理'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  
  // 7. 可视化/Big-data UI素材
  {
    id: 'uied-big-data',
    name: '可视化/Big-data UI素材',
    description: '数据可视化与大数据UI设计资源，提供专业的图表与数据展示设计参考',
    url: 'https://www.uied.cn/category/ui/big-data',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/VIE35G-20250609.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '可视化', '大数据', '图表', '素材'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 8. 设计系统/组件 UI素材
  {
    id: 'uied-zujian',
    name: '设计系统/组件 UI素材',
    description: '专业设计系统与UI组件库资源，提供高质量组件设计与规范参考',
    url: 'https://www.uied.cn/category/ui/zujian',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/VIE35G-20250609.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '设计系统', '组件', '规范', '素材'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 9. UI8
  {
    id: 'ui8',
    name: 'UI8',
    description: '高质量UI套件、模板和设计资源市场，为设计师提供专业设计素材',
    url: 'https://ui8.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ui8.net',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '套件', '模板', '市场', '设计资源'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 10. UpLabs
  {
    id: 'uplabs',
    name: 'UpLabs',
    description: 'UI设计师和开发人员的资源社区，提供优质UI套件、模板和设计灵感',
    url: 'https://www.uplabs.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.uplabs.com',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '社区', '资源', '套件', '灵感'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 11. UI Store Design
  {
    id: 'uistoredesign',
    name: 'UI Store Design',
    description: '免费UI资源下载平台，提供优质UI套件、图标、模板和界面元素',
    url: 'https://www.uistore.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.uistore.design',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '免费', '下载', '套件', '模板'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 12. UI Space
  {
    id: 'uispace',
    name: 'UI Space',
    description: '免费UI资源下载平台，提供高质量PSD文件、Sketch源文件、图标和插图',
    url: 'https://uispace.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uispace.net',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '免费', 'PSD', 'Sketch', '下载'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  
  // 13. UI Garage
  {
    id: 'uigarage',
    name: 'UI Garage',
    description: '日常UI灵感和模式库，展示精选的移动和网页界面设计案例',
    url: 'https://uigarage.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uigarage.net',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '灵感', '模式', '界面', '案例'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 14. Sketch App Sources
  {
    id: 'sketchappsources',
    name: 'Sketch App Sources',
    description: 'Sketch资源分享平台，提供免费和高级Sketch模板、UI套件和插件',
    url: 'https://www.sketchappsources.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.sketchappsources.com',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['Sketch', 'UI', '模板', '套件', '插件'],
    isHot: false,
    isFeatured: true,
    rating: 4.8
  },
  
  // 15. Design Files
  {
    id: 'designfiles',
    name: 'Design Files',
    description: '免费设计资源下载平台，提供UI套件、图标、插图和模板',
    url: 'https://designfiles.co/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://designfiles.co',
    category: 'design-resources',
    subcategory: 'design-resources-ui',
    tags: ['UI', '免费', '下载', '套件', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  /* =========================================================
   * 设计素材 - 可商用图库 (design-resources-images)
   * ========================================================= */
  // 1. Unsplash
  {
    id: 'unsplash-images',
    name: 'Unsplash',
    description: '高质量免费图片素材库，涵盖自然、旅行、建筑、人物等多种类型，支持中文搜索，可商用',
    url: 'https://unsplash.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://unsplash.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '高质量', '免费', '商用', '摄影'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 2. Pexels
  {
    id: 'pexels',
    name: 'Pexels',
    description: '高质量免费可商用图片素材库，无需注册即可下载，提供多种分辨率选择',
    url: 'https://www.pexels.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pexels.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '免费', '商用', '摄影', '高清'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 3. Pixabay
  {
    id: 'pixabay-images',
    name: 'Pixabay',
    description: '免费无版权图片和视频素材库，包含照片、矢量图、插画等多种格式，支持按内容、尺寸和颜色搜索',
    url: 'https://pixabay.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pixabay.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '视频', '矢量图', '免费', '商用'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 4. 沙沙野
  {
    id: 'ssyer',
    name: '沙沙野',
    description: '面向全球的高质量视觉素材平台，提供百万级高清图片素材、网页素材和矢量图，可商用',
    url: 'https://www.ssyer.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.ssyer.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '视频', '矢量图', '中文', '商用'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 5. Freeimages
  {
    id: 'freeimages',
    name: 'Freeimages',
    description: '免费商用图片网站，提供多种分类的高质量图片素材，界面友好，支持中文版',
    url: 'https://www.freeimages.com/cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.freeimages.com/cn',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '免费', '商用', '中文', '摄影'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 6. Life Of Pix
  {
    id: 'lifeofpix',
    name: 'Life Of Pix',
    description: '提供免费无版权欧美生活图片素材，多为欧洲景观和生活类摄影作品，可商用',
    url: 'https://www.lifeofpix.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.lifeofpix.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '视频', '免费', '欧美', '生活'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 7. Hippopx
  {
    id: 'hippopx',
    name: 'Hippopx',
    description: '基于CC0协议的免版权图片网站，提供高分辨率图片素材，无需归属即可免费商用',
    url: 'https://www.hippopx.com/zh',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.hippopx.com/zh',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '免费', '商用', 'CC0', '高清'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 8. 西田图像SITAPIX
  {
    id: 'sitapix',
    name: '西田图像SITAPIX',
    description: '海量高质量免版权图片素材库，为设计师提供专业摄影素材，可商用',
    url: 'https://www.sitapix.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.sitapix.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '设计', '素材', '中文', '摄影'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 9. SplitShire
  {
    id: 'splitshire',
    name: 'SplitShire',
    description: '致力于分享免费高清摄影图片的网站，提供高分辨率图片素材，免费商用',
    url: 'https://www.splitshire.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.splitshire.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '设计', '免费', '商用', '高清'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 10. Picjumbo
  {
    id: 'picjumbo',
    name: 'Picjumbo',
    description: '在线免费高质量商用素材网站，提供3888像素高分辨率图片资源，适合网站设计',
    url: 'https://picjumbo.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://picjumbo.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '设计', '免费', '在线', '高分辨率'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 11. Stockio
  {
    id: 'stockio',
    name: 'Stockio',
    description: '提供免费照片、矢量、图标、字体和视频素材的综合平台，所有素材均可免费用于个人和商业用途',
    url: 'https://www.stockio.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.stockio.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '图标', '字体', '视频', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 12. Fancycrave
  {
    id: 'fancycrave',
    name: 'Fancycrave',
    description: '主打旅游图片的素材网站，提供各国美景高清图片，适合旅行相关设计项目',
    url: 'https://fancycrave.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fancycrave.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '旅游', '美景', '风景', '高清'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 13. CC0图片网
  {
    id: 'cc0',
    name: 'CC0图片网',
    description: '基于CC0协议的图片素材聚合平台，可用于个人及商业用途，适用于网站、自媒体配图和印刷设计',
    url: 'https://cc0.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cc0.cn',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '设计', '免费', 'CC0', '中文'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  /* =========================================================
   * 设计素材 - 可商用插画 (design-resources-illustrations)
   * ========================================================= */
  // 1. ManyPixels
  {
    id: 'manypixels',
    name: 'ManyPixels Gallery',
    description: '免费商用矢量插画素材库，提供多种风格的设计资源',
    url: 'https://www.manypixels.co/gallery',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.manypixels.co/gallery',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '矢量', '免费', '商用', '素材'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 2. SketchValley
  {
    id: 'sketchvalley',
    name: 'SketchValley',
    description: '免费下载占位图和空白页插画库，提供PNG、SVG、AI格式',
    url: 'https://sketchvalley.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://sketchvalley.com',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', 'SVG', 'AI', '空白页', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 3. Frameillust
  {
    id: 'frame-illust',
    name: 'Frameillust',
    description: '日本免费插图素材宝库，适用于个人与商业项目，无需注册即可下载',
    url: 'https://frame-illust.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://frame-illust.com',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '日本风', '免费', '商用', '多分类'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 4. Nawmin
  {
    id: 'nawmin',
    name: 'Nawmin',
    description: '专注于日本乡村风情的免费商用农业插画素材网站，提供PNG格式的透明背景插画',
    url: 'https://nawmin.stores.jp/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://nawmin.stores.jp',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '农业', '日本风', '水墨', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 5. Open Peeps
  {
    id: 'openpeeps',
    name: 'Open Peeps',
    description: '免费可商用的高质量插画图库，使用CC0授权方式，可用于个人和商业用途',
    url: 'https://openpeeps.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://openpeeps.com',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '人物', 'CC0', '免费', '商用'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 6. Shigureni
  {
    id: 'shigureni',
    name: 'Shigureni',
    description: '日系可爱手绘风格插画网站，免费下载PNG图像，适合做表情包或头像',
    url: 'https://www.shigureni.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.shigureni.com',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '日系', '手绘', '可爱', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 7. Ultima
  {
    id: 'ultima',
    name: 'Ultima',
    description: '高质量免费商用插图资源平台，提供超过750张多风格插图，支持在线更改颜色',
    url: 'https://ultima.storytale.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ultima.storytale.io',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', 'SVG', 'PNG', '商用', 'Figma'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 8. Kuku-Keke
  {
    id: 'kuku-keke',
    name: 'Kuku-Keke',
    description: '日系插图素材库，原创手工创作，包含涂鸦、线条插图、少女风等多种风格',
    url: 'https://kuku-keke.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://kuku-keke.com',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '日系', '手绘', '免费', '商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 9. unDraw
  {
    id: 'undraw',
    name: 'unDraw',
    description: '免费商用的扁平风格插画图库，支持在线更改配色，可下载SVG和PNG格式',
    url: 'https://undraw.co/illustrations',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://undraw.co/illustrations',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '扁平', 'SVG', '配色', '免费'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 10. Open Doodles
  {
    id: 'opendoodles',
    name: 'Open Doodles',
    description: '免费可商用的手绘风格插画图库，线条简洁质量高',
    url: 'https://www.opendoodles.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.opendoodles.com',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '手绘', '线条', '免费', '商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },

  // 11. Delesign
  {
    id: 'delesign',
    name: 'Delesign',
    description: '免费可商用设计素材库，支持在线配色和便捷下载，用户体验良好',
    url: 'https://delesign.com/free-designs/graphics/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://delesign.com/free-designs/graphics',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', 'SVG', 'PNG', '配色', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 12. Lukaszadam
  {
    id: 'lukaszadam',
    name: 'Lukaszadam',
    description: '免费SVG插图库，无署名限制，高质量插图素材',
    url: 'https://lukaszadam.com/illustrations',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://lukaszadam.com/illustrations',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', 'SVG', '无署名', '免费', '商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 13. IRA Design
  {
    id: 'iradesign',
    name: 'IRA Design',
    description: '渐变风格的矢量插画素材网站，质量高且免费可商用',
    url: 'https://iradesign.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iradesign.io',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '渐变', '矢量', '免费', '商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },

  // 14. Fresh Folk
  {
    id: 'fresh-folk',
    name: 'Fresh Folk',
    description: '由美籍日裔插画家LENI KAUFFMAN创建的高质量插画库，完全免费且可商用',
    url: 'https://fresh-folk.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fresh-folk.com',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '人物', '多风格', '免费', '商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 15. Storyset
  {
    id: 'storyset',
    name: 'Storyset',
    description: '免费可自定义的插画网站，提供高质量插画素材，适合各种设计场景',
    url: 'https://storyset.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://storyset.com',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '自定义', '免费', '商用', '多场景'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },

  // 16. Mixkit Art
  {
    id: 'mixkit',
    name: 'Mixkit Art',
    description: '免费高质量插画素材库，支持商用和多尺寸下载，配色精美',
    url: 'https://mixkit.co/free-stock-art/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mixkit.co/free-stock-art',
    category: 'design-resources',
    subcategory: 'design-resources-illustrations',
    tags: ['插画', '多尺寸', '免费', '商用', '高质量'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  /* =========================================================
   * 设计素材 - 可商用视频 (design-resources-video)
   * ========================================================= */
  // 1. Mixkit Video
  {
    id: 'mixkit-video',
    name: 'Mixkit Video',
    description: '免费商用高清视频素材库，提供专业拍摄的高质量视频，分类详细便于查找',
    url: 'https://mixkit.co/free-stock-video/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mixkit.co/free-stock-video',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '高清', '免费', '商用', '专业'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 2. Pexels Videos
  {
    id: 'pexels-videos',
    name: 'Pexels Videos',
    description: '高质量免费可商用视频素材库，无需注册即可下载，提供多种分辨率选择',
    url: 'https://www.pexels.com/videos/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pexels.com/videos',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '高清', '免费', '商用', '多分辨率'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 3. Pixabay Videos
  {
    id: 'pixabay-videos',
    name: 'Pixabay Videos',
    description: '免费无版权视频素材库，丰富多样的高清视频资源，支持多种尺寸和格式下载',
    url: 'https://pixabay.com/videos/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pixabay.com/videos',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '无版权', '免费', '多格式', '高清'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 4. Coverr
  {
    id: 'coverr',
    name: 'Coverr',
    description: '提供精美免费高质量视频素材，无需归属标记，支持商业用途，每周更新',
    url: 'https://coverr.co/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://coverr.co',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '高质量', '免费', '商用', '无归属'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 5. Videvo
  {
    id: 'videvo',
    name: 'Videvo',
    description: '免费高清视频和动画素材库，提供自然风光、视觉特效等多种类型视频，每周更新',
    url: 'https://www.videvo.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.videvo.net',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '高清', '动画', '免费', '延时'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 6. Videezy
  {
    id: 'videezy',
    name: 'Videezy',
    description: '高质量设计素材与4K视频素材下载平台，由专业视频艺术家创作的高清视频资源',
    url: 'https://www.videezy.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.videezy.com',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '4K', '高清', '专业', '设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 7. Dareful
  {
    id: 'dareful',
    name: 'Dareful',
    description: '免费4K高清视频素材库，无需登录即可下载，可用于商业项目，需标明来源',
    url: 'https://dareful.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://dareful.com',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '4K', '免费', '商用', '高清'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 8. Mazwai
  {
    id: 'mazwai',
    name: 'Mazwai',
    description: '提供电影级高品质免费视频素材，无需注册，由专业视频团队精心挑选',
    url: 'https://mazwai.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mazwai.com',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '电影级', '免费', '高品质', '创意'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 9. Motion Places
  {
    id: 'motionplaces',
    name: 'Motion Places',
    description: '为广告创作提供世界各地的免费视频素材，支持高清和4K超高清下载',
    url: 'https://www.motionplaces.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.motionplaces.com',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '4K', '广告', '场景', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 10. Pond5 Free
  {
    id: 'pond5-free',
    name: 'Pond5 Free',
    description: '数量众多的免费公共领域视频资源库，可自由用于各类设计制作',
    url: 'https://www.pond5.com/free',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pond5.com/free',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '公共领域', '免费', '素材', '设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 11. Stockio Video
  {
    id: 'stockio-video',
    name: 'Stockio Video',
    description: '提供免费可商用的多媒体素材，包括视频、照片、矢量图等，无需注册即可下载',
    url: 'https://www.stockio.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.stockio.com',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', '多媒体', '免费', '商用', '素材'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 12. Mantissa
  {
    id: 'mantissa',
    name: 'Mantissa',
    description: '提供炫酷可商用的Blender循环动画工程文件和CG资源，适合创意视觉项目',
    url: 'https://mantissa.xyz/free.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mantissa.xyz',
    category: 'design-resources',
    subcategory: 'design-resources-video',
    tags: ['视频', 'Blender', '动画', '循环', '3D'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  
  // 14. Kaboompics
  {
    id: 'kaboompics',
    name: 'Kaboompics',
    description: '家居生活类无版权图片素材库，提供高质量生活场景摄影作品，免费可商用',
    url: 'https://kaboompics.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://kaboompics.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '家居', '生活', '免费', '商用'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 15. DesignersPics
  {
    id: 'designerspics',
    name: 'DesignersPics',
    description: '摄影师个人免费商用图库，提供高清优质生活化摄影照片，含商业、自然等多种分类',
    url: 'http://www.designerspics.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.designerspics.com',
    category: 'design-resources',
    subcategory: 'design-resources-images',
    tags: ['图片', '设计', '免费', '商用', '摄影'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 设计素材 - 可商用字体 (design-resources-fonts)
   * ========================================================= */
  // 1. 阿里巴巴普惠体
  {
    id: 'alibaba-puhuiti',
    name: '阿里巴巴普惠体',
    description: '阿里巴巴推出的永久免费商用字体，适合多种场景应用，字形简洁有辨识度',
    url: 'https://fonts.alibabagroup.com/#/home',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fonts.alibabagroup.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '中文', '免费', '商用', '阿里巴巴'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 2. 阿里妈妈数黑体
  {
    id: 'alimama-shuheiti',
    name: '阿里妈妈数黑体',
    description: '阿里妈妈推出的永久免费商用字体，专为电商营销设计，数字特征明显',
    url: 'https://fonts.alibabagroup.com/#/more',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fonts.alibabagroup.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '数字', '电商', '免费', '商用'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 3. 站酷字体
  {
    id: 'zcool-fonts',
    name: '站酷字体',
    description: '站酷推出的多款可商用字体，包含站酷快乐体、站酷高端黑等8款不同风格的字体',
    url: 'https://www.zcool.com.cn/special/zcoolfonts/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.zcool.com.cn',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '站酷', '多风格', '免费', '商用'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 4. 思源黑体/宋体
  {
    id: 'source-han',
    name: '思源黑体/宋体',
    description: 'Adobe与Google联合开发的开源泛中日韩字体，提供多种字重，适合各类设计场景',
    url: 'https://source.typekit.com/source-han-serif/cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://source.typekit.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '多语言', '开源', '多字重', '黑体'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 5. 钉钉进步体
  {
    id: 'dingtalk-jinbu',
    name: '钉钉进步体',
    description: '钉钉推出的永久免费可商用字体，涵盖中英文7526个字符，以7°倾斜设计，活力十足',
    url: 'https://page.dingtalk.com/wow/dingtalk/default/dingtalk/y-W5aF3_ZJwzulU0nceIl',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://page.dingtalk.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '倾斜', '活力', '科技', '商用'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 6. 得意黑
  {
    id: 'smiley-sans',
    name: '得意黑',
    description: '一款在人文观感和几何特征中寻找平衡的中文黑体，支持简繁体中文、拉丁文等多种文字',
    url: 'https://atelier-anchor.com/typefaces/smiley-sans',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://atelier-anchor.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '黑体', '现代', '几何', '开源'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 7. 荣耀字体
  {
    id: 'honor-sans',
    name: '荣耀字体',
    description: '荣耀官方字体，简洁现代，可免费用于个人和商业设计，提供多种字重',
    url: 'https://developer.honor.com/cn/doc/guides/100681',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.honor.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '品牌', '科技', '简洁', '商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 8. MiSans 小米
  {
    id: 'misans',
    name: 'MiSans 小米字体',
    description: '小米澎湃OS系统字体，支持多语言，涵盖20多种书写系统，简约清晰风格',
    url: 'https://hyperos.mi.com/font',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://hyperos.mi.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '系统', '多语言', '简约', '商用'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },

  // 9. 鸿雷板书简体
  {
    id: 'honglei-banshujt',
    name: '鸿雷板书简体',
    description: '已登记版权的免费商用手写板书风格字体，适合教育和手写风格设计',
    url: 'https://mp.weixin.qq.com/s/3X9j26oaVfwaZ9GcROMPWw',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mp.weixin.qq.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '手写', '板书', '教育', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 10. 字体搬运工
  {
    id: 'fontbanyungong',
    name: '字体搬运工',
    description: '收集整理各类免费可商用字体的网站，提供方便的下载和分类浏览',
    url: 'https://font.sucai999.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://font.sucai999.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '集合', '下载', '分类', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 11. FontSpace
  {
    id: 'fontspace',
    name: 'FontSpace',
    description: '为设计师提供的免费字体资源网站，收录超过8万款字体，支持按风格和类型筛选',
    url: 'https://www.fontspace.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.fontspace.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '英文', '多风格', '免费', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 12. 找字体
  {
    id: 'zfont',
    name: '找字体',
    description: '海量无版权字体资源网站，提供高速免费下载，无广告无套路',
    url: 'https://zfont.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://zfont.cn',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '下载', '无版权', '免费', '快速'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 13. UIED字体收集
  {
    id: 'uied-fonts',
    name: 'UIED字体收集',
    description: 'UIED设计师平台整理的免费商用字体合集，按类型和用途分类，便于设计师查找',
    url: 'https://www.uied.cn/category/pingmian/font?tags1=%e5%85%8d%e8%b4%b9%e5%95%86%e7%94%a8%e5%ad%97%e4%bd%93',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.uied.cn',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '合集', '分类', 'UI设计', '商用'],
    isHot: false,
    isFeatured: true,
    rating: 4.9
  },

  // 14. 斗鱼追光体
  {
    id: 'douyu-zhuiguang',
    name: '斗鱼追光体',
    description: '斗鱼直播平台推出的免费可商用品牌字体，活力十足，适合年轻化设计',
    url: 'https://www.douyu.com/topic/douyuZGT',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.douyu.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '品牌', '活力', '年轻', '商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 15. 金山云技术体
  {
    id: 'kingsoft-tech',
    name: '金山云技术体',
    description: '金山云推出的品牌技术字体，科技感强，可用于各类科技类设计项目',
    url: 'https://design.ksyun.com/font',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.ksyun.com',
    category: 'design-resources',
    subcategory: 'design-resources-fonts',
    tags: ['字体', '科技', '品牌', '商用', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 设计素材 - 样机素材 (design-resources-mockups)
   * ========================================================= */
  // 1. MockUPhone
  {
    id: 'mockuphone',
    name: 'MockUPhone',
    description: '免费在线设备样机工具，支持将应用截图包装在各种移动设备中，包括iPhone、iPad、Android和TV',
    url: 'https://mockuphone.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mockuphone.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '设备', '移动端', '免费', '在线'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 2. The Mockup Club
  {
    id: 'mockup-club',
    name: 'The Mockup Club',
    description: '精选高质量免费样机资源，包括设备、包装、海报等多种类型，便于设计师展示作品',
    url: 'https://themockup.club/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://themockup.club',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '资源', '免费', 'PSD', '展示'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 3. Mockup World
  {
    id: 'mockupworld',
    name: 'Mockup World',
    description: '全面的样机资源网站，从基础样机到包装、杂志、服装、室外摆拍等种类丰富，大部分免费可商用',
    url: 'https://www.mockupworld.co/all-mockups/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mockupworld.co',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '多类型', '免费', '商用', 'PSD'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 4. 西田样机
  {
    id: 'sitapix-mockup',
    name: '西田样机',
    description: '提供丰富的免费样机素材和PSD贴图下载，包括办公用品、VI、Logo、化妆品、包装盒、电子产品等',
    url: 'https://mockup.sitapix.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mockup.sitapix.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '中文', 'PSD', '免费', '多类型'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 5. MockMagic
  {
    id: 'mockmagic',
    name: 'MockMagic',
    description: '免费设备样机生成器，帮助UI/UX设计师和产品经理将设计作品完美展示在设备中，提升视觉体验',
    url: 'https://www.mockmagic.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mockmagic.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '设备', '免费', '展示', 'UI'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 6. AppLaunchpad
  {
    id: 'applaunchpad',
    name: 'AppLaunchpad',
    description: '免费在线样机工具生成器，创建符合Apple和Google要求分辨率的App Store和Google Play商店展示图片',
    url: 'https://theapplaunchpad.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://theapplaunchpad.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '应用商店', '在线', '免费', '移动端'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 7. Mockups Design
  {
    id: 'mockups-design',
    name: 'Mockups Design',
    description: '提供免费优质样机下载的网站，所有素材可用于个人和商业项目，种类丰富',
    url: 'https://mockups-design.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mockups-design.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '免费', '商用', 'PSD', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 8. Anthony Boyd Graphics
  {
    id: 'anthonyboyd',
    name: 'Anthony Boyd Graphics',
    description: '提供高质量样机资源，更新及时，不仅有普通样机素材还有贴图类资源，质量超高',
    url: 'https://www.anthonyboyd.graphics/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.anthonyboyd.graphics',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '高质量', '贴图', '设计', 'PSD'],
    isHot: false,
    isFeatured: true,
    rating: 4.8
  },

  // 9. Artboard Studio
  {
    id: 'artboard-studio',
    name: 'Artboard Studio',
    description: '在线产品样机生成工具，可以在线完成效果图制作，上传作品并替换到模板中即可生成样机',
    url: 'https://artboard.studio/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://artboard.studio',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '在线', '产品', '模板', '效果图'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 10. Device Frames
  {
    id: 'deviceframes',
    name: 'Device Frames',
    description: '在浏览器中创建自定义3D设备样机，选择设备，上传图片并渲染您的设计',
    url: 'https://deviceframes.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://deviceframes.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '3D', '设备', '在线', '渲染'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 11. PSDRepo
  {
    id: 'psdrepo',
    name: 'PSDRepo',
    description: '提供免费PSD和Adobe XD模板，由才华横溢的创意人共享的作品，包含丰富的样机资源',
    url: 'https://psdrepo.com/tag/free-psd-mockups/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://psdrepo.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', 'PSD', 'XD', '免费', '模板'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 12. Mr Mockup
  {
    id: 'mrmockup',
    name: 'Mr Mockup',
    description: '提供高质量样机资源，分类丰富，分为免费和收费两个版块，收费资源提供永久使用权',
    url: 'https://mrmockup.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mrmockup.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '高质量', '分类', '免费', '商用'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 13. UIED样机
  {
    id: 'uied-mockup',
    name: 'UIED样机',
    description: '提供各类优质免费样机资源，专为UI/UX设计师收集整理，便于设计师查找和使用',
    url: 'https://www.uied.cn/category/mockup',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.uied.cn',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '中文', 'UI', '免费', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 5.0
  },

  // 14. Pixeden
  {
    id: 'pixeden',
    name: 'Pixeden',
    description: '专业的图形、网页和设计资源平台，提供高质量样机和其他设计素材',
    url: 'https://www.pixeden.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pixeden.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '设计', '资源', '模板', '图形'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 15. Freebiesbug
  {
    id: 'freebiesbug',
    name: 'Freebiesbug',
    description: '提供免费设计资源的平台，包括图标、样机、用户界面、网页模板等多种素材',
    url: 'https://freebiesbug.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://freebiesbug.com',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', '免费', '资源', 'UI', '模板'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 16. MockupZone
  {
    id: 'mockupzone',
    name: 'MockupZone',
    description: '在线样机商店，提供免费和高级PSD样机文件，帮助设计师以专业方式展示作品',
    url: 'https://mockup.zone/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mockup.zone',
    category: 'design-resources',
    subcategory: 'design-resources-mockups',
    tags: ['样机', 'PSD', '在线', '专业', '展示'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 设计素材 - 字体网站 (design-resources-fontwebsites)
   * ========================================================= */
  // 1. 求字体网
  {
    id: 'qiuziti',
    name: '求字体网',
    description: '提供上传图片找字体、字体实时预览、字体下载、字体版权检测、字体补齐等服务，可识别中文、英文、日韩、书法等多种字体',
    url: 'https://www.qiuziti.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.qiuziti.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '识别', '预览', '下载', '版权检测'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 2. 字库星球
  {
    id: 'mfonts',
    name: '字库星球',
    description: '免费可商用字体下载平台，提供多种中文字体资源',
    url: 'https://www.mfonts.cn/',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2024/07/iH415p-20240723.png',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '商用', '下载', '中文'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 3. 字觅网
  {
    id: 'mfont',
    name: '字觅网',
    description: '专注于提供正版字体授权的网站，为创作者、设计师和企业提供多样化的字体选择，保障版权合法性',
    url: 'https://www.mfont.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2024/04/1712628868-%E5%AD%97%E8%A7%8564%C3%9764.png',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '授权', '正版', '设计', '排版'],
    isHot: true,
    isFeatured: false,
    rating: 4.6
  },
  
  // 4. 字神国风书法字体
  {
    id: 'godfont',
    name: '字神国风书法字体',
    description: '国风类字体字库，包含古代名人书法字体、古籍雕版复刻字体、现代书法字体、手写字体、国风创新书法字体等',
    url: 'http://www.godfont.com',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2023/03/1679623785-4b6d0b5c493d097153c2074f96656469.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '书法', '国风', '古籍', '手写'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 5. 字跳字唱短视频字体
  {
    id: 'upfont',
    name: '字跳字唱短视频字体',
    description: 'UPFont字跳字唱短视频字体字库，将时下热点与汉字跨界融合，字型丰富、灵动独特，极具视觉张力',
    url: 'http://www.upfont.cn',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2023/03/1679623814-d97d2ff6addfc3e3b81aeb40a7d15ff5.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '短视频', '动态', '创意', '视觉'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  
  // 6. Fonts2u中文
  {
    id: 'zh-fonts2u',
    name: 'Fonts2u中文',
    description: '提供免费字体和装饰字体下载，支持多种语言和风格',
    url: 'https://zh.fonts2u.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://zh.fonts2u.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '装饰', '多语言', '下载'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 7. 自由字体
  {
    id: 'ziyouziti',
    name: '自由字体',
    description: '国内权威的免费字体网站，汇聚全网免费字体，提供可商用免费字体下载，所有免费字体的授权均经核对确认',
    url: 'https://ziyouziti.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ziyouziti.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '商用', '授权', '下载'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 8. GEETYPE极字和风字库
  {
    id: 'geetype',
    name: 'GEETYPE极字和风字库',
    description: '中日双语高端字体网站，提供中日双语，简繁日字型',
    url: 'http://www.geetype.cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.geetype.cn',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '中日', '高端', '双语', '简繁'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 9. 锐字潮牌字库
  {
    id: 'reeji',
    name: '锐字潮牌字库',
    description: '潮流字库网站，提供字体免费下载，正版字体商业授权',
    url: 'http://www.reeji.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.reeji.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '潮流', '免费', '商业', '授权'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 10. 字由
  {
    id: 'hellofont',
    name: '字由',
    description: '为设计师量身定做的字体下载管理工具，收集国内外上千款精选字体，提供详细信息和精选字体文章',
    url: 'https://www.hellofont.cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.hellofont.cn',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '管理', '工具', '下载', '设计师'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 11. 360查字体
  {
    id: '360fonts',
    name: '360查字体',
    description: '提供字体版权查询服务，帮助设计师避免字体版权纠纷',
    url: 'https://fonts.safe.360.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fonts.safe.360.cn',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '版权', '查询', '安全', '纠纷'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 12. 猫啃网
  {
    id: 'maoken',
    name: '猫啃网',
    description: '致力于为设计师提供最新最全且免费的，可商用，无版权问题的免费字体下载',
    url: 'https://www.maoken.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.maoken.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '商用', '下载', '无版权'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 13. 100font.com
  {
    id: '100font',
    name: '100font.com',
    description: '专业免费商用字体下载网站，专注于收集整理分享免费商用字体、免版权字体、没有版权的字体',
    url: 'https://www.100font.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.100font.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '商用', '免版权', '下载'],
    isHot: false,
    isFeatured: true,
    rating: 4.8
  },
  
  // 14. Abstract Fonts
  {
    id: 'abstractfonts',
    name: 'Abstract Fonts',
    description: '提供13,866种免费字体下载，多种风格和类型可选',
    url: 'http://www.abstractfonts.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.abstractfonts.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '下载', '英文', '风格'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 15. OnlineWebFonts
  {
    id: 'onlinewebfonts',
    name: 'OnlineWebFonts',
    description: '提供Windows和Mac平台的免费网页字体下载',
    url: 'https://www.onlinewebfonts.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.onlinewebfonts.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '网页', '免费', '下载', '跨平台'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 16. Da Font
  {
    id: 'dafont',
    name: 'Da Font',
    description: '免费可下载字体资源库，提供多种风格和类型的字体',
    url: 'https://www.dafont.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.dafont.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '下载', '英文', '风格'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 17. My Fonts
  {
    id: 'myfonts',
    name: 'My Fonts',
    description: '提供适用于印刷、产品和屏幕的高质量字体资源',
    url: 'http://www.myfonts.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.myfonts.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '专业', '印刷', '产品', '高质量'],
    isHot: false,
    isFeatured: true,
    rating: 4.8
  },
  
  // 18. FontM
  {
    id: 'fontm',
    name: 'FontM',
    description: '提供免费字体下载，多种类型和风格可选',
    url: 'http://fontm.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://fontm.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '下载', '类型', '风格'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 19. Fontex
  {
    id: 'fontex',
    name: 'Fontex',
    description: '提供免费下载字体和高级字体资源，多种类型可选',
    url: 'http://www.fontex.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.fontex.org',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '高级', '下载', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 20. FONTS2U
  {
    id: 'fonts2u',
    name: 'FONTS2U',
    description: '提供Windows和Macintosh平台的免费字体下载',
    url: 'https://fonts2u.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fonts2u.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '免费', '下载', 'Windows', 'Mac'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 21. Lost Type
  {
    id: 'losttype',
    name: 'Lost Type',
    description: '协作式数字字体铸造厂，提供独特风格的字体资源',
    url: 'http://www.losttype.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.losttype.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '协作', '数字', '铸造', '独特'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 22. Urban Fonts
  {
    id: 'urbanfonts',
    name: 'Urban Fonts',
    description: '提供免费字体和免费装饰字体下载',
    url: 'https://www.urbanfonts.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.urbanfonts.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '装饰', '免费', '下载', '英文'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 23. Fontsquirrel
  {
    id: 'fontsquirrel',
    name: 'Fontsquirrel',
    description: '为平面设计师提供的免费字体资源，高质量可商用',
    url: 'https://www.fontsquirrel.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.fontsquirrel.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '设计', '免费', '平面', '商用'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 24. Typekit
  {
    id: 'uiedfont',
    name: 'UIED字体',
    description: '提供高质量免费资源字体资源',
    url: 'https://www.uied.cn/category/pingmian/font',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '高质量', '免费', 'Adobe'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 25. Google Font
  {
    id: 'googlefonts',
    name: 'Google Font',
    description: '通过出色的排版使网页更美观、更快速、更开放',
    url: 'https://fonts.google.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fonts.google.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '网页', '开源', '免费', 'Google'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 26. Ion Icons
  {
    id: 'ionicons',
    name: 'Ion Icons',
    description: 'Ionic Framework的高级图标字体，可用于网页和应用开发',
    url: 'http://ionicons.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://ionicons.com',
    category: 'design-resources',
    subcategory: 'design-resources-fontwebsites',
    tags: ['字体', '图标', 'Ionic', '开发', '应用'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  /* =========================================================
   * 设计素材 - 音效网站
   * ========================================================= */

  // 1. StockTune
  {
    id: 'stocktune',
    name: 'StockTune',
    description: '免费商用的AI生成音乐网站，提供海量配乐和BGM下载，满足内容创作者的配乐需求',
    url: 'https://stocktune.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://stocktune.com',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音效', 'AI生成', '配乐', 'BGM', '免费商用'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 2. 耳聆网
  {
    id: 'ear0',
    name: '耳聆网',
    description: '国内老牌音频网站，提供高质量音频素材，完全免费且不限下载次数',
    url: 'https://www.ear0.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.ear0.com',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音效', '音频', '国内', '免费', '配乐'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 3. Fesliyan Studios
  {
    id: 'fesliyanstudios',
    name: 'Fesliyan Studios',
    description: '专业音效素材平台，提供超过70万首免版权音效素材，覆盖各种情感、主题、影视和游戏分类',
    url: 'https://www.fesliyanstudios.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.fesliyanstudios.com',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音效', '免版权', '素材', '影视', '游戏'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },

  // 4. 淘声网
  {
    id: 'tosound',
    name: '淘声网',
    description: '提供高质量音频素材，但有每日下载数量限制，无需注册即可下载',
    url: 'https://www.tosound.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.tosound.com',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音效', '音频', '素材', '配乐', '国内'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 5. Sounds Crate
  {
    id: 'sfx',
    name: 'Sounds Crate',
    description: '优质音效资源网站，提供多种类高质量音效，部分素材免费下载',
    url: 'https://sfx.productioncrate.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://sfx.productioncrate.com',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音效', '素材', '免费', '资源', '高质量'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 6. 声音网
  {
    id: 'shengyin',
    name: '声音网',
    description: '提供海量声音素材，免注册即可免费下载，是国内知名的声音素材下载网站',
    url: 'http://www.shengyin.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.shengyin.com',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音效', '声音', '素材', '免费', '国内'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 7. 爱给网-音效
  {
    id: 'aigei',
    name: '爱给网-音效',
    description: '中国最大的数字娱乐免费素材下载网站，提供免费音效配乐、3D模型、视频和游戏素材资源',
    url: 'https://www.aigei.com/sound/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.aigei.com/sound',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音效', '配乐', '免费', '素材', '游戏'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },

  // 8. SoundGator
  {
    id: 'soundgator',
    name: 'SoundGator',
    description: '实用的免费音效资源下载网站，提供各种自然音效的下载，需邮箱注册',
    url: 'https://www.soundgator.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.soundgator.com',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音效', '自然', '资源', '免费', '下载'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 9. Musicbed
  {
    id: 'musicbed',
    name: 'Musicbed',
    description: '优质音乐网站，提供大量优质纯音乐，音频素材偏向西方风格',
    url: 'https://www.musicbed.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.musicbed.com',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音乐', '纯音乐', '配乐', '西方', '素材'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 10. Bensound
  {
    id: 'bensound',
    name: 'Bensound',
    description: '无版权的音频网站，为动效和视频制作提供必要的无版权音频素材',
    url: 'https://www.bensound.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.bensound.com',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音频', '无版权', '视频', '动效', '制作'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 11. Springin
  {
    id: 'springin',
    name: 'Springin Sound Stock',
    description: '优质的免费音效网站，提供超过1000种音效，有详细分类且下载无限制',
    url: 'https://www.springin.org/sound-stock/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.springin.org/sound-stock',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音效', '免费', '分类', '下载', '视频'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 12. MyFreeMP3
  {
    id: 'myfreemp3',
    name: 'MyFreeMP3',
    description: '简洁的免费音乐下载网站，支持直接搜索和在线播放，还提供热门音乐推荐',
    url: 'https://tools.liumingye.cn/music/#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tools.liumingye.cn/music/#',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音乐', '下载', '免费', '在线', '播放'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 13. 5SING
  {
    id: '5sing',
    name: '中国原创音乐基地 5SING',
    description: '中国原创音乐基地，收集大量网络歌手原创音乐和翻唱，提供伴奏和歌词免费下载',
    url: 'http://5sing.kugou.com/index.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://5sing.kugou.com/index.html',
    category: 'design-resources',
    subcategory: 'design-resources-soundeffects',
    tags: ['音乐', '原创', '伴奏', '歌词', '中国'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 设计素材 - PPT资源
   * ========================================================= */

  // 1. 第一PPT
  {
    id: '1ppt',
    name: '第一PPT',
    description: '提供各类PPT模板免费下载，包括PPT背景图、PPT素材、PPT图表、精美PPT和PPT课件等',
    url: 'https://www.1ppt.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.1ppt.com',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '模板', '免费', '素材', '背景'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 2. 优品PPT
  {
    id: 'ypppt',
    name: '优品PPT',
    description: '提供高质量的PPT模板、PPT图表和PPT背景图等资源',
    url: 'http://www.ypppt.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.ypppt.com',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '模板', '图表', '高质量', '素材'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 3. PPT宝藏
  {
    id: 'pptbz',
    name: 'PPT宝藏',
    description: '提供大量好看漂亮的PPT模板、PPT教程、PPT图标和PPT素材等资源',
    url: 'http://www.pptbz.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.pptbz.com',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '模板', '教程', '图标', '素材'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 4. OfficePLUS
  {
    id: 'officeplus',
    name: 'OfficePLUS',
    description: '微软Office官方在线模板网站，提供各类精品PPT模板、Word简历和Excel图表等资源',
    url: 'https://www.officeplus.cn/Template/Home.shtml',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.officeplus.cn/Template/Home.shtml',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '微软', '官方', '模板', 'Office'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 5. 稻壳儿
  {
    id: 'docer',
    name: '稻壳儿',
    description: '金山办公旗下WPS办公资源分享平台，提供PPT模板、PPT背景图和PPT素材等资源',
    url: 'https://www.docer.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.docer.com',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', 'WPS', '模板', '素材', '资源'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 6. PPT设计教程网
  {
    id: 'pptfans',
    name: 'PPT设计教程网',
    description: '提供PPT设计教程和高品质PPT模板素材，帮助用户从入门到精通PPT设计',
    url: 'https://www.pptfans.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pptfans.cn',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '教程', '设计', '模板', '素材'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 7. 演界网
  {
    id: 'yanj',
    name: '演界网',
    description: '专业PPT模板交易平台，提供PPT模板、PPT图表、动态PPT和PPT动画等资源',
    url: 'http://www.yanj.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.yanj.cn',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '模板', '图表', '动画', '专业'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 8. PPT世界
  {
    id: 'pptx',
    name: 'PPT世界',
    description: 'PPT爱好者交流学习社区，提供PPT设计教程、PPT动画教程和PPT模板素材等资源',
    url: 'https://www.pptx.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pptx.cn',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '社区', '教程', '动画', '模板'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 9. PPTmall
  {
    id: 'pptmall',
    name: 'PPTmall',
    description: '高质量PPT模板素材库，提供智能搜索和科学分类，帮助用户快速找到需要的PPT素材',
    url: 'http://www.pptmall.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.pptmall.net',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '模板', '素材', '高质量', '搜索'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 10. iSlide
  {
    id: 'islide',
    name: 'iSlide',
    description: '实用的PPT插件，提供大量原创可商用PPT模板、主题素材和设计辅助功能',
    url: 'https://www.islide.cc/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.islide.cc',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '插件', '模板', '辅助', '设计'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 11. 扑奔PPT
  {
    id: 'pooban',
    name: '扑奔PPT',
    description: '整合互联网碎片化PPT资源，提供高质量PPT制作版式灵感和PPT背景图片等素材',
    url: 'https://www.pooban.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pooban.com',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '灵感', '背景', '模板', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 12. 51PPT模板网
  {
    id: '51pptmoban',
    name: '51PPT模板网',
    description: '提供原创PPT模板和优质PPT模板下载，包括动态PPT模板和宽屏PPT模板等资源',
    url: 'https://www.51pptmoban.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.51pptmoban.com',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '模板', '动态', '宽屏', '原创'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 13. 顶尖PPT
  {
    id: 'gfxaa',
    name: '顶尖PPT',
    description: '分享来自全球最顶尖、最时尚的Keynote和PowerPoint模板',
    url: 'https://www.gfxaa.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gfxaa.com',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', 'Keynote', '模板', '顶尖', '时尚'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 14. Beautiful.ai
  {
    id: 'beautiful',
    name: 'Beautiful.ai',
    description: '适合团队使用的演示文稿软件，提供协作功能和品牌一致性，提升演示设计水平',
    url: 'https://www.beautiful.ai/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.beautiful.ai',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', 'AI', '协作', '设计', '演示'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },

  // 15. JustFreeSlide
  {
    id: 'justfreeslide',
    name: 'JustFreeSlide',
    description: '免费PPT模板和Keynote模板网站，为谷歌简报、PowerPoint和Keynote讲演打造',
    url: 'https://justfreeslide.com/zh/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://justfreeslide.com/zh',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', 'Keynote', '模板', '免费', 'Google'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 16. PPTSTORE
  {
    id: 'pptstore',
    name: 'PPTSTORE',
    description: '原创PPT模板下载平台，提供专业的PPT模板和Keynote模板下载及设计服务',
    url: 'https://www.pptstore.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pptstore.net',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '原创', '模板', 'Keynote', '专业'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 17. 叮当设计
  {
    id: 'dingdangsheji',
    name: '叮当设计',
    description: '分享优质设计资源的网站，提供PPT模板、PSD源文件和海报等设计素材',
    url: 'https://www.dingdangsheji.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.dingdangsheji.com',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '设计', '素材', '免费', 'PSD'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 18. 办公资源网
  {
    id: 'bangongziyuan',
    name: '办公资源网',
    description: '专注海量办公资源下载的网站，提供各种PPT模板、Excel模板和Word模板等资源',
    url: 'https://www.bangongziyuan.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.bangongziyuan.com',
    category: 'design-resources',
    subcategory: 'design-resources-ppt',
    tags: ['PPT', '办公', '资源', '模板', '素材'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 设计素材 - 3D素材
   * ========================================================= */

  // 1. 堆友
  {
    id: 'd-design',
    name: '堆友',
    description: '阿里巴巴设计团队打造的设计师服务平台，提供海量高品质3D素材、实时在线渲染和多元场景功能应用',
    url: 'https://d.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://d.design',
    category: 'design-resources',
    subcategory: 'design-resources-3d',
    tags: ['3D', '素材', '阿里巴巴', '在线', '免费商用'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 2. 潮国创意
  {
    id: 'chaopx',
    name: '潮国创意',
    description: '国内正版原创素材网站，提供高质量3D设计、电商设计、平面设计和原创图片素材',
    url: 'https://chaopx.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://chaopx.com',
    category: 'design-resources',
    subcategory: 'design-resources-3d',
    tags: ['3D', '素材', '创意', '原创', '可商用'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 3. 3Dicons
  {
    id: '3dicons',
    name: '3Dicons',
    description: '开源3D图标库，提供超过1440个免费商用的3D图标',
    url: 'https://3dicons.co/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://3dicons.co',
    category: 'design-resources',
    subcategory: 'design-resources-3d',
    tags: ['3D', '图标', '开源', '免费', '商用'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 4. Shapefest
  {
    id: 'shapefest',
    name: 'Shapefest',
    description: '庞大的免费3D对象库，提供超过10万张精美3D对象的透明PNG图像',
    url: 'https://www.shapefest.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.shapefest.com',
    category: 'design-resources',
    subcategory: 'design-resources-3d',
    tags: ['3D', '对象', 'PNG', '透明', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 5. Peeps
  {
    id: 'peeps',
    name: 'Peeps',
    description: '交互式3D头像生成器，可创建超过2.8亿种可能的头像组合，免费用于个人和商业项目',
    url: 'https://peeps.ui8.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://peeps.ui8.net',
    category: 'design-resources',
    subcategory: 'design-resources-3d',
    tags: ['3D', '头像', '生成器', '交互', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 6. Free3D
  {
    id: 'free3d',
    name: 'Free3D',
    description: '提供大量免费和付费的3D模型、纹理和材质资源',
    url: 'https://free3d.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://free3d.com',
    category: 'design-resources',
    subcategory: 'design-resources-3d',
    tags: ['3D', '模型', '纹理', '材质', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 7. SuperScene
  {
    id: 'superscene',
    name: 'SuperScene',
    description: '提供高质量3D场景和素材资源，适用于各种3D设计和渲染项目',
    url: 'https://superscene.pro/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://superscene.pro',
    category: 'design-resources',
    subcategory: 'design-resources-3d',
    tags: ['3D', '场景', '素材', '渲染', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 8. Mantissa
  {
    id: 'mantissa',
    name: 'Mantissa',
    description: '提供上百款可商用的Blender循环动画工程文件和免费CG资源',
    url: 'https://mantissa.xyz/free.html',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxMzcsMjEyLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDIyOSwxNjQpIiBjeD0iMTUiIGN5PSI3LjUiIHI9IjYwIiAgb3BhY2l0eT0iLjQiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD0icmdiKDExNCwxMjIsMjI5KSIgY3g9IjcxIiBjeT0iMTQyIiByPSI1MCIgIG9wYWNpdHk9Ii42Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNTAiIHRleHQtY29weT0iZmFzdCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1yaWdodHM9ImFkbWluIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCdNaWNyb3NvZnQgWWFoZWknIj7ngqs8L3RleHQ+PC9zdmc+',
    category: 'design-resources',
    subcategory: 'design-resources-3d',
    tags: ['3D', 'Blender', '动画', 'CG', '可商用'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 9. 3D Icons
  {
    id: '3dicons-com',
    name: '3D Icons',
    description: '提供各种风格的3D图标资源，适用于UI/UX设计和数字产品',
    url: 'https://www.3dicons.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.3dicons.com',
    category: 'design-resources',
    subcategory: 'design-resources-3d',
    tags: ['3D', '图标', 'UI', 'UX', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 设计素材 - 3D模型
   * ========================================================= */

  // 1. TurboSquid
  {
    id: 'turbosquid',
    name: 'TurboSquid',
    description: '全球知名的多格式3D模型素材网站，提供免费和付费的高质量3D模型资源',
    url: 'https://www.turbosquid.com/Search/3D-Models/free',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.turbosquid.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '免费', '素材', '高质量', '专业'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 2. Sketchfab
  {
    id: 'sketchfab',
    name: 'Sketchfab',
    description: '世界最大的3D内容发布、分享和发现平台，支持网页、移动端、AR和VR',
    url: 'https://sketchfab.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://sketchfab.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '社区', '分享', 'AR', 'VR'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 3. 3D Warehouse
  {
    id: '3dwarehouse',
    name: '3D Warehouse',
    description: 'SketchUp的3D模型共享与下载平台，提供海量可搜索的预制3D模型',
    url: 'https://3dwarehouse.sketchup.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://3dwarehouse.sketchup.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'SketchUp', '分享', '社区', '下载'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 4. Free3D.io
  {
    id: 'free3d-io',
    name: 'Free3D.io',
    description: '提供超过10万个免费3D模型和物体，支持.gsm、.obj、.3ds等多种格式下载',
    url: 'https://free3d.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://free3d.io',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '免费', '多格式', '下载', '素材'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 5. CGTrader
  {
    id: 'cgtrader',
    name: 'CGTrader',
    description: '3D模型交易平台，提供大量免费和付费的高质量3D模型资源',
    url: 'https://www.cgtrader.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.cgtrader.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '交易', '素材', '免费', '付费'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 6. 3D侠
  {
    id: '3dxia',
    name: '3D侠',
    description: '国内知名3D模型网站，拥有30多万模型素材库，提供家装、公装、场景等免费3D模型下载',
    url: 'http://www.3dxia.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.3dxia.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '免费', '素材', '国内', '设计'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },

  // 7. 3D溜溜
  {
    id: '3d66',
    name: '3D溜溜',
    description: '提供3D模型库、SU模型库、3D贴图材质等资源的免费高速下载服务',
    url: 'https://www.3d66.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.3d66.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '素材', '贴图', '材质', '国内'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 8. Design Connected
  {
    id: 'designconnected',
    name: 'Design Connected',
    description: '室内设计领域高质量家具3D模型平台，为室内设计师和可视化艺术家提供逼真的3D模型',
    url: 'https://www.designconnected.com/Freebies/',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2024/07/4kwXup-20240728.jpg',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '室内设计', '家具', '逼真', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 9. 3DSky
  {
    id: '3dsky',
    name: '3DSky',
    description: '多领域3D模型下载平台，提供家具、浴室、装饰、照明等3D模型和材质纹理',
    url: 'https://3dsky.org/3dmodels',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://3dsky.org/3dmodels',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '室内设计', '材质', '纹理', '装饰'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 10. Free the Models
  {
    id: 'telias',
    name: 'Free the Models',
    description: '提供多格式模型文件和丰富纹理资源，支持3ds、unity3d、bryce、poser等多种格式',
    url: 'http://telias.free.fr/models_wavefront_menu.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://telias.free.fr/models_wavefront_menu.html',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '纹理', '多格式', '免费', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 11. PixelSquid
  {
    id: 'pixelsquid',
    name: 'PixelSquid',
    description: '提供海量可旋转的3D模型，模型光影会随旋转角度变化，拥有强大的分类和搜索功能',
    url: 'https://www.pixelsquid.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pixelsquid.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '旋转', '光影', '搜索', '分类'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 12. 云模型
  {
    id: 'yunmoxing',
    name: '云模型',
    description: '中文3D模型库，提供工业设计、珠宝、CG、手办、家居等多种类型的3D模型',
    url: 'https://www.yunmoxing.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.yunmoxing.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '中文', '工业设计', '珠宝', 'CG'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 13. BIM Objects
  {
    id: 'bimobject',
    name: 'BIM Objects',
    description: '丰富的BIM模型资源平台，覆盖市场所需的各类BIM模型类型',
    url: 'https://www.bimobject.com/zh',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.bimobject.com/zh',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['BIM', '模型', '资源', '建筑', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 14. C4D之家
  {
    id: 'c4d',
    name: 'C4D之家',
    description: '提供CINEMA 4D教程、模型、插件、工程文件、材质和3D模型等学习资源',
    url: 'https://www.c4d.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.c4d.cn',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['C4D', '3D模型', '教程', '插件', '素材'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 15. Thangs
  {
    id: 'thangs',
    name: 'Thangs',
    description: '免费3D社区协作平台，提供无限下载和安全存储，是唯一具有几何搜索功能的平台',
    url: 'https://thangs.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://thangs.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '社区', '协作', '免费', '几何搜索'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 16. CG模型网
  {
    id: 'cgmodel',
    name: 'CG模型网',
    description: '聚集全球三维艺术设计师的平台，提供3dmax、maya、c4d等多种格式的3D模型下载',
    url: 'https://www.cgmodel.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.cgmodel.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '艺术', '设计', '教程', '社区'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 17. ThreeDScans
  {
    id: 'threedscans',
    name: 'ThreeDScans',
    description: '由Oliver Laric发起的3D扫描项目，与欧洲博物馆合作提供高质量、高精度的雕塑3D模型',
    url: 'https://threedscans.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://threedscans.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '扫描', '雕塑', '博物馆', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 18. XOIO AIR
  {
    id: 'xoio-air',
    name: 'XOIO AIR',
    description: '提供高清人物模型和欧美大城市的blender3D模型下载',
    url: 'https://xoio-air.de/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://xoio-air.de',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'Blender', '人物', '城市', '高清'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 19. 微元素E3D
  {
    id: 'element3ds',
    name: '微元素E3D',
    description: 'AI在游戏资源与美术互动中的应用平台，提供各种3D游戏资源与美术素材',
    url: 'https://www.element3ds.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.element3ds.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'AI', '游戏', '美术', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 20. Blender布的
  {
    id: 'blenderco',
    name: 'Blender布的',
    description: 'Blender（布兰德）是一款开源免费全能的跨平台三维软件，该网站提供相关资源和模型',
    url: 'http://blenderco.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://blenderco.cn',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'Blender', '开源', '免费', '三维'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 21. 模型资源网
  {
    id: 'models-resource',
    name: '模型资源网',
    description: '提供各类3D模型资源的下载和分享平台',
    url: 'https://www.models-resource.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.models-resource.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '资源', '下载', '分享', '平台'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 22. 菜鸟C4D
  {
    id: 'c4dcn',
    name: '菜鸟C4D',
    description: '专业C4D网站，提供C4D教程、模型、插件、工程文件、建模与动画资源',
    url: 'https://www.c4dcn.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.c4dcn.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'C4D', '教程', '插件', '素材'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 23. C4DSKY
  {
    id: 'c4dsky',
    name: 'C4DSKY',
    description: '提供Cinema 4D、AE资源、插件、教程和素材的综合平台',
    url: 'https://c4dsky.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://c4dsky.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'C4D', 'AE', '插件', '教程'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 24. 魔顿
  {
    id: 'modown',
    name: '魔顿',
    description: '免费C4D资源下载平台，提供C4D模型、插件、纹理贴图等资源分享',
    url: 'http://www.modown.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.modown.cn',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'C4D', '纹理', '插件', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 25. 3DExport
  {
    id: '3dexport',
    name: '3DExport',
    description: '3D模型交易市场，可以买卖3D模型、CG纹理和用于3D打印的数字对象',
    url: 'https://3dexport.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://3dexport.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '交易', 'CG纹理', '3D打印', '版税'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 26. 室内人模型站
  {
    id: 'mx-snren',
    name: '室内人模型站',
    description: '提供高质量室内3D模型下载，专注于室内设计师的3D模型资源',
    url: 'http://mx.snren.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://mx.snren.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '室内设计', '家装', '精品', '下载'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 27. 123CG网
  {
    id: '123cgw',
    name: '123CG网',
    description: '专业CG资源网，提供Unity/UE4模型、游戏资源、Daz Studio模型等各类素材',
    url: 'http://www.123cgw.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.123cgw.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'Unity', 'UE4', '游戏', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 28. CGJOY论坛
  {
    id: 'cgjoy',
    name: 'CGJOY论坛',
    description: '中国游戏特效、游戏动画学习平台，提供3D模型、游戏特效参考和游戏动作库',
    url: 'https://www.cgjoy.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.cgjoy.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '游戏', '特效', '动画', '学习'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 29. CG99
  {
    id: 'cg99',
    name: 'CG99（原游美网）',
    description: '汇集数十万精品CG模型素材和3D模型，专注CG美术游戏动画的互动平台',
    url: 'https://www.cg99.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.cg99.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'CG', '游戏', '动画', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 30. 3DDD
  {
    id: '3ddd',
    name: '3DDD',
    description: '俄罗斯3D模型资源网站，提供高质量的3D模型和素材',
    url: 'https://3ddd.ru/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://3ddd.ru',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '素材', '俄罗斯', '高质量', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 31. 青模网
  {
    id: 'qingmo',
    name: '青模网',
    description: '提供原创3D模型、SU模型、贴图库、vray材质、CAD图库等设计素材',
    url: 'https://www.qingmo.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.qingmo.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'SU模型', '贴图', '材质', 'CAD'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 32. Pinshape
  {
    id: 'pinshape',
    name: 'Pinshape',
    description: '小物件3D模型资源网站，适合3D打印和小型模型制作',
    url: 'https://pinshape.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pinshape.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '小物件', '3D打印', '模型', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 33. Highend3D
  {
    id: 'highend3d',
    name: 'Highend3D',
    description: '专业级3D模型资源网站，面向高端3D艺术家和设计师',
    url: 'https://www.highend3d.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.highend3d.com',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '专业', '高端', '艺术', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 34. C4D Zone
  {
    id: 'c4dzone',
    name: 'C4D Zone',
    description: '全免费C4D模型资源网站，提供各类Cinema 4D素材',
    url: 'https://www.c4dzone.com/en/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.c4dzone.com/en',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', 'C4D', '免费', '素材', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 35. 堆友
  {
    id: 'd-design',
    name: '堆友',
    description: 'Alibaba Design打造的设计师全成长周期服务平台，提供高品质3D素材和在线渲染',
    url: 'https://d.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://d.design',
    category: 'design-resources',
    subcategory: 'design-resources-3dmodels',
    tags: ['3D模型', '阿里巴巴', '设计', '在线渲染', '免费商用'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 设计素材 - AE/PR模板
   * ========================================================= */

  // 1. AE模板库
  {
    id: 'aemobanku',
    name: 'AE模板库',
    description: '为影视后期设计师打造的交流平台，提供免费AE模板素材下载和国内外CG佳作分享',
    url: 'https://www.aemobanku.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.aemobanku.com',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE模板', '影视后期', '素材', '免费', '交流'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 2. CG爱好者网
  {
    id: 'cgahz',
    name: 'CG爱好者网',
    description: '致力于分享AE模板、3D模型、AE素材等CG资源，同时分享大量优质CG作品',
    url: 'http://www.cgahz.com/aemoban/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.cgahz.com/aemoban',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE模板', 'CG资源', '素材', '作品分享', '后期'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 3. 微镜映画资源网
  {
    id: 'microlensyh',
    name: '微镜映画资源网',
    description: '免费提供AE模板、AE教程、AE工程文件、MAYA教程等影视后期设计资源',
    url: 'http://microlensyh.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://microlensyh.com',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE模板', '教程', '工程文件', 'MAYA', '影视后期'],
    isHot: true,
    isFeatured: false,
    rating: 4.6
  },

  // 4. 爱给网
  {
    id: 'aigei',
    name: '爱给网',
    description: '中国最大的数字娱乐免费素材下载网站，提供音效配乐、3D模型、视频素材等资源',
    url: 'https://www.aigei.com/video/video/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.aigei.com/video/video',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE模板', '视频素材', '配乐', '3D模型', '免费'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 5. C4DSKY
  {
    id: 'c4dsky-ae',
    name: 'C4DSKY AE模板区',
    description: '提供AE模板、Cinema 4D资源、中文教程、实拍素材、特效合成等CG资源',
    url: 'https://c4dsky.com/category/after-effect/ae-template',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://c4dsky.com',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE模板', 'C4D', '教程', '特效', '合成'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 6. 炫酷Blender工程文件合集
  {
    id: 'mantissa-ae',
    name: '炫酷Blender工程文件合集',
    description: '提供上百款可商用的Blender循环动画工程文件和免费CG资源',
    url: 'https://mantissa.xyz/free.html',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxMzcsMjEyLDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDIyOSwxNjQpIiBjeD0iMTUiIGN5PSI3LjUiIHI9IjYwIiAgb3BhY2l0eT0iLjQiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDxjaXJjbGUgZmlsbD0icmdiKDExNCwxMjIsMjI5KSIgY3g9IjcxIiBjeT0iMTQyIiByPSI1MCIgIG9wYWNpdHk9Ii42Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNTAiIHRleHQtY29weT0iZmFzdCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1yaWdodHM9ImFkbWluIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCdNaWNyb3NvZnQgWWFoZWknIj7ngqs8L3RleHQ+PC9zdmc+',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['Blender', '动画', '工程文件', '商用', 'CG资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 7. AE模板精品站
  {
    id: 'adobeae',
    name: 'AE模板精品站',
    description: '致力于分享众多精品AE模板，提供免费下载服务',
    url: 'https://www.adobeae.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.adobeae.com',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE模板', '精品', '免费下载', '素材', '后期'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 8. 龋齿一号GFXCamp
  {
    id: 'gfxcamp',
    name: '龋齿一号GFXCamp',
    description: 'CG营地，提供高速下载最新CG素材资源，包括AE/PR模板等',
    url: 'http://www.gfxcamp.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.gfxcamp.com',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE模板', 'PR模板', 'CG素材', '高速下载', '资源'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 9. LookAE.com
  {
    id: 'lookae',
    name: 'LookAE.com',
    description: '大众脸提供的CG后期技术交流平台，分享AE/PR模板和教程',
    url: 'https://www.lookae.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/04/87755-www.lookae.com.png',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE', 'PR', 'CG后期', '技术交流', '教程'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 10. 新CG儿
  {
    id: 'newcger',
    name: '新CG儿',
    description: '专注于CG资源分享的平台，提供AE模板、PR模板等后期制作素材',
    url: 'https://www.newcger.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/04/6bbff-www.newcger.com.png',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE模板', 'PR模板', 'CG资源', '后期制作', '素材'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 11. CG资源网
  {
    id: 'cgufo',
    name: 'CG UFO',
    description: 'CG资源一网打尽，提供全面的AE模板、PR模板等CG资源下载',
    url: 'https://www.cgufo.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.cgufo.com',
    category: 'design-resources',
    subcategory: 'design-resources-aepr',
    tags: ['AE模板', 'PR模板', 'CG资源', '素材', '下载'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },

  /* =========================================================
   * 设计素材 - 免抠素材
   * ========================================================= */

  // 1. PNGDirs
  {
    id: 'pngdirs',
    name: 'PNGDirs',
    description: 'PNG图片目录库，提供海量空白透明背景免抠PNG图片素材，所有资源均可免费下载和商用',
    url: 'https://www.pngdirs.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pngdirs.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', 'PNG', '透明背景', '免费', '商用'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 2. CleanPNG
  {
    id: 'cleanpng',
    name: 'CleanPNG',
    description: '提供高质量透明底素材的免费图库，拥有超过300万张免扣PNG图片，无下载额度限制',
    url: 'https://www.cleanpng.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.cleanpng.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', 'PNG', '透明底', '高分辨率', '免费'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 3. StickPNG
  {
    id: 'stickpng',
    name: 'StickPNG',
    description: '提供各种主题的透明PNG图片素材，涵盖动物、艺术、商业、电影、食品、游戏等多个领域',
    url: 'https://www.stickpng.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.stickpng.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', 'PNG', '透明背景', '多主题', '设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  // 4. 觅元素
  {
    id: '51yuansu',
    name: '觅元素',
    description: '设计元素的免费下载网站，提供位图、透明背景素材、高清PNG、漂浮元素等免抠设计元素',
    url: 'https://www.51yuansu.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.51yuansu.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', '设计元素', '透明背景', '中文', '免费'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },

  // 5. SVG Silh
  {
    id: 'svgsilh',
    name: 'SVG Silh',
    description: '免费开源的矢量素材网站，收录超过9万多张矢量素材，包括人物、动物、节日、建筑等类型',
    url: 'https://svgsilh.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://svgsilh.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', 'SVG', '矢量', '开源', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  // 6. Freepik
  {
    id: 'freepik-cutout',
    name: 'Freepik 免抠素材',
    description: '优质矢量图素材网站，提供免费商用的透明背景图片和免抠素材',
    url: 'https://www.freepik.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.freepik.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', '矢量图', '商用', '免费', '国际'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },

  // 7. PNG images
  {
    id: 'pngimg',
    name: 'PNG images',
    description: '提供详细分类的大型PNG图库，图库数量巨大，素材精度中等',
    url: 'https://pngimg.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pngimg.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', 'PNG', '分类', '图库', '透明背景'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 8. PNGTree
  {
    id: 'pngtree-cutout',
    name: 'PNGTree',
    description: '综合素材网站，提供各类2D或3D的PNG免抠图，以及贴图素材、PPT元素等资源',
    url: 'https://pngtree.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pngtree.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', 'PNG', 'PSD', '免费', '设计'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  // 9. PNGBAG
  {
    id: 'pngbag',
    name: 'PNGBAG',
    description: '提供500万+PNG图片以及50万+高清背景图片素材的免费下载服务',
    url: 'https://www.pngbag.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/04/5c552-www.pngbag.com.png',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', 'PNG', '高清', '背景图', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  // 10. PixelSquid
  {
    id: 'pixelsquid-cutout',
    name: 'PixelSquid',
    description: '提供3D素材，可自由调整角度后再下载PNG格式，风格写实，素材精细',
    url: 'https://www.pixelsquid.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pixelsquid.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', '3D', 'PNG', '角度调整', '写实'],
    isHot: false,
    isFeatured: true,
    rating: 4.8
  },

  // 11. YouIcons
  {
    id: 'cn-youicons',
    name: 'YouIcons',
    description: '提供2600000+的LOGO资源，适合个体创业者和企业使用，可免费下载高清LOGO',
    url: 'https://cn.youicons.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cn.youicons.com',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', 'LOGO', '徽标', '品牌', '免费'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  // 12. 幽灵疾步
  {
    id: 'ghostoact',
    name: '幽灵疾步',
    description: '英雄联盟内容聚合网站，提供英雄联盟相关的免抠素材、壁纸和资源',
    url: 'https://www.ghostoact.com/arts',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.ghostoact.com/arts',
    category: 'design-resources',
    subcategory: 'design-resources-cutout',
    tags: ['免抠素材', '英雄联盟', '游戏', '壁纸', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  

  /* =========================================================
   * 设计素材 - 图标素材 (design-resources-icons)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 可商用图库 (design-resources-images)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 可商用插画 (design-resources-illustrations)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 可商用视频 (design-resources-video)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 可商用字体 (design-resources-fonts)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 样机素材 (design-resources-mockups)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 字体网站 (design-resources-fontwebsites)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 音效网站 (design-resources-soundeffects)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - PPT资源 (design-resources-ppt)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 3D素材 (design-resources-3d)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 3D模型 (design-resources-3dmodels)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - AE/PR模板 (design-resources-aepr)
   * ========================================================= */

  /* =========================================================
   * 设计素材 - 免抠素材 (design-resources-cutout)
   * ========================================================= */

/* =========================================================
   * 字体资源 - 中文字体 (font-chinese)
   * ========================================================= */

  {
    id: 'uiedfont',
    name: 'UIED字体',
    description: '免费字体下载网站，包含大量英文字体',
    url: 'https://www.uied.cn/category/pingmian/font',
    category: 'font',
    subcategory: 'font-english',
    tags: ['免费字体', '英文字体', '下载'],
    isHot: true,
    isFeatured: false,
  },

  /* =========================================================
   * 配色工具 - 配色方案 (color-palette)
   * ========================================================= */
  {
    id: 'coolors',
    name: 'Coolors',
    description: '快速生成配色方案的在线工具',
    url: 'https://coolors.co',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['配色', '调色板', '在线工具'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 'colorhunt',
    name: 'Color Hunt',
    description: '精美的调色板集合，设计师的色彩灵感来源',
    url: 'https://colorhunt.co',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['调色板', '色彩灵感', '配色方案'],
    isHot: true,
    isFeatured: false,
  },
  {
    id: 'adobe-color',
    name: 'Adobe Color',
    description: 'Adobe官方配色工具，提供专业配色方案生成',
    url: 'https://color.adobe.com',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['Adobe', '配色', '专业工具'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 'palettes-color',
    name: 'Palettes',
    description: '在线配色工具，快速生成和分享配色方案',
    url: 'https://palettes.shecodes.io',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['配色', '在线工具', '生成器'],
    isHot: false,
    isFeatured: false,
  },
  {
    id: 'colorspace',
    name: 'ColorSpace',
    description: '智能配色工具，AI生成和谐配色方案',
    url: 'https://mycolor.space',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['AI配色', '智能生成', '配色方案'],
    isHot: true,
    isFeatured: false,
  },
  {
    id: 'colormind',
    name: 'Colormind',
    description: 'AI驱动的配色工具，智能生成配色方案',
    url: 'http://colormind.io',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['AI', '配色', '智能生成'],
    isHot: false,
    isFeatured: false,
  },
  {
    id: 'paletton',
    name: 'Paletton',
    description: '专业配色轮工具，基于色彩理论生成配色',
    url: 'https://paletton.com',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['配色轮', '色彩理论', '专业配色'],
    isHot: false,
    isFeatured: true,
  },
  {
    id: 'brandcolors',
    name: 'Brand Colors',
    description: '收集各大品牌官方标准色彩的配色库',
    url: 'https://brandcolors.net',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['品牌色彩', '官方配色', '标准色'],
    isHot: false,
    isFeatured: false,
  },
  {
    id: 'colorbox',
    name: 'Colorbox',
    description: '快速生成配色方案的在线工具',
    url: 'https://colorbox.io',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['配色', '在线工具', '快速生成'],
    isHot: true,
  },
  {
    id: 'adobe-color',
    name: 'Adobe Color',
    description: 'Adobe的专业配色工具和色彩社区',
    url: 'https://color.adobe.com',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['Adobe', '专业配色', '色彩社区'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://color.adobe.com/favicon.ico'
  },
  {
    id: 'colorbox',
    name: 'Colorbox',
    description: 'Lyft设计系统的配色工具',
    url: 'https://www.colorbox.io',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['设计系统', '配色', 'Lyft'],
    isHot: false,
    isFeatured: false,
    iconUrl: ''
  },

  // 新增中国配色网站
  {
    id: 'zhongguose',
    name: '中国色',
    description: '中国传统色彩名录，收录中国古典颜色的名称、CMYK、RGB、16进制代码',
    url: 'http://zhongguose.com/',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['中国传统色彩', '古典颜色', '配色参考', '中国风'],
    isHot: true,
    isFeatured: true,
    rating: 4.8,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://zhongguose.com'
  },
  {
    id: 'webgradients',
    name: 'WebGradients',
    description: '180个线性渐变的免费集合，可用于网站的任何部分',
    url: 'https://webgradients.com/',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['渐变色', '网页配色', '免费素材', '线性渐变'],
    isHot: true,
    isFeatured: true,
    rating: 4.7,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://webgradients.com'
  },
  {
    id: 'colorspace',
    name: 'ColorSpace',
    description: '颜色调色板生成器，提供完美的颜色搭配',
    url: 'https://mycolor.space/',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['颜色搭配', '调色板生成', '配色工具', '渐变'],
    isHot: false,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mycolor.space'
  },
  {
    id: 'nipponcolors',
    name: '日本色',
    description: '日本传统色彩网站，展示250种传统日本颜色',
    url: 'https://nipponcolors.com/',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['日本传统色', '传统颜色', '色彩文化', '配色参考'],
    isHot: false,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://nipponcolors.com'
  },

  /* =========================================================
   * 配色工具 - 调色工具 (color-tools)
   * ========================================================= */
  {
    id: 'colorzilla',
    name: 'ColorZilla',
    description: '浏览器颜色选择器和取色工具',
    url: 'https://www.colorzilla.com',
    category: 'color',
    subcategory: 'color-tools',
    tags: ['取色工具', '颜色选择器', '浏览器插件'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.colorzilla.com/favicon.ico'
  },

  /* =========================================================
   * 印刷设计 - 海报设计 (print-poster)
   * ========================================================= */
  {
    id: 'canva',
    name: 'Canva',
    description: '在线平面设计工具，海报、社交媒体图片制作',
    url: 'https://www.canva.com',
    category: 'print',
    subcategory: 'print-poster',
    tags: ['在线设计', '海报', '社交媒体', '模板'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://www.canva.com/favicon.ico'
  },
  {
    id: 'poster-maker',
    name: 'DesignCap',
    description: '在线海报制作工具，提供丰富模板',
    url: 'https://www.designcap.com',
    category: 'print',
    subcategory: 'print-poster',
    tags: ['海报制作', '在线工具', '模板'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.designcap.com/favicon.ico'
  },

  // 新增中国海报设计网站
  {
    id: 'canva-cn',
    name: 'Canva可画',
    description: 'Canva中国版，在线设计工具，海报、社交媒体图片制作',
    url: 'https://www.canva.cn/',
    category: 'print',
    subcategory: 'print-poster',
    tags: ['在线设计', '海报', '中国平台', '模板'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.canva.cn'
  },
  {
    id: 'fotor-cn',
    name: 'Fotor懒设计',
    description: '在线图片编辑和平面设计工具，提供海报、名片、Logo等设计模板',
    url: 'https://www.fotor.com.cn/',
    category: 'print',
    subcategory: 'print-poster',
    tags: ['在线设计', '图片编辑', '海报模板', '中国工具'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.fotor.com.cn'
  },
  {
    id: 'chuangkit',
    name: '创客贴',
    description: '简单好用的线上图形设计工具，提供大量原创设计模板和正版素材',
    url: 'https://www.chuangkit.com/',
    category: 'print',
    subcategory: 'print-poster',
    tags: ['在线设计', '创客贴', '海报设计', '中国工具'],
    isHot: true,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.chuangkit.com'
  },
  {
    id: 'tubangzhu',
    name: '图帮主',
    description: '专业的在线平面设计工具，提供海报、名片、logo等设计服务',
    url: 'https://www.tubangzhu.com/',
    category: 'print',
    subcategory: 'print-poster',
    tags: ['平面设计', '在线工具', '设计服务', '中国平台'],
    isHot: false,
    isFeatured: true,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.tubangzhu.com'
  },

  /* =========================================================
   * 印刷设计 - 名片设计 (print-business)
   * ========================================================= */
  {
    id: 'business-card-maker',
    name: 'Business Card Maker',
    description: '专业的名片设计工具',
    url: 'https://www.canva.com/create/business-cards/',
    category: 'print',
    subcategory: 'print-business',
    tags: ['名片设计', '专业', '在线工具'],
    isHot: false,
    isFeatured: false,
    iconUrl: ''
  },

  /* =========================================================
   * 图形设计 - 标志设计 (graphic-logo)
   * ========================================================= */
  {
    id: 'logomakr',
    name: 'Logomakr',
    description: '在线Logo设计工具，简单易用',
    url: 'https://logomakr.com',
    category: 'graphic',
    subcategory: 'graphic-logo',
    tags: ['Logo设计', '在线工具', '标志'],
    iconUrl: 'https://logomakr.com/favicon.ico'
  },
  {
    id: 'logomaker',
    name: 'Logo Maker',
    description: '免费的Logo制作工具',
    url: 'https://www.logomaker.com',
    category: 'graphic',
    subcategory: 'graphic-logo',
    tags: ['Logo制作', '免费', '在线工具'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.logomaker.com/favicon.ico'
  },

  /* =========================================================
   * 图形设计 - 插画设计 (graphic-illustration)
   * ========================================================= */
  {
    id: 'undraw',
    name: 'unDraw',
    description: '免费的SVG插画库，可自定义颜色',
    url: 'https://undraw.co',
    category: 'graphic',
    subcategory: 'graphic-illustration',
    tags: ['SVG插画', '免费', '自定义颜色'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://undraw.co/favicon.ico'
  },
  {
    id: 'manypixels',
    name: 'ManyPixels',
    description: '免费的插画和图标库',
    url: 'https://www.manypixels.co/gallery',
    category: 'graphic',
    subcategory: 'graphic-illustration',
    tags: ['插画', '图标', '免费'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.manypixels.co/favicon.ico'
  },
  {
    id: 'drawkit',
    name: 'DrawKit',
    description: '手绘风格的插画和图标资源库',
    url: 'https://www.drawkit.io',
    category: 'graphic',
    subcategory: 'graphic-illustration',
    tags: ['手绘插画', '图标资源', '商业可用'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://www.drawkit.io/favicon.ico'
  },
  {
    id: 'humaaans',
    name: 'Humaaans',
    description: '可自定义的人物插画库',
    url: 'https://www.humaaans.com',
    category: 'graphic',
    subcategory: 'graphic-illustration',
    tags: ['人物插画', '可自定义', '免费'],
    isHot: true,
    isFeatured: false,
    iconUrl: 'https://www.humaaans.com/favicon.ico'
  },
  {
    id: 'open-peeps',
    name: 'Open Peeps',
    description: '手绘风格的人物插画库',
    url: 'https://www.openpeeps.com',
    category: 'graphic',
    subcategory: 'graphic-illustration',
    tags: ['手绘人物', '插画库', '开源'],
    isHot: false,
    isFeatured: true,
    iconUrl: 'https://www.openpeeps.com/favicon.ico'
  },
  {
    id: 'glazestock',
    name: 'GlazeStock',
    description: '免费的插画和图标资源',
    url: 'https://glazestock.com',
    category: 'graphic',
    subcategory: 'graphic-illustration',
    tags: ['免费插画', '图标资源', 'SVG'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://glazestock.com/favicon.ico'
  },

  /* =========================================================
   * 图形设计 - 图标设计 (graphic-icon)
   * ========================================================= */
  {
    id: 'feather-icons',
    name: 'Feather Icons',
    description: '简洁美观的开源图标库',
    url: 'https://feathericons.com',
    category: 'graphic',
    subcategory: 'graphic-icon',
    tags: ['图标', '开源', '简洁'],
    isHot: true,
    isFeatured: false,
    iconUrl: 'https://feathericons.com/favicon.ico'
  },
  {
    id: 'heroicons',
    name: 'Heroicons',
    description: 'Tailwind CSS团队制作的SVG图标库',
    url: 'https://heroicons.com',
    category: 'graphic',
    subcategory: 'graphic-icon',
    tags: ['SVG图标', 'Tailwind CSS', '免费'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://heroicons.com/favicon.ico'
  },
  {
    id: 'fontawesome',
    name: 'Font Awesome',
    description: '世界上最流行的图标库',
    url: 'https://fontawesome.com',
    category: 'graphic',
    subcategory: 'graphic-icon',
    tags: ['图标库', '流行', 'Web图标'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://fontawesome.com/favicon.ico'
  },
  {
    id: 'iconfont-alibaba',
    name: '阿里巴巴矢量图标库',
    description: '国内功能强大且图标内容丰富的矢量图标库',
    url: 'https://www.iconfont.cn',
    category: 'graphic',
    subcategory: 'graphic-icon',
    tags: ['矢量图标', '阿里巴巴', '中国图标库'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://www.iconfont.cn/favicon.ico'
  },
  {
    id: 'iconpark',
    name: 'IconPark',
    description: '字节跳动出品的图标库，提供多种风格图标',
    url: 'https://iconpark.oceanengine.com',
    category: 'graphic',
    subcategory: 'graphic-icon',
    tags: ['图标库', '字节跳动', '多风格'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://iconpark.oceanengine.com/favicon.ico'
  },
  {
    id: 'yesicon',
    name: 'Yesicon',
    description: '精选高质量图标库，支持多种格式下载',
    url: 'https://yesicon.app',
    category: 'graphic',
    subcategory: 'graphic-icon',
    tags: ['高质量图标', '多格式', '精选'],
    isHot: false,
    isFeatured: true,
    iconUrl: 'https://yesicon.app/favicon.ico'
  },

  /* =========================================================
   * 图形设计 - 标志设计 (graphic-logo)
   * ========================================================= */
  {
    id: 'logopond',
    name: 'LogoPond',
    description: '全球Logo设计作品展示和灵感平台',
    url: 'https://logopond.com',
    category: 'graphic',
    subcategory: 'graphic-logo',
    tags: ['Logo设计', '作品展示', '设计灵感'],
    isHot: false,
    isFeatured: true,
    iconUrl: 'https://logopond.com/favicon.ico'
  },
  {
    id: 'logolounge',
    name: 'LogoLounge',
    description: '专业Logo设计师社区和作品库',
    url: 'https://www.logolounge.com',
    category: 'graphic',
    subcategory: 'graphic-logo',
    tags: ['Logo设计', '设计师社区', '专业作品'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.logolounge.com/favicon.ico'
  },

  /* =========================================================
   * 品牌设计 - 品牌案例 (brand-cases)
   * ========================================================= */
  {
    id: 'designspiration',
    name: 'Designspiration',
    description: '设计灵感和创意作品分享平台',
    url: 'https://www.designspiration.com',
    category: 'brand',
    subcategory: 'brand-cases',
    tags: ['设计灵感', '创意作品', '分享平台'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.designspiration.com/favicon.ico'
  },

  /* =========================================================
   * 品牌设计 - 品牌工具 (brand-tools)
   * ========================================================= */
  {
    id: 'brandfolder',
    name: 'Brandfolder',
    description: '品牌资产管理平台',
    url: 'https://brandfolder.com',
    category: 'brand',
    subcategory: 'brand-tools',
    tags: ['品牌管理', '资产管理', '平台'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://brandfolder.com/favicon.ico'
  },
  {
    id: 'logomaker',
    name: 'LogoMaker',
    description: 'AI驱动的在线Logo设计工具',
    url: 'https://www.logomaker.com',
    category: 'brand',
    subcategory: 'brand-tools',
    tags: ['Logo设计', 'AI工具', '在线设计'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://www.logomaker.com/favicon.ico'
  },
  {
    id: 'looka',
    name: 'Looka',
    description: '智能Logo设计平台，快速生成专业品牌标识',
    url: 'https://looka.com',
    category: 'brand',
    subcategory: 'brand-tools',
    tags: ['Logo设计', '智能设计', '品牌标识'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://looka.com/favicon.ico'
  },
  {
    id: 'brandmark',
    name: 'Brandmark',
    description: 'AI Logo设计工具，为品牌创建独特标识',
    url: 'https://brandmark.io',
    category: 'brand',
    subcategory: 'brand-tools',
    tags: ['AI设计', 'Logo创作', '品牌工具'],
    isHot: false,
    isFeatured: true,
    iconUrl: 'https://brandmark.io/favicon.ico'
  },
  {
    id: 'tailor-brands',
    name: 'Tailor Brands',
    description: '综合品牌设计平台，提供Logo、网站、营销材料设计',
    url: 'https://www.tailorbrands.com',
    category: 'brand',
    subcategory: 'brand-tools',
    tags: ['品牌设计', '综合平台', '营销材料'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.tailorbrands.com/favicon.ico'
  },

  // 新增中国品牌工具网站
  {
    id: 'zhubajie-logo',
    name: '猪八戒网',
    description: '国内知名的创意服务平台，提供Logo设计、品牌设计、VI设计等服务',
    url: 'https://www.zbj.com/',
    category: 'brand',
    subcategory: 'brand-tools',
    tags: ['创意服务', '品牌设计', 'Logo设计', '中国平台'],
    isHot: true,
    isFeatured: true,
    rating: 4.4,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.zbj.com'
  },
  {
    id: 'yipinsheji',
    name: '一品设计',
    description: '专业的设计服务平台，提供品牌设计、包装设计、网站设计等服务',
    url: 'https://www.epwk.com/',
    category: 'brand',
    subcategory: 'brand-tools',
    tags: ['设计服务', '品牌设计', '包装设计', '中国平台'],
    isHot: false,
    isFeatured: true,
    rating: 4.2,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.epwk.com'
  },
  {
    id: 'logoko',
    name: 'LogoKO',
    description: '在线Logo设计工具，简单易用的品牌标识制作平台',
    url: 'https://www.logoko.com.cn/',
    category: 'brand',
    subcategory: 'brand-tools',
    tags: ['Logo设计', '在线工具', '品牌标识', '中国工具'],
    isHot: false,
    isFeatured: false,
    rating: 4.1,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.logoko.com.cn'
  },

  /* =========================================================
   * 图片处理 - 图片编辑 (photo-editing)
   * ========================================================= */
  {
    id: 'photopea',
    name: 'Photopea',
    description: '免费在线图片编辑器，支持PSD格式',
    url: 'https://www.photopea.com',
    category: 'photo',
    subcategory: 'photo-editing',
    tags: ['在线编辑', 'PSD', '免费', '图片处理'],
    isHot: true,
    iconUrl: 'https://www.photopea.com/favicon.ico'
  },
  {
    id: 'gimp',
    name: 'GIMP',
    description: '免费开源的图像编辑软件',
    url: 'https://www.gimp.org',
    category: 'photo',
    subcategory: 'photo-editing',
    tags: ['图像编辑', '免费', '开源'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://www.gimp.org/favicon.ico'
  },
  {
    id: 'paint-net',
    name: 'Paint.NET',
    description: 'Windows平台的免费图像编辑软件',
    url: 'https://www.getpaint.net',
    category: 'photo',
    subcategory: 'photo-editing',
    tags: ['图像编辑', '免费', 'Windows'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.getpaint.net/favicon.ico'
  },

  // 新增中国图片编辑网站
  {
    id: 'meitu-xiuxiu',
    name: '美图秀秀',
    description: '国内知名的图片美化和编辑软件，提供丰富的滤镜和美颜功能',
    url: 'https://pc.meitu.com/',
    category: 'photo',
    subcategory: 'photo-editing',
    tags: ['图片美化', '美颜', '滤镜', '中国软件'],
    isHot: true,
    isFeatured: true,
    rating: 4.5,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pc.meitu.com'
  },
  {
    id: 'picwish',
    name: 'PicWish',
    description: '佐糖旗下的在线图片处理工具，提供去背景、修复老照片、图像增强等功能',
    url: 'https://picwish.cn/',
    category: 'photo',
    subcategory: 'photo-editing',
    tags: ['在线编辑', '去背景', '图像修复', '中国工具'],
    isHot: true,
    isFeatured: true,
    rating: 4.6,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://picwish.cn'
  },
  {
    id: 'zuoyebang-qingtu',
    name: '轻图',
    description: '作业帮旗下的在线图片编辑工具，提供证件照制作、抠图、修图等功能',
    url: 'https://qingtu.cn/',
    category: 'photo',
    subcategory: 'photo-editing',
    tags: ['在线编辑', '证件照', '抠图', '中国工具'],
    isHot: false,
    isFeatured: true,
    rating: 4.3,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://qingtu.cn'
  },
  {
    id: 'gaoding',
    name: '搞定设计',
    description: '在线设计平台，提供图片编辑、海报制作、Logo设计等服务',
    url: 'https://www.gaoding.com/',
    category: 'photo',
    subcategory: 'photo-editing',
    tags: ['在线设计', '图片编辑', '海报制作', '中国平台'],
    isHot: false,
    isFeatured: false,
    rating: 4.2,
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gaoding.com'
  },

  /* =========================================================
   * 图片处理 - 图片压缩 (photo-compression)
   * ========================================================= */
  {
    id: 'tinypng',
    name: 'TinyPNG',
    description: '在线PNG和JPEG图片压缩工具',
    url: 'https://tinypng.com',
    category: 'photo',
    subcategory: 'photo-compression',
    tags: ['图片压缩', 'PNG', 'JPEG', '在线工具'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://tinypng.com/favicon.ico'
  },
  {
    id: 'compressor-io',
    name: 'Compressor.io',
    description: '在线图片压缩工具，支持多种格式',
    url: 'https://compressor.io',
    category: 'photo',
    subcategory: 'photo-compression',
    tags: ['图片压缩', '多格式', '在线工具'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://compressor.io/favicon.ico'
  },

  /* =========================================================
   * 艺术创作 - 数字绘画 (art-painting)
   * ========================================================= */
  {
    id: 'krita',
    name: 'Krita',
    description: '免费开源的数字绘画软件',
    url: 'https://krita.org',
    category: 'art',
    subcategory: 'art-painting',
    tags: ['数字绘画', '免费', '开源', '绘画软件'],
    isFeatured: true,
    iconUrl: 'https://krita.org/favicon.ico'
  },
  {
    id: 'procreate',
    name: 'Procreate',
    description: 'iPad上的专业数字绘画应用',
    url: 'https://procreate.art',
    category: 'art',
    subcategory: 'art-painting',
    tags: ['数字绘画', 'iPad', '专业', '移动应用'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://procreate.art/favicon.ico'
  },
  {
    id: 'clip-studio-paint',
    name: 'Clip Studio Paint',
    description: '专业的漫画和插画创作软件',
    url: 'https://www.clipstudio.net',
    category: 'art',
    subcategory: 'art-painting',
    tags: ['漫画', '插画', '专业软件'],
    isHot: true,
    isFeatured: false,
    iconUrl: 'https://www.clipstudio.net/favicon.ico'
  },

  /* =========================================================
   * 艺术创作 - 草图绘制 (art-sketching)
   * ========================================================= */
  {
    id: 'concepts',
    name: 'Concepts',
    description: '无限画布的设计和绘图应用',
    url: 'https://concepts.app',
    category: 'art',
    subcategory: 'art-sketching',
    tags: ['草图绘制', '无限画布', '设计应用'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://concepts.app/favicon.ico'
  },
  {
    id: 'autodesk-sketchbook',
    name: 'Autodesk SketchBook',
    description: '专业的数字绘画和草图应用',
    url: 'https://www.sketchbook.com',
    category: 'art',
    subcategory: 'art-sketching',
    tags: ['草图绘制', '数字绘画', 'Autodesk', '免费'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://www.sketchbook.com/favicon.ico'
  },
  {
    id: 'adobe-fresco',
    name: 'Adobe Fresco',
    description: 'Adobe的矢量和光栅绘画应用',
    url: 'https://www.adobe.com/products/fresco.html',
    category: 'art',
    subcategory: 'art-sketching',
    tags: ['Adobe', '矢量绘画', '光栅绘画', '云同步'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://www.adobe.com/favicon.ico'
  },

  /* =========================================================
   * 艺术创作 - 概念艺术 (art-concept)
   * ========================================================= */
  {
    id: 'corel-painter',
    name: 'Corel Painter',
    description: '专业数字绘画软件，模拟真实绘画体验',
    url: 'https://www.painterartist.com',
    category: 'art',
    subcategory: 'art-concept',
    tags: ['数字绘画', '艺术创作', '专业软件', '绘画模拟'],
    isHot: false,
    isFeatured: true,
    iconUrl: 'https://www.painterartist.com/favicon.ico'
  },
  {
    id: 'artrage',
    name: 'ArtRage',
    description: '真实感数字绘画软件，模拟传统绘画工具',
    url: 'https://www.artrage.com',
    category: 'art',
    subcategory: 'art-concept',
    tags: ['数字绘画', '传统绘画', '模拟工具', '艺术创作'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.artrage.com/favicon.ico'
  },

  /* =========================================================
   * 配色工具 - 配色灵感 (color-inspiration)
   * ========================================================= */
  {
    id: 'dribbble-colors',
    name: 'Dribbble Colors',
    description: '从Dribbble设计作品中提取的配色方案',
    url: 'https://dribbble.com/colors',
    category: 'color',
    subcategory: 'color-inspiration',
    tags: ['配色灵感', 'Dribbble', '设计作品', '色彩提取'],
    isHot: true,
    isFeatured: true
  },
  {
    id: 'materialui-colors',
    name: 'Material UI Colors',
    description: 'Google Material Design配色系统',
    url: 'https://materialui.co/colors',
    category: 'color',
    subcategory: 'color-inspiration',
    tags: ['Material Design', 'Google', '配色系统', 'UI设计'],
    isHot: true,
    isFeatured: false,
    iconUrl: 'https://materialui.co/favicon.ico'
  },
  {
    id: 'colormind',
    name: 'Colormind',
    description: 'AI驱动的配色方案生成器',
    url: 'http://colormind.io',
    category: 'color',
    subcategory: 'color-inspiration',
    tags: ['AI配色', '智能生成', '配色方案', '机器学习'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'http://colormind.io/favicon.ico'
  },

  /* =========================================================
   * 印刷设计 - 包装设计 (print-packaging)
   * ========================================================= */
  {
    id: 'packly',
    name: 'Packly',
    description: '在线包装设计和定制平台',
    url: 'https://www.packly.com',
    category: 'print',
    subcategory: 'print-packaging',
    tags: ['包装设计', '在线定制', '印刷', '包装盒'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.packly.com/favicon.ico'
  },
  {
    id: 'boxshot',
    name: 'BoxShot',
    description: '3D包装和产品展示设计软件',
    url: 'https://boxshot.com',
    category: 'print',
    subcategory: 'print-packaging',
    tags: ['3D包装', '产品展示', '包装设计', '3D渲染'],
    isHot: false,
    isFeatured: true,
    iconUrl: 'https://boxshot.com/favicon.ico'
  },

  /* =========================================================
   * 印刷设计 - 宣传册 (print-brochure)
   * ========================================================= */
  {
    id: 'lucidpress',
    name: 'Lucidpress',
    description: '在线宣传册和营销材料设计工具',
    url: 'https://www.lucidpress.com',
    category: 'print',
    subcategory: 'print-brochure',
    tags: ['宣传册设计', '营销材料', '在线设计', '协作'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.lucidpress.com/favicon.ico'
  },
  {
    id: 'flipsnack',
    name: 'FlipSnack',
    description: '交互式数字宣传册制作平台',
    url: 'https://www.flipsnack.com',
    category: 'print',
    subcategory: 'print-brochure',
    tags: ['数字宣传册', '交互式', '翻页效果', '在线发布'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.flipsnack.com/favicon.ico'
  },

  /* =========================================================
   * 图形设计 - 矢量图形 (graphic-vector)
   * ========================================================= */
  {
    id: 'inkscape',
    name: 'Inkscape',
    description: '免费开源的矢量图形编辑器',
    url: 'https://inkscape.org',
    category: 'graphic',
    subcategory: 'graphic-vector',
    tags: ['矢量图形', '免费', '开源', 'SVG'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://inkscape.org/favicon.ico'
  },
  {
    id: 'vectr',
    name: 'Vectr',
    description: '免费在线矢量图形编辑器',
    url: 'https://vectr.com',
    category: 'graphic',
    subcategory: 'graphic-vector',
    tags: ['矢量图形', '在线编辑', '免费', '协作'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://vectr.com/favicon.ico'
  },

  /* =========================================================
   * 图片处理 - 滤镜效果 (photo-filters)
   * ========================================================= */
  {
    id: 'vsco',
    name: 'VSCO',
    description: '专业的照片编辑和滤镜应用',
    url: 'https://vsco.co',
    category: 'photo',
    subcategory: 'photo-filters',
    tags: ['照片编辑', '滤镜', '移动应用', '专业'],
    isHot: true,
    isFeatured: false,
    iconUrl: 'https://vsco.co/favicon.ico'
  },
  {
    id: 'snapseed',
    name: 'Snapseed',
    description: 'Google开发的免费照片编辑应用',
    url: 'https://snapseed.online',
    category: 'photo',
    subcategory: 'photo-filters',
    tags: ['照片编辑', 'Google', '免费', '移动应用'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://snapseed.online/favicon.ico'
  },

  /* =========================================================
   * 图片处理 - 图片增强 (photo-enhancement)
   * ========================================================= */
  {
    id: 'topaz-labs',
    name: 'Topaz Labs',
    description: 'AI驱动的图像增强和降噪软件',
    url: 'https://www.topazlabs.com',
    category: 'photo',
    subcategory: 'photo-enhancement',
    tags: ['AI增强', '图像降噪', '专业软件', '图像质量'],
    isHot: false,
    isFeatured: true,
    iconUrl: 'https://www.topazlabs.com/favicon.ico'
  },
  {
    id: 'upscayl',
    name: 'Upscayl',
    description: '免费开源的AI图像放大工具',
    url: 'https://upscayl.github.io',
    category: 'photo',
    subcategory: 'photo-enhancement',
    tags: ['AI放大', '图像增强', '免费', '开源'],
    isHot: true,
    isFeatured: false,
    iconUrl: 'https://upscayl.github.io/favicon.ico'
  },

  /* =========================================================
   * 设计高校 (design-colleges)
   * ========================================================= */
  {
    id: 'cafa',
    name: '中央美术学院',
    description: '中国最高等级的美术学府，培养艺术设计人才的摇篮',
    url: 'https://www.cafa.edu.cn/',
    category: 'design-colleges',
    subcategory: 'design-colleges-default',
    tags: ['美术学院', '高等教育', '艺术设计', '央美'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 'caa',
    name: '中国美术学院',
    description: '中国现代艺术教育的发源地，国内顶尖美术院校',
    url: 'https://www.caa.edu.cn/',
    category: 'design-colleges',
    subcategory: 'design-colleges-default',
    tags: ['美术学院', '高等教育', '艺术设计', '国美'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://www.caa.edu.cn/favicon.ico'
  },
  {
    id: 'tsinghua-ad',
    name: '清华大学美术学院',
    description: '清华大学美术学院，中国工艺美术和设计艺术教育的重要基地',
    url: 'https://www.ad.tsinghua.edu.cn/',
    category: 'design-colleges',
    subcategory: 'design-colleges-default',
    tags: ['美术学院', '清华大学', '工艺美术', '设计艺术'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 'nua',
    name: '南京艺术学院',
    description: '中国独立建制创办最早的高等艺术学府',
    url: 'https://www.nua.edu.cn/',
    category: 'design-colleges',
    subcategory: 'design-colleges-default',
    tags: ['艺术学院', '高等教育', '综合艺术', '南艺'],
    isHot: true,
    isFeatured: false,
  },
  {
    id: 'scfai',
    name: '四川美术学院',
    description: '西南地区唯一的高等美术院校，中国八大美院之一',
    url: 'https://www.scfai.edu.cn/',
    category: 'design-colleges',
    subcategory: 'design-colleges-default',
    tags: ['美术学院', '高等教育', '八大美院', '川美'],
    isHot: true,
    isFeatured: false,
  },
  {
    id: 'xafa',
    name: '西安美术学院',
    description: '中国西北地区唯一的高等专业美术学府',
    url: 'http://www.xafa.edu.cn/',
    category: 'design-colleges',
    subcategory: 'design-colleges-default',
    tags: ['美术学院', '高等教育', '西北地区', '西美'],
    isHot: false,
    isFeatured: false,
  },
  {
    id: 'gzarts',
    name: '广州美术学院',
    description: '华南地区唯一的高等美术学府，中国八大美院之一',
    url: 'https://www.gzarts.edu.cn/',
    category: 'design-colleges',
    subcategory: 'design-colleges-default',
    tags: ['美术学院', '高等教育', '八大美院', '广美'],
    isHot: true,
    isFeatured: true,
  },
  {
    id: 'lumei',
    name: '鲁迅美术学院',
    description: '中国八大美院之一，东北地区现代美术教育的起源地',
    url: 'https://www.lumei.edu.cn/',
    category: 'design-colleges',
    subcategory: 'design-colleges-default',
    tags: ['美术学院', '高等教育', '八大美院', '鲁美'],
    isHot: false,
    isFeatured: false,
    iconUrl: 'https://www.lumei.edu.cn/favicon.ico'
  },
  {
    id: 'tjarts',
    name: '天津美术学院',
    description: '中国八大美院之一，北方重要的艺术教育基地',
    url: 'https://www.tjarts.edu.cn/',
    category: 'design-colleges',
    subcategory: 'design-colleges-default',
    tags: ['美术学院', '高等教育', '八大美院', '天美'],
    isHot: false,
    isFeatured: false,
  },

  /* =========================================================
   * 自学网站 (self-learning)
   * ========================================================= */
  {
    id: 'uied-learning',
    name: 'UIED学习',
    description: '设计师专业技能学习平台，提供系统化设计教程',
    url: 'https://www.uied.cn/',
    category: 'self-learning',
    tags: ['设计教程', '在线学习', '技能提升', '免费'],
    isHot: true,
    isFeatured: true,
      iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png'
  },
  {
    id: 'zcool-learn',
    name: '站酷学习',
    description: '站酷旗下在线设计教育平台',
    url: 'https://www.zcool.com.cn/discover/learning',
    category: 'self-learning',
    tags: ['设计教育', '在线课程', '技能培训'],
    isHot: true,
    isFeatured: false,
  },
  {
    id: 'doyoudo',
    name: 'doyoudo',
    description: '设计软件学习网站，专注创意设计教育',
    url: 'https://www.doyoudo.com/',
    category: 'self-learning',
    tags: ['设计软件', '视频教程', '创意设计'],
    isHot: true,
    isFeatured: true,
    iconUrl: 'https://www.doyoudo.com/favicon.ico'
  },
  {
    id: 'design-uiedtool-1750226672315',
    name: 'UIED免费工具箱',
    description: '图像处理、设计创作、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://uiedtool.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiedtool.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'writing', 'image', 'watermark', 'design', 'template', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 5.0
  },
  {
    id: 'design-uiedtool-1750226672317',
    name: '免费Favicon制作',
    description: '免费在线Favicon制作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://uiedtool.com/tools/favicon-maker',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiedtool.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['favicon', 'icon', 'image', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 5.0
  },
  {
    id: 'design-svg-1750226672315',
    name: '免费在线压缩图片',
    description: '免费压缩png、jpg、webp图片，为设计师提供高效便捷的创作体验。',
    url: 'https://uiedtool.com/tools/image-compress',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiedtool.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['png', 'jpg', 'webp', 'image', 'compress', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.9
  },
  {
    id: 'design-prisma-ai-1750226672315',
    name: 'Lensa：一站式图片编辑应用全面指南',
    description: '图像处理、设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://prisma-ai.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://prisma-ai.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['writing', 'image', 'video', 'edit', 'design'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-openmoji-1750226672315',
    name: 'Emoji Dictionary',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://openmoji.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://openmoji.org',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-emojiall-1750226672315',
    name: 'Emoji Dictionary',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.emojiall.com/zh-hans',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.emojiall.com/zh-hans',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-bgsub-1750226672316',
    name: '无需上传图像抠图',
    description: '图像处理工具，为设计师提供高效便捷的创作体验。',
    url: 'https://bgsub.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://bgsub.cn',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'background'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-video2edit-1750226672316',
    name: '在线压缩视频',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.video2edit.com/zh/compress-video',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.video2edit.com/zh/compress-video',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['video', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-pocket-1750226672316',
    name: '报价GO-设计师报价单',
    description: '设计创作、设计灵感、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://pocket.tezign.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pocket.tezign.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['art', 'design', 'code', 'inspiration', 'free', 'mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-ourplay-1750226672316',
    name: 'ourplay加速器（Psbeta）',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.ourplay.net/download/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.ourplay.net/download',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['photoshop'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-emojidaquan-1750226672316',
    name: 'emoji表情大全',
    description: '图像处理工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.emojidaquan.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.emojidaquan.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'clone', 'icon', 'code'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-neumorphism-1750226672316',
    name: 'Neumorphism/在线生成新拟态',
    description: '设计创作、色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://neumorphism.io',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://neumorphism.io',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['art', 'design', 'color', 'code', 'online', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-compressimage-1750226672316',
    name: '在线免费无限制！超好用的图片压缩神器Compress Image',
    description: '图像处理、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://compressimage.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://compressimage.io',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-replicate-1750226672316',
    name: 'Replicate-AI图片无损放大',
    description: '图像处理、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://replicate.com/nightmareai/real-esrgan',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://replicate.com/nightmareai/real-esrgan',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'image', 'upscale', 'template', 'learning', 'model'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-aalab-1750226672316',
    name: 'Aalab Found纷得',
    description: '设计创作、设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.aalab.com.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.aalab.com.cn',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['art', 'design', 'inspiration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-cleverpdf-1750226672316',
    name: 'CleverPDF',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.cleverpdf.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.cleverpdf.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['frontend', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-pdfcandy-1750226672316',
    name: 'PDF Converter + 46 Online PDF Tools',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://pdfcandy.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pdfcandy.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['frontend', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-extractpdf-1750226672316',
    name: 'Free online PDF Extractor',
    description: '图像处理、字体设计、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.extractpdf.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.extractpdf.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'separate', 'font', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-lightpdf-1750226672316',
    name: 'Free Online PDF Editor',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://lightpdf.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://lightpdf.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['watermark', 'edit', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-smallpdf-1750226672316',
    name: 'Smallpdf.com',
    description: '设计创作、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://smallpdf.com/cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://smallpdf.com/cn',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['art', 'subtitle', 'design', 'frontend', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-hipdf-1750226672316',
    name: '免费的多合一在线 PDF 工具',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.hipdf.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.hipdf.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['frontend', 'productivity', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-tools-1750226672316',
    name: 'PDF24 Tools',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://tools.pdf24.org',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tools.pdf24.org',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['productivity', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-deepl-1750226672316',
    name: 'DeepL翻译：全世界最准确的翻译',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.deepl.com/translator',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.deepl.com/translator',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['subtitle'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-vectorizer-1750226672316',
    name: 'JPEG和PNG转换为SVG矢量。',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://vectorizer.ai/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://vectorizer.ai',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'icon'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-week-1750226672316',
    name: '周报生成器',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://week.tomda.icu/zh',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://week.tomda.icu/zh',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['writing', 'chatgpt', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-uied-1750226672316',
    name: 'AI助手',
    description: '模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.uied.cn/ai',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.uied.cn/ai',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'template'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-tool-1750226672316',
    name: '帮小忙，腾讯QQ浏览器在线工具箱平台',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://tool.browser.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tool.browser.qq.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'separate', 'online', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-tinywow-1750226672316',
    name: 'Free PDF',
    description: '图像处理、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://tinywow.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tinywow.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'video', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-xunjiepdf-1750226672316',
    name: '迅捷办公',
    description: '图像处理工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.xunjiepdf.com/tool/pdf-to-word',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.xunjiepdf.com/tool/pdf-to-word',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['writing', 'image', 'digital', 'productivity'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-snipaste-1750226672316',
    name: 'Snipaste截屏软件',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.snipaste.com/download.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.snipaste.com/download.html',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-pslkzs-1750226672316',
    name: 'ps拉框助手',
    description: '图像处理、设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.pslkzs.com/me.php',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pslkzs.com/me.php',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'prompt', 'design', 'photoshop', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-dam-1750226672316',
    name: 'MuseDAM｜创意人的云端设计资产管理器',
    description: '专业设计创作、设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'https://dam.musetransfer.com/landing/product',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://dam.musetransfer.com/landing/product',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['art', 'design', 'collaboration', 'inspiration', 'community'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-ilovepdf-1750226672317',
    name: 'iLovePDF-压缩pdf',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.ilovepdf.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.ilovepdf.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['productivity', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-youtube-1750226672317',
    name: 'YouTube高清视频下载',
    description: '图像处理、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://youtube.iiilab.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://youtube.iiilab.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'video', 'watermark', 'free', 'online', 'mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-zh-1750226672317',
    name: 'Vector Magic：将 JPG、PNG 图像转换成 SVG、EPS、AI 矢量图像',
    description: '图像处理、模板素材、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://zh.vectormagic.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://zh.vectormagic.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'image', 'photoshop', 'icon', 'template', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-gaituya-1750226672317',
    name: '改图鸭',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.gaituya.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gaituya.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['writing', 'image', 'edit', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-bigmp4-1750226672317',
    name: '人工智能视频无损放大',
    description: '图像处理、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://bigmp4.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://bigmp4.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'image', 'video', 'upscale', 'template'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-jpghd-1750226672317',
    name: '人工智能老照片无损修复',
    description: '图像处理、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://jpghd.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://jpghd.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'image', 'template'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-bigjpg-1750226672317',
    name: 'AI人工智能圖片放大（图片变清晰）',
    description: '图像处理、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://bigjpg.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://bigjpg.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'image', 'upscale', 'template'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-yandex-1750226672317',
    name: 'Yandex',
    description: '模板素材、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://yandex.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://yandex.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'audio', 'photoshop', 'template', 'frontend', 'free', 'online', 'news'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-pattern-1750226672317',
    name: '在线生成平铺图片',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://pattern.monster/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pattern.monster',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'online', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-brushes8-1750226672317',
    name: '海量PhotoShop笔刷素材免费下载！PS笔刷吧',
    description: '图像处理、设计创作、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://brushes8.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://brushes8.com',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'art', 'background', 'design', 'photoshop', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-iloveimg-1750226672317',
    name: '压缩图片、gif',
    description: '图像处理、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.iloveimg.com/zh-cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.iloveimg.com/zh-cn',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'frontend', 'free', 'online', 'mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-docsmall-1750226672317',
    name: '压缩图片、gif、pdf网站',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://docsmall.com/gif-compress',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://docsmall.com/gif-compress',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-catocr-1750226672318',
    name: 'CatOCR: 易飞文字识别',
    description: '图像处理、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://catocr.com/#/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['writing', 'image', 'clone', 'separate', 'productivity', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-yalijuda-1750226672318',
    name: '免费在线图片/视频压缩工具',
    description: '图像处理、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.yalijuda.com',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'video', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-maruko-1750226672318',
    name: '小丸工具箱官方网站',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://maruko.appinn.me',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-cococut-1750226672318',
    name: 'Free and easiest video downloader',
    description: '免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://cococut.net/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['video', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-jianlixiazai-1750226672318',
    name: '简历模板下载',
    description: '模板素材、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://jianlixiazai.cn/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['writing', 'prompt', 'edit', 'template', 'productivity', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-yige-1750226672318',
    name: '人工智能生成插画',
    description: '设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'http://yige.baidu.com',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'art', 'compose', 'inspiration', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-zh-1750226672319',
    name: '最优图像优化',
    description: '图像处理、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://zh.recompressor.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'icon', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-tinypng-1750226672319',
    name: '压缩图片（5m内）',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://tinypng.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'frontend', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-u-1750226672319',
    name: 'uTools官网',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.u.tools/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['productivity'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-99pdf-1750226672319',
    name: 'PDF压缩，在线PDF压缩',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.99pdf.com/compress',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['watermark', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-aconvert-1750226672319',
    name: '在线转换图像文件',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.aconvert.com/cn/image/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-icon-1750226672319',
    name: '一键生成所有尺寸的应用图标',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://icon.wuruihong.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['icon', 'mobile', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-weibo-1750226672320',
    name: '微博、秒拍、绿洲、小咖秀、哔哩哔哩、AcFun、视频号、YouTube、Twitter、Instagram、网易云音乐、最右、微视、全民K歌、全民小视频、陌陌、美拍、Facebook、Vimeo、Tumblr、趣头条、映客、小影、梨视频、兽音译者、淘宝',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://weibo.iiilab.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'video', 'audio', 'watermark', 'face', 'online', 'mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-zamzar-1750226672320',
    name: '免费在线视频转换器，音频转换器，图像转换器，电子书转换器',
    description: '图像处理、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.zamzar.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['image', 'video', 'audio', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-en-1750226672320',
    name: 'Video Downloader',
    description: '模板素材、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://en.savefrom.net/134/',
    iconUrl: 'https://www.88sheji.cn/wp-content/themes/onenav/images/favicon.png',
    category: 'common-tools',
    subcategory: 'efficiency-tools',
    tags: ['ai', 'video', 'face', 'template', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-xianyi-175022667225',
    name: '鲜艺AI本地抠图',
    description: '免费AI本地抠图，为设计师提供高效便捷的创作体验。',
    url: 'https://www.uied.cn/circle/69835.html',
    iconUrl: 'https://kt.94xy.com/img/logo.png',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['ai', 'image', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.9
  },
  {
    id: 'design-pickwant-1750227381233',
    name: '趣作图—免费抠图',
    description: '图像处理、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.pickwant.com/home',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pickwant.com/home',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['ai', 'writing', 'image', 'background', 'edit', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-fococlipping-1750227381233',
    name: 'FocoClipping',
    description: '图像处理、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.fococlipping.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.fococlipping.com',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['writing', 'image', 'background', 'edit', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-arc-1750227381233',
    name: 'ARC官网-抠图-人像修复-动漫风格化',
    description: '图像处理、设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://arc.tencent.com/zh/ai-demos/humansegmentation',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://arc.tencent.com/zh/ai-demos/humansegmentation',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['image', 'art', 'upscale', 'background', 'design', 'productivity'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-pixian-1750227381233',
    name: '删除背景工具Pixian 抠图',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://pixian.ai/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pixian.ai',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['remove', 'background', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-gaoding-1750227381233',
    name: '稿定设计-AI',
    description: '图像处理工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.gaoding.com/utms/f09424918c51460bb0867add54ce2ee4 ',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gaoding.com/utms/f09424918c51460bb0867add54ce2ee4',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['ai', 'writing', 'image', 'video', 'prompt', 'art', 'background', 'edit'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-picwish-1750227381234',
    name: '佐糖抠图',
    description: '图像处理、设计灵感、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://picwish.cn/upload',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://picwish.cn/upload',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['image', 'background', 'photoshop', 'inspiration', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-paluai-1750227381234',
    name: 'AI豆包抠图',
    description: '免费AI抠图，为设计师提供高效便捷的创作体验。',
    url: 'https://m.paluai.com/?code=dh26',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://m.paluai.com',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['ai', 'image', 'remove', 'background', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.9
  },
  {
    id: 'design-jpgrm-1750227381234',
    name: 'AI 魔术橡皮擦抠图',
    description: '图像处理、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://jpgrm.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://jpgrm.com',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['ai', 'writing', 'image', 'background', 'watermark', 'template'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-alidesign-1750227381234',
    name: '阿里智能抠图',
    description: '专业的设计工具，助力设计师轻松完成创作任务。',
    url: 'https://alidesign.taobao.com/work.htm#/iframe/wantoo',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/07/eeb24-alidesign.taobao.com.png',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['ai', 'background'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-clipdrop-1750227381234',
    name: '⭐️clipdrop抠图',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://clipdrop.co/remove-background',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://clipdrop.co/remove-background',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['background'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-backgrounderaser-1750227381234',
    name: '一键抠图',
    description: '图像处理、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.backgrounderaser.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.backgrounderaser.io',
    category: 'common-tools',
    subcategory: 'one-click-cutout',
    tags: ['ai', 'image', 'remove', 'background', 'template'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-uiedtool-1750228738388',
    name: 'UIED Tools 提供免费的在线AI工具集合',
    description: '图像处理、设计创作、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://uiedtool.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiedtool.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['ai', 'writing', 'image', 'watermark', 'design', 'template', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-jiandan-1750228738388',
    name: '简单设计',
    description: '图像处理、设计创作、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.jiandan.link/?rel=VYZR7OAC',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.jiandan.link/?rel=VYZR7OAC',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['image', 'art', 'design', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-yunzhan365-1750228738388',
    name: '云展网-免费制作电子画册',
    description: '免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.yunzhan365.com/?utm_code=88-gwn-dhl-012',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2024/04/1713779058-611713778999_.pic_.jpg',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-chuangkit-1750228738388',
    name: '创客贴设计',
    description: '设计创作、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.chuangkit.com/?utm_source=88sheji',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.chuangkit.com/?utm_source=88sheji',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['ai', 'art', 'design', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-x-design-1750228738388',
    name: '美图设计室',
    description: '专业的图像处理、设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.x-design.com/?channel=88sheji',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.x-design.com/?channel=88sheji',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['ai', 'image', 'prompt', 'art', 'upscale', 'background', 'watermark', 'design'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-qingtu-1750228738388',
    name: '清图、抠图、模糊图片秒转高清图、图片超级压缩、文字转语音',
    description: '图像处理工具，为设计师提供高效便捷的创作体验。',
    url: 'https://qingtu.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://qingtu.cn',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['image', 'audio', 'background'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-pocket-1750228738388',
    name: '报价GO-设计师报价单',
    description: '设计创作、设计灵感、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://pocket.tezign.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pocket.tezign.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['art', 'design', 'code', 'inspiration', 'free', 'mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-imagestool-1750228738388',
    name: '转换图片、压缩图片、压缩GIF、图片加水印、裁剪图片等在线图片工具',
    description: '图像处理、免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://imagestool.com/zh_CN/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://imagestool.com/zh_CN',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['image', 'watermark', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-wallhaven-1750228738389',
    name: 'Awesome Wallpapers壁纸',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://wallhaven.cc/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://wallhaven.cc',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['paper'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-ico51-1750228738389',
    name: '在线生成透明ICO图标——ICO图标制作',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.ico51.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.ico51.cn',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['image', 'icon', 'online', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-cli-1750228738389',
    name: '草料二维码生成器',
    description: '样机素材、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://cli.im/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cli.im',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['writing', 'mockup', 'free', 'portfolio', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-tiny-helpers-1750228738389',
    name: '一个英文在线工具集，加载有点慢，分类挺全的。为 Web 开发人员提供的免费单一用途在线工具的集合…',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://tiny-helpers.dev/pdf/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tiny-helpers.dev/pdf',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['code', 'frontend', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-magiceraser-1750228738389',
    name: 'Magic Eraser',
    description: '图像处理、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.magiceraser.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.magiceraser.io',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['writing', 'image', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-icon-z-1750228738389',
    name: '日本卡通头像生成',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://icon-z.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://icon-z.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['avatar', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-pslkzs-1750228738389',
    name: 'ps拉框助手',
    description: '图像处理、设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.pslkzs.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pslkzs.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['image', 'prompt', 'design', 'photoshop', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-visioncortex-1750228738389',
    name: 'VTracer 一款将图片转换为矢量 SVG 图形的免费开源工具。',
    description: '图像处理、色彩工具、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.visioncortex.org/vtracer/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.visioncortex.org/vtracer',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['writing', 'image', 'paper', 'icon', 'color', 'code', 'collaboration', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-squoosh-1750228738389',
    name: '谷歌开源的图片无损压缩工具，可以精准控制大小',
    description: '图像处理、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://squoosh.app/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://squoosh.app',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['image', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-compressjpeg-1750228738389',
    name: '图片压缩',
    description: '图像处理工具，为设计师提供高效便捷的创作体验。',
    url: 'https://compressjpeg.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://compressjpeg.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['image'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-ezgif-1750228738389',
    name: 'gif',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://ezgif.com/webp-maker',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ezgif.com/webp-maker',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-svgconverter-1750228738389',
    name: 'svg转换',
    description: '免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://svgconverter.com/zh/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://svgconverter.com/zh',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['icon', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-123apps-1750228738389',
    name: 'Web Apps by 123apps',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://123apps.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://123apps.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['edit', 'photoshop', 'frontend', 'online', 'mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-toolfk-1750228738389',
    name: '最强工具人在线工具箱',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.toolfk.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.toolfk.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['ai', 'video', 'audio', 'detection', 'art', 'compose', 'code', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-67tool-1750228738389',
    name: '即时工具',
    description: '图像处理、设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.67tool.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.67tool.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['writing', 'image', 'video', 'audio', 'art', 'design', 'code', 'productivity'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-gaoding-1750228738389',
    name: '稿定设计',
    description: '图像处理、设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.gaoding.com/utms/f09424918c51460bb0867add54ce2ee4 ',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gaoding.com/utms/f09424918c51460bb0867add54ce2ee4',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['writing', 'image', 'video', 'prompt', 'art', 'background', 'edit', 'design'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-jakearchibald-1750228738389',
    name: 'svgomg',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://jakearchibald.github.io/svgomg/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://jakearchibald.github.io/svgomg',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['icon', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-screensiz-1750228738389',
    name: 'screen sizes',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'http://screensiz.es/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://screensiz.es',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-inloop-1750228738389',
    name: 'Android 9 patch',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'http://inloop.github.io/shadow4android/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://inloop.github.io/shadow4android',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['mobile', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-ezgif-1750228738389',
    name: 'ezgif',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://ezgif.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ezgif.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['edit', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-goqr-1750228738389',
    name: 'goqr',
    description: '模板素材、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'http://goqr.me/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://goqr.me',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['photoshop', 'template', 'code', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-tinypng-1750228738389',
    name: 'tinypng',
    description: '图像处理工具，为设计师提供高效便捷的创作体验。',
    url: 'https://tinypng.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tinypng.com',
    category: 'common-tools',
    subcategory: 'online-tools',
    tags: ['image'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-frame-1750228781714',
    name: '现代视频工作流程',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://frame.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://frame.io',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: ['video'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-height-1750228781714',
    name: '跨领域管理项目  产品',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://height.app/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://height.app',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-monday-1750228781714',
    name: 'monday.com',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://monday.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://monday.com',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-qingque-1750228781714',
    name: '轻雀',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.qingque.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.qingque.cn',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: ['productivity', 'collaboration', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-prowork-1750228781714',
    name: 'ProWork',
    description: '专业设计工具，助力设计师轻松完成创作任务。',
    url: 'https://prowork.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://prowork.qq.com',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-tapd-1750228781714',
    name: 'TAPD',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.tapd.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.tapd.cn',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: ['code', 'productivity', 'collaboration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-atlassian-1750228781714',
    name: 'Atlassian',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.atlassian.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.atlassian.com',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: ['code', 'collaboration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-worktile-1750228781714',
    name: 'Worktile',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://worktile.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://worktile.com',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: ['online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-tower-1750228781715',
    name: 'Tower',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://tower.im/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tower.im',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-feishu-1750228781715',
    name: '飞书——先进企业协作与管理平台，一站式无缝办公协作，团队上下对齐目标，全面激活组织和个人。先进团队，先用飞书。',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.feishu.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.feishu.cn',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: ['ai', 'video', 'productivity', 'collaboration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-teambition-1750228781715',
    name: 'Teambition · 阿里巴巴旗下团队协作工具',
    description: '设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.teambition.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.teambition.com',
    category: 'common-tools',
    subcategory: 'collaborative-office',
    tags: ['art', 'design', 'collaboration', 'marketplace'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-chinese-colors-1750229382549',
    name: '中国传统色彩展示在线配色工具',
    description: '样机素材、色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://chinese-colors.heyfe.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://chinese-colors.heyfe.org',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['ai', 'mockup', 'color', 'online', 'portfolio', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-ant-1750229382549',
    name: 'Ant Design在线配色UI界面',
    description: '专业的设计创作、色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://ant.design/theme-editor-cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ant.design/theme-editor-cn',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'color', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-palettemaker-1750229382549',
    name: 'Palette Maker',
    description: '设计创作、色彩工具、设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'https://palettemaker.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://palettemaker.com',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'photoshop', 'color', 'frontend', 'inspiration', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-copypalette-1750229382549',
    name: 'Copypalette',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://copypalette.app/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://copypalette.app',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['clone', 'icon', 'color', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-colors-1750229382549',
    name: 'Eva Design Colors：快速生成B端产品专用色彩系统的高效工具',
    description: '专业的设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://colors.eva.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://colors.eva.design',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'color', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-color-1750229382549',
    name: 'ColorReview：设计师必备的颜色对比预览工具',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://color.review/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://color.review',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-colorsinspo-1750229382549',
    name: 'Colorsinspo',
    description: '色彩工具、设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://colorsinspo.com/brands-colors',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://colorsinspo.com/brands-colors',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['sketch', 'color', 'design', 'ui', 'collaboration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-colors-1750229382549',
    name: 'Dopely Colors',
    description: '色彩工具、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://colors.dopely.top/gradients',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://colors.dopely.top/gradients',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['color', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-huemint-1750229382549',
    name: '人工智能配色',
    description: '模板素材、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://huemint.com/brand-2/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://huemint.com/brand-2',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['ai', 'template', 'color', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-zhongguose-1750229382549',
    name: '中国色',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://zhongguose.com/#anyuzi',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://zhongguose.com/#anyuzi',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-vanschneider-1750229382549',
    name: 'Color Claim：独特配色灵感收集工具，为未来项目点亮色彩',
    description: '模板素材、色彩工具、设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.vanschneider.com/colors',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.vanschneider.com/colors',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['ai', 'template', 'color', 'inspiration', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-klart-1750229382549',
    name: 'klart',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://klart.co/colors/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://klart.co/colors',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-qrohlf-1750229382549',
    name: 'trianglify',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'http://qrohlf.com/trianglify-generator/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://qrohlf.com/trianglify-generator',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-flatuicolorpicker-1750229382549',
    name: 'Flat UI Color Picker：最佳扁平颜色UI设计工具，设计师必备！',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.flatuicolorpicker.com/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxMzcsMjI5LDE2MykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTY4LDIyOSwxMTQpIiBjeD0iMTYiIGN5PSI4IiByPSI2MCIgIG9wYWNpdHk9Ii40Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9InJnYigxMTQsMjI1LDIyOSkiIGN4PSIzNyIgY3k9Ijc0IiByPSI1MCIgIG9wYWNpdHk9Ii42Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNTAiIHRleHQtY29weT0iZmFzdCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1yaWdodHM9ImFkbWluIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCdNaWNyb3NvZnQgWWFoZWknIj5GPC90ZXh0Pjwvc3ZnPg==',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-color-1750229382550',
    name: 'Adobe Color：打造专属配色方案的终极神器，设计师必备！',
    description: '图像处理、设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://color.adobe.com/zh/create/color-wheel',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://color.adobe.com/zh/create/color-wheel',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['image', 'art', 'design', 'photoshop', 'color', 'inspiration', 'community', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-colorhunt-1750229382550',
    name: 'Color Hunt：免费在线美丽调色板，设计灵感从这里开始',
    description: '设计创作、色彩工具、设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.colorhunt.co/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigyMjksMTM3LDE2OSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMjE4LDExNCwyMjkpIiBjeD0iMzciIGN5PSIxOC41IiByPSI2MCIgIG9wYWNpdHk9Ii40Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9InJnYigyMjksMTYwLDExNCkiIGN4PSI1OSIgY3k9IjExOCIgcj0iNTAiICBvcGFjaXR5PSIuNiI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBmb250LWZhbWlseT0iJ1BpbmdGYW5nIFNDJywnTWljcm9zb2Z0IFlhaGVpJyI+QzwvdGV4dD48L3N2Zz4=',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'color', 'inspiration', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-coolors-1750229382550',
    name: 'Coolors：超快的在线配色方案生成神器，设计师必备工具',
    description: '设计创作、色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://coolors.co/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://coolors.co',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'color', 'online', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-flatuicolors-1750229382550',
    name: 'flatuicolors',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://flatuicolors.com/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigyMjksMTk4LDEzNykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMCwwLDApIiBjeD0iNDAiIGN5PSIyMCIgcj0iNjAiICBvcGFjaXR5PSIuNCI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTgxLDIyOSwxMTQpIiBjeD0iNDAiIGN5PSI4MCIgcj0iNTAiICBvcGFjaXR5PSIuNiI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBmb250LWZhbWlseT0iJ1BpbmdGYW5nIFNDJywnTWljcm9zb2Z0IFlhaGVpJyI+RjwvdGV4dD48L3N2Zz4=',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['clone', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-thedayscolor-1750229382550',
    name: 'thedayscolor',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.thedayscolor.com/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxNDksMTM3LDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDE4NSwyMjkpIiBjeD0iMzAiIGN5PSIxNSIgcj0iNjAiICBvcGFjaXR5PSIuNCI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMjE2LDExNCwyMjkpIiBjeD0iNjgiIGN5PSIxMzYiIHI9IjUwIiAgb3BhY2l0eT0iLjYiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI1MCIgdGV4dC1jb3B5PSJmYXN0IiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0ZXh0LXJpZ2h0cz0iYWRtaW4iIGFsaWdubWVudC1iYXNlbGluZT0iY2VudHJhbCIgZm9udC1mYW1pbHk9IidQaW5nRmFuZyBTQycsJ01pY3Jvc29mdCBZYWhlaSciPlQ8L3RleHQ+PC9zdmc+',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-grabient-1750229382550',
    name: 'Grabient在线渐变配色神器，交互简单高效',
    description: '色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.grabient.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.grabient.com',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['color', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-webgradients-1750229382550',
    name: 'WebGradients：免费线性渐变集合，为你的设计增添色彩',
    description: '设计创作、色彩工具、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://webgradients.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://webgradients.com',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['writing', 'art', 'background', 'design', 'color', 'frontend', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-webkul-1750229382550',
    name: 'CoolHue：最酷的渐变色调工具，让你的设计超级惊艳！',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://webkul.github.io/coolhue/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxMzcsMjI5LDIyNikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDIyOSwxMzkpIiBjeD0iMzYiIGN5PSIxOCIgcj0iNjAiICBvcGFjaXR5PSIuNCI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDE0NywyMjkpIiBjeD0iNzgiIGN5PSIxNTYiIHI9IjUwIiAgb3BhY2l0eT0iLjYiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI1MCIgdGV4dC1jb3B5PSJmYXN0IiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0ZXh0LXJpZ2h0cz0iYWRtaW4iIGFsaWdubWVudC1iYXNlbGluZT0iY2VudHJhbCIgZm9udC1mYW1pbHk9IidQaW5nRmFuZyBTQycsJ01pY3Jvc29mdCBZYWhlaSciPkM8L3RleHQ+PC9zdmc+',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-uigradients-1750229382550',
    name: 'UI Gradients：在线渐变配色工具，让你的设计更出彩',
    description: '设计创作、色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://uigradients.com',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxMzcsMjI5LDIxNSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDIyOSwxMjYpIiBjeD0iMjYiIGN5PSIxMyIgcj0iNjAiICBvcGFjaXR5PSIuNCI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDE2MCwyMjkpIiBjeD0iOTEiIGN5PSIxODIiIHI9IjUwIiAgb3BhY2l0eT0iLjYiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI1MCIgdGV4dC1jb3B5PSJmYXN0IiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0ZXh0LXJpZ2h0cz0iYWRtaW4iIGFsaWdubWVudC1iYXNlbGluZT0iY2VudHJhbCIgZm9udC1mYW1pbHk9IidQaW5nRmFuZyBTQycsJ01pY3Jvc29mdCBZYWhlaSciPlU8L3RleHQ+PC9zdmc+',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['art', 'design', 'color', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-khroma-1750229382550',
    name: 'khroma',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://khroma.co/generator/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://khroma.co/generator',
    category: 'color',
    subcategory: 'color-palette',
    tags: ['color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-chinese-colors-1750229409339',
    name: '中国传统色彩展示在线配色工具',
    description: '样机素材、色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://chinese-colors.heyfe.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://chinese-colors.heyfe.org',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['ai', 'mockup', 'color', 'online', 'portfolio', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-ant-1750229409340',
    name: 'Ant Design在线配色UI界面',
    description: '专业的设计创作、色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://ant.design/theme-editor-cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ant.design/theme-editor-cn',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'color', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-palettemaker-1750229409340',
    name: 'Palette Maker',
    description: '设计创作、色彩工具、设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'https://palettemaker.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://palettemaker.com',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'photoshop', 'color', 'frontend', 'inspiration', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-copypalette-1750229409340',
    name: 'Copypalette',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://copypalette.app/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://copypalette.app',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['clone', 'icon', 'color', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-colors-1750229409340',
    name: 'Eva Design Colors：快速生成B端产品专用色彩系统的高效工具',
    description: '专业的设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://colors.eva.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://colors.eva.design',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'color', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-color-1750229409340',
    name: 'ColorReview：设计师必备的颜色对比预览工具',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://color.review/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://color.review',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-colorsinspo-1750229409340',
    name: 'Colorsinspo',
    description: '色彩工具、设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://colorsinspo.com/brands-colors',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://colorsinspo.com/brands-colors',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['sketch', 'color', 'design', 'ui', 'collaboration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-colors-1750229409340',
    name: 'Dopely Colors',
    description: '色彩工具、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://colors.dopely.top/gradients',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://colors.dopely.top/gradients',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['color', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-huemint-1750229409340',
    name: '人工智能配色',
    description: '模板素材、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://huemint.com/brand-2/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://huemint.com/brand-2',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['ai', 'template', 'color', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-zhongguose-1750229409341',
    name: '中国色',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://zhongguose.com/#anyuzi',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://zhongguose.com/#anyuzi',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-vanschneider-1750229409341',
    name: 'Color Claim：独特配色灵感收集工具，为未来项目点亮色彩',
    description: '模板素材、色彩工具、设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.vanschneider.com/colors',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.vanschneider.com/colors',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['ai', 'template', 'color', 'inspiration', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-klart-1750229409341',
    name: 'klart',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://klart.co/colors/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://klart.co/colors',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-qrohlf-1750229409341',
    name: 'trianglify',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'http://qrohlf.com/trianglify-generator/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://qrohlf.com/trianglify-generator',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-flatuicolorpicker-1750229409341',
    name: 'Flat UI Color Picker：最佳扁平颜色UI设计工具，设计师必备！',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.flatuicolorpicker.com/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxMzcsMjI5LDE2MykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTY4LDIyOSwxMTQpIiBjeD0iMTYiIGN5PSI4IiByPSI2MCIgIG9wYWNpdHk9Ii40Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9InJnYigxMTQsMjI1LDIyOSkiIGN4PSIzNyIgY3k9Ijc0IiByPSI1MCIgIG9wYWNpdHk9Ii42Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNTAiIHRleHQtY29weT0iZmFzdCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1yaWdodHM9ImFkbWluIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCdNaWNyb3NvZnQgWWFoZWknIj5GPC90ZXh0Pjwvc3ZnPg==',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-color-1750229409341',
    name: 'Adobe Color：打造专属配色方案的终极神器，设计师必备！',
    description: '图像处理、设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://color.adobe.com/zh/create/color-wheel',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://color.adobe.com/zh/create/color-wheel',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['image', 'art', 'design', 'photoshop', 'color', 'inspiration', 'community', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-colorhunt-1750229409341',
    name: 'Color Hunt：免费在线美丽调色板，设计灵感从这里开始',
    description: '设计创作、色彩工具、设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.colorhunt.co/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigyMjksMTM3LDE2OSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMjE4LDExNCwyMjkpIiBjeD0iMzciIGN5PSIxOC41IiByPSI2MCIgIG9wYWNpdHk9Ii40Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9InJnYigyMjksMTYwLDExNCkiIGN4PSI1OSIgY3k9IjExOCIgcj0iNTAiICBvcGFjaXR5PSIuNiI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBmb250LWZhbWlseT0iJ1BpbmdGYW5nIFNDJywnTWljcm9zb2Z0IFlhaGVpJyI+QzwvdGV4dD48L3N2Zz4=',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'color', 'inspiration', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-coolors-1750229409341',
    name: 'Coolors：超快的在线配色方案生成神器，设计师必备工具',
    description: '设计创作、色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://coolors.co/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://coolors.co',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'color', 'online', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-flatuicolors-1750229409341',
    name: 'flatuicolors',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://flatuicolors.com/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigyMjksMTk4LDEzNykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMCwwLDApIiBjeD0iNDAiIGN5PSIyMCIgcj0iNjAiICBvcGFjaXR5PSIuNCI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTgxLDIyOSwxMTQpIiBjeD0iNDAiIGN5PSI4MCIgcj0iNTAiICBvcGFjaXR5PSIuNiI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPHRleHQgeD0iNTAiIHk9IjUwIiBmb250LXNpemU9IjUwIiB0ZXh0LWNvcHk9ImZhc3QiIGZpbGw9IiNmZmZmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHRleHQtcmlnaHRzPSJhZG1pbiIgYWxpZ25tZW50LWJhc2VsaW5lPSJjZW50cmFsIiBmb250LWZhbWlseT0iJ1BpbmdGYW5nIFNDJywnTWljcm9zb2Z0IFlhaGVpJyI+RjwvdGV4dD48L3N2Zz4=',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['clone', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-thedayscolor-1750229409341',
    name: 'thedayscolor',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.thedayscolor.com/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxNDksMTM3LDIyOSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDE4NSwyMjkpIiBjeD0iMzAiIGN5PSIxNSIgcj0iNjAiICBvcGFjaXR5PSIuNCI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMjE2LDExNCwyMjkpIiBjeD0iNjgiIGN5PSIxMzYiIHI9IjUwIiAgb3BhY2l0eT0iLjYiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI1MCIgdGV4dC1jb3B5PSJmYXN0IiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0ZXh0LXJpZ2h0cz0iYWRtaW4iIGFsaWdubWVudC1iYXNlbGluZT0iY2VudHJhbCIgZm9udC1mYW1pbHk9IidQaW5nRmFuZyBTQycsJ01pY3Jvc29mdCBZYWhlaSciPlQ8L3RleHQ+PC9zdmc+',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-grabient-1750229409341',
    name: 'Grabient在线渐变配色神器，交互简单高效',
    description: '色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.grabient.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.grabient.com',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['color', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-webgradients-1750229409341',
    name: 'WebGradients：免费线性渐变集合，为你的设计增添色彩',
    description: '设计创作、色彩工具、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://webgradients.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://webgradients.com',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['writing', 'art', 'background', 'design', 'color', 'frontend', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-webkul-1750229409341',
    name: 'CoolHue：最酷的渐变色调工具，让你的设计超级惊艳！',
    description: '设计创作、色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://webkul.github.io/coolhue/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxMzcsMjI5LDIyNikiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDIyOSwxMzkpIiBjeD0iMzYiIGN5PSIxOCIgcj0iNjAiICBvcGFjaXR5PSIuNCI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDE0NywyMjkpIiBjeD0iNzgiIGN5PSIxNTYiIHI9IjUwIiAgb3BhY2l0eT0iLjYiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI1MCIgdGV4dC1jb3B5PSJmYXN0IiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0ZXh0LXJpZ2h0cz0iYWRtaW4iIGFsaWdubWVudC1iYXNlbGluZT0iY2VudHJhbCIgZm9udC1mYW1pbHk9IidQaW5nRmFuZyBTQycsJ01pY3Jvc29mdCBZYWhlaSciPkM8L3RleHQ+PC9zdmc+',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-uigradients-1750229409341',
    name: 'UI Gradients：在线渐变配色工具，让你的设计更出彩',
    description: '设计创作、色彩工具、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://uigradients.com',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxMzcsMjI5LDIxNSkiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDIyOSwxMjYpIiBjeD0iMjYiIGN5PSIxMyIgcj0iNjAiICBvcGFjaXR5PSIuNCI+PC9jaXJjbGU+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMTE0LDE2MCwyMjkpIiBjeD0iOTEiIGN5PSIxODIiIHI9IjUwIiAgb3BhY2l0eT0iLjYiPjwvY2lyY2xlPg0KICAgICAgICAgICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI1MCIgZm9udC1zaXplPSI1MCIgdGV4dC1jb3B5PSJmYXN0IiBmaWxsPSIjZmZmZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB0ZXh0LXJpZ2h0cz0iYWRtaW4iIGFsaWdubWVudC1iYXNlbGluZT0iY2VudHJhbCIgZm9udC1mYW1pbHk9IidQaW5nRmFuZyBTQycsJ01pY3Jvc29mdCBZYWhlaSciPlU8L3RleHQ+PC9zdmc+',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['art', 'design', 'color', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-khroma-1750229409341',
    name: 'khroma',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://khroma.co/generator/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://khroma.co/generator',
    category: 'common-tools',
    subcategory: 'online-color',
    tags: ['color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-mojidoc-1750229452766',
    name: '妙记多 Mojidoc',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.mojidoc.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mojidoc.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['audio', 'collaboration', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-flowus-1750229452766',
    name: 'FlowUs 息流',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://flowus.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://flowus.cn',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['productivity'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-wolai-1750229452766',
    name: '我来 wolai',
    description: '模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.wolai.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.wolai.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['ai', 'template', 'collaboration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-grammarly-1750229452766',
    name: 'Grammarly: Free Online Writing Assistant',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.grammarly.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.grammarly.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['writing', 'art', 'free', 'online', 'mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-vika-1750229452766',
    name: '维格表',
    description: '设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://vika.cn/login',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://vika.cn/login',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['art', 'design'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-wookongbi-1750229452766',
    name: '悟空洞察',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.wookongbi.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.wookongbi.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['ai', 'code', 'productivity', 'mobile', 'marketplace'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-wenjuan-1750229452766',
    name: '问卷网',
    description: '设计创作、模板素材、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.wenjuan.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.wenjuan.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['writing', 'prompt', 'edit', 'design', 'template', 'free', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-jinshuju-1750229452766',
    name: '金数据',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://jinshuju.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://jinshuju.net',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['productivity', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-yinxiang-1750229452767',
    name: '印象笔记',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.yinxiang.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.yinxiang.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['writing', 'frontend', 'learning', 'community'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-kancloud-1750229452767',
    name: '看云',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.kancloud.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.kancloud.cn',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['writing', 'art', 'compose'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-babel-1750229452767',
    name: '巴别鸟',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.babel.cc/p/home.do',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.babel.cc/p/home.do',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['productivity', 'collaboration', 'online', 'mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-xmind-1750229452767',
    name: 'Xmind',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://xmind.app/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://xmind.app',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-docs-1750229452767',
    name: '腾讯文档',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://docs.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://docs.qq.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['writing', 'edit', 'productivity', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-processon-1750229452767',
    name: 'ProcessOn思维导图、流程图',
    description: '专业在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.processon.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.processon.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['productivity', 'collaboration', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-flowus-1750229452767',
    name: 'FlowUs 息流',
    description: '专业设计工具，助力设计师轻松完成创作任务。',
    url: 'https://flowus.cn/product',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://flowus.cn/product',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['productivity'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-feishu-1750229452767',
    name: '飞书——先进企业协作与管理平台，一站式无缝办公协作，团队上下对齐目标，全面激活组织和个人。先进团队，先用飞书。',
    description: '专业设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.feishu.cn/product/docs',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.feishu.cn/product/docs',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['ai', 'video', 'productivity', 'collaboration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-note-1750229452767',
    name: '有道云笔记｜亿万用户的选择',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://note.youdao.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://note.youdao.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['writing', 'edit', 'productivity', 'community'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-account-1750229452767',
    name: '金山在线文档',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://account.wps.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://account.wps.cn',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['productivity', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-craft-1750229452767',
    name: 'Craft AI：多平台AI办公写作助手',
    description: '模板素材、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.craft.do/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.craft.do',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['ai', 'writing', 'template', 'productivity', 'collaboration', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-notion-1750229452767',
    name: 'Notion',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.notion.so/zh-cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.notion.so/zh-cn',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-obsidian-1750229452767',
    name: 'Obsidian',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://obsidian.md/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://obsidian.md',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-shimo-1750229452767',
    name: '石墨文档官网',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://shimo.im/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://shimo.im',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: ['productivity', 'collaboration', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-yuque-1750229452767',
    name: '语雀',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.yuque.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.yuque.com',
    category: 'common-tools',
    subcategory: 'online-docs',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-aigc-1750229527435',
    name: '一帧秒创',
    description: '模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://aigc.yizhentv.com/?_f=88sheji',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://aigc.yizhentv.com/?_f=88sheji',
    category: 'common-tools',
    subcategory: 'online-generator',
    tags: ['ai', 'writing', 'chatgpt', 'video', 'edit', 'template'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-cvbox-1750229527435',
    name: '设计神器Notion Avatar！一款完全免费的自定义头像图片生成工具！',
    description: '图像处理、设计创作、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://cvbox.org/avatar',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cvbox.org/avatar',
    category: 'common-tools',
    subcategory: 'online-generator',
    tags: ['image', 'art', 'avatar', 'digital', 'design', 'free', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-azure-1750229527435',
    name: '文本转语音',
    description: '专业设计工具，助力设计师轻松完成创作任务。',
    url: 'https://azure.microsoft.com/zh-cn/products/cognitive-services/text-to-speech/#overview',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://azure.microsoft.com/zh-cn/products/cognitive-services/text-to-speech/#overview',
    category: 'common-tools',
    subcategory: 'online-generator',
    tags: ['writing', 'audio', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-barcode-1750229527435',
    name: '在线条形码生成器',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://barcode.cnaidc.com/html/BCGcode128b.php',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://barcode.cnaidc.com/html/BCGcode128b.php',
    category: 'common-tools',
    subcategory: 'online-generator',
    tags: ['code', 'free', 'online', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-multiavatar-1750229527436',
    name: '随机生成12亿个性化头像的神器',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://multiavatar.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://multiavatar.com',
    category: 'common-tools',
    subcategory: 'online-generator',
    tags: ['avatar', 'digital', 'free', 'online', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-uchinoko-maker-1750229527436',
    name: '可爱猫咪头像在线生成器',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://uchinoko-maker.jp/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uchinoko-maker.jp',
    category: 'common-tools',
    subcategory: 'online-generator',
    tags: ['art', 'avatar', 'compose', 'frontend', 'online', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-peeps-1750229527436',
    name: 'Peeps是交互式 3D 头像生成器',
    description: '设计创作、模板素材、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://peeps.ui8.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://peeps.ui8.net',
    category: 'common-tools',
    subcategory: 'online-generator',
    tags: ['art', 'avatar', 'design', 'photoshop', 'template', 'free', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-pixel-me-1750229527436',
    name: '生成像素风头像',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://pixel-me.tokyo/en',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pixel-me.tokyo/en',
    category: 'common-tools',
    subcategory: 'online-generator',
    tags: ['avatar', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-suzhuan-1750229550909',
    name: '旺影速转',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://suzhuan.wangying.cn/welcome?channel=8BEDD277',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://suzhuan.wangying.cn/welcome?channel=8BEDD277',
    category: 'common-tools',
    subcategory: 'format-conversion',
    tags: ['video', 'watermark'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-convertio-1750229550910',
    name: 'Convertio在线转格式',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://convertio.co/zh/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://convertio.co/zh',
    category: 'common-tools',
    subcategory: 'format-conversion',
    tags: ['image', 'video', 'audio', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-icon-1750229550910',
    name: '一键生成所有尺寸的应用图标',
    description: '图像处理、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://icon.wuruihong.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://icon.wuruihong.com',
    category: 'common-tools',
    subcategory: 'format-conversion',
    tags: ['image', 'midjourney', 'photoshop', 'icon', 'template', 'generator'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-aconvert-1750229550910',
    name: '在线转换图像文件',
    description: '图像处理、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.aconvert.com/cn/image/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.aconvert.com/cn/image',
    category: 'common-tools',
    subcategory: 'format-conversion',
    tags: ['image', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-uied-1750232384857',
    name: '设计交流圈子',
    description: '设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.uied.cn/circle',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.uied.cn/circle',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['art', 'design', 'learning', 'community'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-rpdc-1750232384858',
    name: '52个设计原则',
    description: '专业的图像处理、设计创作、设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'https://rpdc.xiaohongshu.com/52-design-principles',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://rpdc.xiaohongshu.com/52-design-principles',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['writing', 'image', 'paper', 'art', 'edit', 'design', 'collaboration', 'inspiration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-hexinvaders-1750232384858',
    name: '地球保卫战',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.hexinvaders.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.hexinvaders.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-xrite-1750232384858',
    name: '颜色智力测试',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.xrite.com/hue-test',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.xrite.com/hue-test',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-color-1750232384858',
    name: '色彩搭配游戏',
    description: '色彩工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://color.method.ac/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://color.method.ac',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['color'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-type-1750232384858',
    name: '字间距游戏',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://type.method.ac/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://type.method.ac',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-shape-1750232384858',
    name: '曲线造字游戏',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://shape.method.ac/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://shape.method.ac',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-pixact-1750232384858',
    name: '像素眼游戏',
    description: '设计创作、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://pixact.ly/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pixact.ly',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['design', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-cantunsee-1750232384858',
    name: 'UI设计规范测试器',
    description: '设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://cantunsee.space/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cantunsee.space',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['art', 'design', 'mobile'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-bezier-1750232384858',
    name: '钢笔工具练习',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://bezier.method.ac/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://bezier.method.ac',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: [],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-coursera-1750232384858',
    name: 'Coursera',
    description: '免费使用、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.coursera.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.coursera.org',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['free', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-xuexiniu-1750232384858',
    name: '学犀牛(Xuexiniu)中文网',
    description: '设计创作、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.xuexiniu.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.xuexiniu.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['art', 'design', 'learning', 'online', 'community'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-linecg-1750232384858',
    name: '直线网',
    description: '设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.linecg.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.linecg.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['art', 'design', 'learning', 'community'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-qinxue-1750232384858',
    name: '勤学网',
    description: '设计创作、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.qinxue.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.qinxue.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['art', 'edit', 'design', 'productivity', 'learning', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-miaomiaoxue-1750232384858',
    name: '秒秒学',
    description: '设计创作、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.miaomiaoxue.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.miaomiaoxue.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['art', 'design', 'photoshop', 'code', 'learning', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-imooc-1750232384858',
    name: '慕课网',
    description: '设计工具，助力设计师轻松完成创作任务。',
    url: 'https://www.imooc.com/course/list?c=photo',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.imooc.com/course/list?c=photo',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['frontend', 'learning'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-uigreat-1750232384858',
    name: '优阁(UIGREAT)',
    description: '设计创作、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://uigreat.com/course',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uigreat.com/course',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['art', 'design', 'learning', 'free', 'community'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-zixue-1750232384858',
    name: '【溜溜自学网】在线设计课程自学平台',
    description: '设计创作、在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://zixue.3d66.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://zixue.3d66.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['detection', 'art', 'design', 'learning', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-bilibili-1750232384858',
    name: '哔哩哔哩 (゜',
    description: '设计灵感工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.bilibili.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.bilibili.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['video', 'inspiration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-yiihuu-1750232384858',
    name: '翼狐网（翼虎网）',
    description: '图像处理、设计创作、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.yiihuu.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.yiihuu.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['ai', 'image', 'art', 'edit', 'design', 'photoshop', 'template', 'learning'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-uiiiuiii-1750232384858',
    name: '优优教程网官网',
    description: '设计创作、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://uiiiuiii.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiiiuiii.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['detection', 'art', 'design', 'sketch', 'frontend', 'learning', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-2qj-1750232384858',
    name: '巧匠课堂',
    description: '设计创作、模板素材、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.2qj.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.2qj.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['ai', 'video', 'art', 'design', 'photoshop', 'template', 'learning', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-huke88-1750232384858',
    name: '虎课网',
    description: '图像处理、设计创作、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://huke88.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://huke88.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['writing', 'image', 'video', 'art', 'design', 'productivity', 'learning', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-51zxw-1750232384858',
    name: '我要自学网',
    description: '设计创作、免费使用工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.51zxw.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.51zxw.net',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['video', 'art', 'design', 'productivity', 'learning', 'free'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-doooor-1750232384858',
    name: '国外设计欣赏网站',
    description: '图像处理、设计创作、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.doooor.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.doooor.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['image', 'midjourney', 'art', 'design', 'photoshop', 'icon', 'template', 'frontend'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-visionunion-1750232384858',
    name: '视觉同盟',
    description: '设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.visionunion.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.visionunion.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['writing', 'art', 'design'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-blueidea-1750232384858',
    name: '蓝色理想',
    description: '设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.blueidea.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.blueidea.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['art', 'design', 'code', 'collaboration'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-sj33-1750232384859',
    name: '设计之家',
    description: '设计创作工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.sj33.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.sj33.cn',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['art', 'design', 'frontend'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-study-1750232384859',
    name: '网易云课堂',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://study.163.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://study.163.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['writing', 'art', 'compose', 'learning', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-ke-1750232384859',
    name: '腾讯课堂',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://ke.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ke.qq.com',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['learning', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-icourse163-1750232384859',
    name: '中国大学MOOC(慕课)',
    description: '在线工具工具，为设计师提供高效便捷的创作体验。',
    url: 'https://www.icourse163.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.icourse163.org',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['learning', 'online'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  },
  {
    id: 'design-uisdc-1750232384859',
    name: '优设网官网',
    description: '设计创作、模板素材工具，为设计师提供高效便捷的创作体验。',
    url: 'http://www.uisdc.com/',
    iconUrl: 'https://nav.iowen.cn/wp-content/uploads/2019/11/uisdc.png',
    category: 'self-learning',
    subcategory: 'self-learning-default',
    tags: ['ai', 'writing', 'midjourney', 'art', 'design', 'photoshop', 'template', 'frontend'],
    isHot: false,
    isFeatured: false,
    isNew: true,
    rating: 4.5
  }










];

// 导出所有工具数据
export const allDesignTools = designTools;

// 辅助函数：根据分类获取工具
export const getToolsByCategory = (categoryId) => {
  return designTools.filter(tool => tool.category === categoryId);
};



// 辅助函数：获取热门工具
export const getHotTools = (limit = 10) => {
  const hotTools = designTools.filter(tool => tool.isHot);
  return limit > 0 ? hotTools.slice(0, limit) : hotTools;
};

// 辅助函数：获取推荐工具
export const getFeaturedTools = (limit = 10) => {
  const featuredTools = designTools.filter(tool => tool.isFeatured);
  return limit > 0 ? featuredTools.slice(0, limit) : featuredTools;
};

// 辅助函数：搜索工具
export const searchTools = (keyword) => {
  const lowercaseKeyword = keyword.toLowerCase();
  return designTools.filter(tool => 
    tool.name.toLowerCase().includes(lowercaseKeyword) ||
    tool.description.toLowerCase().includes(lowercaseKeyword) ||
    tool.tags?.some(tag => tag.toLowerCase().includes(lowercaseKeyword))
  );
};

// 辅助函数：获取分类下的子分类
export const getSubCategoriesByCategory = (categoryId) => {
  const category = designCategories.find(cat => cat.id === categoryId);
  return category?.subcategories || [];
};

// 辅助函数：获取子分类统计
export const getSubCategoryStats = (categoryId) => {
  const subcategories = getSubCategoriesByCategory(categoryId);
  return subcategories ? subcategories.map(sub => ({
    ...sub,
    count: getToolsBySubCategory(sub.id).length
  })) : [];
};



// 辅助函数：获取所有工具
export const getAllDesignTools = () => {
  return designTools;
};

// 辅助函数：根据子分类获取工具
export const getToolsBySubCategory = (subCategoryId, limit = 0) => {
  const tools = designTools.filter(tool => tool.subcategory === subCategoryId);
  return limit > 0 ? tools.slice(0, limit) : tools;
}; 