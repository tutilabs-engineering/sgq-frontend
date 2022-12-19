<template>
  <fieldset class="tableContent">
    <legend>Startups</legend>

    <div class="btns">
      <button @click="statusTable = true" :class="{'btn-toggle': statusTable}">Startups Abertas</button>
      <button @click="statusTable = false" :class="{ 'btn-toggle': !statusTable }"> Startups Fechadas</button>

    </div>


    <div v-show="statusTable">

      <table>
        <tr>
          <th>Cód. Startup</th>
          <th>Cód OP</th>
          <th>Cód. Produto</th>
          <th>Máquina</th>
          <th>Metrologia</th>
          <th>Status</th>
          <th>Preench.</th>
          <th>Data</th>
          <th>Criador</th>
          <th>Ações</th>



        </tr>
        <tr v-for="startup in listStartupsOpen" :key="startup">
          <td>{{ startup.code_startup }}</td>
          <td>{{ startup.op.code_op }}</td>
          <td>{{ startup.op.code_product }}</td>
          <td>{{ startup.op.machine }}</td>
          <td>{{ verifyMetrology(startup.metrology) }}</td>
          <td>{{ verifyOpenStartup(startup) }}</td>
          <td>{{ verifyFillStartup(startup) }}</td>
          <td>{{ formatDate(startup.day, startup.start_time) }}</td>
          <td data-title="Usuario">{{ startup.userThatCreate.name.split(" ")[0] + ' ' + startup.userThatCreate.name.split(" ")[1] }}</td>
          <button @click="OpenReportStartup(startup.id)">Consultar</button>

        </tr>
      </table>

      <button @click="init()" class="btn-pagination" v-if="currentPageOpen !== 0">Inicio</button>

      <button @click="back()" class="btn-pagination" v-if="currentPageOpen !== 0">Voltar</button>

      <button @click="next()" class="btn-pagination">Proximo</button>
    </div>

    <div v-show="!statusTable">

      <table>
        <tr>
          <th>Cód. Startup</th>
          <th>Cód. OP</th>
          <th>Cód. Produto</th>
          <th>Máquina</th>
          <th>Metrologia</th>
          <th>Status</th>
          <th>Preench.</th>
          <th>Data</th>
          <th>Criador</th>
          <th>Ações</th>

        </tr>
        <tr v-for="startup in  listStartupsClosed" :key="startup">
          <td>{{ startup.code_startup }}</td>
          <td>{{ startup.op.code_op }}</td>
          <td>{{ startup.op.code_product }}</td>
          <td>{{ startup.op.machine }}</td>
          <td>{{ verifyMetrology(startup.metrology) }}</td>
          <td>{{ verifyOpenStartup(startup) }}</td>
          <td>{{ verifyFillStartup(startup) }}</td>
          <td>{{formatDate(startup.day, startup.start_time)}}</td>
          <td data-title="Usuario">{{  startup.userThatCreate.name.split(" ")[0] + ' ' + startup.userThatCreate.name.split(" ")[1] }}</td>
          <button @click="OpenReportStartup(startup.id)">Consultar</button>

        </tr>
      </table>

      <button @click="init()" class="btn-pagination" v-if="currentPageClosed !== 0">Inicio</button>

      <button @click="back()" class="btn-pagination" v-if="currentPageClosed !== 0">Voltar</button>

      <button @click="next()" class="btn-pagination">Proximo</button>
    </div>

  </fieldset>


</template>

<script>
import http from "../../services/startup/";
import dayjs from "dayjs";
import Pagination from "../Pagination/Pagination.vue";

export default {
  setup() { },
  name: "Table",
  data() {
    return {
      statusTable: true,
      listStartupsOpen: [],
      listStartupsClosed: [],
      currentPageOpen: 0,
      currentPageClosed: 0
    };
  },

  async created() {

    this.$store.commit("$SETISLOADING");
    await this.startupOpenList()
    await this.startupClosedList()
    this.$store.commit("$SETISLOADING");
  },
  methods: {

    async init() {
      this.$store.commit("$SETISLOADING");
      if (this.statusTable) {
        this.currentPageOpen = 0
        await this.startupOpenList()
      } else {
        this.currentPageClosed = 0
        await this.startupClosedList()
      }
      this.$store.commit("$SETISLOADING");
    },

    async back() {
      this.$store.commit("$SETISLOADING");
      if (this.statusTable) {
        this.currentPageOpen = this.currentPageOpen - 10
        await this.startupOpenList()
      } else {
        this.currentPageClosed = this.currentPageClosed - 10
        await this.startupClosedList()
      }
      this.$store.commit("$SETISLOADING");

    },

    async next() {
      this.$store.commit("$SETISLOADING");
      if (this.statusTable) {
        this.currentPageOpen = this.currentPageOpen + 10
        await this.startupOpenList()
      } else {
        this.currentPageClosed = this.currentPageClosed + 10
        await this.startupClosedList()
      }
      this.$store.commit("$SETISLOADING");

    },


    async startupOpenList() {
      await http.listAllStartups(this.currentPageOpen, 10, undefined, 0).then((res) => {
        this.listStartupsOpen = res.data.list
      })
    },

    async startupClosedList() {
      await http.listAllStartupsClosed(this.currentPageClosed, 10, undefined, 1).then((res) => {
        this.listStartupsClosed = res.data.list
      })
    },

    verifyOpenStartup(startup) {
      if (startup.open && startup.filled) {
        return "Rodando";
      }
      else if (!startup.open && startup.filled) {
        return "Fechado";
      }
      else {
        return "Aguardando";
      }
    },
    verifyFillStartup(startup) {
      // Se startup não estiver fechada e não foi preenchida nenhuma vez
      if (startup.filled == false && startup.report_startup_fill.length <= 0) {
        return "Em Aberto";
      }
      else if (startup.filled == false &&
        startup.report_startup_fill.length > 0) {
        return "Em Andamento";
      }
      else if (startup.filled == true) {
        return "Preenchido";
      }
    },
    verifyMetrology(metrology) {
      if (metrology) {
        if (metrology.length > 0) {
          if (metrology[0].metrology == false) {
            return "Met. Preenchida";
          }
          else if (metrology[0].metrology == true) {
            return "Met. Não Preenchida";
          }
        }
        else {
          return "Não existe Metrologia";
        }
      }
      return "Não existe Metrologia";
    },

    OpenReportStartup: function (id_startup) {
      this.$router.push({
        path: "/create-startup-by-id",
        query: { id: id_startup },
      });
    },

    formatDate(day, hour) { 
      let date = `${dayjs(day).format('DD/MM/YYYY')} ${dayjs(hour).format('HH:mm')}`
      return date
    }
  },
  components: { Pagination }
};
</script>

<style scoped>
legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

.tableContent {
  margin-top: 20px;
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 0.85rem;
  color: var(--black_text);
}

.btns {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;
}

.btns button {
  border: none;
  margin-right: 0.5rem;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0.4rem;
}

table {
  width: 100%;
}


table td {
  text-align: center;
}

table tr button {
  width: 100%;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: var(--bg_green);
  height: 2rem;
  color: #ffffff;
  border: none;
}

.btn-pagination {
  border: none;
  cursor: pointer;
  margin: 0.1rem;
  height: 2rem;
  padding: 0.4rem;
  border-radius: 0.25rem;
  background-color: var(--bg_green);
  color: var(--main_primaryWhite);
}

.btn-toggle {
  border: none;
  cursor: pointer;
  margin: 0.1rem;
  height: 2rem;
  padding: 0.4rem;
  border-radius: 0.25rem;
  color: var(--main_primaryWhite);
  background-color: var(--bg_green);
}
</style>
