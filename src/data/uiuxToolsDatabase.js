/**
 * @file uiuxToolsDatabase.js
 * @description UI/UX工具数据库 - 精选优质UI/UX设计工具与资源
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// UI/UX工具分类定义
export const uiuxCategories = [
  {
    id: 'design-inspiration',
    name: '设计灵感', // 设计灵感主分类
    description: '优秀设计案例与创意展示平台',
    icon: 'inspiration',
    color: '#3B82F6',
    subcategories: [
      { id: 'design-inspiration-web', name: '网页灵感' },       // 网页设计灵感资源
      { id: 'design-inspiration-ui', name: '界面灵感' },        // UI界面设计灵感资源
      { id: 'design-inspiration-motion', name: '动效灵感' },    // 动效设计灵感资源
      { id: 'design-inspiration-game', name: '游戏灵感' }       // 游戏设计灵感资源
    ]
  },
  {
    id: 'common-recommendations',
    name: '常用推荐', // 常用推荐工具分类
    description: 'UI/UX设计师常用工具与推荐资源',
    icon: 'prototype',
    color: '#10B981',
    subcategories: [
      { id: 'common-recommendations-discover', name: '发现产品' },  // 发现产品工具
      { id: 'common-recommendations-review', name: '设计走查' },    // 设计走查工具
      { id: 'common-recommendations-tools', name: '设计工具' },     // 设计工具
      { id: 'common-recommendations-collaboration', name: '协作平台' }, // 协作平台
      { id: 'common-recommendations-guidelines', name: '设计规范' },    // 设计规范
      { id: 'common-recommendations-competitor', name: '竞品分析' }    // 竞品分析
    ]
  },
  {
    id: 'design-system',
    name: '设计系统', // 设计系统主分类
    description: '企业级设计系统与UI组件库',
    icon: 'system',
    color: '#EC4899',
    subcategories: [
      { id: 'design-system-pc', name: 'PC端' },         // PC端设计系统
      { id: 'design-system-mobile', name: '移动端' },    // 移动端设计系统
      { id: 'design-system-miniapp', name: '小程序' },    // 小程序设计系统
      { id: 'design-system-ai', name: '人工智能' }       // AI设计系统
    ]
  },
  {
    id: 'motion-design',
    name: '动效设计', // 动效设计主分类
    description: '界面交互动效、动画素材与实现工具',
    icon: 'animation',
    color: '#0EA5E9',
    subcategories: [
      { id: 'motion-design-interaction', name: '交互工具' },    // 交互设计工具与资源
      { id: 'motion-design-material', name: '动效素材' },      // 动效素材库与资源
      { id: 'motion-design-reference', name: '动效参考' },     // 动效参考案例与灵感
      { id: 'motion-design-plugins', name: '落地插件' }        // 动效实现插件与工具
    ]
  },
  {
    id: 'design-plugins',
    name: '设计插件', // 设计插件主分类
    description: '提升设计效率的各类插件工具',
    icon: 'plugin',
    color: '#8B5CF6',
    subcategories: [
      { id: 'design-plugins-figma', name: 'Figma插件' },      // Figma设计插件
      { id: 'design-plugins-sketch', name: 'Sketch插件' },    // Sketch设计插件
      { id: 'design-plugins-xd', name: 'Adobe XD插件' },      // Adobe XD设计插件
      { id: 'design-plugins-photoshop', name: 'Photoshop插件' } // Photoshop设计插件
    ]
  },

  {
    id: 'design-resources',
    name: '设计素材', // 设计素材主分类
    description: '高质量设计素材与资源库',
    icon: 'material',
    color: '#F59E0B',
    subcategories: [
      { id: 'design-resources-ui', name: 'UI素材' },          // UI设计素材与资源
      { id: 'design-resources-icons', name: '图标素材' },       // 图标资源与素材
      { id: 'design-resources-images', name: '可商用图库' },    // 可商用图片与摄影素材
      { id: 'design-resources-illustrations', name: '可商用插画' }, // 可商用插画资源
      { id: 'design-resources-video', name: '可商用视频' },     // 可商用视频素材
      { id: 'design-resources-fonts', name: '可商用字体' },      // 可商用字体与排版资源
      { id: 'design-resources-mockups', name: '样机素材' },     // 产品展示样机素材
      { id: 'design-resources-fontwebsites', name: '字体网站' },  // 字体下载与预览网站
      { id: 'design-resources-soundeffects', name: '音效网站' },  // 音效和配乐资源网站
      { id: 'design-resources-ppt', name: 'PPT资源' },  // PPT模板与资源网站
      { id: 'design-resources-3d', name: '3D素材' },  // 3D素材与资源
      { id: 'design-resources-3dmodels', name: '3D模型' },  // 3D模型与场景资源
      { id: 'design-resources-aepr', name: 'AE/PR模板' },  // AE/PR模板与项目文件
      { id: 'design-resources-cutout', name: '免抠素材' }  // 免抠图片与透明素材
    ]
  },

  {
    id: 'data-visualization',
    name: '数字孪生', // 数字孪生主分类（原可视化大数据）
    description: '数据可视化与数字孪生技术工具资源',
    icon: 'digital',
    color: '#6366F1',
    subcategories: [
      { id: 'data-visualization-inspiration', name: '可视化灵感' },  // 可视化设计灵感
      { id: 'data-visualization-platform', name: '可视化平台' },    // 可视化构建平台
      { id: 'data-visualization-map', name: '可视化地图' },        // 地图数据可视化工具
      { id: 'data-visualization-components', name: '可视化组件' }   // 可视化组件库与框架
    ]
  },

  {
    id: 'automotive-design',
    name: '车载设计', // 车载设计主分类
    description: '汽车界面与交互设计相关资源与工具',
    icon: 'carui',
    color: '#3B82F6',
    subcategories: [
      { id: 'automotive-design-hmi', name: '车机交互' },        // 车机HMI交互设计
      { id: 'automotive-design-ui', name: '车载界面' },         // 车载UI设计资源
      { id: 'automotive-design-tools', name: '设计工具' },      // 车载设计专用工具
      { id: 'automotive-design-guidelines', name: '设计规范' }  // 车载设计指南与规范
    ]
  },

  {
    id: 'design-teams',
    name: '设计团队', // 设计团队主分类
    description: '优秀设计团队与设计机构资源分享',
    icon: 'designteam',
    color: '#059669',
    subcategories: [
      { id: 'design-teams-internet', name: '互联网团队' },      // 互联网公司设计团队
      { id: 'design-teams-agencies', name: '设计机构' },        // 知名设计服务机构
      { id: 'design-teams-automotive', name: '汽车团队' },      // 汽车企业设计团队
      { id: 'design-teams-innovation', name: '创新工作室' },    // 创新型设计工作室
      { id: 'design-teams-hardware', name: '硬件团队' },        // 硬件产品设计团队
      { id: 'design-teams-recruitment', name: '大厂招聘' }      // 大厂设计岗位招聘
    ]
  },

  {
    id: 'game-ui',
    name: '游戏设计', // 游戏设计主分类（原游戏UI）
    description: '游戏界面设计资源与工具',
    icon: 'gameui',
    color: '#7C3AED',
    subcategories: [
      { id: 'game-ui-inspiration', name: '游戏界面灵感' },     // 游戏UI设计灵感与案例
      { id: 'game-ui-resources', name: '游戏素材' },          // 游戏UI设计素材
      { id: 'game-ui-tools', name: '游戏UI工具' },            // 游戏界面设计工具
      { id: 'game-ui-guidelines', name: '游戏设计规范' }      // 游戏UI设计指南与规范
    ]
  },

  {
    id: 'metaverse-vrar',
    name: '元宇宙与VR/AR', // 元宇宙与VR/AR设计主分类
    description: '虚拟现实与增强现实界面设计资源',
    icon: 'metaverse',
    color: '#2563EB',
    subcategories: [
      { id: 'metaverse-vrar-inspiration', name: '空间界面灵感' },  // VR/AR界面设计灵感
      { id: 'metaverse-vrar-tools', name: '空间设计工具' },       // VR/AR设计工具
      { id: 'metaverse-vrar-resources', name: '3D资源' },         // 3D模型与资源
      { id: 'metaverse-vrar-guidelines', name: '空间设计规范' }   // VR/AR界面设计指南
    ]
  },


  
  {
    id: 'other-content',
    name: '其他内容', // 其他内容主分类
    description: '个人网站、炫酷网站和毕业作品展示',
    icon: 'othercontent',
    color: '#F97316',
    subcategories: [
      { id: 'other-content-personal', name: '个人网站' },      // 设计师个人网站
      { id: 'other-content-cool', name: '炫酷网站' },          // 视觉效果炫酷的网站
      { id: 'other-content-graduation', name: '毕业作品展' }   // 各大院校毕业设计作品
    ]
  }
];

// UI/UX工具数据
export const uiuxTools = [
  /* =========================================================
   * 设计灵感 - 网页灵感 (design-inspiration-web)
   * ========================================================= */
  // 网页设计灵感 - 从提取的数据导入 (共28个网站)
  // 1
  {
    id: 'appinspo',
    name: 'Appinspo',
    description: '探索最新的App视觉界面设计趋势，为您的下一个数字产品获取灵感',
    url: 'https://www.appinspo.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.appinspo.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'video', 'mobile'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2
  {
    id: 'tgideas',
    name: 'TGideas',
    description: '腾讯互动娱乐旗下设计团队，专注IP内容力构建与发展，集产品内容开发，内容营销，IP商业化拓展和体验设计等于一体',
    url: 'https://tgideas.qq.com/index.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tgideas.qq.com/index.html',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'code', 'collaboration', 'inspiration'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3
  {
    id: 'recent',
    name: 'Recent Design',
    description: '专门收集互联网上发布的热门UI/UX设计作品',
    url: 'https://recent.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://recent.design',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 4
  {
    id: 'notefolio',
    name: 'Notefolio',
    description: '韩国的综合性设计交流网站，内容涵盖平面设计、排版设计、艺术设计、包装设计、品牌设计、插画设计、3D、UI设计等多个领域',
    url: 'https://notefolio.net',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://notefolio.net',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'writing', 'inspiration', 'community', 'portfolio'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 5
  {
    id: 'dribbble',
    name: 'Dribbble',
    description: '设计师获取灵感、反馈、社区和工作的平台，发现和连接全球设计师的最佳资源',
    url: 'https://dribbble.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://dribbble.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'inspiration', 'community'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 6
  {
    id: 'behance',
    name: 'Behance',
    description: 'Adobe旗下的创意作品展示平台，汇集全球顶尖设计师的作品集',
    url: 'https://www.behance.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.behance.net',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'portfolio'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 7
  {
    id: 'inspirationde',
    name: '超强灵感社区',
    description: 'Inspirationde是设计灵感、摄影、室内设计、网页设计、UI/UX、数字艺术、插画、平面设计等多种创意内容的在线资源',
    url: 'https://www.inspirationde.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.inspirationde.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'image', 'frontend', 'inspiration', 'online', 'community'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 8
  {
    id: 'uecook',
    name: 'UECOOK设计社区',
    description: '交流UIUX、平面设计、插画、空间设计、工业设计、产品设计、数码艺术、传统艺术、时尚和摄影等设计方向的社区',
    url: 'http://uecook.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://uecook.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'image', 'community'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 9
  {
    id: 'huaban',
    name: '花瓣网',
    description: '设计师寻找灵感的天堂！图片素材领导者，帮你采集、发现网络上你喜欢的事物',
    url: 'https://huaban.com/user/uied',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://huaban.com/user/uied',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'image', 'inspiration'],
    isHot: true,
    isFeatured: false,
    rating: 4.6
  },
  // 10
  {
    id: 'meiye',
    name: '美叶',
    description: '为设计师，创意人提供有价值的设计参考。灵感采集，优质素材获取，时刻Follow最新流行设计趋势',
    url: 'https://www.meiye.art/inspiration',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.meiye.art/inspiration',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'image', 'inspiration'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 11
  {
    id: 'visionunion',
    name: '视觉同盟',
    description: '为全球设计师和设计院校学生提供全方位服务的专业内容平台，覆盖设计行业，内容信息全面高效及时',
    url: 'http://www.visionunion.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.visionunion.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 12
  {
    id: 'blueidea',
    name: '蓝色理想',
    description: '专业的设计与技术支持，提供网站设计与网络技术支持、商业网站开发',
    url: 'http://www.blueidea.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.blueidea.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'code', 'collaboration'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 13
  {
    id: 'sj33',
    name: '设计之家',
    description: '专业设计互动平台，致力于推广最新的设计理念，涵盖平面设计、包装设计、网页设计、工业设计等多个领域',
    url: 'https://www.sj33.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.sj33.cn',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'frontend'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 14
  {
    id: 'bigbigwork',
    name: '大作',
    description: '找灵感，用大作 - 设计师作品集与灵感资源平台',
    url: 'https://www.bigbigwork.com',
    iconUrl: 'https://88sheji-1304770347.cos.ap-guangzhou.myqcloud.com/wp-content/uploads/2022/06/1656382307-dazuo.png',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['inspiration'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 15
  {
    id: 'reallygoodux',
    name: 'Really Good UX',
    description: '一个包含屏幕截图和优秀用户体验示例的库',
    url: 'https://www.reallygoodux.io',
    iconUrl: 'http://88sheji.cn/wp-content/uploads/2021/07/5be2fc56e0d7ee074cdd6315_uxbig.png',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'ux'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  // 16
  {
    id: 'navnav',
    name: 'Navnav',
    description: '大量的CSS, jQuery和JavaScript响应式导航的例子，演示和教程资源',
    url: 'http://navnav.co',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://navnav.co',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['code', 'frontend', 'learning'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 17
  {
    id: 'web-inspiration',
    name: 'WebInspiration',
    description: '网页设计欣赏，全球顶级网页设计作品集合',
    url: 'http://web.uedna.com',
    iconUrl: 'http://88sheji.cn/wp-content/uploads/2021/07/WX20210705-154907.png',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'frontend', 'inspiration', 'online'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 18
  {
    id: 'siteinspire',
    name: 'Site Inspire',
    description: 'CSS画廊和最佳网页设计灵感展示平台',
    url: 'https://www.siteinspire.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.siteinspire.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'mockup', 'code', 'frontend', 'inspiration', 'portfolio'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 19
  {
    id: 'sitesee',
    name: 'SiteSee',
    description: '精心策划的现代网站收藏画廊',
    url: 'https://sitesee.co',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://sitesee.co',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'web', 'inspiration'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  // 20
  {
    id: 'pages',
    name: 'Pages',
    description: '最佳页面的策划目录，网页设计作品集',
    url: 'http://www.pages.xyz',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.pages.xyz',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'web'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 21
  {
    id: 'bestwebsite',
    name: 'Best Websites Gallery',
    description: '网站展示灵感|最佳网站画廊',
    url: 'https://bestwebsite.gallery',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://bestwebsite.gallery',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['mockup', 'frontend', 'inspiration', 'online', 'portfolio'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 22
  {
    id: 'designmunk',
    name: 'Designmunk',
    description: '最佳网页设计灵感展示平台',
    url: 'https://designmunk.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://designmunk.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'frontend', 'inspiration'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 23
  {
    id: 'reeoo',
    name: 'Reeoo',
    description: '网页设计灵感和网站画廊，优秀网页设计参考平台',
    url: 'http://reeoo.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://reeoo.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'frontend', 'inspiration'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 24
  {
    id: 'lapa',
    name: 'Lapa Ninja',
    description: '最好的登陆页面设计灵感收集，帮助设计师获取创意灵感',
    url: 'http://www.lapa.ninja',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.lapa.ninja',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'inspiration', 'landing page'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 25
  {
    id: 'ecommercefolio',
    name: 'Ecommercefolio',
    description: '最好的电子商务设计灵感，电商网站设计参考',
    url: 'http://www.ecommercefolio.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.ecommercefolio.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'inspiration', 'ecommerce'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 26
  {
    id: 'thefwa',
    name: 'The FWA',
    description: '自2000年以来，每天都在展示创新的网页设计作品',
    url: 'https://thefwa.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://thefwa.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['mockup', 'portfolio', 'awards', 'innovation'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 27
  {
    id: 'cssdesignawards',
    name: 'CSS Design Awards',
    description: '网站奖项和灵感- CSS画廊，优秀网页设计集合',
    url: 'https://www.cssdesignawards.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.cssdesignawards.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'code', 'inspiration', 'awards'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 28
  {
    id: 'awwwards',
    name: 'Awwwards',
    description: '网站奖项，表彰和促进世界上最好的开发人员，设计师和网络代理的人才和努力',
    url: 'https://www.awwwards.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.awwwards.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-web',
    tags: ['design', 'code', 'web', 'awards'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  /* =========================================================
   * 设计灵感 - 动效灵感 (design-inspiration-motion)
   * ========================================================= */
  // 1. 礼物动效
  {
    id: 'gift',
    name: '礼物动效',
    description: '元湃技术出品的优质礼物动效展示平台，提供多种精美动画效果参考',
    url: 'http://gift.yuanpaikeji.com/liwu_wap/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://gift.yuanpaikeji.com/liwu_wap',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['animation', 'motion', 'interaction'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 2. Loading动图
  {
    id: 'loading-motion',
    name: 'Loading动图',
    description: '美叶精选的加载动效集合，为设计师提供创意加载动画参考',
    url: 'https://www.meiye.art/inspiration/1/495',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.meiye.art/inspiration/1/495',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['design', 'loading', 'animation', 'inspiration'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 3. PhotoMosh
  {
    id: 'photomosh',
    name: 'PhotoMosh',
    description: '快速制作故障效果的在线工具，简单快速，一键生成各种glitch动效',
    url: 'https://photomosh.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://photomosh.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['image', 'glitch', 'effects', 'animation'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 4. App-ealing
  {
    id: 'app-ealing',
    name: 'App-ealing',
    description: '手机APP的UI交互动效收集平台，展示优秀的移动端交互设计案例',
    url: 'https://app-ealing.com/',
    iconUrl: 'https://app-ealing.com/favicon.ico',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['design', 'mobile', 'animation', 'interaction'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 5. Code my UI
  {
    id: 'codemyui',
    name: 'Code my UI',
    description: '一个动态交互设计灵感网站，非常详细的分类，资源丰富有趣',
    url: 'https://codemyui.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://codemyui.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['design', 'code', 'inspiration', 'animation', 'interaction'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 6. App Animations
  {
    id: 'appanimations',
    name: 'App Animations',
    description: '高质量的手机APP动态灵感资源网站，点击图标即可预览动效',
    url: 'https://www.appanimations.com/',
    iconUrl: 'https://www.appanimations.com/favicon.ico',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['icon', 'inspiration', 'mobile', 'animation'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 7. 网页动效案例
  {
    id: 'webs-video',
    name: '网页动效案例',
    description: '收集优秀的网页动效案例，为开发者和设计师提供前端动效参考',
    url: 'https://webs.video/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://webs.video',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['frontend', 'web', 'animation', 'motion'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 8. 动效元素周期表
  {
    id: 'foxcodex',
    name: '动效元素周期表',
    description: '一个日本设计师用元素周期表的方式，罗列出常见的动效效果，非常直观',
    url: 'http://foxcodex.html.xdomain.jp/index.html',
    iconUrl: 'http://foxcodex.html.xdomain.jp/favicon.ico',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['design', 'animation', 'reference', 'motion'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 9. Motion.dev
  {
    id: 'motion-dev',
    name: 'Motion.dev',
    description: '一款革命性的动效设计工具，使Web动画开发变得简单直观',
    url: 'https://motion.dev/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://motion.dev',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['code', 'web', 'animation', 'tool'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 10. CSS Animation
  {
    id: 'cssanimation',
    name: 'CSS Animation',
    description: 'CSS动画学习资源平台，提供教程、示例和灵感',
    url: 'https://cssanimation.rocks/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cssanimation.rocks',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['css', 'code', 'learning', 'animation'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 11. Loading.io
  {
    id: 'loading-io',
    name: 'Loading.io',
    description: '提供各种加载动画和进度指示器的平台，支持多种格式导出',
    url: 'https://loading.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://loading.io',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['loading', 'animation', 'tool'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 12. LottieFiles
  {
    id: 'lottiefiles',
    name: 'LottieFiles',
    description: 'Lottie动画社区和平台，提供轻量级、可扩展的动画文件和工具',
    url: 'https://lottiefiles.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://lottiefiles.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['animation', 'lottie', 'tool', 'community'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 13. Glitchy Image
  {
    id: 'glitchyimage',
    name: 'Glitchy Image',
    description: '在线故障艺术生成器，创建独特的视觉效果和动态图像',
    url: 'https://glitchyimage.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://glitchyimage.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-motion',
    tags: ['glitch', 'effect', 'image', 'tool'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  /* =========================================================
   * 游戏灵感 - 游戏灵感 (design-inspiration-game)
   * ========================================================= */
  // 1. 王者荣耀素材库
  {
    id: 'pvp',
    name: '王者荣耀素材库',
    description: '荣耀萤火开放素材库为创作者提供所需素材，包括英雄、皮肤海报，游戏CG视频，角色模型等海量内容',
    url: 'https://pvp.icreate.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pvp.icreate.qq.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['image', 'video', 'game', 'resource'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. 新增：游戏邦
  {
    id: 'gamerboom',
    name: '游戏邦',
    description: '中国游戏设计门户网站，提供游戏设计、游戏策划、游戏美术等全方位的游戏开发资讯',
    url: 'https://www.gamerboom.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gamerboom.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['游戏设计', '游戏开发', '游戏美术', '中国游戏', '设计资源'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. 金铲铲之战
  {
    id: 'jcc',
    name: '金铲铲之战UI设计',
    description: '英雄联盟云顶之弈正版授权的自动战斗手游，展示了优秀的游戏UI设计',
    url: 'https://jcc.qq.com/#/index',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://jcc.qq.com/#/index',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['game', 'ui', 'mobile'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 4. 新增：Polycount
  {
    id: 'polycount',
    name: 'Polycount',
    description: '全球知名的游戏艺术社区，提供丰富的游戏美术和设计资源，包括3D模型、贴图和界面设计',
    url: 'https://polycount.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://polycount.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['游戏美术', '3D模型', '贴图设计', '游戏设计', '社区'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. Bungie
  {
    id: 'bungie',
    name: 'Bungie.net',
    description: '《命运》和《光环》等游戏开发商Bungie的官方网站，展示了优秀的游戏设计',
    url: 'https://www.bungie.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.bungie.net',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['game', 'design', 'official'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 6. DeviantArt游戏区
  {
    id: 'deviantart-game',
    name: 'DeviantArt游戏设计区',
    description: '全球最大的艺术社区DeviantArt中的游戏艺术与设计专区',
    url: 'https://www.deviantart.com/tag/gamedesign',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.deviantart.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['art', 'game', 'community'],
    isHot: false,
    isFeatured: false,
    rating: 4.4
  },
  // 7. GAMEUI
  {
    id: 'gameui',
    name: 'GAMEUI',
    description: '游戏UI/UX学习、交流、分享平台，汇集优质游戏界面设计资源',
    url: 'https://www.gameui.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gameui.net',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['design', 'learning', 'community', 'game', 'ui'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 8. GAME UI Database
  {
    id: 'gameuidatabase',
    name: 'GAME UI Database',
    description: '收集了920款精品游戏，各类游戏界面参考共计38000多张高清图片',
    url: 'https://www.gameuidatabase.com/index.php',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gameuidatabase.com/index.php',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['design', 'image', 'game', 'ui', 'database'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 9. Interface In Game
  {
    id: 'interfaceingame',
    name: 'Interface In Game',
    description: '搜罗了200多款顶级优秀游戏的UI和交互方面的资料，是游戏设计的宝库',
    url: 'https://interfaceingame.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://interfaceingame.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['design', 'game', 'ui', 'interface'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 10. Artstation游戏设计区
  {
    id: 'artstation-game',
    name: 'Artstation游戏设计',
    description: '专业创意人士展示平台中的游戏设计专区，汇集顶尖游戏艺术作品',
    url: 'https://www.artstation.com/channels/game_design',
    iconUrl: 'https://www.artstation.com/favicon.ico',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['art', 'design', 'game', 'professional'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 11. 设计细节
  {
    id: 'littlebigdetails',
    name: '设计细节',
    description: '展示游戏和应用程序中令人愉悦的小设计细节，关注用户体验的微妙之处',
    url: 'https://littlebigdetails.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://littlebigdetails.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['design', 'details', 'ux', 'game'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 12. 精选的亚洲APP合集
  {
    id: 'chamjo',
    name: '精选的亚洲APP合集',
    description: '展示亚洲地区精选游戏和应用程序设计，聚焦东亚设计美学与创新',
    url: 'https://chamjo.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://chamjo.design',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['mobile', 'game', 'asian', 'app'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 13. Android Niceties
  {
    id: 'androidniceties',
    name: 'Android Niceties',
    description: '一系列精选的最漂亮Android游戏和应用程序截图，专注于Android平台优秀设计',
    url: 'http://androidniceties.tumblr.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://androidniceties.tumblr.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['mobile', 'android', 'game', 'app'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 14. Pttrns
  {
    id: 'pttrns',
    name: 'Pttrns',
    description: '移动应用和游戏UI设计模式收集平台，提供最佳设计资源和灵感',
    url: 'https://www.pttrns.com',
    iconUrl: 'http://88sheji.cn/wp-content/uploads/2021/07/pttrns-animated.gif',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-game',
    tags: ['design', 'inspiration', 'mobile', 'game', 'patterns'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  /* =========================================================
   * 界面灵感 - 界面灵感 (design-inspiration-ui)
   * ========================================================= */
  {
    id: 'ui-inspiration-1',
    name: 'UI灵感精选',
    description: '收集精选的界面设计灵感，展示现代UI设计趋势和最佳实践',
    url: 'https://uiinspiration.design',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['ui', 'design', 'inspiration', 'interface'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  // 原型工具 - 交互原型
  {
    id: 'invision',
    name: 'InVision',
    description: '专业的数字产品设计平台，专注于原型制作和用户测试',
    url: 'https://invisionapp.com',
    iconUrl: 'https://invisionapp.com/favicon.ico',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['交互原型', '用户测试', '设计协作', '反馈收集'],
    rating: 4.3
  },
  // ... 此处省略其他原型工具数据

  /* =========================================================
   * 常用推荐 - 发现产品 (common-recommendations-discover)
   * ========================================================= */
  // 1. refto
  {
    id: 'refto',
    name: 'refto',
    description: '探索网站设计和交互灵感的优质平台',
    url: 'https://refto.one/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://refto.one',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'frontend', 'inspiration', 'online'],
    isHot: true,
    isFeatured: false,
    rating: 4.5
  },
  // 2. appinspo
  {
    id: 'appinspo',
    name: 'Appinspo',
    description: '探索最新的App视觉界面设计趋势，为您的下一个数字产品获取灵感',
    url: 'https://www.appinspo.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.appinspo.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'video', 'mobile'],
    isHot: true,
    isFeatured: false,
    rating: 4.5
  },
  // 3. tgideas
  {
    id: 'tgideas',
    name: 'TGideas',
    description: '腾讯互动娱乐旗下设计团队，专注IP内容力构建与发展，集产品内容开发，内容营销，IP商业化拓展和体验设计等于一体',
    url: 'https://tgideas.qq.com/index.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tgideas.qq.com/index.html',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'code', 'collaboration', 'inspiration'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 4. calltoinspiration
  {
    id: 'calltoinspiration',
    name: 'CallToInspiration',
    description: '专为UX设计师和开发人员提供灵感的平台，采用紫色帽子的方法帮助你克服创意障碍，获得新鲜想法',
    url: 'https://calltoinspiration.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://calltoinspiration.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'code', 'inspiration', 'community'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 5. screenlane
  {
    id: 'screenlane-discover',
    name: 'Screenlane',
    description: '精选最佳移动和网页UI设计灵感，直接发送到您的收件箱',
    url: 'https://screenlane.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://screenlane.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'frontend', 'inspiration', 'online', 'mobile'],
    isHot: true,
    isFeatured: false,
    rating: 4.5
  },
  // 7. jike
  {
    id: 'jike',
    name: '即刻作品',
    description: 'UICN用户体验平台,中国用户体验联盟理事单位。国内极具影响力的设计平台之一',
    url: 'https://jike.ui.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://jike.ui.cn',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 8. mobbin-discover
  {
    id: 'mobbin-discover',
    name: 'Mobbin',
    description: '拥有超过10万个可搜索的移动和网页应用截图库，节省UI和UX研究时间',
    url: 'https://mobbin.com/browse/ios/apps',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mobbin.com/browse/ios/apps',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'frontend', 'online', 'mobile'],
    isHot: true,
    isFeatured: false,
    rating: 4.5
  },
  // 9. uinotes
  {
    id: 'uinotes-discover',
    name: 'UI Notes',
    description: '收集了大量线上优秀App的完整UI截图，只有落地设计没有飞机稿，探索UI设计最新趋势',
    url: 'https://uinotes.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uinotes.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'inspiration', 'mobile'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 10. notefolio
  {
    id: 'notefolio-discover',
    name: 'Notefolio',
    description: '韩国的综合性设计交流网站，内容涵盖平面设计、排版设计、艺术设计、包装设计、品牌设计、插画设计、3D、UI设计等多个领域',
    url: 'https://notefolio.net',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://notefolio.net',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'writing', 'inspiration', 'community', 'design', 'portfolio'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 11. dribbble
  {
    id: 'dribbble-discover',
    name: 'Dribbble',
    description: '设计师获取灵感、反馈、社区和工作的平台，发现和连接全球设计师的最佳资源',
    url: 'https://dribbble.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://dribbble.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['ai', 'design', 'template', 'video', 'inspiration', 'community', 'design', 'inspiration'],
    isHot: true,
    isFeatured: false,
    rating: 4.5
  },
  // 12. behance
  {
    id: 'behance-discover',
    name: 'Behance',
    description: 'Adobe旗下的创意作品展示平台，汇集全球顶尖设计师的作品集',
    url: 'https://www.behance.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.behance.net',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'portfolio'],
    isHot: true,
    isFeatured: false,
    rating: 4.5
  },
  // 13. inspirationde
  {
    id: 'inspirationde-discover',
    name: '超强灵感社区',
    description: 'Inspirationde是设计灵感、摄影、室内设计、网页设计、UI/UX、数字艺术、插画、平面设计等多种创意内容的在线资源',
    url: 'https://www.inspirationde.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.inspirationde.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'image', 'frontend', 'inspiration', 'online', 'community'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 14. uecook
  {
    id: 'uecook-discover',
    name: 'UECOOK设计社区',
    description: '交流UIUX、平面设计、插画、空间设计、工业设计、产品设计、数码艺术、传统艺术、时尚和摄影等设计方向的社区',
    url: 'http://uecook.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://uecook.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'image', 'community'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 15. huaban
  {
    id: 'huaban-discover',
    name: '花瓣画板采集界面参考',
    description: '花瓣网, 设计师寻找灵感的天堂！图片素材领导者，帮你采集、发现网络上你喜欢的事物',
    url: 'https://huaban.com/user/uied',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://huaban.com/user/uied',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'image', 'inspiration'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 16. meiye
  {
    id: 'meiye-discover',
    name: '美叶',
    description: '为设计师，创意人提供有价值的设计参考。灵感采集，优质素材获取，时刻Follow最新流行设计趋势',
    url: 'https://www.meiye.art/inspiration',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.meiye.art/inspiration',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['design', 'image', 'inspiration'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 17. collectui
  {
    id: 'collectui-discover',
    name: 'Collect UI',
    description: '从每日ui档案中收集的每日灵感，基于Dribbble截图，精心挑选，每日更新',
    url: 'https://collectui.com/challenges/sign-up',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://collectui.com/challenges/sign-up',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['ai', 'design', 'template', 'inspiration', 'design', 'inspiration'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 18. uxsync
  {
    id: 'uxsync',
    name: '汽车智能竞品收集平台',
    description: '专注于汽车智能系统的UI/UX设计参考平台',
    url: 'https://uxsync.com/index.html/#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uxsync.com/index.html/#',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-discover',
    tags: ['ai', 'design'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 从uiux_tools_extracted_2025-06-07.js添加的界面灵感数据
   * ========================================================= */
  // 1. UI Notes
  {
    id: 'uinotes-ui',  // 修改ID以避免重复
    name: 'UI Notes',
    description: '收集了大量线上优秀App的完整UI截图，只有落地设计没有飞机稿，探索UI设计最新趋势',
    url: 'https://uinotes.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uinotes.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'inspiration', 'mobile', 'ui', 'app'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. Screenlane
  {
    id: 'screenlane-ui',  // 修改ID以避免重复
    name: 'Screenlane',
    description: '精选最佳移动和网页UI设计灵感，直接发送到您的收件箱',
    url: 'https://screenlane.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://screenlane.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'frontend', 'inspiration', 'online', 'mobile', 'ui'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. Mobbin
  {
    id: 'mobbin-ui',  // 修改ID以避免重复
    name: 'Mobbin',
    description: '拥有超过10万个可搜索的移动和网页应用截图库，节省UI和UX研究时间',
    url: 'https://mobbin.com/browse/ios/apps',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mobbin.com/browse/ios/apps',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'frontend', 'online', 'mobile', 'ui', 'app'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 4. UIII.Club
  {
    id: 'uiii',
    name: 'UIII.Club',
    description: 'UIII灵感俱乐部，为设计师提供高质量UI设计参考和灵感',
    url: 'https://uiii.club',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiii.club',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'inspiration', 'ui', 'interface'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 5. 即刻作品
  {
    id: 'jike',
    name: '即刻作品',
    description: 'UICN用户体验平台，国内极具影响力的设计平台之一，拥有150万+会员的专业设计社区',
    url: 'https://jike.ui.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://jike.ui.cn',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'ui', 'community', 'chinese'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 6. Collect UI
  {
    id: 'collectui',
    name: 'Collect UI',
    description: '每日UI挑战灵感集合，基于Dribbble精选作品，每日更新的界面设计参考',
    url: 'https://collectui.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://collectui.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'inspiration', 'ui', 'daily'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 7. 汽车智能竞品收集平台
  {
    id: 'uxsync',
    name: '汽车智能竞品收集平台',
    description: 'UX Sync汽车界面设计参考平台，收集汽车智能系统界面设计案例',
    url: 'https://uxsync.com/index.html/#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uxsync.com/index.html/#',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['ai', 'design', 'ui', 'automotive', 'car'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 8. Pttrns
  {
    id: 'pttrns',
    name: 'Pttrns',
    description: '最佳设计模式、资源、移动应用程序和灵感集合，UI设计师必备参考',
    url: 'https://www.pttrns.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pttrns.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'inspiration', 'mobile', 'patterns', 'ui'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 9. CallToInspiration
  {
    id: 'calltoinspiration',
    name: 'CallToInspiration',
    description: '专为UX设计师和开发人员提供灵感的平台，采用紫色帽子方法帮助克服创意障碍',
    url: 'https://calltoinspiration.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://calltoinspiration.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'code', 'inspiration', 'community', 'ui', 'ux'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 10. 设计细节
  {
    id: 'littlebigdetails',
    name: '设计细节',
    description: 'Little Big Details收集了产品设计中的微妙细节，帮助设计师关注用户体验的精细之处',
    url: 'https://littlebigdetails.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://littlebigdetails.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'details', 'ux', 'ui', 'micro-interactions'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 11. 精选的亚洲APP合集
  {
    id: 'chamjo',
    name: '精选的亚洲APP合集',
    description: 'Chamjo Design提供亚洲流行App设计参考，展示东方设计美学与交互创新',
    url: 'https://chamjo.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://chamjo.design',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['mobile', 'app', 'asia', 'ui', 'design'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 12. Android Niceties
  {
    id: 'androidniceties',
    name: 'Android Niceties',
    description: '精选最漂亮的Android应用程序截图集合，为安卓UI设计提供灵感',
    url: 'http://androidniceties.tumblr.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://androidniceties.tumblr.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['mobile', 'android', 'ui', 'app', 'design'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 13. land-book
  {
    id: 'land-book',
    name: '网页灵感库',
    description: '精选优质网页设计作品展示平台，可以预览移动端效果',
    url: 'https://land-book.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://land-book.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['frontend', 'inspiration', 'mobile', 'web', 'ui'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 14. saaslandingpage
  {
    id: 'saaslandingpage',
    name: 'SAAS官网示例',
    description: '收集了660个精选SAAS产品官网设计案例，为界面设计提供参考',
    url: 'https://saaslandingpage.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://saaslandingpage.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['saas', 'landing', 'web', 'ui'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 15. visionunion
  {
    id: 'visionunion-ui',
    name: '视觉同盟',
    description: '为全球设计师提供服务的专业设计内容平台，全面覆盖UI/UX设计领域',
    url: 'http://www.visionunion.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.visionunion.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'ui', 'inspiration', 'platform'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 16. blueidea
  {
    id: 'blueidea-ui',
    name: '蓝色理想',
    description: '提供专业设计与技术支持的平台，汇集优质界面设计案例和资源',
    url: 'http://www.blueidea.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.blueidea.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'code', 'collaboration', 'ui'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 17. sj33
  {
    id: 'sj33-ui',
    name: '设计之家',
    description: '专业设计互动平台，涵盖UI设计、网页设计等多个领域的优质案例',
    url: 'https://www.sj33.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.sj33.cn',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'frontend', 'ui'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 18. bigbigwork
  {
    id: 'bigbigwork-ui',
    name: '大作',
    description: '为设计师提供灵感和素材的平台，包含丰富的界面设计参考',
    url: 'https://www.bigbigwork.com',
    iconUrl: 'https://88sheji-1304770347.cos.ap-guangzhou.myqcloud.com/wp-content/uploads/2022/06/1656382307-dazuo.png',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['inspiration', 'ui', 'design'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 19. mobbin-design
  {
    id: 'mobbin-design',
    name: '移动App截图库',
    description: '提供各种优秀App的完整界面截图，是移动端UI设计的绝佳参考',
    url: 'https://mobbin.design/browse/ios/apps',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mobbin.design/browse/ios/apps',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['mobile', 'app', 'ui', 'screenshots'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 20. huaban-app
  {
    id: 'huaban-app',
    name: '花瓣应用设计',
    description: '花瓣网应用设计专区，汇集移动应用界面设计灵感',
    url: 'https://huaban.com/boards/77427114',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://huaban.com/boards/77427114',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'image', 'inspiration', 'mobile', 'ui'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 21. usepanda
  {
    id: 'usepanda',
    name: 'Panda2',
    description: '设计作品和资讯文摘订阅平台，提供最新界面设计趋势和灵感',
    url: 'https://usepanda.com/app/#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://usepanda.com/app/#',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'news', 'ui', 'digest'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 22. collectui-ui
  {
    id: 'collectui-ui',
    name: 'Collect UI',
    description: '从每日UI档案中收集的界面设计灵感，每日更新优质界面设计',
    url: 'http://collectui.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://collectui.com',
    category: 'design-inspiration',
    subCategory: 'design-inspiration-ui',
    tags: ['design', 'inspiration', 'ui', 'daily'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 常用推荐 - 设计走查 (common-recommendations-review)
   * ========================================================= */
  // 1. 元素清单
  {
    id: 'element-checklists',
    name: '元素清单',
    description: '元素是界面的基本构建块。很好地理解和覆盖您的组件，您将准备一个一致的基础架构来丰富用户体验。',
    url: 'https://www.checklist.design/element-checklists',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.checklist.design/element-checklists',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-review',
    tags: ['design', 'checklist', 'ui', 'components'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 2. copixel
  {
    id: 'copixel',
    name: 'Copixel',
    description: '解决开发还原度低、设计走查低效的问题，实现高质量的项目还原效果，保障更极致的用户体验',
    url: 'https://copixel.bytedance.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://copixel.bytedance.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-review',
    tags: ['design', 'code', 'review', 'collaboration'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. 设计系统检查清单
  {
    id: 'design-system-checklist',
    name: '设计系统检查清单',
    description: '一个开源的检查清单，帮助团队规划、构建和发展他们的设计系统，确保设计系统的完整性和一致性',
    url: 'https://www.designsystemchecklist.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.designsystemchecklist.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-review',
    tags: ['design', 'checklist', 'system', 'consistency', 'review'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 4. UX Checklist
  {
    id: 'ux-checklist',
    name: 'UX Checklist',
    description: '用户体验设计师的最佳实践清单，涵盖从研究到实施的整个设计流程，帮助确保产品的易用性',
    url: 'https://uxchecklist.github.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uxchecklist.github.io',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-review',
    tags: ['ux', 'checklist', 'design', 'process', 'review'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 5. Frontify
  {
    id: 'frontify',
    name: 'Frontify',
    description: '品牌管理平台，提供设计系统管理和设计走查工具，确保设计资产符合品牌标准',
    url: 'https://www.frontify.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.frontify.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-review',
    tags: ['brand', 'management', 'design', 'system', 'review'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 6. Accessibility Checklist
  {
    id: 'a11y-checklist',
    name: '可访问性检查清单',
    description: '全面的网页可访问性检查清单，帮助设计师和开发人员创建符合WCAG标准的产品',
    url: 'https://www.a11yproject.com/checklist/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.a11yproject.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-review',
    tags: ['accessibility', 'checklist', 'wcag', 'review', 'standards'],
    isHot: false,
    isFeatured: true,
    rating: 4.8
  },
  // 7. Checklist Design
  {
    id: 'checklist-design',
    name: 'Checklist Design',
    description: '为设计师和开发人员提供的全面UI组件和页面设计检查清单集合',
    url: 'https://www.checklist.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.checklist.design',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-review',
    tags: ['design', 'checklist', 'ui', 'components', 'review'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 8. UI/UX Review Tools
  {
    id: 'uiux-review-tools',
    name: 'UI/UX审查工具',
    description: '收集各种帮助设计团队进行设计走查和审查的工具，提高设计质量和一致性',
    url: 'https://uiedtool.com/tools/design/review-tools',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiedtool.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-review',
    tags: ['design', 'review', 'tools', 'quality', 'ui', 'ux'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },

  /* =========================================================
   * 常用推荐 - 设计工具 (common-recommendations-tools)
   * ========================================================= */
  // 1. Motiff
  {
    id: 'motiff-tools',
    name: 'Motiff',
    description: 'AI 驱动的用户界面设计工具。人与 AI 共同协作，开启全新的设计方式和体验，让设计团队工作更高效',
    url: 'https://motiff.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://motiff.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['ai', 'design', 'template', 'collaboration'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. 摹客
  {
    id: 'mockplus-tools',
    name: '摹客',
    description: '集设计协作平台、原型设计和设计规范为一体，数百万设计师、产品经理和开发工程师必备设计神器',
    url: 'https://www.mockplus.cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mockplus.cn',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'code', 'collaboration'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. 图像大厨imgcook
  {
    id: 'imgcook-tools',
    name: '图像大厨imgcook',
    description: '由设计稿一键智能生成代码的大厨 | An intelligent tool turning designs to code',
    url: 'https://www.imgcook.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.imgcook.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['ai', 'design', 'image', 'code'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 4. 腾讯设计云
  {
    id: 'design-tencent-tools',
    name: '腾讯设计云',
    description: '源自于腾讯的产品设计研发一站式协作平台，支持在线导入预览Sketch设计稿、自动生成设计标注切图',
    url: 'https://design.tencent.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.tencent.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'image', 'icon', 'collaboration', 'online'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. Fabrie
  {
    id: 'fabrie-tools',
    name: 'Fabrie',
    description: '设计师的新一代在线设计协作平台，支持白板在线编辑图文、便利贴、思维导图、关联多维表格等功能',
    url: 'https://www.fabrie.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.fabrie.cn',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'writing', 'collaboration', 'inspiration', 'free', 'online'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 6. CoDesign
  {
    id: 'codesign-tools',
    name: 'CoDesign',
    description: '腾讯自研的产品设计一站式协作平台，支持在线导入预览Sketch设计稿、自动生成设计标注切图',
    url: 'https://codesign.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://codesign.qq.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'image', 'icon', 'code', 'collaboration', 'online'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 7. Pixso
  {
    id: 'pixso-tools',
    name: 'Pixso',
    description: '一体化设计协作工具，助力产研设团队制作原型，UI/UX设计，视觉设计，低代码交付时获得更轻松流畅的工作体验',
    url: 'https://pixso.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pixso.cn',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'code', 'collaboration', 'ui'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 8. MasterGo
  {
    id: 'mastergo-tools',
    name: 'MasterGo',
    description: '为团队协作而生的一站式在线产品设计工具，提供在线产品设计、原型图制作设计、网页开发设计、产品交互设计等功能',
    url: 'https://mastergo.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mastergo.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'code', 'frontend', 'collaboration', 'online'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 9. Sketch中文网
  {
    id: 'sketchcn-tools',
    name: 'Sketch中文网',
    description: '以中文内容介绍Sketch这款Mac设计工具的社区，分享最新的Sketch中文手册及使用技巧',
    url: 'http://www.sketchcn.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.sketchcn.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'community'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 10. 即时设计
  {
    id: 'js-design-tools',
    name: '即时设计',
    description: '在线可协作的UI设计工具，国内版figma，拥有海量设计资源与素材，支持创建交互原型、获取设计标注、快速切图等功能',
    url: 'https://js.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://js.design',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'image', 'template', 'collaboration', 'online', 'ui'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 11. Moonvy 月维
  {
    id: 'moonvy-tools',
    name: 'Moonvy 月维',
    description: '在线管理并交付你的设计资源的平台',
    url: 'https://moonvy.com/?homepage=one',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/04/23f21-moonvy.com.png',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'online'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 12. Figma
  {
    id: 'figma-tools',
    name: 'Figma',
    description: '在一个平台上设计、原型制作和收集反馈，全球领先的协作式设计工具',
    url: 'https://www.figma.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.figma.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'video', 'ui'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 13. Marvel App
  {
    id: 'marvelapp-tools',
    name: 'Marvel App',
    description: '简单的设计、原型和协作工具，让创意团队更高效地合作',
    url: 'https://marvelapp.com/',
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPg0KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9InJnYigxODMsMjI5LDEzNykiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48L3JlY3Q+DQogICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPSJyZ2IoMjI5LDIwMCwxMTQpIiBjeD0iMzMiIGN5PSIxNi41IiByPSI2MCIgIG9wYWNpdHk9Ii40Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8Y2lyY2xlIGZpbGw9InJnYigxMTQsMjI5LDE0MykiIGN4PSIxMCIgY3k9IjIwIiByPSI1MCIgIG9wYWNpdHk9Ii42Ij48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8dGV4dCB4PSI1MCIgeT0iNTAiIGZvbnQtc2l6ZT0iNTAiIHRleHQtY29weT0iZmFzdCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgdGV4dC1yaWdodHM9ImFkbWluIiBhbGlnbm1lbnQtYmFzZWxpbmU9ImNlbnRyYWwiIGZvbnQtZmFtaWx5PSInUGluZ0ZhbmcgU0MnLCdNaWNyb3NvZnQgWWFoZWknIj5NPC90ZXh0Pjwvc3ZnPg==',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'collaboration', 'mobile'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 14. InVision
  {
    id: 'invisionapp-tools',
    name: 'InVision',
    description: '强大的设计原型工具，帮助设计师快速创建交互式原型',
    url: 'https://www.invisionapp.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.invisionapp.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch', 'mobile'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 15. Adobe XD
  {
    id: 'adobe-xd-tools',
    name: 'Adobe XD',
    description: 'Adobe的用户体验设计工具，集设计、原型和体验于一体',
    url: 'http://www.adobe.com/products/xd.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.adobe.com/products/xd.html',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'photoshop', 'sketch'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 16. Sketch
  {
    id: 'sketchapp-tools',
    name: 'Sketch',
    description: '专业的数字设计工具包，专为Mac用户打造的矢量绘图应用',
    url: 'https://sketchapp.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/07/909bc-sketchapp.com.png',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'sketch'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 17. 应用图标生成器
  {
    id: 'icon-generator',
    name: '应用图标生成器',
    description: '一键生成各种平台所需的应用图标，支持iOS、Android等多种规格，自动调整尺寸和格式',
    url: 'https://uiedtool.com/tools/design/icon-generator',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiedtool.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-tools',
    tags: ['design', 'icon', 'generator', 'app', 'tool'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 常用推荐 - 协作平台 (common-recommendations-collaboration)
   * ========================================================= */
  // 1. 标记狮
  {
    id: 'marklion',
    name: '标记狮(MarkLion)',
    description: '标记狮(MarkLion) - UI设计私有云协作平台',
    url: 'https://www.marklion.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.marklion.cn',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-collaboration',
    tags: ['design', 'collaboration', 'ui', 'cloud'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  // 2. CodeFun
  {
    id: 'code',
    name: 'CodeFun',
    description: 'UI 设计稿智能生成源代码工具，使用 CodeFun，10 分钟完成 8 小时工作量。插件上传设计稿便可立即获取源代码',
    url: 'https://code.fun/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://code.fun',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-collaboration',
    tags: ['ai', 'design', 'code', 'collaboration'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. 蓝湖
  {
    id: 'lanhuapp',
    name: '蓝湖',
    description: '蓝湖是产品文档和设计图的共享平台，帮助互联网团队更好地管理文档和设计图。支持在线展示Axure，自动生成设计图标注',
    url: 'https://lanhuapp.com/?home',
    iconUrl: 'https://88sheji-1304770347.cos.ap-guangzhou.myqcloud.com/wp-content/uploads/2022/07/unnamed-file.webp',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-collaboration',
    tags: ['design', 'photoshop', 'sketch', 'collaboration', 'prototype'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 4. CoDesign
  {
    id: 'codesign',
    name: 'CoDesign',
    description: '腾讯自研的产品设计一站式协作平台，支持在线导入预览Sketch设计稿、自动生成设计标注切图，灵活调用图标库、素材库',
    url: 'https://codesign.qq.com/?utm_source=cloud&amp;utm_medium=banner',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://codesign.qq.com/?utm_source=cloud&utm_medium=banner',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-collaboration',
    tags: ['design', 'sketch', 'icon', 'collaboration', 'tencent'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 5. 像素大师
  {
    id: 'fancynode',
    name: '像素大师',
    description: 'PxCook，ColorCube与BigShear软件的开发团队，提供专业的UI设计协作工具',
    url: 'https://www.fancynode.com.cn/pxcook',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-collaboration',
    tags: ['code', 'collaboration', 'color', 'ui'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },

  /* =========================================================
   * 常用推荐 - 设计规范 (common-recommendations-guidelines)
   * ========================================================= */
  // 1. Material Design
  {
    id: 'material-design',
    name: 'Material Design',
    description: 'Google的设计语言，为移动设备、桌面设备和其他平台提供统一的视觉、动效和交互设计',
    url: 'https://material.io/design',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://material.io',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-guidelines',
    tags: ['design', 'guidelines', 'system', 'ui', 'google'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Apple Human Interface Guidelines
  {
    id: 'apple-hig',
    name: 'Apple Human Interface Guidelines',
    description: 'Apple官方设计指南，为iOS、macOS、watchOS和tvOS应用程序提供设计规范',
    url: 'https://developer.apple.com/design/human-interface-guidelines/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.apple.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-guidelines',
    tags: ['design', 'guidelines', 'apple', 'ios', 'macos'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 3. 屏幕尺寸大全
  {
    id: 'screen-sizes',
    name: '屏幕尺寸大全',
    description: '全面的屏幕尺寸参考，包含各种设备的显示尺寸、分辨率和设计规范，帮助设计师适配不同屏幕',
    url: 'https://uiedtool.com/tools/design/ui-spec',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiedtool.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-guidelines',
    tags: ['design', 'guidelines', 'screen', 'resolution', 'spec'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 4. 设计尺寸规范
  {
    id: 'design-spec',
    name: '设计尺寸规范',
    description: '专业的UI设计尺寸参考工具，提供各种平台和设备的标准设计规范，确保设计作品的一致性和专业性',
    url: 'https://uiedtool.com/tools/design/spec',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiedtool.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-guidelines',
    tags: ['design', 'guidelines', 'dimensions', 'measurement', 'standard'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 5. 移动端UI设计规范
  {
    id: 'mobile-ui-spec',
    name: '移动端UI设计规范',
    description: '针对移动应用设计的专业规范指南，涵盖布局、组件、交互方式等各方面的最佳实践和标准',
    url: 'https://uiedtool.com/tools/mobile-ui-spec',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uiedtool.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-guidelines',
    tags: ['mobile', 'ui', 'design', 'guidelines', 'standard'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 6. Fluent Design
  {
    id: 'fluent-design',
    name: 'Microsoft Fluent Design',
    description: '微软的设计系统，为各种设备和平台上的应用程序提供设计指南',
    url: 'https://www.microsoft.com/design/fluent/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.microsoft.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-guidelines',
    tags: ['design', 'guidelines', 'microsoft', 'windows', 'system'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 7. Ant Design
  {
    id: 'ant-design',
    name: 'Ant Design',
    description: '阿里巴巴开源的企业级UI设计语言和React组件库',
    url: 'https://ant.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ant.design',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-guidelines',
    tags: ['design', 'guidelines', 'components', 'react', 'alibaba'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 8. Carbon Design System
  {
    id: 'carbon-design',
    name: 'Carbon Design System',
    description: 'IBM的开源设计系统，为产品和数字体验提供指导',
    url: 'https://www.carbondesignsystem.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.carbondesignsystem.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-guidelines',
    tags: ['design', 'guidelines', 'ibm', 'system', 'components'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  /* =========================================================
   * 常用推荐 - 竞品分析 (common-recommendations-competitor)
   * ========================================================= */
  // 1. UX Sync
  {
    id: 'uxsync-competitor',
    name: 'UX Sync',
    description: '汽车智能竞品收集平台，专注于汽车智能系统的UI/UX设计参考',
    url: 'https://uxsync.com/index.html/#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uxsync.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['design', 'automotive', 'competitive', 'analysis', 'ui'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. Mobbin
  {
    id: 'mobbin-competitor',
    name: 'Mobbin',
    description: '移动应用UI/UX设计参考库，可用于竞品分析和研究',
    url: 'https://mobbin.com/browse/ios/apps',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mobbin.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['design', 'mobile', 'competitive', 'analysis', 'ui'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. SimilarWeb
  {
    id: 'similarweb',
    name: 'SimilarWeb',
    description: '提供网站流量和移动应用分析的工具，帮助进行数据驱动的竞品分析',
    url: 'https://www.similarweb.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.similarweb.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['analytics', 'competitive', 'research', 'traffic', 'data'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 4. App Annie
  {
    id: 'appannie',
    name: 'App Annie',
    description: '移动应用市场数据和分析平台，提供应用排名、评价和下载量等竞品数据',
    url: 'https://www.appannie.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.appannie.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['mobile', 'analytics', 'competitive', 'research', 'app'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 5. Crayon
  {
    id: 'crayon',
    name: 'Crayon',
    description: '竞品情报平台，跟踪竞争对手的网站变化、营销活动和设计更新',
    url: 'https://www.crayon.co/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.crayon.co',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['competitive', 'intelligence', 'marketing', 'tracking', 'analysis'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  // 6. 字母点评
  {
    id: 'zimudianping-competitor',
    name: '字母点评',
    description: '企业数字化产品点评平台，提供专业、客观的企业软件使用评价与推荐',
    url: 'https://www.zimudianping.com/#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.zimudianping.com/#/',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['software', 'review', 'enterprise', 'analysis', 'digital'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 7. 36氪企服点评
  {
    id: '36dianping-competitor',
    name: '36氪企服点评',
    description: '36氪媒体集团旗下的企业级软件和服务选品平台，收录近万款产品，提供真实用户评价和客观产品评分',
    url: 'https://www.36dianping.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.36dianping.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['software', 'review', 'enterprise', 'service', 'analysis'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 8. AI工具推荐
  {
    id: '199it-competitor',
    name: '互联网数据资讯网',
    description: '专注于AI工具评测与推荐的平台，帮助企业和个人选择适合的AI解决方案',
    url: 'http://www.199it.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.199it.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['ai', 'template', 'tools', 'analysis', 'review'],
    isHot: true,
    isFeatured: false,
    rating: 4.6
  },
  // 9. 阿里研究院
  {
    id: 'aliresearch-competitor',
    name: '阿里研究院',
    description: '阿里巴巴集团的专业研究机构，提供行业洞察和竞争分析报告',
    url: 'http://www.aliresearch.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.aliresearch.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['research', 'industry', 'analysis', 'report', 'alibaba'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 10. SaaS软件
  {
    id: 'saasruanjian-competitor',
    name: 'SaaS软件',
    description: '中国领先的企业级SaaS软件选型平台，收录4千款产品、5万条真实用户评价，帮助企业找到合适靠谱的SaaS产品',
    url: 'https://www.saasruanjian.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.saasruanjian.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['saas', 'software', 'review', 'enterprise', 'comparison'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 11. 艾瑞报告
  {
    id: 'report-iresearch-competitor',
    name: '艾瑞报告',
    description: '专业研报平台，收录最新、最全行业报告，免费阅读各类行业分析报告、公司研究报告、券商研报等',
    url: 'https://report.iresearch.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://report.iresearch.cn',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['research', 'data', 'internet', 'analysis', 'report'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 12. 钛学术文献服务平台
  {
    id: 'doc-paperpass-competitor',
    name: '钛学术文献服务平台',
    description: '拥有1.5亿可下载的论文文献资源，涵盖学术期刊论文、会议论文、专利文献等，可用于学术研究和竞品分析',
    url: 'https://doc.paperpass.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://doc.paperpass.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['academic', 'research', 'paper', 'patent', 'literature'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 13. 发现报告
  {
    id: 'fxbaogao-competitor',
    name: '发现报告',
    description: '专业研报平台，收录最新、最全行业报告和券商研报，免费阅读下载市场分析报告、公司研究报告、竞对分析，支持全文关键词高级检索',
    url: 'https://www.fxbaogao.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.fxbaogao.com',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['report', 'industry', 'analysis', 'research', 'free'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 14. 洞见研报
  {
    id: 'djyanbao-competitor',
    name: '洞见研报',
    description: '收录最新、最全行业研究报告，免费阅读下载市场分析报告、公司研究报告、竞对分析，支持全文关键词高级检索',
    url: 'https://www.djyanbao.com/index',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.djyanbao.com/index',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['report', 'industry', 'analysis', 'market', 'competitor'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 15. 报告查一查
  {
    id: 'report-seedsufe-competitor',
    name: '报告查一查',
    description: '专业研报平台，收录海量行业报告和券商研报，免费分享行业研报，为企业竞品分析提供数据支持',
    url: 'https://report.seedsufe.com/index',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://report.seedsufe.com/index',
    category: 'common-recommendations',
    subCategory: 'common-recommendations-competitor',
    tags: ['report', 'industry', 'analysis', 'free', 'research'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 设计系统 - PC端 (design-system-pc)
   * ========================================================= */
  // 1. Ant Design
  {
    id: 'ant-design-pc',
    name: 'Ant Design',
    description: '企业级产品设计体系，创造高效愉悦的工作体验，由蚂蚁金服体验技术部打造',
    url: 'https://ant.design/index-cn',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'system', 'react', 'alibaba', 'enterprise'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Alibaba Fusion Design
  {
    id: 'fusion-design-pc',
    name: 'Alibaba Fusion Design',
    description: '阿里巴巴企业级中后台设计系统解决方案，试图创造一种全新的设计开发工作模式',
    url: 'https://fusion.design/pc/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fusion.design/pc',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'system', 'alibaba', 'enterprise', 'backend'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. TDesign
  {
    id: 'tdesign-pc',
    name: 'TDesign',
    description: 'TDesign 是腾讯开源的企业级设计体系，提供统一设计价值观、一致的设计语言和视觉风格',
    url: 'https://tdesign.tencent.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tdesign.tencent.com',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'system', 'tencent', 'free', 'enterprise'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 4. Arco Design
  {
    id: 'arco-design-pc',
    name: 'Arco Design',
    description: '字节跳动出品的企业级设计系统，提供了丰富的原子组件，同时支持React、Vue和Angular框架',
    url: 'https://arco.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://arco.design',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['ai', 'design', 'code', 'system', 'bytedance'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. Semi Design
  {
    id: 'semi-design-pc',
    name: 'Semi Design',
    description: '全面、易用、优质的企业级产品设计系统。由字节跳动抖音前端与UED团队设计、开发并维护',
    url: 'https://semi.design/zh-CN/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://semi.design/zh-CN',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'code', 'frontend', 'collaboration', 'system', 'bytedance'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 6. Element
  {
    id: 'element-pc',
    name: 'Element',
    description: '饿了么前端团队推出的一套为开发者、设计师和产品经理准备的基于Vue的桌面端组件库',
    url: 'https://element.eleme.cn/#/zh-CN',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://element.eleme.cn/#/zh-CN',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'code', 'vue', 'system', 'component'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 7. DevUI
  {
    id: 'devui-pc',
    name: 'DevUI',
    description: '华为开源的企业中后台产品前端通用解决方案，设计价值观基于"致简"、"沉浸"、"灵活"三种理念',
    url: 'https://devui.design/design-cn/start#purpose',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://devui.design/design-cn/start#purpose',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'code', 'frontend', 'free', 'angular', 'huawei'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 8. HiUI Design
  {
    id: 'hiui-pc',
    name: 'HiUI Design',
    description: 'HiUI是小米集团信息技术部推出的企业级设计系统，聚焦企业级中后台研发场景',
    url: 'https://xiaomi.github.io/hiui/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://xiaomi.github.io/hiui',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'template', 'productivity', 'system', 'xiaomi'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 9. LEGAO Design
  {
    id: 'legao-pc',
    name: 'LEGAO Design',
    description: '京东金融设计中心打造的PC端React组件库，提供更高效、更简单的设计解决方案',
    url: 'https://legao.jd.com/design',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://legao.jd.com/design',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'system', 'react', 'jd'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 10. UDCDesign
  {
    id: 'findesign-pc',
    name: 'UDCDesign 2.0',
    description: '京东金融设计中心打造的设计系统，提供完整的前中台设计效率解决方案',
    url: 'https://findesign.jd.com/#/home',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'frontend', 'productivity', 'system', 'jd'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 11. 轻量级模块化前端UI组件库
  {
    id: 'at-ui-pc',
    name: '轻量级模块化前端UI组件库',
    description: '一款轻量级、模块化的前端UI组件库，基于Vue.js构建，适用于快速构建PC网站',
    url: 'https://at-ui.github.io/at-ui/#/zh',
    iconUrl: 'https://88sheji-1304770347.cos.ap-guangzhou.myqcloud.com/wp-content/uploads/2022/05/1656382012-at.png',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'frontend', 'vue', 'lightweight'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 12. Zan Design System
  {
    id: 'zandesign-pc',
    name: 'Zan Design System',
    description: '有赞设计语言系统，服务于SaaS产品的设计体系，提高产品设计和研发效率',
    url: 'https://design.youzan.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.youzan.com',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'productivity', 'system', 'saas', 'youzan'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 13. King Design
  {
    id: 'kingdesign-pc',
    name: 'King Design',
    description: '金山云设计团队推出的设计解决方案，支持多框架的前端高质量组件库',
    url: 'https://design.ksyun.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.ksyun.com',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'frontend', 'system', 'kingsoft'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 14. Clarity Design
  {
    id: 'clarity-pc',
    name: 'Clarity Design',
    description: '协作产品UI设计语言，基于Teambition设计体系的React UI组件库，主要用于研发企业级中前台产品',
    url: 'https://design.teambition.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.teambition.com',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'collaboration', 'system', 'alibaba'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 16. Fluent 2
  {
    id: 'fluent2-pc',
    name: 'Fluent 2',
    description: '微软下一代Fluent Design设计风格，跨平台设计语言，支持Web、Windows、iOS、MacOS、Android平台',
    url: 'https://fluent2.microsoft.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fluent2.microsoft.design',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'frontend', 'online', 'mobile', 'microsoft'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 17. Microsoft Fluent UI
  {
    id: 'microsoft-fluent-pc',
    name: 'Microsoft Fluent UI',
    description: '微软官方的Fluent设计系统实现，提供Web控件和组件库',
    url: 'https://developer.microsoft.com/en-us/fluentui#/controls/web',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.microsoft.com/en-us/fluentui#/controls/web',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['video', 'microsoft', 'system', 'react'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 18. ChatUI
  {
    id: 'chatui-pc',
    name: 'ChatUI',
    description: '服务于智能对话领域的设计和开发体系，助力智能对话机器人的构建',
    url: 'https://chatui.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://chatui.io',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['ai', 'design', 'code', 'chat', 'conversational'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 19. Klein Design
  {
    id: 'klein-pc',
    name: 'Klein Design',
    description: '微盟集团推出的设计系统，提供统一的设计语言和组件库',
    url: 'https://klein.design.weimob.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://klein.design.weimob.com',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'system', 'weimob'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 20. Xconsole
  {
    id: 'xconsole-pc',
    name: 'Xconsole',
    description: '阿里云一站式设计与研发解决方案，为云产品提供统一的设计语言和组件',
    url: 'http://xconsole.cloud/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://xconsole.cloud',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'system', 'aliyun', 'cloud'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 21. Alibaba Cloud Design
  {
    id: 'aliyun-design-pc',
    name: 'Alibaba Cloud Design',
    description: '阿里云设计中心的设计理念与技术领先的完美结合，首次提出"计算设计"的概念',
    url: 'https://design.aliyun.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.aliyun.com',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['ai', 'design', 'collaboration', 'system', 'aliyun'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 22. Cloudscape Design
  {
    id: 'cloudscape-pc',
    name: '亚马逊云服务设计系统',
    description: 'Cloudscape提供用户界面指南、前端组件、设计资源和开发工具，用于构建直观、吸引人和包容性的用户体验',
    url: 'https://cloudscape.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cloudscape.design',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'aws', 'system', 'cloud'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 23. Gestalt
  {
    id: 'gestalt-pc',
    name: 'Gestalt',
    description: 'Pinterest的设计系统，提供一致的用户体验和设计语言',
    url: 'https://gestalt.pinterest.systems/home',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://gestalt.pinterest.systems/home',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'system', 'pinterest'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 24. Spectrum
  {
    id: 'spectrum-pc',
    name: 'Adobe Spectrum',
    description: 'Adobe的设计系统，提供组件和工具来帮助产品团队更高效地工作，使Adobe应用程序更具凝聚力',
    url: 'https://spectrum.adobe.com/page/principles/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/05/c6e2d-spectrum.adobe.com.png',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'collaboration', 'system', 'adobe'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 25. Atlassian Design
  {
    id: 'atlassian-pc',
    name: 'Atlassian Design',
    description: 'Atlassian设计语言，提升设计效率和用户体验的企业级设计系统',
    url: 'https://atlassian.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://atlassian.design',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'productivity', 'system', 'atlassian'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 26. 钉钉设计指南
  {
    id: 'standard-dingtalk-pc',
    name: '钉钉设计指南',
    description: '统一、高效的企业级产品设计系统，提供全方位的设计规范与资源',
    url: 'https://standard.dingtalk.com/#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://standard.dingtalk.com/#',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'system', 'alibaba', 'enterprise'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 27. Horizon UI
  {
    id: 'horizon-ui-pc',
    name: 'React开源管理后台模板',
    description: 'Horizon UI是基于Chakra UI构建的流行开源管理模板，提供70多个暗/亮前端元素',
    url: 'https://horizon-ui.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://horizon-ui.com',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'template', 'frontend', 'free', 'react'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 28. Chakra UI
  {
    id: 'chakra-ui-pc',
    name: 'Chakra UI',
    description: '简单、模块化且可访问的UI组件库，用于构建React应用程序',
    url: 'https://chakra-ui.com/',
    iconUrl: 'https://chakra-ui.com/favicon.png',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'react', 'accessibility', 'component', 'system'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 29. Tailwind UI
  {
    id: 'tailwind-ui-pc',
    name: 'Tailwind UI',
    description: '基于Tailwind CSS的高质量UI组件和模板库',
    url: 'https://tailwindui.com/',
    iconUrl: 'https://tailwindui.com/favicon-32x32.png',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'css', 'tailwind', 'component', 'template'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 30. Vuetify
  {
    id: 'vuetify-pc',
    name: 'Vuetify',
    description: '基于Vue.js的Material Design组件框架',
    url: 'https://vuetifyjs.com/',
    iconUrl: 'https://cdn.vuetifyjs.com/images/logos/favicon-32x32.png',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'vue', 'material', 'component', 'framework'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 31. PrimeVue
  {
    id: 'primevue-pc',
    name: 'PrimeVue',
    description: 'Vue的综合UI组件库，拥有80多个组件、不同主题、设计模板等',
    url: 'https://primevue.org/',
    iconUrl: 'https://primevue.org/favicon.ico',
    category: 'design-system',
    subCategory: 'design-system-pc',
    tags: ['design', 'vue', 'component', 'template', 'theme'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  /* =========================================================
   * 设计系统 - 移动端 (design-system-mobile)
   * ========================================================= */
  // 1. Ant Design Mobile
  {
    id: 'mobile-antd',
    name: 'Ant Design Mobile',
    description: '蚂蚁设计移动端组件库，构建移动 Web 应用程序的基本UI组件',
    url: 'https://mobile.ant.design/',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'photoshop', 'frontend', 'online', 'mobile', 'antd'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Arco Design Mobile
  {
    id: 'arco-mobile',
    name: 'Arco Design Mobile',
    description: '字节跳动移动端设计系统，让移动应用获得开箱即用的设计解决方案',
    url: 'https://arco.design/mobile/react',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://arco.design/mobile/react',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'mobile', 'bytedance', 'system'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. Apple Human Interface Guidelines
  {
    id: 'apple-hig-mobile',
    name: '苹果官方设计规范',
    description: '苹果设计资源，提供官方的iOS界面设计指南和组件库',
    url: 'https://developer.apple.com/design/resources/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.apple.com/design/resources',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'mobile', 'apple', 'ios', 'guidelines'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 4. Material Design
  {
    id: 'material-design-mobile',
    name: 'Material Design',
    description: 'Google官方设计语言，为移动设备、桌面设备和其他平台提供统一的设计系统',
    url: 'https://material.io/design',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://material.io',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'guidelines', 'system', 'google', 'android'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 5. Android 官方设计指南
  {
    id: 'android-design-mobile',
    name: '安卓官方设计指南',
    description: 'Google官方安卓设计指南，提供安卓应用界面设计规范和最佳实践',
    url: 'https://developer.android.com/design',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.android.com/design',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'android', 'google', 'guidelines'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 6. NutUI
  {
    id: 'nutui-mobile',
    name: 'NutUI',
    description: '京东风格的轻量级移动端Vue、React组件库，提供丰富的基础组件和业务组件',
    url: 'https://nutui.jd.com/3x/#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://nutui.jd.com/3x/#',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'mobile', 'jd', 'vue', 'react'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 7. 京东科技移动端组件库
  {
    id: 'jdt-mobile',
    name: '京东科技移动端组件库',
    description: '京东科技移动端组件库，一处代码多端运行，支持小程序、H5等多端应用',
    url: 'https://nutui.jd.com/jdt/?theme=jdt#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://nutui.jd.com/jdt/?theme=jdt#',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['code', 'mobile', 'jd', 'multi-platform'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 8. Titian
  {
    id: 'titian-mobile',
    name: 'Titian',
    description: 'Titian Mobile源自微盟移动端核心业务，支持业界主流的MiniProgram、React、Vue 3开发技术栈',
    url: 'https://titian.design.weimob.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://titian.design.weimob.com',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['code', 'video', 'mobile', 'weimob'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 9. Samsung Developers
  {
    id: 'samsung-mobile',
    name: 'Samsung Developers',
    description: '三星设计系统在整个用户体验中提供了一致性和清晰度，用户可以跨设备和服务获得一致的体验',
    url: 'https://developer.samsung.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.samsung.com',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'mobile', 'samsung', 'android'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 10. OPPO 开放平台
  {
    id: 'oppo-mobile',
    name: 'OPPO 开放平台Gabor2.5 设计规范',
    description: 'OPPO官方设计规范，为开发者提供标准UI设计语言和组件',
    url: 'https://open.oppomobile.com/ar/uikit/kit.html#_Toc23614',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://open.oppomobile.com/ar/uikit/kit.html#_Toc23614',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'code', 'mobile', 'oppo'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 11. HarmonyOS
  {
    id: 'harmonyos-mobile',
    name: 'HarmonyOS应用开发官网',
    description: '华为鸿蒙HarmonyOS面向多智能终端、全场景的分布式操作系统设计规范',
    url: 'https://developer.huawei.com/consumer/cn/design/?catalogVersion=V1',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.huawei.com/consumer/cn/design/?catalogVersion=V1',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['ai', 'code', 'mobile', 'huawei', 'harmonyos'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 12. 滴滴开源平台的 Mand Mobile
  {
    id: 'didi-mobile',
    name: '滴滴 Mand Mobile',
    description: '滴滴开源的移动端UI组件库，为金融场景而生',
    url: 'https://didi.github.io/mand-mobile/#/zh-CN/docs/introduce',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://didi.github.io/mand-mobile/#/zh-CN/docs/introduce',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['free', 'mobile', 'didi', 'finance'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 13. Xiaomi HyperOS
  {
    id: 'hyperos-mobile',
    name: '小米澎湃OS',
    description: '小米澎湃OS(HyperOS)设计系统，以人为中心，打造「人车家全生态」操作系统',
    url: 'https://hyperos.mi.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://hyperos.mi.com',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['ai', 'mobile', 'xiaomi', 'system'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 14. Fluent 2 Mobile
  {
    id: 'fluent2-mobile',
    name: 'Fluent 2 移动版',
    description: '微软跨平台设计语言，为移动设备提供一致的设计体验',
    url: 'https://fluent2.microsoft.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fluent2.microsoft.design',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'frontend', 'online', 'mobile', 'microsoft'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 15. Ionic Framework
  {
    id: 'ionic-mobile',
    name: 'Ionic Framework',
    description: '开源UI工具包，用于构建高性能、高质量的移动和桌面应用',
    url: 'https://ionicframework.com/',
    iconUrl: 'https://ionicframework.com/favicon.ico',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['design', 'mobile', 'framework', 'hybrid', 'cross-platform'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 16. Framework7
  {
    id: 'framework7-mobile',
    name: 'Framework7',
    description: '构建iOS和Android应用的全功能HTML框架',
    url: 'https://framework7.io/',
    iconUrl: 'https://framework7.io/favicon.png',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['mobile', 'framework', 'ios', 'android', 'pwa'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 17. Vant
  {
    id: 'vant-mobile',
    name: 'Vant',
    description: '有赞前端团队开源的移动端组件库，支持Vue 2和Vue 3',
    url: 'https://vant-ui.github.io/vant/',
    iconUrl: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['mobile', 'vue', 'component', 'youzan'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 18. Onsen UI
  {
    id: 'onsen-mobile',
    name: 'Onsen UI',
    description: '使用HTML/CSS/JavaScript的混合移动应用UI框架',
    url: 'https://onsen.io/',
    iconUrl: 'https://onsen.io/icons/favicon-96x96.png',
    category: 'design-system',
    subCategory: 'design-system-mobile',
    tags: ['mobile', 'hybrid', 'component', 'framework'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 设计系统 - 小程序 (design-system-miniapp)
   * ========================================================= */
  // 1. 微信小程序设计指南
  {
    id: 'wechat-miniapp',
    name: '微信小程序设计指南',
    description: '微信官方小程序设计指南，提供完整的设计规范、组件和最佳实践',
    url: 'https://developers.weixin.qq.com/miniprogram/design/#%E5%9B%BE%E6%A0%87',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developers.weixin.qq.com/miniprogram/design/#%E5%9B%BE%E6%A0%87',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['design', 'community', 'miniapp', 'wechat'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. 支付宝小程序设计规范
  {
    id: 'alipay-miniapp',
    name: '支付宝小程序设计规范',
    description: '支付宝官方小程序设计指南，提供小程序设计的标准和规范',
    url: 'https://opendocs.alipay.com/mini/design',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://opendocs.alipay.com/mini/design',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['learning', 'miniapp', 'alipay', 'design'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. 字节小程序开发者平台
  {
    id: 'byte-miniapp',
    name: '字节小程序开发者平台',
    description: '字节跳动小程序设计指南，为抖音、今日头条等平台的小程序提供标准化设计规范',
    url: 'https://microapp.bytedance.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://microapp.bytedance.com',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['code', 'miniapp', 'bytedance', 'design'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 4. 百度智能小程序
  {
    id: 'baidu-miniapp',
    name: '智能小程序平台',
    description: '百度智能小程序设计规范，通过百度AI开放式赋能，为小程序提供设计指南',
    url: 'https://smartprogram.baidu.com/docs/design/overview/introduction/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://smartprogram.baidu.com/docs/design/overview/introduction',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['ai', 'template', 'mobile', 'miniapp', 'baidu'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 5. 支付宝设计基础规范
  {
    id: 'alipay-design',
    name: '支付宝基础设计规范',
    description: 'Alipay Design秉承"设计，为每个人"的理念，为全球用户带来更真实自然的体验',
    url: 'https://design.alipay.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.alipay.com',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['design', 'alipay', 'miniapp'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 6. 飞书开放平台
  {
    id: 'feishu-miniapp',
    name: '飞书开放平台',
    description: '飞书小程序设计规范，帮助开发者创建符合飞书设计标准的小程序',
    url: 'https://open.feishu.cn/document/uYjL24iN/ukjNzUjL5YzM14SO2MTN',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://open.feishu.cn/document/uYjL24iN/ukjNzUjL5YzM14SO2MTN',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['code', 'productivity', 'miniapp', 'feishu'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 7. Ant Design Mini
  {
    id: 'mini-antd',
    name: 'Ant Design Mini',
    description: '蚂蚁小程序组件库，探索移动端小程序的体验极限',
    url: 'https://mini.ant.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mini.ant.design',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['design', 'mobile', 'miniapp', 'antd'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 8. Titian小程序
  {
    id: 'titian-miniapp',
    name: 'Titian小程序',
    description: '微盟小程序设计系统，支持业界主流的MiniProgram技术栈',
    url: 'https://titian.design.weimob.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://titian.design.weimob.com',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['code', 'video', 'mobile', 'miniapp', 'weimob'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 9. 京东小程序
  {
    id: 'jd-miniapp',
    name: '京东小程序',
    description: '京东小程序设计规范，提供完整的设计组件和标准',
    url: 'https://nutui.jd.com/jdt/?theme=jdt#/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://nutui.jd.com/jdt/?theme=jdt#',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['code', 'mobile', 'miniapp', 'jd'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 10. 小程序自研学习路径
  {
    id: 'alipay-miniapp-learn',
    name: '自研小程序学习路径',
    description: '支付宝小程序设计与开发的学习资源，帮助开发者掌握小程序设计技能',
    url: 'https://opendocs.alipay.com/mini/design',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://opendocs.alipay.com/mini/design',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['learning', 'miniapp', 'alipay', 'tutorial'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 11. WeUI
  {
    id: 'weui-miniapp',
    name: 'WeUI',
    description: '微信官方设计团队为微信Web和小程序开发的基础样式库',
    url: 'https://github.com/Tencent/weui',
    iconUrl: 'https://github.githubassets.com/favicons/favicon.png',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['design', 'wechat', 'miniapp', 'ui', 'tencent'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 12. Lin UI
  {
    id: 'lin-ui-miniapp',
    name: 'Lin UI',
    description: '基于微信小程序原生语法的UI组件库，提供丰富的组件和优质的交互体验',
    url: 'https://doc.mini.talelin.com/',
    iconUrl: 'https://doc.mini.talelin.com/favicon.ico',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['design', 'wechat', 'miniapp', 'ui', 'component'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 13. ColorUI
  {
    id: 'color-ui-miniapp',
    name: 'ColorUI',
    description: '一个高颜值的小程序UI组件库，为原生小程序提供丰富、易用的组件',
    url: 'https://github.com/weilanwl/ColorUI',
    iconUrl: 'https://github.githubassets.com/favicons/favicon.png',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['design', 'color', 'miniapp', 'ui', 'component'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 14. Vant Weapp
  {
    id: 'vant-weapp-miniapp',
    name: 'Vant Weapp',
    description: '有赞轻量、可靠的微信小程序UI组件库',
    url: 'https://vant-contrib.gitee.io/vant-weapp/',
    iconUrl: 'https://img01.yzcdn.cn/vant/logo.png',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['design', 'wechat', 'miniapp', 'ui', 'youzan'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 15. TaroUI
  {
    id: 'taro-ui-miniapp',
    name: 'Taro UI',
    description: '基于Taro的多端UI组件库，支持微信、百度、支付宝等多个小程序平台',
    url: 'https://taro-ui.jd.com/',
    iconUrl: 'https://taro-ui.jd.com/favicon.ico',
    category: 'design-system',
    subCategory: 'design-system-miniapp',
    tags: ['design', 'taro', 'miniapp', 'ui', 'multi-platform'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },

  /* =========================================================
   * 设计系统 - 人工智能 (design-system-ai)
   * ========================================================= */
  // 1. Ant Design X
  {
    id: 'ant-design-x',
    name: 'Ant Design X',
    description: '蚂蚁集团推出的AI设计系统，为AI产品提供标准化的设计语言和组件',
    url: 'https://x.ant.design/index-cn',
    category: 'design-system',
    subCategory: 'design-system-ai',
    tags: ['ai', 'design', 'system', 'antd', 'chatbot'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. ChatUI 3.0
  {
    id: 'chatui-ai',
    name: 'ChatUI 3.0',
    description: '服务于智能对话领域的设计和开发体系，助力AI对话机器人的构建',
    url: 'https://chatui.io/',
    category: 'design-system',
    subCategory: 'design-system-ai',
    tags: ['ai', 'design', 'code', 'chat', 'conversational'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. TDesign AI Chat
  {
    id: 'tdesign-ai-chat',
    name: 'TDesign AI Chat',
    description: '腾讯推出的AI聊天设计系统，提供标准化的AI对话界面组件和设计规范',
    url: 'https://tdesign.tencent.com/chat/getting-started',
    iconUrl: 'https://tdesign.tencent.com/favicon.ico',
    category: 'design-system',
    subCategory: 'design-system-ai',
    tags: ['ai', 'design', 'chat', 'tencent', 'llm'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 4. Element Plus X
  {
    id: 'element-plus-x',
    name: 'Element Plus X',
    description: '基于Element Plus的AI组件库，为AI应用提供优雅、易用的设计组件',
    url: 'https://element-plus-x.com/',
    iconUrl: 'https://element-plus-x.com/favicon.ico',
    category: 'design-system',
    subCategory: 'design-system-ai',
    tags: ['ai', 'design', 'vue', 'element', 'component'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 5. MateChat
  {
    id: 'matechat',
    name: 'MateChat',
    description: '专注于构建AI聊天应用的开源设计系统，提供丰富的对话界面组件',
    url: 'https://matechat.gitcode.com/',
    category: 'design-system',
    subCategory: 'design-system-ai',
    tags: ['ai', 'chat', 'design', 'open-source', 'component'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 6. Microsoft AI Design
  {
    id: 'microsoft-ai-design',
    name: 'Microsoft AI Design',
    description: '微软AI设计指南，提供AI产品设计的原则和最佳实践',
    url: 'https://microsoft.github.io/responsible-ai-toolbox/',
    iconUrl: 'https://microsoft.github.io/responsible-ai-toolbox/favicon.ico',
    category: 'design-system',
    subCategory: 'design-system-ai',
    tags: ['ai', 'design', 'microsoft', 'ethics', 'guidelines'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 7. Google AI Design
  {
    id: 'google-ai-design',
    name: 'Google AI Design',
    description: 'Google的AI设计原则和指南，为构建以人为本的AI系统提供方向',
    url: 'https://design.google/ai',
    category: 'design-system',
    subCategory: 'design-system-ai',
    tags: ['ai', 'design', 'google', 'principles', 'ux'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 10. IBM AI Design
  {
    id: 'ibm-ai-design',
    name: 'IBM AI Design',
    description: 'IBM的AI设计理念和资源，强调负责任的AI设计原则',
    url: 'https://www.ibm.com/design/ai/',
    iconUrl: 'https://www.ibm.com/favicon.ico',
    category: 'design-system',
    subCategory: 'design-system-ai',
    tags: ['ai', 'ibm', 'design', 'ethics', 'enterprise'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  /* =========================================================
   * 设计插件 - Figma插件 (design-plugins-figma)
   * ========================================================= */
  // 1. Figma中文社区插件
  {
    id: 'figma-chinese-plugin',
    name: 'Figma中文社区插件',
    description: '中国设计师开发的Figma插件集合，提供各种实用功能和工具',
    url: 'https://www.figma.cool/plugin',
    iconUrl: 'https://www.figma.cool/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'chinese', 'design', 'tool'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Figma官方插件商店
  {
    id: 'figma-community-plugins',
    name: 'Figma官方插件商店',
    description: 'Figma官方社区插件库，提供上千种功能强大的设计插件',
    url: 'https://www.figma.com/community/plugins',
    iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'design', 'community', 'tools'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 3. Autoflow
  {
    id: 'autoflow-figma',
    name: 'Autoflow',
    description: '自动创建流程图和连接线，轻松构建用户流程和页面流',
    url: 'https://www.figma.com/community/plugin/733902567457592893/autoflow',
    iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'flow', 'userflow', 'wireframe'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 4. Figma 
  {
    id: 'Vector to 3D',
    name: 'Vector to 3D',
    description: '插件平面转3D',
    url: 'http://app.niucodata.com/mianbaoduo/recommend.php?id=54863',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/EOd6Qv-20250608.jpg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'ai', 'chatgpt', 'content'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. UI Faces
  {
    id: 'uifaces-figma',
    name: 'UI Faces',
    description: '在Figma中快速插入头像占位图，支持性别、年龄等筛选',
    url: 'https://www.figma.com/community/plugin/769684692028822231/ui-faces',
    iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'avatar', 'placeholder', 'design'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 6. Unsplash
  {
    id: 'unsplash-figma',
    name: 'Unsplash',
    description: '在Figma中直接插入高质量免费图片，提升设计效率',
    url: 'https://www.figma.com/community/plugin/738454987945972471/unsplash',
    iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'image', 'photo', 'resource'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 7. Content Reel
  {
    id: 'contentreel-figma',
    name: 'Content Reel',
    description: '管理和插入常用设计内容，如姓名、地址、图片等，提高原型设计效率',
    url: 'https://www.figma.com/community/plugin/731627216655469013/content-reel',
    iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'content', 'data', 'prototype'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },
  // 8. Figma to Code
  {
    id: 'Html to design',
    name: 'Html to design',
    description: '将Figma设计转换为HTML、Tailwind、CSS或React代码',
    url: 'https://www.uied.cn/91930.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/Q3NFpr-20250608.jpg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'code', 'html'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 9. Iconify
  {
    id: 'iconify-figma',
    name: 'Iconify',
    description: '提供超过100个图标集合，超过10万个开源图标可用于Figma设计',
    url: 'https://www.figma.com/community/plugin/735098390272716381/iconify',
    iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'icon', 'library', 'resource'],
    isHot: false,
    isFeatured: true,
    rating: 4.8
  },
  // 10. Pitchdeck
  {
    id: 'pitchdeck-figma',
    name: 'Pitchdeck 演示模板',
    description: '创建专业演示文稿的模板和组件库，适用于商业路演',
    url: 'https://www.figma.com/community/plugin/826465205619298736/pitchdeck-presentation-builder',
    iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'presentation', 'template', 'business'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 11. Figma汉化插件
  {
    id: 'figma-chinese',
    name: 'Figma汉化插件',
    description: '一键将Figma界面翻译成中文，适合国内设计师使用的本地化工具',
    url: 'https://www.uied.cn/circle/41716.html',
    iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'chinese', 'localization', 'translation'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 12. Figma数据图表插件
  {
    id: 'figma-charts',
    name: 'Figma数据图表插件',
    description: '在Figma中快速创建专业数据图表，支持多种图表类型和数据可视化',
    url: 'https://www.uied.cn/81966.html',
    iconUrl: 'https://static.figma.com/app/icon/1/favicon.svg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'chart', 'data', 'visualization'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 13. 腾讯DesignGenie
  {
    id: 'tencent-designgenie',
    name: '腾讯DesignGenie',
    description: '腾讯出品的Figma智能设计助手，提供AI辅助设计功能和优化建议',
    url: 'https://www.uied.cn/91932.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/LlVUEm-20250608.jpg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'ai', 'tencent', 'design assistant'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 14. Codia AI
  {
    id: 'codia-ai-figma',
    name: 'Codia AI',
    description: 'Figma设计利器，轻松将截图转为可编辑UI设计！',
    url: 'https://www.uied.cn/91936.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/KkJq8j-20250608.jpg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'ai', 'screenshot', 'conversion'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 15. Humation
  {
    id: 'humation-figma',
    name: 'Humation',
    description: 'Figma中免费的矢量插图神器，随时随地访问人类插图素材！',
    url: 'https://www.uied.cn/91943.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/Ai4DyU-20250608.jpg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'illustration', 'vector', 'free'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 16. Simple Noise
  {
    id: 'simple-noise-figma',
    name: 'Simple Noise',
    description: '为您的设计增添动感质感的免费Figma插件！',
    url: 'https://www.uied.cn/91946.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/vX5vXg-20250608.jpg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'texture', 'noise', 'design'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 17. 3D Vector
  {
    id: '3d-vector-figma',
    name: '3D Vector',
    description: '让您的Figma设计跃然立体的强大插件！',
    url: 'https://www.uied.cn/91949.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/ZeHLCi-20250608.jpg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', '3d', 'vector', 'design'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 18. AI Image Upscaler
  {
    id: 'ai-image-upscaler-figma',
    name: 'AI Image Upscaler',
    description: '使用AI技术提升图像分辨率的终极Figma插件！',
    url: 'https://www.uied.cn/91952.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/51g6mg-20250608.jpg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'ai', 'image', 'upscale'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 19. Material Design Icons
  {
    id: 'material-design-icons-figma',
    name: 'Material Design Icons',
    description: '丰富多样的图标库插件，提升设计效率必备！',
    url: 'https://www.uied.cn/91955.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/AvANqH-20250608.jpg',
    category: 'design-plugins',
    subCategory: 'design-plugins-figma',
    tags: ['plugin', 'figma', 'material', 'icons', 'library'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 设计插件 - Sketch插件 (design-plugins-sketch)
   * ========================================================= */
  // 1. Codesign
  {
    id: 'codesign-sketch',
    name: 'Codesign',
    description: '腾讯CoDesign设计协作平台的Sketch插件，支持设计稿上传、标注、组件库',
    url: 'https://codesign.qq.com/download?tab=sketch',
    iconUrl: 'https://codesign.qq.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-sketch',
    tags: ['plugin', 'sketch', 'collaboration', 'handoff', 'tencent'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. 蓝湖
  {
    id: 'lanhuapp-sketch',
    name: '蓝湖',
    description: '蓝湖设计协作平台Sketch插件，帮助设计师与开发无缝协作交付',
    url: 'https://lanhuapp.com/mac?formHeader',
    iconUrl: 'https://lhcdn.lanhuapp.com/web/static/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-sketch',
    tags: ['plugin', 'sketch', 'collaboration', 'handoff', 'chinese'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. Kitchen 3
  {
    id: 'kitchen3-sketch',
    name: 'Kitchen 3',
    description: '蚂蚁集团的设计工具集，提供图标库、设计稿标注、数据填充等功能',
    url: 'https://kitchen.alipay.com/',
    category: 'design-plugins',
    subCategory: 'design-plugins-sketch',
    tags: ['plugin', 'sketch', 'ant design', 'alipay', 'component'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 4. AEUX-Sketch
  {
    id: 'aeux-sketch',
    name: 'AEUX-Sketch',
    description: '由Google开发的插件，可将Sketch图层快速导入After Effects制作动效',
    url: 'https://www.uied.cn/6788.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/OeRJqt-20250608.png',
    category: 'design-plugins',
    subCategory: 'design-plugins-sketch',
    tags: ['plugin', 'sketch', 'after effects', 'animation', 'motion'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 5. Unsplash
  {
    id: 'unsplash-sketch',
    name: 'Unsplash',
    description: '将Unsplash的高质量免费图片直接导入Sketch，快速填充设计原型',
    url: 'https://www.uied.cn/8927.html',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'design-plugins',
    subCategory: 'design-plugins-sketch',
    tags: ['plugin', 'sketch', 'image', 'stock photo', 'placeholder'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 6. Kitchen Hitu
  {
    id: 'kitchen-hitu-sketch',
    name: 'Kitchen Hitu',
    description: '蚂蚁集团Kitchen系列插件，专注于插画和图表创作的Sketch工具',
    url: 'https://www.uied.cn/6771.html',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'design-plugins',
    subCategory: 'design-plugins-sketch',
    tags: ['plugin', 'sketch', 'ant design', 'illustration', 'chart'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 7. Sketch MeaXure
  {
    id: 'sketch-meaxure',
    name: 'Sketch MeaXure',
    description: 'Sketch Measure的升级版，用于设计稿标注和切图，支持最新版Sketch',
    url: 'https://www.uied.cn/6305.html',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'design-plugins',
    subCategory: 'design-plugins-sketch',
    tags: ['plugin', 'sketch', 'measure', 'handoff', 'specification'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 8. IsometryEx
  {
    id: 'isometryex-sketch',
    name: 'IsometryEx',
    description: '为您的Sketch设计增添无限创意的等轴测投影插件！',
    url: 'https://www.uied.cn/91962.html',
    iconUrl: 'https://img.uied.cn/wp-content/uploads/2025/06/g75Nys-20250608.png?imageMogr2/thumbnail/320x320',
    category: 'design-plugins',
    subCategory: 'design-plugins-sketch',
    tags: ['plugin', 'sketch', 'isometric', '3d', 'projection'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },

  /* =========================================================
   * 设计插件 - Adobe XD插件 (design-plugins-xd)
   * ========================================================= */
  // 1. Adobe XD插件市场
  {
    id: 'adobe-xd-plugins',
    name: 'Adobe XD插件市场',
    description: 'Adobe XD中国官方插件市场，提供各类扩展功能和工具',
    url: 'https://helpx.adobe.com/cn/xd/help/plugins.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-xd',
    tags: ['plugin', 'adobe xd', 'market', 'extension', 'official'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. UI Faces for XD
  {
    id: 'uifaces-xd',
    name: 'UI Faces',
    description: '在Adobe XD中插入真实的用户头像，快速创建用户界面原型',
    url: 'https://helpx.adobe.com/cn/xd/help/plugins.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-xd',
    tags: ['plugin', 'adobe xd', 'avatar', 'ui', 'prototype'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 3. Unicon
  {
    id: 'unicon-xd',
    name: 'Unicon',
    description: '在Adobe XD中访问超过300,000个图标，直接拖放到设计中',
    url: 'https://helpx.adobe.com/cn/xd/help/plugins.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-xd',
    tags: ['plugin', 'adobe xd', 'icon', 'library', 'design'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 4. Stark for XD
  {
    id: 'stark-xd',
    name: 'Stark',
    description: '在Adobe XD中检查和改进设计的可访问性，包括色彩对比度检查',
    url: 'https://helpx.adobe.com/cn/xd/tutorials.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-xd',
    tags: ['plugin', 'adobe xd', 'accessibility', 'contrast', 'inclusive'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. Google Sheets for XD
  {
    id: 'googlesheets-xd',
    name: 'Google Sheets',
    description: '连接Google表格数据，在Adobe XD设计中填充真实内容',
    url: 'https://helpx.adobe.com/cn/xd/help/plugins.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-xd',
    tags: ['plugin', 'adobe xd', 'data', 'content', 'google'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 6. Angle for XD
  {
    id: 'angle-xd',
    name: 'Angle',
    description: '将设计快速放入设备模型中，创建专业的展示效果',
    url: 'https://helpx.adobe.com/cn/xd/tutorials.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-xd',
    tags: ['plugin', 'adobe xd', 'mockup', 'device', 'presentation'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 7. Lorem Ipsum
  {
    id: 'loremipsum-xd',
    name: 'Lorem Ipsum',
    description: '在Adobe XD中快速添加各种类型的占位文本',
    url: 'https://helpx.adobe.com/cn/xd/help/plugins.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-xd',
    tags: ['plugin', 'adobe xd', 'text', 'placeholder', 'content'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 8. Adobe XD中文教程
  {
    id: 'overflow-xd',
    name: 'Adobe XD中文教程',
    description: 'Adobe XD官方中文教程，帮助设计师快速上手和使用XD软件',
    url: 'https://helpx.adobe.com/cn/xd/tutorials.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-xd',
    tags: ['plugin', 'adobe xd', 'tutorial', 'guide', 'chinese'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 10. 学习与支持
  {
    id: 'contentgenerator-xd',
    name: 'Adobe XD学习与支持',
    description: 'Adobe官方XD软件学习支持与资源中心，包含教程、帮助文档与常见问题解答',
    url: 'https://helpx.adobe.com/cn/support/xd.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-xd',
    tags: ['plugin', 'adobe xd', 'support', 'learn', 'help'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 设计插件 - Photoshop插件 (design-plugins-photoshop)
   * ========================================================= */
  // 1. Adobe Exchange for Photoshop
  {
    id: 'adobe-exchange-ps',
    name: 'Adobe Exchange for Photoshop',
    description: 'Adobe官方插件市场，提供各类Photoshop扩展和插件',
    url: 'https://exchange.adobe.com/apps/browse/cc/photoshop',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', 'adobe', 'exchange', 'extension'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Nik Collection
  {
    id: 'nik-collection-ps',
    name: 'Nik Collection by DxO',
    description: '专业级照片编辑插件套件，提供强大的滤镜和创意工具',
    url: 'https://nikcollection.dxo.com/',
    iconUrl: 'https://nikcollection.dxo.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', 'filter', 'photo', 'editing'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. Luminar Neo
  {
    id: 'luminar-ps',
    name: 'Luminar Neo',
    description: '由AI驱动的照片编辑器，可作为Photoshop插件使用',
    url: 'https://skylum.com/luminar',
    iconUrl: 'https://skylum.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', 'ai', 'photo', 'editing'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 4. ON1 Effects
  {
    id: 'on1-effects-ps',
    name: 'ON1 Effects',
    description: '提供数百种专业级照片特效、LUT、边框和纹理',
    url: 'https://www.on1.com/products/effects/',
    iconUrl: 'https://www.on1.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', 'effects', 'filters', 'photo'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 5. Topaz Labs
  {
    id: 'topaz-labs-ps',
    name: 'Topaz Labs',
    description: 'AI驱动的照片增强插件系列，包括锐化、降噪和放大工具',
    url: 'https://www.topazlabs.com/',
    iconUrl: 'https://www.topazlabs.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', 'ai', 'photo', 'enhancement'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 6. Adobe Firefly
  {
    id: 'firefly-ps',
    name: 'Adobe Firefly',
    description: 'Adobe的生成式AI创意工具，集成到Photoshop中',
    url: 'https://www.adobe.com/products/firefly.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', 'ai', 'generative', 'creative'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 7. GuideGuide
  {
    id: 'guideguide-ps',
    name: 'GuideGuide',
    description: '快速精确创建网格和参考线，提高设计效率和精度',
    url: 'https://guideguide.me/',
    iconUrl: 'https://guideguide.me/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', 'grid', 'guide', 'alignment'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 8. CSS Hat
  {
    id: 'csshat-ps',
    name: 'CSS Hat',
    description: '将Photoshop图层样式转换为CSS、LESS、SCSS等代码',
    url: 'https://csshat.com/',
    iconUrl: 'https://csshat.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', 'css', 'code', 'frontend'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 9. PixelSquid
  {
    id: 'pixelsquid-ps',
    name: 'PixelSquid',
    description: '在Photoshop中插入和旋转3D对象，无需3D建模技能',
    url: 'https://www.pixelsquid.com/',
    iconUrl: 'https://www.pixelsquid.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', '3d', 'object', 'design'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 10. Neural Filters
  {
    id: 'neural-filters-ps',
    name: 'Neural Filters',
    description: 'Photoshop内置的AI驱动智能滤镜，提供面部编辑、风格转换等功能',
    url: 'https://helpx.adobe.com/photoshop/using/neural-filters.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'design-plugins',
    subCategory: 'design-plugins-photoshop',
    tags: ['plugin', 'photoshop', 'ai', 'neural', 'filter'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 动效设计 - 交互工具 (motion-design-interaction)
   * ========================================================= */
  // 1. Principle
  {
    id: 'principle',
    name: 'Principle',
    description: '直观易用的Mac交互原型设计工具，无需编程即可创建复杂的界面交互动效',
    url: 'https://principleformac.com/',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['动画', '交互', '原型', 'Mac'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Protopie
  {
    id: 'protopie',
    name: 'ProtoPie',
    description: '强大的交互原型设计工具，无需编码即可创建复杂的互动原型，支持传感器和智能设备',
    url: 'https://www.protopie.io/',
    iconUrl: 'https://www.protopie.io/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['原型', '交互', '多平台', '传感器'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. Framer
  {
    id: 'framer',
    name: 'Framer',
    description: '强大的交互设计工具，支持代码驱动的高级自定义动画和交互效果',
    url: 'https://www.framer.com/',
    iconUrl: 'https://framerusercontent.com/images/0icKFOIiBNLU6EPGKFXQmbSsWE.png',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['交互', '原型', '网页', '代码'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 4. Figma Interactive Components
  {
    id: 'figma-interactive',
    name: 'Figma Interactive Components',
    description: 'Figma内置的交互组件功能，让设计师能够创建具有状态和交互的复杂组件',
    url: 'https://www.figma.com/community/plugin/987889103439805869/interactive-components',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['Figma', '交互', '组件', '原型'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 5. Kite Compositor
  {
    id: 'kite',
    name: 'Kite Compositor',
    description: '专为UI动画设计的Mac应用，结合了图层编辑和代码生成，帮助设计师轻松创建精美动效',
    url: 'https://kiteapp.co/',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['Mac', 'UI动画', '代码生成', '设计工具'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 6. After Effects
  {
    id: 'aftereffects',
    name: 'After Effects',
    description: 'Adobe旗下专业动画制作软件，适合复杂UI动效和高品质动画效果制作',
    url: 'https://www.adobe.com/cn/products/aftereffects.html',
    iconUrl: 'https://www.adobe.com/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['动画', '视频', '特效', 'Adobe'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 7. Origami Studio
  {
    id: 'origami',
    name: 'Origami Studio',
    description: 'Facebook开发的免费设计工具，用于创建交互式界面原型，功能强大且支持复杂交互',
    url: 'https://origami.design/',
    iconUrl: 'https://origami.design/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['Facebook', '原型', '免费', '交互'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 8. Haiku Animator
  {
    id: 'haiku',
    name: 'Haiku Animator',
    description: '设计与开发之间的桥梁，让设计师创建可用于产品的实时UI动画组件',
    url: 'https://www.haikuanimator.com/',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['UI动画', '组件', '跨平台', '代码'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  // 9. Pixso
  {
    id: 'pixso',
    name: 'Pixso',
    description: '基于云端的协作设计工具，支持动画和交互效果设计，适合团队协作',
    url: 'https://pixso.cn/designskills/5-interactive-animation-design-softwares/',
    iconUrl: 'https://pixso.cn/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['协作', '原型', '动画', '中文'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 10. Flinto
  {
    id: 'flinto',
    name: 'Flinto',
    description: 'Mac平台上的交互设计工具，专注于创建移动应用的动画和交互原型',
    url: 'https://www.flinto.com/',
    iconUrl: 'https://www.flinto.com/assets/favicon-32x32-1b771e9345901bd93950811a7a7c564abc8c6d0188115acb9e8c32f213f0b2aa.png',
    category: 'motion-design',
    subCategory: 'motion-design-interaction',
    tags: ['Mac', '移动应用', '原型', '交互'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },

  /* =========================================================
   * 动效设计 - 动效素材 (motion-design-material)
   * ========================================================= */
  // 1. LottieFiles
  {
    id: 'lottiefiles',
    name: 'LottieFiles',
    description: '全球最大的在线平台，提供世界上最小的动画格式，为设计师、开发人员提供Lottie动画工具和插件',
    url: 'https://lottiefiles.com/',
    iconUrl: 'https://lottiefiles.com/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['Lottie', '动画', '素材', '轻量级'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. CSS3动效与Canvas动画
  {
    id: 'hepengwei',
    name: 'CSS3动效与Canvas动画',
    description: '一个专注于前端视觉效果的集合应用，包含丰富的CSS3动效、Canvas动画等',
    url: 'http://hepengwei.cn',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://hepengwei.cn',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['CSS3', 'Canvas', '前端', '动画'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. SVGA礼物动画
  {
    id: 'svga',
    name: 'SVGA礼物动画',
    description: '专业直播礼物动画制作平台，提供SVGA格式礼物、语音礼物、视频礼物等动效素材',
    url: 'http://svga.vip/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://svga.vip',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['SVGA', '直播', '礼物', '动画'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 4. Lordicon动画图标库
  {
    id: 'lordicon',
    name: 'Lordicon动画图标库',
    description: '功能强大的精心制作的动画图标库，可用于数字产品、演示文稿或视频',
    url: 'https://lordicon.com/',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['图标', '动画', '图标库', 'Web'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 5. Principle动态资源库
  {
    id: 'principlerepo',
    name: 'Principle动态资源库',
    description: 'Principle动态资源库，提供可下载使用的高质量Principle动效资源',
    url: 'https://principlerepo.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://principlerepo.com',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['Principle', '资源库', '动效', '素材'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 6. Loading.io
  {
    id: 'loading',
    name: 'Loading.io',
    description: '有趣的加载页面图标、文字、背景、纹理的动效等。可根据需求调节尺寸，设计自定义图标并下载',
    url: 'https://loading.io/',
    iconUrl: 'https://loading.io/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['Loading', '图标', '动效', '自定义'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 7. SOOGIF
  {
    id: 'soogif',
    name: 'SOOGIF',
    description: '中国GIF动图搜索与编辑平台，支持视频转GIF、图片合成GIF、GIF压缩、编辑、裁剪等功能',
    url: 'https://www.soogif.com/',
    iconUrl: 'https://www.soogif.com/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['GIF', '动图', '编辑', '中文'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 8. Animated Icons 2.0
  {
    id: 'icons8',
    name: 'Animated Icons 2.0',
    description: '提供多种免费动画图标，界面简洁清晰，下载方便',
    url: 'https://icons8.com/animated-icons',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['图标', '动画', '免费', '下载'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 9. useAnimations
  {
    id: 'useanimations',
    name: 'useAnimations',
    description: '免费的动态图标资源网站，可用于应用程序及网站界面开发，包括各种动态小图标的代码',
    url: 'https://useanimations.com/',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['图标', '动画', '代码', '免费'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 10. SVGator
  {
    id: 'svgator',
    name: 'SVGator',
    description: 'SVG动画制作工具，无需编码技能即可创建令人印象深刻的SVG动画，轻松添加到网站中',
    url: 'https://www.svgator.com/',
    iconUrl: 'https://www.svgator.com/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['SVG', '动画', '在线', '免费'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 11. Shape
  {
    id: 'shape',
    name: 'Shape',
    description: '可自定义动画图标库，提供高质量的可自定义动画图标资源',
    url: 'https://shape.so/',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['图标', '动画', '自定义', '设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  // 12. Cliply
  {
    id: 'cliply',
    name: 'Cliply',
    description: '提供个人和商业免费商用的高质量动画素材库',
    url: 'https://cliply.co/clips/',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['动画', '素材', '免费', '商用'],
    isHot: true,
    isFeatured: false,
    rating: 4.6
  },
  // 13. Zdog
  {
    id: 'zdog',
    name: 'Zdog',
    description: '用于画布和SVG的圆形、扁平、设计师友好的伪3D引擎，创建独特的动画效果',
    url: 'https://zzz.dog/',
    iconUrl: 'https://zzz.dog/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-material',
    tags: ['3D', 'SVG', '动画', '引擎'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },

  /* =========================================================
   * 动效设计 - 动效参考 (motion-design-reference)
   * ========================================================= */

  {
    id: 'codemyui',
    name: 'Code my UI',
    description: '动态交互设计灵感网站，提供详细分类的丰富有趣的动效资源',
    url: 'https://codemyui.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://codemyui.com',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['交互', '代码', '灵感', 'CSS'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // LottieFiles
  {
    id: 'lottiefiles',
    name: 'LottieFiles',
    description: '提供丰富的Lottie动画资源，适用于各种应用场景的高质量、轻量级动画效果',
    url: 'https://lottiefiles.com',
    iconUrl: 'https://lottiefiles.com/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['Lottie', '矢量动画', 'JSON', '企业应用'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // CodePen
  {
    id: 'codepen',
    name: 'CodePen',
    description: '全球知名的动态特效收藏平台，提供各种强弱趋势和流行的动效示例与实时编辑功能',
    url: 'https://codepen.io',
    iconUrl: 'https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['前端', '代码', '动效', '编辑器'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // Dribbble
  {
    id: 'dribbble',
    name: 'Dribbble',
    description: '设计圈中最大的作品集展示平台之一，提供丰富的动效设计参考和灵感',
    url: 'https://www.dribbble.com',
    iconUrl: 'https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['设计', '作品集', '灵感', '动效'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // Awwwards
  {
    id: 'awwwards',
    name: 'Awwwards',
    description: '展示和评选优秀网页设计的平台，汇集全球顶尖的网页设计作品和动效灵感',
    url: 'https://www.awwwards.com',
    iconUrl: 'https://www.awwwards.com/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['网页设计', '创意', '动效', '评选'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // Codrops
  {
    id: 'codrops',
    name: 'Codrops',
    description: '专门收录优质网页设计效果、教学和灵感的平台，提供动态特效demo和最佳实践',
    url: 'https://tympanus.net/codrops/',
    iconUrl: 'https://tympanus.net/codrops/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['网页特效', '教程', '灵感', '动效'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. 网页动效案例
  {
    id: 'webs',
    name: '网页动效案例',
    description: '优质网页动效案例集合，展示各类精美网页动画和交互效果',
    url: 'https://webs.video/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://webs.video',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['网页', '动效', '案例', '前端'],
    isHot: true,
    isFeatured: true,
    rating: 4.6
  },
  // 4. 动效元素周期表
  {
    id: 'foxcodex',
    name: '动效元素周期表',
    description: '一个日本设计师用元素周期表的方式，罗列出常见的动效效果',
    url: 'http://foxcodex.html.xdomain.jp/index.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://foxcodex.html.xdomain.jp',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['动效', '元素', '参考', '分类'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  // 5. 礼物动效
  {
    id: 'gift',
    name: '礼物动效',
    description: '优质的直播礼物动效展示平台，提供各类精美礼物动画效果',
    url: 'http://gift.yuanpaikeji.com/liwu_wap/',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['礼物', '动效', '直播', '参考'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 6. 手机APP UI交互动效
  {
    id: 'app-ealing',
    name: '手机APP UI交互动效',
    description: '专注于展示优质手机APP界面的交互动效案例，为移动端设计提供灵感',
    url: 'https://app-ealing.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://app-ealing.com',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['APP', 'UI', '交互', '移动端'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 7. PhotoMosh
  {
    id: 'photomosh',
    name: 'PhotoMosh',
    description: '故障效果生成工具，简单快速地为图像和视频创建故障艺术效果',
    url: 'https://photomosh.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://photomosh.com',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['故障', '特效', '图像', '艺术'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  // 8. Loading动图
  {
    id: 'huaban-ux',
    name: '花瓣动图',
    description: '动图参考',
    url: 'https://huaban.com/boards/78111588',
    category: 'motion-design',
    subCategory: 'motion-design-reference',
    tags: ['Loading', '动图', '灵感', '中文'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 动效设计 - 落地插件 (motion-design-plugins)
   * ========================================================= */
  // 1. Lottie for Web
  {
    id: 'lottie-web',
    name: 'Lottie for Web',
    description: 'Airbnb开源的轻量级高效动画渲染库，让动画在网页上流畅运行',
    url: 'https://github.com/airbnb/lottie-web',
    iconUrl: 'https://github.githubassets.com/favicons/favicon.svg',
    category: 'motion-design',
    subCategory: 'motion-design-plugins',
    tags: ['Lottie', '开源', '前端', 'Web'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Lottie for Figma
  {
    id: 'lottie-figma',
    name: 'Lottie for Figma',
    description: 'Figma官方Lottie插件，支持在设计中预览、修改和导出Lottie动画',
    url: 'https://www.figma.com/community/plugin/809860933081065308/LottieFiles',
    category: 'motion-design',
    subCategory: 'motion-design-plugins',
    tags: ['Lottie', 'Figma', '插件', '动画'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. React Spring
  {
    id: 'react-spring',
    name: 'React Spring',
    description: '基于React的动画库，以物理弹簧模型为基础，让动画更加自然流畅',
    url: 'https://www.react-spring.dev/',
    iconUrl: 'https://www.react-spring.dev/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-plugins',
    tags: ['React', '动画', '前端', '开源'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 4. pag
  {
    id: 'pag',
    name: 'PAG动效',
    description: '腾讯研发的完整动效工作流方案，将AE动效应用于各平台终端，支持更多特性和平台',
    url: 'https://pag.io/',
    iconUrl: 'https://pag.io/img/favicon.ico',
    category: 'motion-design',
    subCategory: 'motion-design-plugins',
    tags: ['前端', '动画', 'JavaScript', '高性能'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 5. Framer Motion
  {
    id: 'framer-motion',
    name: 'Framer Motion',
    description: 'React动画和手势库，用简洁的声明式语法创建强大的动画和交互效果',
    url: 'https://www.framer.com/motion/',
    iconUrl: 'https://framerusercontent.com/images/0icKFOIiBNLU6EPGKFXQmbSsWE.png',
    category: 'motion-design',
    subCategory: 'motion-design-plugins',
    tags: ['React', 'Framer', '动画', '交互'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
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
    subCategory: 'design-resources-icons',
    tags: ['图标', '矢量', '高级', '免费', '搜索'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-ui',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-illustrations',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-video',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-images',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-fonts',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-mockups',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
    tags: ['字体', '设计', '免费', '平面', '商用'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 24. Typekit
  {
    id: 'typekit',
    name: 'Typekit',
    description: '提供来自世界最佳铸造厂的高质量字体资源',
    url: 'https://typekit.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://typekit.com',
    category: 'design-resources',
    subCategory: 'design-resources-fontwebsites',
    tags: ['字体', '高质量', '专业', '铸造', 'Adobe'],
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-fontwebsites',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-soundeffects',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-ppt',
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
    subCategory: 'design-resources-3d',
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
    subCategory: 'design-resources-3d',
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
    subCategory: 'design-resources-3d',
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
    subCategory: 'design-resources-3d',
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
    subCategory: 'design-resources-3d',
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
    subCategory: 'design-resources-3d',
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
    subCategory: 'design-resources-3d',
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
    subCategory: 'design-resources-3d',
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
    subCategory: 'design-resources-3d',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-3dmodels',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-aepr',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
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
    subCategory: 'design-resources-cutout',
    tags: ['免抠素材', '英雄联盟', '游戏', '壁纸', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },

  /* =========================================================
   * 可视化大数据 - 可视化灵感
   * ========================================================= */
  
  // 1. Data Viz Project
  {
    id: 'datavizproject',
    name: 'Data Viz Project',
    description: '一个数据可视化方法的综合库，包含150多种可视化类型和实例，帮助设计师选择合适的数据展示方式',
    url: 'https://datavizproject.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://datavizproject.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['数据可视化', '图表类型', '灵感', '参考', '分类'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 2. Information is Beautiful
  {
    id: 'informationisbeautiful',
    name: 'Information is Beautiful',
    description: '由David McCandless创建的数据可视化网站，展示了如何将复杂数据转化为清晰美观的视觉作品',
    url: 'https://informationisbeautiful.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://informationisbeautiful.net',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['数据可视化', '信息图表', '设计灵感', '数据故事', '创意'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 3. Flowing Data
  {
    id: 'flowingdata',
    name: 'Flowing Data',
    description: '专注于统计和数据可视化的博客，提供大量数据可视化教程、案例分析和最新趋势',
    url: 'https://flowingdata.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://flowingdata.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['数据可视化', '统计', '教程', '案例', '趋势'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 4. 头号设计
  {
    id: 'bestdesign',
    name: '头号设计-可视化灵感',
    description: '优质的可视化灵感设计资源网站，提供多种可视化设计参考和灵感案例',
    url: 'https://www.bestdesign.vip/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.bestdesign.vip',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['设计', '灵感', '可视化', '参考', '案例'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 5. 大屏参考
  {
    id: 'banber',
    name: '大屏参考',
    description: '提供各类数据可视化大屏设计参考，包含多种行业和应用场景的可视化案例',
    url: 'https://www.banber.com/library',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.banber.com/library',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['大屏', '可视化', '参考', '案例', '设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 6. 数字像素
  {
    id: 'shuzixs',
    name: '数字像素',
    description: '可视化设计、开发、互动综合服务社区，提供丰富的可视化设计灵感和教程',
    url: 'https://www.shuzixs.com/#/home',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.shuzixs.com/#/home',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['设计', '编程', '社区', '可视化', '互动'],
    isHot: true,
    isFeatured: false,
    rating: 4.5
  },
  
  // 7. 图象可视化
  {
    id: 'tuuux',
    name: '图象可视化',
    description: '聚焦国内外可视化创意社区，展示各类优秀的数据可视化设计案例和创新思路',
    url: 'https://www.tuuux.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.tuuux.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['灵感', '社区', '可视化', '创意', '设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  
  // 8. 工作室视觉参考
  {
    id: 'yanobox',
    name: '工作室视觉参考',
    description: '提供高质量的数据可视化和视觉设计参考，展示专业工作室的创意视觉作品',
    url: 'https://www.yanobox.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.yanobox.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['视觉', '参考', '工作室', '创意', '设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 9. 阿里云可视化案例参考
  {
    id: 'aliyun-showcase',
    name: '阿里云可视化案例参考',
    description: '阿里云官方展示的数据可视化案例，涵盖多个行业和应用场景的大屏设计',
    url: 'https://www.aliyun.com/activity/intelligent/datav-showcase',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.aliyun.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['阿里云', '案例', '大屏', '可视化', '参考'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  
  // 10. 可视化参考
  {
    id: 'digihail',
    name: '数字冰雹可视化参考',
    description: '数字冰雹信息技术有限公司专注于数据可视化领域，展示智慧城市、公安警务等多个行业的可视化解决方案',
    url: 'http://www.digihail.com/case/casesummary.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.digihail.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['智慧城市', '案例', '可视化', '大屏', '解决方案'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 11. 图之典
  {
    id: 'tuzhidian',
    name: '图之典',
    description: '图之典(Gradict）是由图之可视化工作室（Plothis Studio）制作和维护的数据可视化知识分享站点',
    url: 'http://tuzhidian.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://tuzhidian.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['社区', '知识', '可视化', '图表', '教程'],
    isHot: true,
    isFeatured: false,
    rating: 4.5
  },
  
  // 12. Make2Digital
  {
    id: 'make2digital',
    name: '可视化灵感-可购买源文件',
    description: '提供高质量的可视化设计灵感，可直接购买源文件用于商业项目',
    url: 'https://www.make2digital.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.make2digital.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['模板', '灵感', '源文件', '可视化', '商业'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 13. 数据可视化图表介绍
  {
    id: 'datavizcatalogue',
    name: '数据可视化图表介绍',
    description: '全面介绍各类数据可视化图表类型、用途和适用场景，帮助设计师选择合适的可视化方式',
    url: 'https://datavizcatalogue.com/ZH/index.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://datavizcatalogue.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-inspiration',
    tags: ['图表', '分类', '教程', '可视化', '指南'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  /* =========================================================
   * 可视化大数据 - 可视化平台
   * ========================================================= */
  
  // 1. Tableau
  {
    id: 'tableau',
    name: 'Tableau',
    description: '领先的数据可视化分析平台，无需编程即可创建交互式仪表盘和报表，支持多种数据源连接',
    url: 'https://www.tableau.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.tableau.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['数据可视化', '商业智能', '仪表盘', '分析', '报表'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 2. PowerBI
  {
    id: 'powerbi',
    name: 'Power BI',
    description: '微软推出的商业分析服务，提供交互式可视化和商业智能功能，易于集成到Microsoft生态系统',
    url: 'https://powerbi.microsoft.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://powerbi.microsoft.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['数据可视化', 'Microsoft', '商业智能', '分析', '集成'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 3. DataV
  {
    id: 'datav',
    name: 'DataV数据可视化',
    description: '阿里云推出的数据可视化工具，提供丰富的可视化组件和模板，适合快速构建大屏展示',
    url: 'https://www.aliyun.com/product/bigdata/datav',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.aliyun.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['数据可视化', '大屏', '阿里云', '组件', '模板'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 4. ANOV
  {
    id: 'anov',
    name: 'ANOV可视化平台',
    description: '提供通用的可视化能力，能快速构建L1-L5专业级可视化大屏。基于B/S架构，支持私有化部署，集成游戏引擎与WebGL支持3D场景实时渲染',
    url: 'https://anov.cucloud.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://anov.cucloud.cn',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['AI', '模板', '前端', '视频', '在线'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 5. 易知微
  {
    id: 'easyv',
    name: '易知微EasyV',
    description: '易知微以EasyV低代码数据可视化工具为核心，结合WebGL、echarts、GIS技术，打造实景三维数字孪生和数据中台数字化转型解决方案',
    url: 'https://easyv.cloud/market',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://easyv.cloud',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['图像', '编程', '前端', '在线', '低代码'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 6. ThingJS
  {
    id: 'thingjs',
    name: 'ThingJS',
    description: 'ThingJS数字孪生可视化平台，提供丰富的3D资源与场景构建能力，实现数据可视化与场景交互',
    url: 'https://store.thingjs.com/projects',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://store.thingjs.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['3D', '数字孪生', '场景', '可视化', '平台'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 7. 百度智能云 Sugar
  {
    id: 'baidu-sugar',
    name: '百度智能云 Sugar',
    description: '百度智能云专注云计算、智能大数据、人工智能服务，提供可视化大屏构建能力，并支持API对接和快速集成',
    url: 'https://cloud.baidu.com/product/sugar.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cloud.baidu.com/product/sugar.html',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['百度', '云服务', '大数据', 'API', '可视化'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 8. 帆软
  {
    id: 'fanruan',
    name: '帆软BI平台',
    description: '帆软专注BI(商业智能)领域16年，IDC认证国内BI市场占有率第一，超18000家大中型企业选择，为70000个信息化项目提供BI支持',
    url: 'https://www.fanruan.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.fanruan.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['BI', '商业智能', '数据分析', '报表', '国产'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 9. 恒泰实达
  {
    id: 'techstar',
    name: '恒泰实达数据可视化平台',
    description: '恒泰实达依托领先的大数据与智能化技术，为能源、电信、交通、金融等行业提供大数据可视化分析解决方案，用数据赋能社会公共管理及企业运营',
    url: 'http://www.techstar.com.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.techstar.com.cn',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['大数据', '分析', '解决方案', '智能化', '电力'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 10. 四方伟业
  {
    id: 'sefonsoft',
    name: '四方伟业可视化平台',
    description: '四方伟业专注于大数据分析、数据可视化平台、数据治理与人工智能技术应用领域，为政府和企业提供数据中台、商业智能工具、数据资产管理等产品',
    url: 'http://www.sefonsoft.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.sefonsoft.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['数据中台', '商业智能', '数据治理', '资产管理', '可视化'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  // 11. 数字冰雹
  {
    id: 'digihail',
    name: '数字冰雹可视化平台',
    description: '数字冰雹专注于数据可视化领域，系统平台与行业需求深度结合，形成了一系列行业可视化产品，成功应用于公安警务、智慧城市等多个领域',
    url: 'http://www.digihail.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.digihail.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['智慧城市', '监测', '指挥', '数据分析', '可视化'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 12. 优锘科技
  {
    id: 'uino',
    name: 'UINO优锘科技数字孪生平台',
    description: 'UINO优锘科技是数字孪生可视化领域的专业厂商，采用自主技术对现实世界进行数字化建模，为客户提供智慧园区、IOC智能运营中心等多场景的数字孪生解决方案',
    url: 'https://www.uino.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.uino.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['数字孪生', '三维可视化', 'IOT', '智慧园区', '建模'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 13. DataHunter
  {
    id: 'datahunter',
    name: 'DataHunter数据可视化平台',
    description: 'DataHunter专注于业务数据可视化分析展示，为企业提供数据可视化工具、数据大屏展示工具，以及配套的敏捷BI数据运营技术服务',
    url: 'https://www.datahunter.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.datahunter.cn',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['数据分析', '大屏', 'BI', '业务', '可视化'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  
  // 14. 维天运通
  {
    id: 'vtron',
    name: 'Vtron维天运通',
    description: '大屏幕数字显示拼接墙及可视化解决方案专业供应商，提供数据可视化大屏展示整体解决方案',
    url: 'https://www.vtron.com.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.vtron.com.cn',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['大屏', '拼接墙', '显示', '解决方案', '可视化'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 15. 光启元
  {
    id: 'raykite',
    name: '光启元RayKITE可视化平台',
    description: '光启元科技致力于专业大数据图形化呈现与交互体验的开拓与创新，专注于云数据与物联数据实时可视化开发，应用于智慧城市、智慧建筑等领域',
    url: 'https://www.raykite.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.raykite.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-platform',
    tags: ['实时可视化', '大数据', '物联网', '智慧城市', '交互体验'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  
  /* =========================================================
   * 可视化大数据 - 可视化地图
   * ========================================================= */
  
  // 1. ArcGIS
  {
    id: 'arcgis',
    name: 'ArcGIS',
    description: 'Esri公司开发的地理信息系统平台，提供强大的空间数据分析和可视化功能',
    url: 'https://www.arcgis.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.arcgis.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['地图可视化', 'GIS', '空间分析', '地理数据', '专业'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 2. Mapbox
  {
    id: 'mapbox',
    name: 'Mapbox',
    description: '领先的位置数据平台，提供自定义地图样式、地理空间分析和实时数据可视化服务',
    url: 'https://www.mapbox.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mapbox.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['地图可视化', '自定义', 'API', '实时数据', '定位服务'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 3. 百度地图开放平台
  {
    id: 'baidumap',
    name: '百度地图开放平台',
    description: '提供地图基础数据与位置服务能力的开放平台，支持Web、移动端等多种终端的地图应用开发',
    url: 'https://lbsyun.baidu.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://lbsyun.baidu.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['地图可视化', '百度', 'API', '位置服务', '中文'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 4. OpenStreetMap
  {
    id: 'openstreetmap',
    name: 'OpenStreetMap',
    description: 'OpenStreetMap是一个世界地图，由全球志愿者构建，依据开放许可协议可自由使用的地图数据源',
    url: 'https://www.openstreetmap.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.openstreetmap.org',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['开源', '地图', '免费', '数据', '全球'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 5. AmCharts地图
  {
    id: 'amcharts',
    name: '国外各国SVG矢量地图',
    description: 'AmCharts提供各国高质量SVG矢量地图下载，可用于数据可视化和交互式地图应用开发',
    url: 'http://www.amcharts.com/svg-maps/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.amcharts.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['SVG', '矢量', '地图', '国家', '可视化'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 6. Mars3D
  {
    id: 'mars3d',
    name: 'Mars3D三维可视化平台',
    description: 'Mars3D是基于WebGL技术实现的三维客户端开发平台，支持轻量级高效能GIS开发，可快速接入与使用多种GIS数据和三维模型',
    url: 'http://mars3d.cn/example.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://mars3d.cn',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['3D', 'GIS', '前端', '可视化', '平台'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 7. POI数据
  {
    id: 'poi86',
    name: 'POI数据',
    description: '优质的POI数据工具网站，提供丰富的位置信息数据查询和下载',
    url: 'http://www.poi86.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.poi86.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['POI', '地图', '数据', '位置', '查询'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 8. BIGEMAP
  {
    id: 'bigemap',
    name: 'BIGEMAP GIS Office',
    description: '国产基础软件，支持多种数据格式编辑（shp、kml、dwg等），提供专题地图制图、数据处理、高清卫星地图航拍等功能',
    url: 'http://www.bigemap.com/source/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.bigemap.com/source',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['GIS', '地图', '制图', '卫星', '数据处理'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 9. 规划云
  {
    id: 'guihuayun',
    name: '规划云',
    description: '提供规划百科、城市规划案例搜索、政府文件搜索、地图搜索、国外图片搜索等多种规划资源',
    url: 'http://guihuayun.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://guihuayun.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['规划', '城市', '地图', '搜索', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 10. 地之图
  {
    id: 'map-ps123',
    name: '地之图',
    description: '致力于各种地图最新版本的收集、整理、扫描、发布、查询，并提供打包下载服务',
    url: 'http://map.ps123.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://map.ps123.net',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['地图', '收集', '下载', '查询', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 11. 地图图片生成器
  {
    id: 'bluelog',
    name: '地图SVG生成器',
    description: '快速便捷、傻瓜式操作生成多样化的地图SVG图片，支持自定义和下载',
    url: 'https://bluelog.space/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://bluelog.space',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['SVG', '地图', '生成器', '图片', '工具'],
    isHot: false,
    isFeatured: true,
    rating: 4.5
  },
  
  // 12. Axhub Maps
  {
    id: 'axhub-maps',
    name: 'Axhub Maps',
    description: '可一键复制到Axure的全国（含省、市、区）SVG地图元件，提高原型设计效率',
    url: 'https://axhub.im/maps/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://axhub.im/maps',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['Axure', 'SVG', '地图', '原型', '设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  
  // 13. EasyMap
  {
    id: 'easymap',
    name: 'EasyMap',
    description: '提供JSON格式地图数据下载，便于前端开发者实现地图可视化',
    url: 'https://map.easyv.cloud/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://map.easyv.cloud',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['JSON', '地图', '下载', '可视化', '开发'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 14. 高德POI
  {
    id: 'amap-poi',
    name: '高德POI',
    description: '高德兴趣点数据，来源于高德地图，提供丰富的位置信息数据',
    url: 'https://www.poi86.com/poi/amap.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.poi86.com/poi/amap.html',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['POI', '高德', '地图', '位置', '数据'],
    isHot: true,
    isFeatured: false,
    rating: 4.6
  },
  
  // 15. Three.js
  {
    id: 'threejs',
    name: 'Three.js',
    description: '基于Web开发的三维可视化绘制库，是浏览器中的3D引擎，可创建各种三维场景，包括摄影机、光影、材质等',
    url: 'https://threejs.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://threejs.org',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['3D', 'WebGL', '可视化', 'JavaScript', '前端'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 16. Maptalks
  {
    id: 'maptalks',
    name: 'Maptalks',
    description: '一个用于集成2D/3D地图的开源JavaScript库，支持多种地图功能和可视化效果',
    url: 'https://maptalks.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://maptalks.org',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['2D/3D', '地图', 'JavaScript', '开源', '可视化'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 17. Mapbox
  {
    id: 'mapbox',
    name: 'Mapbox',
    description: '基于矢量渲染与WebGL技术的风格化地图平台，提供交互、可定制的前端框架和丰富的地图样式',
    url: 'https://www.mapbox.com/gallery/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mapbox.com/gallery',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['WebGL', '矢量', '地图', '样式', '前端'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 18. Snazzy Maps
  {
    id: 'snazzymaps',
    name: 'Snazzy Maps',
    description: '面向网页设计师和开发者的谷歌地图不同风格资源库，提供丰富的地图样式和配置选项',
    url: 'https://snazzymaps.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://snazzymaps.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['谷歌地图', '样式', '设计', '前端', '资源'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 19. Mapv
  {
    id: 'mapv',
    name: 'Mapv',
    description: '基于百度地图的大数据可视化开源库，用于展示大量的点、线、面数据，支持热力图、网格、聚合等多种展示方式',
    url: 'http://mapv.baidu.com/examples/#baidu-map-point-heatmap-time.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://mapv.baidu.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['百度地图', '大数据', '可视化', '热力图', '开源'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 20. WebGL Fundamentals
  {
    id: 'webglfundamentals',
    name: 'WebGL基础教程',
    description: '全面的WebGL中文教程，帮助开发者学习地图和3D可视化的基础技术',
    url: 'https://webglfundamentals.org/webgl/lessons/zh_cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://webglfundamentals.org',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['WebGL', '教程', '3D', '前端', '可视化'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 21. Windy
  {
    id: 'windy',
    name: 'Windy',
    description: '全球实时气候可视化平台，提供气象雷达、卫星云图、风、气压、温度、降水、湿度、PM2.5等多种图层展示',
    url: 'https://www.windy.com/zh/-二氧化氮-no2?cams,no2,19.891,-142.251,3,i:pressure',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.windy.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['气象', '可视化', '地图', '全球', '实时'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 22. 高德开放平台
  {
    id: 'amap-lbs',
    name: '高德开放平台',
    description: '高德地图API开发平台，提供地图服务、位置搜索、路径规划等功能，支持Web、移动端等多种开发场景',
    url: 'https://lbs.amap.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://lbs.amap.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['高德', 'API', '地图', '开发', '服务'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 23. 腾讯位置服务
  {
    id: 'qq-lbs',
    name: '腾讯位置服务',
    description: '腾讯地图开放平台，提供基于腾讯地图的地理位置服务和解决方案，包含JavaScript API、SDK和WebService接口',
    url: 'https://lbs.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://lbs.qq.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['腾讯', '地图', 'API', '位置服务', '开发'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 24. 百度地图开放平台
  {
    id: 'baidu-lbs',
    name: '百度地图开放平台',
    description: '百度地图API开放平台，提供基本地图、位置搜索、周边搜索、公交驾车导航、定位服务、地理编码等丰富功能',
    url: 'https://lbsyun.baidu.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://lbsyun.baidu.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['百度', '地图', 'API', '开发', '服务'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 25. OpenStreetMap
  {
    id: 'openstreetmap',
    name: 'OpenStreetMap',
    description: '世界最大的开放式地图数据平台，提供多种地图样式，可导出OSM格式地理信息文件，便于与GIS软件协作',
    url: 'https://www.openstreetmap.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.openstreetmap.org',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['开源', '地图', '数据', 'GIS', '协作'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 26. 阿里云地图
  {
    id: 'aliyun-datav-map',
    name: '阿里云地图生成器',
    description: '支持下载各省、市、县的SVG格式地图素材，便于数据可视化项目使用',
    url: 'http://datav.aliyun.com/portal/school/atlas/area_selector',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://datav.aliyun.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['阿里云', 'SVG', '地图', '素材', '下载'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 27. 标准地图服务系统
  {
    id: 'bzdt',
    name: '标准地图服务系统',
    description: '国家标准地图服务平台，提供符合国界线标准的地图素材，用于新闻宣传、书刊插图、广告背景等用途',
    url: 'http://bzdt.ch.mnr.gov.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://bzdt.ch.mnr.gov.cn',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['标准', '地图', '官方', '素材', '下载'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 28. 天地图
  {
    id: 'tianditu',
    name: '国家地理信息公共服务平台',
    description: '天地图是国家测绘地理信息局建设的国家地理信息公共服务平台，提供权威、可靠的地理信息服务',
    url: 'https://www.tianditu.gov.cn/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/07/79496-www.tianditu.gov.cn.png',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['国家', '地理信息', '官方', '地图', '服务'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 29. GeoJSON数据地图
  {
    id: 'geojson-map',
    name: 'GeoJSON数据地图',
    description: '提供丰富的GeoJSON格式地图数据下载，便于前端开发者实现地图可视化效果',
    url: 'https://geojson.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://geojson.cn',
    category: 'data-visualization',
    subCategory: 'data-visualization-map',
    tags: ['GeoJSON', '地图', '数据', '前端', '可视化'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  /* =========================================================
   * 可视化大数据 - 可视化组件
   * ========================================================= */
  
  // 1. ECharts
  {
    id: 'echarts',
    name: 'ECharts',
    description: '百度开源的数据可视化图表库，提供丰富的图表类型和交互功能，支持大数据渲染',
    url: 'https://echarts.apache.org/zh/index.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://echarts.apache.org',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['数据可视化', '图表库', '开源', 'JavaScript', 'Apache'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 2. D3.js
  {
    id: 'd3js',
    name: 'D3.js',
    description: '强大的JavaScript数据可视化库，使用SVG、Canvas和HTML创建动态交互式数据可视化',
    url: 'https://d3js.org/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://d3js.org',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['数据可视化', 'JavaScript', 'SVG', '自定义', '开源'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 3. AntV
  {
    id: 'antv',
    name: 'AntV',
    description: '蚂蚁金服开源的数据可视化解决方案，包含G2、G6、F2等多个可视化库，满足不同场景需求',
    url: 'https://antv.vision/zh',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://antv.vision',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['数据可视化', '图表库', '蚂蚁金服', '开源', '生态'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 4. 图扑软件
  {
    id: 'hightopo',
    name: '图扑软件HT',
    description: '图扑软件专注于数据可视化Web组态开发，致力于工业组态建设。支持智慧城市、智慧水务、电力、燃气、数字孪生等多个领域',
    url: 'https://www.hightopo.com/demos/index.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.hightopo.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['组态', '前端', '工业', '可视化', '组件'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 5. RayData Asset
  {
    id: 'raydata',
    name: 'RayData Asset资源平台',
    description: 'RayData Asset资源平台提供专业的3D可视化体验，包含行业解决方案、精美炫酷的3D模型资源和实用的图表样式',
    url: 'https://asset.raykite.com/resource/all',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://asset.raykite.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['3D', '资源', '模型', '可视化', '组件'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 6. 太极开发者平台
  {
    id: 'gbim',
    name: '太极开发者平台',
    description: '提供可视化开发组件和资源，支持快速构建数据可视化应用和解决方案',
    url: 'https://www.gbim.vip/#/home/dts-mall',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gbim.vip',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['开发', '组件', '平台', '可视化', '资源'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  
  // 7. Highcharts
  {
    id: 'hcharts',
    name: 'Highcharts',
    description: '兼容IE6+、完美支持移动端的HTML5交互图表库，提供丰富的图表类型和中文资源',
    url: 'https://www.hcharts.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.hcharts.cn',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['图表库', 'JavaScript', '移动端', '交互', '可视化'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 8. 图象可视化PS插件
  {
    id: 'tuuux-plugin',
    name: '可视化设计创作插件',
    description: '图象可视化PS插件，帮助设计师快速创建专业的数据可视化作品',
    url: 'https://www.tuuux.com/plugin/download',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.tuuux.com/plugin/download',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['Photoshop', '插件', '可视化', '设计', '创作'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 9. ECharts Demo集
  {
    id: 'isqqw',
    name: 'ECharts Demo集',
    description: '提供大量ECharts示例和模板，帮助开发者快速实现各类数据可视化图表',
    url: 'https://www.isqqw.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.isqqw.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['ECharts', '示例', '模板', '可视化', '图表'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  
  // 10. makeapie
  {
    id: 'makeapie',
    name: 'makeapie',
    description: 'ECharts图表可视化案例分享平台，用户可以上传和分享自己的可视化作品',
    url: 'https://www.makeapie.cn/echarts',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.makeapie.cn/echarts',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['ECharts', '案例', '分享', '社区', '可视化'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 11. RayCharts
  {
    id: 'raycharts',
    name: 'RayCharts编辑工具',
    description: '可视化编辑图表工具，旨在帮助非专业人士进行图表的制作、编辑、展示与分享',
    url: 'https://raycharts.raykite.com/editor',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://raycharts.raykite.com/editor',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['编辑器', '图表', '可视化', '分享', '简易'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  // 12. 花火数图
  {
    id: 'hanabi',
    name: '花火数图',
    description: '提供详细解释说明和使用场景的图表库，根据表达内容和故事选择合适的图表类型',
    url: 'https://hanabi.data-viz.cn/templates?lang=zh-CN',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://hanabi.data-viz.cn/templates?lang=zh-CN',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['图表', '模板', '教程', '可视化', '数据'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 13. Ant Design Charts
  {
    id: 'charts-antd',
    name: 'Ant Design Charts',
    description: '蚂蚁集团全新一代数据可视化解决方案，提供简单方便、专业可靠的数据可视化最佳实践',
    url: 'https://charts.ant.design/zh/examples/gallery/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://charts.ant.design/zh/examples/gallery',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['Ant Design', '图表', '组件库', 'React', '可视化'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  // 14. 图之典
  {
    id: 'tuzhidian',
    name: '图之典',
    description: '由图之可视化工作室(Plothis Studio)制作和维护的数据可视化知识分享站点',
    url: 'http://tuzhidian.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://tuzhidian.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['知识库', '教程', '可视化', '分享', '学习'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 15. DataV
  {
    id: 'datav-vue',
    name: 'DataV',
    description: 'Vue大屏数据展示组件库，用于构建炫酷的数据可视化大屏项目',
    url: 'http://datav.jiaminghi.com/guide/borderBox.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://datav.jiaminghi.com',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['Vue', '大屏', '组件库', '可视化', '数据展示'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  
  // 16. 超强图表网站
  {
    id: 'isqqw-charts',
    name: '超强图表网站',
    description: '收集整理各类图表示例和模板，帮助开发者和设计师快速实现数据可视化需求',
    url: 'https://www.isqqw.com/#/homepage',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.isqqw.com/#/homepage',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['图表', '示例', '模板', '可视化', '资源'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  // 17. 京东智能城市设计语言系统
  {
    id: 'jd-rainbowd',
    name: '京东智能城市设计系统',
    description: '以京东城市设计语言为基础的数据可视化系统，提供预构建、可重用的组件库、模式、指南和代码',
    url: 'https://www.tuuux.com/',
    iconUrl: 'https://88sheji-1304770347.cos.ap-guangzhou.myqcloud.com/wp-content/uploads/2022/07/1656669644-jd-zhineng.png',
    category: 'data-visualization',
    subCategory: 'data-visualization-components',
    tags: ['京东', '设计系统', '智能城市', '组件库', '可视化'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 车载设计 - 车机交互 (automotive-design-hmi)
   * ========================================================= */
  // 1. Rightware Kanzi
  {
    id: 'rightware-kanzi',
    name: 'Rightware Kanzi',
    description: '专业的汽车HMI开发平台，提供完整的车载用户界面设计和实现解决方案',
    url: 'https://www.rightware.com/kanzi-overview',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.rightware.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-hmi',
    tags: ['HMI', '车机', '开发平台', '界面设计', '交互'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. Qt Automotive Suite
  {
    id: 'qt-automotive',
    name: 'Qt Automotive Suite',
    description: '基于Qt框架的车载应用开发套件，为汽车信息娱乐系统提供全面的解决方案',
    url: 'https://www.qt.io/automotive-suite',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.qt.io',
    category: 'automotive-design',
    subCategory: 'automotive-design-hmi',
    tags: ['Qt', '开发', '框架', '信息娱乐', '车载'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. HARMAN Ignite
  {
    id: 'harman-ignite',
    name: 'HARMAN Ignite',
    description: '哈曼提供的智能车联网平台，支持车载数字座舱和人机交互系统的开发',
    url: 'https://car.harman.com/solutions/harman-ignite',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://car.harman.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-hmi',
    tags: ['车联网', '数字座舱', '交互', '开发', '平台'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 4. Luxoft PELUX
  {
    id: 'luxoft-pelux',
    name: 'Luxoft PELUX',
    description: '开源汽车软件平台，为车载系统提供基础架构和交互界面开发工具',
    url: 'https://pelux.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://pelux.io',
    category: 'automotive-design',
    subCategory: 'automotive-design-hmi',
    tags: ['开源', '车载系统', '软件平台', 'HMI', '开发'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 5. 百度Apollo HMI
  {
    id: 'baidu-apollo-hmi',
    name: '百度Apollo HMI',
    description: '百度Apollo自动驾驶平台的人机交互系统，提供智能座舱解决方案',
    url: 'https://apollo.auto/developer/apollo_intelligent_cockpit',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://apollo.auto',
    category: 'automotive-design',
    subCategory: 'automotive-design-hmi',
    tags: ['Apollo', '百度', '智能座舱', '自动驾驶', '中国'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 6. 华为智能座舱
  {
    id: 'huawei-cockpit',
    name: '华为智能座舱',
    description: '华为提供的智能座舱解决方案，整合HarmonyOS车机系统与人机交互技术',
    url: 'https://www.huawei.com/cn/technology-insights/industry-insights/intelligent-automotive-solution/intelligent-cockpit',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.huawei.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-hmi',
    tags: ['华为', 'HarmonyOS', '智能座舱', '车机系统', '中国'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 7. BlackBerry QNX HMI
  {
    id: 'blackberry-qnx',
    name: 'BlackBerry QNX HMI',
    description: '黑莓QNX汽车平台的人机交互解决方案，提供安全可靠的车载系统交互体验',
    url: 'https://blackberry.qnx.com/en/products/automotive/qnx-car-platform-for-digital-cockpits',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://blackberry.qnx.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-hmi',
    tags: ['黑莓', 'QNX', '数字座舱', '汽车平台', '国际'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 8. 东软Neusoft智能座舱
  {
    id: 'neusoft-cockpit',
    name: '东软Neusoft智能座舱',
    description: '中国东软集团提供的智能座舱解决方案，整合人机交互、信息娱乐和驾驶辅助功能',
    url: 'https://www.neusoft.com/cn/products/2290/2292/2293/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.neusoft.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-hmi',
    tags: ['东软', '智能座舱', '信息娱乐', '人机交互', '中国'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  
  /* =========================================================
   * 车载设计 - 车载界面 (automotive-design-ui)
   * ========================================================= */
  // 1. Car UI Patterns
  {
    id: 'car-ui-patterns',
    name: 'Car UI Patterns',
    description: '收集和展示汽车界面设计模式的资源库，提供大量车载UI设计案例和最佳实践',
    url: 'https://www.caruipatterns.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.caruipatterns.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-ui',
    tags: ['UI模式', '设计案例', '界面', '车载', '最佳实践'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. UXPIN Car UI Kit
  {
    id: 'uxpin-car-ui',
    name: 'UXPIN Car UI Kit',
    description: 'UXPIN提供的车载界面设计组件库，包含丰富的车机UI元素和交互模板',
    url: 'https://www.uxpin.com/automobile-ui-kit',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.uxpin.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-ui',
    tags: ['UI套件', '组件库', '设计资源', '模板', '车载界面'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. Figma汽车界面模板
  {
    id: 'figma-automotive-templates',
    name: 'Figma汽车界面模板',
    description: 'Figma社区提供的汽车仪表盘和中控界面设计模板，支持快速原型设计',
    url: 'https://www.figma.com/community/search?model_type=hub%2Cfile%2Cproject&q=automotive%20UI',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.figma.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-ui',
    tags: ['Figma', '模板', '仪表盘', '中控', '原型'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 4. Sketch车载UI库
  {
    id: 'sketch-automotive-ui',
    name: 'Sketch车载UI库',
    description: 'Sketch格式的车载界面UI元素库，包含导航、信息娱乐系统等常用界面组件',
    url: 'https://www.sketch.com/elements/automotive-ui-kit/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.sketch.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-ui',
    tags: ['Sketch', 'UI库', '组件', '导航', '信息娱乐'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 5. 理想汽车UI设计
  {
    id: 'li-auto-ui',
    name: '理想汽车UI设计',
    description: '中国理想汽车官方网站展示的车载UI设计案例，融合中国用户习惯的智能座舱界面',
    url: 'https://www.lixiang.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.lixiang.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-ui',
    tags: ['理想汽车', '智能座舱', '中国', '车载界面', 'UI设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 6. 蔚来汽车UI设计
  {
    id: 'nio-ui',
    name: '蔚来汽车UI设计',
    description: '蔚来汽车官方网站展示的智能座舱UI设计，代表中国高端电动车的界面设计方向',
    url: 'https://www.nio.cn/os',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.nio.cn',
    category: 'automotive-design',
    subCategory: 'automotive-design-ui',
    tags: ['蔚来', 'NIO OS', '中国', '智能座舱', '高端设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 7. Mercedes-Benz MBUX
  {
    id: 'mercedes-mbux',
    name: 'Mercedes-Benz MBUX',
    description: '奔驰MBUX信息娱乐系统的官方展示，代表德国豪华品牌的车载界面设计理念',
    url: 'https://www.mercedes-benz.com/en/mbux/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mercedes-benz.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-ui',
    tags: ['奔驰', 'MBUX', '豪华品牌', '德国', '信息娱乐'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 8. BMW iDrive
  {
    id: 'bmw-idrive',
    name: 'BMW iDrive',
    description: '宝马iDrive系统的官方展示，展现德国工程与设计理念的车载交互系统',
    url: 'https://www.bmw.com/en/innovation/bmw-idrive-8-infotainment-system.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.bmw.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-ui',
    tags: ['宝马', 'iDrive', '德国', '交互系统', '豪华品牌'],
    isHot: false,
    isFeatured: true,
    rating: 4.8
  },
  
  /* =========================================================
   * 车载设计 - 设计工具 (automotive-design-tools)
   * ========================================================= */
  // 1. Unity Automotive
  {
    id: 'unity-automotive',
    name: 'Unity Automotive',
    description: 'Unity引擎专为汽车行业打造的设计与开发工具，支持高保真数字座舱原型设计',
    url: 'https://unity.com/solutions/automotive-transportation',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://unity.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-tools',
    tags: ['Unity', '3D', '数字座舱', '原型', '开发'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. Adobe XD车载模板
  {
    id: 'adobe-xd-automotive',
    name: 'Adobe XD车载模板',
    description: 'Adobe XD提供的车载界面设计模板与工具集，支持响应式车机界面设计',
    url: 'https://www.adobe.com/products/xd/features/ui-kits.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.adobe.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-tools',
    tags: ['Adobe XD', '模板', '工具集', '响应式', '界面设计'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. Altia HMI工具
  {
    id: 'altia-hmi',
    name: 'Altia HMI工具',
    description: '专业的车载HMI设计与开发工具，支持从概念到量产的全流程设计',
    url: 'https://www.altia.com/industries/automotive/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.altia.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-tools',
    tags: ['HMI', '开发工具', '量产', '设计流程', '专业'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 4. InVision车载原型
  {
    id: 'invision-automotive',
    name: 'InVision车载原型',
    description: 'InVision提供的车载界面原型设计工具，支持交互式演示和协作设计',
    url: 'https://www.invisionapp.com/inside-design/design-resources/design-system-dashboard-ui-kit/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.invisionapp.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-tools',
    tags: ['InVision', '原型', '交互', '协作', '演示'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 5. 阿里巴巴AliOS车载设计工具
  {
    id: 'alios-auto',
    name: '阿里巴巴AliOS车载设计工具',
    description: '阿里巴巴智能汽车操作系统AliOS提供的车载设计工具和资源',
    url: 'https://iot.aliyun.com/products/alios',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iot.aliyun.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-tools',
    tags: ['阿里巴巴', 'AliOS', '中国', '车载系统', '设计工具'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 6. NVIDIA DRIVE设计工具
  {
    id: 'nvidia-drive',
    name: 'NVIDIA DRIVE设计工具',
    description: 'NVIDIA提供的自动驾驶和智能座舱开发平台，包含UI设计和可视化工具',
    url: 'https://developer.nvidia.com/drive',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.nvidia.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-tools',
    tags: ['NVIDIA', '自动驾驶', '智能座舱', '可视化', '国际'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 7. 高德车载地图开发工具
  {
    id: 'amap-auto',
    name: '高德车载地图开发工具',
    description: '中国高德地图提供的车载导航和地图服务开发工具，支持自定义界面设计',
    url: 'https://lbs.amap.com/api/android-auto-sdk/summary/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://lbs.amap.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-tools',
    tags: ['高德地图', '导航', '中国', '车载', '开发工具'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 8. Unreal Engine汽车可视化
  {
    id: 'unreal-automotive',
    name: 'Unreal Engine汽车可视化',
    description: '虚幻引擎提供的汽车可视化和交互设计工具，用于创建高保真车载体验',
    url: 'https://www.unrealengine.com/en-US/industry/automotive',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.unrealengine.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-tools',
    tags: ['虚幻引擎', '可视化', '3D', '高保真', '国际'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  
  /* =========================================================
   * 车载设计 - 设计规范 (automotive-design-guidelines)
   * ========================================================= */
  // 1. NHTSA车载界面指南
  {
    id: 'nhtsa-guidelines',
    name: 'NHTSA车载界面指南',
    description: '美国国家公路交通安全管理局提供的车载界面安全设计指南，包含交互安全标准和最佳实践',
    url: 'https://www.nhtsa.gov/technology-innovation/distracted-driving',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.nhtsa.gov',
    category: 'automotive-design',
    subCategory: 'automotive-design-guidelines',
    tags: ['安全', '指南', '标准', '交互', '最佳实践'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Android Auto设计指南
  {
    id: 'android-auto-guidelines',
    name: 'Android Auto设计指南',
    description: 'Google提供的Android Auto应用设计指南，帮助开发者创建符合安全标准的车载应用',
    url: 'https://developer.android.com/design/ui/mobile/guides/autos',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.android.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-guidelines',
    tags: ['Android Auto', '设计指南', '应用开发', '安全标准', 'Google'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 3. Apple CarPlay指南
  {
    id: 'apple-carplay-guidelines',
    name: 'Apple CarPlay指南',
    description: 'Apple提供的CarPlay应用设计与开发指南，包含界面规范和交互标准',
    url: 'https://developer.apple.com/design/human-interface-guidelines/carplay',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.apple.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-guidelines',
    tags: ['CarPlay', 'Apple', '设计指南', '界面规范', '交互标准'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 4. 汽车UI/UX设计原则
  {
    id: 'automotive-uiux-principles',
    name: '汽车UI/UX设计原则',
    description: '针对车载界面的UI/UX设计原则与方法论，包含可用性、安全性和品牌一致性等方面的指导',
    url: 'https://uxplanet.org/ux-design-principles-for-self-driving-cars-3350e4e38e72',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uxplanet.org',
    category: 'automotive-design',
    subCategory: 'automotive-design-guidelines',
    tags: ['设计原则', 'UI/UX', '可用性', '安全性', '方法论'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },
  // 5. 工信部车载系统交互指南
  {
    id: 'miit-automotive-guidelines',
    name: '工信部车载系统交互指南',
    description: '中国工业和信息化部发布的智能网联汽车人机交互系统安全技术要求，提供中国市场的法规指导',
    url: 'https://www.miit.gov.cn/jgsj/kjs/zcfg/art/2020/art_c25a24d3e9614ca59f5f1fadf63ce0ac.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.miit.gov.cn',
    category: 'automotive-design',
    subCategory: 'automotive-design-guidelines',
    tags: ['工信部', '中国', '法规', '安全标准', '人机交互'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 6. Tesla UI设计规范
  {
    id: 'tesla-ui-guidelines',
    name: 'Tesla UI设计规范',
    description: '特斯拉车载界面设计规范资源，展示极简主义与高效交互的设计理念',
    url: 'https://www.tesla.com/design',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.tesla.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-guidelines',
    tags: ['特斯拉', '极简设计', '电动汽车', '交互设计', '国际'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 7. 小鹏汽车UI设计规范
  {
    id: 'xpeng-ui-guidelines',
    name: '小鹏汽车UI设计规范',
    description: '中国小鹏汽车官方展示的智能座舱设计理念和UI规范，体现中国智能汽车设计思路',
    url: 'https://www.xiaopeng.com/design.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.xiaopeng.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-guidelines',
    tags: ['小鹏', '中国', '智能座舱', 'UI规范', '电动汽车'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 8. Volvo Cars设计语言
  {
    id: 'volvo-design-language',
    name: 'Volvo Cars设计语言',
    description: '沃尔沃汽车的设计语言与界面规范，展示北欧简约风格与安全理念的融合',
    url: 'https://www.volvocars.com/intl/v/car-safety/safety-heritage',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.volvocars.com',
    category: 'automotive-design',
    subCategory: 'automotive-design-guidelines',
    tags: ['沃尔沃', '北欧设计', '安全', '简约', '国际'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },

  /* =========================================================
   * 设计团队 - 互联网团队 (design-teams-internet)
   * ========================================================= */
  // 1. 腾讯ISUX
  {
    id: 'tencent-isux',
    name: '腾讯ISUX',
    description: '腾讯社交用户体验设计，专注于用户体验设计、前端开发和交互设计，负责QQ、微信等产品的设计',
    url: 'https://isux.tencent.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://isux.tencent.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['腾讯', '社交', 'UX设计', '前端开发', '交互设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. 阿里巴巴设计
  {
    id: 'alibaba-design',
    name: '阿里巴巴设计',
    description: '阿里巴巴集团设计团队，负责淘宝、支付宝等产品的设计系统与规范，引领电商和金融领域的设计趋势',
    url: 'https://design.aliyun.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.aliyun.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['阿里巴巴', '电商', '设计系统', '金融', '云服务'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 3. 字节跳动设计
  {
    id: 'bytedance-design',
    name: '字节跳动设计团队',
    description: '字节跳动旗下设计团队，负责抖音、今日头条等产品的用户体验设计，专注于内容平台与短视频领域的创新',
    url: 'https://arco.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://arco.design',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['字节跳动', '抖音', '内容平台', '短视频', '设计系统'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 4. 百度MEUX
  {
    id: 'baidu-meux',
    name: '百度MEUX',
    description: '百度多终端用户体验部，致力于提升百度搜索、百度地图等产品的用户体验，并探索AI领域的交互设计创新',
    url: 'http://mux.baidu.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://mux.baidu.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['百度', '搜索', 'AI', '用户体验', '多终端'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 5. 京东设计中心
  {
    id: 'jd-design',
    name: '京东设计中心',
    description: '京东集团设计中心，为京东电商、京东金融等业务提供设计支持，打造全面的用户体验和品牌形象',
    url: 'https://jdc.jd.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://jdc.jd.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['京东', '电商', '金融', '品牌设计', '用户体验'],
    isHot: false,
    isFeatured: false,
    rating: 4.7
  },
  // 6. UIED技术团队
  {
    id: 'uied-team',
    name: 'UIED技术团队',
    description: 'UIED技术团队-体验为本，技术为翼，专注于用户体验设计与技术创新的融合',
    url: 'https://fsuied.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://fsuied.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['设计团队', '用户体验', '技术创新', '协作'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 7. HOTPOWER游戏工作室
  {
    id: 'hotpower',
    name: 'HOTPOWER游戏工作室',
    description: 'HOTPOWER 厦门巨游 游戏UI外包团队，专注于游戏UI界面、游戏ICON图标、游戏LOGO和游戏界面特效设计',
    url: 'http://www.hotpower.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.hotpower.net',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['游戏设计', '图标设计', 'UI界面', '特效设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 8. nicedesign奈思设计
  {
    id: 'nicedesign',
    name: 'nicedesign奈思设计',
    description: '领先的用户体验设计与互联网品牌建设公司，提供交互设计、UI界面设计、网站设计开发、移动界面设计等服务',
    url: 'http://www.niceui.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.niceui.cn',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['品牌设计', '界面设计', '网站设计', '移动设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 9. 畅游视觉设计中心
  {
    id: 'changyou-vc',
    name: '畅游视觉设计中心',
    description: '搜狐畅游视觉设计中心团队，从游戏和生活中汲取创意和灵感的设计团队，为虚拟体验提供视觉设计',
    url: 'http://vc.changyou.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://vc.changyou.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['游戏设计', '视觉设计', '创意灵感', '虚拟体验'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 10. JELLY DESIGN
  {
    id: 'jelly-design',
    name: 'JELLY DESIGN',
    description: 'JDR Design 隶属于京东零售集团，专注于无界零售下完美购物体验的设计探索与创新，服务产品、营销、品牌等领域',
    url: 'http://jdc.jd.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://jdc.jd.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['零售设计', '购物体验', '品牌设计', '京东'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 11. 阿里巴巴UED
  {
    id: 'alibaba-ued',
    name: '阿里巴巴UED',
    description: '阿里巴巴国际UED设计团队，负责阿里巴巴国际站的用户体验设计，为全球商业提供设计解决方案',
    url: 'https://www.aliued.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.aliued.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['阿里巴巴', '国际站', '用户体验', '电商设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 12. 阿里MUX
  {
    id: 'ali-mux',
    name: '阿里MUX',
    description: '一淘用户体验部，负责打造阿里巴巴集团一淘平台的用户体验设计',
    url: 'http://mux.alimama.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://mux.alimama.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['阿里巴巴', '一淘', '用户体验', '电商设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 13. AlloyTeam
  {
    id: 'alloyteam',
    name: 'AlloyTeam',
    description: '腾讯全端AlloyTeam团队，专注于Web前端开发，推动前端技术和体验设计的创新',
    url: 'http://www.alloyteam.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://www.alloyteam.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['腾讯', '前端开发', 'Web技术', '全端'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 14. 腾讯MXD
  {
    id: 'tencent-mxd',
    name: '腾讯MXD',
    description: '腾讯MXD设计团队，为腾讯多元产品线提供用户体验设计与创新服务',
    url: 'https://mxd.tencent.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/06/1657176040-mxd.png',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['腾讯', '用户体验', '多元产品', '设计创新'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 15. 腾讯CDC
  {
    id: 'tencent-cdc',
    name: '腾讯CDC',
    description: '腾讯CDC是一个设计团队，致力于成为世界一流的互联网设计团队，专注于互联网视觉设计、交互设计、用户研究、前端开发',
    url: 'https://cdc.tencent.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://cdc.tencent.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['腾讯', '视觉设计', '交互设计', '用户研究', '前端开发'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 16. TGideas
  {
    id: 'tgideas-design',
    name: 'TGideas',
    description: 'TGideas隶属于腾讯互动娱乐旗下，专注IP内容力构建与发展，是集产品内容开发、内容营销、IP商业化拓展、体验设计等为一体的团队',
    url: 'https://tgideas.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tgideas.qq.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['腾讯', 'IP内容', '游戏设计', '内容营销', '体验设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 17. 携程设计委员会
  {
    id: 'ctrip-design',
    name: '携程设计委员会',
    description: '携程设计委员会(Ctrip Design Committee)，负责携程旅行网的整体用户体验与设计创新',
    url: 'http://ued.ctrip.com/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/03/963cb-ued.ctrip.com.png',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['携程', '旅行设计', '用户体验', '服务设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 18. 百度EUX
  {
    id: 'baidu-eux',
    name: '百度EUX',
    description: '百度企业产品用户体验中心，负责百度企业级产品的用户体验设计与研究',
    url: 'http://eux.baidu.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://eux.baidu.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['百度', '企业产品', '用户体验', 'B端设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 19. 百度UED
  {
    id: 'baidu-ued',
    name: '百度移动生态UED',
    description: 'MEUX，负责百度移动生态体系的用户/商业产品的全链路体验设计，创造极致用户体验的同时赋能商业',
    url: 'http://ued.baidu.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://ued.baidu.com',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['百度', '移动生态', '用户体验', '商业设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 20. 阿里U一点
  {
    id: 'ali-uedcn',
    name: 'U一点设计',
    description: '阿里巴巴（中国站）用户体验设计部博客，分享阿里巴巴设计团队的设计理念、方法和实践',
    url: 'http://www.aliued.cn/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/03/28d24-www.aliued.cn.png',
    category: 'design-teams',
    subCategory: 'design-teams-internet',
    tags: ['阿里巴巴', '中国站', '用户体验', '设计博客'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },

  /* =========================================================
   * 设计团队 - 设计机构 (design-teams-agencies)
   * ========================================================= */
  // 1. IDEO
  {
    id: 'ideo',
    name: 'IDEO',
    description: '全球顶尖设计与创新咨询公司，专注于以人为本的设计思维方法，为企业提供创新解决方案',
    url: 'https://www.ideo.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.ideo.com',
    category: 'design-teams',
    subCategory: 'design-teams-agencies',
    tags: ['设计思维', '创新咨询', '全球机构', '用户中心设计', '跨领域'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Frog Design
  {
    id: 'frog-design',
    name: 'Frog Design',
    description: '全球领先的设计与战略咨询公司，专注于产品设计、数字体验和品牌转型，服务于全球知名企业',
    url: 'https://www.frogdesign.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.frogdesign.com',
    category: 'design-teams',
    subCategory: 'design-teams-agencies',
    tags: ['产品设计', '数字体验', '品牌战略', '全球机构', '创新咨询'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 3. 洛可可
  {
    id: 'lkk-design',
    name: '洛可可设计集团',
    description: '中国领先的工业设计与创新咨询公司，提供产品创新、品牌设计和用户体验咨询服务',
    url: 'https://www.lkker.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.lkker.com',
    category: 'design-teams',
    subCategory: 'design-teams-agencies',
    tags: ['工业设计', '品牌设计', '用户体验', '中国机构', '创新咨询'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  /* =========================================================
   * 设计团队 - 汽车团队 (design-teams-automotive)
   * ========================================================= */
  // 1. TGideas汽车设计团队
  {
    id: 'tgideas-auto',
    name: 'TGideas汽车设计团队',
    description: '腾讯互动娱乐旗下汽车设计团队，专注于智能座舱和车机交互体验设计，为车企提供完整解决方案',
    url: 'https://tgideas.qq.com/game/index.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tgideas.qq.com/index.html',
    category: 'design-teams',
    subCategory: 'design-teams-automotive',
    tags: ['腾讯', '车机', '智能座舱', '交互设计', '用户体验'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. BMW Designworks
  {
    id: 'bmw-designworks',
    name: 'BMW Designworks',
    description: '宝马集团旗下设计创新工作室，专注于汽车内外饰设计、用户界面和品牌体验创新',
    url: 'https://www.bmwgroupdesignworks.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.bmwgroupdesignworks.com',
    category: 'design-teams',
    subCategory: 'design-teams-automotive',
    tags: ['宝马', '汽车设计', '用户界面', '品牌体验', '创新工作室'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  /* =========================================================
   * 设计团队 - 创新工作室 (design-teams-innovation)
   * ========================================================= */
  // 1. Google Design
  {
    id: 'google-design',
    name: 'Google Design',
    description: '谷歌设计团队，负责Material Design设计系统开发与谷歌产品体验创新，引领全球设计趋势',
    url: 'https://design.google/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.google',
    category: 'design-teams',
    subCategory: 'design-teams-innovation',
    tags: ['谷歌', 'Material Design', '设计系统', '创新', '跨平台'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Microsoft Design
  {
    id: 'microsoft-design',
    name: 'Microsoft Design',
    description: '微软设计团队，负责Fluent Design设计系统开发与Windows、Office等产品体验创新',
    url: 'https://www.microsoft.com/design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.microsoft.com/design',
    category: 'design-teams',
    subCategory: 'design-teams-innovation',
    tags: ['微软', 'Fluent Design', '设计系统', '办公软件', '操作系统'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },

  /* =========================================================
   * 设计团队 - 硬件团队 (design-teams-hardware)
   * ========================================================= */
  // 1. Apple Design
  {
    id: 'apple-design',
    name: 'Apple Design',
    description: '苹果设计团队，由乔纳森·艾维领导多年，以简约、优雅的设计理念著称，为全球硬件设计树立标杆',
    url: 'https://www.apple.com/design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.apple.com',
    category: 'design-teams',
    subCategory: 'design-teams-hardware',
    tags: ['苹果', '工业设计', '简约设计', '用户体验', '硬件'],
    isHot: true,
    isFeatured: true,
    rating: 5.0
  },
  // 2. 小米工业设计团队
  {
    id: 'xiaomi-id',
    name: '小米工业设计团队',
    description: '小米科技工业设计团队，专注于智能手机、智能家居等产品的工业设计与用户体验创新',
    url: 'https://www.mi.com/about/design',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mi.com',
    category: 'design-teams',
    subCategory: 'design-teams-hardware',
    tags: ['小米', '工业设计', '智能手机', '智能家居', '用户体验'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  /* =========================================================
   * 设计团队 - 大厂招聘 (design-teams-recruitment)
   * ========================================================= */
  // 1. 字节跳动招聘
  {
    id: 'bytedance-jobs',
    name: '字节跳动招聘官网',
    description: '字节跳动在全球推出了多款有影响力的产品，包括今日头条、抖音、西瓜视频、飞书等。业务覆盖150个国家和地区，旗下产品全球月活跃用户数超19亿',
    url: 'https://jobs.bytedance.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://jobs.bytedance.com',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['字节跳动', '招聘', '设计岗位', '互联网公司', '社招'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. 苹果招聘
  {
    id: 'apple-jobs',
    name: 'Apple招聘',
    description: '苹果公司官方招聘平台，提供全球范围内的设计师、开发者、营销等职位招聘信息',
    url: 'https://www.apple.com/careers/cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.apple.com/careers/cn',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['苹果', '招聘', '设计岗位', '硬件设计', '国际化'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. 华为招聘
  {
    id: 'huawei-jobs',
    name: '华为招聘',
    description: '华为技术有限公司官方招聘平台，提供研发、设计、市场等多领域的工作机会',
    url: 'https://career.huawei.com/reccampportal/portal5/index.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://career.huawei.com/reccampportal/portal5/index.html',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['华为', '招聘', '设计岗位', '硬件设计', '软件设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 4. 探探招聘
  {
    id: 'tantan-jobs',
    name: '探探招聘',
    description: '探探是一个基于大数据智能推荐、全新互动模式的社交App，提供产品设计、用户体验等相关岗位',
    url: 'http://tantanapp.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://tantanapp.com',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['探探', '招聘', '设计岗位', '社交应用', '用户体验'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 5. 古田路9号招聘
  {
    id: 'gtn9-jobs',
    name: '古田路9号招聘',
    description: '国内专业品牌创意平台，以品牌为核心，集创意作品分享、活动招聘发布、广告推广、正版字体素材下载等多元化的交流分享平台',
    url: 'https://www.gtn9.com/hiring_work.aspx',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gtn9.com/hiring_work.aspx',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['古田路9号', '招聘', '设计岗位', '创意', '广告设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 6. 站酷招聘
  {
    id: 'zcool-jobs',
    name: '站酷招聘',
    description: '中国设计师互动平台，深耕设计领域十五年，聚集了1400万设计师、摄影师、插画师、艺术家、创意人',
    url: 'https://www.zcool.com.cn/job/index.do',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.zcool.com.cn/job/index.do',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['站酷', '招聘', '设计岗位', '插画', '平面设计'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 7. 拉勾招聘
  {
    id: 'lagou-jobs',
    name: '拉勾招聘',
    description: '专业的互联网求职招聘网站，致力于提供真实可靠的互联网岗位求职招聘找工作信息，拥有海量的互联网人才储备',
    url: 'https://www.lagou.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.lagou.com',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['拉勾', '招聘', '设计岗位', '互联网', '求职'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 8. 程序员客栈
  {
    id: 'proginn-jobs',
    name: '程序员客栈',
    description: '提供兼职程序员、UI设计兼职，通过程序员兼职，程序员接私活，程序员接单等方式，解决创业公司程序员兼职、软件开发、产品设计等问题',
    url: 'https://www.proginn.com/cat/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.proginn.com/cat',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['程序员客栈', '招聘', '设计岗位', '兼职', '私活'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 9. 腾讯招聘
  {
    id: 'tencent-jobs',
    name: '腾讯招聘',
    description: '腾讯公司官方招聘平台，提供产品、设计、开发等多个领域的岗位机会',
    url: 'https://careers.tencent.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://careers.tencent.com',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['腾讯', '招聘', '设计岗位', '互联网', '游戏设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 10. 百度招聘
  {
    id: 'baidu-jobs',
    name: '百度招聘',
    description: '百度官方招聘平台，诚挚邀请来自社会，校园，实习生，海外的各界精英了解百度，加入百度',
    url: 'https://talent.baidu.com/external/baidu/index.html#/social/2',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://talent.baidu.com/external/baidu/index.html#/social/2',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['百度', '招聘', '设计岗位', '互联网', 'AI设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 11. 阿里招聘
  {
    id: 'alibaba-jobs',
    name: '阿里招聘',
    description: '阿里巴巴集团官方招聘平台，提供电商、金融、云计算等领域的设计岗位',
    url: 'https://talent.alibaba.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://talent.alibaba.com',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['阿里巴巴', '招聘', '设计岗位', '电商', '用户体验'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 12. 京东招聘
  {
    id: 'jd-jobs',
    name: '京东招聘',
    description: '京东集团官方招聘平台，提供电商、物流、金融等领域的设计岗位机会',
    url: 'https://zhaopin.jd.com/home',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://zhaopin.jd.com/home',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['京东', '招聘', '设计岗位', '电商', '用户体验'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 13. 爱奇艺招聘
  {
    id: 'iqiyi-jobs',
    name: '爱奇艺招聘',
    description: '爱奇艺官方招聘平台，获取最新社招、校招信息，提供视频、用户体验等设计岗位',
    url: 'https://careers.iqiyi.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://careers.iqiyi.com',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['爱奇艺', '招聘', '设计岗位', '视频', '用户体验'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 14. 360招聘
  {
    id: '360-jobs',
    name: '360招聘官网',
    description: '360集团官方招聘平台，提供安全、浏览器、人工智能等领域的设计岗位',
    url: 'http://hr.360.cn/hr/list',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=http://hr.360.cn/hr/list',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['360', '招聘', '设计岗位', '安全', '用户体验'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 15. 网易招聘
  {
    id: 'netease-jobs',
    name: '网易社会招聘',
    description: '网易集团官方招聘平台，提供游戏、音乐、电商、教育等领域的设计岗位',
    url: 'https://hr.163.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://hr.163.com',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['网易', '招聘', '设计岗位', '游戏', '用户体验'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 16. 搜狐招聘
  {
    id: 'sohu-jobs',
    name: '搜狐招聘',
    description: '搜狐集团官方招聘平台，提供媒体、视频等领域的设计岗位机会',
    url: 'https://hr.sohu.com',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://hr.sohu.com',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['搜狐', '招聘', '设计岗位', '媒体', '用户体验'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 17. 新浪招聘
  {
    id: 'sina-jobs',
    name: '新浪招聘',
    description: '新浪集团官方招聘平台，提供微博、门户等产品的设计岗位',
    url: 'https://career.sina.com.cn/social-recruitment/sina/43535/#/',
    iconUrl: 'https://88sheji-1304770347.cos.ap-guangzhou.myqcloud.com/wp-content/uploads/2022/06/1656379193-xinlang.webp',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['新浪', '招聘', '设计岗位', '媒体', '用户体验'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 18. 陌陌招聘
  {
    id: 'momo-jobs',
    name: '陌陌招聘',
    description: '陌陌是一款基于地理位置的移动社交工具，提供社交应用设计岗位',
    url: 'https://www.immomo.com/jobs',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.immomo.com/jobs',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['陌陌', '招聘', '设计岗位', '社交应用', '用户体验'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 19. 滴滴招聘
  {
    id: 'didi-jobs',
    name: '滴滴招聘',
    description: '滴滴出行官方招聘平台，全球领先的移动出行平台，提供出行相关产品设计岗位',
    url: 'https://talent.didiglobal.com/social/list/1',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://talent.didiglobal.com/social/list/1',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['滴滴', '招聘', '设计岗位', '出行', '用户体验'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 20. 小米招聘
  {
    id: 'xiaomi-jobs',
    name: '小米招聘',
    description: '小米集团官方招聘平台，提供手机、智能硬件等领域的设计岗位',
    url: 'https://hr.xiaomi.com/job#/jobs?zhineng=5288&page=1&_k=28ayp8',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://hr.xiaomi.com/job#/jobs?zhineng=5288&page=1&_k=28ayp8',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['小米', '招聘', '设计岗位', '硬件', '用户体验'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 21. 美团招聘
  {
    id: 'meituan-jobs',
    name: '美团招聘官网',
    description: '美团点评集团官方招聘平台，提供本地生活服务领域的设计岗位',
    url: 'https://zhaopin.meituan.com/job-list',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://zhaopin.meituan.com/job-list',
    category: 'design-teams',
    subCategory: 'design-teams-recruitment',
    tags: ['美团', '招聘', '设计岗位', '本地生活', '用户体验'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  /* =========================================================
   * 其他内容 - 个人网站 (other-content-personal)
   * ========================================================= */
  // 1. 泡泡的奇迹旅程
  {
    id: 'ipao',
    name: '泡泡的奇迹旅程',
    description: '设计师个人作品展示网站，展现独特创意与视觉效果',
    url: 'https://ipao.tv/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ipao.tv',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '创意设计', '作品集', '用户体验', '界面设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 2. 小老虎设计师网站
  {
    id: 'mrbiscuit',
    name: '小老虎设计师网站',
    description: '优秀设计师个人网站，展示设计作品与创意理念',
    url: 'https://www.mrbiscuit.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.mrbiscuit.design',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '创意设计', '作品集', '设计师', '界面设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 3. Chocoball's Portfolio
  {
    id: 'chocoball',
    name: 'Chocoball的作品集',
    description: '设计师Chocoball的个人作品集网站，展示其设计理念与项目',
    url: 'https://birdball.gitee.io/#',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://birdball.gitee.io/#',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '作品集', '设计师', 'portfolio', '界面设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 4. Rick Waalders
  {
    id: 'rickwaalders',
    name: 'Rick Waalders设计师',
    description: '专注3D视觉和用户界面设计的个人网站，展示应用和网站界面设计作品',
    url: 'https://www.rickwaalders.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.rickwaalders.com',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '3D设计', 'UI设计', '作品集', '视觉设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. 右可设计师网站
  {
    id: 'yorkun',
    name: '右可设计师网站',
    description: '中国设计师右可的个人网站，展示其设计作品与创意思考',
    url: 'https://yorkun.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://yorkun.com',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '中国设计师', '作品集', '用户体验', '界面设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 6. JJ Ying
  {
    id: 'iconmoon',
    name: 'JJ Ying设计师网站',
    description: '知名设计师JJ Ying的个人网站，分享设计见解与作品',
    url: 'https://iconmoon.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://iconmoon.com',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '中国设计师', '作品集', '设计思考', '图标设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 7. Hubo设计师网站
  {
    id: 'achgdesign',
    name: 'Hubo设计师网站',
    description: 'UX设计师和产品设计师Hubo的个人网站，记录工作经验和生活思考',
    url: 'https://achgdesign.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://achgdesign.com',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', 'UX设计', '产品设计', '作品集', '设计思考'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 8. Ding设计师网站
  {
    id: 'ding',
    name: 'Ding设计师网站',
    description: '设计师Ding的个人网站，展示其设计作品与创意项目',
    url: 'https://ding.one/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://ding.one',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '设计师', '作品集', '创意项目', '界面设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 9. 左子祯设计师网站
  {
    id: 'zuozizhen',
    name: '左子祯设计师网站',
    description: '中国设计师左子祯的个人网站，展示其设计作品与项目',
    url: 'https://zuozizhen.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://zuozizhen.com',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '中国设计师', '作品集', '用户体验', '界面设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 10. Huazi设计师网站
  {
    id: 'huazi',
    name: 'Huazi设计师网站',
    description: '设计师Huazi的个人网站，展示设计作品与创意思考',
    url: 'https://www.huazi.space/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.huazi.space',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '设计师', '作品集', '创意思考', '界面设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 11. Alec Babala设计师网站
  {
    id: 'alecbabala',
    name: 'Alec Babala设计师网站',
    description: '设计师Alec Babala的个人网站，展示其作品集与项目',
    url: 'https://www.alecbabala.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.alecbabala.com',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '设计师', '作品集', '国际设计师', '界面设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 12. Yancy Min设计师网站
  {
    id: 'yancymin',
    name: 'Yancy Min设计师网站',
    description: '设计师Yancy Min的个人网站，展示其设计作品与创意项目',
    url: 'https://yancymin.design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://yancymin.design',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '设计师', '作品集', '用户体验', '界面设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 13. Portfolio template
  {
    id: 'webflow-portfolio',
    name: 'Webflow作品集模板',
    description: 'Webflow平台上的HTML作品集网站模板，帮助设计师快速搭建个人网站',
    url: 'https://rabby-s-site.webflow.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://rabby-s-site.webflow.io',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '模板', '作品集', 'Webflow', '网站模板'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 14. GARRYUI
  {
    id: 'garryui',
    name: 'GARRYUI设计师网站',
    description: '创新体验设计师个人网站，专注用户体验设计与产品UI界面设计',
    url: 'https://garryui.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://garryui.cn',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '用户体验', 'UI设计', '交互设计', '中国设计师'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 15. 小川设计师网站
  {
    id: 'xcdesign',
    name: '小川设计师网站',
    description: 'UI设计师小川的个人网站，展示其设计作品与项目',
    url: 'https://xcdesign.gitee.io/#',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://xcdesign.gitee.io/#',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', 'UI设计', '中国设计师', '作品集', '界面设计'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 16. Tomda设计师网站
  {
    id: 'tomda',
    name: 'Tomda设计师网站',
    description: '一个热爱代码的设计师个人网站，展示设计与编程结合的作品',
    url: 'https://www.tomda.top/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.tomda.top',
    category: 'other-content',
    subCategory: 'other-content-personal',
    tags: ['个人网站', '设计师', '前端开发', '作品集', '代码'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },

  /* =========================================================
   * 其他内容 - 炫酷网站 (other-content-cool)
   * ========================================================= */
  // 1. Lusion创意互动体验
  {
    id: 'lusion',
    name: 'Lusion创意互动体验',
    description: '提供惊艳的实时互动体验的创意工作室网站，视觉效果震撼',
    url: 'https://lusion.co',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://lusion.co',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', '互动体验', '创意设计', '视觉效果', '3D设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. HAPE PRIME NFT项目
  {
    id: 'hape',
    name: 'HAPE PRIME NFT项目',
    description: '8K独特NFT展示网站，采用全3D设计风格，由DigimentalLDN设计',
    url: 'https://www.hape.io/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.hape.io',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', 'NFT', '3D设计', '创意设计', '视觉效果'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. Peter Tarka作品集
  {
    id: 'petertarka',
    name: 'Peter Tarka作品集',
    description: '设计师Peter Tarka的个人作品展示网站，视觉效果独特',
    url: 'https://petertarka.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://petertarka.com',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', '作品集', '设计师', '视觉效果', '创意设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 4. Blobmixer 3D动效设计
  {
    id: 'blobmixer',
    name: 'Blobmixer 3D动效设计',
    description: '形状和颜色都可以随意定制调整的超棒的3D动效设计网站',
    url: 'https://blobmixer.14islands.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://blobmixer.14islands.com',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', '3D设计', '动效设计', '交互设计', '视觉效果'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. MIUI 13 官方网站
  {
    id: 'miui',
    name: 'MIUI 13 官方网站',
    description: 'MIUI 13系统官方网站，展示全场景智能互联体验，设计精美',
    url: 'https://home.miui.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://home.miui.com',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', '官方网站', '产品展示', '智能互联', '视觉设计'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 6. BryBry视觉设计
  {
    id: 'brybry',
    name: 'BryBry视觉设计',
    description: '交互创意设计师Bryan James展示14年来视觉作品的平台',
    url: 'https://visuals.brybry.co/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://visuals.brybry.co',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', '视觉设计', '交互设计', '创意设计', '作品集'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  // 7. LV炫酷网站
  {
    id: 'louisvuitton',
    name: 'Louis Vuitton炫酷网站',
    description: 'Louis Vuitton奢侈品牌的炫酷网站，提供独特的视觉体验',
    url: 'https://us.louisvuitton.com/eng-us/stories/louis-200',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://us.louisvuitton.com/eng-us/stories/louis-200',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', '奢侈品', '品牌网站', '视觉设计', '创意设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 8. 拳头游戏官网
  {
    id: 'valorant',
    name: '拳头游戏Valorant官网',
    description: 'Riot Games旗下Valorant游戏官网，视觉设计与交互体验出色',
    url: 'https://playvalorant.com/zh-tw/news/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://playvalorant.com/zh-tw/news',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', '游戏官网', '视觉设计', '交互体验', '创意设计'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 9. NIO蔚来EP9体验
  {
    id: 'nio-ep9',
    name: 'NIO蔚来EP9体验',
    description: '蔚来汽车EP9超跑的沉浸式体验网站，展示智能电动汽车的未来感',
    url: 'https://www.nio.cn/ep9-experience',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.nio.cn/ep9-experience',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', '汽车品牌', '交互体验', '智能科技', '3D展示'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 10. OPPO未来科技
  {
    id: 'oppo-innoday',
    name: 'OPPO未来科技',
    description: 'OPPO创新日活动网站，展示OPPO在科技领域的创新成果与未来愿景',
    url: 'https://www.oppo.com/cn/events/innoday2021/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.oppo.com/cn/events/innoday2021',
    category: 'other-content',
    subCategory: 'other-content-cool',
    tags: ['炫酷网站', '科技品牌', '创新展示', '视觉设计', '交互体验'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  
  /* =========================================================
   * 其他内容 - 毕业作品展 (other-content-graduation)
   * ========================================================= */
  // 1. 2023清华大学美术学院线上毕业展
  {
    id: 'tsinghua-2023',
    name: '2023清华大学美术学院线上毕业展',
    description: '清华大学美术学院2023届毕业生作品线上展示平台',
    url: 'https://exhibition.ad.tsinghua.edu.cn/2023/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://exhibition.ad.tsinghua.edu.cn/2023',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '设计院校', '学生作品', '清华大学', '艺术设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. 2022中央美术学院线上毕业展
  {
    id: 'cafa-2022',
    name: '2022中央美术学院线上毕业展',
    description: '中央美术学院2022届毕业生作品线上展示平台',
    url: 'https://2022art.cafa.edu.cn/pc/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://2022art.cafa.edu.cn/pc',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '设计院校', '学生作品', '中央美院', '艺术设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. 2022清华大学美术学院线上毕业展
  {
    id: 'tsinghua-2022',
    name: '2022清华大学美术学院线上毕业展',
    description: '清华大学美术学院2022届毕业生作品线上展示平台',
    url: 'https://exhibition.ad.tsinghua.edu.cn/2022/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://exhibition.ad.tsinghua.edu.cn/2022',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '设计院校', '学生作品', '清华大学', '艺术设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 4. 美国加州艺术学院2023毕业设计展
  {
    id: 'cca-2023',
    name: '美国加州艺术学院2023毕业设计展',
    description: '美国加州艺术学院2023届本科与研究生毕业设计作品展示',
    url: 'https://portal.cca.edu/showcase/2023/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://portal.cca.edu/showcase/2023',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '国际院校', '学生作品', '加州艺术学院', '设计展示'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 5. 普瑞特艺术学院2023毕业设计展
  {
    id: 'pratt-2023',
    name: '普瑞特艺术学院2023毕业设计展',
    description: '美国普瑞特艺术学院2023届本科与研究生毕业设计作品展示',
    url: 'https://www.pratt.edu/pratt-shows/pratt-shows-2023/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pratt.edu/pratt-shows/pratt-shows-2023',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '国际院校', '学生作品', '普瑞特艺术学院', '设计展示'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 6. 罗德岛设计学院2023研究生毕业作品展
  {
    id: 'risd-2023',
    name: '罗德岛设计学院2023研究生毕业作品展',
    description: '美国罗德岛设计学院2023届研究生毕业设计作品展示',
    url: 'https://involved.risd.edu/event/9078375',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://involved.risd.edu/event/9078375',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '国际院校', '研究生作品', '罗德岛设计学院', '设计展示'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 7. 南加州大学2023毕业作品展
  {
    id: 'usc-2023',
    name: '南加州大学2023毕业作品展',
    description: '美国南加州大学2023届本科与研究生毕业设计作品展示',
    url: 'https://arch.usc.edu/events/2023-expo-exhibition',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://arch.usc.edu/events/2023-expo-exhibition',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '国际院校', '学生作品', '南加州大学', '设计展示'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 8. 哥伦比亚大学2023研究生毕业作品展
  {
    id: 'columbia-2023',
    name: '哥伦比亚大学2023研究生毕业作品展',
    description: '哥伦比亚大学建筑、规划与保护研究生院2023届毕业作品展示',
    url: 'https://www.arch.columbia.edu/eoys-2023',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.arch.columbia.edu/eoys-2023',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '国际院校', '研究生作品', '哥伦比亚大学', '建筑设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 9. 宾夕法尼亚大学2023研究生毕业作品展
  {
    id: 'upenn-2023',
    name: '宾夕法尼亚大学2023研究生毕业作品展',
    description: '宾夕法尼亚大学2023届研究生毕业设计作品展示',
    url: 'https://www.design.upenn.edu/yes2023',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.design.upenn.edu/yes2023',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '国际院校', '研究生作品', '宾夕法尼亚大学', '设计展示'],
    isHot: false,
    isFeatured: false,
    rating: 4.6
  },
  // 10. 广西艺术学院设计学院
  {
    id: 'gxau-design',
    name: '广西艺术学院设计学院',
    description: '广西艺术学院设计学院官方网站，展示学院师生作品与教学成果',
    url: 'https://design.gxau.edu.cn/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://design.gxau.edu.cn',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '设计院校', '院校官网', '广西艺术学院', '设计展示'],
    isHot: false,
    isFeatured: false,
    rating: 4.5
  },
  // 11. 广州美术学院毕业设计
  {
    id: 'gafa-vad',
    name: '广州美术学院毕业设计',
    description: '广州美术学院视觉艺术设计学院毕业生作品展示平台',
    url: 'https://www.gafa-vad.com/2023/pc',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gafa-vad.com/2023/pc',
    category: 'other-content',
    subCategory: 'other-content-graduation',
    tags: ['毕业作品', '设计院校', '学生作品', '广州美术学院', '视觉设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 游戏UI - 游戏界面灵感 (game-ui-inspiration)
   * ========================================================= */
  // 1. Game UI Database
  {
    id: 'game-ui-database',
    name: 'Game UI Database',
    description: '专门收集和展示游戏用户界面设计的资源库，包含各类游戏UI截图和分析',
    url: 'https://www.gameuidatabase.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gameuidatabase.com',
    category: 'game-ui',
    subCategory: 'game-ui-inspiration',
    tags: ['游戏UI', '界面设计', '灵感', '案例', '用户界面'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Behance游戏UI集合
  {
    id: 'behance-game-ui',
    name: 'Behance游戏UI集合',
    description: 'Behance平台上游戏UI设计作品的集合，展示全球设计师的游戏界面设计案例',
    url: 'https://www.behance.net/search/projects?search=game%20ui',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.behance.net',
    category: 'game-ui',
    subCategory: 'game-ui-inspiration',
    tags: ['游戏UI', 'Behance', '设计案例', '界面设计', '作品集'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 3. ArtStation游戏UI
  {
    id: 'artstation-game-ui',
    name: 'ArtStation游戏UI',
    description: 'ArtStation平台上的游戏UI设计作品展示，包含众多专业游戏UI设计师的作品',
    url: 'https://www.artstation.com/search?sort_by=relevance&query=game%20ui',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.artstation.com',
    category: 'game-ui',
    subCategory: 'game-ui-inspiration',
    tags: ['游戏UI', 'ArtStation', '设计作品', '界面设计', '游戏艺术'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 4. 站酷游戏UI专区
  {
    id: 'zcool-game-ui',
    name: '站酷游戏UI专区',
    description: '站酷平台上中国游戏UI设计师的优秀作品集合，展示国内游戏界面设计趋势和案例',
    url: 'https://www.zcool.com.cn/search/content?word=游戏UI',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.zcool.com.cn',
    category: 'game-ui',
    subCategory: 'game-ui-inspiration',
    tags: ['游戏UI', '站酷', '中国设计', '界面设计', '游戏艺术'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 5. 游戏蛮牛
  {
    id: 'manew-game-ui',
    name: '游戏蛮牛',
    description: '国内专业的游戏开发者社区，包含大量游戏UI设计教程、案例和资源',
    url: 'https://www.manew.com/search?searchword=游戏UI',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.manew.com',
    category: 'game-ui',
    subCategory: 'game-ui-inspiration',
    tags: ['游戏UI', '游戏开发', '中国游戏', '设计教程', '资源分享'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  /* =========================================================
   * 游戏UI - 游戏素材 (game-ui-resources)
   * ========================================================= */
  // 1. GameDev Market
  {
    id: 'gamedev-market',
    name: 'GameDev Market',
    description: '游戏开发资源市场，提供高质量的游戏UI素材、图标、按钮和界面元素',
    url: 'https://www.gamedevmarket.net/category/2d/gui/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gamedevmarket.net',
    category: 'game-ui',
    subCategory: 'game-ui-resources',
    tags: ['游戏素材', 'UI元素', '游戏开发', '资源市场', '2D素材'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. Craftpix游戏UI资源
  {
    id: 'craftpix-game-ui',
    name: 'Craftpix游戏UI资源',
    description: '提供各种风格的游戏界面素材、UI包和图形资源，包括免费和付费内容',
    url: 'https://craftpix.net/product-category/gui/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://craftpix.net',
    category: 'game-ui',
    subCategory: 'game-ui-resources',
    tags: ['游戏素材', 'UI包', '图形资源', '界面元素', '游戏资源'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 3. Unity Asset Store UI
  {
    id: 'unity-asset-store-ui',
    name: 'Unity Asset Store UI',
    description: 'Unity资源商店中的游戏UI资源集合，提供各种风格和类型的游戏界面素材',
    url: 'https://assetstore.unity.com/2d/gui',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://assetstore.unity.com',
    category: 'game-ui',
    subCategory: 'game-ui-resources',
    tags: ['Unity', '游戏素材', 'Asset Store', 'UI资源', '游戏开发'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 4. 网易游戏UI素材站
  {
    id: 'netease-game-ui',
    name: '网易游戏UI素材站',
    description: '网易游戏官方提供的UI设计资源库，包含多种游戏界面元素和设计模板',
    url: 'https://uikit.163.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://uikit.163.com',
    category: 'game-ui',
    subCategory: 'game-ui-resources',
    tags: ['网易', '游戏素材', '中国游戏', 'UI资源', 'UI元素'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 5. 素材中国游戏UI区
  {
    id: 'sc-cn-game-ui',
    name: '素材中国游戏UI区',
    description: '中国专业设计素材网站，提供丰富的游戏UI界面元素、按钮、图标等设计资源',
    url: 'https://www.sc.cn/search?keyword=游戏界面',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.sc.cn',
    category: 'game-ui',
    subCategory: 'game-ui-resources',
    tags: ['素材中国', '游戏UI', '设计素材', '中国资源', 'UI元素'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  /* =========================================================
   * 游戏UI - 游戏UI工具 (game-ui-tools)
   * ========================================================= */
  // 1. Unity UI系统
  {
    id: 'unity-ui-system',
    name: 'Unity UI系统',
    description: 'Unity游戏引擎内置的UI系统，用于创建游戏界面、HUD和菜单',
    url: 'https://docs.unity3d.com/Manual/UISystem.html',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://docs.unity3d.com',
    category: 'game-ui',
    subCategory: 'game-ui-tools',
    tags: ['Unity', 'UI系统', '游戏引擎', '界面开发', '游戏设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Unreal Engine UMG
  {
    id: 'unreal-engine-umg',
    name: 'Unreal Engine UMG',
    description: '虚幻引擎的UMG (Unreal Motion Graphics) UI设计器，用于创建游戏用户界面',
    url: 'https://docs.unrealengine.com/5.1/en-US/umg-ui-designer-for-unreal-engine/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://docs.unrealengine.com',
    category: 'game-ui',
    subCategory: 'game-ui-tools',
    tags: ['虚幻引擎', 'UMG', 'UI设计器', '游戏开发', '界面设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. Coherent Labs
  {
    id: 'coherent-labs',
    name: 'Coherent Labs',
    description: '专业的游戏UI中间件解决方案，支持HTML/CSS技术创建高性能游戏界面',
    url: 'https://coherent-labs.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://coherent-labs.com',
    category: 'game-ui',
    subCategory: 'game-ui-tools',
    tags: ['游戏UI', '中间件', 'HTML/CSS', '游戏开发', '界面技术'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 4. 腾讯GPGPU
  {
    id: 'tencent-gpgpu',
    name: '腾讯GPGPU',
    description: '腾讯开发的游戏UI框架，专为高性能游戏界面设计，支持多平台部署',
    url: 'https://gpgpu.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://qq.com',
    category: 'game-ui',
    subCategory: 'game-ui-tools',
    tags: ['腾讯', '游戏UI', '中国技术', 'UI框架', '游戏开发'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. 完美世界UI工具链
  {
    id: 'pwrd-ui-tools',
    name: '完美世界UI工具链',
    description: '完美世界游戏开发的UI工具链，提供游戏界面设计和实现的整套解决方案',
    url: 'https://www.pwrdengine.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.pwrdengine.com',
    category: 'game-ui',
    subCategory: 'game-ui-tools',
    tags: ['完美世界', '游戏UI', '工具链', '中国游戏', 'UI设计'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  /* =========================================================
   * 游戏UI - 游戏设计规范 (game-ui-guidelines)
   * ========================================================= */
  // 1. Game UI Design Guidelines
  {
    id: 'game-ui-design-guidelines',
    name: 'Game UI Design Guidelines',
    description: '关于游戏UI设计的最佳实践、原则和指南的集合，包含可用性和交互设计建议',
    url: 'https://www.gamedeveloper.com/design/user-interface-design-in-video-games',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.gamedeveloper.com',
    category: 'game-ui',
    subCategory: 'game-ui-guidelines',
    tags: ['游戏UI', '设计指南', '最佳实践', '交互设计', '可用性'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. Xbox UI Guidelines
  {
    id: 'xbox-ui-guidelines',
    name: 'Xbox UI Guidelines',
    description: '微软Xbox平台的游戏UI设计指南，提供设计Xbox游戏界面的规范和建议',
    url: 'https://docs.microsoft.com/en-us/windows/uwp/gaming/indexappexperience',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://docs.microsoft.com',
    category: 'game-ui',
    subCategory: 'game-ui-guidelines',
    tags: ['Xbox', '游戏UI', '设计指南', '微软', '平台规范'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 3. PlayStation UI Guidelines
  {
    id: 'playstation-ui-guidelines',
    name: 'PlayStation UI Guidelines',
    description: '索尼PlayStation平台的游戏UI设计指南，提供PS游戏界面设计的标准和规范',
    url: 'https://partners.playstation.net/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://partners.playstation.net',
    category: 'game-ui',
    subCategory: 'game-ui-guidelines',
    tags: ['PlayStation', '游戏UI', '设计指南', '索尼', '平台规范'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 4. 米哈游游戏UI设计规范
  {
    id: 'mihoyo-ui-guidelines',
    name: '米哈游游戏UI规范',
    description: '《原神》开发商米哈游的游戏UI设计规范，展示了国内顶级游戏公司的界面设计思路',
    url: 'https://ys.mihoyo.com/main/design',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://mihoyo.com',
    category: 'game-ui',
    subCategory: 'game-ui-guidelines',
    tags: ['米哈游', '原神', '中国游戏', 'UI规范', '游戏设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 5. 网易游戏UI设计标准
  {
    id: 'netease-game-ui-standards',
    name: '网易游戏UI设计标准',
    description: '网易游戏的UI设计标准和规范，提供了国内知名游戏开发商的界面设计方法论',
    url: 'https://game.163.com/design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://163.com',
    category: 'game-ui',
    subCategory: 'game-ui-guidelines',
    tags: ['网易', '游戏UI', '设计标准', '中国游戏', '界面规范'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },

  /* =========================================================
   * 元宇宙与VR/AR - 空间界面灵感 (metaverse-vrar-inspiration)
   * ========================================================= */
  // 1. Spatial Interface Inspiration
  {
    id: 'spatial-interface-inspiration',
    name: '空间界面灵感集合',
    description: '收集和展示VR/AR空间界面设计灵感的资源平台，包含各类空间UI案例',
    url: 'https://www.awwwards.com/websites/virtual-reality/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.awwwards.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-inspiration',
    tags: ['VR/AR', '空间界面', '设计灵感', '虚拟现实', '增强现实'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. Sketchfab VR设计
  {
    id: 'sketchfab-vr',
    name: 'Sketchfab VR设计',
    description: 'Sketchfab平台上的VR设计作品集合，提供各类3D模型和VR界面设计灵感',
    url: 'https://sketchfab.com/tags/vr',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://sketchfab.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-inspiration',
    tags: ['Sketchfab', 'VR设计', '3D模型', '界面灵感', '虚拟现实'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 3. Behance AR/VR设计
  {
    id: 'behance-arvr',
    name: 'Behance AR/VR设计',
    description: 'Behance平台上的AR/VR设计作品集合，展示空间界面设计和交互案例',
    url: 'https://www.behance.net/search/projects?search=ar%20vr%20ui',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.behance.net',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-inspiration',
    tags: ['Behance', 'AR设计', 'VR设计', '空间界面', '设计案例'],
    isHot: false,
    isFeatured: true,
    rating: 4.8
  },
  // 4. 百度VR浏览器
  {
    id: 'baidu-vr',
    name: '百度VR浏览器',
    description: '百度开发的VR浏览器，展示了中国VR内容和界面设计的典型案例',
    url: 'https://vr.baidu.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://vr.baidu.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-inspiration',
    tags: ['百度', 'VR浏览器', '中国VR', '空间界面', 'VR体验'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  // 5. 网易星球
  {
    id: 'netease-planet',
    name: '网易星球',
    description: '网易推出的元宇宙社交平台，展示了中国元宇宙空间设计和交互的创新案例',
    url: 'https://star.163.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://star.163.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-inspiration',
    tags: ['网易', '元宇宙', '虚拟空间', '中国设计', '社交平台'],
    isHot: true,
    isFeatured: false,
    rating: 4.6
  },
  
  /* =========================================================
   * 元宇宙与VR/AR - 空间设计工具 (metaverse-vrar-tools)
   * ========================================================= */
  // 1. Unity XR平台
  {
    id: 'unity-xr',
    name: 'Unity XR平台',
    description: 'Unity引擎的XR平台，用于开发VR、AR和MR应用的完整工具集',
    url: 'https://unity.com/solutions/ar-and-vr-games',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://unity.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-tools',
    tags: ['Unity', 'XR', 'VR开发', 'AR开发', '游戏引擎'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Unreal Engine VR开发
  {
    id: 'unreal-vr',
    name: 'Unreal Engine VR开发',
    description: '虚幻引擎的VR开发工具，提供高质量VR内容创建的完整解决方案',
    url: 'https://docs.unrealengine.com/5.1/en-US/vr-development-in-unreal-engine/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://docs.unrealengine.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-tools',
    tags: ['虚幻引擎', 'VR开发', '游戏引擎', '内容创建', '开发工具'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 3. Meta Spark Studio
  {
    id: 'meta-spark-studio',
    name: 'Meta Spark Studio',
    description: 'Meta公司的AR创作平台，用于设计和开发AR效果和体验',
    url: 'https://spark.meta.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://spark.meta.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-tools',
    tags: ['Meta', 'AR开发', 'Spark Studio', '效果创作', '增强现实'],
    isHot: true,
    isFeatured: false,
    rating: 4.7
  },
  // 4. 腾讯TAV
  {
    id: 'tencent-tav',
    name: '腾讯TAV引擎',
    description: '腾讯开发的AR/VR内容创作引擎，专为中国开发者打造的沉浸式体验开发平台',
    url: 'https://tav.qq.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://tav.qq.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-tools',
    tags: ['腾讯', 'AR/VR', '开发引擎', '中国技术', '内容创作'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. 百度VR开发平台
  {
    id: 'baidu-vr-dev',
    name: '百度VR开发平台',
    description: '百度提供的VR内容开发工具和平台，支持中国开发者创建VR应用和体验',
    url: 'https://vr.baidu.com/vrdev/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://vr.baidu.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-tools',
    tags: ['百度', 'VR开发', '中国平台', '内容创作', '开发工具'],
    isHot: false,
    isFeatured: true,
    rating: 4.6
  },
  
  /* =========================================================
   * 元宇宙与VR/AR - 3D资源 (metaverse-vrar-resources)
   * ========================================================= */
  // 1. CGTrader
  {
    id: 'cgtrader',
    name: 'CGTrader',
    description: '专业的3D模型市场，提供VR/AR项目所需的各类3D资源',
    url: 'https://www.cgtrader.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.cgtrader.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-resources',
    tags: ['3D模型', '资源市场', 'VR资源', 'AR资源', '3D资产'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 2. Sketchfab
  {
    id: 'sketchfab',
    name: 'Sketchfab',
    description: '3D模型发现、发布和分享平台，提供各类VR/AR项目可用的3D资源',
    url: 'https://sketchfab.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://sketchfab.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-resources',
    tags: ['3D模型', '资源平台', 'VR/AR', '3D分享', '模型库'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 3. TurboSquid
  {
    id: 'turbosquid',
    name: 'TurboSquid',
    description: '专业的3D模型市场，提供高质量的3D资源用于VR/AR和元宇宙项目',
    url: 'https://www.turbosquid.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.turbosquid.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-resources',
    tags: ['3D模型', '资源市场', '3D资产', 'VR内容', '元宇宙'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 4. 灵犀互动3D资源
  {
    id: 'lingxi-3d',
    name: '灵犀互动3D资源',
    description: '中国领先的3D模型资源平台，提供各类VR/AR和元宇宙项目所需的3D素材',
    url: 'https://www.lingxi3d.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.lingxi3d.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-resources',
    tags: ['灵犀互动', '3D资源', '中国平台', 'VR素材', '元宇宙内容'],
    isHot: true,
    isFeatured: true,
    rating: 4.6
  },
  // 5. 新增：3D溜溜网
  {
    id: '3d66',
    name: '3D溜溜网',
    description: '中国专业的3D模型下载平台，提供海量VR/AR项目素材和3D资源',
    url: 'https://www.3d66.com/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.3d66.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-resources',
    tags: ['3D模型', '素材下载', '中国平台', 'VR资源', '3D设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.7
  },
  
  /* =========================================================
   * 元宇宙与VR/AR - 空间设计规范 (metaverse-vrar-guidelines)
   * ========================================================= */
  // 1. Meta Reality Labs设计指南
  {
    id: 'meta-reality-guidelines',
    name: 'Meta Reality Labs设计指南',
    description: 'Meta公司的VR/AR设计指南，提供空间界面设计的最佳实践和规范',
    url: 'https://developer.oculus.com/design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.oculus.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-guidelines',
    tags: ['Meta', 'VR设计', 'AR设计', '设计规范', '空间界面'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  // 2. Google AR设计指南
  {
    id: 'google-ar-guidelines',
    name: 'Google AR设计指南',
    description: 'Google提供的AR设计指南，包含AR体验设计的原则、模式和最佳实践',
    url: 'https://designguidelines.withgoogle.com/ar-design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://designguidelines.withgoogle.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-guidelines',
    tags: ['Google', 'AR设计', '设计指南', '增强现实', '交互模式'],
    isHot: true,
    isFeatured: false,
    rating: 4.8
  },
  // 3. Microsoft混合现实设计
  {
    id: 'microsoft-mixed-reality',
    name: 'Microsoft混合现实设计',
    description: '微软的混合现实设计指南，提供HoloLens和Windows Mixed Reality的设计规范',
    url: 'https://docs.microsoft.com/en-us/windows/mixed-reality/design/',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://docs.microsoft.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-guidelines',
    tags: ['微软', '混合现实', 'HoloLens', '设计指南', '空间交互'],
    isHot: false,
    isFeatured: true,
    rating: 4.7
  },
  // 4. 百度VR设计规范
  {
    id: 'baidu-vr-guidelines',
    name: '百度VR设计规范',
    description: '百度VR团队发布的VR产品设计规范，提供VR界面和交互设计的中国本土最佳实践',
    url: 'https://vr.baidu.com/dev/design/guide',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://baidu.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-guidelines',
    tags: ['百度', 'VR设计', '中国规范', '设计指南', '虚拟现实'],
    isHot: true,
    isFeatured: true,
    rating: 4.8
  },
  // 5. 新增：Apple Vision Pro设计指南
  {
    id: 'apple-vision-pro-guidelines',
    name: 'Apple Vision Pro设计指南',
    description: 'Apple官方的空间计算设计指南，为Vision Pro应用开发者提供全面的设计规范和最佳实践',
    url: 'https://developer.apple.com/design/human-interface-guidelines/spatial-computing',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://developer.apple.com',
    category: 'metaverse-vrar',
    subCategory: 'metaverse-vrar-guidelines',
    tags: ['Apple', 'Vision Pro', '空间计算', '设计指南', 'MR设计'],
    isHot: true,
    isFeatured: true,
    rating: 4.9
  },
  

];

// 子分类定义映射
export const uiuxSubCategories = {};
uiuxCategories.forEach(category => {
  if (category.subcategories) {
    uiuxSubCategories[category.id] = category.subcategories;
  }
});

/**
 * 根据分类获取工具
 */
export const getToolsByCategory = (categoryId) => {
  return uiuxTools.filter(tool => tool.category === categoryId);
};

/**
 * 根据子分类获取工具
 */
export const getToolsBySubCategory = (subCategoryId, limit = 0) => {
  const filtered = uiuxTools
    .filter(tool => tool.subCategory === subCategoryId)
    .sort((a, b) => b.rating - a.rating);
  
  return limit > 0 ? filtered.slice(0, limit) : filtered;
};

/**
 * 获取热门工具
 */
export const getHotTools = (limit = 10) => {
  return uiuxTools
    .filter(tool => tool.isHot)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

/**
 * 获取推荐工具
 */
export const getFeaturedTools = (limit = 10) => {
  return uiuxTools
    .filter(tool => tool.isFeatured)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

/**
 * 搜索工具
 */
export const searchTools = (keyword) => {
  const searchTerm = keyword.toLowerCase();
  return uiuxTools.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm) ||
    tool.description.toLowerCase().includes(searchTerm) ||
    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

/**
 * 获取指定分类的所有子分类
 */
export const getSubCategoriesByCategory = (categoryId) => {
  return uiuxSubCategories[categoryId] || [];
};

/**
 * 获取子分类统计信息
 */
export const getSubCategoryStats = (categoryId) => {
  const subCategories = getSubCategoriesByCategory(categoryId);
  const stats = {};
  
  subCategories.forEach(subCat => {
    const toolsCount = uiuxTools.filter(tool => tool.subCategory === subCat.id).length;
    stats[subCat.id] = {
      ...subCat,
      count: toolsCount
    };
  });
  
  return stats;
};

// 导出所有工具数据
export const allUIUXTools = uiuxTools;

export default {
  uiuxCategories,
  uiuxTools,
  uiuxSubCategories,
  getToolsByCategory,
  getToolsBySubCategory,
  getHotTools,
  getFeaturedTools,
  searchTools,
  getSubCategoriesByCategory,
  getSubCategoryStats,
  allUIUXTools
}; 