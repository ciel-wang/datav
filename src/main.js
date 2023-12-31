import Vue from 'vue'
import ElementUI from 'element-ui';
import axios from './axios'
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'
import router from './router.js';
import { website } from '@/config.js'
import App from './App.vue'
import './styles/common.scss'
import '@/utils/es6'
import '@/mock/'
//导入主题文件
import '@/theme/index.js'
import '../public/iconfont/iconfont.js'
import '../public/iconfont/iconfont.css'

Vue.config.productionTip = false
window.axios = axios;
document.title = website.title
Vue.use(ElementUI);
Vue.use(window.AVUE);
Vue.prototype.$website = website;
Vue.use(dataV)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
