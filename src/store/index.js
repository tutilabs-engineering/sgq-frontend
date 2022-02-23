import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: ""
    }
  },
  mutations: {
    $SETUSER (state, newName) {
      state.user.name = newName;
    }
  },
  actions: {
  },
  getters: {
    
  }
})
