<template>
  <div class="content-novaStartup">
    <!-- <Header titlePage="Nova Startup"/> -->
    <h2 class="title">Start-Injeção</h2>
    <StartupCadastro @returnCodeOp="ReturnCodeOp" :headerInfo="headerInfo" />
    <TableCavidade :techniqueInfo="techniqueInfo"/>
    <TableComponentes :componentsInfo="componentsInfo"/>
    <ListaPerguntas />
  </div>
</template>

<script>
// import Header from "../components/Header/Header.vue";
import TableCavidade from "../components/TableCavidade/TableCavidade.vue";
import TableComponentes from "../components/TableComponentes/TableComponentes.vue";
import StartupCadastro from "../components/StartupCadastro/StartupCadastro.vue";
import ListaPerguntas from "../components/ListaPerguntas/ListaPerguntas.vue";

import http from "../services/startup"

export default {
  data() {
    return {
      headerInfo: {
        client: "",
        codeClient: "",
        product: "",
        codeProduct: "",
        quantity: "",
        date: "",
        startTime: "",
        endTime: "",
      },
      techniqueInfo: {
        cavity: "",
        cycle: "",
      },
      componentsInfo: []
    }
  },
  components: {
    // Header,
    StartupCadastro,
    TableCavidade,
    TableComponentes,
    ListaPerguntas,
  },
  methods: {
    ReturnCodeOp: async function(code_op) {
      //headerInfo

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

          if(hour < 10) {
            return `0${hour}:${minutes}`;
          }
          return `${hour}:${minutes}`;
          
        }
        return { GetDate, GetStartHour }
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

      //componentsInfo
      this.componentsInfo = [...data.components]
    }
  } 
};
</script>

<style scoped>
.content-novaStartup {
  width: 100%;
}

.title {
  margin-top: 12vh;
  text-align: center;
}

.subtitle {
  margin-top: 3vh;
  text-align: center;
}
</style>
