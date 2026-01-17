# 后台迁移到 TDesign 计划

> 更新时间：2026-01-17  
> 作者：Tomda  
> 目标：将管理后台从 Ant Design 迁移到 TDesign React

---

## 🎯 为什么选择 TDesign？

### 优势对比

**TDesign vs Ant Design**：

| 特性 | TDesign | Ant Design |
|------|---------|------------|
| 设计风格 | 现代、简洁 | 传统、商务 |
| 组件质量 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 文档质量 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 性能 | 更轻量 | 较重 |
| 主题定制 | 更灵活 | 较复杂 |
| 企业背景 | 腾讯 | 蚂蚁 |
| 开源协议 | MIT | MIT |

**选择 TDesign 的理由**：
- ✅ 设计更现代，符合当前审美
- ✅ 组件更轻量，性能更好
- ✅ 主题定制更简单
- ✅ 腾讯出品，质量有保证
- ✅ 文档完善，上手容易

---

## 📋 迁移计划

### Phase 1：环境准备（第 1 天）

#### 1.1 安装 TDesign

```bash
cd admin

# 安装 TDesign React
npm install tdesign-react

# 安装 TDesign Icons
npm install tdesign-icons-react

# 卸载 Ant Design（保留，先不删除，逐步替换）
# npm uninstall antd @ant-design/icons
```

#### 1.2 配置 TDesign

**更新 `admin/vite.config.ts`**：
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // TDesign 主题变量
          '@brand-color': '#0052d9',
        },
        javascriptEnabled: true,
      },
    },
  },
});
```

**创建 `admin/src/styles/tdesign.css`**：
```css
/**
 * @file styles/tdesign.css
 * @description TDesign 全局样式
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

/* 导入 TDesign 样式 */
@import 'tdesign-react/es/style/index.css';

/* 自定义主题色 */
:root {
  --td-brand-color: #0052d9;
  --td-warning-color: #ed7b2f;
  --td-error-color: #e34d59;
  --td-success-color: #00a870;
}
```

**更新 `admin/src/main.tsx`**：
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/tdesign.css'; // 导入 TDesign 样式
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

### Phase 2：布局迁移（第 2-3 天）

#### 2.1 创建 TDesign 布局

**创建 `admin/src/layouts/TDesignLayout.tsx`**：
```tsx
/**
 * @file layouts/TDesignLayout.tsx
 * @description TDesign 主布局
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown } from 'tdesign-react';
import {
  DashboardIcon,
  FileIcon,
  FolderIcon,
  SettingIcon,
  UserIcon,
  LogoutIcon,
} from 'tdesign-icons-react';
import { useNavigate, Outlet } from 'react-router-dom';
import './TDesignLayout.css';

const { Header, Aside, Content, Footer } = Layout;

export const TDesignLayout: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  // 菜单配置
  const menuItems = [
    {
      value: 'dashboard',
      label: '仪表板',
      icon: <DashboardIcon />,
      path: '/dashboard',
    },
    {
      value: 'content',
      label: '内容管理',
      icon: <FileIcon />,
      children: [
        { value: 'websites', label: '网站管理', path: '/websites' },
        { value: 'categories', label: '分类管理', path: '/categories' },
        { value: 'pages', label: '页面管理', path: '/pages' },
        { value: 'submissions', label: '用户提交', path: '/submissions' },
      ],
    },
    {
      value: 'appearance',
      label: '外观设置',
      icon: <FolderIcon />,
      children: [
        { value: 'theme', label: '主题配置', path: '/theme' },
        { value: 'nav-menus', label: '导航菜单', path: '/nav-menus' },
        { value: 'footer', label: '页脚设置', path: '/footer' },
        { value: 'banners', label: '横幅管理', path: '/banners' },
      ],
    },
    {
      value: 'settings',
      label: '系统设置',
      icon: <SettingIcon />,
      children: [
        { value: 'site', label: '站点设置', path: '/site-settings' },
        { value: 'seo', label: 'SEO 设置', path: '/seo-settings' },
        { value: 'system', label: '系统设置', path: '/system-settings' },
      ],
    },
  ];

  // 用户下拉菜单
  const userMenuOptions = [
    {
      content: '账户设置',
      value: 'account',
      onClick: () => navigate('/account'),
    },
    {
      content: '退出登录',
      value: 'logout',
      onClick: () => {
        localStorage.removeItem('token');
        navigate('/login');
      },
    },
  ];

  return (
    <Layout className="tdesign-layout">
      {/* 侧边栏 */}
      <Aside width={collapsed ? 64 : 232}>
        <div className="logo">
          <img src="/logo-3.svg" alt="UIED" />
          {!collapsed && <span>UIED 管理后台</span>}
        </div>
        <Menu
          value="dashboard"
          collapsed={collapsed}
          theme="light"
          operations={
            <div onClick={() => setCollapsed(!collapsed)}>
              {collapsed ? '展开' : '收起'}
            </div>
          }
        >
          {menuItems.map((item) =>
            item.children ? (
              <Menu.SubMenu
                key={item.value}
                value={item.value}
                title={item.label}
                icon={item.icon}
              >
                {item.children.map((child) => (
                  <Menu.Item
                    key={child.value}
                    value={child.value}
                    onClick={() => navigate(child.path)}
                  >
                    {child.label}
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item
                key={item.value}
                value={item.value}
                icon={item.icon}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Menu.Item>
            )
          )}
        </Menu>
      </Aside>

      <Layout>
        {/* 顶部导航 */}
        <Header>
          <div className="header-content">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>内容管理</Breadcrumb.Item>
            </Breadcrumb>
            <div className="header-right">
              <Dropdown options={userMenuOptions}>
                <Avatar size="small">Admin</Avatar>
              </Dropdown>
            </div>
          </div>
        </Header>

        {/* 内容区域 */}
        <Content>
          <Outlet />
        </Content>

        {/* 页脚 */}
        <Footer>
          <div className="footer-content">
            <div className="footer-links">
              <a href="https://fsuied.com" target="_blank" rel="noopener noreferrer">
                UIED 官网
              </a>
              <span className="divider">|</span>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <span className="divider">|</span>
              <span>作者：Tomda</span>
            </div>
            <div className="copyright">
              © 2026 UIED技术团队. All Rights Reserved.
            </div>
          </div>
        </Footer>
      </Layout>
    </Layout>
  );
};
```

**创建 `admin/src/layouts/TDesignLayout.css`**：
```css
/**
 * @file layouts/TDesignLayout.css
 * @description TDesign 布局样式
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

.tdesign-layout {
  height: 100vh;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  color: var(--td-text-color-primary);
}

.logo img {
  width: 32px;
  height: 32px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.footer-content {
  text-align: center;
  padding: 16px 0;
}

.footer-links {
  margin-bottom: 8px;
  color: var(--td-text-color-secondary);
}

.footer-links a {
  color: var(--td-brand-color);
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-links .divider {
  margin: 0 8px;
  color: var(--td-text-color-placeholder);
}

.copyright {
  color: var(--td-text-color-placeholder);
  font-size: 12px;
}
```

---

### Phase 3：页面迁移（第 4-10 天）

#### 3.1 创建页面模板

**创建 `admin/src/components/PageTemplates/ListPage.tsx`**：
```tsx
/**
 * @file components/PageTemplates/ListPage.tsx
 * @description 列表页模板（TDesign）
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React from 'react';
import {
  Card,
  Button,
  Input,
  Table,
  Space,
  PrimaryTableCol,
} from 'tdesign-react';
import { AddIcon, SearchIcon } from 'tdesign-icons-react';
import './ListPage.css';

interface ListPageProps {
  title: string;
  onAdd?: () => void;
  onSearch?: (value: string) => void;
  columns: PrimaryTableCol[];
  data: any[];
  loading?: boolean;
  pagination?: any;
}

export const ListPage: React.FC<ListPageProps> = ({
  title,
  onAdd,
  onSearch,
  columns,
  data,
  loading,
  pagination,
}) => {
  return (
    <div className="list-page">
      {/* 页面头部 */}
      <div className="page-header">
        <h1>{title}</h1>
        {onAdd && (
          <Button theme="primary" icon={<AddIcon />} onClick={onAdd}>
            新增
          </Button>
        )}
      </div>

      {/* 搜索和筛选 */}
      <Card bordered={false} style={{ marginBottom: 16 }}>
        <Space>
          <Input
            placeholder="搜索..."
            prefixIcon={<SearchIcon />}
            onEnter={(value) => onSearch?.(value)}
            style={{ width: 300 }}
          />
        </Space>
      </Card>

      {/* 数据表格 */}
      <Card bordered={false}>
        <Table
          data={data}
          columns={columns}
          loading={loading}
          pagination={pagination}
          rowKey="id"
          stripe
          hover
        />
      </Card>
    </div>
  );
};
```

#### 3.2 迁移核心页面

**优先级排序**：
1. **网站管理**（最核心）
2. **分类管理**（最核心）
3. **站点设置**（开源必需）
4. **主题配置**（新增，开源必需）
5. **系统设置**（开源必需）
6. 其他页面

**示例：网站管理页面迁移**

```tsx
/**
 * @file pages/Websites.tsx
 * @description 网站管理页面（TDesign 版本）
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React, { useState, useEffect } from 'react';
import { ListPage } from '@/components/PageTemplates/ListPage';
import { Button, Tag, MessagePlugin } from 'tdesign-react';
import { EditIcon, DeleteIcon } from 'tdesign-icons-react';
import api from '@/services/api';

export const Websites: React.FC = () => {
  const [websites, setWebsites] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      colKey: 'name',
      title: '网站名称',
      width: 200,
    },
    {
      colKey: 'url',
      title: 'URL',
      width: 300,
    },
    {
      colKey: 'category',
      title: '分类',
      width: 150,
      cell: ({ row }) => <Tag theme="primary">{row.category?.name}</Tag>,
    },
    {
      colKey: 'status',
      title: '状态',
      width: 100,
      cell: ({ row }) => (
        <Tag theme={row.status === 'active' ? 'success' : 'default'}>
          {row.status === 'active' ? '启用' : '禁用'}
        </Tag>
      ),
    },
    {
      colKey: 'operation',
      title: '操作',
      width: 150,
      cell: ({ row }) => (
        <Button.Group>
          <Button
            theme="primary"
            variant="text"
            icon={<EditIcon />}
            onClick={() => handleEdit(row)}
          >
            编辑
          </Button>
          <Button
            theme="danger"
            variant="text"
            icon={<DeleteIcon />}
            onClick={() => handleDelete(row)}
          >
            删除
          </Button>
        </Button.Group>
      ),
    },
  ];

  const handleEdit = (record: any) => {
    // 编辑逻辑
  };

  const handleDelete = async (record: any) => {
    try {
      await api.delete(`/websites/${record.id}`);
      MessagePlugin.success('删除成功');
      fetchWebsites();
    } catch (error) {
      MessagePlugin.error('删除失败');
    }
  };

  const fetchWebsites = async () => {
    setLoading(true);
    try {
      const res = await api.get('/websites');
      setWebsites(res.data.data);
    } catch (error) {
      MessagePlugin.error('获取数据失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWebsites();
  }, []);

  return (
    <ListPage
      title="网站管理"
      onAdd={() => {}}
      onSearch={() => {}}
      columns={columns}
      data={websites}
      loading={loading}
    />
  );
};
```

---

### Phase 4：广告保留（重要！）⭐

#### 4.1 页脚广告

**在 `TDesignLayout.tsx` 的 Footer 中保留**：
```tsx
<Footer>
  <div className="footer-content">
    <div className="footer-links">
      <a href="https://fsuied.com" target="_blank" rel="noopener noreferrer">
        🌟 UIED 官网 - 设计师导航
      </a>
      <span className="divider">|</span>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        ⭐ GitHub - 给个 Star
      </a>
      <span className="divider">|</span>
      <a href="https://tomda.com" target="_blank" rel="noopener noreferrer">
        👨‍💻 作者：Tomda
      </a>
    </div>
    <div className="copyright">
      © 2026 UIED技术团队. All Rights Reserved. | 
      <a href="https://fsuied.com" target="_blank" rel="noopener noreferrer">
        Powered by UIED
      </a>
    </div>
  </div>
</Footer>
```

#### 4.2 侧边栏广告（可选）

```tsx
<Aside width={collapsed ? 64 : 232}>
  {/* Logo */}
  <div className="logo">...</div>
  
  {/* 菜单 */}
  <Menu>...</Menu>
  
  {/* 底部广告 */}
  {!collapsed && (
    <div className="sidebar-ad">
      <Card size="small">
        <div className="ad-content">
          <h4>💡 升级到 Pro 版本</h4>
          <p>解锁 AI 智能推荐、AI 搜索助手等高级功能</p>
          <Button theme="primary" size="small" block>
            了解更多
          </Button>
        </div>
      </Card>
    </div>
  )}
</Aside>
```

#### 4.3 登录页广告

```tsx
<div className="login-page">
  <div className="login-left">
    <h1>UIED 导航系统</h1>
    <p>开源、免费、强大的导航网站系统</p>
    <div className="features">
      <div className="feature">✅ 完全开源</div>
      <div className="feature">✅ 5 分钟部署</div>
      <div className="feature">✅ 功能完整</div>
    </div>
    <div className="links">
      <a href="https://fsuied.com" target="_blank">官网</a>
      <a href="https://github.com/yourusername" target="_blank">GitHub</a>
    </div>
  </div>
  <div className="login-right">
    {/* 登录表单 */}
  </div>
</div>
```

---

### Phase 5：清理 Ant Design（第 11 天）

#### 5.1 检查依赖

```bash
# 搜索所有 Ant Design 引用
grep -r "from 'antd'" admin/src/
grep -r "from '@ant-design" admin/src/
```

#### 5.2 卸载依赖

```bash
cd admin

# 卸载 Ant Design
npm uninstall antd @ant-design/icons

# 清理 node_modules
rm -rf node_modules package-lock.json
npm install
```

#### 5.3 清理样式

```bash
# 删除 Ant Design 样式引用
# 在 main.tsx 或其他文件中删除
# import 'antd/dist/reset.css';
```

---

## 📝 迁移检查清单

### 环境准备
- [ ] 安装 TDesign React
- [ ] 安装 TDesign Icons
- [ ] 配置 Vite
- [ ] 导入全局样式

### 布局迁移
- [ ] 创建 TDesignLayout
- [ ] 迁移侧边栏菜单
- [ ] 迁移顶部导航
- [ ] 迁移页脚（保留广告）

### 页面迁移（按优先级）
- [ ] 网站管理
- [ ] 分类管理
- [ ] 站点设置
- [ ] 主题配置（新增）
- [ ] 系统设置
- [ ] 页面管理
- [ ] 用户提交
- [ ] 横幅管理
- [ ] 导航菜单
- [ ] 页脚设置
- [ ] SEO 设置
- [ ] 其他页面

### 广告保留
- [ ] 页脚链接（fsuied.com + 作者官网）
- [ ] 版权信息
- [ ] 侧边栏广告（可选）
- [ ] 登录页广告

### 清理工作
- [ ] 删除所有 Ant Design 引用
- [ ] 卸载 Ant Design 依赖
- [ ] 清理无用样式
- [ ] 测试所有页面

---

## 🎯 时间估算

| 阶段 | 任务 | 时间 |
|------|------|------|
| Phase 1 | 环境准备 | 1 天 |
| Phase 2 | 布局迁移 | 2 天 |
| Phase 3 | 页面迁移 | 7 天 |
| Phase 4 | 广告保留 | 1 天 |
| Phase 5 | 清理工作 | 1 天 |
| **总计** | | **12 天** |

---

## 💡 注意事项

### 1. 保留广告位
- ✅ 页脚必须保留 fsuied.com 链接
- ✅ 页脚必须保留作者官网链接
- ✅ 版权信息必须保留
- ✅ 可以添加"Powered by UIED"

### 2. 渐进式迁移
- ✅ 不要一次性删除所有 Ant Design
- ✅ 先迁移核心页面
- ✅ 测试通过后再迁移其他页面
- ✅ 最后统一清理

### 3. 组件对应关系

| Ant Design | TDesign |
|------------|---------|
| Button | Button |
| Input | Input |
| Table | Table |
| Form | Form |
| Modal | Dialog |
| Message | MessagePlugin |
| Select | Select |
| DatePicker | DatePicker |
| Upload | Upload |
| Card | Card |
| Menu | Menu |
| Layout | Layout |

### 4. API 差异

**Ant Design**：
```tsx
import { message } from 'antd';
message.success('成功');
```

**TDesign**：
```tsx
import { MessagePlugin } from 'tdesign-react';
MessagePlugin.success('成功');
```

---

## 🚀 下一步行动

### 立即开始（今天）

1. **安装 TDesign**
   ```bash
   cd admin
   npm install tdesign-react tdesign-icons-react
   ```

2. **创建布局文件**
   - 创建 `TDesignLayout.tsx`
   - 创建 `TDesignLayout.css`

3. **迁移第一个页面**
   - 选择网站管理页面
   - 使用 TDesign 组件重写
   - 测试功能

### 本周完成

- [ ] 完成布局迁移
- [ ] 完成 3 个核心页面（网站、分类、设置）
- [ ] 保留所有广告位

### 下周完成

- [ ] 完成所有页面迁移
- [ ] 清理 Ant Design
- [ ] 全面测试

---

**记住**：保留广告位，这是开源版本的变现方式！

