<template>
  <div class="content-novaStartup">
    <!-- <Header titlePage="Nova Startup"/> -->
    <h2 class="title">Start-Injeção</h2>
    <StartupCadastro />
    <TableCavidade />
    <TableComponentes />
    <ListaPerguntas />
  </div>
</template>

<script>
// import Header from "../components/Header/Header.vue";
import TableCavidade from "../components/TableCavidade/TableCavidade.vue";
import TableComponentes from "../components/TableComponentes/TableComponentes.vue";
import StartupCadastro from "../components/StartupCadastro/StartupCadastro.vue";
import ListaPerguntas from "../components/ListaPerguntas/ListaPerguntas.vue";

export default {
  components: {
    // Header,
    StartupCadastro,
    TableCavidade,
    TableComponentes,
    ListaPerguntas,
  },
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
