/**
 * @file analyzeEcommerceCategories.js
 * @description 分析电商工具数据库中各分类的网站数量分布
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');

// 电商数据库文件路径
const ecommerceDbPath = path.join(__dirname, '../src/data/ecommerceToolsDatabase.js');

function analyzeCategories() {
  try {
    console.log('🔍 开始分析电商工具数据库中的分类分布...\n');
    
    // 读取电商工具数据库文件
    const ecommerceContent = fs.readFileSync(ecommerceDbPath, 'utf8');
    
    // 找到数组开始和结束位置
    const arrayStartPattern = /const\s+ecommerceTools\s*=\s*\[/;
    const arrayStartMatch = ecommerceContent.match(arrayStartPattern);
    
    if (!arrayStartMatch) {
      throw new Error('找不到 ecommerceTools 数组');
    }
    
    const arrayStartIndex = arrayStartMatch.index + arrayStartMatch[0].length;
    
    // 找到数组结束位置
    let bracketCount = 1;
    let arrayEndIndex = arrayStartIndex;
    
    for (let i = arrayStartIndex; i < ecommerceContent.length && bracketCount > 0; i++) {
      if (ecommerceContent[i] === '[') bracketCount++;
      if (ecommerceContent[i] === ']') bracketCount--;
      if (bracketCount === 0) {
        arrayEndIndex = i;
        break;
      }
    }
    
    // 提取数组内容
    const arrayContent = ecommerceContent.substring(arrayStartIndex, arrayEndIndex);
    
    // 统计各分类
    const categoryStats = {};
    const subcategoryStats = {};
    
    // 提取所有category和subcategory
    const categoryMatches = arrayContent.match(/category:\s*['"`]([^'"`]+)['"`]/g);
    const subcategoryMatches = arrayContent.match(/subcategory:\s*['"`]([^'"`]+)['"`]/g);
    
    if (categoryMatches && subcategoryMatches) {
      // 统计主分类
      categoryMatches.forEach(match => {
        const category = match.match(/category:\s*['"`]([^'"`]+)['"`]/)[1];
        if (!categoryStats[category]) {
          categoryStats[category] = 0;
        }
        categoryStats[category]++;
      });
      
      // 统计子分类
      subcategoryMatches.forEach(match => {
        const subcategory = match.match(/subcategory:\s*['"`]([^'"`]+)['"`]/)[1];
        if (!subcategoryStats[subcategory]) {
          subcategoryStats[subcategory] = 0;
        }
        subcategoryStats[subcategory]++;
      });
    }
    
    console.log('📊 主分类统计结果：');
    console.log('==================');
    const sortedCategories = Object.entries(categoryStats).sort((a, b) => b[1] - a[1]);
    
    const categoryNames = {
      'design-inspiration': '🎨 电商灵感',
      'store-design': '🏪 店铺装修', 
      'product-photo': '📸 产品摄影',
      'detail-page': '📄 详情页设计',
      'marketing-material': '🎯 营销素材',
      'color-palette': '🎨 配色方案',
      'ecommerce-materials': '📦 电商素材'
    };
    
    sortedCategories.forEach(([category, count]) => {
      const displayName = categoryNames[category] || category;
      const status = count >= 10 ? '✅' : '❌';
      console.log(`${status} ${displayName}: ${count} 个网站`);
    });
    
    console.log('\n📊 子分类统计结果：');
    console.log('==================');
    const sortedSubcategories = Object.entries(subcategoryStats).sort((a, b) => b[1] - a[1]);
    
    const subcategoryNames = {
      'ecommerce-showcase': '电商展示',
      'store-builder': '店铺建设',
      'photo-editing': '图片编辑',
      'photo-background': '背景处理',
      'page-builder': '页面构建',
      'marketing-poster': '海报制作',
      'marketing-social': '社交媒体',
      'color-generators': '色彩生成',
      'design-resources-icons': '图标素材',
      'design-resources-3dmodels': '3D模型',
      'design-resources-fontwebsites': '字体网站',
      'design-resources-ppt': 'PPT资源',
      'design-resources-illustrations': '插画素材',
      'design-resources-mockups': '样机素材',
      'design-resources-ui': 'UI素材',
      'design-resources-images': '可商用图库',
      'design-resources-fonts': '可商用字体',
      'design-resources-soundeffects': '音效网站',
      'design-resources-plane': '平面素材',
      'design-resources-video': '可商用视频',
      'design-resources-cutout': '免抠素材',
      'design-resources-aepr': 'AE/PR模板',
      'design-resources-3d': '3D素材'
    };
    
    const needMoreData = [];
    
    sortedSubcategories.forEach(([subcategory, count]) => {
      const displayName = subcategoryNames[subcategory] || subcategory;
      const status = count >= 10 ? '✅' : '❌';
      console.log(`${status} ${displayName}: ${count} 个网站`);
      
      if (count < 10) {
        needMoreData.push({
          subcategory,
          displayName,
          current: count,
          needed: 10 - count
        });
      }
    });
    
    if (needMoreData.length > 0) {
      console.log('\n⚠️  需要补充数据的分类：');
      console.log('====================');
      needMoreData.forEach(item => {
        console.log(`${item.displayName}: 需要再添加 ${item.needed} 个网站`);
      });
    }
    
    console.log(`\n📈 总网站数量: ${categoryMatches ? categoryMatches.length : 0}`);
    
  } catch (error) {
    console.error('❌ 分析失败:', error.message);
    process.exit(1);
  }
}

// 运行分析
analyzeCategories(); 