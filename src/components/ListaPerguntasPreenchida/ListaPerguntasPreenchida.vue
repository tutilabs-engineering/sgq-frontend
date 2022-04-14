<template>
  <div class="content-questions">
    <fieldset class="content-tablePerguntas">
      <legend class="legenda">Perguntas Padrões</legend>
   
        <PerguntaPadrao
          :defaultQuestions="defaultQuestions"
        
        />
     


    </fieldset>
   {{defaultQuestionsResp }}
  <fieldset class="content-tablePerguntas" v-if="specificQuestions.length == 0">
      <legend class="legenda-warning">Não há Perguntas Especificas para este Produto<br/><span>Verifique a tabela de análise</span></legend>
    </fieldset>

    <fieldset class="content-tablePerguntas" v-else>
      <legend class="legenda">Tabela de Análise</legend>

      <div  v-for="specificQuestion in specificQuestions.slice().reverse()" :key="specificQuestion.id">
        <PerguntaAnalise :flag="specificQuestion.attention" :description="specificQuestion.question" :idQuestion="specificQuestion.id"
        @returnSpecificAnswered="ReturnSpecificAnswered" v-show="specificQuestion.is_enabled"/>
      </div>
      
    </fieldset>

    <fieldset>
      <TableQtdeCavidade :numberCavidade="numberCavidade" :codProd="code_product"/>
    </fieldset>

    <fieldset class="content-imgs">
      <UploadImage :id="1" />
      <UploadImage :id="2" />
      <UploadImage :id="3" />
    </fieldset>
  </div>
</template>

<script>
import PerguntaAnalise from "../PerguntaAnalise/PerguntaAnalise.vue";
import PerguntaPadrao from "../PerguntaPadrao/PerguntaPadrao.vue";
import TableQtdeCavidade from "../TableQtdeCavidade/TableQtdeCavidade.vue";
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
      defaultQuestionsResp : [],
    };

    
  },

  props: {
    qtdeCavidade: Number,
    code_product: String,
    id_startup: Number,
  },
  components: {
    PerguntaPadrao,
    PerguntaAnalise,
    TableQtdeCavidade,
    UploadImage,
  },
  created: async function () {
    this.$store.commit("$SETISLOADING");

    await http.findReportStartupById(this.id_startup).then( (res) => {
      this.specificQuestions = res.data.specific_questions_in_product
    })

    const responseDefaultQuestions = await http.listAllDefaultQuestions();
    this.defaultQuestions = responseDefaultQuestions.data.defaultQuestions;
    this.defaultQuestions = this.defaultQuestions.map((item) => {
      return { fk_default_question:item.id, title: item.description, description:'',status:0,file: '' }
    })
    
    this.$store.commit("$SETISLOADING");
  },

  methods: {
    ReturnAnswered: async function(){
   
    
    },


    ReturnSpecificAnswered: async function(specificAnswered){
      this.$store.commit("$SETQTDEPERGUNTASESPECIFICAS");
      console.log(specificAnswered)
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