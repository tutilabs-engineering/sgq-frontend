<template>
  <div class="content-novaStartup">
    <StartupCadastro @returnCodeOp="ReturnCodeOp" :headerInfo="headerInfo" />
    <TableCavidade :techniqueInfo="techniqueInfo" />
    <TableComponentes :componentsInfo="componentsInfo"/>

    <div v-if="showQuestions">
      <ListaPerguntas :qtdeCavidade="techniqueInfo.cavity" :code_product="headerInfo.codeProduct"/>
    </div>
    <BtnStartupCreate @returnFillStatus="changedShowQuestions" />
  </div>
</template>

<script>
import TableCavidade from "../components/TableCavidade/TableCavidade.vue";
import TableComponentes from "../components/TableComponentes/TableComponentes.vue";
import StartupCadastro from "../components/StartupCadastro/StartupCadastro.vue";
import ListaPerguntas from "../components/ListaPerguntas/ListaPerguntas.vue";
import BtnStartupCreate from "../components/BtnStartupCreate/BtnStartupCreate.vue";

import http from "../services/startup";

import dayjs from 'dayjs'

export default {
  data() {
    return {

      id_startup: this.$route.query.id,
      itsCreation: true,
      headerInfo: {
        client: "",
        codeClient: "",
        product: "",
        codeProduct: "",
        quantity: "",
        machine: "",
        product_mold: "",
        date: "",
        startTime: "",
      },
      techniqueInfo: {
        cavity: "",
        cycle: "",
      },
      dataInfo: {
        code_op: "",
        user_id: ""
      },
  
      data_startup: {},

      componentsInfo: [],
      showQuestions: false,
    };
  },
  components: {
    StartupCadastro,
    TableCavidade,
    TableComponentes,
    ListaPerguntas,
    BtnStartupCreate,
  },
  created: async function() {
    if(this.id_startup) {
      this.itsCreation = false
    }
  },
  methods: {
    changedShowQuestions(e) {
      this.showQuestions = e;
    },

    resetStartup() {
      this.headerInfo.client = "";
      this.headerInfo.codeClient = "";
      this.headerInfo.product = "";
      this.headerInfo.codeProduct = "";
      this.headerInfo.date = "";
      this.headerInfo.startTime = "";
      this.headerInfo.quantity = "";

      this.techniqueInfo.cavity = "";
      this.techniqueInfo.cycle = "";

      this.componentsInfo = []

    },

    ReturnCodeOp: async function(code_op) {
      if(code_op === ""){
        this.resetStartup()
      }
      this.dataInfo.code_op = code_op

      // const dataOp = await http.listDataByCodeOp(code_op);
      const dataOp = await http.listDataByCodeOp(code_op).then( (res) => {
        console.log(res);
        return res
      }).catch( (error) => {
        console.log(error.response.data.message);
        const Toast = this.$swal.mixin({
                    toast: true,
                    position: 'top-right',
                    iconColor: '#ff5349',
                    customClass: {
                    popup: 'colored-toast',
                    title: 'title-swal-text'
                    },
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                    },
                    showConfirmButton: false,
                    timer: 10000,
                    timerProgressBar: true
                })
                Toast.fire({
                        icon: 'warning',
                        title: 'SAP indisponível\nTente novamente em 10 minutos',
                        background: "#fff",
                })
                
        
      })

      const data = dataOp.data.results[0];
      this.headerInfo.client = data.CardName;
      this.headerInfo.codeClient = data.U_CodCliente;
      this.headerInfo.product = data.ProdName;
      this.headerInfo.quantity = data.PlannedQty;
      this.headerInfo.codeProduct = data.ItemCode;
      this.headerInfo.date = dayjs(new Date()).locale('pt-br').format()
      this.headerInfo.startTime = dayjs(new Date()).locale('pt-br').format()

      //techniqueData

      this.techniqueInfo.cavity = data.U_EP_Cav;
      this.techniqueInfo.cycle = data.U_EP_CIC;

      // //componentsInfo
     
     this.componentsInfo = []

      data.Itens.map( (item) => {
        this.componentsInfo.push( {
          description: item.Descrição,
          item_number: item.ItemCode,
          planned: item.PlannedQty,
          um: item.InvntryUom
        })
      })

      this.$store.commit("$SETDATACREATESTARTUP", {techniqueData: this.techniqueInfo, components: this.componentsInfo});

    },

  } 
};
</script>

<style scoped>
.content-novaStartup {
  width: 100%;
}
</style>
