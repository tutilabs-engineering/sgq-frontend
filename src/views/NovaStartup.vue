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


      this.techniqueInfo.cavity = "";
      this.techniqueInfo.cycle = "";

      this.componentsInfo = []
      console.log(this.componentsInfo);

    },

    ReturnCodeOp: async function(code_op) {
      if(code_op === ""){
        this.resetStartup()
      }
      this.dataInfo.code_op = code_op
      function GetDateTime(){
        function GetDate() {
          const date = new Date();
          let day = date.getDay();
          let month = date.getMonth() + 1;
          const year = date.getFullYear();

          if (day !== 1) {
            day = day - 1;
          }
          if (day.toString().length === 1) {
            day = `0${day}`;
          }
          if (month < 10) {
            month = `0${month}`;
          }

          return `${year}-${month}-${day}`;
        }
        function GetStartHour() {
          const date = new Date();

          let hour = date.getHours();
          let minutes = date.getMinutes();

          if (hour < 10) {
            return `0${hour}:${minutes}`;
          }
          return `${hour}:${minutes}`;
        }
        return { GetDate, GetStartHour };
      }

      const dataOp = await http.listDataByCodeOp(code_op);
      const data = dataOp.data.results[0];
      this.headerInfo.client = data.CardName;
      this.headerInfo.codeClient = data.U_CodCliente;
      this.headerInfo.product = data.ProdName;
      this.headerInfo.codeProduct = data.ItemCode;
      this.headerInfo.date = GetDateTime().GetDate();
      this.headerInfo.startTime = GetDateTime().GetStartHour();

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

      console.log(this.componentsInfo);

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
