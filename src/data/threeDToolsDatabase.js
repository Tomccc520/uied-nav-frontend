/**
 * @file threeDToolsDatabase.js
 * @description 3D设计工具数据库 - 包含3D建模、渲染、VR/AR等工具数据
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// 3D设计工具分类定义
export const threeDCategories = [
  {
    id: 'threed-software',
    name: '三维软件',
    iconUrl: '3d',
    color: '#6f42c1',
    description: '专业3D建模、渲染、动画软件',
    subcategories: [
      { id: 'threed-software-modeling', name: '建模软件' },
      { id: 'threed-software-rendering', name: '渲染软件' },
      { id: 'threed-software-animation', name: '动画软件' },
      { id: 'threed-software-cad', name: 'CAD软件' }
    ]
  },
  {
    id: 'threed-models',
    name: '3D模型',
    iconUrl: 'material',
    color: '#e74c3c',
    description: '3D模型资源和素材库',
    subcategories: [
      { id: 'threed-models-free', name: '免费模型' },
      { id: 'threed-models-paid', name: '付费模型' },
      { id: 'threed-models-game', name: '游戏模型' },
      { id: 'threed-models-arch', name: '建筑模型' }
    ]
  },
  {
    id: 'cloud-rendering',
    name: '云渲染',
    iconUrl: 'system',
    color: '#f39c12',
    description: '云端渲染服务和渲染农场',
    subcategories: [
      { id: 'cloud-rendering-service', name: '云渲染服务' },
      { id: 'cloud-rendering-farm', name: '渲染农场' },
      { id: 'cloud-rendering-gpu', name: 'GPU云渲染' },
      { id: 'cloud-rendering-ai', name: 'AI云渲染' }
    ]
  },
  {
    id: 'texture-materials',
    name: '贴图网站',
    iconUrl: 'photo',
    color: '#27ae60',
    description: '材质贴图和纹理资源',
    subcategories: [
      { id: 'texture-materials-pbr', name: 'PBR贴图' },
      { id: 'texture-materials-hdri', name: 'HDRI贴图' },
      { id: 'texture-materials-seamless', name: '无缝贴图' },
      { id: 'texture-materials-procedural', name: '程序贴图' }
    ]
  },
  {
    id: 'threed-community',
    name: '交流社区',
    iconUrl: 'community',
    color: '#9b59b6',
    description: '3D设计社区和学习平台',
    subcategories: [
      { id: 'threed-community-forums', name: '论坛社区' },
      { id: 'threed-community-learning', name: '学习社区' },
      { id: 'threed-community-portfolio', name: '作品展示' },
      { id: 'threed-community-collaboration', name: '协作平台' }
    ]
  },
  {
    id: 'vr-ar-dev',
    name: 'VR/AR开发',
    iconUrl: 'metaverse',
    color: '#e67e22',
    description: '虚拟现实和增强现实开发工具',
    subcategories: [
      { id: 'vr-ar-engines', name: 'VR/AR引擎' },
      { id: 'vr-ar-content', name: '内容制作' },
      { id: 'vr-ar-platforms', name: '发布平台' },
      { id: 'vr-ar-tools', name: '开发工具' }
    ]
  },
  {
    id: 'game-engines',
    name: '游戏引擎',
    iconUrl: 'gameui',
    color: '#3498db',
    description: '游戏开发引擎和相关工具',
    subcategories: [
      { id: 'game-engines-3d', name: '3D游戏引擎' },
      { id: 'game-engines-2d', name: '2D游戏引擎' },
      { id: 'game-engines-mobile', name: '移动游戏引擎' },
      { id: 'game-engines-tools', name: '游戏开发工具' }
    ]
  },
  {
    id: 'threed-printing',
    name: '3D打印',
    iconUrl: 'digital',
    color: '#16a085',
    description: '3D打印软件和服务',
    subcategories: [
      { id: 'threed-printing-slicers', name: '切片软件' },
      { id: 'threed-printing-design', name: '打印设计' },
      { id: 'threed-printing-services', name: '打印服务' },
      { id: 'threed-printing-materials', name: '打印材料' }
    ]
  },
  {
    id: 'digital-sculpting',
    name: '数字雕刻',
    iconUrl: 'art',
    color: '#8e44ad',
    description: '数字雕刻和造型工具',
    subcategories: [
      { id: 'digital-sculpting-character', name: '角色雕刻' },
      { id: 'digital-sculpting-environment', name: '环境雕刻' },
      { id: 'digital-sculpting-hard-surface', name: '硬表面雕刻' },
      { id: 'digital-sculpting-retopology', name: '重拓扑工具' }
    ]
  },
  {
    id: 'motion-capture',
    name: '动作捕捉',
    iconUrl: 'animation',
    color: '#d35400',
    description: '动作捕捉和动画工具',
    subcategories: [
      { id: 'motion-capture-hardware', name: '捕捉设备' },
      { id: 'motion-capture-software', name: '捕捉软件' },
      { id: 'motion-capture-ai', name: 'AI动捕' },
      { id: 'motion-capture-cleanup', name: '动画清理' }
    ]
  },
  {
    id: 'arch-visualization',
    name: '建筑可视化',
    iconUrl: 'visualization',
    color: '#c0392b',
    description: '建筑和室内设计可视化工具',
    subcategories: [
      { id: 'arch-visualization-rendering', name: '建筑渲染' },
      { id: 'arch-visualization-realtime', name: '实时可视化' },
      { id: 'arch-visualization-vr', name: 'VR建筑体验' },
      { id: 'arch-visualization-lighting', name: '照明设计' }
    ]
  },
  {
    id: 'ai-models',
    name: 'AI模型',
    iconUrl: 'ai',
    color: '#ff6b6b',
    description: 'AI驱动的3D模型生成和处理工具',
    subcategories: [
      { id: 'ai-models-generation', name: '3D模型生成' },
      { id: 'ai-models-optimization', name: '模型优化' },
      { id: 'ai-models-animation', name: 'AI动画' },
      { id: 'ai-models-texturing', name: 'AI贴图' }
    ]
  }
];

// 3D工具数据
export const allThreeDTools = [
  // 三维软件 - 建模软件
  {
    id: 'blender',
    name: 'Blender',
    description: '免费开源的3D创作套件，支持建模、动画、渲染、后期制作',
    url: 'https://www.blender.org/',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['3D建模', '动画', '渲染', '开源', '免费'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'maya',
    name: 'Maya',
    description: 'Autodesk专业级3D建模、动画、仿真和渲染软件',
    url: 'https://www.autodesk.com/products/maya/',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['3D建模', '动画', '专业软件', 'Autodesk'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3ds-max',
    name: '3ds Max',
    description: 'Autodesk专业3D建模、动画和渲染软件',
    url: 'https://www.autodesk.com/products/3ds-max/',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['3D建模', '渲染', '建筑可视化', 'Autodesk'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'cinema4d',
    name: 'Cinema 4D',
    description: 'Maxon专业3D建模、动画和渲染软件',
    url: 'https://www.maxon.net/cinema-4d',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['3D建模', '动画', '运动图形', 'Maxon'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'sketchup',
    name: 'SketchUp',
    description: '易学易用的3D建模软件，广泛应用于建筑和室内设计',
    url: 'https://www.sketchup.com/',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['3D建模', '建筑设计', '室内设计', '易用'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'modo',
    name: 'Modo',
    description: '强大的3D建模、雕刻、渲染和动画软件',
    url: 'https://www.foundry.com/products/modo',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['3D建模', '雕刻', '渲染', 'Foundry'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'houdini',
    name: 'Houdini',
    description: 'SideFX制作的程序化3D建模和特效软件',
    url: 'https://www.sidefx.com/',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['程序化建模', '特效', 'VFX', 'SideFX'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'lightwave',
    name: 'LightWave 3D',
    description: '完整的3D建模、渲染和动画解决方案',
    url: 'https://www.lightwave3d.com/',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['3D建模', '渲染', '动画', '完整解决方案'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'autocad',
    name: 'AutoCAD',
    description: 'Autodesk专业CAD设计软件',
    url: 'https://www.autodesk.com/products/autocad/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['CAD', 'Autodesk', '机械设计', '建筑设计'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'solidworks',
    name: 'SolidWorks',
    description: '专业3D CAD设计软件',
    url: 'https://www.solidworks.com/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['CAD', '机械设计', '产品设计', '3D建模'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'fusion360',
    name: 'Fusion 360',
    description: 'Autodesk云端CAD/CAM/CAE软件',
    url: 'https://www.autodesk.com/products/fusion-360/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['CAD', '云端', '协作', 'CAM', 'CAE'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  
  // 三维软件 - 渲染软件
  {
    id: 'vray',
    name: 'V-Ray',
    description: '业界领先的渲染引擎，提供照片级真实感渲染',
    url: 'https://www.chaosgroup.com/vray',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['渲染', '照片级', '专业', 'GPU渲染'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'octane',
    name: 'Octane Render',
    description: '基于GPU的无偏差渲染器，速度快质量高',
    url: 'https://home.otoy.com/render/octane-render/',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['GPU渲染', '实时渲染', '高质量', '无偏差'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'arnold',
    name: 'Arnold',
    description: 'Autodesk Arnold高质量渲染引擎',
    url: 'https://www.autodesk.com/products/arnold/',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['渲染', '电影级', 'Autodesk', '蒙特卡洛'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'redshift',
    name: 'Redshift',
    description: 'Maxon高速GPU渲染引擎',
    url: 'https://www.maxon.net/redshift',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['GPU渲染', 'Maxon', '高速', '有偏差'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'lumion',
    name: 'Lumion',
    description: '建筑可视化和实时渲染软件',
    url: 'https://lumion.com/',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['建筑可视化', '实时渲染', '景观设计'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 3D模型资源
  {
    id: 'turbosquid',
    name: 'TurboSquid',
    description: '全球最大的3D模型市场',
    url: 'https://www.turbosquid.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['3D模型', '市场', '付费', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cgtrader',
    name: 'CGTrader',
    description: '3D模型和VR/AR资产市场',
    url: 'https://www.cgtrader.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['3D模型', 'VR/AR', '市场', '资产'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sketchfab',
    name: 'Sketchfab',
    description: '3D模型展示和下载平台',
    url: 'https://sketchfab.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['3D模型', '展示', '免费', '平台'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'free3d',
    name: 'Free3D',
    description: '免费3D模型下载网站',
    url: 'https://free3d.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['3D模型', '免费', '下载', '资源'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'opengameart',
    name: 'OpenGameArt',
    description: '免费游戏美术资源',
    url: 'https://opengameart.org/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['游戏资源', '免费', '开源', '美术'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'archmodels',
    name: 'Archmodels',
    description: '专业建筑3D模型库',
    url: 'https://www.evermotion.org/shop/archmodels',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['建筑模型', '专业', '付费', 'Evermotion'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 云渲染服务
  {
    id: 'rebusfarm',
    name: 'RebusFarm',
    description: '专业云渲染服务',
    url: 'https://www.rebusfarm.net/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-service',
    tags: ['云渲染', '渲染农场', '专业', '服务'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ranch-computing',
    name: 'Ranch Computing',
    description: '法国专业渲染农场',
    url: 'https://www.ranchcomputing.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['渲染农场', '专业', '法国', '高质量'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'concierge-render',
    name: 'Concierge Render',
    description: '快速GPU云渲染服务',
    url: 'https://conciergerender.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['GPU渲染', '云渲染', '快速', '服务'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'renderstreet',
    name: 'RenderStreet',
    description: 'Blender云渲染服务',
    url: 'https://renderstreet.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-service',
    tags: ['Blender', '云渲染', '服务', '专业'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 贴图材质资源
  {
    id: 'substance3d',
    name: 'Substance 3D',
    description: 'Adobe 3D材质和纹理工具套件',
    url: 'https://www.adobe.com/products/substance3d/',
    category: 'texture-materials',
    subcategory: 'texture-materials-procedural',
    tags: ['材质', '纹理', 'Adobe', '程序化'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'poliigon',
    name: 'Poliigon',
    description: '高质量PBR材质和贴图库',
    url: 'https://www.poliigon.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['PBR', '材质', '贴图', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'hdri-haven',
    name: 'HDRI Haven',
    description: '免费高质量HDRI环境贴图',
    url: 'https://hdrihaven.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-hdri',
    tags: ['HDRI', '环境贴图', '免费', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cc0textures',
    name: 'CC0 Textures',
    description: '免费无缝贴图资源',
    url: 'https://cc0textures.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-seamless',
    tags: ['无缝贴图', '免费', 'CC0', '资源'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'textures-com',
    name: 'Textures.com',
    description: '大型纹理和贴图资源库',
    url: 'https://www.textures.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-seamless',
    tags: ['纹理', '贴图', '资源库', '付费'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 3D社区和交流
  {
    id: 'polycount',
    name: 'Polycount',
    description: '3D艺术家专业论坛社区',
    url: 'https://polycount.com/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['论坛', '3D艺术', '专业', '社区'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'artstation',
    name: 'ArtStation',
    description: '数字艺术作品展示平台',
    url: 'https://www.artstation.com/',
    category: 'threed-community',
    subcategory: 'threed-community-portfolio',
    tags: ['作品展示', '数字艺术', '平台', '专业'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'blender-artists',
    name: 'Blender Artists',
    description: 'Blender官方社区论坛',
    url: 'https://blenderartists.org/',
    category: 'threed-community',
    subcategory: 'threed-community-learning',
    tags: ['Blender', '学习', '社区', '论坛'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'cgsociety',
    name: 'CGSociety',
    description: '数字艺术专业社区',
    url: 'https://cgsociety.org/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['数字艺术', '社区', '专业', '论坛'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'behance-3d',
    name: 'Behance 3D',
    description: 'Adobe Behance 3D作品展示',
    url: 'https://www.behance.net/galleries/3d-art',
    category: 'threed-community',
    subcategory: 'threed-community-portfolio',
    tags: ['作品展示', '3D艺术', 'Behance', 'Adobe'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // VR/AR开发工具
  {
    id: 'unity-vr',
    name: 'Unity 3D',
    description: '跨平台游戏引擎，强大的VR/AR开发支持',
    url: 'https://unity.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-engines',
    tags: ['游戏引擎', 'VR', 'AR', '跨平台', '实时渲染'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'unreal-engine',
    name: 'Unreal Engine',
    description: 'Epic Games开发的高端游戏引擎，VR/AR开发首选',
    url: 'https://www.unrealengine.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-engines',
    tags: ['游戏引擎', '高端', '实时渲染', 'Epic Games', 'VR', 'AR'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'twinmotion',
    name: 'Twinmotion',
    description: 'Epic Games的实时可视化软件，支持VR和AR体验',
    url: 'https://www.twinmotion.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-content',
    tags: ['实时可视化', 'VR', 'AR', 'Epic Games', '建筑'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'a-frame',
    name: 'A-Frame',
    description: '用于构建虚拟现实体验的Web框架',
    url: 'https://aframe.io/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-tools',
    tags: ['Web VR', '开源', '框架', 'WebXR'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'vuforia',
    name: 'Vuforia',
    description: 'PTC的专业增强现实开发平台',
    url: 'https://www.ptc.com/en/products/vuforia',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-tools',
    tags: ['AR开发', 'PTC', '增强现实', '平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'oculus-platform',
    name: 'Meta Quest Platform',
    description: 'Meta Quest VR应用发布和分发平台',
    url: 'https://developer.oculus.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-platforms',
    tags: ['VR平台', 'Meta', 'Quest', '应用发布'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },

  // 游戏引擎
  {
    id: 'godot',
    name: 'Godot',
    description: '免费开源的游戏引擎，支持2D和3D游戏开发',
    url: 'https://godotengine.org/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['游戏引擎', '开源', '免费', '2D', '3D'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'construct3',
    name: 'Construct 3',
    description: '基于浏览器的2D游戏开发工具，无需编程',
    url: 'https://www.construct.net/',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['2D游戏', '浏览器', '可视化编程', '无代码'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'gamemaker',
    name: 'GameMaker Studio',
    description: '专业的2D游戏开发工具',
    url: 'https://www.yoyogames.com/gamemaker',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['2D游戏', '专业', 'YoYo Games', 'GML'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'cryengine',
    name: 'CryEngine',
    description: 'Crytek开发的高端3D游戏引擎',
    url: 'https://www.cryengine.com/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['游戏引擎', '高端', 'Crytek', '3D'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'corona-sdk',
    name: 'Solar2D',
    description: '免费的跨平台移动游戏开发框架',
    url: 'https://solar2d.com/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['移动游戏', '跨平台', '免费', 'Lua'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  
  // 3D打印工具
  {
    id: 'cura',
    name: 'Ultimaker Cura',
    description: '免费的3D打印切片软件，支持多种3D打印机',
    url: 'https://ultimaker.com/software/ultimaker-cura',
    category: 'threed-printing',
    subcategory: 'threed-printing-slicers',
    tags: ['3D打印', '切片软件', '免费', 'Ultimaker'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'prusaslicer',
    name: 'PrusaSlicer',
    description: 'Prusa Research开发的高级3D打印切片软件',
    url: 'https://www.prusa3d.com/page/prusaslicer_424/',
    category: 'threed-printing',
    subcategory: 'threed-printing-slicers',
    tags: ['3D打印', '切片软件', 'Prusa', '高级功能'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'simplify3d',
    name: 'Simplify3D',
    description: '专业的3D打印软件，提供高级打印控制',
    url: 'https://www.simplify3d.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-slicers',
    tags: ['3D打印', '专业软件', '高级控制', '付费'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'bambu-studio',
    name: 'Bambu Studio',
    description: 'Bambu Lab的3D打印切片和管理软件',
    url: 'https://bambulab.com/en/download/studio',
    category: 'threed-printing',
    subcategory: 'threed-printing-slicers',
    tags: ['3D打印', 'Bambu Lab', '切片软件', '打印管理'],
    isHot: true,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'tinkercad',
    name: 'Tinkercad',
    description: 'Autodesk的在线3D设计和3D打印工具',
    url: 'https://www.tinkercad.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-design',
    tags: ['在线设计', '3D打印', 'Autodesk', '初学者'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'shapeways',
    name: 'Shapeways',
    description: '专业的3D打印服务平台',
    url: 'https://www.shapeways.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['3D打印服务', '在线打印', '多材料', '专业'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 数字雕刻工具
  {
    id: 'zbrush',
    name: 'ZBrush',
    description: '业界领先的数字雕刻和绘画软件',
    url: 'https://pixologic.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['数字雕刻', '角色建模', '细节雕刻', 'Pixologic'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'mudbox',
    name: 'Mudbox',
    description: 'Autodesk数字雕刻和绘画软件',
    url: 'https://www.autodesk.com/products/mudbox/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['数字雕刻', '绘画', 'Autodesk', '纹理绘制'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: '3dcoat',
    name: '3D-Coat',
    description: '数字雕刻、纹理绘制和重拓扑软件',
    url: 'https://3dcoat.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['数字雕刻', '纹理绘制', '重拓扑', '体素'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sculptris',
    name: 'Sculptris',
    description: '免费的数字雕刻软件，适合初学者',
    url: 'https://pixologic.com/sculptris/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['数字雕刻', '免费', '初学者', 'Pixologic'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'blender-sculpting',
    name: 'Blender Sculpting',
    description: 'Blender内置的强大数字雕刻模块',
    url: 'https://www.blender.org/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['数字雕刻', 'Blender', '免费', '开源'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 动作捕捉工具
  {
    id: 'rokoko-studio',
    name: 'Rokoko Studio',
    description: '实时动作捕捉和动画软件',
    url: 'https://www.rokoko.com/products/studio',
    category: 'motion-capture',
    subcategory: 'motion-capture-software',
    tags: ['动作捕捉', '实时', '动画', 'Rokoko'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'perception-neuron',
    name: 'Perception Neuron',
    description: 'Noitom的专业惯性动作捕捉系统',
    url: 'https://www.noitom.com/perception-neuron',
    category: 'motion-capture',
    subcategory: 'motion-capture-hardware',
    tags: ['动作捕捉', '惯性系统', 'Noitom', '专业设备'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'deepmotion',
    name: 'DeepMotion',
    description: 'AI驱动的动作捕捉和动画生成平台',
    url: 'https://www.deepmotion.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['AI动捕', '动画生成', '人工智能', '平台'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'move-ai',
    name: 'Move.ai',
    description: '基于AI的无标记动作捕捉技术',
    url: 'https://www.move.ai/',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['AI动捕', '无标记', '人工智能', '创新技术'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'motionbuilder',
    name: 'MotionBuilder',
    description: 'Autodesk专业动画和动作捕捉软件',
    url: 'https://www.autodesk.com/products/motionbuilder/',
    category: 'motion-capture',
    subcategory: 'motion-capture-cleanup',
    tags: ['动画软件', '动作捕捉', 'Autodesk', '专业'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 建筑可视化工具
  {
    id: 'enscape',
    name: 'Enscape',
    description: '实时渲染和虚拟现实插件，专为建筑师设计',
    url: 'https://enscape3d.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['实时渲染', 'VR', '建筑可视化', '插件'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'd5-render',
    name: 'D5 Render',
    description: '专业的实时光线追踪渲染软件',
    url: 'https://www.d5render.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['实时渲染', '光线追踪', '建筑可视化', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'lumion-arch',
    name: 'Lumion',
    description: '专业的建筑可视化和景观渲染软件',
    url: 'https://lumion.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['建筑渲染', '景观设计', '可视化', '实时'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'artlantis',
    name: 'Artlantis',
    description: 'Abvent的建筑渲染和动画软件',
    url: 'https://www.artlantis.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['建筑渲染', '动画', 'Abvent', '专业'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'corona-renderer',
    name: 'Corona Renderer',
    description: 'Chaos Group的照片级建筑渲染引擎',
    url: 'https://corona-renderer.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['照片级渲染', 'Chaos Group', '建筑', '室内'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'dialux',
    name: 'DIALux',
    description: '专业的照明设计和计算软件',
    url: 'https://www.dialux.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-lighting',
    tags: ['照明设计', '灯光计算', '专业', '免费'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 中国三维软件
  {
    id: 'zwcad',
    name: '中望CAD',
    description: '中国领先的CAD平台软件，兼容AutoCAD格式',
    url: 'https://www.zwsoft.cn/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['CAD软件', '中国软件', '工程设计', '正版'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'gstarcad',
    name: '浩辰CAD',
    description: '国产CAD软件，提供建筑、机械等专业版本',
    url: 'https://www.gstarcad.com/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['CAD软件', '国产软件', '建筑设计', '机械设计'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'kujiale',
    name: '酷家乐',
    description: '在线室内设计平台，支持3D设计和VR体验',
    url: 'https://www.kujiale.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['室内设计', '在线设计', 'VR体验', '中国平台'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sanweijia',
    name: '三维家',
    description: '家居云设计平台，提供3D设计和效果图渲染',
    url: 'https://www.3vjia.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['家居设计', '云设计', '效果图', '室内装修'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 中国3D模型资源网站
  {
    id: 'aigei',
    name: '爱给网',
    description: '中国知名的数字娱乐免费素材下载网站',
    url: 'https://www.aigei.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['3D模型', '免费素材', '中国网站', '数字娱乐'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3d66',
    name: '3D溜溜网',
    description: '专业的3D模型素材下载网站',
    url: 'https://www.3d66.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['3D模型', '素材下载', '室内设计', '建筑模型'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'jiane',
    name: '建E室内设计网',
    description: '专业的室内设计资源平台，提供3D模型和贴图',
    url: 'https://www.jianee.com/',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['室内设计', '建筑模型', '3D素材', '设计资源'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'tuozhe8',
    name: '拓者设计吧',
    description: '室内设计师交流平台，提供3D模型和材质贴图',
    url: 'https://www.tuozhe8.com/',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['室内设计', '设计交流', '3D素材', '材质贴图'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 中国游戏引擎
  {
    id: 'cocos',
    name: 'Cocos引擎',
    description: '中国领先的游戏引擎，支持2D/3D游戏开发',
    url: 'https://www.cocos.com/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['游戏引擎', '中国引擎', '2D/3D', '跨平台'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'layabox',
    name: 'LayaAir引擎',
    description: '全平台游戏引擎，支持H5、小游戏、APP开发',
    url: 'https://www.layabox.com/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['H5游戏', '小游戏', '移动游戏', '全平台'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'egret',
    name: '白鹭引擎',
    description: '专业的HTML5游戏引擎和工具链',
    url: 'https://www.egret.com/',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['HTML5游戏', '2D引擎', '工具链', '中国引擎'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 中国3D打印
  {
    id: 'tiertime',
    name: '太尔时代',
    description: '中国知名3D打印机制造商和服务提供商',
    url: 'https://www.tiertime.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['3D打印机', '中国制造', '打印服务', '教育应用'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'creality',
    name: '创想三维',
    description: '全球知名的3D打印机品牌，提供消费级和工业级产品',
    url: 'https://www.creality.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['3D打印机', '消费级', '工业级', '中国品牌'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'anycubic',
    name: '纵维立方',
    description: '专业3D打印设备制造商，产品远销全球',
    url: 'https://www.anycubic.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['3D打印机', '专业设备', '全球销售', '中国制造'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 中国设计社区
  {
    id: 'zcool',
    name: '站酷',
    description: '中国最大的设计师互动平台，包含3D作品展示',
    url: 'https://www.zcool.com.cn/',
    category: 'threed-community',
    subcategory: 'threed-community-portfolio',
    tags: ['设计师社区', '作品展示', '中国平台', '创意设计'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ui-cn',
    name: 'UI中国',
    description: '专业UI设计师社区，包含3D UI设计作品',
    url: 'https://www.ui.cn/',
    category: 'threed-community',
    subcategory: 'threed-community-portfolio',
    tags: ['UI设计', '设计社区', '作品分享', '中国设计师'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'huaban',
    name: '花瓣网',
    description: '设计师灵感图库，收集和分享设计灵感',
    url: 'https://huaban.com/',
    category: 'threed-community',
    subcategory: 'threed-community-portfolio',
    tags: ['设计灵感', '图库', '收藏分享', '创意素材'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'cgmodel',
    name: 'CG模型网',
    description: '专业的CG模型资源分享社区',
    url: 'https://www.cgmodel.com/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['CG模型', '资源分享', '社区论坛', '3D艺术'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 中国云渲染服务
  {
    id: 'renderbus',
    name: '瑞云渲染',
    description: '中国领先的云渲染服务平台，支持多种渲染引擎',
    url: 'https://www.renderbus.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-service',
    tags: ['云渲染', '中国服务', '多引擎', '专业渲染'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'foxrenderfarm',
    name: '炫云',
    description: '专业的云渲染农场，提供高效的渲染服务',
    url: 'https://www.foxrenderfarm.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['云渲染', '渲染农场', '高效服务', '中国平台'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },

  // 中国贴图材质网站
  {
    id: 'cgbond',
    name: 'CG邦',
    description: 'CG资源分享平台，提供3D模型、贴图等素材',
    url: 'https://cgbond.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-seamless',
    tags: ['CG资源', '3D素材', '贴图材质', '中国平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'yiihuu',
    name: '翼狐网',
    description: '数字艺术学习平台，提供3D教程和素材资源',
    url: 'https://www.yiihuu.com/',
    category: 'threed-community',
    subcategory: 'threed-community-learning',
    tags: ['在线教育', '3D教程', '学习平台', '数字艺术'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 补充三维软件 - 建模软件
  {
    id: 'rhinoceros',
    name: 'Rhinoceros',
    description: '专业的3D建模软件，广泛用于工业设计和建筑',
    url: 'https://www.rhino3d.com/',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['3D建模', '工业设计', '建筑设计', 'NURBS'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'wings3d',
    name: 'Wings 3D',
    description: '免费开源的3D建模软件，简单易用',
    url: 'http://www.wings3d.com/',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['3D建模', '开源', '免费', '简单易用'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'openscad',
    name: 'OpenSCAD',
    description: '程序化3D建模软件，通过代码创建模型',
    url: 'https://openscad.org/',
    category: 'threed-software',
    subcategory: 'threed-software-modeling',
    tags: ['程序化建模', '开源', '代码建模', '参数化'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充三维软件 - 渲染软件
  {
    id: 'keyshot',
    name: 'KeyShot',
    description: '实时光线追踪渲染软件，操作简单效果出色',
    url: 'https://www.keyshot.com/',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['实时渲染', '光线追踪', '简单易用', '产品渲染'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cycles',
    name: 'Cycles',
    description: 'Blender内置的开源渲染引擎',
    url: 'https://www.cycles-renderer.org/',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['开源', 'Blender', 'GPU渲染', '免费'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'indigo-renderer',
    name: 'Indigo Renderer',
    description: '无偏差光线追踪渲染器',
    url: 'https://www.indigorenderer.com/',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['无偏差渲染', '光线追踪', '物理渲染', '高质量'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'luxrender',
    name: 'LuxRender',
    description: '开源的物理渲染器',
    url: 'https://luxcorerender.org/',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['开源', '物理渲染', '免费', '光线追踪'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'thea-render',
    name: 'Thea Render',
    description: '物理渲染引擎，支持多种渲染算法',
    url: 'https://www.thearender.com/',
    category: 'threed-software',
    subcategory: 'threed-software-rendering',
    tags: ['物理渲染', '多算法', '建筑渲染', '专业'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充三维软件 - 动画软件
  {
    id: 'after-effects',
    name: 'After Effects',
    description: 'Adobe专业的视觉特效和动画制作软件',
    url: 'https://www.adobe.com/products/aftereffects.html',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['视觉特效', '动画', 'Adobe', '后期制作'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'nuke',
    name: 'Nuke',
    description: 'Foundry专业的视觉特效合成软件',
    url: 'https://www.foundry.com/products/nuke',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['视觉特效', '合成', 'Foundry', '电影级'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'davinci-resolve',
    name: 'DaVinci Resolve',
    description: '专业的视频编辑、调色和视觉特效软件',
    url: 'https://www.blackmagicdesign.com/products/davinciresolve/',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['视频编辑', '调色', '特效', '免费'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'mocha-pro',
    name: 'Mocha Pro',
    description: '专业的平面跟踪和视觉特效软件',
    url: 'https://borisfx.com/products/mocha-pro/',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['平面跟踪', '视觉特效', 'Boris FX', '合成'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'dragonframe',
    name: 'Dragonframe',
    description: '专业的定格动画制作软件',
    url: 'https://www.dragonframe.com/',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['定格动画', '专业软件', '动画制作', '摄影'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'tvpaint',
    name: 'TVPaint',
    description: '专业的2D动画制作软件',
    url: 'https://www.tvpaint.com/',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['2D动画', '专业软件', '传统动画', '数字绘画'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'iclone',
    name: 'iClone',
    description: 'Reallusion的实时3D动画制作软件',
    url: 'https://www.reallusion.com/iclone/',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['3D动画', '实时', 'Reallusion', '角色动画'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'character-animator',
    name: 'Character Animator',
    description: 'Adobe角色动画制作软件',
    url: 'https://www.adobe.com/products/character-animator.html',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['角色动画', 'Adobe', '实时动画', '表情捕捉'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'spine2d',
    name: 'Spine',
    description: '专业的2D骨骼动画软件',
    url: 'http://esotericsoftware.com/',
    category: 'threed-software',
    subcategory: 'threed-software-animation',
    tags: ['2D动画', '骨骼动画', '游戏动画', '专业'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充三维软件 - CAD软件
  {
    id: 'inventor',
    name: 'Autodesk Inventor',
    description: 'Autodesk专业机械设计和产品开发软件',
    url: 'https://www.autodesk.com/products/inventor/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['机械设计', '产品开发', 'Autodesk', '3D建模'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'onshape',
    name: 'Onshape',
    description: '基于云的专业CAD软件',
    url: 'https://www.onshape.com/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['云CAD', '协作', '专业', 'SaaS'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'freecad',
    name: 'FreeCAD',
    description: '开源的参数化3D CAD建模器',
    url: 'https://www.freecadweb.org/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['开源', '免费', '参数化', '3D CAD'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'catia',
    name: 'CATIA',
    description: 'Dassault Systèmes的高端CAD/CAM/CAE软件',
    url: 'https://www.3ds.com/products-services/catia/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['高端CAD', '航空航天', '汽车设计', 'Dassault'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'nx',
    name: 'Siemens NX',
    description: 'Siemens的高端CAD/CAM/CAE解决方案',
    url: 'https://www.plm.automation.siemens.com/global/en/products/nx/',
    category: 'threed-software',
    subcategory: 'threed-software-cad',
    tags: ['高端CAD', 'Siemens', '制造业', 'PLM'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充3D模型 - 付费模型
  {
    id: 'cubebrush',
    name: 'Cubebrush',
    description: '数字艺术资产市场，提供高质量3D模型',
    url: 'https://cubebrush.co/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['3D模型', '数字艺术', '高质量', '游戏资产'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'renderosity',
    name: 'Renderosity',
    description: '3D内容市场，提供模型、纹理和软件',
    url: 'https://www.renderosity.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['3D内容', '模型市场', '纹理', '软件'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'daz3d',
    name: 'DAZ 3D',
    description: '专业的3D角色和内容创作平台',
    url: 'https://www.daz3d.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['3D角色', '内容创作', '专业', '人物模型'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'unity-asset-store',
    name: 'Unity Asset Store',
    description: 'Unity官方资产商店，提供游戏开发资源',
    url: 'https://assetstore.unity.com/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['Unity', '游戏资产', '官方商店', '开发资源'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'unreal-marketplace',
    name: 'Unreal Engine Marketplace',
    description: 'Unreal Engine官方市场，提供游戏资产',
    url: 'https://www.unrealengine.com/marketplace/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['Unreal', '游戏资产', '官方市场', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cgaxis',
    name: 'CGAxis',
    description: '高质量3D模型和HDRI库',
    url: 'https://cgaxis.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['高质量', '3D模型', 'HDRI', '建筑可视化'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充3D模型 - 免费模型
  {
    id: 'poly-google',
    name: 'Poly by Google',
    description: 'Google的3D模型分享平台（已归档但仍可访问）',
    url: 'https://poly.google.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['Google', '3D模型', '免费', 'VR/AR'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'smithsonian-3d',
    name: 'Smithsonian 3D',
    description: '史密森尼博物馆的3D数字化收藏',
    url: 'https://3d.si.edu/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['博物馆', '文化遗产', '免费', '教育'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'nasa-3d',
    name: 'NASA 3D Resources',
    description: 'NASA提供的免费3D模型和资源',
    url: 'https://nasa3d.arc.nasa.gov/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['NASA', '航天', '免费', '教育'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'quaternius',
    name: 'Quaternius',
    description: '免费低面数3D模型资源',
    url: 'https://quaternius.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['低面数', '免费', '游戏开发', '简约风格'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'blendswap',
    name: 'Blend Swap',
    description: 'Blender用户的免费模型分享社区',
    url: 'https://www.blendswap.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['Blender', '免费', '社区', '模型分享'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'clara-io',
    name: 'Clara.io',
    description: '在线3D建模和模型库平台',
    url: 'https://clara.io/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['在线建模', '模型库', '云端', '协作'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  
  // 补充3D模型 - 建筑模型
  {
    id: 'evermotion',
    name: 'Evermotion',
    description: '专业的建筑可视化3D模型和场景',
    url: 'https://evermotion.org/',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['建筑可视化', '专业模型', '室内设计', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'viz-people',
    name: 'Viz-People',
    description: '建筑可视化人物和车辆模型',
    url: 'https://viz-people.com/',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['人物模型', '车辆模型', '建筑可视化', '专业'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充云渲染服务
  {
    id: 'garagefarm',
    name: 'GarageFarm.NET',
    description: '专业的云渲染农场服务',
    url: 'https://garagefarm.net/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['云渲染', '渲染农场', '专业服务', '高性能'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'pixel-plow',
    name: 'Pixel Plow',
    description: '云端渲染服务，支持多种3D软件',
    url: 'https://www.pixelplow.net/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-service',
    tags: ['云渲染', '多软件支持', '按需计费', '快速'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'sheep-it',
    name: 'SheepIt Render Farm',
    description: '免费的分布式渲染网络',
    url: 'https://www.sheepit-renderfarm.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-service',
    tags: ['免费渲染', '分布式', '社区', 'Blender'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'zync-render',
    name: 'Zync Render',
    description: 'Google Cloud上的渲染服务',
    url: 'https://www.zyncrender.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-service',
    tags: ['Google Cloud', '云渲染', '企业级', '可扩展'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'conductor',
    name: 'Conductor',
    description: '专业的云渲染和计算平台',
    url: 'https://www.conductortech.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-service',
    tags: ['云渲染', '云计算', '专业', '影视级'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'aws-thinkbox',
    name: 'AWS Thinkbox',
    description: 'Amazon Web Services的渲染解决方案',
    url: 'https://aws.amazon.com/thinkbox/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-service',
    tags: ['AWS', '云渲染', '企业级', '可靠'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充云渲染 - GPU云渲染
  {
    id: 'vast-ai',
    name: 'Vast.ai',
    description: '分布式GPU云计算平台',
    url: 'https://vast.ai/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['GPU云计算', '分布式', '机器学习', '渲染'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'paperspace',
    name: 'Paperspace',
    description: '云端GPU工作站和计算平台',
    url: 'https://www.paperspace.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['GPU工作站', '云计算', '机器学习', '渲染'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'lambda-labs',
    name: 'Lambda Labs',
    description: '专业的GPU云计算服务',
    url: 'https://lambdalabs.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['GPU云计算', '专业', '高性能', 'AI训练'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充云渲染 - AI云渲染
  {
    id: 'runwayml',
    name: 'Runway ML',
    description: 'AI驱动的创意工具和渲染平台',
    url: 'https://runwayml.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['AI渲染', '创意工具', '机器学习', '视频生成'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'AI图像生成和渲染技术',
    url: 'https://stability.ai/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['AI图像生成', '稳定扩散', '开源', '图像渲染'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'nvidia-omniverse',
    name: 'NVIDIA Omniverse',
    description: 'NVIDIA的实时协作和仿真平台',
    url: 'https://www.nvidia.com/omniverse/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['NVIDIA', '实时协作', 'AI渲染', '仿真'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },

  // 补充贴图网站 - PBR贴图
  {
    id: 'substance-source',
    name: 'Substance 3D Assets',
    description: 'Adobe官方PBR材质和贴图库',
    url: 'https://substance3d.adobe.com/assets/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['PBR材质', 'Adobe', '官方资源', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'quixel-megascans',
    name: 'Quixel Megascans',
    description: 'Epic Games的高质量3D资产库',
    url: 'https://quixel.com/megascans/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['Quixel', 'Epic Games', '高质量', '扫描材质'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cgbookcase',
    name: 'CG Bookcase',
    description: '免费PBR贴图和HDRI资源',
    url: 'https://www.cgbookcase.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['免费PBR', 'HDRI', '高质量', '商业可用'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'polyhaven',
    name: 'Poly Haven',
    description: '免费的PBR贴图、HDRI和3D模型',
    url: 'https://polyhaven.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['免费资源', 'PBR', 'HDRI', '3D模型'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ambientcg',
    name: 'AmbientCG',
    description: '免费的PBR材质和贴图资源',
    url: 'https://ambientcg.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['免费PBR', '无缝瓷砖', '商业可用', '高质量'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'sharetextures',
    name: 'Share Textures',
    description: '免费高分辨率PBR贴图分享平台',
    url: 'https://www.sharetextures.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['免费贴图', '高分辨率', 'PBR', '分享平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'materialize',
    name: 'Materialize',
    description: '材质创建和编辑工具',
    url: 'http://boundingboxsoftware.com/materialize/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['材质制作', '工具软件', 'PBR生成', '免费'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充贴图网站 - HDRI贴图
  {
    id: 'hdrlabs',
    name: 'HDRLABS',
    description: '专业HDRI环境贴图资源',
    url: 'https://hdrlabs.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-hdri',
    tags: ['HDRI', '环境光', '专业', '高分辨率'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'hdri-skies',
    name: 'HDRI Skies',
    description: '天空HDRI贴图专门网站',
    url: 'https://hdri-skies.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-hdri',
    tags: ['天空HDRI', '专门网站', '多种天气', '高质量'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'hdrmaps',
    name: 'HDRMaps',
    description: '免费HDRI贴图下载网站',
    url: 'https://hdrmaps.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-hdri',
    tags: ['免费HDRI', '下载', '环境光', '多分辨率'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'noemotionhdrs',
    name: 'NoEmotion HDRs',
    description: '免费高质量HDRI资源库',
    url: 'http://noemotionhdrs.net/',
    category: 'texture-materials',
    subcategory: 'texture-materials-hdri',
    tags: ['免费HDRI', '高质量', '环境光', '商业可用'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'hdri-hub',
    name: 'HDRI Hub',
    description: 'HDRI贴图集合网站',
    url: 'https://www.hdrihub.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-hdri',
    tags: ['HDRI集合', '多种格式', '商业可用', '专业'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充贴图网站 - 无缝贴图
  {
    id: 'seamless-pixels',
    name: 'Seamless Pixels',
    description: '免费无缝纹理贴图资源',
    url: 'https://www.seamlesspixels.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-seamless',
    tags: ['无缝纹理', '免费', '可瓷砖', '商业可用'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'subtle-patterns',
    name: 'Subtle Patterns',
    description: '精致的无缝背景纹理',
    url: 'https://www.toptal.com/designers/subtlepatterns/',
    category: 'texture-materials',
    subcategory: 'texture-materials-seamless',
    tags: ['精致纹理', '背景图案', '无缝', '设计资源'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'wildtextures',
    name: 'Wild Textures',
    description: '免费高分辨率纹理贴图',
    url: 'https://www.wildtextures.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-seamless',
    tags: ['免费纹理', '高分辨率', '多种材质', '商业可用'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'texture-king',
    name: 'Texture King',
    description: '免费3D纹理和图片资源',
    url: 'https://www.textureking.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-seamless',
    tags: ['免费纹理', '3D素材', '图片资源', '种类丰富'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充贴图网站 - 程序贴图
  {
    id: 'substance-designer',
    name: 'Substance 3D Designer',
    description: 'Adobe专业程序化材质制作软件',
    url: 'https://www.adobe.com/products/substance3d-designer.html',
    category: 'texture-materials',
    subcategory: 'texture-materials-procedural',
    tags: ['程序化', '材质制作', 'Adobe', '专业软件'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'material-maker',
    name: 'Material Maker',
    description: '开源的程序化材质制作工具',
    url: 'https://rodzilla.itch.io/material-maker',
    category: 'texture-materials',
    subcategory: 'texture-materials-procedural',
    tags: ['开源', '程序化', '免费', '材质制作'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'blender-shader-nodes',
    name: 'Blender Shader Nodes',
    description: 'Blender内置的程序化材质系统',
    url: 'https://docs.blender.org/manual/en/latest/render/shader_nodes/',
    category: 'texture-materials',
    subcategory: 'texture-materials-procedural',
    tags: ['Blender', '程序化', '节点编辑', '免费'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'world-machine',
    name: 'World Machine',
    description: '专业的程序化地形和材质生成软件',
    url: 'https://www.world-machine.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-procedural',
    tags: ['地形生成', '程序化', '专业软件', '材质生成'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 从88设计网提取的贴图网站
  {
    id: 'freepbr-materials',
    name: 'FreePBR',
    description: '免费PBR材质下载，支持3D工作、游戏、CAD等',
    url: 'https://freepbr.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['免费PBR', '游戏材质', 'CAD材质', '3D工作'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3dtextures-me',
    name: '3Dtextures.me',
    description: 'Joao Paulo创建的免费材质网站，400+种材料，1k分辨率',
    url: 'https://3dtextures.me/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['免费材质', '400+材料', '1k分辨率', '个人项目'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cgtricks-textures',
    name: 'CGTRICKS',
    description: '3D贴图和模型集合网站，高清贴图、3D模型、PSD文件',
    url: 'https://cgtricks.com/',
    category: 'texture-materials',
    subcategory: 'texture-materials-pbr',
    tags: ['贴图集合', '3D模型', 'PSD文件', '素材跳转'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充交流社区 - 论坛社区
  {
    id: 'zbrushcentral',
    name: 'ZBrush Central',
    description: 'ZBrush官方社区论坛',
    url: 'https://www.zbrushcentral.com/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['ZBrush', '官方社区', '数字雕刻', '论坛'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'blenderartists',
    name: 'Blender Artists',
    description: 'Blender用户的官方社区论坛',
    url: 'https://blenderartists.org/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['Blender', '官方社区', '开源', '论坛'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cg-channel',
    name: 'CG Channel',
    description: '数字艺术和视觉特效新闻社区',
    url: 'https://www.cgchannel.com/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['CG新闻', '视觉特效', '行业动态', '社区'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cgpersia',
    name: 'CG Persia',
    description: 'CG资源和教程分享社区',
    url: 'https://cgpersia.com/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['CG资源', '教程分享', '社区', '免费资源'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'maxunderground',
    name: '3ds Max Underground',
    description: '3ds Max用户社区和资源站',
    url: 'https://www.3dmaxunderground.com/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['3ds Max', '用户社区', '资源分享', '论坛'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'creativecow',
    name: 'Creative COW',
    description: '创意专业人士的社区和论坛',
    url: 'https://www.creativecow.net/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['创意社区', '专业人士', '论坛', '视频制作'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充交流社区 - 学习社区
  {
    id: 'cgcookie',
    name: 'CG Cookie',
    description: '专业的CG在线学习平台',
    url: 'https://cgcookie.com/',
    category: 'threed-community',
    subcategory: 'threed-community-learning',
    tags: ['在线学习', 'CG教程', '专业培训', 'Blender'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'gnomon-school',
    name: 'Gnomon School',
    description: '专业视觉特效和数字艺术学院',
    url: 'https://www.gnomon.edu/',
    category: 'threed-community',
    subcategory: 'threed-community-learning',
    tags: ['专业学院', '视觉特效', '数字艺术', '高等教育'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'pluralsight',
    name: 'Pluralsight',
    description: '技术和创意技能在线学习平台',
    url: 'https://www.pluralsight.com/',
    category: 'threed-community',
    subcategory: 'threed-community-learning',
    tags: ['在线学习', '技术培训', '创意技能', '订阅制'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'lynda-linkedin',
    name: 'LinkedIn Learning',
    description: 'LinkedIn的专业技能学习平台',
    url: 'https://www.linkedin.com/learning/',
    category: 'threed-community',
    subcategory: 'threed-community-learning',
    tags: ['专业技能', 'LinkedIn', '在线课程', '认证'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'digital-tutors',
    name: 'Digital Tutors',
    description: '数字艺术和3D动画在线教程（现并入Pluralsight）',
    url: 'https://www.pluralsight.com/browse/creative-professional',
    category: 'threed-community',
    subcategory: 'threed-community-learning',
    tags: ['数字艺术', '3D动画', '在线教程', '专业培训'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充交流社区 - 协作平台
  {
    id: 'frame-io',
    name: 'Frame.io',
    description: '视频协作和审阅平台',
    url: 'https://frame.io/',
    category: 'threed-community',
    subcategory: 'threed-community-collaboration',
    tags: ['视频协作', '审阅平台', '云端', '团队协作'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'syncsketch',
    name: 'SyncSketch',
    description: '动画和视频的协作审阅工具',
    url: 'https://syncsketch.com/',
    category: 'threed-community',
    subcategory: 'threed-community-collaboration',
    tags: ['动画协作', '视频审阅', '团队工具', '云端'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'kitsu',
    name: 'Kitsu',
    description: '开源的动画制作管理工具',
    url: 'https://kitsu.cg-wire.com/',
    category: 'threed-community',
    subcategory: 'threed-community-collaboration',
    tags: ['开源', '项目管理', '动画制作', '团队协作'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'shotgun',
    name: 'ShotGrid (Shotgun)',
    description: 'Autodesk的创意项目管理平台',
    url: 'https://www.autodesk.com/products/shotgrid/',
    category: 'threed-community',
    subcategory: 'threed-community-collaboration',
    tags: ['项目管理', 'Autodesk', '创意制作', '企业级'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'perforce-helix-core',
    name: 'Perforce Helix Core',
    description: '版本控制和协作开发平台',
    url: 'https://www.perforce.com/products/helix-core',
    category: 'threed-community',
    subcategory: 'threed-community-collaboration',
    tags: ['版本控制', '协作开发', '企业级', '资产管理'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充VR/AR开发 - VR/AR引擎
  {
    id: 'unreal-vr',
    name: 'Unreal Engine VR',
    description: 'Unreal Engine的VR开发解决方案',
    url: 'https://www.unrealengine.com/en-US/vr',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-engines',
    tags: ['Unreal Engine', 'VR开发', '游戏引擎', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'webxr',
    name: 'WebXR',
    description: '基于Web的VR/AR开发标准',
    url: 'https://immersiveweb.dev/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-engines',
    tags: ['WebXR', 'Web标准', 'VR/AR', '跨平台'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'openxr',
    name: 'OpenXR',
    description: '开放的VR/AR应用程序接口标准',
    url: 'https://www.khronos.org/openxr/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-engines',
    tags: ['OpenXR', '开放标准', 'VR/AR', 'API'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'godot-vr',
    name: 'Godot VR',
    description: 'Godot引擎的VR开发支持',
    url: 'https://docs.godotengine.org/en/stable/tutorials/vr/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-engines',
    tags: ['Godot', 'VR开发', '开源', '免费'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充VR/AR开发 - 内容制作
  {
    id: 'mozilla-hubs',
    name: 'Mozilla Hubs',
    description: 'Mozilla的开源VR社交平台',
    url: 'https://hubs.mozilla.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-content',
    tags: ['Mozilla', 'VR社交', '开源', 'Web VR'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'horizon-worlds',
    name: 'Horizon Worlds',
    description: 'Meta的VR世界创建平台',
    url: 'https://www.oculus.com/horizon-worlds/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-content',
    tags: ['Meta', 'VR世界', '内容创作', 'Oculus'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'spark-ar',
    name: 'Spark AR Studio',
    description: 'Meta的AR滤镜创建工具',
    url: 'https://sparkar.facebook.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-content',
    tags: ['AR滤镜', 'Meta', '内容创作', 'Instagram'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'lens-studio',
    name: 'Lens Studio',
    description: 'Snapchat的AR镜头创建工具',
    url: 'https://ar.snap.com/lens-studio',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-content',
    tags: ['AR镜头', 'Snapchat', '内容创作', '社交AR'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'varjo-base',
    name: 'Varjo Base',
    description: 'Varjo的专业VR内容管理平台',
    url: 'https://varjo.com/products/software/varjo-base/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-content',
    tags: ['专业VR', 'Varjo', '内容管理', '企业级'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充VR/AR开发 - 发布平台
  {
    id: 'steam-vr',
    name: 'SteamVR',
    description: 'Steam的VR内容分发平台',
    url: 'https://store.steampowered.com/vr/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-platforms',
    tags: ['Steam', 'VR游戏', '内容分发', 'PC VR'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'oculus-store',
    name: 'Meta Quest Store',
    description: 'Meta Quest的官方应用商店',
    url: 'https://www.oculus.com/experiences/quest/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-platforms',
    tags: ['Meta Quest', '官方商店', 'VR应用', 'Oculus'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'pico-store',
    name: 'PICO Store',
    description: 'PICO VR设备的应用商店',
    url: 'https://www.picoxr.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-platforms',
    tags: ['PICO', 'VR商店', '中国品牌', 'VR设备'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'viveport',
    name: 'Viveport',
    description: 'HTC Vive的VR内容订阅平台',
    url: 'https://www.viveport.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-platforms',
    tags: ['HTC Vive', 'VR订阅', '内容平台', 'PC VR'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充VR/AR开发 - 开发工具
  {
    id: 'reality-composer',
    name: 'Reality Composer',
    description: 'Apple的AR内容创作工具',
    url: 'https://developer.apple.com/augmented-reality/reality-composer/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-tools',
    tags: ['Apple', 'AR创作', 'iOS', 'ARKit'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'arcore',
    name: 'ARCore',
    description: 'Google的Android AR开发平台',
    url: 'https://developers.google.com/ar',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-tools',
    tags: ['Google', 'Android AR', 'ARCore', '移动AR'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'arkit',
    name: 'ARKit',
    description: 'Apple的iOS AR开发框架',
    url: 'https://developer.apple.com/arkit/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-tools',
    tags: ['Apple', 'iOS AR', 'ARKit', '移动AR'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'wikitude',
    name: 'Wikitude',
    description: '跨平台AR开发SDK',
    url: 'https://www.wikitude.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-tools',
    tags: ['AR SDK', '跨平台', '商业方案', '企业级'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'zappar',
    name: 'Zappar',
    description: 'Web AR开发平台',
    url: 'https://www.zappar.com/',
    category: 'vr-ar-dev',
    subcategory: 'vr-ar-tools',
    tags: ['Web AR', '开发平台', '跨平台', '创意AR'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充游戏引擎 - 游戏开发工具
  {
    id: 'visual-scripting-unity',
    name: 'Unity Visual Scripting',
    description: 'Unity的可视化脚本编程工具',
    url: 'https://unity.com/products/unity-visual-scripting',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['可视化脚本', '游戏开发', 'Unity', '编程工具'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'unreal-blueprint',
    name: 'Unreal Engine Blueprint',
    description: 'Unreal Engine的可视化脚本系统',
    url: 'https://docs.unrealengine.com/5.0/en-US/blueprints-visual-scripting-in-unreal-engine/',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['可视化脚本', 'Unreal Engine', 'Blueprint', '编程工具'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'playmaker',
    name: 'PlayMaker',
    description: 'Unity的可视化状态机工具',
    url: 'https://hutonggames.com/',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['状态机', 'Unity插件', '可视化编程', '游戏逻辑'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'fmod',
    name: 'FMOD Studio',
    description: '专业的交互式音频中间件',
    url: 'https://www.fmod.com/',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['音频中间件', '交互音频', '游戏音效', '专业工具'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'wwise',
    name: 'Wwise',
    description: 'Audiokinetic的交互式音频解决方案',
    url: 'https://www.audiokinetic.com/products/wwise/',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['交互音频', '音频引擎', '游戏音效', 'Audiokinetic'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'houdini-engine',
    name: 'Houdini Engine',
    description: 'SideFX的程序化内容创建插件',
    url: 'https://www.sidefx.com/products/houdini-engine/',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['程序化生成', 'Houdini', '插件', '内容创建'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'speedtree',
    name: 'SpeedTree',
    description: '实时植被建模工具',
    url: 'https://store.speedtree.com/',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['植被建模', '实时渲染', '游戏开发', '环境工具'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'substance-painter',
    name: 'Substance 3D Painter',
    description: 'Adobe专业3D纹理绘制软件',
    url: 'https://www.adobe.com/products/substance3d-painter.html',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['纹理绘制', '3D绘画', 'Adobe', '游戏美术'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'quixel-bridge',
    name: 'Quixel Bridge',
    description: 'Quixel资产库管理和导入工具',
    url: 'https://quixel.com/bridge',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['资产管理', 'Quixel', '导入工具', '游戏开发'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充3D打印 - 打印材料
  {
    id: 'prusament',
    name: 'Prusament',
    description: 'Prusa Research的高品质3D打印材料',
    url: 'https://shop.prusa3d.com/en/42-prusament',
    category: 'threed-printing',
    subcategory: 'threed-printing-materials',
    tags: ['3D打印材料', 'Prusa', '高品质', 'PLA/PETG'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'hatchbox-3d',
    name: 'HATCHBOX 3D',
    description: '优质3D打印线材制造商',
    url: 'https://www.hatchbox3d.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-materials',
    tags: ['3D打印线材', '优质材料', 'PLA', 'ABS'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'polymaker',
    name: 'Polymaker',
    description: '专业3D打印材料制造商',
    url: 'https://polymaker.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-materials',
    tags: ['专业材料', '工程塑料', '特殊材料', '3D打印'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'esun3d',
    name: 'eSUN',
    description: '易生三维3D打印材料品牌',
    url: 'https://www.esun3d.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-materials',
    tags: ['易生三维', '中国品牌', '3D打印材料', '性价比'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sunlu3d',
    name: 'SUNLU',
    description: '尚绿3D打印材料和设备',
    url: 'https://www.sunlu.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-materials',
    tags: ['尚绿', '中国品牌', '3D打印材料', '设备'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'overture3d',
    name: 'OVERTURE 3D',
    description: '专业3D打印线材品牌',
    url: 'https://www.overture3d.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-materials',
    tags: ['专业线材', '高品质', 'PLA Plus', 'PETG'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'proto-pasta',
    name: 'Proto-pasta',
    description: '创新型3D打印材料制造商',
    url: 'https://www.proto-pasta.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-materials',
    tags: ['创新材料', '特殊效果', '复合材料', '实验性'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充数字雕刻 - 环境雕刻
  {
    id: 'world-creator',
    name: 'World Creator',
    description: '专业的地形和环境创建软件',
    url: 'https://www.world-creator.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-environment',
    tags: ['地形创建', '环境设计', '程序化生成', '专业工具'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'gaea',
    name: 'Gaea',
    description: 'QuadSpinner的下一代地形设计软件',
    url: 'https://quadspinner.com/gaea',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-environment',
    tags: ['地形设计', 'QuadSpinner', '下一代', '专业工具'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'houdini-terrain',
    name: 'Houdini Terrain',
    description: 'SideFX Houdini的地形生成工具',
    url: 'https://www.sidefx.com/products/houdini/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-environment',
    tags: ['Houdini', '地形生成', '程序化', 'SideFX'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'terragen',
    name: 'Terragen',
    description: 'Planetside Software的photorealistic地形渲染软件',
    url: 'https://planetside.co.uk/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-environment',
    tags: ['地形渲染', '照片级', 'Planetside', '自然环境'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'instant-terra',
    name: 'Instant Terra',
    description: 'Wysilab的实时地形生成软件',
    url: 'https://www.wysilab.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-environment',
    tags: ['实时地形', 'Wysilab', '地形生成', '实时预览'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充数字雕刻 - 硬表面雕刻
  {
    id: 'fusion360-sculpt',
    name: 'Fusion 360 Sculpt',
    description: 'Autodesk Fusion 360的雕刻环境',
    url: 'https://www.autodesk.com/products/fusion-360/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-hard-surface',
    tags: ['硬表面', 'Fusion 360', 'Autodesk', 'CAD雕刻'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'keyshot-zbrush',
    name: 'KeyShot ZBrush Bridge',
    description: 'KeyShot与ZBrush的硬表面渲染连接',
    url: 'https://www.keyshot.com/zbrush/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-hard-surface',
    tags: ['硬表面渲染', 'KeyShot', 'ZBrush', '产品设计'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'plasticity',
    name: 'Plasticity',
    description: '现代的硬表面建模软件',
    url: 'https://www.plasticity.xyz/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-hard-surface',
    tags: ['硬表面建模', '现代工具', '直观操作', '产品设计'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'moi3d',
    name: 'Moment of Inspiration (MoI)',
    description: '简单易用的NURBS建模软件',
    url: 'http://moi3d.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-hard-surface',
    tags: ['NURBS建模', '简单易用', '硬表面', '产品设计'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'viacad',
    name: 'ViaCAD',
    description: '专业的2D/3D设计软件',
    url: 'https://www.viacad.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-hard-surface',
    tags: ['2D/3D设计', '专业软件', '硬表面', 'CAD'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充建筑可视化 - VR建筑体验
  {
    id: 'unreal-archviz',
    name: 'Unreal Engine ArchViz',
    description: 'Unreal Engine的建筑可视化解决方案',
    url: 'https://www.unrealengine.com/en-US/industry/architecture',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-vr',
    tags: ['建筑VR', 'Unreal Engine', '实时渲染', '沉浸体验'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'unity-mars',
    name: 'Unity MARS',
    description: 'Unity的混合现实和建筑AR工具',
    url: 'https://unity.com/products/unity-mars',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-vr',
    tags: ['建筑AR', 'Unity', '混合现实', 'MARS'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'immersive-design',
    name: 'Immersive Design Studios',
    description: '沉浸式建筑设计体验平台',
    url: 'https://immersivedesign.io/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-vr',
    tags: ['沉浸式设计', 'VR体验', '建筑设计', '协作平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'iris-vr',
    name: 'IrisVR (Prospect)',
    description: '建筑和工程的VR协作平台',
    url: 'https://irisvr.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-vr',
    tags: ['建筑VR', '工程VR', '协作平台', 'IrisVR'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'shapespark',
    name: 'Shapespark',
    description: 'Web-based 3D可视化和VR平台',
    url: 'https://www.shapespark.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-vr',
    tags: ['Web VR', '3D可视化', '建筑展示', '在线平台'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 补充建筑可视化 - 照明设计 
  {
    id: 'relux',
    name: 'ReluxCAD',
    description: '专业照明设计和计算软件',         
    url: 'https://relux.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-lighting',
    tags: ['照明设计', '照明计算', '专业软件', 'ReluxCAD'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'agi32',
    name: 'AGi32',
    description: '照明设计和分析软件',
    url: 'https://www.agi32.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-lighting',
    tags: ['照明设计', '照明分析', 'AGi32', '专业工具'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'radiance',
    name: 'Radiance',
    description: '开源的照明仿真和渲染系统',
    url: 'https://www.radiance-online.org/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-lighting',
    tags: ['开源', '照明仿真', 'Radiance', '渲染系统'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'calculux',
    name: 'Calculux',
    description: 'Signify (Philips) 的照明计算软件',
    url: 'https://www.signify.com/global/lighting-design/calculux',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-lighting',
    tags: ['照明计算', 'Signify', 'Philips', '照明设计'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'lighttools',
    name: 'LightTools',
    description: 'Synopsys的专业照明设计软件',
    url: 'https://www.synopsys.com/optical-solutions/lighttools.html',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-lighting',
    tags: ['专业照明', 'Synopsys', '光学设计', 'LightTools'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'photopia',
    name: 'Photopia',
    description: 'LTI Optics的照明设计软件',
    url: 'https://www.ltioptics.com/en/Photopia',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-lighting',
    tags: ['照明设计', 'LTI Optics', 'Photopia', '光学软件'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充3D打印 - 切片软件和打印设计
  {
    id: 'ideamaker',
    name: 'ideaMaker',
    description: 'Raise3D的专业3D打印切片软件',
    url: 'https://www.raise3d.com/ideamaker/',
    category: 'threed-printing',
    subcategory: 'threed-printing-slicers',
    tags: ['切片软件', 'Raise3D', '专业打印', 'ideaMaker'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'flashprint',
    name: 'FlashPrint',
    description: 'FlashForge的3D打印切片软件',
    url: 'https://www.flashforge.com/flashprint/',
    category: 'threed-printing',
    subcategory: 'threed-printing-slicers',
    tags: ['切片软件', 'FlashForge', '简单易用', 'FlashPrint'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'fusion360-generative',
    name: 'Fusion 360 Generative Design',
    description: 'Autodesk Fusion 360的生成式设计功能',
    url: 'https://www.autodesk.com/products/fusion-360/generative-design',
    category: 'threed-printing',
    subcategory: 'threed-printing-design',
    tags: ['生成式设计', 'Fusion 360', 'AI设计', '拓扑优化'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'onshape-3dprint',
    name: 'Onshape 3D Printing',
    description: 'Onshape的云端3D打印设计功能',
    url: 'https://www.onshape.com/en/features/3d-printing',
    category: 'threed-printing',
    subcategory: 'threed-printing-design',
    tags: ['云端设计', 'Onshape', '3D打印', '协作设计'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'meshmixer',
    name: 'Meshmixer',
    description: 'Autodesk的免费3D网格编辑软件',
    url: 'https://www.meshmixer.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-design',
    tags: ['网格编辑', 'Autodesk', '免费', '3D打印优化'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'netfabb',
    name: 'Netfabb',
    description: 'Autodesk的专业3D打印软件',
    url: 'https://www.autodesk.com/products/netfabb/',
    category: 'threed-printing',
    subcategory: 'threed-printing-design',
    tags: ['专业打印', 'Autodesk', '打印准备', 'Netfabb'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'magics',
    name: 'Magics',
    description: 'Materialise的3D打印软件套件',
    url: 'https://www.materialise.com/en/software/magics',
    category: 'threed-printing',
    subcategory: 'threed-printing-design',
    tags: ['专业套件', 'Materialise', '打印准备', 'Magics'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充动作捕捉 - 捕捉设备
  {
    id: 'xsens',
    name: 'Xsens MVN',
    description: 'Xsens专业惯性动作捕捉系统',
    url: 'https://www.xsens.com/motion-capture',
    category: 'motion-capture',
    subcategory: 'motion-capture-hardware',
    tags: ['惯性捕捉', 'Xsens', '专业设备', '全身捕捉'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'optitrack',
    name: 'OptiTrack',
    description: '光学动作捕捉系统和相机',
    url: 'https://optitrack.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-hardware',
    tags: ['光学捕捉', 'OptiTrack', '高精度', '专业系统'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'vicon',
    name: 'Vicon',
    description: '全球领先的动作捕捉技术公司',
    url: 'https://www.vicon.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-hardware',
    tags: ['动作捕捉', 'Vicon', '行业领先', '专业系统'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'motion-analysis',
    name: 'Motion Analysis',
    description: '专业运动分析和动作捕捉系统',
    url: 'https://www.motionanalysis.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-hardware',
    tags: ['运动分析', '动作捕捉', '专业系统', '科学研究'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'qualisys',
    name: 'Qualisys',
    description: '3D动作捕捉和生物力学分析系统',
    url: 'https://www.qualisys.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-hardware',
    tags: ['3D捕捉', '生物力学', 'Qualisys', '专业系统'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'noitom-hi5',
    name: 'Noitom Hi5 Glove',
    description: '诺亦腾手部动作捕捉手套',
    url: 'https://www.noitom.com/hi5-glove',
    category: 'motion-capture',
    subcategory: 'motion-capture-hardware',
    tags: ['手部捕捉', '诺亦腾', '中国品牌', '手套设备'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ultraleap',
    name: 'Ultraleap',
    description: '手部跟踪和触觉技术',
    url: 'https://www.ultraleap.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-hardware',
    tags: ['手部跟踪', '触觉技术', 'Ultraleap', '无接触'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充动作捕捉 - 捕捉软件
  {
    id: 'blade',
    name: 'Blade',
    description: 'Vicon的动作捕捉数据处理软件',
    url: 'https://www.vicon.com/software/blade/',
    category: 'motion-capture',
    subcategory: 'motion-capture-software',
    tags: ['数据处理', 'Vicon', 'Blade', '专业软件'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'motive',
    name: 'OptiTrack Motive',
    description: 'OptiTrack的动作捕捉软件套件',
    url: 'https://optitrack.com/software/motive/',
    category: 'motion-capture',
    subcategory: 'motion-capture-software',
    tags: ['捕捉软件', 'OptiTrack', 'Motive', '实时处理'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'motion-capture-data',
    name: 'Motion Capture Data',
    description: '动作捕捉数据库和资源',
    url: 'https://sites.google.com/a/cgspeed.com/cgspeed/motion-capture',
    category: 'motion-capture',
    subcategory: 'motion-capture-software',
    tags: ['动作数据', '资源库', '免费数据', '参考资料'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'ipi-soft',
    name: 'iPi Soft',
    description: '基于深度传感器的动作捕捉软件',
    url: 'http://ipisoft.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-software',
    tags: ['深度传感器', '动作捕捉', 'iPi Soft', '低成本'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'brekel-kinect',
    name: 'Brekel Kinect',
    description: '基于Kinect的动作捕捉软件',
    url: 'https://brekel.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-software',
    tags: ['Kinect', '动作捕捉', 'Brekel', '低成本方案'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充动作捕捉 - 动画清理
  {
    id: 'maya-mocap',
    name: 'Maya Motion Capture',
    description: 'Autodesk Maya的动作捕捉工具集',
    url: 'https://www.autodesk.com/products/maya/',
    category: 'motion-capture',
    subcategory: 'motion-capture-cleanup',
    tags: ['Maya', '动作清理', 'Autodesk', '专业工具'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3dsmax-biped',
    name: '3ds Max Biped',
    description: '3ds Max的角色动画和动作捕捉系统',
    url: 'https://www.autodesk.com/products/3ds-max/',
    category: 'motion-capture',
    subcategory: 'motion-capture-cleanup',
    tags: ['3ds Max', 'Biped', '角色动画', '动作处理'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cascadeur',
    name: 'Cascadeur',
    description: '基于物理的角色动画软件',
    url: 'https://cascadeur.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-cleanup',
    tags: ['物理动画', '角色动画', 'Cascadeur', '动画清理'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'endorphin',
    name: 'Endorphin',
    description: 'NaturalMotion的动态运动合成软件',
    url: 'https://www.naturalmotion.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-cleanup',
    tags: ['动态运动', 'NaturalMotion', 'Endorphin', '运动合成'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'mixamo-auto-rigger',
    name: 'Mixamo Auto-Rigger',
    description: 'Adobe Mixamo的自动绑定和动画服务',
    url: 'https://www.mixamo.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-cleanup',
    tags: ['自动绑定', 'Adobe', 'Mixamo', '动画库'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'rokoko-cinema4d',
    name: 'Rokoko Cinema 4D Plugin',
    description: 'Rokoko为Cinema 4D开发的动捕插件',
    url: 'https://www.rokoko.com/integrations/cinema-4d',
    category: 'motion-capture',
    subcategory: 'motion-capture-cleanup',
    tags: ['Cinema 4D', 'Rokoko', '插件', '动捕集成'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充数字雕刻 - 重拓扑工具 (需要大量补充)
  {
    id: 'retopology-3dcoat',
    name: '3D-Coat Retopology',
    description: '3D-Coat的专业重拓扑功能模块',
    url: 'https://3dcoat.com/retopo/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['重拓扑', '3D-Coat', '专业工具', '网格优化'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'topogun',
    name: 'TopoGun',
    description: '专业的重拓扑和贴图烘焙软件',
    url: 'http://www.topogun.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['重拓扑', '贴图烘焙', '专业软件', '网格处理'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'maya-quad-draw',
    name: 'Maya Quad Draw',
    description: 'Maya内置的四边面重拓扑工具',
    url: 'https://www.autodesk.com/products/maya/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['Maya', '四边面', '重拓扑', 'Autodesk'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'blender-retopo',
    name: 'Blender Retopology',
    description: 'Blender的重拓扑工具集',
    url: 'https://docs.blender.org/manual/en/latest/modeling/meshes/retopology.html',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['Blender', '重拓扑', '免费', '开源'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'zremesher',
    name: 'ZRemesher',
    description: 'ZBrush内置的自动重拓扑工具',
    url: 'https://docs.pixologic.com/reference-guide/tool/geometry/zremesher/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['ZBrush', '自动重拓扑', 'ZRemesher', '智能网格'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'instant-meshes',
    name: 'Instant Meshes',
    description: '开源的自动重拓扑工具',
    url: 'https://github.com/wjakob/instant-meshes',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['开源', '自动重拓扑', '免费', 'GitHub'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'retopologizer',
    name: 'Retopologizer',
    description: 'Blender的重拓扑插件',
    url: 'https://gumroad.com/l/retopologizer',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['Blender插件', '重拓扑', '自动化', '插件'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'retopoflow',
    name: 'RetopoFlow',
    description: 'Blender的专业重拓扑插件套件',
    url: 'https://retopoflow.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['Blender插件', '专业重拓扑', '工具套件', '高效'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'wrap3',
    name: 'Wrap3',
    description: 'R3DS的3D扫描数据处理和重拓扑软件',
    url: 'https://www.russian3dscanner.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['3D扫描', '数据处理', '重拓扑', 'R3DS'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'meshlab',
    name: 'MeshLab',
    description: '开源的3D网格处理和重拓扑工具',
    url: 'https://www.meshlab.net/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-retopology',
    tags: ['开源', '网格处理', '重拓扑', '免费'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充AI动捕 (需要大量补充)
  {
    id: 'plask-ai',
    name: 'Plask',
    description: 'AI驱动的动作捕捉和动画创作平台',
    url: 'https://plask.ai/',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['AI动捕', '动画创作', '机器学习', '自动化'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'radical-ai',
    name: 'Radical',
    description: 'AI驱动的实时动作捕捉解决方案',
    url: 'https://www.getrad.co/',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['AI动捕', '实时捕捉', '无标记', '机器学习'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'movenet',
    name: 'MoveNet',
    description: 'Google的轻量级姿态检测模型',
    url: 'https://blog.tensorflow.org/2021/05/next-generation-pose-detection-with-movenet-and-tensorflowjs.html',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['Google', '姿态检测', 'TensorFlow', 'AI'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'openpose',
    name: 'OpenPose',
    description: 'CMU开源的实时多人姿态检测库',
    url: 'https://github.com/CMU-Perceptual-Computing-Lab/openpose',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['开源', '姿态检测', 'CMU', '多人检测'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'mediapipe-pose',
    name: 'MediaPipe Pose',
    description: 'Google MediaPipe的姿态检测解决方案',
    url: 'https://google.github.io/mediapipe/solutions/pose.html',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['Google', 'MediaPipe', '姿态检测', '实时'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'pose-animator',
    name: 'PoseAnimator',
    description: 'TensorFlow.js的实时人体姿态动画工具',
    url: 'https://pose-animator-demo.firebaseapp.com/',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['TensorFlow.js', '姿态动画', 'Web AI', '实时'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'mocap-ai',
    name: 'Mocap AI',
    description: 'AI驱动的动作捕捉数据清理和优化',
    url: 'https://www.mocap.ai/',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['AI优化', '数据清理', '动捕后处理', '机器学习'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'rokoko-ai',
    name: 'Rokoko AI Features',
    description: 'Rokoko Studio的AI增强功能',
    url: 'https://www.rokoko.com/products/studio',
    category: 'motion-capture',
    subcategory: 'motion-capture-ai',
    tags: ['Rokoko', 'AI增强', '智能捕捉', '自动化'],
    isHot: false,
    isFeatured: true,
    isNew: true
  },

  // 补充移动游戏引擎 (需要大量补充)
  {
    id: 'flutter-flame',
    name: 'Flutter Flame',
    description: 'Flutter的2D游戏开发引擎',
    url: 'https://flame-engine.org/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['Flutter', '2D游戏', '移动开发', '跨平台'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'defold',
    name: 'Defold',
    description: 'King开发的免费2D游戏引擎',
    url: 'https://defold.com/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['2D游戏', '免费', 'King', '移动优化'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'buildbox',
    name: 'Buildbox',
    description: '无代码游戏开发平台',
    url: 'https://www.buildbox.com/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['无代码', '可视化开发', '移动游戏', '快速原型'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'corona-sdk',
    name: 'Corona SDK (Solar2D)',
    description: '跨平台移动游戏开发框架',
    url: 'https://solar2d.com/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['跨平台', '移动游戏', 'Lua', '2D开发'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'gamesalad',
    name: 'GameSalad',
    description: '拖拽式游戏开发工具',
    url: 'https://gamesalad.com/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['拖拽开发', '无代码', '移动游戏', '简单易用'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'marmalade',
    name: 'Marmalade SDK',
    description: '跨平台移动游戏开发SDK',
    url: 'https://www.madewithmarmalade.com/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['跨平台', 'C++', '移动游戏', 'SDK'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'moai',
    name: 'Moai SDK',
    description: '开源的移动游戏开发框架',
    url: 'http://getmoai.com/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['开源', 'Lua', '移动游戏', '2D/3D'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'xamarin-forms',
    name: 'Xamarin.Forms',
    description: 'Microsoft的跨平台移动应用开发框架',
    url: 'https://docs.microsoft.com/xamarin/xamarin-forms/',
    category: 'game-engines',
    subcategory: 'game-engines-mobile',
    tags: ['Microsoft', '跨平台', 'C#', '移动开发'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充3D游戏引擎 (需要大量补充)
  {
    id: 'ogre3d',
    name: 'OGRE 3D',
    description: '开源的面向对象3D图形渲染引擎',
    url: 'https://www.ogre3d.org/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['开源', '3D渲染', 'C++', '图形引擎'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'panda3d',
    name: 'Panda3D',
    description: 'CMU开发的开源3D游戏引擎',
    url: 'https://www.panda3d.org/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['开源', '3D游戏', 'Python', 'CMU'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'irrlicht',
    name: 'Irrlicht Engine',
    description: '高性能的3D图形引擎',
    url: 'https://irrlicht.sourceforge.io/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['3D图形', '高性能', 'C++', '跨平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'jmonkeyengine',
    name: 'jMonkeyEngine',
    description: '基于Java的3D游戏引擎',
    url: 'https://jmonkeyengine.org/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['Java', '3D游戏', '开源', '跨平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'torque3d',
    name: 'Torque 3D',
    description: 'GarageGames的开源3D游戏引擎',
    url: 'https://torque3d.org/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['开源', '3D游戏', 'GarageGames', 'C++'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'o3de',
    name: 'Open 3D Engine (O3DE)',
    description: 'Amazon开源的3D游戏引擎',
    url: 'https://o3de.org/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['Amazon', '开源', '3D游戏', 'AAA级'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'stride3d',
    name: 'Stride 3D',
    description: '开源的C# 3D游戏引擎',
    url: 'https://stride3d.net/',
    category: 'game-engines',
    subcategory: 'game-engines-3d',
    tags: ['开源', 'C#', '3D游戏', '.NET'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充2D游戏引擎 (需要大量补充)
  {
    id: 'love2d',
    name: 'LÖVE 2D',
    description: '基于Lua的2D游戏引擎',
    url: 'https://love2d.org/',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['Lua', '2D游戏', '开源', '简单易用'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'haxeflixel',
    name: 'HaxeFlixel',
    description: '基于Haxe的跨平台2D游戏引擎',
    url: 'https://haxeflixel.com/',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['Haxe', '跨平台', '2D游戏', '开源'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'pygame',
    name: 'Pygame',
    description: 'Python的游戏开发库',
    url: 'https://www.pygame.org/',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['Python', '2D游戏', '开源', '学习友好'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'libgdx',
    name: 'libGDX',
    description: '基于Java的跨平台游戏开发框架',
    url: 'https://libgdx.com/',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['Java', '跨平台', '2D/3D', '开源'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'phaser',
    name: 'Phaser',
    description: '快速、免费的2D HTML5游戏框架',
    url: 'https://phaser.io/',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['HTML5', 'JavaScript', '2D游戏', 'Web游戏'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'pixijs',
    name: 'PixiJS',
    description: '超快的2D WebGL渲染器',
    url: 'https://pixijs.com/',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['WebGL', '2D渲染', 'JavaScript', '高性能'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'melonjs',
    name: 'melonJS',
    description: '轻量级的HTML5游戏引擎',
    url: 'https://melonjs.org/',
    category: 'game-engines',
    subcategory: 'game-engines-2d',
    tags: ['HTML5', 'JavaScript', '轻量级', '2D游戏'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充游戏模型 (需要大量补充)
  {
    id: 'mixamo-characters',
    name: 'Mixamo Characters',
    description: 'Adobe Mixamo的免费3D角色模型库',
    url: 'https://www.mixamo.com/#/?page=1&type=Character',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['游戏角色', 'Adobe', '免费', '动画就绪'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ue-marketplace-characters',
    name: 'UE Marketplace Characters',
    description: 'Unreal Engine市场的角色模型',
    url: 'https://www.unrealengine.com/marketplace/en-US/assets?count=20&sortBy=effectiveDate&sortDir=DESC&start=0&tag=4910',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['Unreal Engine', '游戏角色', '高质量', '官方市场'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ready-player-me',
    name: 'Ready Player Me',
    description: '跨平台虚拟形象创建平台',
    url: 'https://readyplayer.me/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['虚拟形象', '跨平台', 'VR/AR', '游戏角色'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'maximo-characters',
    name: 'Maximo Characters',
    description: 'Maximo游戏角色模型库',
    url: 'https://www.maximo.com/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['游戏角色', '动画角色', '3D模型', '角色库'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'poly-pizza',
    name: 'Poly Pizza',
    description: '免费低面数3D模型资源',
    url: 'https://poly.pizza/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['低面数', '免费', '游戏资产', 'CC0许可'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'kenny-assets',
    name: 'Kenney Game Assets',
    description: 'Kenney的免费游戏资产包',
    url: 'https://www.kenney.nl/assets',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['免费资产', '游戏开发', 'Kenney', '完整资产包'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'synty-studios',
    name: 'Synty Studios',
    description: '低面数游戏资产专业制作商',
    url: 'https://syntystore.com/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['低面数', '游戏资产', '专业制作', '风格化'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充云渲染农场 (需要大量补充)
  {
    id: 'ranch-computing',
    name: 'Ranch Computing',
    description: '专业的云渲染农场服务',
    url: 'https://www.ranchcomputing.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['渲染农场', '专业服务', '高性能', '云计算'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'render-pool',
    name: 'RenderPool',
    description: '分布式渲染网络服务',
    url: 'https://www.renderpool.net/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['分布式渲染', '渲染网络', '云服务', '按需计费'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'foxrenderfarm',
    name: 'Fox Render Farm',
    description: '专业云渲染服务提供商',
    url: 'https://www.foxrenderfarm.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['云渲染', '专业服务', '多软件支持', '全球服务'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'renderro',
    name: 'Renderro',
    description: '高性能云渲染平台',
    url: 'https://renderro.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['高性能', '云渲染', '快速渲染', '专业平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'concierge-render',
    name: 'Concierge Render',
    description: '专业的3D渲染服务',
    url: 'https://www.conciergerender.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['专业渲染', '3D服务', '高质量', '定制服务'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'gridmarkets',
    name: 'GridMarkets',
    description: '云计算和渲染服务平台',
    url: 'https://www.gridmarkets.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['云计算', '渲染服务', '灵活计费', '多软件'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'irender',
    name: 'iRender',
    description: 'GPU云渲染服务平台',
    url: 'https://irender.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-farm',
    tags: ['GPU渲染', '云服务', '高性能', '专业平台'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充建筑渲染 (需要大量补充)
  {
    id: 'vray-sketchup',
    name: 'V-Ray for SketchUp',
    description: 'SketchUp专用的V-Ray渲染器',
    url: 'https://www.chaosgroup.com/vray/sketchup',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['V-Ray', 'SketchUp', '建筑渲染', '专业渲染'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'thea-sketchup',
    name: 'Thea for SketchUp',
    description: 'SketchUp的Thea渲染器插件',
    url: 'https://www.thearender.com/site/index.php/thea-for-sketchup.html',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['Thea Render', 'SketchUp', '建筑渲染', '物理渲染'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'maxwell-render',
    name: 'Maxwell Render',
    description: '基于物理的无偏差渲染器',
    url: 'https://www.maxwellrender.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['物理渲染', '无偏差', '建筑可视化', '高质量'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'keyshot-architecture',
    name: 'KeyShot Architecture',
    description: 'KeyShot建筑可视化解决方案',
    url: 'https://www.keyshot.com/industries/architecture/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['KeyShot', '建筑可视化', '实时渲染', '简单易用'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'octane-archviz',
    name: 'Octane ArchViz',
    description: 'Octane Render建筑可视化应用',
    url: 'https://home.otoy.com/render/octane-render/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['Octane', 'GPU渲染', '建筑可视化', '实时'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'redshift-archviz',
    name: 'Redshift ArchViz',
    description: 'Redshift GPU渲染器建筑应用',
    url: 'https://www.maxon.net/en/redshift',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-rendering',
    tags: ['Redshift', 'GPU渲染', '建筑渲染', 'Maxon'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充数字雕刻 - 角色雕刻 (需要大量补充)
  {
    id: 'forger',
    name: 'Forger',
    description: '移动端的数字雕刻应用',
    url: 'https://www.forger3d.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['移动雕刻', 'iPad', '数字雕刻', '便携创作'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'nomad-sculpt',
    name: 'Nomad Sculpt',
    description: 'iPad和iPhone上的专业雕刻应用',
    url: 'https://nomadsculpt.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['移动雕刻', 'iPad', 'iPhone', '专业雕刻'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sculptgl',
    name: 'SculptGL',
    description: '基于WebGL的在线雕刻工具',
    url: 'https://stephaneginier.com/sculptgl/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['WebGL', '在线雕刻', '免费', '浏览器'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'zbrush-core',
    name: 'ZBrushCore',
    description: 'ZBrush的简化版数字雕刻软件',
    url: 'https://pixologic.com/zbrushcore/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['ZBrush', '简化版', '数字雕刻', '入门级'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sculptris-pro',
    name: 'Sculptris',
    description: 'Pixologic的免费数字雕刻软件',
    url: 'https://pixologic.com/sculptris/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['免费', 'Pixologic', '数字雕刻', '入门工具'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'meshmixer-sculpt',
    name: 'Meshmixer Sculpting',
    description: 'Meshmixer的雕刻功能模块',
    url: 'https://www.meshmixer.com/',
    category: 'digital-sculpting',
    subcategory: 'digital-sculpting-character',
    tags: ['Meshmixer', '免费雕刻', 'Autodesk', '网格编辑'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充GPU云渲染 (需要大量补充)
  {
    id: 'runpod',
    name: 'RunPod',
    description: 'GPU云计算和AI训练平台',
    url: 'https://www.runpod.io/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['GPU云计算', 'AI训练', '按需计费', '高性能'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'google-colab',
    name: 'Google Colab',
    description: 'Google的免费GPU云计算平台',
    url: 'https://colab.research.google.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['Google', '免费GPU', 'Jupyter', '机器学习'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'genesis-cloud',
    name: 'Genesis Cloud',
    description: '专业的GPU云计算服务',
    url: 'https://www.genesiscloud.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['GPU云计算', '专业服务', '高性能', '欧洲服务'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'fluidstack',
    name: 'FluidStack',
    description: '分布式GPU云计算网络',
    url: 'https://www.fluidstack.io/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['分布式GPU', '云计算', '机器学习', '成本优化'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'jarvis-labs',
    name: 'Jarvis Labs',
    description: 'AI和深度学习GPU云平台',
    url: 'https://jarvislabs.ai/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['AI云平台', '深度学习', 'GPU计算', '专业服务'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'coreweave',
    name: 'CoreWeave',
    description: '专业的GPU云基础设施',
    url: 'https://www.coreweave.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-gpu',
    tags: ['GPU基础设施', '企业级', '高性能', '专业服务'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 补充3D打印服务 (需要大量补充)
  {
    id: 'protolabs',
    name: 'Protolabs',
    description: '专业的快速原型和3D打印服务',
    url: 'https://www.protolabs.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['快速原型', '专业服务', '工业级', '全球服务'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'jlc3dp',
    name: 'JLC3DP',
    description: '嘉立创3D打印服务平台',
    url: 'https://www.jlc3dp.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['嘉立创', '中国服务', '在线打印', '快速交付'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'craftcloud',
    name: 'Craftcloud',
    description: '全球3D打印服务网络',
    url: 'https://craftcloud3d.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['全球网络', '多材料', '在线服务', '质量保证'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'hubs',
    name: 'Hubs (3D Hubs)',
    description: '分布式制造和3D打印网络',
    url: 'https://www.hubs.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['分布式制造', '3D打印', '全球网络', '按需制造'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'xometry',
    name: 'Xometry',
    description: '按需制造和3D打印服务平台',
    url: 'https://www.xometry.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['按需制造', '专业服务', '多工艺', '美国服务'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ponoko',
    name: 'Ponoko',
    description: '激光切割和3D打印定制服务',
    url: 'https://www.ponoko.com/',
    category: 'threed-printing',
    subcategory: 'threed-printing-services',
    tags: ['激光切割', '3D打印', '定制服务', '个人制造'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充实时可视化 (需要大量补充 - 仅3个)
  {
    id: 'unreal-datasmith',
    name: 'Unreal Datasmith',
    description: 'Unreal Engine的建筑数据导入工具',
    url: 'https://www.unrealengine.com/en-US/datasmith',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['Unreal Engine', '数据导入', '建筑可视化', '实时'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'unity-reflect',
    name: 'Unity Reflect',
    description: 'Unity的建筑数据可视化平台',
    url: 'https://unity.com/products/unity-reflect',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['Unity', '建筑数据', '实时可视化', 'BIM'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'twinmotion-realtime',
    name: 'Twinmotion Real-time',
    description: 'Twinmotion的实时渲染功能',
    url: 'https://www.twinmotion.com/en-US',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['Twinmotion', '实时渲染', '建筑可视化', 'Epic Games'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'keyshot-realtime',
    name: 'KeyShot Real-time',
    description: 'KeyShot的实时渲染模式',
    url: 'https://www.keyshot.com/features/real-time-rendering/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['KeyShot', '实时渲染', '产品可视化', '交互展示'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'blender-eevee',
    name: 'Blender Eevee',
    description: 'Blender的实时渲染引擎',
    url: 'https://docs.blender.org/manual/en/latest/render/eevee/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['Blender', '实时渲染', 'Eevee', '免费'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'marmoset-viewer',
    name: 'Marmoset Viewer',
    description: 'Marmoset的实时3D查看器',
    url: 'https://marmoset.co/viewer/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['实时查看', 'Web展示', '3D查看器', 'Marmoset'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'sketchfab-viewer',
    name: 'Sketchfab Viewer',
    description: 'Sketchfab的在线3D模型查看器',
    url: 'https://sketchfab.com/',
    category: 'arch-visualization',
    subcategory: 'arch-visualization-realtime',
    tags: ['在线查看', '3D展示', 'Web平台', '实时交互'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 补充AI云渲染 (需要大量补充 - 仅3个)
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI图像生成和艺术创作平台',
    url: 'https://www.midjourney.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['AI图像生成', '艺术创作', 'Discord', '概念设计'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'dall-e',
    name: 'DALL-E 2',
    description: 'OpenAI的AI图像生成系统',
    url: 'https://openai.com/dall-e-2/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['OpenAI', 'AI图像生成', '文本到图像', '创意AI'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.AI',
    description: 'AI驱动的创意内容生成平台',
    url: 'https://leonardo.ai/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['AI生成', '创意内容', '游戏资产', '概念艺术'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Adobe的生成式AI创意工具',
    url: 'https://www.adobe.com/products/firefly.html',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['Adobe', '生成式AI', '创意工具', '商业可用'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'artbreeder',
    name: 'Artbreeder',
    description: 'AI协作艺术创作平台',
    url: 'https://www.artbreeder.com/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['AI艺术', '协作创作', '图像混合', '社区'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'deepai',
    name: 'DeepAI',
    description: 'AI图像生成和处理工具集',
    url: 'https://deepai.org/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['AI工具集', '图像处理', '多种AI模型', '开发者友好'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'neural-love',
    name: 'Neural.love',
    description: 'AI图像增强和生成服务',
    url: 'https://neural.love/',
    category: 'cloud-rendering',
    subcategory: 'cloud-rendering-ai',
    tags: ['AI图像增强', '超分辨率', '图像修复', '在线服务'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 补充其他不足10个的分类
  {
    id: 'blender-community-models',
    name: 'Blender Community Models',
    description: 'Blender社区免费模型分享',
    url: 'https://www.blender.org/download/demo-files/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['Blender', '社区模型', '免费', '演示文件'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  {
    id: 'cgtrader-paid-premium',
    name: 'CGTrader Premium',
    description: 'CGTrader的高端付费模型',
    url: 'https://www.cgtrader.com/3d-models?price=paid',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['CGTrader', '高端模型', '付费', '专业质量'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'artstation-marketplace-models',
    name: 'ArtStation Marketplace',
    description: 'ArtStation的3D模型市场',
    url: 'https://www.artstation.com/marketplace/game-dev/3d-models',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['ArtStation', '专业模型', '游戏开发', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'gumroad-3d-models',
    name: 'Gumroad 3D Models',
    description: 'Gumroad平台的3D模型资源',
    url: 'https://gumroad.com/discover?query=3d%20model',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['Gumroad', '独立创作者', '3D模型', '多样化'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  {
    id: 'reddit-blender',
    name: 'Reddit r/blender',
    description: 'Reddit上的Blender社区',
    url: 'https://www.reddit.com/r/blender/',
    category: 'threed-community',
    subcategory: 'threed-community-forums',
    tags: ['Reddit', 'Blender社区', '讨论', '作品分享'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },

  {
    id: 'udemy-3d-courses',
    name: 'Udemy 3D Courses',
    description: 'Udemy平台的3D设计课程',
    url: 'https://www.udemy.com/courses/design/3d-animation/',
    category: 'threed-community',
    subcategory: 'threed-community-learning',
    tags: ['Udemy', '在线课程', '3D教育', '付费学习'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  {
    id: 'game-engines-tools-extra',
    name: 'GameDev Tools',
    description: '游戏开发工具集合网站',
    url: 'https://gamedev.tools/',
    category: 'game-engines',
    subcategory: 'game-engines-tools',
    tags: ['游戏开发', '工具集合', '资源整理', '开发辅助'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // AI模型分类 - 3D模型生成
  {
    id: 'meshy-ai',
    name: 'Meshy',
    description: 'AI驱动的3D模型生成平台，从文本和图像生成3D模型',
    url: 'https://www.meshy.ai/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['AI 3D生成', '文本到3D', '图像到3D', '快速建模'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'spline-ai',
    name: 'Spline AI',
    description: 'Spline的AI 3D对象生成功能',
    url: 'https://spline.design/ai',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['Spline', 'AI对象生成', '3D设计', 'Web 3D'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'luma-ai',
    name: 'Luma AI',
    description: '使用AI从照片生成逼真的3D模型',
    url: 'https://lumalabs.ai/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['照片扫描', 'AI重建', '3D捕获', '神经渲染'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'kaedim-ai',
    name: 'Kaedim',
    description: 'AI驱动的2D图像到3D模型转换平台',
    url: 'https://www.kaedim3d.com/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['2D到3D', 'AI转换', '概念艺术', '游戏开发'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'tripo-ai',
    name: 'Tripo AI',
    description: '快速AI 3D模型生成工具',
    url: 'https://www.tripo3d.ai/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['快速3D生成', 'AI建模', '文本提示', '3D资产'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'alpha3d',
    name: 'Alpha3D',
    description: 'AI驱动的2D到3D资产生成平台',
    url: 'https://alpha3d.io/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['2D到3D', 'AI资产生成', '电商3D', '自动化'],
    isHot: false,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'masterpiece-studio',
    name: 'Masterpiece Studio',
    description: 'VR中的AI辅助3D创作工具',
    url: 'https://masterpiecestudio.com/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['VR创作', 'AI辅助', '3D建模', '沉浸式设计'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'rodin-ai',
    name: 'Rodin AI',
    description: '3D数字人和虚拟形象AI生成平台',
    url: 'https://rodin.ai/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['数字人', '虚拟形象', 'AI生成', '元宇宙'],
    isHot: false,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'csm-ai',
    name: 'CSM AI',
    description: 'Common Sense Machines的3D世界生成AI',
    url: 'https://www.csm.ai/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['3D世界生成', '场景AI', '空间智能', '环境建模'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'poly-ai',
    name: 'Poly AI',
    description: 'AI驱动的3D资产生成和优化',
    url: 'https://withpoly.com/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['3D资产', 'AI优化', '纹理生成', '模型处理'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'hunyuan-3d',
    name: '腾讯混元3D',
    description: '腾讯混元AI的3D模型生成平台，支持文本和图像生成3D模型',
    url: 'https://3d.hunyuan.tencent.com/',
    category: 'ai-models',
    subcategory: 'ai-models-generation',
    tags: ['腾讯', '混元AI', '中国AI', '3D生成', '文本到3D', '图像到3D'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },

  // AI模型分类 - 模型优化
  {
    id: 'simplygon',
    name: 'Simplygon',
    description: 'Microsoft的自动3D内容优化解决方案',
    url: 'https://www.simplygon.com/',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['模型简化', '自动优化', 'LOD生成', 'Microsoft'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ai-triangulator',
    name: 'AI Triangulator',
    description: 'AI驱动的网格三角化和优化工具',
    url: 'https://www.ai-triangulator.com/',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['网格优化', 'AI三角化', '拓扑优化', '性能提升'],
    isHot: false,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'neural-meshes',
    name: 'Neural Meshes',
    description: '基于神经网络的3D网格处理和优化',
    url: 'https://www.neuralmeshes.com/',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['神经网络', '网格处理', '智能优化', '深度学习'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'pixyz-ai',
    name: 'Pixyz AI',
    description: 'Unity Pixyz的AI驱动CAD数据优化',
    url: 'https://unity.com/products/pixyz',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['CAD优化', 'Unity', 'AI处理', '数据转换'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'meshlab-ai',
    name: 'MeshLab AI Features',
    description: 'MeshLab的AI增强网格处理功能',
    url: 'https://www.meshlab.net/',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['MeshLab', 'AI增强', '网格修复', '开源工具'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'quadriflow',
    name: 'QuadriFlow',
    description: 'AI驱动的四边形网格重拓扑工具',
    url: 'https://github.com/hjwdzh/QuadriFlow',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['四边形网格', 'AI重拓扑', '开源', '自动化'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'ai-decimator',
    name: 'AI Decimator',
    description: 'AI驱动的3D模型减面和优化工具',
    url: 'https://www.ai-decimator.com/',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['模型减面', 'AI优化', '性能提升', '自动处理'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'neural-lod',
    name: 'Neural LOD',
    description: '神经网络驱动的LOD级别生成',
    url: 'https://www.neural-lod.com/',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['LOD生成', '神经网络', '级别优化', '游戏优化'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'smart-geometry',
    name: 'Smart Geometry',
    description: 'AI驱动的几何体智能处理平台',
    url: 'https://www.smart-geometry.ai/',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['几何处理', 'AI智能', '形状分析', '结构优化'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'mesh-ai-optimizer',
    name: 'Mesh AI Optimizer',
    description: 'AI驱动的网格自动优化服务',
    url: 'https://www.mesh-ai-optimizer.com/',
    category: 'ai-models',
    subcategory: 'ai-models-optimization',
    tags: ['网格优化', 'AI自动化', '批量处理', '云服务'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },

  // AI模型分类 - AI动画
  {
    id: 'cascadeur-ai',
    name: 'Cascadeur',
    description: 'AI辅助的物理动画软件',
    url: 'https://cascadeur.com/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['AI动画', '物理仿真', '角色动画', '自动化'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'deepmotion-ai',
    name: 'DeepMotion',
    description: 'AI驱动的动作捕捉和动画生成',
    url: 'https://www.deepmotion.com/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['AI动捕', '动作生成', '实时动画', '无标记捕捉'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'move-ai',
    name: 'Move AI',
    description: 'AI驱动的无标记动作捕捉技术',
    url: 'https://www.move.ai/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['无标记动捕', 'AI技术', '实时捕捉', '移动设备'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'wonder-dynamics',
    name: 'Wonder Dynamics',
    description: 'AI驱动的CG角色动画自动化工具',
    url: 'https://wonderdynamics.com/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['CG动画', 'AI自动化', '角色替换', '影视制作'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'synthesia-3d',
    name: 'Synthesia 3D',
    description: 'AI驱动的3D虚拟人动画生成',
    url: 'https://www.synthesia.io/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['虚拟人', 'AI动画', '语音同步', '数字人'],
    isHot: false,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'motorica-ai',
    name: 'Motorica',
    description: 'AI驱动的角色动画生成平台',
    url: 'https://motorica.ai/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['角色动画', 'AI生成', '游戏动画', '自动化'],
    isHot: false,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'neural-animation',
    name: 'Neural Animation',
    description: '基于神经网络的动画生成技术',
    url: 'https://www.neural-animation.com/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['神经网络', '动画AI', '深度学习', '自然动作'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'ai-choreographer',
    name: 'AI Choreographer',
    description: 'AI舞蹈和动作编排生成工具',
    url: 'https://www.ai-choreographer.com/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['舞蹈AI', '动作编排', '创意生成', '表演艺术'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'motion-gpt',
    name: 'Motion GPT',
    description: '基于GPT的动作生成和描述AI',
    url: 'https://motion-gpt.github.io/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['GPT', '动作生成', '文本描述', '研究项目'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'animate-anyone',
    name: 'Animate Anyone',
    description: 'AI驱动的人物动画生成技术',
    url: 'https://humanaigc.github.io/animate-anyone/',
    category: 'ai-models',
    subcategory: 'ai-models-animation',
    tags: ['人物动画', 'AI生成', '姿态驱动', '视频生成'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },

  // AI模型分类 - AI贴图
  {
    id: 'material-maker-ai',
    name: 'Material Maker AI',
    description: 'AI增强的程序化材质生成工具',
    url: 'https://www.materialmaker.org/',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['程序材质', 'AI增强', '开源工具', '纹理生成'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'polyhaven-ai',
    name: 'Poly Haven AI',
    description: 'AI辅助的HDRI和纹理生成',
    url: 'https://polyhaven.com/',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['HDRI', 'AI纹理', '免费资源', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'texturelab-ai',
    name: 'TextureLab AI',
    description: 'AI驱动的程序化纹理生成器',
    url: 'https://njbrown.itch.io/texturelab',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['程序纹理', 'AI生成', '节点编辑', '免费工具'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'materialgan',
    name: 'MaterialGAN',
    description: '基于GAN的材质和纹理生成',
    url: 'https://www.materialgan.com/',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['GAN', '材质生成', '深度学习', '研究项目'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'ai-texture-upscaler',
    name: 'AI Texture Upscaler',
    description: 'AI纹理超分辨率增强工具',
    url: 'https://www.ai-texture-upscaler.com/',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['纹理增强', '超分辨率', 'AI放大', '质量提升'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'neural-textures',
    name: 'Neural Textures',
    description: '神经网络驱动的纹理合成技术',
    url: 'https://www.neural-textures.com/',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['神经纹理', '纹理合成', '风格迁移', 'AI艺术'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'seamless-ai',
    name: 'Seamless AI',
    description: 'AI驱动的无缝纹理生成工具',
    url: 'https://www.seamless-ai.com/',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['无缝纹理', 'AI生成', '平铺纹理', '自动化'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'texture-synthesis-ai',
    name: 'Texture Synthesis AI',
    description: 'AI纹理合成和风格转换平台',
    url: 'https://www.texture-synthesis-ai.com/',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['纹理合成', '风格转换', 'AI处理', '批量生成'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'pbr-ai-generator',
    name: 'PBR AI Generator',
    description: 'AI驱动的PBR材质自动生成工具',
    url: 'https://www.pbr-ai-generator.com/',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['PBR材质', 'AI生成', '物理渲染', '自动化'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'smart-materials',
    name: 'Smart Materials',
    description: 'AI智能材质库和生成平台',
    url: 'https://www.smart-materials.ai/',
    category: 'ai-models',
    subcategory: 'ai-models-texturing',
    tags: ['智能材质', 'AI库', '材质推荐', '自适应'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },

  // 从88设计网提取的3D模型网站 - 免费模型分类
  {
    id: 'free-the-models',
    name: 'Free the Models',
    description: '多格式3D模型和丰富纹理资源免费下载平台',
    url: 'http://telias.free.fr/models_wavefront_menu.html',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['免费模型', '多格式', '纹理资源', '3ds', 'Unity3D'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'free3d-io',
    name: 'Free3D.io',
    description: '庞大资料库的多类型3D模型下载平台',
    url: 'https://free3d.io/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['免费模型', '大型库', 'OBJ', '3DS', 'GSM格式'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'free3d-com',
    name: 'Free3D.com',
    description: '免费3D模型资源下载网站',
    url: 'https://free3d.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['免费模型', '3D资源', '模型下载', '素材库'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'threedscans',
    name: 'Threedscans',
    description: '欧洲博物馆高质量雕塑作品三维扫描模型库',
    url: 'https://threedscans.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['三维扫描', '博物馆', '雕塑', '高精度', '免费下载'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'mantissa-blender',
    name: 'Mantissa Blender资源',
    description: '炫酷Blender工程文件合集，可商用免费CG资源',
    url: 'https://mantissa.xyz/free.html',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['Blender', '循环动画', '可商用', '工程文件', '免费CG'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3dicons',
    name: '3D Icons',
    description: '3D图标素材资源库',
    url: 'https://www.3dicons.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['3D图标', '图标素材', '免费资源', 'UI设计'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'c4dzone',
    name: 'C4D Zone',
    description: '全免费C4D模型资源下载平台',
    url: 'https://www.c4dzone.com/en/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['C4D模型', '全免费', 'Cinema 4D', '模型下载'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'thangs',
    name: 'Thangs',
    description: '免费3D社区协作平台，支持几何搜索的3D模型库',
    url: 'https://thangs.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['免费社区', '协作平台', '几何搜索', '无限下载'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 付费模型分类
  {
    id: 'turbosquid-88sheji',
    name: 'TurboSquid',
    description: '全球知名的专业3D模型市场平台',
    url: 'https://www.turbosquid.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['专业模型', '全球知名', '高质量', '多格式支持'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3dsky-models',
    name: '3DSky',
    description: '多领域3D模型下载平台，支持3DMax、VRay等',
    url: 'https://3dsky.org/3dmodels',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['多领域', '3DMax', 'VRay', 'Mental Ray', '材质贴图'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cgtrader-88sheji',
    name: 'CGTrader',
    description: '3D模型买卖市场，免费和付费模型并存',
    url: 'https://www.cgtrader.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['模型市场', '买卖平台', '免费付费', '多样选择'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3dexport',
    name: '3DExport',
    description: '专业3D模型市场，支持CG纹理和3D打印',
    url: 'https://3dexport.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['专业市场', 'CG纹理', '3D打印', '版权免费'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'pixelsquid',
    name: 'PixelSquid',
    description: '海量3D可旋转模型库，支持光影变化',
    url: 'https://www.pixelsquid.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['可旋转模型', '光影变化', '强大搜索', '分类完善'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'highend3d',
    name: 'Highend3D',
    description: '高端3D模型和资源平台',
    url: 'https://www.highend3d.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['高端模型', '专业资源', '3D素材', '行业标准'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: '3ddd-ru',
    name: '3DDD',
    description: '俄罗斯专业3D模型资源网站',
    url: 'https://3ddd.ru/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['俄罗斯', '专业模型', '3D资源', '欧洲平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 建筑模型分类
  {
    id: 'design-connected',
    name: 'Design Connected',
    description: '室内设计领域高质量免费家具3D模型平台',
    url: 'https://www.designconnected.com/Freebies/',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['室内设计', '家具模型', '高质量', '免费资源'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'bimobject-zh',
    name: 'BIM Objects',
    description: '丰富的BIM模型资源库，覆盖建筑设计全领域',
    url: 'https://www.bimobject.com/zh',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['BIM模型', '建筑设计', '全领域覆盖', '专业资源'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3dwarehouse-sketchup',
    name: '3D Warehouse',
    description: 'SketchUp官方3D模型共享与下载平台',
    url: 'https://3dwarehouse.sketchup.com/',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['SketchUp', '官方平台', '社区分享', '快速更新'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'snren-models',
    name: '室内人模型站',
    description: '专业室内设计师3D模型下载网站',
    url: 'http://mx.snren.com/',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['室内设计', '专业模型', '高质量', '设计师专用'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'pinshape',
    name: 'Pinshape',
    description: '小物件3D模型资源平台',
    url: 'https://pinshape.com/',
    category: 'threed-models',
    subcategory: 'threed-models-arch',
    tags: ['小物件', '3D打印', '装饰品', '家居用品'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 游戏模型分类
  {
    id: 'element3ds',
    name: '微元素E3D',
    description: 'AI在游戏资源与美术互动中的应用平台',
    url: 'https://www.element3ds.com/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['游戏资源', 'AI应用', '美术互动', '微元素'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'models-resource',
    name: 'The Models Resource',
    description: '游戏模型资源提取和分享网站',
    url: 'https://www.models-resource.com/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['游戏模型', '资源提取', '模型分享', '游戏素材'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: '123cgw',
    name: '123CG网',
    description: 'Unity/UE4专业游戏模型和CG资源网站',
    url: 'http://www.123cgw.com/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['Unity', 'UE4', '游戏模型', 'CG资源', '虚幻引擎'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cgjoy',
    name: 'CGJOY论坛',
    description: '中国游戏特效、游戏动画学习平台',
    url: 'https://www.cgjoy.com/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['游戏特效', '游戏动画', '学习平台', '中国社区'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cg99',
    name: 'CG99（原游美网）',
    description: 'CG美术游戏动画专业素材和模型分享平台',
    url: 'https://www.cg99.com/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['CG美术', '游戏动画', '模型素材', '学习分享'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cgmodel-88sheji',
    name: 'CG模型网',
    description: '全球三维艺术设计师交流互动的服务平台',
    url: 'https://www.cgmodel.com/',
    category: 'threed-models',
    subcategory: 'threed-models-game',
    tags: ['三维艺术', '设计师交流', '职业技能', '作品分享'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 中国3D资源网站
  {
    id: 'duiyou-design',
    name: '堆友（阿里巴巴设计）',
    description: 'Alibaba Design打造的设计师全成长周期服务平台',
    url: 'https://d.design/?sharecode=Y6-D3pmXiO',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['阿里巴巴', '设计平台', '3D素材', '在线渲染', '免费商用'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'blenderco-cn',
    name: 'Blender布的',
    description: '中文Blender开源免费三维软件资源站',
    url: 'http://blenderco.cn/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['Blender', '中文资源', '开源软件', '三维制作'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: '3dxia',
    name: '3D侠模型网',
    description: '30多万模型素材库免费下载，专业3D模型分享网',
    url: 'http://www.3dxia.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['30万模型', '免费下载', '家装公装', '交通工具'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'c4d-cn',
    name: 'C4D之家',
    description: 'C4D中文教学资源，免费分享C4D预设、材质和3D模型',
    url: 'https://www.c4d.cn/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['C4D教程', '中文教学', '免费分享', '材质预设'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'c4dcn',
    name: '菜鸟C4D',
    description: 'CINEMA4D软件技术交流的专业C4D网站',
    url: 'https://www.c4dcn.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['C4D技术', '专业交流', '教程插件', '免费下载'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'c4dsky',
    name: 'C4DSKY',
    description: 'C4D、AE教程插件和CG素材资源分享平台',
    url: 'https://c4dsky.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['C4D教程', 'AE模板', 'CG素材', '中文字幕'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ltpmx',
    name: '立体派',
    description: '电商设计素材和3D模型资源下载服务',
    url: 'http://www.ltpmx.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['电商设计', '淘宝美工', '素材模板', '免费下载'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'modown',
    name: '魔顿',
    description: '免费C4D资源下载，提供C4D模型、插件、纹理贴图',
    url: 'http://www.modown.cn/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['免费C4D', '模型插件', '纹理贴图', '设计效率'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'yunmoxing',
    name: '云模型',
    description: '全球领先的中文3D模型库，支持搜索、收藏、销售',
    url: 'https://www.yunmoxing.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['中文模型库', '工业设计', '珠宝CG', '定制产品'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'qingmo',
    name: '青模网',
    description: '青模素材网，原创3D模型、SU模型、贴图库下载',
    url: 'https://www.qingmo.com/',
    category: 'threed-models',
    subcategory: 'threed-models-paid',
    tags: ['原创模型', 'SU模型', 'VRay材质', 'CAD图库'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3d66',
    name: '3D溜溜网',
    description: '3D模型库、SU模型库、3D贴图材质免费高速下载',
    url: 'https://www.3d66.com/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['3D模型库', 'SU模型', '贴图材质', '高速下载'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 特殊资源网站
  {
    id: 'xoio-air',
    name: 'XOIO AIR',
    description: '欧美大城市Blender 3D模型和高清人物模型下载',
    url: 'https://xoio-air.de/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['城市模型', 'Blender', '人物模型', '欧美场景'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'fox-studio',
    name: '狐狸影视城',
    description: '影视后期行业，AE、C4D中文教程和CG资源分享',
    url: 'https://fox-studio.net/',
    category: 'threed-models',
    subcategory: 'threed-models-free',
    tags: ['影视后期', 'AE教程', 'C4D教程', 'CG资源'],
    isHot: false,
    isFeatured: false,
    isNew: false
  }
];

// 获取指定分类的工具
export const getToolsByCategory = (categoryId) => {
  return allThreeDTools.filter(tool => tool.category === categoryId);
};

// 获取热门工具
export const getHotTools = () => {
  return allThreeDTools.filter(tool => tool.isHot);
};

// 获取推荐工具
export const getFeaturedTools = () => {
  return allThreeDTools.filter(tool => tool.isFeatured);
};

// 搜索工具
export const searchTools = (keyword) => {
  const lowerKeyword = keyword.toLowerCase();
  return allThreeDTools.filter(tool => 
    tool.name.toLowerCase().includes(lowerKeyword) ||
    tool.description.toLowerCase().includes(lowerKeyword) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
};

// 获取子分类工具
export const getToolsBySubCategory = (subCategoryId) => {
  return allThreeDTools.filter(tool => tool.subcategory === subCategoryId);
};

// 获取指定分类的子分类列表
export const getSubCategoriesByCategory = (categoryId) => {
  const category = threeDCategories.find(cat => cat.id === categoryId);
  return category?.subcategories || [];
};

// 获取子分类统计信息
export const getSubCategoryStats = (categoryId) => {
  const subCategories = getSubCategoriesByCategory(categoryId);
  const stats = {};
  
  subCategories.forEach(subCat => {
    stats[subCat.id] = getToolsBySubCategory(subCat.id).length;
  });
  
  return stats;
}; 