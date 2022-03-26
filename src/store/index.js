import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: ""
    },
    dataOP: {},
    isLoading: false,
    qtdePerguntasPadroesRespondidas: 0,
    qtdePerguntasEspecificasRespondidas: 0,
    qtdeEspecificas: 0,
    code_op: "",
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
    },
    $SETQTDEESPECIFICAS (state) {
      state.qtdeEspecificas += 1
    },

    $SETCODEOP (state, data) {
      console.log(state)
      state.code_op = data
      console.log(state.code_op)
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
    $GETQTDEPERGUNTASESPECIFICAS (state){
      return state.qtdePerguntasEspecificasRespondidas
    },
    $GETQTDEESPECIFICAS (state) {
      return state.qtdeEspecificas
    },

    $GETCODEOP (state) {
      return state.code_op
    }
  }
})
