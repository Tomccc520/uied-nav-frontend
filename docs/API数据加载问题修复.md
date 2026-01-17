# API 数据加载问题修复

## 问题描述

分类页面（如 AI 页面）的分页显示 `totalItems: 0`，但热门推荐部分正常显示数据。

## 根本原因

1. **数据版本不同步**：`useAPINavigation` 加载 API 数据后，`dataSource` 从 `'loading'` 变为 `'api'`，但 `useNavigation` 中的 `navItems` 不会自动更新
2. **ID 格式不匹配**：静态数据使用 slug 格式 ID（如 `ai-bangong`），API 数据使用 CUID 格式 ID（如 `cmjl37nvt00007kl30z2cfkby`）
3. **初始化时机问题**：`initializeData` 只在组件挂载时调用一次，当数据源变化时不会重新执行

## 解决方案

### 1. 添加数据版本控制

在 `useAPINavigation.ts` 中添加 `dataVersion` 状态：

```typescript
const [dataVersion, setDataVersion] = useState(0);

// 在数据加载完成后递增版本号
setDataVersion(v => v + 1);
```

### 2. 传递数据版本到 useNavigation

```typescript
const navigationResult = useNavigation({
  navType,
  dataService: activeDataService,
  searchPageType,
  dataVersion // 传递数据版本以触发重新初始化
});
```

### 3. 监听数据版本变化

在 `useNavigation.ts` 中添加 `useEffect` 监听数据版本变化：

```typescript
useEffect(() => {
  if (dataVersion > 0) {
    console.log(`[useNavigation] 数据版本变化: ${dataVersion}，重新初始化数据`);
    initializeData();
  }
}, [dataVersion, initializeData]);
```

## 修改的文件

1. `frontend/src/hooks/useAPINavigation.ts` - 添加数据版本控制
2. `frontend/src/hooks/useNavigation.ts` - 接收数据版本参数并监听变化

## 验证方法

1. 打开浏览器控制台
2. 访问 AI 页面
3. 查看日志，应该看到：
   - `[useAPINavigation] ai - API数据加载成功，分类数量: 11`
   - `[useNavigation] 数据版本变化: 1，重新初始化数据`
   - `[useNavigation] 初始化数据 - navType: ai, navItems数量: 11`
   - `[useNavigation] 第一个navItem ID: cmjl37nvt00007kl30z2cfkby`（CUID 格式）

4. 分类区域应该正确显示数据和分页
