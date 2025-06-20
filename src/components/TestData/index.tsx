/**
 * @file TestData/index.tsx
 * @description 测试数据加载组件
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';

const TestData: React.FC = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [websites, setWebsites] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestData();
  }, []);

  const loadTestData = () => {
    // 模拟测试数据
    const testCategories = [
      { id: '1', name: 'AI工具', count: 4, color: '#667EEA' },
      { id: '2', name: 'UI设计', count: 4, color: '#F093FB' },
      { id: '3', name: '平面设计', count: 3, color: '#4FACFE' }
    ];

    const testWebsites = [
      { id: '1', name: 'ChatGPT', description: 'AI对话工具', category: '1' },
      { id: '2', name: 'Figma', description: '界面设计工具', category: '2' },
      { id: '3', name: 'Canva', description: '在线设计平台', category: '3' }
    ];

    setTimeout(() => {
      setCategories(testCategories);
      setWebsites(testWebsites);
      setLoading(false);
      console.log('✅ 测试数据加载完成');
    }, 1000);
  };

  if (loading) {
    return <div style={{ padding: '20px' }}>正在加载测试数据...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>🧪 数据测试结果</h2>
      
      <h3>📂 分类数据 ({categories.length})</h3>
      <ul>
        {categories.map(cat => (
          <li key={cat.id} style={{ color: cat.color }}>
            {cat.name} ({cat.count}个)
          </li>
        ))}
      </ul>

      <h3>🌐 网址数据 ({websites.length})</h3>
      <ul>
        {websites.map(site => (
          <li key={site.id}>
            <strong>{site.name}</strong> - {site.description}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f8ff', borderRadius: '5px' }}>
        <p>✅ 如果能看到上面的数据，说明组件渲染正常</p>
        <p>📊 统计：{categories.length} 个分类，{websites.length} 个网址</p>
      </div>
    </div>
  );
};

export default TestData; 