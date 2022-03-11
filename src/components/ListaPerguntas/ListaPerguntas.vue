<template>
  <div class="content-questions">
    
    <fieldset class="content-tablePerguntas">
      <legend class="legenda">Perguntas Padrões</legend>
      <div class="defaultQuestion" v-for="defaultQuestion in defaultQuestions" :key="defaultQuestion.id">
        <PerguntaPadrao :description="defaultQuestion.description" :idQuestion="defaultQuestion.id"/>
      </div>

      
    </fieldset>

    <fieldset class="content-tablePerguntas">

        <legend class="legenda">Tabela de Análise</legend>
        <PerguntaAnalise />
        <PerguntaAnalise />
        <PerguntaAnalise />
   

    </fieldset>
  </div>
</template>

<script>

import PerguntaAnalise from '../PerguntaAnalise/PerguntaAnalise.vue'
import PerguntaPadrao from '../PerguntaPadrao/PerguntaPadrao.vue'
import http from '../../services/startup/index'

export default {
  data() {
    return {
      defaultQuestions: []
    }
  },
  components: { PerguntaPadrao, PerguntaAnalise },
  created: async function () {
    const response = await http.listAllDefaultQuestions()
    this.defaultQuestions = response.data.defaultQuestions
  }
}
</script>

<style secoped>

.content-questions {
  width: 100%;
  padding: 20px;
}

.content-tablePerguntas {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  background-color: transparent;
  padding: 0px;
  border: none;
}

.legenda {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
  padding: 20px;
}




@media (min-width: 1600px){
    .content-tablePerguntas {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
    }
}


@media (max-width: 1200px){
    .content-tablePerguntas {
        margin-top: 30px;
        padding:20;
        grid-template-columns: 1fr 1fr;
    }
}

@media (max-width: 965px){
    .content-tablePerguntas {
        margin-top: 30px;
        padding:0;
        grid-template-columns: 1fr 1fr;
    }
    .content-questions {
        padding: 0;
    }

    .legenda {
    text-align: center;
  }
}

@media (max-width: 56em){
    .content-questions {
        padding: 0;
    }
    
    .content-tablePerguntas {
        margin-top: 30px;
        padding: 0;
        grid-template-columns: 1fr;
    }
}



</style>