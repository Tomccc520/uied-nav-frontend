/**
 * @file Banner/index.tsx
 * @description Banner组件 - 展示5个自适应卡片式内容
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React from 'react';
import { DesignIcons } from '../UI';
import './index.css';
import './index.mobile.css';

// 卡片数据接口
interface BannerCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  link?: string;
  badge?: string;
}

// Banner组件属性接口
interface BannerProps {
  title?: string;
  subtitle?: string;
  cards?: BannerCard[];
  className?: string;
}

// 默认卡片数据
const defaultCards: BannerCard[] = [
  {
    id: 'featured-ai',
    title: 'AI工具集合',
    description: '最新最热门的人工智能工具，提升工作效率',
    icon: DesignIcons.AI,
    color: '#8B5DFF',
    link: '/ai',
    badge: '热门'
  },
  {
    id: 'design-resources',
    title: '设计资源库',
    description: '精选设计素材、模板和灵感来源',
    icon: DesignIcons.Material,
    color: '#22D3EE',
    link: '/#category-4'
  },
  {
    id: 'aigc-knowledge',
    title: 'AIGC知识共创文档',
    description: 'AIGC领域知识分享与协作文档',
    icon: DesignIcons.AI,
    color: '#10a37f',
    link: 'https://www.uied.cn/circle/89814.html',
    badge: '共创'
  },
  {
    id: 'adobe-ai',
    title: 'Adobe AI',
    description: 'Adobe AI工具与应用指南',
    icon: DesignIcons.Image,
    color: '#FF6B6B',
    link: 'https://universalbus.cn/?s=lPLG02aydo'
  },
  {
    id: 'ai-account',
    title: 'AI账号',
    description: 'AI服务账号获取与管理',
    icon: DesignIcons.Analytics,
    color: '#6366f1',
    link: 'https://nf.video/xOlBA'
  }
];

/**
 * Banner组件
 * @param props 组件属性
 * @returns Banner JSX元素
 */
const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  cards = defaultCards,
  className = ''
}) => {
  
  /**
   * 处理卡片点击
   */
  const handleCardClick = (card: BannerCard) => {
    if (card.link) {
      if (card.link.startsWith('http')) {
        window.open(card.link, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = card.link;
      }
    }
  };

  return (
    <section className={`banner-section ${className}`}>
      <div className="banner-container">
        {/* 移除头部标题区域 */}
        
        {/* 卡片网格 */}
        <div className="banner-cards">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            
            return (
              <div
                key={card.id}
                className={`banner-card ${card.link ? 'clickable' : ''}`}
                style={{ '--card-color': card.color } as React.CSSProperties}
                onClick={() => handleCardClick(card)}
              >
                {/* 右上角徽章 */}
                {card.badge && (
                  <div className="banner-card-badge-corner">
                    {card.badge}
                  </div>
                )}
                
                {/* 卡片图标 */}
                <div className="banner-card-icon">
                  <IconComponent size={28} />
                </div>

                {/* 卡片内容 */}
                <div className="banner-card-content">
                  <div className="banner-card-header">
                    <h3 className="banner-card-title">{card.title}</h3>
                  </div>
                  <p className="banner-card-description">{card.description}</p>
                </div>

                {/* 卡片装饰 */}
                <div className="banner-card-decoration">
                  <div className="banner-card-gradient"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Banner; 