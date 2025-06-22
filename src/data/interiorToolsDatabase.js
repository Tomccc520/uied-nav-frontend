/**
 * @file interiorToolsDatabase.js
 * @description 室内设计工具数据库 - 包含室内设计、建筑可视化、家装设计等工具数据
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// 室内设计工具分类定义
export const interiorCategories = [
  {
    id: 'cad-software',
    name: 'CAD软件',
    iconUrl: 'cad',
    color: '#34495e',
    description: '专业CAD绘图和建筑设计软件',
    subcategories: [
      { id: 'cad-2d', name: '2D CAD' },
      { id: 'cad-3d', name: '3D CAD' },
      { id: 'cad-bim', name: 'BIM软件' },
      { id: 'cad-free', name: '免费CAD' }
    ]
  },
  {
    id: '3d-modeling',
    name: '3D建模',
    iconUrl: '3d',
    color: '#6f42c1',
    description: '室内空间3D建模和设计软件',
    subcategories: [
      { id: '3d-general', name: '通用建模' },
      { id: '3d-parametric', name: '参数化建模' },
      { id: '3d-sculpting', name: '雕刻建模' },
      { id: '3d-procedural', name: '程序化建模' }
    ]
  },
  {
    id: 'rendering',
    name: '渲染软件',
    iconUrl: 'visualization',
    color: '#e74c3c',
    description: '室内效果图渲染和可视化工具',
    subcategories: [
      { id: 'rendering-realtime', name: '实时渲染' },
      { id: 'rendering-offline', name: '离线渲染' },
      { id: 'rendering-gpu', name: 'GPU渲染' },
      { id: 'rendering-cloud', name: '云渲染' }
    ]
  },
  {
    id: 'vr-walkthrough',
    name: 'VR漫游',
    iconUrl: 'metaverse',
    color: '#27ae60',
    description: '虚拟现实室内漫游和展示工具',
    subcategories: [
      { id: 'vr-headset', name: 'VR头显' },
      { id: 'vr-web', name: 'Web VR' },
      { id: 'vr-mobile', name: '移动VR' },
      { id: 'ar-tools', name: 'AR工具' }
    ]
  },
  {
    id: 'furniture-design',
    name: '家具设计',
    iconUrl: 'furniture',
    color: '#f39c12',
    description: '家具设计和定制化工具',
    subcategories: [
      { id: 'furniture-modeling', name: '家具建模' },
      { id: 'furniture-catalog', name: '家具目录' },
      { id: 'furniture-custom', name: '定制家具' },
      { id: 'furniture-library', name: '家具库' }
    ]
  },
  {
    id: 'material-library',
    name: '材质库',
    iconUrl: 'texture',
    color: '#9b59b6',
    description: '室内设计材质和纹理资源库',
    subcategories: [
      { id: 'material-pbr', name: 'PBR材质' },
      { id: 'material-texture', name: '纹理贴图' },
      { id: 'material-fabric', name: '面料材质' },
      { id: 'material-wood', name: '木材材质' }
    ]
  },
  {
    id: 'lighting-design',
    name: '灯光设计',
    iconUrl: 'lighting',
    color: '#e67e22',
    description: '室内灯光设计和照明计算工具',
    subcategories: [
      { id: 'lighting-calculation', name: '照明计算' },
      { id: 'lighting-simulation', name: '灯光模拟' },
      { id: 'lighting-ies', name: 'IES灯光' },
      { id: 'lighting-smart', name: '智能照明' }
    ]
  },
  {
    id: 'project-management',
    name: '项目管理',
    iconUrl: 'project',
    color: '#3498db',
    description: '室内设计项目管理和协作工具',
    subcategories: [
      { id: 'project-planning', name: '项目规划' },
      { id: 'project-collaboration', name: '团队协作' },
      { id: 'project-budget', name: '预算管理' },
      { id: 'project-timeline', name: '进度管理' }
    ]
  }
];

// 室内设计工具数据
export const allInteriorTools = [
  // CAD软件
  {
    id: 'autocad',
    name: 'AutoCAD',
    description: 'Autodesk专业CAD设计软件，室内设计行业标准工具',
    url: 'https://www.autodesk.com/products/autocad/',
    category: 'cad-software',
    subcategory: 'cad-2d',
    tags: ['CAD', '建筑设计', '室内设计', 'Autodesk', '专业'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'autocad-architecture',
    name: 'AutoCAD Architecture',
    description: 'AutoCAD建筑版，专为建筑和室内设计师优化',
    url: 'https://www.autodesk.com/products/autocad-architecture/',
    category: 'cad-software',
    subcategory: 'cad-3d',
    tags: ['CAD', '建筑', '室内设计', '专业版', 'Autodesk'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'vectorworks',
    name: 'Vectorworks',
    description: '专业的建筑和室内设计CAD软件，功能全面',
    url: 'https://www.vectorworks.net/',
    category: 'cad-software',
    subcategory: 'cad-3d',
    tags: ['CAD', '建筑设计', '室内设计', '专业', 'BIM'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'archicad',
    name: 'ArchiCAD',
    description: 'Graphisoft的BIM建筑设计软件，支持室内设计',
    url: 'https://graphisoft.com/solutions/archicad/',
    category: 'cad-software',
    subcategory: 'cad-bim',
    tags: ['BIM', '建筑设计', '室内设计', 'Graphisoft'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'draftsight',
    name: 'DraftSight',
    description: '免费的2D CAD绘图软件，适合室内平面图设计',
    url: 'https://www.3ds.com/products-services/draftsight-cad-software/',
    category: 'cad-software',
    subcategory: 'cad-free',
    tags: ['CAD', '免费', '2D绘图', '平面图', 'DWG'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 3D建模软件
  {
    id: 'sketchup',
    name: 'SketchUp',
    description: '易学易用的3D建模软件，广泛应用于建筑和室内设计',
    url: 'https://www.sketchup.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['3D建模', '易用', '室内设计', '建筑设计', 'Google'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: '3ds-max',
    name: '3ds Max',
    description: 'Autodesk专业3D建模、动画和渲染软件',
    url: 'https://www.autodesk.com/products/3ds-max/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['3D建模', '渲染', '建筑可视化', 'Autodesk', '专业'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'blender',
    name: 'Blender',
    description: '免费开源的3D创作套件，支持建模、动画、渲染',
    url: 'https://www.blender.org/',
    category: '3d-modeling',
    subcategory: '3d-sculpting',
    tags: ['3D建模', '开源', '免费', '渲染', '动画'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'maya',
    name: 'Maya',
    description: 'Autodesk专业级3D建模、动画、仿真和渲染软件',
    url: 'https://www.autodesk.com/products/maya/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['3D建模', '动画', '专业软件', 'Autodesk'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'rhino',
    name: 'Rhino 3D',
    description: '精确的3D建模软件，适合复杂几何体设计',
    url: 'https://www.rhino3d.com/',
    category: '3d-modeling',
    subcategory: '3d-parametric',
    tags: ['3D建模', '精确建模', 'NURBS', '工业设计'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 渲染软件
  {
    id: 'vray',
    name: 'V-Ray',
    description: '业界领先的渲染引擎，创造照片级室内设计效果图',
    url: 'https://www.chaosgroup.com/vray',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['渲染', '照片级', '专业', 'GPU渲染', '效果图'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'lumion',
    name: 'Lumion',
    description: '快速3D渲染软件，轻松制作室内设计动画和效果图',
    url: 'https://lumion.com/',
    category: 'rendering',
    subcategory: 'rendering-realtime',
    tags: ['实时渲染', '建筑可视化', '动画', '快速', '易用'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'corona-renderer',
    name: 'Corona Renderer',
    description: '高质量照片级渲染器，专为建筑可视化设计',
    url: 'https://corona-renderer.com/',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['渲染', '照片级', '建筑可视化', '高质量'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'octane-render',
    name: 'Octane Render',
    description: '基于GPU的无偏差渲染器，速度快质量高',
    url: 'https://home.otoy.com/render/octane-render/',
    category: 'rendering',
    subcategory: 'rendering-gpu',
    tags: ['GPU渲染', '实时渲染', '高质量', '无偏差'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'keyshot',
    name: 'KeyShot',
    description: '实时光线追踪渲染软件，操作简单效果出色',
    url: 'https://www.keyshot.com/',
    category: 'rendering',
    subcategory: 'rendering-realtime',
    tags: ['实时渲染', '光线追踪', '简单易用', '产品渲染'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // VR漫游工具
  {
    id: 'enscape',
    name: 'Enscape',
    description: '实时渲染和虚拟现实插件，支持多种建模软件',
    url: 'https://enscape3d.com/',
    category: 'vr-walkthrough',
    subcategory: 'vr-headset',
    tags: ['实时渲染', 'VR', '建筑可视化', '插件', '虚拟现实'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'twinmotion',
    name: 'Twinmotion',
    description: 'Epic Games的实时可视化软件，支持VR和AR',
    url: 'https://www.twinmotion.com/',
    category: 'vr-walkthrough',
    subcategory: 'ar-tools',
    tags: ['实时可视化', 'VR', 'AR', 'Epic Games', '建筑'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'unreal-engine-arch',
    name: 'Unreal Engine建筑版',
    description: '虚幻引擎建筑可视化版本，创建沉浸式体验',
    url: 'https://www.unrealengine.com/en-US/industry/architecture',
    category: 'vr-walkthrough',
    subcategory: 'vr-headset',
    tags: ['虚幻引擎', 'VR', '建筑可视化', '沉浸式', '实时'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'fuzor',
    name: 'Fuzor',
    description: 'BIM+VR解决方案，实现建筑信息模型的虚拟现实体验',
    url: 'https://www.kalloctech.com/fuzor/',
    category: 'vr-walkthrough',
    subcategory: 'vr-web',
    tags: ['BIM', 'VR', '建筑信息模型', '虚拟现实', '协作'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 家具设计工具
  {
    id: 'fusion360',
    name: 'Fusion 360',
    description: 'Autodesk云端CAD/CAM/CAE软件，适合家具产品设计',
    url: 'https://www.autodesk.com/products/fusion-360/',
    category: 'furniture-design',
    subcategory: 'furniture-modeling',
    tags: ['CAD', '云端', '产品设计', '家具设计', 'CAM'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'solidworks',
    name: 'SolidWorks',
    description: '专业3D CAD设计软件，广泛用于家具和产品设计',
    url: 'https://www.solidworks.com/',
    category: 'furniture-design',
    subcategory: 'furniture-modeling',
    tags: ['CAD', '机械设计', '产品设计', '家具设计', '3D建模'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'inventor',
    name: 'Autodesk Inventor',
    description: 'Autodesk专业机械设计和产品开发软件',
    url: 'https://www.autodesk.com/products/inventor/',
    category: 'furniture-design',
    subcategory: 'furniture-modeling',
    tags: ['机械设计', '产品开发', 'Autodesk', '3D建模'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'woodwork-for-inventor',
    name: 'Woodwork for Inventor',
    description: '专为木工和家具设计的Inventor插件',
    url: 'https://www.woodworkforinventor.com/',
    category: 'furniture-design',
    subcategory: 'furniture-custom',
    tags: ['木工设计', '家具设计', 'Inventor插件', '专业'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 材质库
  {
    id: 'poliigon',
    name: 'Poliigon',
    description: '高质量PBR材质和纹理库，专业建筑可视化资源',
    url: 'https://www.poliigon.com/',
    category: 'material-library',
    subcategory: 'material-pbr',
    tags: ['PBR材质', '纹理库', '建筑可视化', '高质量', '专业'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'textures-com',
    name: 'Textures.com',
    description: '全球最大的纹理和材质资源库，免费和付费资源',
    url: 'https://www.textures.com/',
    category: 'material-library',
    subcategory: 'material-texture',
    tags: ['纹理库', '材质资源', '免费', '付费', '全球最大'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'arroway-textures',
    name: 'Arroway Textures',
    description: '专业建筑可视化纹理库，高分辨率无缝纹理',
    url: 'https://www.arroway-textures.ch/',
    category: 'material-library',
    subcategory: 'material-seamless',
    tags: ['建筑纹理', '高分辨率', '无缝纹理', '专业', '可视化'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cc0-textures',
    name: 'CC0 Textures',
    description: '免费CC0许可的PBR纹理库，可商用无版权限制',
    url: 'https://cc0textures.com/',
    category: 'material-library',
    subcategory: 'material-free',
    tags: ['免费纹理', 'CC0许可', 'PBR', '商用', '无版权'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },

  // 灯光设计工具
  {
    id: 'dialux',
    name: 'DIALux',
    description: '专业照明设计软件，免费的灯光计算和设计工具',
    url: 'https://www.dialux.com/',
    category: 'lighting-design',
    subcategory: 'lighting-calculation',
    tags: ['照明设计', '灯光计算', '免费', '专业', 'LED'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'relux',
    name: 'Relux',
    description: '专业照明设计和计算软件，支持复杂照明项目',
    url: 'https://relux.com/',
    category: 'lighting-design',
    subcategory: 'lighting-simulation',
    tags: ['照明设计', '照明计算', '专业', '复杂项目'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'agi32',
    name: 'AGi32',
    description: '建筑照明设计软件，精确的照明分析和计算',
    url: 'https://www.agi32.com/',
    category: 'lighting-design',
    subcategory: 'lighting-analysis',
    tags: ['建筑照明', '照明分析', '精确计算', '专业软件'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 项目管理工具
  {
    id: 'bim360',
    name: 'BIM 360',
    description: 'Autodesk云端建筑项目管理和协作平台',
    url: 'https://www.autodesk.com/bim-360/',
    category: 'project-management',
    subcategory: 'project-collaboration',
    tags: ['BIM', '项目管理', '云端协作', 'Autodesk', '建筑'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'procore',
    name: 'Procore',
    description: '建筑项目管理平台，团队协作和项目跟踪',
    url: 'https://www.procore.com/',
    category: 'project-management',
    subcategory: 'project-timeline',
    tags: ['项目管理平台', '团队协作', '项目跟踪', '建筑'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'planswift',
    name: 'PlanSwift',
    description: '建筑工程量计算和估算软件，提高项目效率',
    url: 'https://www.planswift.com/',
    category: 'project-management',
    subcategory: 'project-budgeting',
    tags: ['工程量计算', '估算软件', '建筑', '项目效率'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'monday-construction',
    name: 'Monday.com建筑版',
    description: '适用于建筑和室内设计团队的项目管理平台',
    url: 'https://monday.com/solutions/construction/',
    category: 'project-management',
    tags: ['项目管理', '团队协作', '建筑', '室内设计'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 新增室内设计工具
  // 色彩搭配工具
  {
    id: 'benjamin-moore-color-tool',
    name: 'Benjamin Moore Color Tool',
    description: '专业涂料品牌的色彩搭配和可视化工具',
    url: 'https://www.benjaminmoore.com/en-us/color-overview/color-tools',
    category: 'color-matching',
    tags: ['色彩搭配', '涂料', '可视化', '专业品牌'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sherwin-williams-colorsnap',
    name: 'Sherwin-Williams ColorSnap',
    description: '宣伟涂料的色彩匹配和设计工具',
    url: 'https://www.sherwin-williams.com/homeowners/color/color-tools/colorsnap-mobile',
    category: 'color-matching',
    tags: ['色彩匹配', '宣伟', '设计工具', '移动应用'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'dulux-colour-palette',
    name: 'Dulux Colour Palette',
    description: '多乐士色彩调色板和搭配工具',
    url: 'https://www.dulux.com.au/colour-palette',
    category: 'color-matching',
    tags: ['色彩调色板', '多乐士', '搭配工具', '色彩方案'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 空间规划工具
  {
    id: 'magicplan',
    name: 'magicplan',
    description: '使用手机摄像头快速创建平面图的AR应用',
    url: 'https://www.magicplan.app/',
    category: 'space-planning',
    tags: ['AR', '平面图', '手机应用', '快速创建'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'roomscan-pro',
    name: 'RoomScan Pro',
    description: '通过触摸墙面快速测量和创建平面图',
    url: 'https://www.roomscanapp.com/',
    category: 'space-planning',
    tags: ['测量', '平面图', '快速创建', '移动应用'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'floor-plan-creator',
    name: 'Floor Plan Creator',
    description: '简单易用的平面图创建工具',
    url: 'https://floorplancreator.net/',
    category: 'space-planning',
    tags: ['平面图创建', '简单易用', '在线工具', '设计'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 软装设计工具
  {
    id: 'modsy',
    name: 'Modsy',
    description: '3D室内设计服务，提供个性化设计方案',
    url: 'https://www.modsy.com/',
    category: 'soft-furnishing',
    tags: ['3D设计', '个性化', '设计服务', '软装'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'havenly',
    name: 'Havenly',
    description: '在线室内设计服务，专业设计师一对一服务',
    url: 'https://havenly.com/',
    category: 'soft-furnishing',
    tags: ['在线设计', '专业设计师', '一对一', '软装设计'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'decorist',
    name: 'Decorist',
    description: '在线室内设计平台，提供多种设计套餐',
    url: 'https://www.decorist.com/',
    category: 'soft-furnishing',
    tags: ['在线设计', '设计套餐', '室内设计', '平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 家具配置工具
  {
    id: 'wayfair-view',
    name: 'Wayfair View',
    description: 'Wayfair的AR家具预览应用，在家中预览家具效果',
    url: 'https://www.wayfair.com/v/ideas_and_advice/wayfair_view_app',
    category: 'furniture-configuration',
    tags: ['AR预览', '家具', 'Wayfair', '移动应用'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'ikea-kreativ',
    name: 'IKEA Kreativ',
    description: 'IKEA的混合现实设计工具，重新设计整个房间',
    url: 'https://www.ikea.com/us/en/customer-service/mobile-apps/',
    category: 'furniture-configuration',
    tags: ['混合现实', 'IKEA', '房间设计', '家具配置'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'west-elm-ar',
    name: 'West Elm AR',
    description: 'West Elm的AR家具试用应用',
    url: 'https://www.westelm.com/',
    category: 'furniture-configuration',
    tags: ['AR', '家具试用', 'West Elm', '预览'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 建筑信息建模(BIM)工具
  {
    id: 'tekla-structures',
    name: 'Tekla Structures',
    description: '专业的建筑信息建模软件，用于结构设计',
    url: 'https://www.tekla.com/products/tekla-structures',
    category: 'bim-tools',
    tags: ['BIM', '结构设计', '建筑信息建模', '专业'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'bentley-microstation',
    name: 'Bentley MicroStation',
    description: 'Bentley的CAD和BIM设计软件',
    url: 'https://www.bentley.com/software/microstation/',
    category: 'bim-tools',
    tags: ['CAD', 'BIM', 'Bentley', '设计软件'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'graphisoft-bimx',
    name: 'Graphisoft BIMx',
    description: 'ArchiCAD的移动端BIM查看器',
    url: 'https://www.graphisoft.com/solutions/bimx',
    category: 'bim-tools',
    tags: ['BIM查看器', 'ArchiCAD', '移动端', 'Graphisoft'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 装修预算工具
  {
    id: 'homeadvisor-calculator',
    name: 'HomeAdvisor Cost Calculator',
    description: '家装成本计算器，估算装修预算',
    url: 'https://www.homeadvisor.com/cost/',
    category: 'budget-planning',
    tags: ['成本计算', '装修预算', '估算', '家装'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'renovation-calculator',
    name: 'Renovation Calculator',
    description: '装修预算计算和规划工具',
    url: 'https://www.renovationcalculator.org/',
    category: 'budget-planning',
    tags: ['装修预算', '计算工具', '规划', '成本'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 材料计算工具
  {
    id: 'tile-calculator',
    name: 'Tile Calculator',
    description: '瓷砖用量计算器，精确计算所需瓷砖数量',
    url: 'https://www.calculator.net/tile-calculator.html',
    category: 'material-calculation',
    tags: ['瓷砖计算', '用量计算', '精确计算', '材料'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'paint-calculator',
    name: 'Paint Calculator',
    description: '油漆用量计算器，计算墙面涂料需求',
    url: 'https://www.calculator.net/paint-calculator.html',
    category: 'material-calculation',
    tags: ['油漆计算', '涂料需求', '墙面', '用量'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'flooring-calculator',
    name: 'Flooring Calculator',
    description: '地板材料用量计算器',
    url: 'https://www.calculator.net/flooring-calculator.html',
    category: 'material-calculation',
    tags: ['地板计算', '材料用量', '计算器', '装修'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 新增工具 - 智能家居设计
  {
    id: 'smartthings',
    name: 'SmartThings',
    description: '三星智能家居平台，连接和控制各种智能设备',
    url: 'https://www.smartthings.com/',
    category: 'lighting-design',
    subcategory: 'lighting-smart',
    tags: ['智能家居', '三星', '设备控制', '自动化'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'philips-hue',
    name: 'Philips Hue',
    description: '飞利浦智能照明系统，支持1600万种颜色',
    url: 'https://www.philips-hue.com/',
    category: 'lighting-design',
    subcategory: 'lighting-smart',
    tags: ['智能照明', '飞利浦', '色彩控制', 'LED'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 色彩设计
  {
    id: 'color-hunt',
    name: 'Color Hunt',
    description: '精美的色彩搭配灵感平台，室内设计配色参考',
    url: 'https://colorhunt.co/',
    category: 'material-library',
    subcategory: 'material-fabric',
    tags: ['色彩搭配', '配色方案', '设计灵感', '调色板'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'adobe-color',
    name: 'Adobe Color',
    description: 'Adobe专业配色工具，创建和分享色彩主题',
    url: 'https://color.adobe.com/',
    category: 'material-library',
    subcategory: 'material-fabric',
    tags: ['Adobe', '专业配色', '色彩主题', '创意工具'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 家装灵感
  {
    id: 'pinterest-home',
    name: 'Pinterest Home Ideas',
    description: '全球最大的家装灵感平台，海量室内设计图片',
    url: 'https://www.pinterest.com/categories/home/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['家装灵感', '设计图片', '创意收集', '全球平台'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'houzz-ideas',
    name: 'Houzz',
    description: '专业家装设计平台，连接业主和设计师',
    url: 'https://www.houzz.com/',
    category: 'project-management',
    subcategory: 'project-collaboration',
    tags: ['专业设计', '设计师平台', '家装服务', '装修灵感'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 在线设计平台
  {
    id: 'canva-interior',
    name: 'Canva Interior Design',
    description: 'Canva室内设计模板，快速制作设计方案',
    url: 'https://www.canva.com/interior-design/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['在线设计', 'Canva', '设计模板', '快速制作'],
    isHot: true,
    isFeatured: false,
    isNew: true
  },
  {
    id: 'roomstyler',
    name: 'Roomstyler 3D',
    description: '在线3D房间设计工具，拖拽式操作简单易用',
    url: 'https://roomstyler.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['在线3D', '房间设计', '拖拽操作', '易用'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - VR/AR体验
  {
    id: 'oculus-home',
    name: 'Oculus Home',
    description: 'Meta VR家居体验平台，虚拟现实家装预览',
    url: 'https://www.meta.com/quest/',
    category: 'vr-walkthrough',
    subcategory: 'vr-headset',
    tags: ['VR体验', 'Meta', '虚拟现实', '家装预览'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'apple-arkit-room',
    name: 'ARKit室内设计应用',
    description: 'Apple ARKit技术的室内设计AR应用合集',
    url: 'https://developer.apple.com/augmented-reality/',
    category: 'vr-walkthrough',
    subcategory: 'ar-tools',
    tags: ['Apple ARKit', 'AR技术', '移动端', '增强现实'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },

  // 新增工具 - 专业材质库
  {
    id: 'poliigon',
    name: 'Poliigon',
    description: '高质量PBR材质纹理库，适用于建筑可视化',
    url: 'https://www.poliigon.com/',
    category: 'material-library',
    subcategory: 'material-pbr',
    tags: ['PBR材质', '高质量', '建筑可视化', '纹理库'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cc0-textures',
    name: 'CC0 Textures',
    description: '免费商用的高分辨率纹理素材库',
    url: 'https://cc0textures.com/',
    category: 'material-library',
    subcategory: 'material-texture',
    tags: ['免费商用', '高分辨率', 'CC0授权', '纹理素材'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 风水设计
  {
    id: 'feng-shui-calculator',
    name: 'Feng Shui Calculator',
    description: '风水布局计算工具，传统文化与现代设计结合',
    url: 'https://www.fengshuicalculator.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['风水布局', '传统文化', '空间规划', '文化设计'],
    isHot: false,
    isFeatured: false,
    isNew: true
  },

  // 新增工具 - 绿植设计
  {
    id: 'plant-parent',
    name: 'PlantParent',
    description: '室内植物选择和养护指南，绿色生活设计',
    url: 'https://www.plantparent.com/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['室内植物', '绿色设计', '植物养护', '生态设计'],
    isHot: false,
    isFeatured: true,
    isNew: true
  },

  // 新增工具 - 日式设计
  {
    id: 'muji-design',
    name: 'MUJI Design Philosophy',
    description: '无印良品设计理念和家居方案参考',
    url: 'https://www.muji.com/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['日式设计', '无印良品', '简约风格', '设计理念'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 可持续设计
  {
    id: 'sustainable-design',
    name: 'Sustainable Interior Design',
    description: '可持续室内设计资源，环保材料和绿色设计',
    url: 'https://www.usgbc.org/',
    category: 'material-library',
    subcategory: 'material-wood',
    tags: ['可持续设计', '环保材料', '绿色建筑', 'LEED认证'],
    isHot: false,
    isFeatured: true,
    isNew: true
  },

  // 新增工具 - CAD免费软件
  {
    id: 'freecad',
    name: 'FreeCAD',
    description: '开源免费的参数化3D CAD建模软件',
    url: 'https://www.freecadweb.org/',
    category: 'cad-software',
    subcategory: 'cad-free',
    tags: ['免费CAD', '开源', '参数化', '3D建模'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'librecad',
    name: 'LibreCAD',
    description: '免费开源的2D CAD绘图软件，适合平面图设计',
    url: 'https://librecad.org/',
    category: 'cad-software',
    subcategory: 'cad-free',
    tags: ['免费CAD', '开源', '2D绘图', '平面图'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'qcad',
    name: 'QCAD',
    description: '专业的2D CAD应用程序，跨平台支持',
    url: 'https://qcad.org/',
    category: 'cad-software',
    subcategory: 'cad-free',
    tags: ['2D CAD', '跨平台', '专业', '技术绘图'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 新增工具 - 渲染软件补充
  {
    id: 'keyshot',
    name: 'KeyShot',
    description: '实时3D渲染软件，操作简单效果出色',
    url: 'https://www.keyshot.com/',
    category: 'rendering',
    subcategory: 'rendering-realtime',
    tags: ['实时渲染', '简单操作', '产品渲染', '高质量'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'octane-render',
    name: 'OctaneRender',
    description: 'GPU加速的物理渲染引擎，速度极快',
    url: 'https://home.otoy.com/render/octane-render/',
    category: 'rendering',
    subcategory: 'rendering-gpu',
    tags: ['GPU渲染', '物理渲染', '极速', 'OTOY'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'corona-renderer',
    name: 'Corona Renderer',
    description: '专业建筑可视化渲染器，真实感强',
    url: 'https://corona-renderer.com/',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['建筑渲染', '真实感', '专业', '可视化'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'chaos-cloud',
    name: 'Chaos Cloud',
    description: 'V-Ray云渲染服务，无需本地硬件',
    url: 'https://www.chaosgroup.com/cloud',
    category: 'rendering',
    subcategory: 'rendering-cloud',
    tags: ['云渲染', 'V-Ray', '无需硬件', 'Chaos'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 3D建模软件补充
  {
    id: 'rhino3d',
    name: 'Rhino 3D',
    description: '精确的NURBS建模软件，适合复杂几何体设计',
    url: 'https://www.rhino3d.com/',
    category: '3d-modeling',
    subcategory: '3d-parametric',
    tags: ['NURBS建模', '精确建模', '参数化', '复杂几何'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'grasshopper',
    name: 'Grasshopper',
    description: 'Rhino的可视化编程插件，参数化设计利器',
    url: 'https://www.grasshopper3d.com/',
    category: '3d-modeling',
    subcategory: '3d-procedural',
    tags: ['可视化编程', '参数化', '程序化建模', 'Rhino插件'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'zbrush',
    name: 'ZBrush',
    description: '数字雕刻和绘画软件，创建高度细节的3D模型',
    url: 'https://pixologic.com/',
    category: '3d-modeling',
    subcategory: '3d-sculpting',
    tags: ['数字雕刻', '高细节', '艺术创作', 'Pixologic'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'houdini',
    name: 'Houdini',
    description: 'SideFX程序化建模和特效软件',
    url: 'https://www.sidefx.com/',
    category: '3d-modeling',
    subcategory: '3d-procedural',
    tags: ['程序化建模', '特效', '节点编程', 'SideFX'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 照明计算工具
  {
    id: 'dialux',
    name: 'DIALux',
    description: '专业照明设计软件，精确计算照明效果',
    url: 'https://www.dialux.com/',
    category: 'lighting-design',
    subcategory: 'lighting-calculation',
    tags: ['照明计算', '专业设计', '照明效果', 'DIAL'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'agi32',
    name: 'AGi32',
    description: '建筑照明分析软件，行业标准工具',
    url: 'https://www.agi32.com/',
    category: 'lighting-design',
    subcategory: 'lighting-calculation',
    tags: ['照明分析', '建筑照明', '行业标准', '专业'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'radiance',
    name: 'Radiance',
    description: '开源光线追踪软件，精确光照模拟',
    url: 'https://www.radiance-online.org/',
    category: 'lighting-design',
    subcategory: 'lighting-simulation',
    tags: ['光线追踪', '开源', '光照模拟', '精确'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 新增工具 - 家具建模和设计
  {
    id: 'polyboard',
    name: 'PolyBoard',
    description: '专业家具设计软件，板式家具设计专家',
    url: 'https://www.polyboard.com/',
    category: 'furniture-design',
    subcategory: 'furniture-modeling',
    tags: ['家具设计', '板式家具', '专业软件', '定制'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'solidworks-furniture',
    name: 'SOLIDWORKS',
    description: '专业3D CAD设计软件，适用于家具产品设计',
    url: 'https://www.solidworks.com/',
    category: 'furniture-design',
    subcategory: 'furniture-modeling',
    tags: ['3D CAD', '产品设计', '家具建模', '专业'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'kd-max',
    name: 'KD Max',
    description: '厨房和衣柜设计软件，定制家具专业工具',
    url: 'https://www.kdmax.com/',
    category: 'furniture-design',
    subcategory: 'furniture-custom',
    tags: ['厨房设计', '衣柜设计', '定制家具', '专业工具'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - Web VR和移动VR
  {
    id: 'mozilla-hubs',
    name: 'Mozilla Hubs',
    description: 'Mozilla开发的Web VR社交平台，支持室内空间分享',
    url: 'https://hubs.mozilla.com/',
    category: 'vr-walkthrough',
    subcategory: 'vr-web',
    tags: ['Web VR', 'Mozilla', '社交VR', '空间分享'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'aframe-vr',
    name: 'A-Frame VR',
    description: 'Web VR开发框架，创建虚拟现实室内体验',
    url: 'https://aframe.io/',
    category: 'vr-walkthrough',
    subcategory: 'vr-web',
    tags: ['Web VR框架', '开发工具', '虚拟现实', '开源'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'cardboard-design',
    name: 'Google Cardboard Design',
    description: '谷歌Cardboard VR设计指南和工具',
    url: 'https://arvr.google.com/cardboard/',
    category: 'vr-walkthrough',
    subcategory: 'vr-mobile',
    tags: ['移动VR', 'Google', 'Cardboard', '设计指南'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 新增工具 - 项目预算管理
  {
    id: 'buildertrend',
    name: 'Buildertrend',
    description: '建筑项目管理软件，包含预算和进度管理',
    url: 'https://buildertrend.com/',
    category: 'project-management',
    subcategory: 'project-budget',
    tags: ['项目管理', '预算管理', '建筑项目', '进度跟踪'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'homewyse',
    name: 'Homewyse',
    description: '家装成本估算工具，提供详细的项目预算',
    url: 'https://www.homewyse.com/',
    category: 'project-management',
    subcategory: 'project-budget',
    tags: ['成本估算', '家装预算', '项目预算', '详细'],
    isHot: true,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'procore',
    name: 'Procore',
    description: '建筑项目管理平台，团队协作和项目跟踪',
    url: 'https://www.procore.com/',
    category: 'project-management',
    subcategory: 'project-timeline',
    tags: ['项目管理平台', '团队协作', '项目跟踪', '建筑'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 中国本土化室内设计平台
  {
    id: 'kujiale',
    name: '酷家乐',
    description: '中国领先的家装设计平台，10秒生成效果图',
    url: 'https://www.kujiale.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['中国平台', '家装设计', '效果图', '在线设计'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sanwei-jia',
    name: '三维家',
    description: '专业家居设计软件，支持全屋定制设计',
    url: 'https://www.3vjia.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['中国软件', '全屋定制', '家居设计', '专业'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'daoshi-design',
    name: '打扮家',
    description: 'AI驱动的家装设计平台，智能化设计方案',
    url: 'https://www.dabanjia.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['AI设计', '中国平台', '智能化', '家装方案'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'uinnova-design',
    name: '圆方软件',
    description: '专业家具设计软件，橱柜衣柜设计专家',
    url: 'https://www.uinnova.cn/',
    category: 'furniture-design',
    subcategory: 'furniture-custom',
    tags: ['中国软件', '家具设计', '橱柜设计', '专业'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 室内设计教育和资源
  {
    id: 'interior-design-masters',
    name: 'Interior Design Masters',
    description: '室内设计在线课程平台，专业技能培训',
    url: 'https://www.skillshare.com/browse/interior-design',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['在线教育', '技能培训', '室内设计', '课程'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'dezeen',
    name: 'Dezeen',
    description: '全球建筑和设计杂志，设计灵感和趋势',
    url: 'https://www.dezeen.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['设计杂志', '建筑', '设计灵感', '全球'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'architonic',
    name: 'Architonic',
    description: '建筑和设计产品数据库，材料和家具库',
    url: 'https://www.architonic.com/',
    category: 'furniture-design',
    subcategory: 'furniture-library',
    tags: ['产品数据库', '建筑材料', '家具库', '专业'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 移动端室内设计应用
  {
    id: 'homestyler-mobile',
    name: 'Homestyler Mobile',
    description: 'Autodesk移动端室内设计应用，随时随地设计',
    url: 'https://homestyler.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['移动应用', 'Autodesk', '随时设计', '便携'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'magicplan',
    name: 'magicplan',
    description: '用手机测量房间，快速生成平面图',
    url: 'https://www.magicplan.app/',
    category: 'cad-software',
    subcategory: 'cad-2d',
    tags: ['移动测量', '平面图', '快速生成', '手机应用'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'roomscan-pro',
    name: 'RoomScan Pro',
    description: 'iPhone/iPad房间测量应用，自动生成平面图',
    url: 'https://locometric.com/roomscan.html',
    category: 'cad-software',
    subcategory: 'cad-2d',
    tags: ['iOS应用', '房间测量', '自动生成', '平面图'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 木材和材料数据库
  {
    id: 'wood-database',
    name: 'The Wood Database',
    description: '全球最全面的木材数据库，木材特性和用途',
    url: 'https://www.wood-database.com/',
    category: 'material-library',
    subcategory: 'material-wood',
    tags: ['木材数据库', '材料特性', '全球木材', '专业'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'material-connexion',
    name: 'Material ConneXion',
    description: '创新材料数据库，新型建筑和设计材料',
    url: 'https://www.materialconnexion.com/',
    category: 'material-library',
    subcategory: 'material-texture',
    tags: ['创新材料', '新型材料', '建筑材料', '数据库'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 声学设计
  {
    id: 'acoustic-design',
    name: 'Room EQ Wizard',
    description: '免费声学测量和分析软件，房间声学优化',
    url: 'https://www.roomeqwizard.com/',
    category: 'lighting-design',
    subcategory: 'lighting-calculation',
    tags: ['声学设计', '免费软件', '房间优化', '分析'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 新增工具 - 家居电商和采购
  {
    id: 'alibaba-1688',
    name: '阿里巴巴1688',
    description: '中国最大的B2B采购平台，家居建材批发',
    url: 'https://www.1688.com/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['B2B采购', '中国平台', '建材批发', '家居'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'wayfair-professional',
    name: 'Wayfair Professional',
    description: 'Wayfair专业采购平台，设计师专用家具采购',
    url: 'https://www.wayfair.com/professional/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['专业采购', '设计师专用', '家具', 'Wayfair'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 新增工具 - 建筑规范和标准
  {
    id: 'building-codes',
    name: 'Building Codes Online',
    description: '建筑规范在线查询平台，国际建筑标准',
    url: 'https://www.iccsafe.org/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['建筑规范', '国际标准', '在线查询', '法规'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 新增工具 - 能耗和绿色建筑
  {
    id: 'energy-plus',
    name: 'EnergyPlus',
    description: '美国能源部开发的建筑能耗模拟软件',
    url: 'https://energyplus.net/',
    category: 'lighting-design',
    subcategory: 'lighting-calculation',
    tags: ['能耗模拟', '绿色建筑', '美国能源部', '免费'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'leed-tools',
    name: 'LEED v4.1 Tools',
    description: 'LEED绿色建筑认证工具和资源',
    url: 'https://www.usgbc.org/leed',
    category: 'material-library',
    subcategory: 'material-wood',
    tags: ['LEED认证', '绿色建筑', 'USGBC', '可持续'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 中国CAD软件工具
  {
    id: 'zhongwang-cad',
    name: '中望CAD',
    description: '中国自主研发的CAD软件，支持DWG格式，功能全面',
    url: 'https://www.zwcad.com/',
    category: 'cad-software',
    subcategory: 'cad-2d',
    tags: ['中国CAD', '自主研发', 'DWG格式', '中望'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'haochen-cad',
    name: '浩辰CAD',
    description: '中国专业CAD软件，建筑设计行业应用广泛',
    url: 'https://www.gstarcad.com/',
    category: 'cad-software',
    subcategory: 'cad-2d',
    tags: ['中国CAD', '建筑设计', '专业软件', '浩辰'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'tianzheng-cad',
    name: '天正CAD',
    description: '天正建筑软件，中国建筑设计行业标准CAD平台',
    url: 'https://www.tangent.com.cn/',
    category: 'cad-software',
    subcategory: 'cad-3d',
    tags: ['天正建筑', '中国标准', '建筑设计', '专业平台'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'pkpm-cad',
    name: 'PKPM软件',
    description: '中国建筑结构设计软件，工程设计行业标准',
    url: 'https://www.pkpm.cn/',
    category: 'cad-software',
    subcategory: 'cad-bim',
    tags: ['结构设计', '工程设计', '中国标准', 'PKPM'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 中国3D建模工具
  {
    id: 'kujiale-3d',
    name: '酷家乐3D云设计',
    description: '中国领先的3D室内设计平台，10秒出图，海量模型库',
    url: 'https://www.kujiale.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['中国平台', '3D云设计', '快速出图', '酷家乐'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sanweijia-3d',
    name: '三维家3D云设计',
    description: '专业全屋定制3D设计平台，支持VR展示',
    url: 'https://www.3vjia.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['全屋定制', '3D设计', 'VR展示', '三维家'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'myhome3d',
    name: '我家我设计',
    description: '在线3D家装设计平台，免费使用简单易学',
    url: 'https://www.myhome3d.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['在线3D', '免费使用', '家装设计', '易学'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'ding3d',
    name: '打扮家3D',
    description: 'AI驱动的3D家装设计平台，智能化设计方案',
    url: 'https://www.dbjia.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['AI设计', '智能化', '3D家装', '打扮家'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },

  // 中国渲染软件
  {
    id: 'keyshot-china',
    name: 'KeyShot中国',
    description: 'KeyShot中国官方，专业3D渲染软件本土化服务',
    url: 'https://www.keyshot.net.cn/',
    category: 'rendering',
    subcategory: 'rendering-realtime',
    tags: ['专业渲染', '本土化', '中国服务', 'KeyShot'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'artlantis-china',
    name: 'Artlantis中国',
    description: '建筑可视化渲染软件，专业效果图制作',
    url: 'https://www.artlantis.cn/',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['建筑可视化', '效果图', '专业渲染', '中国'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'vary-china',
    name: 'V-Ray中国',
    description: 'V-Ray中国官方，专业渲染器本土化支持',
    url: 'https://www.vray.cn/',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['V-Ray', '专业渲染', '本土化', '中国官方'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cloud-render-china',
    name: '渲云云渲染',
    description: '中国专业云渲染平台，支持多种渲染器',
    url: 'https://www.xrender.com/',
    category: 'rendering',
    subcategory: 'rendering-cloud',
    tags: ['云渲染', '中国平台', '多渲染器', '渲云'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 中国VR漫游工具
  {
    id: 'kujiale-vr',
    name: '酷家乐VR',
    description: '酷家乐VR漫游功能，沉浸式家装体验',
    url: 'https://vr.kujiale.com/',
    category: 'vr-walkthrough',
    subcategory: 'vr-web',
    tags: ['VR漫游', '沉浸式', '家装体验', '酷家乐'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sanweijia-vr',
    name: '三维家VR',
    description: '三维家VR展示系统，全景家装预览',
    url: 'https://vr.3vjia.com/',
    category: 'vr-walkthrough',
    subcategory: 'vr-web',
    tags: ['VR展示', '全景预览', '家装', '三维家'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'uinnova-vr',
    name: '圆方VR',
    description: '圆方软件VR展示模块，专业橱柜衣柜VR预览',
    url: 'https://www.uinnova.cn/vr',
    category: 'vr-walkthrough',
    subcategory: 'vr-headset',
    tags: ['专业VR', '橱柜衣柜', 'VR预览', '圆方'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'vrhouse-china',
    name: 'VR样板间',
    description: '中国VR样板间展示平台，房地产VR营销',
    url: 'https://www.vrhouse.com/',
    category: 'vr-walkthrough',
    subcategory: 'vr-web',
    tags: ['VR样板间', '房地产', 'VR营销', '中国平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 中国家具设计工具
  {
    id: 'uinnova-furniture',
    name: '圆方家具设计',
    description: '圆方专业家具设计软件，橱柜衣柜设计专家',
    url: 'https://www.uinnova.cn/',
    category: 'furniture-design',
    subcategory: 'furniture-custom',
    tags: ['家具设计', '橱柜衣柜', '专业软件', '圆方'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'kd-max-china',
    name: 'KD Max中国',
    description: 'KD Max中国版，专业定制家具设计软件',
    url: 'https://www.kdmax.cn/',
    category: 'furniture-design',
    subcategory: 'furniture-custom',
    tags: ['定制家具', '专业设计', '中国版', 'KD Max'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'topsolid-china',
    name: 'TopSolid中国',
    description: 'TopSolid家具设计软件中国版，木工设计专业工具',
    url: 'https://www.topsolid.cn/',
    category: 'furniture-design',
    subcategory: 'furniture-modeling',
    tags: ['木工设计', '专业工具', '家具软件', 'TopSolid'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cabinet-vision-china',
    name: 'Cabinet Vision中国',
    description: 'Cabinet Vision橱柜设计软件中国版',
    url: 'https://www.cabinetvision.cn/',
    category: 'furniture-design',
    subcategory: 'furniture-custom',
    tags: ['橱柜设计', '专业软件', '中国版', 'Cabinet Vision'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 中国材质库
  {
    id: 'sucai-china',
    name: '素材中国',
    description: '中国专业设计素材网站，材质纹理资源丰富',
    url: 'https://www.sccnn.com/',
    category: 'material-library',
    subcategory: 'material-texture',
    tags: ['设计素材', '材质纹理', '中国网站', '资源丰富'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'cgmodel-china',
    name: 'CG模型网',
    description: '中国专业3D模型和材质资源分享平台',
    url: 'https://www.cgmodel.com/',
    category: 'material-library',
    subcategory: 'material-pbr',
    tags: ['3D模型', '材质资源', '中国平台', '分享'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'tooopen-material',
    name: '图图网材质库',
    description: '专业设计素材网站，高质量材质贴图',
    url: 'https://www.tooopen.com/',
    category: 'material-library',
    subcategory: 'material-texture',
    tags: ['设计素材', '材质贴图', '高质量', '图图网'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'nitu-material',
    name: '你图网材质',
    description: '你图网专业材质纹理资源，支持商用',
    url: 'https://www.nitu.com/',
    category: 'material-library',
    subcategory: 'material-texture',
    tags: ['材质纹理', '支持商用', '专业资源', '你图网'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 中国灯光设计工具
  {
    id: 'dialux-china',
    name: 'DIALux中国',
    description: 'DIALux照明设计软件中国版，本土化服务',
    url: 'https://www.dialux.cn/',
    category: 'lighting-design',
    subcategory: 'lighting-calculation',
    tags: ['照明设计', '本土化', '中国版', 'DIALux'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'elum-china',
    name: 'Elum Tools中国',
    description: '中国专业照明设计计算软件',
    url: 'https://www.elumtools.cn/',
    category: 'lighting-design',
    subcategory: 'lighting-calculation',
    tags: ['照明计算', '专业软件', '中国', 'Elum'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'philips-china-lighting',
    name: '飞利浦照明中国',
    description: '飞利浦照明设计工具和解决方案中国版',
    url: 'https://www.lighting.philips.com.cn/',
    category: 'lighting-design',
    subcategory: 'lighting-smart',
    tags: ['飞利浦', '照明设计', '智能照明', '中国版'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'osram-china-lighting',
    name: '欧司朗照明中国',
    description: '欧司朗专业照明解决方案中国版',
    url: 'https://www.osram.com.cn/',
    category: 'lighting-design',
    subcategory: 'lighting-smart',
    tags: ['欧司朗', '专业照明', '解决方案', '中国版'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 中国项目管理工具
  {
    id: 'teambition-interior',
    name: 'Teambition项目管理',
    description: '阿里云旗下协作平台，适合室内设计团队管理',
    url: 'https://www.teambition.com/',
    category: 'project-management',
    subcategory: 'project-collaboration',
    tags: ['阿里云', '团队协作', '项目管理', 'Teambition'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'worktile-design',
    name: 'Worktile设计项目管理',
    description: '中国专业项目管理平台，设计团队协作工具',
    url: 'https://worktile.com/',
    category: 'project-management',
    subcategory: 'project-collaboration',
    tags: ['项目管理', '设计团队', '协作工具', 'Worktile'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'tower-project',
    name: 'Tower项目管理',
    description: '彩程团队协作平台，适合创意设计团队',
    url: 'https://tower.im/',
    category: 'project-management',
    subcategory: 'project-collaboration',
    tags: ['团队协作', '创意设计', '项目管理', 'Tower'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'coding-project',
    name: 'CODING项目管理',
    description: '腾讯云CODING平台，设计项目管理和协作',
    url: 'https://coding.net/',
    category: 'project-management',
    subcategory: 'project-timeline',
    tags: ['腾讯云', '项目管理', '设计协作', 'CODING'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 中国室内设计资源和社区
  {
    id: 'china-designer',
    name: '中国设计师网',
    description: '中国专业室内设计师交流平台和资源分享',
    url: 'https://www.china-designer.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['设计师社区', '资源分享', '交流平台', '中国'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'id-china',
    name: 'ID设计网',
    description: '中国室内设计行业门户网站，设计资讯和案例',
    url: 'https://www.id-china.com.cn/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['行业门户', '设计资讯', '案例分享', 'ID设计'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'china-interior-design',
    name: '中国室内设计网',
    description: '专业室内设计资源平台，设计师作品展示',
    url: 'https://www.ciid.com.cn/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['专业平台', '作品展示', '设计资源', '室内设计'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'home-design-china',
    name: '家居设计网',
    description: '中国家居设计灵感和趋势分享平台',
    url: 'https://www.home-design.cn/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['家居设计', '设计灵感', '趋势分享', '中国平台'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 中国家装电商和供应链
  {
    id: 'tmall-home',
    name: '天猫家装',
    description: '天猫家装频道，家居建材一站式采购平台',
    url: 'https://jiazhuang.tmall.com/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['天猫', '家装采购', '建材', '一站式'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'jd-home',
    name: '京东家装',
    description: '京东家装建材频道，品质家居产品采购',
    url: 'https://jiaju.jd.com/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['京东', '家装建材', '品质家居', '采购'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'suning-home',
    name: '苏宁家装',
    description: '苏宁易购家装频道，智能家居解决方案',
    url: 'https://jiaju.suning.com/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['苏宁', '智能家居', '解决方案', '家装'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'qihoo-home',
    name: '齐家网',
    description: '中国领先的家装服务平台，装修设计一站式服务',
    url: 'https://www.qijia.com/',
    category: 'project-management',
    subcategory: 'project-collaboration',
    tags: ['家装服务', '装修设计', '一站式', '齐家网'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 中国色彩和风格设计
  {
    id: 'color-china',
    name: '中国色彩网',
    description: '中国专业色彩设计资源平台，传统色彩文化',
    url: 'https://www.color.org.cn/',
    category: 'material-library',
    subcategory: 'material-fabric',
    tags: ['色彩设计', '传统色彩', '文化', '中国专业'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'chinese-style-design',
    name: '中式设计网',
    description: '专注中式风格室内设计的专业平台',
    url: 'https://www.chinese-style.net/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['中式风格', '室内设计', '专业平台', '传统文化'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 中国BIM和建筑信息化
  {
    id: 'lubansoft-bim',
    name: '鲁班软件BIM',
    description: '中国建筑信息化领军企业，BIM全流程解决方案',
    url: 'https://www.lubansoft.com/',
    category: 'cad-software',
    subcategory: 'cad-bim',
    tags: ['BIM', '建筑信息化', '全流程', '鲁班软件'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'glodon-bim',
    name: '广联达BIM',
    description: '广联达BIM技术解决方案，建筑全生命周期管理',
    url: 'https://www.glodon.com/',
    category: 'cad-software',
    subcategory: 'cad-bim',
    tags: ['BIM技术', '全生命周期', '广联达', '解决方案'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'revit-china',
    name: 'Revit中国',
    description: 'Autodesk Revit中国版，BIM建筑设计软件',
    url: 'https://www.autodesk.com.cn/products/revit/',
    category: 'cad-software',
    subcategory: 'cad-bim',
    tags: ['Revit', 'BIM设计', '中国版', 'Autodesk'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // AI驱动设计工具
  {
    id: 'midjourney-interior',
    name: 'Midjourney室内设计',
    description: 'AI绘画工具，生成创意室内设计概念图和灵感',
    url: 'https://www.midjourney.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['AI绘画', '概念设计', '创意灵感', 'Midjourney'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'stable-diffusion-interior',
    name: 'Stable Diffusion室内设计',
    description: '开源AI图像生成模型，用于室内设计概念创作',
    url: 'https://stability.ai/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['AI生成', '开源', '概念创作', 'Stable Diffusion'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'dalle-interior',
    name: 'DALL-E室内设计',
    description: 'OpenAI的AI图像生成工具，创造独特室内设计概念',
    url: 'https://openai.com/dall-e-2/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['OpenAI', 'AI图像', '独特概念', 'DALL-E'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'claude-interior-ai',
    name: 'Claude室内设计助手',
    description: 'Anthropic的AI助手，提供室内设计建议和方案分析',
    url: 'https://claude.ai/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['AI助手', '设计建议', '方案分析', 'Claude'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },

  // 移动端专业应用
  {
    id: 'morpholio-trace',
    name: 'Morpholio Trace',
    description: '专业建筑师和设计师的iPad绘图应用',
    url: 'https://morpholio.com/',
    category: 'cad-software',
    subcategory: 'cad-2d',
    tags: ['iPad应用', '专业绘图', '建筑师', 'Morpholio'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'concepts-app',
    name: 'Concepts',
    description: '无限画布的矢量设计工具，适合概念设计',
    url: 'https://concepts.app/',
    category: 'cad-software',
    subcategory: 'cad-2d',
    tags: ['矢量设计', '概念设计', '无限画布', '移动端'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'procreate-interior',
    name: 'Procreate',
    description: 'iPad专业绘画应用，适合室内设计手绘和概念表达',
    url: 'https://procreate.art/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['iPad绘画', '手绘', '概念表达', 'Procreate'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'shapr3d',
    name: 'Shapr3D',
    description: 'iPad专业3D CAD建模应用，直观易用',
    url: 'https://www.shapr3d.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['iPad 3D', 'CAD建模', '直观易用', '移动端'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 开源和免费工具补充
  {
    id: 'blender-arch',
    name: 'Blender建筑版',
    description: '开源3D软件的建筑可视化扩展包和插件',
    url: 'https://blender-for-architecture.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['开源', '建筑可视化', '免费', 'Blender'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'wings3d',
    name: 'Wings 3D',
    description: '免费开源的多边形建模软件，简单易学',
    url: 'http://www.wings3d.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['开源', '多边形建模', '免费', '简单易学'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'freecad-arch',
    name: 'FreeCAD建筑模块',
    description: 'FreeCAD的建筑和BIM设计模块，开源免费',
    url: 'https://wiki.freecadweb.org/Arch_Workbench',
    category: 'cad-software',
    subcategory: 'cad-bim',
    tags: ['开源BIM', '建筑模块', '免费', 'FreeCAD'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sweet-home-3d',
    name: 'Sweet Home 3D',
    description: '免费家居室内设计软件，支持2D平面图和3D预览',
    url: 'http://www.sweethome3d.com/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['免费软件', '家居设计', '2D3D', 'Java'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 专业渲染引擎补充
  {
    id: 'cycles-render',
    name: 'Cycles渲染器',
    description: 'Blender内置的物理渲染引擎，开源免费',
    url: 'https://www.cycles-renderer.org/',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['物理渲染', '开源', 'Blender', '免费'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'luxcorerender',
    name: 'LuxCoreRender',
    description: '开源物理渲染引擎，支持多种建模软件',
    url: 'https://luxcorerender.org/',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['开源渲染', '物理引擎', '多软件支持', 'LuxCore'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'appleseed-render',
    name: 'Appleseed渲染器',
    description: '开源现代渲染引擎，支持电影级质量渲染',
    url: 'https://appleseedhq.net/',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['开源渲染', '电影级', '现代引擎', 'Appleseed'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },
  {
    id: 'yafaray-render',
    name: 'YafaRay渲染器',
    description: '开源光线追踪渲染引擎，适合建筑可视化',
    url: 'http://www.yafaray.org/',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['开源', '光线追踪', '建筑可视化', 'YafaRay'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 在线协作平台
  {
    id: 'figma-interior',
    name: 'Figma室内设计',
    description: '在线协作设计工具，适合室内设计方案展示',
    url: 'https://www.figma.com/',
    category: 'project-management',
    subcategory: 'project-collaboration',
    tags: ['在线协作', '设计工具', '方案展示', 'Figma'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'miro-interior',
    name: 'Miro室内设计',
    description: '在线白板工具，用于室内设计头脑风暴和方案讨论',
    url: 'https://miro.com/',
    category: 'project-management',
    subcategory: 'project-collaboration',
    tags: ['在线白板', '头脑风暴', '方案讨论', 'Miro'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'notion-interior',
    name: 'Notion室内设计',
    description: '全能工作空间，用于室内设计项目管理和文档整理',
    url: 'https://www.notion.so/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['工作空间', '项目管理', '文档整理', 'Notion'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 专业测量和建模工具
  {
    id: 'lidar-scanner-pro',
    name: 'LiDAR Scanner Pro',
    description: 'iPhone/iPad LiDAR扫描应用，精确测量室内空间',
    url: 'https://apps.apple.com/app/lidar-scanner/',
    category: 'cad-software',
    subcategory: 'cad-2d',
    tags: ['LiDAR扫描', '精确测量', 'iPhone iPad', '空间扫描'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },
  {
    id: 'canvas-io',
    name: 'Canvas',
    description: '3D空间捕获应用，使用iPad创建精确的平面图',
    url: 'https://canvas.io/',
    category: 'cad-software',
    subcategory: 'cad-2d',
    tags: ['3D捕获', '精确平面图', 'iPad', '空间测量'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'polycam-3d',
    name: 'Polycam',
    description: '移动端3D扫描应用，快速创建室内空间3D模型',
    url: 'https://poly.cam/',
    category: '3d-modeling',
    subcategory: '3d-general',
    tags: ['3D扫描', '移动端', '快速建模', 'Polycam'],
    isHot: true,
    isFeatured: true,
    isNew: true
  },

  // 教育和学习资源
  {
    id: 'skillshare-interior',
    name: 'Skillshare室内设计',
    description: '室内设计在线课程平台，专业技能学习',
    url: 'https://www.skillshare.com/browse/interior-design',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['在线课程', '技能学习', '专业培训', 'Skillshare'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'udemy-interior',
    name: 'Udemy室内设计',
    description: 'Udemy室内设计课程，从入门到专业的全套教程',
    url: 'https://www.udemy.com/courses/design/interior-design/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['在线教育', '全套教程', '入门专业', 'Udemy'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'coursera-interior',
    name: 'Coursera室内设计',
    description: 'Coursera室内设计专业课程，大学级别教育',
    url: 'https://www.coursera.org/browse/arts-and-humanities/design-and-product',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['专业课程', '大学级别', '权威教育', 'Coursera'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'lynda-interior',
    name: 'LinkedIn Learning室内设计',
    description: 'LinkedIn Learning室内设计专业培训课程',
    url: 'https://www.linkedin.com/learning/topics/interior-design',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['专业培训', 'LinkedIn', '职业发展', '在线学习'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 色彩和搭配工具补充
  {
    id: 'coolors-palette',
    name: 'Coolors调色板',
    description: '在线色彩搭配工具，快速生成和谐色彩方案',
    url: 'https://coolors.co/',
    category: 'material-library',
    subcategory: 'material-fabric',
    tags: ['色彩搭配', '在线工具', '和谐色彩', 'Coolors'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'paletton-color',
    name: 'Paletton',
    description: '专业色彩方案生成器，基于色彩理论的配色工具',
    url: 'https://paletton.com/',
    category: 'material-library',
    subcategory: 'material-fabric',
    tags: ['色彩理论', '专业配色', '方案生成', 'Paletton'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'colorhunt-palette',
    name: 'Color Hunt',
    description: '色彩搭配灵感网站，精选设计师配色方案',
    url: 'https://colorhunt.co/',
    category: 'material-library',
    subcategory: 'material-fabric',
    tags: ['配色灵感', '设计师', '精选方案', 'Color Hunt'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },

  // 家居风水和文化设计
  {
    id: 'fengshui-calculator',
    name: '风水罗盘',
    description: '在线风水计算工具，传统家居布局指导',
    url: 'https://www.fengshuicalculator.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['风水布局', '传统文化', '家居指导', '文化设计'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'vastu-design',
    name: 'Vastu设计',
    description: '印度传统建筑学Vastu指导工具',
    url: 'https://www.vastushastra.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['Vastu', '印度传统', '建筑学', '文化设计'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 可持续和绿色设计
  {
    id: 'green-building-studio',
    name: 'Green Building Studio',
    description: 'Autodesk绿色建筑能耗分析工具',
    url: 'https://gbs.autodesk.com/',
    category: 'lighting-design',
    subcategory: 'lighting-calculation',
    tags: ['绿色建筑', '能耗分析', 'Autodesk', '可持续'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'sustainable-materials',
    name: 'Sustainable Materials Management',
    description: 'EPA可持续材料管理指南和工具',
    url: 'https://www.epa.gov/smm',
    category: 'material-library',
    subcategory: 'material-wood',
    tags: ['可持续材料', 'EPA', '环保', '材料管理'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 家具和产品目录平台
  {
    id: 'archiproducts',
    name: 'Archiproducts',
    description: '全球建筑和设计产品数据库，专业家具目录',
    url: 'https://www.archiproducts.com/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['产品数据库', '全球家具', '专业目录', 'Archiproducts'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'design-within-reach',
    name: 'Design Within Reach',
    description: '现代家具和设计产品在线目录',
    url: 'https://www.dwr.com/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['现代家具', '设计产品', '在线目录', 'DWR'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'hivemodern',
    name: 'Hive Modern',
    description: '现代和当代家具在线商店，设计师品牌',
    url: 'https://hivemodern.com/',
    category: 'furniture-design',
    subcategory: 'furniture-catalog',
    tags: ['现代家具', '当代设计', '设计师品牌', 'Hive Modern'],
    isHot: false,
    isFeatured: false,
    isNew: false
  },

  // 专业插件和扩展
  {
    id: 'vray-sketchup',
    name: 'V-Ray for SketchUp',
    description: 'SketchUp专业渲染插件，建筑可视化标准',
    url: 'https://www.chaosgroup.com/vray/sketchup',
    category: 'rendering',
    subcategory: 'rendering-offline',
    tags: ['SketchUp插件', 'V-Ray', '建筑可视化', '专业渲染'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'thea-render-sketchup',
    name: 'Thea Render for SketchUp',
    description: 'SketchUp高质量渲染插件，实时和离线渲染',
    url: 'https://www.thearender.com/site/index.php/sketchup.html',
    category: 'rendering',
    subcategory: 'rendering-realtime',
    tags: ['SketchUp插件', 'Thea Render', '高质量', '实时渲染'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'skatter-sketchup',
    name: 'Skatter for SketchUp',
    description: 'SketchUp散布插件，快速添加植被和装饰元素',
    url: 'https://skatter4sketchup.com/',
    category: '3d-modeling',
    subcategory: '3d-procedural',
    tags: ['SketchUp插件', '散布工具', '植被', '装饰元素'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 国际设计资源和灵感
  {
    id: 'dezeen-magazine',
    name: 'Dezeen杂志',
    description: '全球领先的建筑和设计杂志，最新趋势和项目',
    url: 'https://www.dezeen.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['设计杂志', '全球领先', '最新趋势', 'Dezeen'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'archdaily',
    name: 'ArchDaily',
    description: '世界建筑资讯网站，建筑和室内设计案例分享',
    url: 'https://www.archdaily.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['建筑资讯', '案例分享', '世界级', 'ArchDaily'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'interior-design-magazine',
    name: 'Interior Design Magazine',
    description: '专业室内设计杂志，行业趋势和项目案例',
    url: 'https://www.interiordesign.net/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['专业杂志', '行业趋势', '项目案例', '室内设计'],
    isHot: false,
    isFeatured: true,
    isNew: false
  },

  // 虚拟现实和增强现实工具补充
  {
    id: 'unity-interior',
    name: 'Unity室内设计',
    description: 'Unity游戏引擎用于室内设计VR/AR体验开发',
    url: 'https://unity.com/',
    category: 'vr-walkthrough',
    subcategory: 'vr-headset',
    tags: ['Unity引擎', 'VR开发', 'AR体验', '游戏引擎'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'unreal-archviz',
    name: 'Unreal Engine建筑可视化',
    description: 'Unreal Engine专业建筑可视化和VR体验',
    url: 'https://www.unrealengine.com/en-US/industry/architecture',
    category: 'vr-walkthrough',
    subcategory: 'vr-headset',
    tags: ['Unreal Engine', '建筑可视化', 'VR体验', '专业'],
    isHot: true,
    isFeatured: true,
    isNew: false
  },
  {
    id: 'webxr-interior',
    name: 'WebXR室内设计',
    description: 'Web端XR技术，浏览器中的VR/AR室内体验',
    url: 'https://webxr.io/',
    category: 'vr-walkthrough',
    subcategory: 'vr-web',
    tags: ['WebXR', '浏览器VR', 'Web技术', 'AR体验'],
    isHot: false,
    isFeatured: true,
    isNew: true
  }
];

/**
 * 根据分类获取工具
 */
export const getToolsByCategory = (categoryId) => {
  return allInteriorTools.filter(tool => tool.category === categoryId);
};

/**
 * 获取热门工具
 */
export const getHotTools = () => {
  return allInteriorTools.filter(tool => tool.isHot);
};

/**
 * 获取推荐工具
 */
export const getFeaturedTools = () => {
  return allInteriorTools.filter(tool => tool.isFeatured);
};

/**
 * 搜索工具
 */
export const searchTools = (keyword) => {
  const lowerKeyword = keyword.toLowerCase();
  return allInteriorTools.filter(tool => 
    tool.name.toLowerCase().includes(lowerKeyword) ||
    tool.description.toLowerCase().includes(lowerKeyword) ||
    tool.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))
  );
};

/**
 * 根据子分类获取工具
 */
export const getToolsBySubCategory = (subCategoryId) => {
  return allInteriorTools.filter(tool => tool.subcategory === subCategoryId);
};

/**
 * 根据分类获取子分类
 */
export const getSubCategoriesByCategory = (categoryId) => {
  const category = interiorCategories.find(cat => cat.id === categoryId);
  return category?.subcategories || [];
};

/**
 * 获取子分类统计
 */
export const getSubCategoryStats = (categoryId) => {
  const subCategories = getSubCategoriesByCategory(categoryId);
  return subCategories.map(subCat => ({
    id: subCat.id,
    name: subCat.name,
    count: getToolsBySubCategory(subCat.id).length
  }));
}; 