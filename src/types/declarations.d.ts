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
  type WordPressParams = Record<string, unknown>;
  type WordPressPost = Record<string, unknown>;

  const wordPressApi: {
    getLatestPosts: (params?: WordPressParams) => Promise<WordPressPost[]>;
    getCategoryPosts: (params?: WordPressParams) => Promise<WordPressPost[]>;
    getTagPosts: (params?: WordPressParams) => Promise<WordPressPost[]>;
    searchPosts: (params?: WordPressParams) => Promise<WordPressPost[]>;
    clearCache: (type: string) => void;
  };
  export default wordPressApi;
} 
