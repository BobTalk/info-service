import Vue from 'vue'
import Router from 'vue-router'
/*import Home from "../components/home/Home.vue"*/
const Home = r => require.ensure([], () => r(require('../components/home/Home.vue')), 'home')
import Knowledge from "../components/knowlege/Knowlege.vue"
import KnowledgeDetail from "../components/knowlege/detail/KnowlegeDetail.vue"
import Policy from "../components/policy/Poliy.vue"
import PoliyDetail from "../components/policy/detail/PoliyDetail.vue"
import Story from "../components/story/Story.vue"
import StoryDetail from "../components/story/detail/StoyDetail.vue"
import CarveoutDetail from "../components/carveout/detail/CarveoutDetail.vue"
import Login from "../components/login/Login.vue"
Vue.use(Router)
export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      /*redirect: 'home'*/
      component: Login
    },
    {
      path: '/policy',
      name: 'policy',
      component: Policy,
      children: [{
        path: 'detail',
        name: 'PoliyDetail',
        component: PoliyDetail
      }]
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge,
      children: [{
        path: 'detail',
        name: 'KnowledgeDetail',
        component: KnowledgeDetail
      }]
    },
    {
      path: '/story',
      name: 'story',
      component: Story,
      children: [{
        path: 'detail',
        name: 'StoryDetail',
        component: StoryDetail
      }]
    },
    {
      path: '/carveout',
      component: '',
      children: [{
        path: 'detail',
        name:'CarveoutDetail',
        component: CarveoutDetail
      }]
    },
    {
      path: '*',
      component: Home
    },
  ]
})
