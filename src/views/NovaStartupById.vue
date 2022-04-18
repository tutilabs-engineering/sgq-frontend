<template>
  <div class="content-novaStartup" v-if="!isFilled">
    <StartupCadastroPreenchido @returnCodeOp="ReturnCodeOp" :headerPreenchida="headerPreenchida"/>
    <TableCavidadePreenchido :techniqueInfo="techniqueInfo" />
    <TableComponentesPreenchido :componentsInfo="componentsInfo"/>
    
    <ListaPerguntasPreenchida :id_startup="id_startup" :qtdeCavidade="techniqueInfo.cavity" :code_product="data_startup.op.code_product"/>
    
    <!-- <BtnStartupCreate @returnFillStatus="changedShowQuestions" /> -->
   <div class="group-buttons">
  <div class="btns-options">
      <button class="btn-cancel btn">Cancelar</button>
      <button class="btn-save btn" @click="saveFillReportStartup">Preencher</button>
  </div>
  </div>
  </div>
  <div class="content-novaStartup"  v-else>

    <StartupCadastroPreenchido @returnCodeOp="ReturnCodeOp" :headerPreenchida="headerPreenchida"/>
    <TableCavidadePreenchido :techniqueInfo="techniqueInfo" />
    <TableComponentesPreenchido :componentsInfo="componentsInfo"/>

    <!-- <ListaPerguntas :startupData="data_startup" /> -->
  </div>
</template>

<script>
import TableCavidadePreenchido from "../components/TableCavidadePreenchido/TableCavidadePreenchido.vue";
import TableComponentesPreenchido from "../components/TableComponentesPreenchido/TableComponentesPreenchido.vue";
import StartupCadastroPreenchido from "../components/StartupCadastroPreenchido/StartupCadastroPreenchido.vue";
import ListaPerguntasPreenchida from "../components/ListaPerguntasPreenchida/ListaPerguntasPreenchida.vue";
// import ListaPerguntas from '../components/ListaPerguntas/ListaPerguntas.vue'
// import BtnStartupCreate from "../components/BtnStartupCreate/BtnStartupCreate.vue";

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

      perguntasRespondidas: this.data_startup
    };
  },
  components: {
    StartupCadastroPreenchido,
    TableCavidadePreenchido,
    TableComponentesPreenchido,
    ListaPerguntasPreenchida,
    // ListaPerguntas,
    // BtnStartupCreate,
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

     if(this.isFilled) {
         
        this.$router.push({ name: 'EmConstrucao' })
        
       }

     
  },
  methods: {

   async saveFillReportStartup(){
    //
     this.$store.commit("$SETISLOADING");

    const data =  this.$store.getters.$GETDATAFILLREPORTSTARTUP
    const form = new FormData()
 
    data.default_question.map((item)=>{
    if(item.file != null){
      form.append(`${item.fk_default_question}`,item.file)
            item.file = ""
      }
    })
    
    data.specific_questions.map((item)=>{
      if(item.file != null){
        form.append(`${item.fk_specific_question}`,item.file)
        item.file = ""
        }
    })

    form.append("img_1",data.img_1)
    form.append("img_2",data.img_2)
    form.append("img_3",data.img_3)
    form.append("default_questions",JSON.stringify(data.default_question))
    form.append("specific_questions",JSON.stringify(data.specific_questions))
  
   await http.fillReportStartup(this.id_startup,form).then((res)=>{
     console.log(res);
   }).catch((error)=>{
     console.log(error.response);
   })
     this.$store.commit("$SETISLOADING");
   
   },

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

.group-buttons{

  display: flex;
  justify-content: flex-end;
  align-items: center;
}


    .btns {
        padding: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        grid-gap: 10px;
    }

    .btn-fill-save, .btns-options {
        grid-column: 4;
   
    }

    .btns-options {
        display: flex;
        gap: 10px;
        /* justify-content: space-between; */
    }

    .btn-save, .btn-cancel {
        width: 79%;
    }

    .btn {
        height: 50px;
        border: none;
        cursor: pointer;
        padding: 10px;
        border-radius: 5px;
        font-size: 1.1rem;
        color: var(--main_primaryWhite);
    }

    .btn-save {
        background-color: var(--card_green);
    }

    .btn-fill-save {
        background-color: var(--card_blue);
    }

    .btn-cancel {
        background-color: var(--card_red);
    }

    @media (max-width: 48em){
        .btns {
            display: grid;
            grid-template-columns: 1fr;
            padding: 0;
            margin-top: 20px;
        }

        .btn-fill-save, .btns-options {
            grid-column: 1;
        }
    }
    


</style>
