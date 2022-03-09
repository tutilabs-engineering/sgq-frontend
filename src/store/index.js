import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: ""
    },
    dataOP: {},
    isLoading: false,
  },
  mutations: {
    $SETUSER (state, newName) {
      state.user.name = newName;
    },
    $SETISLOADING (state){
      state.isLoading = !state.isLoading;
    },
    $SETDATAOP(state, data){
      state.dataOP = data
    }
  },
  actions: {
  },
  getters: {
    $GETISLOADING (state) {
      return state.isLoading
    },
    $GETDATAOP (state) {
      return state.dataOP
    }
  }
})
