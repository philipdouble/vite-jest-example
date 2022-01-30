import 'element-plus/theme-chalk/index.css'

import App from './App.vue'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import { createHead } from "@vueuse/head";
import router from "./router/index";

const head = createHead();

createApp(App)
  .use(head)
  .use(router)
  // .use(store)
  .use(ElementPlus)
  .mount('#app')
