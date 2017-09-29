import Vue from 'vue'
import Vuex from 'vuex'
import getters from '../store/getters'
import mutations from '../store/mutations'
import actions from '../store/actions'
Vue.use(Vuex)
const state =
{
  loginFlag:false,
  policyList: [],
  knowledgeList: [],
  storyList: [],
  indexList: []
}
export  default  new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
