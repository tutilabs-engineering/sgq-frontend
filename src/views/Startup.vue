<template>
  <div class="content-startup">
    <!-- <Header titlePage="Sistema de Gerenciamento de Qualidade" /> -->
    <div class="cards">
      <Card
        status="APROVADOS"
        :qtde="startupsManagement.approved"
        img="fas fa-check-square"
        colore="#10b981"
        link="/startups-aprovadas"
        textContentPopper="Clique para ver mais detalhes"
      />
      <Card
        status="CONDICIONAL"
        :qtde="startupsManagement.conditional"
        img="fas fa-tasks"
        colore="#fb923c"
        link="/startups-andamentos"
        textContentPopper="Clique para ver mais detalhes"
      />
      <Card
        status="REPROVADOS"
        :qtde="startupsManagement.disapproved"
        img="fas fa-times"
        colore="#ef4444"
        link="/startups-reprovadas"
        textContentPopper="Clique para ver mais detalhes"
      />
      <Card
        status="FECHADOS"
        :qtde="startupsManagement.closed"
        img="fas fa-door-closed"
        colore="#0ea5e9"
        link="#"
        textContentPopper=""
      />
    </div>

    <div class="table-injection">
      <Table
        @returnItemAbertos="ReturnItemAbertos"
        @returnItemFechados="ReturnItemFechados"
      />
    </div>

    <div
      class="info"
      v-if="statusItemsAbertos === true && statusItemsFechados === true"
    >
      <h3 style="text-align: center">
        Não há startups para serem listadas aqui
      </h3>
      <button @click="() => this.$router.push({ name: 'Status' })">
        Criar uma Startup
      </button>
    </div>
  </div>
</template>

<script>
// import Header from "../components/Header/Header.vue";
import Table from "../components/Table/Table.vue";
import Card from "../components/Card/Card.vue";
import { defineComponent } from "vue";
import http from "../services/startup/";

export default defineComponent({
  name: "Startup",
  components: { Card, Table },
  data() {
    return {
      statusItemsAbertos: false,
      statusItemsFechados: false,
      startupsManagement: {
        approved: "",
        conditional: "",
        disapproved: "",
        closed: "",
      },
    };
  },

  methods: {
    ReturnItemAbertos: async function (itemsAbertos) {
      if (itemsAbertos == 0) {
        this.statusItemsAbertos = true;
      } else {
        this.statusItemsAbertos = false;
      }
    },

    ReturnItemFechados: async function (itemsFechados) {
      if (itemsFechados == 0) {
        this.statusItemsFechados = true;
      } else {
        this.statusItemsFechados = false;
      }
    },
  },
  created: async function () {
    const listCount = await http.listCountOfStartupsByStatus();
    // console.log(listCount.data);

    this.startupsManagement.approved = listCount.data.all_approved;

    this.startupsManagement.disapproved = listCount.data.all_reproved;

    this.startupsManagement.conditional =
      listCount.data.all_approved_with_condition;

    this.startupsManagement.closed = listCount.data.all_closed;
  },
});
</script>

<style scoped>
.content-startup {
  width: 100%;
  background-color: var(--background-color);
}

.info {
  margin-top: 20px;
  background-color: #fff;
  width: 100%;
  padding: 10px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid rgba(37, 36, 36, 0.281);
  color: var(--black_text);
}

.info button {
  border: none;
  border-radius: 5px;
  background-color: var(--card_green);
  cursor: pointer;
  height: 40px;
  color: white;
  font-weight: 600;
  width: 150px;
}

.cards {
  margin-top: 10px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 0;
}

@media (max-width: 1100px) {
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }
}
</style>
