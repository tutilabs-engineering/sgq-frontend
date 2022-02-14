<template>

    <div class="content-tablePerguntas">
        <div class="content-perguntas"> 
            <Pergunta />
            <Pergunta />
            <Pergunta />
            <Pergunta />
            <Pergunta />
            <Pergunta />
            <Pergunta />
            <Pergunta />
            <Pergunta />
            <Pergunta />
        </div>
        
 
        
    </div>
</template>

<script>
import Pergunta from '../Pergunta/Pergunta.vue'


export default {
  components: { Pergunta },



}
</script>

<style secoped>

.content-tablePerguntas {
    padding: 0px 25px 0px 25px;
    width: 100%;
    overflow-x: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.content-perguntas {
    width: 85%;
}


</style>