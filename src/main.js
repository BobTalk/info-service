import Vue from 'vue'
import App from './App'
import store from  './store'
import router from './router'
import VueRouter from "vue-router"
/*import vueResource from 'vue-resource'*/
/*Vue.use(vueResource);*/
import Axios from 'axios'
Vue.prototype.$http = Axios
import './style/reset.css'
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
