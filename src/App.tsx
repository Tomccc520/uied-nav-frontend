/**
 * @file App.tsx
 * @description 前端用户界面组件
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

// Context
import { SiteProvider } from './contexts/SiteContext';

// 页面组件
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';
import TagPage from './pages/Tag';
import SitePage from './pages/Site';
import SearchPage from './pages/Search';
import ProfilePage from './pages/Profile';
import AIPage from './pages/AI';
import UIUXPage from './pages/UIUX';
import DesignPage from './pages/Design';
import ThreeDPage from './pages/3D';
import EcommercePage from './pages/Ecommerce';
import InteriorPage from './pages/Interior';
import FontPage from './pages/Font';
import SubmitPage from './pages/Submit';
import ChangelogPage from './pages/Changelog';
import NotFoundPage from './pages/NotFound';
import WebsiteDetail from './pages/WebsiteDetail';
import Layout from './components/layout/Layout';
import DynamicPage from './components/DynamicPage';

// @pro-feature-start: articles
import { ArticleList, ArticleDetail } from './pages/Articles';
// @pro-feature-end: articles
import './App.css';

// 动态页面路由组件
const DynamicPageRoute: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <DynamicPage slug={slug || ''} />;
};

function App() {
  return (
    <SiteProvider>
      <Router>
        <Layout>
          <Routes>
            {/* 固定页面路由 - 使用静态数据的页面 */}
            <Route path="/" element={<UIUXPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/uiux" element={<UIUXPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/3d" element={<ThreeDPage />} />
            <Route path="/ecommerce" element={<EcommercePage />} />
            <Route path="/interior" element={<InteriorPage />} />
            <Route path="/font" element={<FontPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/tag" element={<TagPage />} />
            <Route path="/tag/:slug" element={<TagPage />} />
            <Route path="/site/:id" element={<SitePage />} />
            <Route path="/website/:idOrSlug" element={<WebsiteDetail />} />
            
            {/* @pro-feature-start: articles */}
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/article/:slug" element={<ArticleDetail />} />
            {/* @pro-feature-end: articles */}
            
            <Route path="/search" element={<SearchPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/submit" element={<SubmitPage />} />
            <Route path="/changelog" element={<ChangelogPage />} />
            
            {/* 动态页面路由 - 后台新建的页面通过 /p/xxx 访问 */}
            <Route path="/p/:slug" element={<DynamicPageRoute />} />
            
            {/* 404页面 - 必须放在最后 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </SiteProvider>
  );
}

export default App;
