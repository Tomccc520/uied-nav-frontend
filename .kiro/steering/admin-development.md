---
inclusion: fileMatch
fileMatchPattern: "admin/**/*.{tsx,ts}"
---

# Admin 管理后台开发规范

## 技术栈

- React 19 + TypeScript + Vite
- Ant Design 6 (UI 组件库)
- React Router v7

## 页面模板

```tsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Modal, Form, Input, message, Space } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const PageName: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/endpoint`);
      if (res.data.success) {
        setData(res.data.data);
      }
    } catch (error) {
      message.error('获取数据失败');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    { title: '名称', dataIndex: 'name', key: 'name' },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button danger icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setModalVisible(true)}>
          新增
        </Button>
      </div>
      <Table columns={columns} dataSource={data} loading={loading} rowKey="id" />
    </div>
  );
};

export default PageName;
```

## Ant Design 常用组件

- 表格: `Table` + `columns` 配置
- 表单: `Form` + `Form.Item` + `useForm()`
- 弹窗: `Modal` + `visible` 状态控制
- 消息: `message.success()`, `message.error()`
- 确认框: `Modal.confirm({ title, onOk })`

## 图标使用

```tsx
// Ant Design 图标
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';

// Untitled UI 图标 (更现代)
import { Settings01, Users01 } from '@untitled-ui/icons-react';
```

## API 请求

```tsx
const token = localStorage.getItem('token');

// GET
const res = await axios.get(`${API_BASE}/endpoint`, {
  headers: { Authorization: `Bearer ${token}` }
});

// POST
const res = await axios.post(`${API_BASE}/endpoint`, data, {
  headers: { Authorization: `Bearer ${token}` }
});

// DELETE
await axios.delete(`${API_BASE}/endpoint/${id}`, {
  headers: { Authorization: `Bearer ${token}` }
});
```

## 表单验证

```tsx
<Form.Item
  name="name"
  label="名称"
  rules={[{ required: true, message: '请输入名称' }]}
>
  <Input placeholder="请输入名称" />
</Form.Item>

<Form.Item
  name="url"
  label="链接"
  rules={[
    { required: true, message: '请输入链接' },
    { type: 'url', message: '请输入有效的URL' }
  ]}
>
  <Input placeholder="https://" />
</Form.Item>
```

## 文件命名

- 页面: `Pages.tsx`, `Categories.tsx` (首字母大写)
- 组件: `IconPicker.tsx`, `ImageUpload.tsx`

## 开发注意事项

### 热更新与构建

- 开发模式下 Vite 会自动热更新，但有时需要手动刷新浏览器（Ctrl+Shift+R / Cmd+Shift+R）
- 修改路由配置、布局文件后可能需要重启开发服务器
- 生产环境部署前必须重新构建：`npm run build`

### 设计规范

- 管理后台的设计应与前端用户界面保持一致
- 不使用 emoji 作为图标，使用 Ant Design 图标或 SVG
- 图标选择器应提供预设的图标列表，而非自由输入
- 表单设计应简洁，避免过多的配置项

### 图标使用规范

- 后台图标选择器使用文本标识符（如 `link`, `qrcode`, `wechat`）
- 前端根据标识符映射到对应的 SVG 图标组件
- 不要使用 emoji 作为图标，保持设计一致性
- 图标标识符列表：
  - `link` - 链接
  - `qrcode` - 二维码
  - `wechat` - 微信
  - `weibo` - 微博
  - `group` - 群组
  - `phone` - 手机
  - `message` - 消息
  - `star` - 收藏
  - `social` - 社交媒体
  - `community` - 官方社群
  - `official` - 公众号
