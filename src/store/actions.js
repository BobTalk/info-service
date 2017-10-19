export  default {
  increment({commit}, n){
    commit('increment', n)
  },
  detail({commit}, n){
    commit('detail', n)
  },
  login({commit}, flag){
    commit('login', flag)
  }
}
