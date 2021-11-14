/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}




// export {};
// declare var window: Window;
declare global {
  interface Window {
    M?: any;
  }
}