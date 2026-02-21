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

type ActiveTab = 'profile' | 'collections' | 'likes' | 'messages' | 'orders' | 'security';

const ProfilePage: React.FC = () => {
  const { user, loading, isLoggedIn, refreshProfile } = useUser();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');

  // 如果未登录，重定向到首页
  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate('/');
    }
  }, [loading, isLoggedIn, navigate]);

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
            <div className="user-type-badge">{user.userTypeName || '普通用户'}</div>
          </div>
          
          <div className="profile-menu">
            <div 
              className={`menu-item ${activeTab === 'profile' ? 'active' : ''}`}
              onClick={() => setActiveTab('profile')}
            >
              个人资料
            </div>
            <div 
              className={`menu-item ${activeTab === 'messages' ? 'active' : ''}`}
              onClick={() => setActiveTab('messages')}
            >
              我的消息
            </div>
            <div 
              className={`menu-item ${activeTab === 'orders' ? 'active' : ''}`}
              onClick={() => setActiveTab('orders')}
            >
              我的订单
            </div>
            <div 
              className={`menu-item ${activeTab === 'collections' ? 'active' : ''}`}
              onClick={() => setActiveTab('collections')}
            >
              我的收藏
            </div>
            <div 
              className={`menu-item ${activeTab === 'likes' ? 'active' : ''}`}
              onClick={() => setActiveTab('likes')}
            >
              我的点赞
            </div>
            <div 
              className={`menu-item ${activeTab === 'security' ? 'active' : ''}`}
              onClick={() => setActiveTab('security')}
            >
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
      setList(prev => prev.map(item => item.id === id ? { ...item, is_read: 1 } : item));
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
          <span className="empty-icon">📭</span>
          暂无消息
        </div>
      ) : (
        <div className="collections-list">
          {list.map(item => (
            <div key={item.id} className="list-item" style={{ opacity: item.is_read ? 0.6 : 1 }}>
              <div className="item-main">
                <div className="item-title">{item.title}</div>
                <div className="item-meta" style={{ marginTop: 4 }}>
                  {item.content}
                </div>
                <div className="item-meta">
                  <span>{item.create_time}</span>
                  {!item.is_read && (
                    <span 
                      style={{ color: '#0066ff', cursor: 'pointer', marginLeft: 12 }}
                      onClick={() => handleRead(item.id)}
                    >
                      标记已读
                    </span>
                  )}
                  <span 
                    style={{ color: '#ff4d4f', cursor: 'pointer', marginLeft: 12 }}
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
          <span className="empty-icon">📦</span>
          暂无订单记录
        </div>
      ) : (
        <div className="collections-list">
          {list.map(item => (
            <div key={item.id} className="list-item">
              <div className="item-main">
                <div className="item-title">
                  {item.order_sn}
                  <span className={`status-badge status-${item.pay_status}`}>
                    {item.pay_status === 1 ? '已支付' : '未支付'}
                  </span>
                </div>
                <div className="item-meta">
                  <span>{item.goods_name || '商品'}</span>
                  <span style={{ marginLeft: 16 }}>¥{item.order_amount}</span>
                </div>
                <div className="item-meta">
                  <span>{item.create_time}</span>
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
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserCollectedArticles({ page: 1, pageSize: 20 })
      .then(res => setList(res.lists || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>加载中...</div>;

  return (
    <div>
      <div className="content-header">
        <h2 className="content-title">我的收藏</h2>
      </div>
      {list.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📭</span>
          暂无收藏内容
        </div>
      ) : (
        <div className="collections-list">
          {list.map(item => (
            <div key={item.id} className="list-item">
              <div className="item-main">
                <a href={`/article/${item.article?.slug || item.article_id}`} className="item-title">
                  {item.article?.title || '未知文章'}
                </a>
                <div className="item-meta">
                  <span>收藏于 {new Date(item.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 子组件：点赞列表
const LikesList: React.FC = () => {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserLikedArticles({ page: 1, pageSize: 20 })
      .then(res => setList(res.lists || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>加载中...</div>;

  return (
    <div>
      <div className="content-header">
        <h2 className="content-title">我的点赞</h2>
      </div>
      {list.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">👍</span>
          暂无点赞内容
        </div>
      ) : (
        <div className="likes-list">
          {list.map(item => (
            <div key={item.id} className="list-item">
              <div className="item-main">
                <a href={`/article/${item.article?.slug || item.article_id}`} className="item-title">
                  {item.article?.title || '未知文章'}
                </a>
                <div className="item-meta">
                  <span>点赞于 {new Date(item.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
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
