import { createStore } from 'vuex'
import  userId  from '../utils/dataUser'

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
    createDataStartup: {
      code_op: "",
      user_id: "",
      header: {
          client: "",
          code_client: "",
          code_product: "",
          desc_product: "",
          product_mold: "",
          machine: "",
          day: "",
          start_time:"",
      },
      techniqueData: {
          cavity: 0,
          cycle: 0,
      },
      components:[],
    }
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
      state.code_op = data
    },

    async $SETDATACREATESTARTUP(state, {header, techniqueData, components}) {
     
      state.createDataStartup.code_op = state.code_op
      state.createDataStartup.header = header || state.createDataStartup.header
      state.createDataStartup.techniqueData = techniqueData || state.createDataStartup.techniqueData
      state.createDataStartup.components = components || state.createDataStartup.components
      
      console.log(state.createDataStartup);
    },

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
    },
    
    async $GETDATACREATESTARTUP(state){
       
      state.createDataStartup.user_id = await userId.DataUser().then((res)=>{
        return res.data.user.id
      })
      console.log(state.createDataStartup);
      return state.createDataStartup
    }
  }
})
