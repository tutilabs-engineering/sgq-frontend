<template>
  <div class="content-novaStartup" v-if="!isFilled">
    <StartupCadastroPreenchido @returnCodeOp="ReturnCodeOp" :headerPreenchida="headerPreenchida"/>
    <TableCavidadePreenchido :techniqueInfo="techniqueInfo" />
    <TableComponentesPreenchido :componentsInfo="componentsInfo"/>
    
    <ListaPerguntasPreenchida :id_startup="id_startup" :qtdeCavidade="techniqueInfo.cavity" :code_product="data_startup.op.code_product"/>
    
    <BtnStartupCreate @returnFillStatus="changedShowQuestions" />
  </div>

  <div class="content-novaStartup"  v-else>
    <StartupCadastroPreenchido @returnCodeOp="ReturnCodeOp" :headerPreenchida="headerPreenchida"/>
    <TableCavidadePreenchido :techniqueInfo="techniqueInfo" />
    <TableComponentesPreenchido :componentsInfo="componentsInfo"/>
  </div>
</template>

<script>
import TableCavidadePreenchido from "../components/TableCavidadePreenchido/TableCavidadePreenchido.vue";
import TableComponentesPreenchido from "../components/TableComponentesPreenchido/TableComponentesPreenchido.vue";
import StartupCadastroPreenchido from "../components/StartupCadastroPreenchido/StartupCadastroPreenchido.vue";
import ListaPerguntasPreenchida from "../components/ListaPerguntasPreenchida/ListaPerguntasPreenchida.vue";
import BtnStartupCreate from "../components/BtnStartupCreate/BtnStartupCreate.vue";

import http from "../services/startup";

export default {
  data() {
    return {
      id_startup: this.$route.query.id,

      headerPreenchida: {
        code_op: "",
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
  
      isFilled: false,
      data_startup: {},

      componentsInfo: [],
      showQuestions: true,
    };
  },
  components: {
    StartupCadastroPreenchido,
    TableCavidadePreenchido,
    TableComponentesPreenchido,
    ListaPerguntasPreenchida,
    BtnStartupCreate,
  },
  created: async function() {
    this.$store.commit("$SETISLOADING");
    console.log(this.itsCreation)

     await http.findReportStartupById(this.id_startup).then( (res) => {
       this.data_startup = res.data;
       console.log(this.data_startup);
       this.headerPreenchida.code_op = this.data_startup.op.code_op
       this.headerPreenchida.client = this.data_startup.op.client
       this.headerPreenchida.codeClient = this.data_startup.op.code_client
       this.headerPreenchida.product = this.data_startup.op.desc_product
       this.headerPreenchida.codeProduct = this.data_startup.op.code_product
       this.headerPreenchida.quantity = "2" // verificar dps
       this.headerPreenchida.machine = this.data_startup.op.machine
       this.headerPreenchida.product_mold = this.data_startup.op.product_mold
       this.headerPreenchida.day = this.data_startup.day
       this.headerPreenchida.start_time = this.data_startup.created_at

       this.techniqueInfo.cavity = this.data_startup.op.cavity;
       this.techniqueInfo.cycle = this.data_startup.op.cycle;

       this.componentsInfo = this.data_startup.op.components

       this.isFilled = this.data_startup.filled
       console.log(this.isFilled);

     })

     this.$store.commit("$SETISLOADING");
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


      // //componentsInfo
     

      data.components.map( (item) => {
        this.componentsInfo.push( {
          description: item.description,
          item_number: item.ItemCode,
          planned: item.PlannedQty,
          um: item.UM
        })
      })


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
