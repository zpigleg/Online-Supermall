import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';

import  toast from '@/components/common/toast'
Vue.config.productionTip = false;

//添加事件总线对象
Vue.prototype.$bus = new Vue();


//安装toast插件
Vue.use(toast);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
