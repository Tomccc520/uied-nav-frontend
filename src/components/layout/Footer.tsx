/**
 * @file Footer.tsx
 * @description 页脚组件，显示网站底部信息和版权声明
 * @copyright 版权所有 (c) 2024 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 2.0.0
 */

import React, { useState, useEffect } from 'react';
import './Footer.css'; // 添加CSS文件引入

/**
 * 页脚组件
 * 动态获取WordPress站点信息并显示在页脚
 * 
 * @version 2.0.0
 * @author UIED技术团队 (https://fsuied.com)
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [siteInfo, setSiteInfo] = useState<{
    name?: string;
    description?: string;
    url?: string;
  }>({});
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  // 获取WordPress站点信息
  useEffect(() => {
    const fetchSiteInfo = async () => {
      try {
        // 由于我们没有API，直接设置默认信息
        setSiteInfo({
          name: 'UIED',
          description: 'UIED热榜',
          url: 'https://www.uied.cn'
        });
      } catch (error) {
        console.error('获取站点信息失败', error);
        // 设置默认信息
        setSiteInfo({
          name: 'UIED',
          description: 'UIED热榜',
          url: 'https://www.uied.cn'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSiteInfo();
  }, []);

  // 切换显示/隐藏详细信息
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div 
      className="footer-container"
      style={{
        backgroundImage: 'url(https://img.uied.cn/wp-content/themes/b2Jitheme/Center/Assets/images/footer-bg.svg)'
      }}
    >
      <div className="footer-main">
        <div className="footer-content-wrapper">
          {/* 移动端版本的简洁页脚 */}
          <div className="footer-mobile-view">
            {/* 移动端始终可见的二维码 */}
            <div className="qr-container mobile-qr">
              <div className="qr-item">
                <img 
                  width="80" 
                  height="80" 
                  alt="交流群" 
                  src="https://img.uied.cn/wp-content/footer/tomda-qr-code.jpg" 
                />
                <p className="qr-tips">交流群</p>
              </div>
              <div className="qr-item">
                <img 
                  width="80" 
                  height="80" 
                  alt="关注公众号" 
                  src="https://uied-1304770347.cos.ap-guangzhou.myqcloud.com/wp-content/uploads/2022/07/qrcode.webp" 
                />
                <p className="qr-tips">公众号</p>
              </div>
            </div>
            
            <div className="textwidget mobile-text-center">
              UIED设计导航汇集优质设计工具与资源，为设计师提供一站式工具导航服务
            </div>
            
            <button className="footer-toggle-btn" onClick={toggleExpanded}>
              {expanded ? (
                <>收起更多 <span>▲</span></>
              ) : (
                <>查看更多 <span>▼</span></>
              )}
            </button>
            
            {expanded && (
              <div className="footer-sections-mobile">
                <div className="footer-sections-grid">
                  {/* 支持与服务 */}
                  <div className="footer-section-mobile">
                    <h6 className="widget-title">
                      支持与服务
                    </h6>
                    <ul className="footer-menu">
                      <li><a href="/vips" target="_blank">开通VIP</a></li>
                      <li><a href="/protocol" target="_blank">网站协议</a></li>
                      <li><a href="/legal" target="_blank">法律声明</a></li>
                    </ul>
                  </div>
                  
                  {/* 关注我们 */}
                  <div className="footer-section-mobile">
                    <h6 className="widget-title">
                      关注我们
                    </h6>
                    <ul className="footer-menu">
                      <li><a href="https://huaban.com/user/uied" target="_blank">花瓣画板</a></li>
                      <li><a href="https://www.zhihu.com/org/uiedyong-hu-ti-yan-jiao-liu-xue-xi" target="_blank">知乎主页</a></li>
                      <li><a href="http://hezuo.tomda.top/" target="_blank">商务合作</a></li>
                    </ul>
                  </div>
                  
                  {/* 设计文章 */}
                  <div className="footer-section-mobile">
                    <h6 className="widget-title">
                      设计文章
                    </h6>
                    <ul className="footer-menu">
                      <li><a href="https://www.uied.cn/category/wenzhang/ui-wenzhang" target="_blank">UI文章</a></li>
                      <li><a href="https://www.uied.cn/category/wenzhang/ai" target="_blank">AIGC文章</a></li>
                      <li><a href="https://www.uied.cn/category/wenzhang/ganhuo" target="_blank">设计干货</a></li>
                    </ul>
                  </div>
                  
                  {/* 设计素材 */}
                  <div className="footer-section-mobile">
                    <h6 className="widget-title">
                      设计素材
                    </h6>
                    <ul className="footer-menu">
                      <li><a href="https://www.uied.cn/category/ui/zujian" target="_blank">设计组件</a></li>
                      <li><a href="https://www.uied.cn/category/mockup" target="_blank">设计样机</a></li>
                      <li><a href="https://www.uied.cn/category/3d" target="_blank">三维素材</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* 桌面版的完整页脚 */}
          <div className="footer-desktop-view">
            <div className="footer-sections-grid">
              {/* 关于UIED */}
              <div className="footer-section">
                <h6 className="widget-title">
                  UIED设计导航
                </h6>
                <div className="textwidget">
                  UIED设计导航汇集优质设计工具与资源，涵盖UI/UX设计、平面设计、AI设计工具、三维设计等多个领域。提供Figma、Sketch、Adobe等专业设计软件资源，包含设计灵感、素材库、配色工具、字体资源、图标库等。为设计师提供一站式设计工具导航服务，助力提升设计效率与创作灵感。
                </div>
              </div>
              
              {/* 支持与服务 */}
              <div className="footer-section">
                <h6 className="widget-title">
                  支持与服务
                </h6>
                <ul className="footer-menu">
                  <li><a href="/vips" target="_blank">开通VIP</a></li>
                  <li><a href="/protocol" target="_blank">网站协议</a></li>
                  <li><a href="/legal" target="_blank">法律声明</a></li>
                  <li><a href="https://www.uied.cn/sitemap.xml" target="_blank">网站地图</a></li>
                </ul>
              </div>
              
              {/* 关注我们 */}
              <div className="footer-section">
                <h6 className="widget-title">
                  关注我们
                </h6>
                <ul className="footer-menu">
                  <li><a href="https://huaban.com/user/uied" target="_blank">花瓣画板</a></li>
                  <li><a href="https://www.zhihu.com/org/uiedyong-hu-ti-yan-jiao-liu-xue-xi" target="_blank">知乎主页</a></li>
                  <li><a href="https://www.88sheji.cn/" target="_blank">设计导航</a></li>
                  <li><a href="http://hezuo.tomda.top/" target="_blank">商务合作</a></li>
                </ul>
              </div>
              
              {/* 设计文章 */}
              <div className="footer-section">
                <h6 className="widget-title">
                  设计文章
                </h6>
                <ul className="footer-menu">
                  <li><a href="https://www.uied.cn/category/wenzhang/ui-wenzhang" target="_blank">UI文章</a></li>
                  <li><a href="https://www.uied.cn/category/wenzhang/ai" target="_blank">AIGC文章</a></li>
                  <li><a href="https://www.uied.cn/category/wenzhang/ganhuo" target="_blank">设计干货</a></li>
                  <li><a href="https://www.uied.cn/category/wenzhang/tool" target="_blank">效率工具</a></li>
                </ul>
              </div>
              
              {/* 设计素材 */}
              <div className="footer-section">
                <h6 className="widget-title">
                  设计素材
                </h6>
                <ul className="footer-menu">
                  <li><a href="https://www.uied.cn/category/ui/zujian" target="_blank">设计组件</a></li>
                  <li><a href="https://www.uied.cn/category/mockup" target="_blank">设计样机</a></li>
                  <li><a href="https://www.uied.cn/category/3d" target="_blank">三维素材</a></li>
                </ul>
              </div>
              
              {/* 关注交流 */}
              <div className="footer-section">
                <h6 className="widget-title">
                  关注交流
                </h6>
                <div className="qr-container">
                  <div className="qr-item">
                    <img 
                      width="80" 
                      height="80" 
                      alt="交流群" 
                      src="https://img.uied.cn/wp-content/footer/tomda-qr-code.jpg" 
                    />
                    <p className="qr-tips">交流群</p>
                  </div>
                  <div className="qr-item">
                    <img 
                      width="80" 
                      height="80" 
                      alt="关注公众号" 
                      src="https://uied-1304770347.cos.ap-guangzhou.myqcloud.com/wp-content/uploads/2022/07/qrcode.webp" 
                    />
                    <p className="qr-tips">公众号</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 友情链接 */}
      <div className="friend-links-container">
        <div className="friend-links-wrapper">
          <h6 className="friend-links-title">
            友情链接:
          </h6>
          <span className="friend-links-list">
            <a href="/uiux" target="_blank" className="friend-link">UI/UX设计导航</a>
            {" \u00A0\u00A0\u00A0"}
            <a href="/plane" target="_blank" className="friend-link">平面设计导航</a>
            {" \u00A0\u00A0\u00A0"}
            <a href="/ai" target="_blank" className="friend-link">AI设计工具导航</a>
            {" \u00A0\u00A0\u00A0"}
            <a href="/3d" target="_blank" className="friend-link">3D设计导航</a>
            {" \u00A0\u00A0\u00A0"}
            <a href="https://www.uied.cn/" target="_blank" className="friend-link">UIED学习平台</a>
            {" \u00A0\u00A0\u00A0"}
            <a href="https://hot.uied.cn/" target="_blank" className="friend-link">UIED资讯热榜</a>
            {" \u00A0\u00A0\u00A0"}
            <a href="https://www.88sheji.cn/" target="_blank" className="friend-link">拜拜导航</a>
            {" \u00A0\u00A0\u00A0"}
            <a href="https://fsuied.com/" target="_blank" className="friend-link">UIED技术团队</a>
          </span>
        </div>
      </div>
      
      {/* 底部版权信息 */}
      <div className="footer-bottom">
        <div className="footer-bottom-wrapper">
          <div className="footer-copyright">
            <p className="copyright-desktop">
              版权所有 © {currentYear} <a href="https://www.uied.cn" rel="home">UIED设计导航</a> · 
              佛山市南海区迅捷腾达电子商务服务中心 ·
              <a rel="nofollow" target="_blank" href="https://beian.miit.gov.cn">粤ICP备2022056875号</a> ·
              <a rel="nofollow" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060502003482">
                <img src="https://img.uied.cn/wp-content/themes/b2/Assets/fontend/images/beian-ico.png" alt="备案图标" />
                粤公网安备44060502003482号
              </a>
            </p>
            
            <div className="copyright-mobile">
              <p>版权所有 © {currentYear} <a href="https://www.uied.cn" rel="home">UIED设计导航平台</a></p>
              <p>佛山市南海区迅捷腾达电子商务服务中心</p>
              <p><a rel="nofollow" target="_blank" href="https://beian.miit.gov.cn">粤ICP备2022056875号</a></p>
              <p>
                <a rel="nofollow" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44060502003482">
                  <img src="https://img.uied.cn/wp-content/themes/b2/Assets/fontend/images/beian-ico.png" alt="备案图标" />
                  粤公网安备44060502003482号
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer; 