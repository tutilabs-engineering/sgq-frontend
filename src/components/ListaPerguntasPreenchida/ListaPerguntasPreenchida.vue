<template>
  <div class="content-questions">
    <fieldset class="content-tablePerguntas">
      <legend class="legenda">Perguntas Padrões </legend>
      <PerguntaPadrao
        :defaultQuestions="verifyReprenchiDeStartup(startupData)
         || 
         defaultQuestions"
        @returnAnswered="getAnswered"
      />
    </fieldset>
 
    <fieldset
      class="content-tablePerguntas"
      v-if="!verifyExistSpecificQuestions(specificQuestions) && !verifyReprenchiSpecificDeStartup(startupData)"
    >
      <legend class="legenda-warning">
        Não há Perguntas Especificas para este Produto<br /><span
          >Verifique a tabela de análise</span
        >
      </legend>
    </fieldset>

    <fieldset class="content-tablePerguntas" v-else>
      <legend class="legenda">Tabela de Análise</legend>

      <PerguntaAnalise
        :specificQuestions="verifyReprenchiSpecificDeStartup(startupData)
         || 
        specificQuestions"
        @returnSpecificAnswered="getSpecificAnswered"
      />
    </fieldset>

    <!-- <fieldset>
      <TableQtdeCavidade :numberCavidade="numberCavidade" :codProd="code_product"/>
    </fieldset> -->
    <fieldset class="content-imgs">
      <UploadImage :imgNamePreview="startupData.img_1" :id="1" @setImage="getImg_1" />
      <UploadImage :imgNamePreview="startupData.img_2" :id="2" @setImage="getImg_2" />
      <UploadImage :imgNamePreview="startupData.img_3" :id="3" @setImage="getImg_3" />
    </fieldset>
  
  </div>
</template>

<script>
import PerguntaAnalise from "../PerguntaAnalise/PerguntaAnalise.vue";
import PerguntaPadrao from "../PerguntaPadrao/PerguntaPadrao.vue";
// import TableQtdeCavidade from "../TableQtdeCavidade/TableQtdeCavidade.vue";
import UploadImage from "../UploadImage/UploadImage.vue";
import http from "../../services/startup/index";
// import httpAttributes from "../../services/productAnalysis/Attributes"

export default {
  data() {
    return {
     
      defaultQuestions: [],
      specificQuestions: [],

      numberCavidade: this.qtdeCavidade,
      qtdePerguntas: [],
      // id_startup: this.id_startup
      defaultQuestionsResp: [],
      specificQuestionsResp: [],
    };
  },

  props: {
    qtdeCavidade: Number,
    id_startup: Number,
    startupData : Array

  },
  components: {
    PerguntaPadrao,
    PerguntaAnalise,
    // TableQtdeCavidade,
    UploadImage,
  },
  created: async function () {
    this.$store.commit("$SETISLOADING");

    await http.findReportStartupById(this.id_startup).then((res) => {
      this.specificQuestions = res.data.specific_questions_in_product;
    });

    const responseDefaultQuestions = await http.listAllDefaultQuestions();
    this.defaultQuestions = responseDefaultQuestions.data.defaultQuestions;
    
    this.defaultQuestions = await this.defaultQuestions.map((item) => {
      return {
        fk_default_question: item.id,
        title: item.description,
        description: "",
        status: 0,
        file: "",
        preview: "",
      };
    });
   
   
    this.$store.commit("$SETISLOADING");
  },

  methods: {
    verifyExistSpecificQuestions(specificQuestions){
      if(specificQuestions){
         if(specificQuestions.length > 0){
              return true;
         }
         return false;   
      } 
      return false;
    },
    verifyReprenchiSpecificDeStartup: function(startup){
        if(!startup.report_startup_fill){
          return false;
        }
        if(!startup.report_startup_fill.specific_questions_responses){
           return false;
        }

        if(startup.report_startup_fill.specific_questions_responses.specific_questions.length <= 0){
          return false;
        }
        return startup.report_startup_fill.specific_questions_responses.specific_questions
    },
  
    verifyReprenchiDeStartup: function(startup){
        if(!startup.report_startup_fill){
          return false;
        }
        if(!startup.report_startup_fill.default_questions_responses){
           return false;
        }
        return startup.report_startup_fill.default_questions_responses.default_questions
    },
    
    getSpecificAnswered: async function (specificAnswered) {
      const specificAnsweredFormat = specificAnswered.map((item) => {
        return {
          attention: item.attention,
          is_enabled: item.is_enabled,
          question: item.question,
          fk_specific_question: item.fk_specific_question,
          description: item.description,
          status: item.status,
          file: item.file,
        };
      });

      this.$store.commit("$SETDATAFILLSTARTUP", {
        specific_questions: specificAnsweredFormat,
      });
    },

    getAnswered: async function (res) {
      const default_questionFormat = res.map((item) => {
        return {
          fk_default_question: item.fk_default_question,
          title: item.title,
          description: item.description,
          status: item.status,
          file: item.file,
        };
      });

      this.$store.commit("$SETDATAFILLSTARTUP", {
        default_question: default_questionFormat,
      });
    },
    getImg_1: async function (res) {
      this.$store.commit("$SETDATAFILLSTARTUP", { img_1: res });
    },
    getImg_2: async function (res) {
      this.$store.commit("$SETDATAFILLSTARTUP", { img_2: res });
    },
    getImg_3: async function (res) {
      this.$store.commit("$SETDATAFILLSTARTUP", { img_3: res });
    },
  },
};
</script>

<style secoped>

.content-questions {
  width: 100%;
  padding: 20px;
}

.content-tablePerguntas,
.content-imgs {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  background-color: transparent;
  padding: 0px;
  border: none;
}

.content-imgs {
  margin-bottom: 30px;
}

.legenda {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
  padding: 20px;
}

.legenda-warning {
  font-size: 25px;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(37, 36, 36, 0.281);
  color: var(--card_red);
  margin-bottom: 10px;
  font-weight: 600;
}

.legenda-warning span {
  font-size: 15px;
  font-weight: 400;
}

@media (min-width: 1600px) {
  .content-tablePerguntas {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  }
}

@media (max-width: 1200px) {
  .content-tablePerguntas,
  .content-imgs {
    margin-top: 30px;
    padding: 20;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 965px) {
  .content-tablePerguntas,
  .content-imgs {
    margin-top: 30px;
    padding: 0;
    grid-template-columns: 1fr 1fr;
  }
  .content-questions {
    padding: 0;
  }

  .legenda {
    text-align: center;
  }
}

@media (max-width: 56em) {
  .content-questions {
    padding: 0;
  }

  .content-tablePerguntas,
  .content-imgs {
    margin-top: 30px;
    padding: 0;
    grid-template-columns: 1fr;
  }
}
</style>