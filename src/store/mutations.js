export default  {
  increment(state, n){
    for (var key in state.policyList) {
      if (state.policyList[key].NAME.length > n) {
        state.policyList[key].NAME = state.policyList[key].NAME.substr(0, n) + '......';
      }
    }
    return state.policyList
  }
}
