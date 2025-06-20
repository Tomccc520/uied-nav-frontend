/**
 * @file convertJsonToJs.js
 * @description JSON格式网站数据转JavaScript格式的通用转换脚本
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

/**
 * 生成slug格式的ID
 */
function generateId(title, url) {
  try {
    // 先尝试从title提取主要名称
    let name = title.split('\n')[0].trim();
    
    // 移除常见的无用词汇
    name = name.replace(/【.*?】/g, '')
             .replace(/：.*$/, '')
             .replace(/\s*\-.*$/, '')
             .replace(/\s*\|.*$/, '')
             .replace(/\s+/g, '-')
             .toLowerCase();
    
    // 如果名称还是很长或包含中文，尝试从URL提取
    if (name.length > 20 || /[\u4e00-\u9fa5]/.test(name)) {
      try {
        const urlObj = new URL(url);
        const domain = urlObj.hostname.replace('www.', '');
        name = domain.replace(/\./g, '-');
      } catch (e) {
        // URL解析失败，使用原名称
      }
    }
    
    // 清理特殊字符
    name = name.replace(/[^a-z0-9\u4e00-\u9fa5\-]/g, '')
               .replace(/\-+/g, '-')
               .replace(/^\-|\-$/g, '');
    
    return name || 'unknown';
  } catch (e) {
    return 'unknown';
  }
}

/**
 * 清理并提取网站名称
 */
function extractName(title) {
  try {
    // 获取第一行作为主标题
    let name = title.split('\n')[0].trim();
    
    // 移除特殊符号和描述
    name = name.replace(/【.*?】/g, '')
             .replace(/：.*$/, '')
             .replace(/\s*\-.*$/, '')
             .replace(/\s*\|.*$/, '')
             .replace(/\s+/g, ' ')
             .trim();
    
    return name || 'Unknown';
  } catch (e) {
    return 'Unknown';
  }
}

/**
 * 清理描述文本
 */
function cleanDescription(title, description) {
  try {
    // 获取完整的描述文本
    let fullText = title + ' ' + description;
    
    // 查找实际的描述内容（通常在换行后）
    const lines = fullText.split('\n').filter(line => line.trim());
    
    // 找到最有描述性的行
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && 
          !line.includes('优质的') && 
          !line.includes('工具网站') &&
          !line.includes('AI图像生成与编辑：数字艺术创作的未来') && // 移除重复描述
          line.length > 20) { // 增加最小长度要求
        // 清理描述
        let cleanDesc = line
          .replace(/【.*?】/g, '')
          .replace(/\s*-.*$/, '')
          .replace(/\s*\|.*$/, '')
          .replace(/^\s*优质的/, '')
          .replace(/工具网站$/, '')
          .trim();
        
        if (cleanDesc.length > 10) {
          return cleanDesc.substring(0, 150); // 适当限制长度
        }
      }
    }
    
    // 如果没找到好的描述，尝试从URL域名生成默认描述
    try {
      const urlObj = new URL(title.includes('http') ? title.split(' ')[0] : '');
      const domain = urlObj.hostname.replace('www.', '');
      return `基于${domain}的AI工具平台`;
    } catch (e) {
      return `${extractName(title)} - AI工具平台`;
    }
  } catch (e) {
    return 'AI工具平台';
  }
}

/**
 * 映射分类
 */
function mapCategory(originalCategory) {
  const categoryMap = {
    'ai-huihua': 'ai-huihua',
    'ai-xiezuo': 'ai-xiezuo',
    'ai-damoxing': 'ai-damoxing',
    'ai-shipin': 'ai-shipin',
    'ai-design': 'ai-design',
    'ai-office': 'ai-office',
    'ai-photo': 'ai-photo',
    'ai-kaifa': 'ai-kaifa',
    'ai-fanyi': 'ai-fanyi',
    'ai-yuyin': 'ai-yuyin',
    'ai-music': 'ai-music',
    'ai-prompt': 'ai-prompt'
  };
  
  return categoryMap[originalCategory] || 'ai-huihua';
}

/**
 * 清理和转换标签
 */
function processTags(tags, name, description) {
  let processedTags = [];
  
  if (Array.isArray(tags)) {
    processedTags = tags.filter(tag => 
      tag && 
      tag !== '工具' && 
      tag.length > 0
    );
  }
  
  // 如果标签太少，根据名称和描述添加一些
  if (processedTags.length < 2) {
    if (name.toLowerCase().includes('ai') || description.includes('AI')) {
      processedTags.push('ai');
    }
    if (description.includes('设计') || description.includes('design')) {
      processedTags.push('design');
    }
    if (description.includes('模板') || description.includes('template')) {
      processedTags.push('template');
    }
    if (description.includes('免费') || description.includes('free')) {
      processedTags.push('free');
    }
  }
  
  // 去重并限制数量
  return [...new Set(processedTags)].slice(0, 6);
}

/**
 * 生成定价信息
 */
function generatePricing(tags, description, name) {
  const text = (description + ' ' + name + ' ' + tags.join(' ')).toLowerCase();
  
  if (text.includes('免费') || text.includes('free')) {
    return 'free';
  } else if (text.includes('企业') || text.includes('enterprise')) {
    return 'enterprise';
  } else {
    return 'freemium';
  }
}

/**
 * 生成评分
 */
function generateRating(isHot, isFeatured, tags) {
  let baseRating = 3.8;
  
  if (isFeatured) baseRating += 0.4;
  if (isHot) baseRating += 0.3;
  if (tags.includes('free')) baseRating += 0.2;
  if (tags.includes('ai')) baseRating += 0.1;
  
  // 添加随机变化
  baseRating += (Math.random() - 0.5) * 0.4;
  
  return Math.min(4.8, Math.max(3.5, Math.round(baseRating * 10) / 10));
}

/**
 * 转换单个项目
 */
function convertItem(item, index) {
  const name = extractName(item.title);
  const description = cleanDescription(item.title, item.description || '');
  const id = generateId(name, item.url);
  const category = mapCategory(item.category);
  const tags = processTags(item.tags, name, description);
  const pricing = generatePricing(tags, description, name);
  const rating = generateRating(item.isHot, item.isFeatured, tags);
  
  return {
    id: `${category}-${String(index + 1).padStart(3, '0')}`,
    name,
    description,
    url: item.url,
    category,
    tags,
    isHot: Boolean(item.isHot),
    isFeatured: Boolean(item.isFeatured),
    isNew: Boolean(item.isNew),
    pricing,
    rating
  };
}

/**
 * 转换整个文件
 */
function convertJsonFile(inputFile, outputFile) {
  try {
    console.log(`开始转换文件: ${inputFile}`);
    
    // 读取JSON文件
    const jsonData = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
    
    if (!Array.isArray(jsonData)) {
      throw new Error('JSON文件必须包含一个数组');
    }
    
    // 转换所有项目
    const convertedItems = jsonData.map((item, index) => convertItem(item, index));
    
    // 生成JavaScript代码 - 手动格式化确保正确的对象字面量格式
    const formatItem = (item) => {
      return `  {
    id: '${item.id}',
    name: '${item.name.replace(/'/g, "\\'")}',
    description: '${item.description.replace(/'/g, "\\'")}',
    url: '${item.url}',
    category: '${item.category}',
    tags: [${item.tags.map(tag => `'${tag}'`).join(', ')}],
    isHot: ${item.isHot},
    isFeatured: ${item.isFeatured},
    isNew: ${item.isNew},
    pricing: '${item.pricing}',
    rating: ${item.rating}
  }`;
    };

    const jsContent = `/**
 * @file ${path.basename(outputFile)}
 * @description 转换自88设计网导航数据的AI工具数据库
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0 - 自动转换生成
 */

export const aiTools = [
${convertedItems.map(formatItem).join(',\n')}
];

export default aiTools;
`;
    
    // 写入文件
    fs.writeFileSync(outputFile, jsContent, 'utf8');
    
    console.log(`✅ 转换完成!`);
    console.log(`📁 输入文件: ${inputFile}`);
    console.log(`📁 输出文件: ${outputFile}`);
    console.log(`📊 转换项目数: ${convertedItems.length}`);
    
    // 统计信息
    const stats = {
      total: convertedItems.length,
      categories: {},
      pricing: {},
      hot: convertedItems.filter(item => item.isHot).length,
      featured: convertedItems.filter(item => item.isFeatured).length,
      new: convertedItems.filter(item => item.isNew).length
    };
    
    convertedItems.forEach(item => {
      stats.categories[item.category] = (stats.categories[item.category] || 0) + 1;
      stats.pricing[item.pricing] = (stats.pricing[item.pricing] || 0) + 1;
    });
    
    console.log(`📈 统计信息:`);
    console.log(`   分类分布: ${JSON.stringify(stats.categories, null, 2)}`);
    console.log(`   定价分布: ${JSON.stringify(stats.pricing, null, 2)}`);
    console.log(`   热门工具: ${stats.hot}`);
    console.log(`   推荐工具: ${stats.featured}`);
    console.log(`   新工具: ${stats.new}`);
    
    return convertedItems;
    
  } catch (error) {
    console.error(`❌ 转换失败: ${error.message}`);
    throw error;
  }
}

// 命令行使用
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.log(`
使用方法:
  node convertJsonToJs.js <输入JSON文件> <输出JS文件>

示例:
  node convertJsonToJs.js input.json output.js
    `);
    process.exit(1);
  }
  
  const [inputFile, outputFile] = args;
  
  try {
    convertJsonFile(inputFile, outputFile);
  } catch (error) {
    console.error(`转换失败: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  convertJsonFile,
  convertItem,
  generateId,
  extractName,
  cleanDescription
}; 