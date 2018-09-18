import Vue from 'vue'
import App from './App'
import router from './router'

//创建Vuex的store,使用分离store的方法，引入vuex
// import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Mock from './mock/index'
Mock.init()

import axios from 'axios'
Vue.prototype.$ajax = axios

// axios不能直接使用use引入，只能每个需要发送请求的组件中即时引入，两种引入方式
// 第一种引入方式：引入axios后，修改原型链
// import axios from 'axios'
// Vue.prototype.$axios = axios

Vue.config.productionTip = false;
Vue.use(ElementUI);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
//   store,  // 使用store
  components: { App },
  template: '<App/>'
})