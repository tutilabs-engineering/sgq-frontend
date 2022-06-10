<template>
  <fieldset className="tableContent" v-if="isOp === true">
    <legend>Análise de Startup - Reprovadas</legend>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <th>Cod. Startup</th>
        <th>Cod. OP</th>
        <th>Cod. Produto</th>
        <th>Cod. Cliente</th>
        <th>Máquina</th>
        <th>Data</th>
        <th>Inspetor</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="item in currentItens" :key="item.id">
          <td style="display: none"></td>
          <td data-title="Cod. Startup">{{ item.code_startup }}</td>
          <td data-title="Cod. OP">{{ item.op.code_op }}</td>
          <td data-title="Cod. Produto">{{ item.op.code_product }}</td>
          <td data-title="Cod. Cliente">{{ item.op.code_client }}</td>
          <td data-title="Maquina">{{ item.op.machine }}</td>
          <td data-title="Data">{{ formatDate(item.day) }}</td>
          <td data-title="Técnico">{{ item.userThatCreate.name }}</td>
          <td class="lastTd" data-title="Opcoes">
            <div class="opcoes">
              <button
                className="btn_visualizar"
                @click="OpenReportStartup(item.id)"
              >
                <i class="fa fa-eye"> </i>
                Visualizar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination-component">
      <div v-for="index in pages" key="index">
        <button
          value="index"
          @click="setNewIndex(index)"
          :class="changeColorBtn(index)"
        >
          {{ index }}
        </button>
      </div>
    </div>
  </fieldset>

  <fieldset class="tableContent" v-else>
    <h2 class="legenda-warning">
      Não há Startups para serem listadas<br /><button
        @click="() => this.$router.push({ name: 'Startup' })"
        class="btn-back"
      >
        Voltar
      </button>
    </h2>
  </fieldset>
</template>

<script>
import http from "../services/startup/";
export default {
  setup() {},
  name: "Table",
  props: ["titleTable", "iconeAdicionar", "iconeFile", "iconeEdit"],
  data() {
    return {
      listDisapproved: [],
      isOp: false,

      // Apenas para paginação
      totalItens: "10",
      itensPerPage: "10",
      currentPage: 0,
      pages: "",
      startIndex: "",
      endIndex: "",
      currentItens: "",

      btnChanged: false,
    };
  },

  methods: {
    calcPagination: async function () {
      this.pages = this.calcPages();
      (this.startIndex = this.currentPage * this.itensPerPage),
        (this.endIndex =
          parseInt(this.startIndex) + parseInt(this.itensPerPage));
    },

    setNewIndex: async function (e) {
      this.currentPage = e;
      this.startIndex = this.currentPage * this.itensPerPage;
      this.startIndex = this.startIndex - 10;
      this.endIndex = parseInt(this.startIndex) + parseInt(this.itensPerPage);
      const listCount = await http.listCountOfStartupsByStatus();
      this.listDisapproved =
        listCount.data.reportStartups.disapproved.reverse();
      this.currentItens = this.listDisapproved.slice(
        this.startIndex,
        this.endIndex
      );
    },

    calcPages() {
      return Math.ceil(parseInt(this.totalItens) / parseInt(this.itensPerPage));
    },

    changeColorBtn(index) {
      if (this.currentPage == index) {
        return "btnClicked";
      }
    },

    OpenReportStartup: function (id_startup) {
      this.$router.push({
        path: "/create-startup-by-id",
        query: { id: id_startup },
      });
    },

    formatDate(date) {
      date = date.slice(0, -14);
      this.year = date.slice(0, -6);
      this.month = date.slice(5, -3);
      this.day = date.slice(-2);
      return (date = `${this.day}/${this.month}/${this.year}`);
    },

    verifyOP: async function (list_op) {
      if (list_op == 0) {
        return false;
      } else {
        return true;
      }
    },
  },

  created: async function () {
    this.$store.commit("$SETISLOADING");
    const listCount = await http.listCountOfStartupsByStatus();
    this.listDisapproved = listCount.data.reportStartups.disapproved.reverse();
    this.isOp = await this.verifyOP(this.listDisapproved.length);

    this.totalItens = this.listDisapproved.length;
    this.pages = this.calcPages();

    (this.startIndex = this.currentPage * this.itensPerPage),
      (this.endIndex = parseInt(this.startIndex) + parseInt(this.itensPerPage));

    this.currentItens = this.listDisapproved.slice(
      this.startIndex,
      this.endIndex
    );
    this.$store.commit("$SETISLOADING");
  },
};
</script>

<style scoped>
.pagination-component {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.btnClicked {
  background-color: var(--card_blue) !important;
}

.pagination-component button {
  color: #fff;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--card_green);
}

.legenda-warning {
  font-size: 25px;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  color: var(--card_red);
  margin-bottom: 10px;
  font-weight: 600;
}

.legenda-warning span {
  font-size: 15px;
  font-weight: 400;
}

.tableContent {
  position: relative;
  width: 100%;
  background-color: var(--bg_white);
  border: 1px solid rgba(37, 36, 36, 0.281);
  border-radius: 10px 10px 10px 10px;
  padding: 20px;
}

.tableContent h2 {
  margin-left: 10px;
  color: var(--black_text);
}

.tableContent h3 {
  margin-left: 10px;
  color: var(--black_text);
  margin-bottom: 20px;
}

.dropdown-content {
  display: none;
  background-color: #fff;
  border-radius: 10px;
  min-width: 50px;
  border: 1px solid rgba(37, 36, 36, 0.281);
  padding: 15px 5px;
  z-index: 1;
  position: absolute;
}

legend {
  font-size: 25px;
  font-weight: 600;
  color: var(--black_text);
}

.opcoes:hover .dropdown-content {
  display: block;
}

.opcoes {
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
}

.tableContent table {
  background-color: var(--bg_white);
  width: 100%;
  border-radius: 10px 10px 10px 10px;
}

table th {
  height: 50px;
  font-size: 17px;
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
  text-align: center;
  height: 50px;
  padding: 0 10px 0 10px;
}

.tdStatus {
  color: #fff;
  width: 200px;
  height: 30px;
  border-radius: 5px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn_visualizar {
  border: none;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  background-color: var(--card_blue);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.fa-eye {
  color: #fff;
  font-size: 20px;
}

.btn-back {
  margin-top: 30px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  color: var(--main_primaryWhite);
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 90px;
  background-color: var(--card_green);
}

@media (max-width: 960px) {
  .btns {
    display: flex;
    padding: 10px 30px 10px 30px;
  }
  .tableContent thead {
    display: none;
  }

  .tableButton {
    display: block;
  }

  .opcoes {
    justify-content: end;
    width: 40%;
  }

  .opcoes button {
    height: 40px;
    padding: 10px;
    font-size: 15px;
  }
  .fas {
    font-size: 15px;
    margin-right: 5px;
  }

  .tableContent td {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    border-bottom: 3px dotted var(--font-color);
  }

  legend {
    text-align: center;
  }
}
</style>
