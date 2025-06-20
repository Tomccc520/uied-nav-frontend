/**
 * @file declarations.d.ts
 * @description 类型声明文件
 * @copyright 版权所有 (c) 2024 UIED技术团队
 * @website https://fsuied.com
 * @license MIT
 * @version 1.0.0
 */

// 声明antd模块
declare module 'antd' {
  export const Row: any;
  export const Col: any;
  export const Card: any;
  export const Typography: any;
  export const Tag: any;
  export const Space: any;
  export const Empty: any;
  export const Skeleton: any;
  export const Tooltip: any;
  export const Button: any;
  export const message: any;
  export const Spin: any;
}

// 声明@ant-design/icons模块
declare module '@ant-design/icons' {
  export const EyeOutlined: any;
  export const FireOutlined: any;
  export const ReloadOutlined: any;
  export const AppstoreOutlined: any;
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