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
    description: '建筑项目管理软件，全面的施工管理解决方案',
    url: 'https://www.procore.com/',
    category: 'project-management',
    subcategory: 'project-planning',
    tags: ['项目管理', '施工管理', '建筑', '全面解决方案'],
    isHot: false,
    isFeatured: false,
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