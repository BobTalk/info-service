import Vue from 'vue'
import Router from 'vue-router'
function generateComponentFunction (path) {
  return resolve => require([`@/components${path}`], resolve)
}
const Home = r => require.ensure([], () => r(require('../components/home/Home.vue')), 'home')
const Knowledge = generateComponentFunction('/knowlege/Knowlege.vue')
import Policy from "@/components/policy/Poliy.vue"
import Detail from "@/components/detail/Detail.vue"
import Story from "@/components/story/Story.vue"
import Login from "@/components/login/Login.vue"
import Dire from "@/components/carouselFigure/CarouseFadeIn.vue"
Vue.use(Router)
export default new Router({
  mode: "history",
  //切换路由的时候，内容都从顶上开始读
  scrollBehavior: () =>({y: 0}),
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
    },
    {
      path: '/detail',
      name: 'PoliyDetail',
      component: Detail
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge,
    },
    {
      path: '/detail',
      name: 'KnowledgeDetail',
      component: Detail
    },
    {
      path: '/story',
      name: 'story',
      component: Story,
    },
    {
      path: '/detail',
      name: 'StoryDetail',
      component: Detail
    },
    {
      path: '/directive',
      component: Dire
    },
    {
      path: '/detail',
      name: 'middleDetail',
      component: Detail
    },
    {
      path: '*',
      component: Home
    },
  ]
})
