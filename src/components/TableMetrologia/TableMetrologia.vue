<template>
  <fieldset className="tableContent">
    <legend>Metrologia</legend>
    <table v-if="statusTable" cellpadding="0" cellspacing="0">
      <div class="btns">
        <button @click="statusTable = true" class="btn startup-opened">
          Solicitações
        </button>
        <button @click="statusTable = false" class="btn startup">
          Histórico
        </button>
      </div>

      <thead>
        <th>
          <button @click="statusTable = true" class="btn startup-opened">
            Solicitações
          </button>
        </th>
        <th>
          <button @click="statusTable = false" class="btn startup">
            Histórico
          </button>
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>

      <thead>
        <th>O.Produção</th>
        <th>Cod. Produto</th>
        <th>Produto</th>
        <th>Técnico</th>
        <th>Opção</th>
      </thead>

      <tbody>

        <tr v-for="metrologySolicitation in metrologySolicitationsList" :key="metrologySolicitation.id">
          <td style="display: none"></td>
          <td class="codeStartup" data-title="O.P">{{ metrologySolicitation.startup.op.code_op }}</td>
          <td data-title="Cod. Produto">{{ metrologySolicitation.startup.op.code_product }}</td>
          <td data-title="Produto">{{ metrologySolicitation.startup.op.desc_product }}</td>
          <td data-title="Técnico">
            <button class="btn-ingressar" v-if="metrologySolicitation.metrologyHistory === null"
              @click="ingressar(metrologySolicitation.startup.id)">Ingressar</button>
            <span v-else>{{ metrologySolicitation.metrologyHistory.user.name }}</span>

          </td>
          <td class="lastTd" data-title="Opção">
            <!-- <button class="btn-preencher" @click="() => this.$router.push({ name: 'MetrologiaDetalhes', query: {id: metrologySolicitation.startup.id} })">Preencher</button> -->
            <button class="btn-preencher"
              @click="hasAnUser(metrologySolicitation.metrologyHistory, metrologySolicitation.startup.id)">Preencher</button>
          </td>
        </tr>

      </tbody>
    </table>

    <table v-else cellpadding="0" cellspacing="0">
      <div class="btns">
        <button @click="statusTable = true" class="btn startup">
          Solicitações
        </button>
        <button @click="statusTable = false" class="btn startup-closed">
          Histórico
        </button>
      </div>

      <thead>
        <th>
          <button @click="statusTable = true" class="btn startup">
            Solicitações
          </button>
        </th>
        <th>
          <button @click="statusTable = false" class="btn startup-closed">

            Histórico
          </button>
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>

      <thead>
        <th>O.Produção</th>
        <th>Cod. Produto</th>
        <th>Produto</th>
        <th>Data de Envio</th>
        <th>Data de Abertura</th>
        <th>Data de Finalização</th>
        <th>Opção</th>
      </thead>

      <tbody>
        <tr v-for="metrologyHistory in metrologyHistoryList" :key="metrologyHistory.fk_startup">
          <td style="display: none"></td>
          <td class="codeStartup" data-title="O.P">{{ metrologyHistory.code_op }}</td>
          <td data-title="Cod. Produto">{{ metrologyHistory.code_product }}</td>
          <td data-title="Produto">{{ metrologyHistory.desc_product }}</td>
          <td data-title="Data de Envio">{{ formatYear(metrologyHistory.sendtometrology) }} <br>
            {{ formatHour(metrologyHistory.sendtometrology) }}</td>
          <td data-title="Data de Abertura">{{ formatYear(metrologyHistory.startDate) }} <br>{{
              formatHour(metrologyHistory.startDate)
          }}</td>
          <td data-title="Data de Finalização">{{ formatYear(metrologyHistory.endDate) }} <br>
            {{ formatHour(metrologyHistory.endDate) }}</td>
          <td class="lastTd" data-title="Opção">
            <button class="btn-view"
              @click="() => this.$router.push({ name: 'MetrologiaDetalhesPreenchido', query: { id: metrologyHistory.fk_startup } })">Visualizar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination-component" v-if="statusTable == false">
        <button class="btn-pagination" v-if="currentPage !== 0" @click="init()">Inicio</button>
        <button class="btn-pagination" v-if="currentPage !== 0" @click="backPage()">Voltar</button>
        <button class="btn-pagination" v-if="metrologyHistoryList.length !== 0" @click="nextPage()">Próximo</button>
    </div>
  </fieldset>
</template>

<script>
import dayjs from 'dayjs'
import http from '../../services/metrology/Metrology'
import userId from '../../utils/dataUser'
import Pagination from '../../components/Pagination/Pagination.vue';

export default {
  data() {
    return {
      metrologyHistoryList: [],
      metrologySolicitationsList: [],
      statusTable: true,
      userAssociated: "",
      user_id: "",
      dataHeader: Object,
      dateSend: "",
      dateOpened: "",
      dateFinished: "",

      listPaginated: [],
      currentPage: 0
    };
  },
  created: async function () {
    this.$store.commit("$SETISLOADING");

    //Lista solictações
    await this.listMetrologySolicitations();
    await userId.DataUser().then((res) => {
      this.user_id = res.data.user.id;
    });
      await this.listMetrologyHistory();
    this.$store.commit("$SETISLOADING");
  },
  methods: {

    async init () {
      this.currentPage = 0
      this.listMetrologyHistory()
    },

    async backPage() {
      this.currentPage = this.currentPage - 10
      await this.listMetrologyHistory()
    },

    async nextPage() {
      this.currentPage = this.currentPage + 10
      this.listMetrologyHistory()
    },

    displayNewList(e) {
      this.listPaginated = e
    },

    hasAnUser: async function (user, router) {
      if (user == null) {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "#ff5349",
          customClass: {
            popup: "colored-toast",
            title: "title-swal-text"
          },
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true
        });
        Toast.fire({
          icon: "warning",
          title: "Não há usuário ingressado",
          background: "#fff",
        });
      }
      else {
        this.$router.push({ name: "MetrologiaDetalhes", query: { id: router } });
      }
    },
    listMetrologyHistory: async function () {
      await http.ListMetrologyHistory(this.currentPage, 10).then((res) => {
        this.metrologyHistoryList = res.data.list;
      });
    },
    listMetrologySolicitations: async function () {
      await http.ListMetrologySolicitations().then((res) => {
        this.metrologySolicitationsList = res.data.list;
      });
    },
    formatYear(date) {
      return dayjs(date).format("DD/MM/YYYY");
    },
    formatHour(date) {
      return dayjs(date).format("HH:mm:ss");
    },
    ingressar: async function (fk_startup) {
      this.$store.commit("$SETISLOADING");
      await http.JoinMetrologyByUserId(this.user_id, fk_startup);
      this.listMetrologySolicitations();
      this.$store.commit("$SETISLOADING");
    },
  },
  components: { Pagination }
};
</script>

<style scoped>

.pagination-component {
  display: flex;
  justify-content: center;
  gap: 5px;
}
.dropdown-content {
  display: none;
  background-color: var(--bg_white);
  border-radius: 10px;
  min-width: 50px;
  border: 1px solid rgba(37, 36, 36, 0.281);
  padding: 15px 5px;
  z-index: 1;
}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

.opcoes:hover .dropdown-content {
  display: block;
}

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  background-color: var(--bg_white);
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.tableContent {
  width: 100%;
  margin-bottom: 20px;
  background-color: var(--bg_white);
  color: var(--black_text);

}

.tableContent table {
  background-color: var(--bg_white);
  width: 100%;
  border-radius: 10px 10px 10px 10px;

}

table th {
  height: 50px;
  font-size: 15px;
  color: var(--black_text);
  padding: 10px 10px 0 10px;
}

.tableContent tr {
  height: 100px;
}

table td {
  border-top: 0.4px solid rgba(0, 0, 0, 0.199);
}

.tableContent td {
  font-size: 15px;
  text-align: center;
  height: 50px;
  padding: 0 10px 0 10px;
}

/* BTNS */

.menuBtn {
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
}

.btn {
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  color: var(--black_text);
  font-size: max(0.8rem, 1vw);
  font-weight: bold;
  border: none;
  font-weight: 300px;
}

.startup-opened,
.startup-closed {
  background-color: var(--bg_green);
  border: 3px solid var(--main-color);
  color: #fff;
}

.opcoes {
  display: flex;
  flex-direction: column;
}

.btn-view,
.btn-preencher,
.btn-ingressar {
  cursor: pointer;
  color: var(--main_primaryWhite);
  border: none;
  background-color: var(--btn_blue);
  height: 2.5rem;
  width: 4.6rem;
  border-radius: 5px;
}

.btn-preencher {
  background-color: var(--card_orange);
}

.btn-ingressar {
  background-color: var(--card_green);
  ;
}

.btns {
  display: none;
}

.btn-pagination {
  border: none;
  cursor: pointer;
  background-color: var(--card_green);
  padding: 0.3rem;
}

@media (max-width: 1080px) {

  .btns {
    display: flex;
    padding: 10px 20px 10px 20px;
  }

  .tableContent thead {
    display: none;
  }

  .tableButton {
    display: block;
  }

  .tableContent table {
    border-radius: 10px 10px 0 0;
  }

  .tableContent td {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  [data-title] {
    color: var(--black_text);
  }

  .tableContent td:first-of-type {
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .tableContent td:not(:first-of-type):before {
    content: attr(data-title);
    display: block;
    font-weight: bold;

  }

  .lastTd {
    border-bottom: 1px solid var(--green_text);
  }

  .codeStartup {
    font-weight: 600;
    font-size: 20px;
  }

  legend {
    text-align: center;
  }
}
</style>
