import Vue from 'vue'
import Router from 'vue-router'
/*import Home from "../components/home/home.vue"*/
const Home = r => require.ensure([], () => r(require('../components/home/home.vue')), 'home')
import Knowledge from "../components/knowlege/knowlege.vue"
import KnowledgeDetail from "../components/knowlege/detail/knowlegeDetail.vue"
import Policy from "../components/policy/Poliy.vue"
import PoliyDetail from "../components/policy/detail/poliyDetail.vue"
import Story from "../components/story/story.vue"
import StoryDetail from "../components/story/detail/stoyDetail.vue"
import Login from "../components/login/login.vue"
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
      component:Login
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
      name:'knowledge',
      component: Knowledge,
      children: [{
        path: 'detail',
        name: 'KnowledgeDetail',
        component: KnowledgeDetail
      }]
    },
    {
      path: '/story',
      name:'story',
      component: Story,
      children: [{
        path: 'detail',
        name: 'StoryDetail',
        component: StoryDetail
      }]
    },
    {
      path: '*',
      component: Home
    },
  ]
})
