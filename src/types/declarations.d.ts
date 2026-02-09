/**
 * @file declarations.d.ts
 * @description 类型声明文件
 * @copyright 版权所有 (c) 2024 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// PNG 文件声明
declare module '*.png' {
  const src: string;
  export default src;
}

// 声明lodash/throttle模块
declare module 'lodash/throttle' {
  const throttle: (func: Function, wait: number) => Function;
  export default throttle;
}

// 声明wordpress-api模块
declare module '../services/wordpress-api' {
  const wordPressApi: {
    getLatestPosts: (params?: any) => Promise<any[]>;
    getCategoryPosts: (params?: any) => Promise<any[]>;
    getTagPosts: (params?: any) => Promise<any[]>;
    searchPosts: (params?: any) => Promise<any[]>;
    clearCache: (type: string) => void;
  };
  export default wordPressApi;
} 