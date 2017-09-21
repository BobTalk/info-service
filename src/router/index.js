import Vue from 'vue'
import Router from 'vue-router'
/*import Home from "../components/home/home.vue"*/
const Home = r => require.ensure([], () => r(require('../components/home/home.vue')), 'home')
import Knowledge from "../components/knowlege/knowlege.vue"
import Policy from "../components/policy/Poliy.vue"
import Story from "../components/story/story.vue"
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
      path: '/loginout',
      redirect: 'home'
    },
    {
      path: '/policy',
      name: 'policy',
      component: Policy
    },
    {
      path: '/policy/:id',
      component: Policy
    },
    {
      path: '/knowledge',
      component: Knowledge
    },
    {
      path: '/knowledge/:id',
      component: Knowledge
    },
    {
      path: '/story',
      component: Story
    },
    {
      path: '/story/:id',
      component: Story
    }
  ]
})
