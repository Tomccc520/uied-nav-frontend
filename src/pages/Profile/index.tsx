/**
 * @file index.tsx
 * @description 用户中心 - 个人资料、收藏、设置管理
 * @copyright 版权所有 (c) 2026 UIED技术团队
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';
import { userService } from '../../services/userService';
import { getUserCollectedArticles, getUserLikedArticles } from '../../services/articleService';
import './Profile.css';

type ActiveTab = 'profile' | 'collections' | 'likes' | 'comments' | 'messages' | 'orders' | 'security';

/**
 * 兼容驼峰/下划线字段读取
 */
const pickValue = <T = any,>(obj: any, keys: string[], fallback?: T): T => {
  for (const key of keys) {
    if (obj && obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
      return obj[key] as T;
    }
  }
  return fallback as T;
};

/**
 * 统一格式化日期展示
 */
const formatUserDate = (value: any, fallback = '-') => {
  if (!value) return fallback;
  if (typeof value === 'string' && /\d{4}-\d{2}-\d{2}/.test(value)) return value;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value || fallback);
  return date.toLocaleString();
};

const ProfilePage: React.FC = () => {
  const { user, loading, isLoggedIn, refreshProfile } = useUser();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');
  const [stats, setStats] = useState<{ orderCount?: number; licenseCount?: number; registerDays?: number }>({});
  const [contentStats, setContentStats] = useState<{
    websiteFavoriteTotal: number;
    websiteLikeTotal: number;
  }>({
    websiteFavoriteTotal: 0,
    websiteLikeTotal: 0,
  });

  // 如果未登录，重定向到首页
  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate('/');
    }
  }, [loading, isLoggedIn, navigate]);

  useEffect(() => {
    if (!isLoggedIn) return;
    userService.getStats()
      .then((res) => setStats(res || {}))
      .catch(() => setStats({}));
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) return;
    /**
     * 拉取用户中心内容互动统计（收藏/点赞），用于首页卡片快速展示。
     */
    Promise.allSettled([
      userService.getWebsiteFavoriteList({ page: 1, pageSize: 1 }),
      userService.getWebsiteLikeList({ page: 1, pageSize: 1 }),
    ]).then(([favoriteRes, likeRes]) => {
      setContentStats({
        websiteFavoriteTotal: favoriteRes.status === 'fulfilled' ? Number(favoriteRes.value?.total || 0) : 0,
        websiteLikeTotal: likeRes.status === 'fulfilled' ? Number(likeRes.value?.total || 0) : 0,
      });
    }).catch(() => {
      setContentStats({
        websiteFavoriteTotal: 0,
        websiteLikeTotal: 0,
      });
    });
  }, [isLoggedIn]);

  if (loading || !user) {
    return <div className="loading-state">加载中...</div>;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileEdit user={user} onUpdate={refreshProfile} />;
      case 'collections':
        return <CollectionsList />;
      case 'likes':
        return <LikesList />;
      case 'comments':
        return <CommentsList />;
      case 'messages':
        return <MessagesList />;
      case 'orders':
        return <OrdersList />;
      case 'security':
        return <SecuritySettings />;
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* 侧边栏 */}
        <div className="profile-sidebar">
          <div className="user-card">
            <div className="user-avatar-large">
              {(user.nickname || user.username || 'U').charAt(0).toUpperCase()}
            </div>
            <div className="user-name-large">{user.nickname || user.username}</div>
            <div className="user-type-badge">
              {user.levelName ? `${user.levelName} · ` : ''}{user.userTypeName || '普通用户'}
            </div>
            <div className="user-card-meta">
              <span>注册 {formatUserDate(user.createTime, '未知')}</span>
              <span>最近登录 {formatUserDate(user.lastLoginTime, '未知')}</span>
            </div>
            <div className="user-card-stats">
              <div className="user-card-stat">
                <div className="user-card-stat__value">{Number(stats.orderCount || 0)}</div>
                <div className="user-card-stat__label">订单</div>
              </div>
              <div className="user-card-stat">
                <div className="user-card-stat__value">{Number(stats.licenseCount || 0)}</div>
                <div className="user-card-stat__label">授权</div>
              </div>
              <div className="user-card-stat">
                <div className="user-card-stat__value">{Number(stats.registerDays || 0)}</div>
                <div className="user-card-stat__label">注册天数</div>
              </div>
              <div className="user-card-stat">
                <div className="user-card-stat__value">{Number(contentStats.websiteFavoriteTotal || 0)}</div>
                <div className="user-card-stat__label">网站收藏</div>
              </div>
              <div className="user-card-stat">
                <div className="user-card-stat__value">{Number(contentStats.websiteLikeTotal || 0)}</div>
                <div className="user-card-stat__label">网站点赞</div>
              </div>
            </div>
          </div>
          
          <div className="profile-menu">
            <div 
              className={`menu-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              个人资料
            </div>
            <div 
              className={`menu-item ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              我的消息
            </div>
            <div 
              className={`menu-item ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              我的订单
            </div>
            <div 
              className={`menu-item ${activeTab === 'collections' ? 'active' : ''}`}
              onClick={() => setActiveTab('collections')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
              我的收藏
            </div>
            <div 
              className={`menu-item ${activeTab === 'likes' ? 'active' : ''}`}
              onClick={() => setActiveTab('likes')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
              我的点赞
            </div>
            <div 
              className={`menu-item ${activeTab === 'comments' ? 'active' : ''}`}
              onClick={() => setActiveTab('comments')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              我的评论
            </div>
            <div 
              className={`menu-item ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              账号安全
            </div>
          </div>
        </div>

        {/* 内容区域 */}
        <div className="profile-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

// 子组件：个人资料编辑
const ProfileEdit: React.FC<{ user: any; onUpdate: () => void }> = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    nickname: user.nickname || '',
    email: user.email || '',
    mobile: user.mobile || '',
    avatar: user.avatar || ''
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await userService.updateProfile(formData);
      setMessage('保存成功');
      onUpdate();
      setTimeout(() => setMessage(''), 2000);
    } catch (err) {
      setMessage('保存失败，请重试');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="content-header">
        <h2 className="content-title">个人资料</h2>
      </div>
      
      <div className="profile-info-grid">
        <div className="info-card">
          <div className="info-label">用户ID</div>
          <div className="info-value">#{user.id}</div>
        </div>
        <div className="info-card">
          <div className="info-label">注册时间</div>
          <div className="info-value">{user.createTime || '未知'}</div>
        </div>
        <div className="info-card">
          <div className="info-label">注册来源</div>
          <div className="info-value">{user.channelName || '未知'}</div>
        </div>
        <div className="info-card">
          <div className="info-label">最后登录</div>
          <div className="info-value">{user.lastLoginTime || '未知'}</div>
        </div>
      </div>

      <div className="content-header" style={{ marginTop: 32 }}>
        <h2 className="content-title">编辑资料</h2>
      </div>

      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>昵称</label>
          <input 
            type="text" 
            value={formData.nickname}
            onChange={e => setFormData({...formData, nickname: e.target.value})}
            placeholder="请输入昵称"
          />
        </div>
        <div className="form-group">
          <label>邮箱</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
            placeholder="绑定邮箱"
          />
        </div>
        <div className="form-group">
          <label>手机号</label>
          <div className="input-with-action">
            <input 
              type="text" 
              value={user.mobileMask || formData.mobile || ''}
              readOnly
              className="readonly-input"
              placeholder="未绑定手机号"
            />
            {/* <button type="button" className="action-btn">更换</button> */}
          </div>
          <div className="form-tip">为了账号安全，修改手机号请联系客服</div>
        </div>
        
        {user.sexName && (
          <div className="form-group">
            <label>性别</label>
            <input 
              type="text" 
              value={user.sexName}
              readOnly
              className="readonly-input"
            />
          </div>
        )}
        
        {message && <div style={{ color: message.includes('失败') ? 'red' : 'green', marginBottom: 16 }}>{message}</div>}
        
        <button type="submit" className="save-btn" disabled={saving}>
          {saving ? '保存中...' : '保存修改'}
        </button>
      </form>
    </div>
  );
};

// 子组件：消息列表
const MessagesList: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = () => {
    userService.getMessageList({ page: 1, pageSize: 20 })
      .then(res => setList(res.lists || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleRead = async (id: number) => {
    try {
      await userService.readMessage([id]);
      // 更新本地状态
      setList(prev =>
        prev.map(item =>
          item.id === id ? { ...item, is_read: 1, isRead: 1 } : item
        )
      );
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('确定删除该消息吗？')) return;
    try {
      await userService.deleteMessage([id]);
      setList(prev => prev.filter(item => item.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) return <div>加载中...</div>;

  return (
    <div>
      <div className="content-header">
        <h2 className="content-title">我的消息</h2>
      </div>
      {list.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">消息</span>
          暂无消息
        </div>
      ) : (
        <div className="collections-list">
          {list.map(item => (
            <div
              key={item.id}
              className="list-item"
              style={{ opacity: Number(pickValue(item, ['isRead', 'is_read'], 0)) ? 0.6 : 1 }}
            >
              <div className="item-main">
                <div className="item-title">{item.title}</div>
                <div className="item-meta" style={{ marginTop: 4 }}>
                  {item.content}
                </div>
                <div className="item-meta" style={{ marginTop: 8 }}>
                  <span>{formatUserDate(pickValue(item, ['createTime', 'create_time']))}</span>
                  {!Number(pickValue(item, ['isRead', 'is_read'], 0)) && (
                    <span
                      className="inline-action inline-action--primary"
                      onClick={() => handleRead(item.id)}
                    >
                      标记已读
                    </span>
                  )}
                  <span
                    className="inline-action inline-action--danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    删除
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 子组件：订单列表
const OrdersList: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    userService.getOrderList({ page: 1, pageSize: 20 })
      .then(res => setList(res.lists || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>加载中...</div>;

  return (
    <div>
      <div className="content-header">
        <h2 className="content-title">我的订单</h2>
      </div>
      {list.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">订单</span>
          暂无订单记录
        </div>
      ) : (
        <div className="collections-list">
          {list.map(item => (
            <div key={item.id} className="list-item">
              <div className="item-main">
                <div className="item-title">
                  {pickValue(item, ['orderSn', 'order_sn'], '-')}
                  <span className={`status-badge status-${Number(pickValue(item, ['payStatus', 'pay_status'], 0))}`}>
                    {Number(pickValue(item, ['payStatus', 'pay_status'], 0)) === 1 ? '已支付' : '未支付'}
                  </span>
                </div>
                <div className="item-meta">
                  <span>{pickValue(item, ['goodsName', 'goods_name'], '商品')}</span>
                  <span>¥{pickValue(item, ['orderAmount', 'order_amount'], 0)}</span>
                </div>
                <div className="item-meta">
                  <span>{formatUserDate(pickValue(item, ['createTime', 'create_time']))}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 子组件：收藏列表
const CollectionsList: React.FC = () => {
  const [articleList, setArticleList] = useState<any[]>([]);
  const [websiteList, setWebsiteList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      getUserCollectedArticles({ page: 1, pageSize: 20 }),
      userService.getWebsiteFavoriteList({ page: 1, pageSize: 20 }),
    ])
      .then(([ articleRes, websiteRes ]) => {
        setArticleList(articleRes.status === 'fulfilled' ? (articleRes.value?.lists || []) : []);
        setWebsiteList(websiteRes.status === 'fulfilled' ? (websiteRes.value?.lists || []) : []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>加载中...</div>;
  const hasData = articleList.length > 0 || websiteList.length > 0;

  return (
    <div>
      <div className="content-header">
        <h2 className="content-title">我的收藏</h2>
      </div>
      {!hasData ? (
        <div className="empty-state">
          <span className="empty-icon">收藏</span>
          暂无收藏内容
        </div>
      ) : (
        <>
          {websiteList.length > 0 && (
            <div className="profile-subsection">
              <div className="profile-subsection__title">收藏网址 ({websiteList.length})</div>
              <div className="collections-list">
                {websiteList.map(item => (
                  <div key={`website-fav-${item.websiteId || item.id}`} className="list-item">
                    <div className="item-main">
                      <a href={`/website/${pickValue(item, ['slug'], pickValue(item, ['websiteId', 'id'], ''))}`} className="item-title">
                        {pickValue(item, ['name'], '未知网站')}
                      </a>
                      <div className="item-meta">
                        {pickValue(item, ['categoryName']) && <span>{pickValue(item, ['categoryName'])}</span>}
                        <span>收藏于 {formatUserDate(pickValue(item, ['favoriteTime', 'createTime']))}</span>
                        <span>点赞 {pickValue(item, ['likeCount'], 0)}</span>
                        <span>收藏 {pickValue(item, ['favoriteCount'], 0)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {articleList.length > 0 && (
            <div className="profile-subsection">
              <div className="profile-subsection__title">收藏文章 ({articleList.length})</div>
              <div className="collections-list">
                {articleList.map(item => (
                  <div key={`article-fav-${item.id}`} className="list-item">
                    <div className="item-main">
                      <a href={`/article/${pickValue(item?.article, ['slug'], pickValue(item, ['articleId', 'article_id'], ''))}`} className="item-title">
                        {pickValue(item?.article, ['title'], '未知文章')}
                      </a>
                      <div className="item-meta">
                        <span>收藏于 {formatUserDate(pickValue(item, ['createTime', 'created_at']))}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// 子组件：点赞列表
const LikesList: React.FC = () => {
  const [articleList, setArticleList] = useState<any[]>([]);
  const [websiteList, setWebsiteList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      getUserLikedArticles({ page: 1, pageSize: 20 }),
      userService.getWebsiteLikeList({ page: 1, pageSize: 20 }),
    ])
      .then(([ articleRes, websiteRes ]) => {
        setArticleList(articleRes.status === 'fulfilled' ? (articleRes.value?.lists || []) : []);
        setWebsiteList(websiteRes.status === 'fulfilled' ? (websiteRes.value?.lists || []) : []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>加载中...</div>;
  const hasData = articleList.length > 0 || websiteList.length > 0;

  return (
    <div>
      <div className="content-header">
        <h2 className="content-title">我的点赞</h2>
      </div>
      {!hasData ? (
        <div className="empty-state">
          <span className="empty-icon">点赞</span>
          暂无点赞内容
        </div>
      ) : (
        <>
          {websiteList.length > 0 && (
            <div className="profile-subsection">
              <div className="profile-subsection__title">点赞网址 ({websiteList.length})</div>
              <div className="likes-list">
                {websiteList.map(item => (
                  <div key={`website-like-${item.websiteId || item.id}`} className="list-item">
                    <div className="item-main">
                      <a href={`/website/${pickValue(item, ['slug'], pickValue(item, ['websiteId', 'id'], ''))}`} className="item-title">
                        {pickValue(item, ['name'], '未知网站')}
                      </a>
                      <div className="item-meta">
                        {pickValue(item, ['categoryName']) && <span>{pickValue(item, ['categoryName'])}</span>}
                        <span>点赞于 {formatUserDate(pickValue(item, ['likeTime', 'createTime']))}</span>
                        <span>点赞 {pickValue(item, ['likeCount'], 0)}</span>
                        <span>收藏 {pickValue(item, ['favoriteCount'], 0)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {articleList.length > 0 && (
            <div className="profile-subsection">
              <div className="profile-subsection__title">点赞文章 ({articleList.length})</div>
              <div className="likes-list">
                {articleList.map(item => (
                  <div key={`article-like-${item.id}`} className="list-item">
                    <div className="item-main">
                      <a href={`/article/${pickValue(item?.article, ['slug'], pickValue(item, ['articleId', 'article_id'], ''))}`} className="item-title">
                        {pickValue(item?.article, ['title'], '未知文章')}
                      </a>
                      <div className="item-meta">
                        <span>点赞于 {formatUserDate(pickValue(item, ['createTime', 'created_at']))}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// 子组件：评论列表
const CommentsList: React.FC = () => {
  const [articleList, setArticleList] = useState<any[]>([]);
  const [websiteList, setWebsiteList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /**
     * 并行拉取用户文章评论与网址评论，减少首屏等待时间。
     */
    Promise.allSettled([
      userService.getArticleCommentList({ page: 1, pageSize: 20 }),
      userService.getWebsiteCommentList({ page: 1, pageSize: 20 }),
    ])
      .then(([articleRes, websiteRes]) => {
        setArticleList(articleRes.status === 'fulfilled' ? (articleRes.value?.lists || []) : []);
        setWebsiteList(websiteRes.status === 'fulfilled' ? (websiteRes.value?.lists || []) : []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>加载中...</div>;
  const hasData = articleList.length > 0 || websiteList.length > 0;

  return (
    <div>
      <div className="content-header">
        <h2 className="content-title">我的评论</h2>
      </div>
      {!hasData ? (
        <div className="empty-state">
          <span className="empty-icon">评论</span>
          暂无评论内容
        </div>
      ) : (
        <>
          {websiteList.length > 0 && (
            <div className="profile-subsection">
              <div className="profile-subsection__title">网址评论 ({websiteList.length})</div>
              <div className="collections-list">
                {websiteList.map(item => (
                  <div key={`website-comment-${item.id}`} className="list-item">
                    <div className="item-main">
                      <a href={`/website/${pickValue(item?.target, ['slug'], pickValue(item, ['targetId'], ''))}`} className="item-title">
                        {pickValue(item?.target, ['title'], '未知网址')}
                      </a>
                      <div className="item-meta">
                        <span>{pickValue(item?.target, ['url'], '')}</span>
                        <span>状态 {pickValue(item, ['status'], 'approved')}</span>
                        <span>点赞 {pickValue(item, ['likeCount'], 0)}</span>
                      </div>
                      <div className="item-meta" style={{ marginTop: 6 }}>
                        <span>{pickValue(item, ['content'], '')}</span>
                      </div>
                      <div className="item-meta" style={{ marginTop: 6 }}>
                        <span>评论于 {formatUserDate(pickValue(item, ['createTime']))}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {articleList.length > 0 && (
            <div className="profile-subsection">
              <div className="profile-subsection__title">文章评论 ({articleList.length})</div>
              <div className="collections-list">
                {articleList.map(item => (
                  <div key={`article-comment-${item.id}`} className="list-item">
                    <div className="item-main">
                      <a href={`/article/${pickValue(item?.target, ['slug'], pickValue(item, ['targetId'], ''))}`} className="item-title">
                        {pickValue(item?.target, ['title'], '未知文章')}
                      </a>
                      <div className="item-meta">
                        <span>状态 {pickValue(item, ['status'], 'approved')}</span>
                        <span>点赞 {pickValue(item, ['likeCount'], 0)}</span>
                      </div>
                      <div className="item-meta" style={{ marginTop: 6 }}>
                        <span>{pickValue(item, ['content'], '')}</span>
                      </div>
                      <div className="item-meta" style={{ marginTop: 6 }}>
                        <span>评论于 {formatUserDate(pickValue(item, ['createTime']))}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

// 子组件：安全设置
const SecuritySettings: React.FC = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage('两次新密码输入不一致');
      return;
    }
    setSaving(true);
    try {
      await userService.changePassword(formData);
      setMessage('密码修改成功');
      setFormData({ oldPassword: '', newPassword: '', confirmPassword: '' });
    } catch (err) {
      setMessage('修改失败，请检查旧密码是否正确');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <div className="content-header">
        <h2 className="content-title">修改密码</h2>
      </div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>当前密码</label>
          <input 
            type="password" 
            value={formData.oldPassword}
            onChange={e => setFormData({...formData, oldPassword: e.target.value})}
            placeholder="请输入当前密码"
          />
        </div>
        <div className="form-group">
          <label>新密码</label>
          <input 
            type="password" 
            value={formData.newPassword}
            onChange={e => setFormData({...formData, newPassword: e.target.value})}
            placeholder="请输入新密码（至少6位）"
          />
        </div>
        <div className="form-group">
          <label>确认新密码</label>
          <input 
            type="password" 
            value={formData.confirmPassword}
            onChange={e => setFormData({...formData, confirmPassword: e.target.value})}
            placeholder="请再次输入新密码"
          />
        </div>
        
        {message && <div style={{ color: message.includes('失败') || message.includes('不一致') ? 'red' : 'green', marginBottom: 16 }}>{message}</div>}
        
        <button type="submit" className="save-btn" disabled={saving}>
          {saving ? '处理中...' : '确认修改'}
        </button>
      </form>
    </div>
  );
};

export default ProfilePage; 
