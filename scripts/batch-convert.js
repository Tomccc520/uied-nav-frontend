#!/usr/bin/env node

/**
 * @file batch-convert.js
 * @description 批量转换JSON格式数据到JavaScript格式的脚本
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

const fs = require('fs');
const path = require('path');
const { convertJsonFile } = require('../src/utils/convertJsonToJs');

/**
 * 批量转换指定目录下的所有JSON文件
 */
function batchConvert(inputDir = 'src/data', outputDir = 'src/data') {
  console.log('🚀 开始批量转换JSON文件...\n');
  
  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // 查找所有JSON文件
  const files = fs.readdirSync(inputDir)
    .filter(file => file.endsWith('.json') && !file.includes('converted'))
    .filter(file => {
      // 检查是否是88设计网导航数据格式
      try {
        const content = fs.readFileSync(path.join(inputDir, file), 'utf8');
        const data = JSON.parse(content);
        return Array.isArray(data) && data.length > 0 && data[0].title && data[0].url;
      } catch (e) {
        return false;
      }
    });
  
  if (files.length === 0) {
    console.log('❌ 未找到可转换的JSON文件');
    return;
  }
  
  console.log(`📁 找到 ${files.length} 个可转换的文件:`);
  files.forEach(file => console.log(`   - ${file}`));
  console.log('');
  
  let successCount = 0;
  let failCount = 0;
  
  // 转换每个文件
  files.forEach((file, index) => {
    try {
      const inputFile = path.join(inputDir, file);
      const baseName = path.basename(file, '.json');
      const outputFile = path.join(outputDir, `${baseName}_converted.js`);
      
      console.log(`[${index + 1}/${files.length}] 转换: ${file}`);
      
      convertJsonFile(inputFile, outputFile);
      successCount++;
      
      console.log(`✅ 成功生成: ${path.basename(outputFile)}\n`);
      
    } catch (error) {
      console.error(`❌ 转换失败: ${file}`);
      console.error(`   错误: ${error.message}\n`);
      failCount++;
    }
  });
  
  // 输出总结
  console.log('📊 批量转换完成!');
  console.log(`✅ 成功: ${successCount} 个文件`);
  console.log(`❌ 失败: ${failCount} 个文件`);
  
  if (successCount > 0) {
    console.log('\n🎉 转换后的文件可以直接导入到你的项目中使用！');
    console.log('\n使用示例:');
    console.log('```javascript');
    console.log("import { aiTools } from './data/filename_converted.js';");
    console.log('```');
  }
}

/**
 * 转换单个文件（带交互）
 */
function convertSingle() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('请输入JSON文件路径: ', (inputFile) => {
    if (!fs.existsSync(inputFile)) {
      console.log('❌ 文件不存在!');
      rl.close();
      return;
    }
    
    const baseName = path.basename(inputFile, '.json');
    const outputFile = `${baseName}_converted.js`;
    
    rl.question(`输出文件名 (默认: ${outputFile}): `, (output) => {
      const finalOutput = output.trim() || outputFile;
      
      try {
        convertJsonFile(inputFile, finalOutput);
        console.log('🎉 转换完成!');
      } catch (error) {
        console.error(`❌ 转换失败: ${error.message}`);
      }
      
      rl.close();
    });
  });
}

// 命令行参数处理
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case 'batch':
    const inputDir = args[1] || 'src/data';
    const outputDir = args[2] || 'src/data';
    batchConvert(inputDir, outputDir);
    break;
    
  case 'single':
    convertSingle();
    break;
    
  case 'help':
  case '--help':
  case '-h':
    console.log(`
📚 JSON转换工具使用指南

命令:
  batch [输入目录] [输出目录]    批量转换目录下的所有JSON文件
  single                        交互式转换单个文件
  help                          显示此帮助信息

示例:
  # 批量转换 src/data 目录下的所有JSON文件
  node scripts/batch-convert.js batch

  # 批量转换指定目录
  node scripts/batch-convert.js batch ./json-files ./output

  # 交互式转换单个文件
  node scripts/batch-convert.js single

特性:
  ✅ 自动识别88设计网导航数据格式
  ✅ 智能提取网站名称和描述
  ✅ 自动生成评分和定价信息
  ✅ 清理和优化标签
  ✅ 生成符合项目格式的JavaScript代码
  ✅ 详细的转换统计信息

注意事项:
  - 只转换包含 title 和 url 字段的JSON数组文件
  - 输出文件名会自动添加 _converted.js 后缀
  - 已存在的转换文件会被覆盖
    `);
    break;
    
  default:
    console.log(`
🔧 JSON转换工具

使用方法:
  node scripts/batch-convert.js <command> [options]

命令:
  batch     批量转换
  single    单文件转换
  help      帮助信息

快速开始:
  node scripts/batch-convert.js batch
    `);
} 