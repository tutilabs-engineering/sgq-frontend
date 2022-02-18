<template>
  <div class="content-startup">
    <!-- <Header titlePage="Sistema de Gerenciamento de Qualidade" /> -->
    <div class="cards">
      <Card
        status="APROVADOS"
        qtde="34"
        img="fas fa-check-square"
        colore="#43CC74"
        link="/startups-aprovadas"
      />
      <Card
        status="EM ANDAMENTO"
        qtde="15"
        img="fas fa-tasks"
        colore="#FFAE3D"
        link="/startups-andamentos"
      />
      <Card
        status="REPROVADOS"
        qtde="0"
        img="fas fa-times"
        colore="#FF5349"
        link="/startups-reprovadas"
      />
      <Card
        status="FECHADOS"
        qtde="22"
        img="fas fa-door-closed"
        colore="#5F9DFF"
        link="#"
      />
    </div>

    <div class="table-injection">
      <Table />
    </div>
  </div>
</template>

<script>
// import Header from "../components/Header/Header.vue";
import Table from "../components/Table/Table.vue";
import Card from "../components/Card/Card.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Startup",
  components: { Card, Table },
  data() {
    return {};
  },
});
</script>

<style scoped>
.content-startup {
  width: 100%;
  background-color: var(--background-color);
}

.cards {
  margin-top: 10px; 
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
