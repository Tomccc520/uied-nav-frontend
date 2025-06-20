/**
 * @file hotRecommendations.js
 * @description 热门推荐网站配置 - 基于88设计网常用推荐数据，支持子分类
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.1.0 - 增加子分类支持
 */

// 热门推荐子分类定义 - 热门和UIED系列两个子分类
export const hotRecommendationSubCategories = {
  'hot-recommendations': [
    { id: 'hot-recommendations-hot', name: '热门' },
    { id: 'hot-recommendations-uied', name: 'UIED系列' }
  ]
};

// 热门推荐AI工具配置 - 来自88设计网常用推荐全部35个网站，简化为热门和UIED系列两个子分类
export const hotRecommendations = [
  // 热门分类 - 评分4.5以上且知名度高的工具
  {
    id: 'deepseek-ai',
    name: 'DeepSeek Chat',
    description: '深度求索AI智能助手，unravel the mystery of AGI with curiosity',
    url: 'https://www.deepseek.com/',
    iconUrl: 'https://www.deepseek.com/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['DeepSeek', 'AGI', '深度学习', '智能助手'],
    rating: 4.5
  },
  {
    id: 'askmany-ai',
    name: 'AskManyAI-免费多模型对话',
    description: '免费的AI超级生产力平台，提供GPT、Claude、Gemini等顶级模型的直连访问',
    url: 'https://askmany.cn/login?i=bd8ce9a1',
    iconUrl: 'https://askmany.cn/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['多模型', '免费AI', 'GPT', 'Claude'],
    rating: 4.5
  },
  {
    id: 'meijian',
    name: 'AI免费抠图、扩图 ',
    description: 'AI免费抠图、扩图，设计师常用工具',
    url: 'https://www.meijian.com/ai?utm_source=mjaidhuied',
    iconUrl: 'https://www.meijian.com/mj/meijian/site-v2/member/activity/e-commerce/reg-promotion?utm_source=dsdh88sheji',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['AI', '免费', '抠图', '扩图'],
    rating: 4.8
  },
  {
    id: 'dangbei-ai',
    name: '当贝AI',
    description: '满血版DeepSeek R1 671B，免登录、极速、不卡顿！',
    url: 'https://ai.dangbei.com/',
    iconUrl: 'https://ai.dangbei.com/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['DeepSeek', '免登录', '大模型', 'R1'],
    rating: 4.6
  },
  {
    id: 'xunfei-xinghuo',
    name: '讯飞星火',
    description: '科大讯飞推出的新一代认知智能大模型，提供语言理解、代码编写等多种能力',
    url: 'https://xinghuo.xfyun.cn/desk?ch=xh_hdy1d',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['科大讯飞', '星火大模型', '认知智能', '代码理解'],
    rating: 4.6
  },
  {
    id: 'gaoding-ai',
    name: '稿定设计-AI',
    description: '在线快速图片和视频编辑，不会PS也能搞定设计，海量模板快速出图',
    url: 'https://www.gaoding.com/utms/f09424918c51460bb0867add54ce2ee4',
    iconUrl: 'https://www.gaoding.com/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['在线设计', '视频编辑', '抠图工具', '模板设计'],
    rating: 4.6
  },
  {
    id: 'behance',
    name: 'Behance',
    description: 'Adobe旗下的设计师交流平台，来自世界各地的设计师在这里分享自己的作品',
    url: 'https://behance.net/',
    iconUrl: 'https://nav.iowen.cn/wp-content/uploads/2019/11/download.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['Adobe', '设计师交流', '作品分享', '国际平台'],
    rating: 4.6
  },
  {
    id: 'xunfei-xingchen',
    name: '讯飞星辰Agent开发平台',
    description: '新一代智能体Agent开发平台，支持通过提示词Prompt、工作流Workflow灵活创建专业智能体',
    url: 'https://agent.xfyun.cn/home?ch=xcagent-aitool28',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://agent.xfyun.cn/home?ch=xcagent-aitool28',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['智能体', 'Agent', '工作流', 'MCP Server'],
    rating: 4.8
  },
  {
    id: 'xunfei-zhiwen',
    name: '讯飞智文一键生成PPT',
    description: '科大讯飞推出的一键生成ppt/word产品，支持智能生成文档、美化、排版等功能',
    url: 'https://zhiwen.xfyun.cn/home?from=aitool18',
    iconUrl: 'https://zhiwen.xfyun.cn/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['PPT生成', '文档生成', '智能排版', '演讲稿'],
    rating: 4.8
  },
  {
    id: 'trae-ai',
    name: '字节旗下AI代码助手',
    description: '国内首款AI原生IDE，专为中国开发者打造，让AI深度融入编程',
    url: 'https://www.trae.com.cn/?utm_source=advertising&utm_medium=uied_ug_cpa&utm_term=hw_trae_uied',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['AI IDE', '字节跳动', '代码助手', '编程工具'],
    rating: 4.5
  },
  {
    id: 'doubao-ai',
    name: '豆包-全能AI助手',
    description: '字节跳动推出的AI聊天智能对话问答助手，支持写作文案翻译情感陪伴编程等',
    url: 'https://m.paluai.com/?code=dh26',
    iconUrl: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/samantha/logo-icon-white-bg.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['字节跳动', '豆包AI', '智能对话', '全能助手'],
    rating: 4.9
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    description: '全球美图收藏采集站，世界最大的创意图片分享平台',
    url: 'https://www.pinterest.com',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['创意分享', '美图收藏', '灵感来源', '国际平台'],
    rating: 4.5
  },
  {
    id: 'zcool',
    name: 'ZCOOL站酷',
    description: '中国设计师互动平台，聚集1400万设计师、摄影师、插画师、艺术家',
    url: 'https://www.zcool.com.cn/',
    iconUrl: 'https://www.88sheji.cn/wp-content/uploads/2022/07/8f66d-www.zcool.com.cn.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['设计师社区', '作品展示', '设计交流', '中国平台'],
    rating: 4.8
  },
  {
    id: 'ai-daxuetang',
    name: 'AI大学堂',
    description: '科大讯飞打造的AI在线学习平台，提供人工智能培训、编程入门等课程',
    url: 'https://www.aidaxue.com/?ch=daxue_collection_27',
    iconUrl: 'https://www.aidaxue.com/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['科大讯飞', 'AI学习', '编程培训', 'Python'],
    rating: 4.8
  },
  {
    id: 'xunfei-huiwen',
    name: '讯飞绘文',
    description: '集AI写作、选题、配图、排版、润色、发布等功能为一体的智能创作平台',
    url: 'https://turbodesk.xfyun.cn/client-pro?channelid=aitool29',
    iconUrl: 'https://turbodesk.xfyun.cn/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['AI写作', '智能创作', '内容营销', '公众号'],
    rating: 4.8
  },
  {
    id: 'cappt-ai',
    name: 'AI一键生成PPT',
    description: '咔片AIPPT，工作总结/教学课件/商业提案3分钟搞定！10万+场景模板一键替换',
    url: 'https://www.cappt.cc/?mtm_campaign=CZQD-aidh-zd14-10055',
    iconUrl: 'https://www.cappt.cc/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['PPT生成', '模板替换', '在线编辑', '免费使用'],
    rating: 4.4
  },
  {
    id: 'bairimeng-ai',
    name: '白日梦AI',
    description: '全新的文生视频类AIGC创作平台，支持文生视频、动态画面、AI角色生成等',
    url: 'https://aibrm.com/?code=fx_cdcc',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['文生视频', 'AI角色', '动态画面', 'AIGC'],
    rating: 4.4
  },
  {
    id: 'mianfei-ai-writing',
    name: '免费AI写作',
    description: '讯飞绘文智能创作平台，集AI写作、选题、配图、排版、润色、发布等功能为一体',
    url: 'https://turbodesk.xfyun.cn/?channelid=gj110',
    iconUrl: 'https://turbodesk.xfyun.cn/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['免费写作', '智能创作', '内容营销', '新闻发布'],
    rating: 4.8
  },
  {
    id: 'huaban-net',
    name: '花瓣网',
    description: '设计师寻找灵感的天堂！图片素材领导者，帮你采集、发现网络上你喜欢的事物',
    url: 'http://huaban.com',
    iconUrl: 'http://huaban.com/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['设计灵感', '图片素材', '采集工具', '创意收集'],
    rating: 4.4
  },
  {
    id: 'chatexcel-ai',
    name: 'ChatExcel AI Excel处理',
    description: '用聊天方式操作Excel，AI自动完成图表处理和分析，无需编写复杂公式',
    url: 'https://www.chatexcel.com/#/home?partner_uuid=4227AB911C6531FF898C5E7BB54757E6',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['Excel处理', '数据分析', '聊天操作', 'AI表格'],
    rating: 4.3
  },
  {
    id: 'xunfei-wenshu',
    name: '讯飞文书',
    description: '基于星火大模型的AI材料写作平台，提供素材筹备、稿件撰写、审稿核稿全流程功能',
    url: 'https://gw.iflydocs.com/?from=AIjihe39',
    iconUrl: 'https://gw.iflydocs.com/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['材料写作', '公文写作', '录音智记', '稿件撰写'],
    rating: 4.8
  },
  {
    id: 'huiwa-ai',
    name: '免费AI电商绘蛙工具',
    description: '智能图片、文案创作平台，支持AI生成商拍图、小红书图片、电商主图等',
    url: 'https://www.ihuiwa.com/invite?huiwaInviteCode=EMRCNL',
    iconUrl: 'https://www.ihuiwa.com/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['电商设计', '商拍图', '小红书', 'AI绘画'],
    rating: 4.7
  },
  {
    id: 'xiangsheji',
    name: '享设计',
    description: '设计作品共享交易平台，提供海报、长图、房地产等设计源文件免费下载',
    url: 'https://www.design006.com/?inviteCode=MB144KM1',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['设计素材', '免费下载', 'PSD源文件', '设计交易'],
    rating: 4.3
  },
  {
    id: 'ui-cn',
    name: 'UICN用户体验设计平台',
    description: 'UI中国用户体验平台，国内极具影响力的设计平台之一，携手会员150万+',
    url: 'http://www.ui.cn/',
    iconUrl: 'http://www.ui.cn/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['UI设计', '用户体验', '设计平台', '设计生态'],
    rating: 4.3
  },
  {
    id: 'wenxiaobai',
    name: 'DeepSeek满血版',
    description: 'DeepSeek-满血版!彻底解锁智能搜索，无限制、免费畅享!',
    url: 'https://www.wenxiaobai.com/?forceLogin=true&source=uied&ad_source=uied',
    iconUrl: 'https://t3.gstatic.cn/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&size=128&url=https://www.wenxiaobai.com/?forceLogin=true&source=88sheji&ad_source=88sheji',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: [' DeepSeek', 'AI对话'],
    rating: 5.0
  },
  {
    id: 'aippt-free',
    name: 'AI免费生成PPT',
    description: 'AI一键免费生成PPT，输入主题，3分钟完成PPT制作！',
    url: 'https://www.aippt.cn/?utm_type=Navweb&utm_source=bbdh&utm_page=aippt&utm_plan=ppt&utm_unit=AIPPT&utm_keyword=40471047',
    iconUrl: 'https://www.aippt.cn/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['免费PPT', 'AI生成', '快速制作', '主题生成'],
    rating: 4.8
  },
  {
    id: 'mianfei-sucai',
    name: '免费素材资源',
    description: 'UI素材、手机样机、PS插件、AE插件等免费资源集合',
    url: 'https://www.lovedesignc.com/topics/free/',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['免费素材', 'UI素材', '样机', 'PS插件'],
    rating: 4.2
  },
  {
    id: 'doudou-ai',
    name: '逗逗游戏伙伴',
    description: '陪你一起玩游戏的AI桌宠软件，各种个性二次元人物会陪你聊天、唱歌',
    url: 'https://www.doudou.fun/?channel=web_aitool09',
    iconUrl: 'https://www.doudou.fun/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['AI桌宠', '游戏伙伴', '二次元', '语音陪伴'],
    rating: 4.1
  },
  {
    id: 'tuuxiang-keshihua',
    name: '图象可视化',
    description: '聚焦国内外可视化创意社区，展示优秀的数据可视化和创意设计作品',
    url: 'https://www.tuuux.com/',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['数据可视化', '创意社区', '设计灵感', '可视化作品'],
    rating: 4.1
  },
  {
    id: 'baibaishangdian',
    name: '拜拜软件',
    description: '一个为软件而生的网站，提供各种实用软件资源',
    url: 'https://88appp.com/',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-hot',
    tags: ['软件资源', '实用工具', '软件下载', '工具集合'],
    rating: 4.0
  },

  // UIED系列 - UIED相关网站
  {
    id: 'uied-main',
    name: 'UIED学习平台',
    description: '为UI/UX设计师而生的学习平台，提供优秀设计网站、设计教程和实用技巧',
    url: 'https://www.uied.cn/',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['UI设计', 'UX设计', '学习平台', '设计教程'],
    rating: 4.6
  },
  {
    id: 'uied-tools',
    name: 'UIED免费工具',
    description: '提供免费的在线工具集合，包括图片处理、PDF工具、文本工具等实用功能',
    url: 'https://uiedtool.com/',
    iconUrl: 'https://uiedtool.com/favicon.ico',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['在线工具', '图片处理', 'PDF工具', '免费使用'],
    rating: 4.5
  },
  {
    id: 'uied-team',
    name: 'UIED技术团队',
    description: 'UIED技术团队官网，专注于为设计师提供优质的技术服务和解决方案',
    url: 'https://fsuied.com/',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['技术团队', '设计服务', '技术解决方案', 'UIED'],
    rating: 4.4
  },
  {
    id: 'uied-hot',
    name: 'UIED资讯热榜',
    description: 'UIED资讯热榜，实时汇聚设计行业热点资讯、趋势动态和精选内容',
    url: 'https://hot.uied.cn/',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['设计资讯', '热点资讯', '行业动态', '设计趋势'],
    rating: 4.4
  },
  {
    id: 'uied-nav-ui',
    name: 'UIED UI导航',
    description: 'UIED设计导航 - UI/UX设计资源导航，精选优质UI设计工具和资源',
    url: 'https://hao.uied.cn/',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['UI导航', 'UX导航', '设计导航', '设计工具'],
    rating: 4.5
  },
  {
    id: 'uied-nav-design',
    name: 'UIED 平面导航',
    description: 'UIED设计导航 - 平面设计资源导航，汇聚优质平面设计工具和素材',
    url: 'https://hao.uied.cn/design',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['平面导航', '平面设计', '设计素材', '字体资源'],
    rating: 4.4
  },
  {
    id: 'uied-nav-ai',
    name: 'UIED AI导航',
    description: 'UIED设计导航 - AI工具导航，精选最新AI设计工具和人工智能资源',
    url: 'https://hao.uied.cn/ai',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['AI导航', 'AI工具', '人工智能', 'AI设计'],
    rating: 4.5
  },
  {
    id: 'uied-fonts',
    name: 'UIED-免费商用字体收集',
    description: '为UI/UX设计师而生的学习平台，精选优秀设计网站、免费无版权可商用字体',
    url: 'https://www.uied.cn/category/pingmian/font?tags1=%e5%85%8d%e8%b4%b9%e5%95%86%e7%94%a8%e5%ad%97%e4%bd%93',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['免费字体', '商用字体', '设计资源', 'UI设计'],
    rating: 4.3
  },
  {
    id: 'uied-sucai',
    name: 'UIED-素材',
    description: '为UI/UX设计师而生的学习平台，提供优秀设计素材、教程和设计技巧',
    url: 'https://www.uied.cn/sucai',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['设计素材', 'UI设计', '学习平台', '免费资源'],
    rating: 4.3
  },
  {
    id: 'uied-aigc',
    name: 'AIGC学习平台',
    description: '专为设计师打造的AIGC学习平台，深入探索AI在设计领域的应用',
    url: 'https://www.uied.cn/category/wenzhang/ai',
    iconUrl: 'https://img.88sheji.cn/wp-content/uploads/2022/06/hGlZ7q-20250606.png',
    category: 'hot-recommendations',
    subCategory: 'hot-recommendations-uied',
    tags: ['AIGC学习', '设计教育', 'AI应用', '学习平台'],
    rating: 4.2
  }
];

/**
 * 获取热门推荐工具
 * @param {number} limit - 限制数量，默认12个
 * @returns {Array} 热门推荐工具列表
 */
export const getHotRecommendations = (limit = 12) => {
  return hotRecommendations
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
};

/**
 * 根据分类获取热门推荐
 * @param {string} categoryId - 分类ID
 * @param {number} limit - 限制数量，如果不传或为0则返回所有
 * @returns {Array} 该分类下的热门推荐
 */
export const getHotRecommendationsByCategory = (categoryId, limit = 0) => {
  const filtered = hotRecommendations
    .filter(tool => tool.category === categoryId)
    .sort((a, b) => b.rating - a.rating);
  
  return limit > 0 ? filtered.slice(0, limit) : filtered;
};

/**
 * 根据子分类获取热门推荐 - 新增功能
 * @param {string} subCategoryId - 子分类ID
 * @param {number} limit - 限制数量，如果不传或为0则返回所有
 * @returns {Array} 该子分类下的热门推荐
 */
export const getHotRecommendationsBySubCategory = (subCategoryId, limit = 0) => {
  const filtered = hotRecommendations
    .filter(tool => tool.subCategory === subCategoryId)
    .sort((a, b) => b.rating - a.rating);
  
  return limit > 0 ? filtered.slice(0, limit) : filtered;
};

/**
 * 获取指定分类的所有子分类
 * @param {string} categoryId - 分类ID
 * @returns {Array} 子分类列表
 */
export const getSubCategoriesByCategory = (categoryId) => {
  return hotRecommendationSubCategories[categoryId] || [];
};

/**
 * 获取分类下的所有子分类统计信息
 * @param {string} categoryId - 分类ID
 * @returns {Object} 子分类统计信息
 */
export const getSubCategoryStats = (categoryId) => {
  const subCategories = getSubCategoriesByCategory(categoryId);
  const stats = {};
  
  subCategories.forEach(subCat => {
    const toolsCount = hotRecommendations.filter(tool => tool.subCategory === subCat.id).length;
    stats[subCat.id] = {
      ...subCat,
      count: toolsCount
    };
  });
  
  return stats;
};

export default {
  hotRecommendations,
  hotRecommendationSubCategories,
  getHotRecommendations,
  getHotRecommendationsByCategory,
  getHotRecommendationsBySubCategory,
  getSubCategoriesByCategory,
  getSubCategoryStats
}; 