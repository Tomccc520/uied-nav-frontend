# 设计文档：管理后台 TDesign 迁移

## 概述

本设计文档描述了将 UIED 设计导航项目的管理后台从 Ant Design 迁移到 TDesign React 的技术实现方案。迁移采用渐进式策略，优先迁移核心页面，确保在迁移过程中系统保持稳定运行。

### 设计目标

1. **无缝迁移**：保持所有现有功能和业务逻辑不变
2. **性能提升**：利用 TDesign 的性能优化特性提升用户体验
3. **主题定制**：提供灵活的主题配置能力
4. **代码复用**：创建可复用的页面模板组件减少重复代码
5. **渐进式迁移**：分阶段迁移，降低风险

### 技术栈

- **UI 组件库**：TDesign React (最新稳定版)
- **图标库**：TDesign Icons React
- **构建工具**：Vite 5.x
- **框架**：React 19 + TypeScript
- **状态管理**：保持现有方案（React Query + Zustand）
- **路由**：保持现有方案（React Router）

## 架构设计

### 整体架构

```
admin/
├── src/
│   ├── components/          # 通用组件
│   │   ├── Layout/          # 布局组件（新）
│   │   │   ├── MainLayout.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── PageTemplates/   # 页面模板（新）
│   │   │   ├── ListPage.tsx
│   │   │   ├── FormPage.tsx
│   │   │   └── DetailPage.tsx
│   │   └── Common/          # 通用组件
│   │       ├── IconPicker.tsx
│   │       └── ...
│   ├── pages/               # 页面组件（迁移）
│   │   ├── Websites.tsx     # 网站管理
│   │   ├── Categories.tsx   # 分类管理
│   │   ├── SystemSettings.tsx
│   │   └── ...
│   ├── config/              # 配置文件
│   │   ├── icons.tsx        # 图标映射（更新）
│   │   ├── theme.ts         # 主题配置（新）
│   │   └── menu.ts          # 菜单配置
│   ├── styles/              # 样式文件
│   │   ├── global.css       # 全局样式（更新）
│   │   ├── theme.css        # 主题变量（新）
│   │   └── overrides.css    # 组件样式覆盖（新）
│   ├── hooks/               # 自定义 Hooks
│   │   ├── useTheme.ts      # 主题管理（新）
│   │   └── ...
│   └── App.tsx              # 应用入口（更新）
├── package.json             # 依赖配置（更新）
└── vite.config.ts           # Vite 配置（更新）
```

### 迁移策略

采用**三阶段渐进式迁移**：

**阶段 1：基础设施（第 1-2 天）**
- 安装 TDesign 依赖
- 配置 Vite 和全局样式
- 创建布局组件
- 创建页面模板组件

**阶段 2：核心页面（第 3-5 天）**
- 迁移网站管理页面
- 迁移分类管理页面
- 迁移站点设置页面
- 迁移系统设置页面
- 创建主题配置页面

**阶段 3：次要页面和清理（第 6-8 天）**
- 迁移其他管理页面
- 清理 Ant Design 代码
- 卸载 Ant Design 依赖
- 性能优化和测试

## 组件和接口

### 1. 布局系统

#### MainLayout 组件

```typescript
/**
 * @file components/Layout/MainLayout.tsx
 * @description 主布局组件
 */

import { Layout } from 'tdesign-react';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
      <Layout>
        <Header collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        <Layout.Content>{children}</Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  );
};
```

#### Sidebar 组件

```typescript
/**
 * @file components/Layout/Sidebar.tsx
 * @description 侧边栏组件
 */

import { Layout, Menu } from 'tdesign-react';
import { menuConfig } from '@/config/menu';

interface SidebarProps {
  collapsed: boolean;
  onCollapse: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onCollapse }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (value: string) => {
    navigate(value);
  };

  return (
    <Layout.Aside width={collapsed ? 64 : 240}>
      <div className="logo">
        {!collapsed && <span>UIED 管理后台</span>}
      </div>
      <Menu
        value={location.pathname}
        collapsed={collapsed}
        onChange={handleMenuClick}
        operations={
          <div className="menu-operations">
            <Button onClick={() => onCollapse(!collapsed)}>
              {collapsed ? <MenuUnfoldIcon /> : <MenuFoldIcon />}
            </Button>
          </div>
        }
      >
        {menuConfig.map(item => (
          <Menu.Item key={item.path} value={item.path} icon={item.icon}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Aside>
  );
};
```

#### Header 组件

```typescript
/**
 * @file components/Layout/Header.tsx
 * @description 顶部导航栏组件
 */

import { Layout, Breadcrumb, Dropdown } from 'tdesign-react';
import { UserIcon, LogoutIcon } from 'tdesign-icons-react';

interface HeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // 退出登录逻辑
    localStorage.removeItem('token');
    navigate('/login');
  };

  const userMenuOptions = [
    { content: '个人设置', value: 'profile' },
    { content: '退出登录', value: 'logout' }
  ];

  return (
    <Layout.Header>
      <div className="header-left">
        <Button onClick={onToggle}>
          {collapsed ? <MenuUnfoldIcon /> : <MenuFoldIcon />}
        </Button>
        <Breadcrumb>
          {/* 根据路由生成面包屑 */}
        </Breadcrumb>
      </div>
      <div className="header-right">
        <Dropdown options={userMenuOptions} onClick={handleLogout}>
          <Button variant="text">
            <UserIcon />
            <span>管理员</span>
          </Button>
        </Dropdown>
      </div>
    </Layout.Header>
  );
};
```

#### Footer 组件

```typescript
/**
 * @file components/Layout/Footer.tsx
 * @description 页脚组件（包含广告位）
 */

import { Layout } from 'tdesign-react';

const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://fsuied.com" target="_blank" rel="noopener noreferrer">
            FSUIED 设计导航
          </a>
          <span className="divider">|</span>
          <a href="https://tomda.cn" target="_blank" rel="noopener noreferrer">
            作者官网
          </a>
        </div>
        <div className="footer-copyright">
          版权所有 (c) 2026 UIED技术团队
        </div>
      </div>
    </Layout.Footer>
  );
};
```

### 2. 页面模板组件

#### ListPage 模板

```typescript
/**
 * @file components/PageTemplates/ListPage.tsx
 * @description 列表页模板组件
 */

import { Table, Button, Input, Space, Pagination } from 'tdesign-react';
import { SearchIcon, AddIcon } from 'tdesign-icons-react';

interface ListPageProps<T> {
  title: string;
  columns: any[];
  data: T[];
  loading: boolean;
  total: number;
  page: number;
  pageSize: number;
  onPageChange: (page: number, pageSize: number) => void;
  onSearch?: (keyword: string) => void;
  onAdd?: () => void;
  onEdit?: (record: T) => void;
  onDelete?: (record: T) => void;
  searchPlaceholder?: string;
  showAdd?: boolean;
}

function ListPage<T extends { id: string | number }>({
  title,
  columns,
  data,
  loading,
  total,
  page,
  pageSize,
  onPageChange,
  onSearch,
  onAdd,
  searchPlaceholder = '请输入关键词搜索',
  showAdd = true
}: ListPageProps<T>) {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    onSearch?.(keyword);
  };

  return (
    <div className="list-page">
      <div className="page-header">
        <h2>{title}</h2>
      </div>
      
      <div className="page-toolbar">
        <Space>
          {onSearch && (
            <Input
              value={keyword}
              onChange={setKeyword}
              placeholder={searchPlaceholder}
              suffix={<SearchIcon />}
              onEnter={handleSearch}
            />
          )}
          {showAdd && onAdd && (
            <Button theme="primary" onClick={onAdd}>
              <AddIcon /> 新增
            </Button>
          )}
        </Space>
      </div>

      <Table
        data={data}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={false}
      />

      <div className="page-footer">
        <Pagination
          total={total}
          current={page}
          pageSize={pageSize}
          onChange={onPageChange}
          showJumper
        />
      </div>
    </div>
  );
}
```

#### FormPage 模板

```typescript
/**
 * @file components/PageTemplates/FormPage.tsx
 * @description 表单页模板组件
 */

import { Form, Button, Space, MessagePlugin } from 'tdesign-react';

interface FormPageProps {
  title: string;
  initialValues?: any;
  onSubmit: (values: any) => Promise<void>;
  onCancel?: () => void;
  children: React.ReactNode;
  submitText?: string;
  cancelText?: string;
}

const FormPage: React.FC<FormPageProps> = ({
  title,
  initialValues,
  onSubmit,
  onCancel,
  children,
  submitText = '保存',
  cancelText = '取消'
}) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      const values = await form.validate();
      setLoading(true);
      await onSubmit(values);
      MessagePlugin.success('保存成功');
    } catch (error) {
      console.error('表单验证失败:', error);
      MessagePlugin.error('保存失败，请检查表单');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-page">
      <div className="page-header">
        <h2>{title}</h2>
      </div>

      <Form
        form={form}
        initialValues={initialValues}
        labelWidth={120}
        layout="vertical"
      >
        {children}

        <Form.FormItem>
          <Space>
            <Button
              theme="primary"
              onClick={handleSubmit}
              loading={loading}
            >
              {submitText}
            </Button>
            {onCancel && (
              <Button onClick={onCancel}>
                {cancelText}
              </Button>
            )}
          </Space>
        </Form.FormItem>
      </Form>
    </div>
  );
};
```

### 3. 核心页面实现

#### 网站管理页面

```typescript
/**
 * @file pages/Websites.tsx
 * @description 网站管理页面
 */

import { useState, useEffect } from 'react';
import { Button, Tag, Space, Dialog, MessagePlugin } from 'tdesign-react';
import { EditIcon, DeleteIcon } from 'tdesign-icons-react';
import ListPage from '@/components/PageTemplates/ListPage';
import api from '@/services/api';

const Websites: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [total, setTotal] = useState(0);

  const columns = [
    { colKey: 'id', title: 'ID', width: 80 },
    { colKey: 'name', title: '网站名称', width: 200 },
    { colKey: 'url', title: 'URL', ellipsis: true },
    { 
      colKey: 'category', 
      title: '分类',
      cell: ({ row }) => <Tag>{row.category?.name}</Tag>
    },
    {
      colKey: 'status',
      title: '状态',
      cell: ({ row }) => (
        <Tag theme={row.status === 'active' ? 'success' : 'default'}>
          {row.status === 'active' ? '启用' : '禁用'}
        </Tag>
      )
    },
    {
      colKey: 'actions',
      title: '操作',
      width: 150,
      cell: ({ row }) => (
        <Space>
          <Button
            size="small"
            variant="text"
            onClick={() => handleEdit(row)}
          >
            <EditIcon /> 编辑
          </Button>
          <Button
            size="small"
            variant="text"
            theme="danger"
            onClick={() => handleDelete(row)}
          >
            <DeleteIcon /> 删除
          </Button>
        </Space>
      )
    }
  ];

  const fetchData = async (keyword?: string) => {
    setLoading(true);
    try {
      const response = await api.get('/websites', {
        params: { page, pageSize, keyword }
      });
      setData(response.data.items);
      setTotal(response.data.total);
    } catch (error) {
      MessagePlugin.error('获取数据失败');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (record: any) => {
    // 编辑逻辑
  };

  const handleDelete = (record: any) => {
    Dialog.confirm({
      header: '确认删除',
      body: `确定要删除网站"${record.name}"吗？`,
      onConfirm: async () => {
        try {
          await api.delete(`/websites/${record.id}`);
          MessagePlugin.success('删除成功');
          fetchData();
        } catch (error) {
          MessagePlugin.error('删除失败');
        }
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize]);

  return (
    <ListPage
      title="网站管理"
      columns={columns}
      data={data}
      loading={loading}
      total={total}
      page={page}
      pageSize={pageSize}
      onPageChange={(p, ps) => {
        setPage(p);
        setPageSize(ps);
      }}
      onSearch={fetchData}
      onAdd={() => {/* 新增逻辑 */}}
    />
  );
};
```

#### 分类管理页面

```typescript
/**
 * @file pages/Categories.tsx
 * @description 分类管理页面
 */

import { useState, useEffect } from 'react';
import { Tree, Button, Space, Dialog, MessagePlugin } from 'tdesign-react';
import { AddIcon, EditIcon, DeleteIcon } from 'tdesign-icons-react';
import api from '@/services/api';

const Categories: React.FC = () => {
  const [treeData, setTreeData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await api.get('/categories/tree');
      setTreeData(response.data);
    } catch (error) {
      MessagePlugin.error('获取分类失败');
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    // 新增分类逻辑
  };

  const handleEdit = (node: any) => {
    // 编辑分类逻辑
  };

  const handleDelete = (node: any) => {
    Dialog.confirm({
      header: '确认删除',
      body: `确定要删除分类"${node.name}"吗？`,
      onConfirm: async () => {
        try {
          await api.delete(`/categories/${node.id}`);
          MessagePlugin.success('删除成功');
          fetchCategories();
        } catch (error) {
          MessagePlugin.error('删除失败');
        }
      }
    });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="categories-page">
      <div className="page-header">
        <h2>分类管理</h2>
        <Button theme="primary" onClick={handleAdd}>
          <AddIcon /> 新增分类
        </Button>
      </div>

      <Tree
        data={treeData}
        loading={loading}
        expandAll
        operations={(node) => (
          <Space>
            <Button size="small" variant="text" onClick={() => handleEdit(node)}>
              <EditIcon />
            </Button>
            <Button
              size="small"
              variant="text"
              theme="danger"
              onClick={() => handleDelete(node)}
            >
              <DeleteIcon />
            </Button>
          </Space>
        )}
      />
    </div>
  );
};
```

### 4. 主题配置系统

#### 主题配置接口

```typescript
/**
 * @file config/theme.ts
 * @description 主题配置
 */

export interface ThemeConfig {
  // 主色调
  brandColor: string;
  // 辅助色
  warningColor: string;
  errorColor: string;
  successColor: string;
  // 中性色
  textColorPrimary: string;
  textColorSecondary: string;
  bgColorContainer: string;
  // 布局
  sidebarWidth: number;
  headerHeight: number;
  // 其他
  borderRadius: number;
  fontSize: number;
}

export const defaultTheme: ThemeConfig = {
  brandColor: '#0052D9',
  warningColor: '#E37318',
  errorColor: '#D54941',
  successColor: '#00A870',
  textColorPrimary: 'rgba(0, 0, 0, 0.9)',
  textColorSecondary: 'rgba(0, 0, 0, 0.6)',
  bgColorContainer: '#FFFFFF',
  sidebarWidth: 240,
  headerHeight: 64,
  borderRadius: 3,
  fontSize: 14
};

export const applyTheme = (theme: ThemeConfig) => {
  const root = document.documentElement;
  root.style.setProperty('--td-brand-color', theme.brandColor);
  root.style.setProperty('--td-warning-color', theme.warningColor);
  root.style.setProperty('--td-error-color', theme.errorColor);
  root.style.setProperty('--td-success-color', theme.successColor);
  // ... 设置其他 CSS 变量
};
```

#### 主题配置页面

```typescript
/**
 * @file pages/ThemeSettings.tsx
 * @description 主题配置页面
 */

import { Form, ColorPicker, InputNumber, Button, MessagePlugin } from 'tdesign-react';
import { defaultTheme, applyTheme, ThemeConfig } from '@/config/theme';

const ThemeSettings: React.FC = () => {
  const [form] = Form.useForm();
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);

  const handleSave = async (values: ThemeConfig) => {
    try {
      // 保存到数据库或本地存储
      localStorage.setItem('theme', JSON.stringify(values));
      applyTheme(values);
      setTheme(values);
      MessagePlugin.success('主题保存成功');
    } catch (error) {
      MessagePlugin.error('保存失败');
    }
  };

  const handleReset = () => {
    form.setFieldsValue(defaultTheme);
    applyTheme(defaultTheme);
    MessagePlugin.success('已重置为默认主题');
  };

  return (
    <div className="theme-settings-page">
      <div className="page-header">
        <h2>主题配置</h2>
      </div>

      <Form
        form={form}
        initialValues={theme}
        onSubmit={handleSave}
        labelWidth={120}
      >
        <Form.FormItem label="主色调" name="brandColor">
          <ColorPicker />
        </Form.FormItem>

        <Form.FormItem label="警告色" name="warningColor">
          <ColorPicker />
        </Form.FormItem>

        <Form.FormItem label="错误色" name="errorColor">
          <ColorPicker />
        </Form.FormItem>

        <Form.FormItem label="成功色" name="successColor">
          <ColorPicker />
        </Form.FormItem>

        <Form.FormItem label="侧边栏宽度" name="sidebarWidth">
          <InputNumber min={200} max={300} suffix="px" />
        </Form.FormItem>

        <Form.FormItem label="顶栏高度" name="headerHeight">
          <InputNumber min={48} max={80} suffix="px" />
        </Form.FormItem>

        <Form.FormItem label="圆角大小" name="borderRadius">
          <InputNumber min={0} max={16} suffix="px" />
        </Form.FormItem>

        <Form.FormItem label="字体大小" name="fontSize">
          <InputNumber min={12} max={18} suffix="px" />
        </Form.FormItem>

        <Form.FormItem>
          <Space>
            <Button theme="primary" type="submit">
              保存配置
            </Button>
            <Button onClick={handleReset}>
              重置默认
            </Button>
          </Space>
        </Form.FormItem>
      </Form>
    </div>
  );
};
```

### 5. 图标系统迁移

#### 图标映射配置

```typescript
/**
 * @file config/icons.tsx
 * @description 图标映射配置（Ant Design -> TDesign）
 */

import {
  HomeIcon,
  AppIcon,
  FolderIcon,
  FileIcon,
  UserIcon,
  SettingIcon,
  ChartIcon,
  LinkIcon,
  ImageIcon,
  NotificationIcon,
  SearchIcon,
  // ... 其他图标
} from 'tdesign-icons-react';

export const iconMap = {
  // 菜单图标
  home: HomeIcon,
  app: AppIcon,
  folder: FolderIcon,
  file: FileIcon,
  user: UserIcon,
  setting: SettingIcon,
  chart: ChartIcon,
  link: LinkIcon,
  image: ImageIcon,
  notification: NotificationIcon,
  search: SearchIcon,
  // ... 更多映射
};

export type IconName = keyof typeof iconMap;

export const getIcon = (name: IconName) => {
  return iconMap[name] || AppIcon;
};
```

## 数据模型

### 主题配置数据模型

```typescript
interface ThemeConfig {
  id: string;
  userId: string;
  config: {
    brandColor: string;
    warningColor: string;
    errorColor: string;
    successColor: string;
    textColorPrimary: string;
    textColorSecondary: string;
    bgColorContainer: string;
    sidebarWidth: number;
    headerHeight: number;
    borderRadius: number;
    fontSize: number;
  };
  createdAt: Date;
  updatedAt: Date;
}
```

### 迁移状态跟踪模型

```typescript
interface MigrationStatus {
  pageName: string;
  status: 'pending' | 'in-progress' | 'completed' | 'failed';
  startedAt?: Date;
  completedAt?: Date;
  notes?: string;
}

const migrationPages: MigrationStatus[] = [
  { pageName: 'Websites', status: 'pending' },
  { pageName: 'Categories', status: 'pending' },
  { pageName: 'SystemSettings', status: 'pending' },
  { pageName: 'ThemeSettings', status: 'pending' },
  // ... 其他页面
];
```

## 正确性属性

*属性是一个特征或行为，应该在系统的所有有效执行中保持为真——本质上是关于系统应该做什么的正式陈述。属性作为人类可读规范和机器可验证正确性保证之间的桥梁。*


### 属性反思

在分析了所有验收标准后，我识别出以下可以合并或简化的属性：

**冗余识别**：
1. 需求 4 和需求 5 中的多个页面迁移属性可以合并为一个通用的"页面功能保持"属性
2. 需求 9 中的多个文件头注释字段要求可以合并为一个"文件头注释完整性"属性
3. 需求 12 中的多个响应式布局属性可以合并为一个"响应式布局适配"属性
4. 需求 14 中的多个可访问性属性可以合并为一个"可访问性支持"属性

**合并后的核心属性**：
- 侧边栏状态管理属性（需求 2.2, 2.5）
- 路由兼容性属性（需求 2.6）
- 表单验证和提交属性（需求 3.2）
- 页面模板配置灵活性属性（需求 3.5）
- 页面模板错误处理属性（需求 3.6）
- 页面功能完整性属性（需求 4.1-4.5, 5.1-5.12）
- API 兼容性属性（需求 4.7, 10.4）
- 广告链接可点击性属性（需求 6.7）
- 主题配置应用属性（需求 7.1, 7.2, 7.3）
- 主题配置持久化属性（需求 7.5）
- 文件头注释完整性属性（需求 9.1-9.7）
- 业务逻辑保持属性（需求 10.5）
- 响应式布局适配属性（需求 12.1, 12.2）
- 键盘导航支持属性（需求 14.1）
- ARIA 标签正确性属性（需求 14.2）
- 表单标签关联属性（需求 14.4）

### 属性列表

**属性 1：侧边栏状态保持**
*对于任意*侧边栏折叠/展开操作，执行操作后侧边栏的状态应该与操作意图一致，并且状态应该在页面刷新后保持不变
**验证需求：2.2, 2.5**

**属性 2：路由导航兼容性**
*对于任意*有效的路由路径，使用新布局系统进行导航应该能够正确跳转到目标页面，并且页面内容应该正确渲染
**验证需求：2.6**

**属性 3：表单验证和提交**
*对于任意*表单页模板实例，当提交无效数据时应该显示验证错误，当提交有效数据时应该成功调用提交处理函数
**验证需求：3.2**

**属性 4：页面模板配置灵活性**
*对于任意*页面模板组件，传入不同的 props 配置应该能够正确渲染对应的 UI 元素和行为
**验证需求：3.5**

**属性 5：页面模板错误处理**
*对于任意*页面模板组件，当发生加载错误或数据错误时，应该显示相应的错误状态而不是崩溃
**验证需求：3.6**

**属性 6：页面功能完整性**
*对于任意*已迁移的管理页面，所有原有功能（增删改查、搜索、排序、分页等）应该在迁移后继续正常工作
**验证需求：4.1, 4.2, 4.3, 4.4, 4.5, 5.1-5.12**

**属性 7：API 调用兼容性**
*对于任意*页面中的 API 调用，迁移后的调用应该使用相同的端点、参数和数据格式，并且返回结果应该被正确处理
**验证需求：4.7, 10.4**

**属性 8：广告链接可访问性**
*对于所有*广告位中的链接，链接应该可点击，并且应该在新标签页中打开（target="_blank"）
**验证需求：6.7**

**属性 9：主题配置应用**
*对于任意*有效的主题配置对象，应用该配置后，页面的视觉样式（颜色、尺寸等）应该反映配置的值
**验证需求：7.1, 7.2, 7.3**

**属性 10：主题配置持久化往返**
*对于任意*主题配置对象，保存到存储后再读取应该得到等价的配置对象
**验证需求：7.5**

**属性 11：文件头注释完整性**
*对于任意*新创建的源代码文件，文件头注释应该包含所有必需字段（@file, @description, @author, @copyright, @website, @license, @version），并且字段值应该符合项目规范
**验证需求：9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7**

**属性 12：业务逻辑保持不变**
*对于任意*业务操作（如创建网站、更新分类、保存设置等），迁移前后的操作结果应该完全一致
**验证需求：10.5**

**属性 13：响应式布局适配**
*对于任意*屏幕尺寸（移动、平板、桌面），布局系统应该根据断点自动调整侧边栏状态和内容区宽度
**验证需求：12.1, 12.2**

**属性 14：键盘导航支持**
*对于任意*可交互元素，使用 Tab 键应该能够按逻辑顺序切换焦点，使用 Enter 键应该能够触发元素的默认操作
**验证需求：14.1**

**属性 15：ARIA 标签正确性**
*对于任意*交互组件，应该包含适当的 ARIA 属性（role, aria-label, aria-describedby 等）以支持屏幕阅读器
**验证需求：14.2**

**属性 16：表单标签关联**
*对于任意*表单输入元素，应该有对应的 label 元素，并且通过 htmlFor/id 或嵌套关系正确关联
**验证需求：14.4**

## 错误处理

### 错误类型

1. **依赖安装错误**
   - 场景：TDesign 包安装失败
   - 处理：检查网络连接，尝试使用镜像源，或手动下载安装

2. **组件导入错误**
   - 场景：TDesign 组件导入失败或找不到
   - 处理：检查组件名称拼写，确认 TDesign 版本，查阅官方文档

3. **样式冲突错误**
   - 场景：TDesign 样式与现有样式冲突
   - 处理：使用 CSS 模块化，调整样式优先级，使用 scoped 样式

4. **API 调用错误**
   - 场景：迁移后 API 调用失败
   - 处理：检查 API 端点和参数，确认数据格式，查看网络请求日志

5. **状态管理错误**
   - 场景：组件状态丢失或不同步
   - 处理：检查状态管理逻辑，确认 useEffect 依赖，使用 React DevTools 调试

6. **路由跳转错误**
   - 场景：页面跳转失败或路径错误
   - 处理：检查路由配置，确认路径拼写，查看浏览器控制台错误

7. **构建错误**
   - 场景：Vite 构建失败
   - 处理：检查 TypeScript 类型错误，确认导入路径，清理缓存重新构建

### 错误处理策略

```typescript
/**
 * @file utils/errorHandler.ts
 * @description 统一错误处理工具
 */

import { MessagePlugin } from 'tdesign-react';

export class MigrationError extends Error {
  constructor(
    message: string,
    public code: string,
    public details?: any
  ) {
    super(message);
    this.name = 'MigrationError';
  }
}

export const handleError = (error: any, context?: string) => {
  console.error(`[${context || 'Error'}]:`, error);

  if (error instanceof MigrationError) {
    MessagePlugin.error({
      content: error.message,
      duration: 5000
    });
  } else if (error.response) {
    // API 错误
    MessagePlugin.error({
      content: `API 错误: ${error.response.data?.message || '请求失败'}`,
      duration: 5000
    });
  } else if (error.message) {
    MessagePlugin.error({
      content: error.message,
      duration: 5000
    });
  } else {
    MessagePlugin.error({
      content: '发生未知错误，请重试',
      duration: 5000
    });
  }
};

// 组件错误边界
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('组件错误:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>页面加载失败</h2>
          <p>{this.state.error?.message}</p>
          <Button onClick={() => window.location.reload()}>
            刷新页面
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### 回滚策略

如果迁移过程中遇到严重问题，可以按以下步骤回滚：

1. **代码回滚**
   ```bash
   # 切换到备份分支
   git checkout backup/before-tdesign-migration
   
   # 或者重置到迁移前的提交
   git reset --hard <commit-hash>
   ```

2. **依赖回滚**
   ```bash
   # 重新安装 Ant Design
   npm install antd @ant-design/icons
   
   # 卸载 TDesign
   npm uninstall tdesign-react tdesign-icons-react
   ```

3. **配置回滚**
   - 恢复 vite.config.ts 中的 Ant Design 配置
   - 恢复全局样式导入
   - 恢复组件导入语句

4. **验证回滚**
   ```bash
   # 清理缓存
   rm -rf node_modules/.vite
   
   # 重新构建
   npm run build
   
   # 启动开发服务器
   npm run dev
   ```

## 测试策略

### 测试方法

本项目采用**双重测试方法**：

1. **单元测试**：验证具体示例、边缘情况和错误条件
2. **属性测试**：验证通用属性在所有输入下的正确性

两种测试方法是互补的，都是全面覆盖所必需的：
- 单元测试捕获具体的 bug
- 属性测试验证通用的正确性

### 测试工具

- **测试框架**：Vitest
- **属性测试库**：fast-check
- **React 测试**：@testing-library/react
- **E2E 测试**：Playwright（可选）

### 单元测试示例

```typescript
/**
 * @file __tests__/components/Layout/Sidebar.test.tsx
 * @description 侧边栏组件单元测试
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Sidebar from '@/components/Layout/Sidebar';

describe('Sidebar Component', () => {
  it('应该渲染侧边栏菜单', () => {
    const onCollapse = vi.fn();
    render(<Sidebar collapsed={false} onCollapse={onCollapse} />);
    
    expect(screen.getByText('UIED 管理后台')).toBeInTheDocument();
  });

  it('折叠状态下应该隐藏文字', () => {
    const onCollapse = vi.fn();
    render(<Sidebar collapsed={true} onCollapse={onCollapse} />);
    
    expect(screen.queryByText('UIED 管理后台')).not.toBeInTheDocument();
  });

  it('点击折叠按钮应该触发回调', () => {
    const onCollapse = vi.fn();
    render(<Sidebar collapsed={false} onCollapse={onCollapse} />);
    
    const collapseButton = screen.getByRole('button');
    fireEvent.click(collapseButton);
    
    expect(onCollapse).toHaveBeenCalledWith(true);
  });
});
```

### 属性测试示例

```typescript
/**
 * @file __tests__/properties/theme.property.test.ts
 * @description 主题配置属性测试
 * Feature: admin-tdesign-migration, Property 10: 主题配置持久化往返
 */

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { ThemeConfig } from '@/config/theme';

// 生成器：生成随机主题配置
const themeConfigArbitrary = fc.record({
  brandColor: fc.hexaString({ minLength: 7, maxLength: 7 }),
  warningColor: fc.hexaString({ minLength: 7, maxLength: 7 }),
  errorColor: fc.hexaString({ minLength: 7, maxLength: 7 }),
  successColor: fc.hexaString({ minLength: 7, maxLength: 7 }),
  textColorPrimary: fc.string(),
  textColorSecondary: fc.string(),
  bgColorContainer: fc.hexaString({ minLength: 7, maxLength: 7 }),
  sidebarWidth: fc.integer({ min: 200, max: 300 }),
  headerHeight: fc.integer({ min: 48, max: 80 }),
  borderRadius: fc.integer({ min: 0, max: 16 }),
  fontSize: fc.integer({ min: 12, max: 18 })
});

describe('Property: 主题配置持久化往返', () => {
  it('对于任意主题配置，保存后读取应该得到等价的配置', () => {
    fc.assert(
      fc.property(themeConfigArbitrary, (config) => {
        // 保存到 localStorage
        localStorage.setItem('theme', JSON.stringify(config));
        
        // 读取
        const saved = localStorage.getItem('theme');
        const loaded = JSON.parse(saved!);
        
        // 验证：应该得到等价的配置
        expect(loaded).toEqual(config);
      }),
      { numRuns: 100 }
    );
  });
});
```

```typescript
/**
 * @file __tests__/properties/sidebar.property.test.ts
 * @description 侧边栏状态属性测试
 * Feature: admin-tdesign-migration, Property 1: 侧边栏状态保持
 */

import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import { render, fireEvent } from '@testing-library/react';
import Sidebar from '@/components/Layout/Sidebar';

describe('Property: 侧边栏状态保持', () => {
  it('对于任意折叠/展开操作序列，最终状态应该与最后一次操作一致', () => {
    fc.assert(
      fc.property(fc.array(fc.boolean()), (operations) => {
        let currentState = false;
        const onCollapse = (collapsed: boolean) => {
          currentState = collapsed;
        };
        
        const { rerender } = render(
          <Sidebar collapsed={currentState} onCollapse={onCollapse} />
        );
        
        // 执行操作序列
        operations.forEach(targetState => {
          fireEvent.click(screen.getByRole('button'));
          rerender(<Sidebar collapsed={currentState} onCollapse={onCollapse} />);
        });
        
        // 验证：最终状态应该与最后一次操作一致
        if (operations.length > 0) {
          const expectedState = operations[operations.length - 1];
          expect(currentState).toBe(expectedState);
        }
      }),
      { numRuns: 100 }
    );
  });
});
```

### 测试配置

所有属性测试必须：
- 运行至少 100 次迭代（由于随机化）
- 使用注释标签引用设计文档中的属性
- 标签格式：`Feature: admin-tdesign-migration, Property {number}: {property_text}`

### 测试覆盖率目标

- 单元测试覆盖率：≥ 80%
- 属性测试覆盖所有核心属性
- 关键路径（登录、网站管理、分类管理）：100% 覆盖

### 手动测试清单

迁移完成后，需要手动测试以下功能：

**布局和导航**
- [ ] 侧边栏折叠/展开
- [ ] 菜单项点击跳转
- [ ] 面包屑导航显示
- [ ] 用户下拉菜单
- [ ] 页脚链接可点击

**核心页面**
- [ ] 网站管理：增删改查、搜索、分页
- [ ] 分类管理：树形展示、拖拽排序
- [ ] 站点设置：配置保存
- [ ] 系统设置：配置保存
- [ ] 主题配置：颜色选择、实时预览

**响应式**
- [ ] 移动设备：侧边栏自动折叠
- [ ] 平板设备：布局适配
- [ ] 桌面设备：完整展示

**可访问性**
- [ ] 键盘导航：Tab 键切换
- [ ] 屏幕阅读器：ARIA 标签
- [ ] 表单标签：正确关联

**性能**
- [ ] 首屏加载时间 < 3 秒
- [ ] 页面切换流畅
- [ ] 大列表滚动流畅

## 实施时间表

### 第 1 天：环境准备
- 安装 TDesign 依赖
- 配置 Vite
- 设置全局样式
- 创建主题配置

### 第 2 天：布局系统
- 创建 MainLayout 组件
- 创建 Sidebar 组件
- 创建 Header 组件
- 创建 Footer 组件（保留广告位）

### 第 3 天：页面模板
- 创建 ListPage 模板
- 创建 FormPage 模板
- 创建 DetailPage 模板
- 编写模板文档

### 第 4 天：核心页面迁移（第一批）
- 迁移网站管理页面
- 迁移分类管理页面
- 功能测试和验证

### 第 5 天：核心页面迁移（第二批）
- 迁移站点设置页面
- 迁移系统设置页面
- 创建主题配置页面
- 功能测试和验证

### 第 6 天：次要页面迁移（第一批）
- 迁移页面管理
- 迁移用户提交管理
- 迁移横幅管理
- 迁移用户管理

### 第 7 天：次要页面迁移（第二批）
- 迁移其他管理页面
- 功能测试和验证
- 修复发现的问题

### 第 8 天：清理和优化
- 删除 Ant Design 代码
- 卸载 Ant Design 依赖
- 性能优化
- 最终测试和文档

## 风险和缓解措施

### 风险 1：组件功能不完全对等
- **描述**：TDesign 某些组件功能可能与 Ant Design 不完全一致
- **影响**：可能需要额外开发或调整交互逻辑
- **缓解**：提前调研 TDesign 组件文档，准备备选方案

### 风险 2：样式冲突
- **描述**：TDesign 样式可能与现有样式冲突
- **影响**：页面显示异常或布局错乱
- **缓解**：使用 CSS 模块化，逐步迁移并测试

### 风险 3：性能问题
- **描述**：迁移后可能出现性能下降
- **影响**：用户体验变差
- **缓解**：使用性能分析工具，优化关键路径

### 风险 4：兼容性问题
- **描述**：TDesign 可能与某些浏览器或设备不兼容
- **影响**：部分用户无法正常使用
- **缓解**：在多种浏览器和设备上测试，准备 polyfill

### 风险 5：学习曲线
- **描述**：团队需要时间学习 TDesign
- **影响**：开发效率暂时下降
- **缓解**：提供培训文档，鼓励查阅官方文档

### 风险 6：迁移时间超预期
- **描述**：实际迁移时间可能超过 8 天
- **影响**：延迟其他开发计划
- **缓解**：采用渐进式迁移，优先保证核心功能

## 成功标准

迁移成功的标准：

1. **功能完整性**：所有现有功能正常工作，无功能缺失
2. **性能达标**：首屏加载时间 < 3 秒，页面切换流畅
3. **样式一致**：UI 风格统一，无明显样式问题
4. **代码质量**：代码结构清晰，遵循项目规范
5. **测试覆盖**：单元测试覆盖率 ≥ 80%，属性测试覆盖核心属性
6. **文档完善**：组件文档、迁移文档、使用指南完整
7. **无遗留代码**：完全移除 Ant Design 相关代码和依赖
8. **广告位保留**：所有广告位正常显示，链接可点击
9. **可访问性**：支持键盘导航和屏幕阅读器
10. **响应式**：在移动、平板、桌面设备上正常显示

## 参考资源

- [TDesign React 官方文档](https://tdesign.tencent.com/react/overview)
- [TDesign Icons React](https://tdesign.tencent.com/react/components/icon)
- [TDesign 设计指南](https://tdesign.tencent.com/design/overview)
- [Vite 配置文档](https://vitejs.dev/config/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [fast-check 文档](https://fast-check.dev/)
