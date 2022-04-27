<template>
  <div class="content-startup">
    <!-- <Header titlePage="Sistema de Gerenciamento de Qualidade" /> -->
    <div class="cards">
      <Card
        status="APROVADOS"
        :qtde="startupsManagement.approved"
        img="fas fa-check-square"
        colore="#43CC74"
        link="/startups-aprovadas" textContentPopper="Clique para ver mais detalhes"
      />
      <Card
        status="CONDICIONAL"
        :qtde="startupsManagement.conditional"
        img="fas fa-tasks"
        colore="#FFAE3D"
        link="/startups-andamentos" textContentPopper="Clique para ver mais detalhes"
      />
      <Card
        status="REPROVADOS"
        :qtde="startupsManagement.disapproved"
        img="fas fa-times"
        colore="#FF5349"
        link="/startups-reprovadas" textContentPopper="Clique para ver mais detalhes"
      />
      <Card
        status="FECHADOS"
        :qtde="startupsManagement.closed"
        img="fas fa-door-closed"
        colore="#5F9DFF"
        link="#" textContentPopper=""
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
import http from "../services/startup/"

export default defineComponent({
  name: "Startup",
  components: { Card, Table },
  data() {
    return {
      startupsManagement: {
        approved: "",
        conditional: "",
        disapproved: "",
        closed: "",
      }
    };
  },
  created: async function() {
    const listCount = await http.listCountOfStartupsByStatus()
    this.startupsManagement.approved = listCount.data.approved
    this.startupsManagement.disapproved = listCount.data.disapproved
    this.startupsManagement.conditional = listCount.data.conditional
    this.startupsManagement.closed = listCount.data.closed
  }
});
</script>

<style scoped>
.content-startup {
  width: 100%;
  background-color: var(--background-color);
}

.cards {
  margin-top:  10px; 
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}



@media
</style>
