/**
 * @file hooks/useLicense.ts
 * @description 许可证状态管理 Hook - 控制前端 Pro 功能显示
 * @author Tomda
 * @copyright 版权所有 (c) 2026 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

import { useEffect, useState } from 'react';

/**
 * ============================================
 * 🔧 开发环境配置 - 测试 Pro 功能
 * ============================================
 * 
 * 修改下面的 DEV_LICENSE_TYPE 来切换许可证类型：
 * - 'free'       : 免费版（默认，只显示基础功能）
 * - 'personal'   : 个人版（显示评分、评论、收藏、分享等）
 * - 'enterprise' : 企业版（显示所有功能）
 * 
 * 注意：仅在开发环境生效，生产环境会从 API 获取真实许可证
 */
const DEV_LICENSE_TYPE: 'free' | 'personal' | 'enterprise' = 'enterprise';

/**
 * 是否启用开发模式（强制使用 DEV_LICENSE_TYPE）
 * 设为 true 时，忽略 API 返回的许可证，使用上面配置的类型
 */
const DEV_MODE_ENABLED = process.env.NODE_ENV === 'development';

/**
 * 许可证类型定义
 */
interface License {
  type: 'free' | 'personal' | 'enterprise';
  features: string[];
  expiresAt?: string;
}

/**
 * 许可证 Hook 返回值类型
 */
interface UseLicenseReturn {
  license: License;
  hasFeature: (feature: string) => boolean;
  isPro: () => boolean;
  isEnterprise: () => boolean;
  isLoading: boolean;
}

/**
 * 许可证管理 Hook
 * 用于检查用户的许可证状态和功能权限
 * 
 * @returns {UseLicenseReturn} 许可证信息和辅助函数
 * 
 * @example
 * function MyComponent() {
 *   const { hasFeature, isPro } = useLicense();
 *   
 *   return (
 *     <div>
 *       {hasFeature('ratings') && <RatingWidget />}
 *       {isPro() && <ProBadge />}
 *     </div>
 *   );
 * }
 */
export const useLicense = (): UseLicenseReturn => {
  const [license, setLicense] = useState<License>({
    type: 'free',
    features: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 获取许可证信息
    const fetchLicense = async () => {
      try {
        // 开发模式：使用配置的许可证类型
        if (DEV_MODE_ENABLED) {
          const devFeatures = getDevFeatures(DEV_LICENSE_TYPE);
          setLicense({
            type: DEV_LICENSE_TYPE,
            features: devFeatures,
          });
          console.log(`🔧 开发模式: 使用 ${DEV_LICENSE_TYPE} 许可证，功能:`, devFeatures);
          setIsLoading(false);
          return;
        }
        
        // @pro-feature-start: license-api
        // 商业版：从 API 获取许可证信息
        // const response = await api.get('/api/license/info');
        // setLicense(response.data);
        // @pro-feature-end: license-api
        
        // 开源版：默认为免费版
        setLicense({
          type: 'free',
          features: [],
        });
      } catch (error) {
        console.error('获取许可证信息失败:', error);
        // 失败时默认为免费版
        setLicense({
          type: 'free',
          features: [],
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchLicense();
  }, []);

  /**
   * 检查是否有权限使用指定功能
   * @param feature - 功能名称
   * @returns 是否有权限
   */
  const hasFeature = (feature: string): boolean => {
    return license.features.includes(feature);
  };

  /**
   * 检查是否为 Pro 用户（个人版或企业版）
   * @returns 是否为 Pro 用户
   */
  const isPro = (): boolean => {
    return license.type === 'personal' || license.type === 'enterprise';
  };

  /**
   * 检查是否为企业版用户
   * @returns 是否为企业版用户
   */
  const isEnterprise = (): boolean => {
    return license.type === 'enterprise';
  };

  return {
    license,
    hasFeature,
    isPro,
    isEnterprise,
    isLoading,
  };
};

/**
 * 根据许可证类型获取开发环境的功能列表
 * @param licenseType - 许可证类型
 * @returns 功能列表
 */
function getDevFeatures(licenseType: 'free' | 'personal' | 'enterprise'): string[] {
  const freeFeatures = [
    'website_management',
    'category_management',
    'page_management',
    'basic_search',
    'basic_detail',
    'import_export',
    'favicon_fetch',
  ];
  
  const personalFeatures = [
    ...freeFeatures,
    'ratings',
    'comments',
    'favorites',
    'sharing',
    'related_websites',
    'browsing_history',
    'articles',
    'article_comments',
    'advanced_search',
    'no_ads',
  ];
  
  const enterpriseFeatures = [
    ...personalFeatures,
    'statistics',
    'monitoring',
    'advanced_seo',
    'api_access',
    'multi_user',
    'data_export',
    'custom_branding',
  ];
  
  switch (licenseType) {
    case 'enterprise':
      return enterpriseFeatures;
    case 'personal':
      return personalFeatures;
    default:
      return freeFeatures;
  }
}

/**
 * 功能名称常量
 * 与后端 features.js 保持一致
 */
export const FEATURES = {
  // 开源版功能
  WEBSITE_MANAGEMENT: 'website_management',
  CATEGORY_MANAGEMENT: 'category_management',
  PAGE_MANAGEMENT: 'page_management',
  BASIC_SEARCH: 'basic_search',
  BASIC_DETAIL: 'basic_detail',
  IMPORT_EXPORT: 'import_export',
  FAVICON_FETCH: 'favicon_fetch',
  
  // 个人版功能
  // @pro-feature-start: feature-constants
  RATINGS: 'ratings',
  COMMENTS: 'comments',
  FAVORITES: 'favorites',
  SHARING: 'sharing',
  RELATED_WEBSITES: 'related_websites',
  BROWSING_HISTORY: 'browsing_history',
  ARTICLES: 'articles',
  ARTICLE_COMMENTS: 'article_comments',
  ADVANCED_SEARCH: 'advanced_search',
  NO_ADS: 'no_ads',
  
  // 企业版功能
  STATISTICS: 'statistics',
  MONITORING: 'monitoring',
  ADVANCED_SEO: 'advanced_seo',
  API_ACCESS: 'api_access',
  MULTI_USER: 'multi_user',
  DATA_EXPORT: 'data_export',
  CUSTOM_BRANDING: 'custom_branding',
  // @pro-feature-end: feature-constants
} as const;
