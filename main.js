// #ifdef VUE3
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from './App.vue'
import './static/css/global.scss'

export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())
  return {
    app,
    Pinia, // 此处必须将 Pinia 返回
  }
}
// #endif
