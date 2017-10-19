export default  {
  increment(state, n){
    for (var key in state.policyList) {
      if (state.policyList[key].NAME.length > n) {
        n = n ||25;
        state.policyList[key].NAME = state.policyList[key].NAME.substr(0, n) + '......';
      }
    }
    return state.policyList
  },
  detail(state, n){
    for (var key in state.contentDetail) {
      if (state.contentDetail[key].NAME.length > n) {
        n = n ||25;
        state.contentDetail[key].NAME = state.contentDetail[key].NAME.substr(0, n) + '......';
      }
    }
    return state.contentDetail
  },
  login(state, flag){
    return state.loginFlag = flag
  }
}
