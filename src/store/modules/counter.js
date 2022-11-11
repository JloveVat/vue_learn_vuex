const counter = {
  namespaced: true,
  state: () => ({
    count: 88
  }),
  mutations: {
    incrementCount(state) {
      state.count++
    }
  },
  getters: {
    doubleCount(state, getters, rootState) {
      return state.count + rootState.rootCounter
    }
  },
  actions: {
    incrementCountAction(context) {
      context.commit('incrementCount')
    }
  }
}

export default counter
