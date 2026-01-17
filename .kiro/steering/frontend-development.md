---
inclusion: fileMatch
fileMatchPattern: "frontend/**/*.{tsx,ts,css}"
---

# Frontend 开发规范

## 组件结构

每个组件使用独立文件夹:

```
/ComponentName
  index.tsx       # 组件逻辑
  index.css       # 组件样式
  index.mobile.css # 移动端样式 (可选)
```

## 组件模板

```tsx
import React from 'react';
import './index.css';

interface ComponentNameProps {
  title: string;
  onClick?: () => void;
}

const ComponentName: React.FC<ComponentNameProps> = ({ title, onClick }) => {
  return (
    <div className="component-name">
      <h2>{title}</h2>
    </div>
  );
};

export default ComponentName;
```

## CSS 规范

- 使用原生 CSS，不使用 Tailwind
- 类名使用 kebab-case: `.hero-banner`, `.tool-card`
- 组件根元素类名与组件名对应
- 响应式使用媒体查询:

```css
.component-name {
  padding: 20px;
}

@media (max-width: 768px) {
  .component-name {
    padding: 12px;
  }
}
```

## API 调用

使用 `apiDataService.ts`:

```tsx
import { apiDataService } from '../services/apiDataService';

// 在组件中
const [data, setData] = useState([]);
useEffect(() => {
  apiDataService.getCategories().then(setData);
}, []);
```

## React Query 使用

```tsx
import { useQuery } from '@tanstack/react-query';

const { data, isLoading, error } = useQuery({
  queryKey: ['websites', categoryId],
  queryFn: () => apiDataService.getWebsites(categoryId),
});
```

## 自定义 Hooks

放在 `/hooks` 目录:

```tsx
// hooks/usePageConfig.ts
export const usePageConfig = (slug: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['pageConfig', slug],
    queryFn: () => apiDataService.getPageConfig(slug),
  });
  return { config: data, isLoading };
};
```

## 路由配置

使用 React Router v7，路由在 `App.tsx` 配置。

## 图标使用

### react-icons（推荐）

前端使用 react-icons:

```tsx
import { FiSearch, FiMenu } from 'react-icons/fi';
<FiSearch size={20} />
```

### 自定义 SVG 图标（推荐）

对于需要自定义的图标，在组件内定义 SVG 组件：

```tsx
// 图标组件定义
const IconLink: React.FC<{ size?: number }> = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);
```

### 图标映射

当后台传递图标标识符时，使用映射表：

```tsx
const Icons: Record<string, React.FC<{ size?: number }>> = {
  link: IconLink,
  qrcode: IconQRCode,
  // ...
};

// 使用
const IconComponent = Icons[iconKey] || Icons.link;
return <IconComponent size={18} />;
```

### 注意事项

- 前端项目（CRA）不要使用 `@untitled-ui/icons-react`，该包与 webpack ESM 模块解析不兼容
- 后台管理（Vite）可以使用 `@untitled-ui/icons-react`

## 设计规范

- 不使用阴影，使用边框和 `translateY` 实现悬浮效果
- 使用 CSS 变量：`--primary-color`, `--border-color`, `--text-primary` 等
- 不使用 emoji 作为图标，使用 SVG 图标
