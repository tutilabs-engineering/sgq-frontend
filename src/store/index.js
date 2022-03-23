import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: ""
    },
    dataOP: {},
    isLoading: false,
    qtdePerguntasPadroesRespondidas: 0,
    qtdePerguntasEspecificasRespondidas: 0
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
    },
    $SETQTDEPERGUNTASPADROES(state){
      state.qtdePerguntasPadroesRespondidas += 1
    },

    $SETQTDEPERGUNTASESPECIFICAS(state){
      
      state.qtdePerguntasEspecificasRespondidas += 1
      console.log(state.qtdePerguntasEspecificasRespondidas)
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
    },
    $GETQTDEPERGUNTASPADROES (state){
      return state.qtdePerguntasPadroesRespondidas
    },
    $GETQTDEPERGUNTASESPECIFICAS(state){
      return state.qtdePerguntasEspecificasRespondidas
    }
  }
})
