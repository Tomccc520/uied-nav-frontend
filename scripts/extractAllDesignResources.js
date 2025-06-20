/**
 * @file extractAllDesignResources.js
 * @description 从设计工具数据库中提取所有设计素材并转换为电商素材格式
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

// 数据库文件路径
const designDbPath = path.join(__dirname, '../src/data/designToolsDatabase.js');
const ecommerceDbPath = path.join(__dirname, '../src/data/ecommerceToolsDatabase.js');

// 解析工具对象的辅助函数
function parseToolObject(toolStr) {
  try {
    // 提取每个字段的值
    const tool = {};
    
    // 提取ID
    const idMatch = toolStr.match(/id:\s*['"`]([^'"`]+)['"`]/);
    tool.id = idMatch ? idMatch[1] : '';
    
    // 提取名称 
    const nameMatch = toolStr.match(/name:\s*['"`]([^'"`]+?)['"`]/);
    tool.name = nameMatch ? nameMatch[1] : '';
    
    // 提取描述
    const descMatch = toolStr.match(/description:\s*['"`]([^'"`]+?)['"`]/);
    tool.description = descMatch ? descMatch[1] : '';
    
    // 提取URL - 使用更精确的正则
    const urlMatch = toolStr.match(/url:\s*['"`](https?:\/\/[^'"`]+)['"`]/);
    tool.url = urlMatch ? urlMatch[1] : '';
    
    // 提取iconUrl - 使用更精确的正则  
    const iconUrlMatch = toolStr.match(/iconUrl:\s*['"`](https?:\/\/[^'"`]+)['"`]/);
    tool.iconUrl = iconUrlMatch ? iconUrlMatch[1] : '';
    
    // 提取category
    const categoryMatch = toolStr.match(/category:\s*['"`]([^'"`]+)['"`]/);
    tool.category = categoryMatch ? categoryMatch[1] : '';
    
    // 提取subcategory
    const subcategoryMatch = toolStr.match(/subcategory:\s*['"`]([^'"`]+)['"`]/);
    tool.subcategory = subcategoryMatch ? subcategoryMatch[1] : '';
    
    // 提取tags数组
    const tagsMatch = toolStr.match(/tags:\s*(\[[^\]]+\])/);
    if (tagsMatch) {
      try {
        tool.tags = JSON.parse(tagsMatch[1].replace(/'/g, '"'));
      } catch (e) {
        tool.tags = [];
      }
    } else {
      tool.tags = [];
    }
    
    // 提取布尔值
    const isHotMatch = toolStr.match(/isHot:\s*(true|false)/);
    tool.isHot = isHotMatch ? isHotMatch[1] === 'true' : false;
    
    const isFeaturedMatch = toolStr.match(/isFeatured:\s*(true|false)/);
    tool.isFeatured = isFeaturedMatch ? isFeaturedMatch[1] === 'true' : false;
    
    const isNewMatch = toolStr.match(/isNew:\s*(true|false)/);
    tool.isNew = isNewMatch ? isNewMatch[1] === 'true' : false;
    
    // 提取rating
    const ratingMatch = toolStr.match(/rating:\s*([0-9.]+)/);
    tool.rating = ratingMatch ? parseFloat(ratingMatch[1]) : 4.0;
    
    return tool;
  } catch (error) {
    console.warn('解析工具对象失败:', error.message);
    return null;
  }
}

function extractDesignResources() {
  try {
    console.log('🔍 开始提取设计工具数据库中的设计素材...');
    
    // 读取设计工具数据库文件
    const designDbContent = fs.readFileSync(designDbPath, 'utf8');
    
    // 找到designTools数组的开始和结束位置
    const arrayStartPattern = /export\s+const\s+designTools\s*=\s*\[/;
    const arrayStartMatch = designDbContent.match(arrayStartPattern);
    
    if (!arrayStartMatch) {
      throw new Error('找不到 designTools 数组');
    }
    
    const arrayStartIndex = arrayStartMatch.index + arrayStartMatch[0].length;
    
    // 找到数组结束位置（匹配最后的 ];）
    let bracketCount = 1;
    let arrayEndIndex = arrayStartIndex;
    
    for (let i = arrayStartIndex; i < designDbContent.length && bracketCount > 0; i++) {
      if (designDbContent[i] === '[') bracketCount++;
      if (designDbContent[i] === ']') bracketCount--;
      if (bracketCount === 0) {
        arrayEndIndex = i;
        break;
      }
    }
    
    // 提取数组内容
    const arrayContent = designDbContent.substring(arrayStartIndex, arrayEndIndex);
    
    // 分割成单个工具对象 - 使用更精确的分割方式
    const toolMatches = arrayContent.match(/\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/g);
    
    if (!toolMatches) {
      throw new Error('无法解析工具对象');
    }
    
    console.log(`📚 找到 ${toolMatches.length} 个工具对象`);
    
    // 解析每个工具对象
    const designTools = [];
    for (const toolMatch of toolMatches) {
      const tool = parseToolObject(toolMatch);
      if (tool && tool.id) {
        designTools.push(tool);
      }
    }
    
    console.log(`✅ 成功解析 ${designTools.length} 个工具`);
    
    // 筛选出设计素材类工具
    const designResourceTools = designTools.filter(tool => tool.category === 'design-resources');
    
    console.log(`🎨 找到设计素材工具：${designResourceTools.length} 个`);
    
    if (designResourceTools.length === 0) {
      console.log('⚠️ 未找到设计素材工具，请检查分类名称');
      return;
    }
    
    // 转换为电商素材格式
    const convertedTools = designResourceTools.map(tool => ({
      ...tool,
      category: 'ecommerce-materials', // 改为电商素材分类
    }));
    
    // 按子分类统计
    const categoryStats = {};
    convertedTools.forEach(tool => {
      const subcat = tool.subcategory;
      if (!categoryStats[subcat]) {
        categoryStats[subcat] = 0;
      }
      categoryStats[subcat]++;
    });
    
    console.log('\n📊 按子分类统计：');
    Object.entries(categoryStats)
      .sort((a, b) => b[1] - a[1])
      .forEach(([subcat, count]) => {
        const subcatMap = {
          'design-resources-icons': '🎯 图标素材',
          'design-resources-3dmodels': '🎨 3D模型',
          'design-resources-fontwebsites': '📝 字体网站',
          'design-resources-ppt': '📄 PPT资源',
          'design-resources-illustrations': '🖼️ 插画素材',
          'design-resources-mockups': '📐 样机素材',
          'design-resources-ui': '🎵 UI素材',
          'design-resources-images': '📷 可商用图库',
          'design-resources-fonts': '🔤 可商用字体',
          'design-resources-soundeffects': '🎪 音效网站',
          'design-resources-cutout': '✂️ 免抠素材',
          'design-resources-video': '🎬 可商用视频',
          'design-resources-plane': '📱 平面素材',
          'design-resources-aepr': '🎞️ AE/PR模板',
          'design-resources-3d': '🏗️ 3D素材'
        };
        console.log(`  ${subcatMap[subcat] || subcat}: ${count} 个工具`);
      });
    
    // 读取电商数据库文件
    console.log('\n📝 准备写入电商数据库...');
    const ecommerceContent = fs.readFileSync(ecommerceDbPath, 'utf8');
    
    // 找到最后一个工具的结束位置
    const lastToolPattern = /rating:\s*4\.6\s*\n\s*}/g;
    let lastMatch;
    let lastToolEndIndex = -1;
    
    while ((lastMatch = lastToolPattern.exec(ecommerceContent)) !== null) {
      lastToolEndIndex = lastMatch.index + lastMatch[0].length;
    }
    
    if (lastToolEndIndex === -1) {
      throw new Error('找不到最后一个工具的结束位置');
    }
    
    // 分割内容
    const beforeLastTool = ecommerceContent.substring(0, lastToolEndIndex);
    const afterLastTool = ecommerceContent.substring(lastToolEndIndex);
    
    // 构建新工具的字符串
    let newToolsString = '';
    convertedTools.forEach((tool, index) => {
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
    
    console.log(`\n✅ 成功添加 ${convertedTools.length} 个设计素材工具到电商数据库！`);
    console.log('\n🎉 电商素材数据库更新完成！');
    
  } catch (error) {
    console.error('❌ 提取设计素材失败:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// 运行脚本
extractDesignResources(); 