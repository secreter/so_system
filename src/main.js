import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store/index'
import router from './router/index'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,  //从根组件全局注入store
  router,
  template: '<App/>',
  components: { App }
})
