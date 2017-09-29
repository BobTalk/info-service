export  default {
  increment({commit}, n){
    commit('increment', n)
  },
  login({commit}, flag){
    commit('login', flag)
  }
}
