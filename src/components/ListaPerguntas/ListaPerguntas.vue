<template>
  <div class="content-questions">
    
    <fieldset class="content-tablePerguntas">
      <legend class="legenda">Perguntas Padrões</legend>
      
        <PerguntaRespondida :answeredQuestions="datastartup" />

    </fieldset>

    <fieldset class="content-tablePerguntas" v-if="datastartupSpecifcs.length == 0">
      <legend class="legenda-warning">Não há Perguntas Especificas para este Produto<br/><span>Verifique a tabela de análise</span></legend>
    </fieldset>

    <fieldset class="content-tablePerguntas" v-else>
      <legend class="legenda">Tabela de Análise</legend>

        <PerguntaAnaliseRespondida :answeredSpecficsQuestions="datastartupSpecifcs"/>
    </fieldset>

    <!-- <fieldset>
      <TableQtdeCavidade :numberCavidade="numberCavidade" :codProd="code_product"/>
    </fieldset> -->

    <fieldset class="content-imgs">
      <UploadImage :id="1" :imgName="this.startupData.img_1" />
      <UploadImage :id="2" :imgName="this.startupData.img_2"/>
      <UploadImage :id="3" :imgName="this.startupData.img_3"/>
    </fieldset>
  </div>
</template>

<script>
import PerguntaAnaliseRespondida from "../PerguntaAnaliseRespondida/PerguntaAnaliseRespondida.vue";
import PerguntaRespondida from "../PerguntaRespondida/PerguntaRespondida.vue";
// import TableQtdeCavidade from "../TableQtdeCavidade/TableQtdeCavidade.vue";
import UploadImage from "../UploadImage/UploadImage.vue";
import http from "../../services/startup/index";
import httpAttributes from "../../services/productAnalysis/Attributes"

export default {
  data() {
    return {
      
      defaultQuestions: [],
      specificQuestions: [],
      numberCavidade: this.qtdeCavidade,
      qtdePerguntas: [],
      datastartup: this.startupData.report_startup_fill.default_questions_responses.default_questions,
      datastartupSpecifcs: this.startupData.report_startup_fill.specific_questions_responses.specific_questions,
      exit: ""
    };

    
  },

  props: {
    qtdeCavidade: Number,
    code_product: String,
    startupData: Array,
  },
  components: {
    PerguntaRespondida,
    PerguntaAnaliseRespondida,
    // TableQtdeCavidade,
    UploadImage,
  },
  created: async function () {
    this.$store.commit("$SETISLOADING");
    const responseDefaultQuestions = await http.listAllDefaultQuestions();
    this.defaultQuestions = responseDefaultQuestions.data.defaultQuestions;

    const responseSpecificQuestions = await httpAttributes.FindAttributesByCodeProduct(this.startupData.op.code_product);

    if(responseSpecificQuestions) {
      
      await responseSpecificQuestions.data.list.map( (item) => {
            if (item.is_enabled) {
              this.specificQuestions.push(item)
              this.$store.commit("$SETQTDEESPECIFICAS"); 
            }
      })
      
    }
    this.$store.commit("$SETISLOADING");
  },

  methods: {
    ReturnAnswered: async function(answered){
      this.$store.commit("$SETQTDEPERGUNTASPADROES"); 
      this.exit = answered
    },

    ReturnSpecificAnswered: async function(specificAnswered){
      this.$store.commit("$SETQTDEPERGUNTASESPECIFICAS");
      this.exit = specificAnswered
    }

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