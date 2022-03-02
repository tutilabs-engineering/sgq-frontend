import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: ""
    },
    isLoading: false,
  },
  mutations: {
    $SETUSER (state, newName) {
      state.user.name = newName;
    },
    $SETISLOADING (state){
      state.isLoading = !state.isLoading;
    }
  },
  actions: {
  },
  getters: {
    $GETISLOADING (state) {
      return state.isLoading
    }
  }
})
