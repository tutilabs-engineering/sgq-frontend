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
  methods: {
    changedShowQuestions(e) {
      this.showQuestions = e;
    },

    ReturnCodeOp: async function(code_op) {
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
      const data = dataOp.data.data_op;
      this.headerInfo.client = data.client;
      this.headerInfo.codeClient = data.code_client;
      this.headerInfo.product = data.product;
      this.headerInfo.codeProduct = data.code_product;
      this.headerInfo.date = GetDateTime().GetDate();
      this.headerInfo.startTime = GetDateTime().GetStartHour();

      //techniqueData

      this.techniqueInfo.cavity = data.cavity;
      this.techniqueInfo.cycle = data.cycle;

      // //componentsInfo
      // this.componentsInfo = [...data.components]

      data.components.map( (item) => {
        this.componentsInfo.push( {
          description: item.description,
          item_number: item.ItemCode,
          planned: item.PlannedQty,
          um: item.UM
        })
      })


      
      this.data_startup = {...this.dataInfo, ...this.headerInfo, ...this.techniqueInfo}

      this.$store.commit("$SETDATACREATESTARTUP", {techniqueData: this.techniqueInfo, components: this.componentsInfo});

    }
  } 
};
</script>

<style scoped>
.content-novaStartup {
  width: 100%;
}
</style>
