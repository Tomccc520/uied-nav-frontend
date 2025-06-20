import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 页面组件
import HomePage from './pages/Home';
import CategoryPage from './pages/Category';
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
import Layout from './components/layout/Layout';
import TestData from './components/TestData';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<UIUXPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/ai" element={<AIPage />} />
          <Route path="/uiux" element={<UIUXPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/3d" element={<ThreeDPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/interior" element={<InteriorPage />} />
          <Route path="/font" element={<FontPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/site/:id" element={<SitePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/test" element={<TestData />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
