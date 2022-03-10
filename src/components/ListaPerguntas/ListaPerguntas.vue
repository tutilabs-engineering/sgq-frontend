<template>
  <div class="content-tablePerguntas">
    <div v-for="defaultQuestion in defaultQuestions" :key="defaultQuestion.id">
    <Pergunta :description="defaultQuestion.description" :idQuestion="defaultQuestion.id"/>
    </div>
  </div>
</template>

<script>
import Pergunta from '../Pergunta/Pergunta.vue'
import http from '../../services/startup/index'

export default {
  data() {
    return {
      defaultQuestions: []
    }
  },
  components: { Pergunta },
  created: async function () {
    const response = await http.listAllDefaultQuestions()
    this.defaultQuestions = response.data.defaultQuestions
  }
}
</script>

<style secoped>

.content-tablePerguntas {
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
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
}

@media (max-width: 56em){
    .content-tablePerguntas {
        margin-top: 30px;
        padding: 0;
        grid-template-columns: 1fr;
    }
}



</style>