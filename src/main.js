import Vue from 'vue'
import App from './App'
import store from  './store'
import router from './router'
import VueRouter from "vue-router"
import vueR from 'vue-resource'
Vue.use(vueR);
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
