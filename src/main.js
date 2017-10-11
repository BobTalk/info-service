import Vue from 'vue'
import App from './App'
import store from  './store'
import router from './router'
import VueRouter from "vue-router"
import vueResource from 'vue-resource'
import './style/reset.css'
Vue.use(vueResource);
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
