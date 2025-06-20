/**
 * @file WebsiteExitModal.tsx
 * @description 网站跳转确认弹窗组件 - 在用户访问外部网站前显示安全提示
 * @copyright 版权所有 (c) 2025 UIED技术团队
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Button from './Button';
import './WebsiteExitModal.css';

// 网站跳转弹窗属性接口
interface WebsiteExitModalProps {
  /** 是否显示弹窗 */
  visible: boolean;
  /** 目标网站信息 */
  website: {
    name: string;
    url: string;
    description?: string;
  } | null;
  /** 关闭回调 */
  onClose: () => void;
  /** 确认访问回调 */
  onConfirm: () => void;
  /** 举报回调 */
  onReport?: (url: string, reason: string) => void;
}

// 广告Banner数据
const bannerAds = [
  {
    id: 1,
    title: '设计师专属会员',
    description: '无限下载高质量设计资源',
    image: 'https://via.placeholder.com/200x80/4A90E2/ffffff?text=会员特权',
    link: '#'
  },
  {
    id: 2,
    title: '在线设计工具',
    description: '专业级在线设计平台',
    image: 'https://via.placeholder.com/200x80/50C878/ffffff?text=设计工具',
    link: '#'
  },
  {
    id: 3,
    title: '字体资源库',
    description: '数万款商用字体免费下载',
    image: 'https://via.placeholder.com/200x80/FF6B6B/ffffff?text=字体资源',
    link: '#'
  },
  {
    id: 4,
    title: '设计课程',
    description: '从入门到精通的设计教程',
    image: 'https://via.placeholder.com/200x80/9B59B6/ffffff?text=设计课程',
    link: '#'
  }
];

/**
 * 网站跳转确认弹窗组件
 * @param props 组件属性
 * @returns JSX元素
 */
const WebsiteExitModal: React.FC<WebsiteExitModalProps> = ({
  visible,
  website,
  onClose,
  onConfirm,
  onReport
}) => {
  const [isChecking, setIsChecking] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [showReportForm, setShowReportForm] = useState(false);
  const [reportReason, setReportReason] = useState('');

  // 安全检测倒计时
  useEffect(() => {
    if (!visible || !website) {
      setIsChecking(false);
      setCountdown(5);
      return;
    }

    setIsChecking(true);
    setCountdown(5);

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setIsChecking(false);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [visible, website]);

  // 处理继续访问
  const handleContinue = () => {
    onConfirm();
    onClose();
  };

  // 处理举报
  const handleReport = () => {
    if (onReport && website && reportReason.trim()) {
      onReport(website.url, reportReason);
      setShowReportForm(false);
      setReportReason('');
    }
  };

  // 获取域名
  const getDomain = (url: string) => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  };

  if (!website) return null;

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      width={560}
      className="website-exit-modal"
      maskClosable={false}
    >
      <div className="exit-modal-content">
        {/* 警告图标和标题 */}
        <div className="exit-modal-header">
          <div className="warning-icon">⚠️</div>
          <h2 className="exit-modal-title">即将离开UIED设计导航</h2>
        </div>

        {/* 网站信息 */}
        <div className="target-website-info">
          <div className="website-basic-info">
            <h3 className="website-name">{website.name}</h3>
            <p className="website-url">{getDomain(website.url)}</p>
            {website.description && (
              <p className="website-description">{website.description}</p>
            )}
          </div>
        </div>

        {/* 安全警告 */}
        <div className="security-warning">
          <div className="warning-content">
            <p className="warning-text">
              你访问的网站可能包含未知的安全风险，请注意保护帐号和隐私信息。
            </p>
            
            {/* 安全检测状态 */}
            <div className="security-check">
              {isChecking ? (
                <div className="checking-status">
                  <div className="loading-spinner"></div>
                  <span>正在检测网址安全中... ({countdown}s)</span>
                </div>
              ) : (
                <div className="check-complete">
                  <span className="check-icon">✓</span>
                  <span>安全检测完成</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 免责声明链接 */}
        <div className="disclaimer-section">
          <a href="#" className="disclaimer-link">《免责声明》</a>
          <button 
            className="report-link"
            onClick={() => setShowReportForm(!showReportForm)}
          >
            举报可疑网址
          </button>
        </div>

        {/* 举报表单 */}
        {showReportForm && (
          <div className="report-form">
            <h4>举报原因</h4>
            <textarea
              value={reportReason}
              onChange={(e) => setReportReason(e.target.value)}
              placeholder="请描述该网站存在的问题..."
              rows={3}
            />
            <div className="report-actions">
              <Button size="small" onClick={() => setShowReportForm(false)}>
                取消
              </Button>
              <Button 
                type="primary" 
                size="small"
                onClick={handleReport}
                disabled={!reportReason.trim()}
              >
                提交举报
              </Button>
            </div>
          </div>
        )}

        {/* 广告Banner区域 */}
        <div className="banner-ads">
          <h4 className="ads-title">推荐资源</h4>
          <div className="ads-grid">
            {bannerAds.map(ad => (
              <div key={ad.id} className="ad-card">
                <img src={ad.image} alt={ad.title} />
                <div className="ad-content">
                  <h5>{ad.title}</h5>
                  <p>{ad.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="exit-modal-actions">
          <Button onClick={onClose}>
            返回导航
          </Button>
          <Button 
            type="primary" 
            onClick={handleContinue}
            disabled={isChecking}
          >
            {isChecking ? `继续访问 (${countdown}s)` : '继续访问'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default WebsiteExitModal; 