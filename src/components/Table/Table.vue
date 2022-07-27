<template>
  <fieldset className="tableContent">
    <legend>Startups</legend>
    <table v-if="statusTable" cellpadding="0" cellspacing="0">
      <div class="btns">
        <button @click="statusTable = true" class="btn startup-opened">
          Startups Abertas
        </button>
        <button @click="statusTable = false" class="btn startup">
          StartupsFechadas
        </button>
      </div>

      <thead>
        <th>
          <button @click="statusTable = true" class="btn startup-opened">
            Abertas
          </button>
        </th>
        <th>
          <button @click="statusTable = false" class="btn startup">
            Fechadas
          </button>
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>

      <thead>
        <th>Cód. Startup</th>
        <th>Cód. OP</th>
        <th>Cód. Produto</th>
        <th>Máquina</th>
        <th>Metrologia</th>
        <th>Status</th>
        <th>Preench.</th>
        <th>Data</th>
        <th>Criador</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="item in currentItens" :key="item.id">
          <td style="display: none"></td>

          <td class="codeStartup" data-title="Cód. Startup">
            {{ item.code_startup }}
          </td>
          <td data-title="Cód. OP">{{ item.op.code_op }}</td>
          <td data-title="Cód. Produto">{{ item.op.code_product }}</td>

          <td data-title="Maquina">{{ item.op.machine }}</td>
          <td data-title="Metrologia">
            {{ verifyMetrology(item.metrology) }}
          </td>
          <td data-title="Status">{{ verifyOpenStartup(item) }}</td>
          <td data-title="Preenchimento">{{ verifyFillStartup(item) }}</td>

          <!-- <td data-title="Metrologia">{{ verifyMetrology(item.metrology) }}</td> -->
          <td data-title="Data - Hora">
            {{ item.day }} <br />
            {{ item.start_time }}
          </td>
          <td data-title="Usuario">{{ item.userThatCreate.name }}</td>
          <td class="lastTd" data-title="Opcoes">
            <div className="opcoes">
              <i class="fas fa-ellipsis-h"></i>
              <div class="dropdown-content">
                <button className="btnOpcoes" @click="OpenReportStartup(item.id)">
                  <i class="fas fa-edit"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <table v-else cellpadding="0" cellspacing="0">
      <div class="btns">
        <button @click="statusTable = true" class="btn startup">
          Startups Abertas
        </button>
        <button @click="statusTable = false" class="btn startup-closed">
          Startups Fechadas
        </button>
      </div>

      <thead>
        <th>
          <button @click="statusTable = true" class="btn startup">
            Abertas
          </button>
        </th>
        <th>
          <button @click="statusTable = false" class="btn startup-closed">
            Fechadas
          </button>
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>
      <thead>
        <th>Cód. Startup</th>
        <th>Cód. OP</th>
        <th>Cód. Produto</th>
        <th>Máquina</th>
        <th>Metrologia</th>
        <th>Status</th>
        <th>Preenchimento</th>
        <th>Data</th>
        <th>Criador</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="item in listPaginated" :key="item.id">
          <td style="display: none"></td>
          <td class="codeStartup" data-title="Cód. Startup">
            {{ item.code_startup }}
          </td>
          <td data-title="Cód. OP">{{ item.op.code_op }}</td>
          <td data-title="Cód. Produto">{{ item.op.code_product }}</td>
          <td data-title="Maquina">{{ item.op.machine }}</td>
          <td data-title="Metrologia">{{ verifyMetrology(item.metrology) }}</td>
          <td data-title="Status">{{ verifyOpenStartup(item) }}</td>
          <td data-title="Preenchimento">{{ verifyFillStartup(item) }}</td>
          <td data-title="Data - Hora">
            {{ item.day }} <br />
            {{ item.start_time }}
          </td>
          <td data-title="Usuario">{{ item.userThatCreate.name }}</td>
          <td class="lastTd" data-title="Opcoes">
            <div className="opcoes">
              <i class="fas fa-ellipsis-h"></i>
              <div class="dropdown-content">
                <button className="btnOpcoes" @click="OpenReportStartup(item.id)">
                  <i class="fas fa-edit"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="statusTable" class="pagination-component">
      <div v-for="index in pages" :key="index">
        <button value="index" @click="setNewIndex(index)" :class="changeColorBtn(index)">
          {{ index }}
        </button>
      </div>
    </div>

    <div v-else class="pagination-component">
      <!-- <div v-for="index in pagesClosed" :key="index">
        <button
          value="index"
          @click="setNewIndexClosed(index)"
          :class="changeColorBtn(index)"
        >
          {{ index }}
        </button>
      </div> -->

      <Pagination :list="itemsFechados" @displayNewList="displayNewList" />
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
      itemsAbertos: Array,
      itemsFechados: Array,
      statusTable: true,
      // Apenas para paginação
      totalItens: "10",
      itensPerPage: "10",
      currentPage: 0,
      pages: "",
      startIndex: "",
      endIndex: "",
      currentItens: "",


      listPaginated: []
    };
  },
  watch: {
    statusTable(newValue) {
      if (newValue === true) {
        this.currentPage = 0;
      }
      else {
        this.currentPage = 0;
      }
    },
  },
  created: async function () {
    this.$store.commit("$SETISLOADING");
    const allStartups = await http.listAllStartups();
    let openedStartups = [];
    let closedStartups = [];
    allStartups.data.forEach((startup) => {
      startup.day = dayjs(startup.day).locale("pt-br").format("DD/MM/YYYY");
      startup.start_time = dayjs(startup.start_time)
        .locale("pt-br")
        .format("HH:mm:ss");
      if (startup.open === true) {
        openedStartups.push(startup);
      }
      else {
        closedStartups.push(startup);
      }
    });
    this.itemsAbertos = openedStartups.reverse();
    this.itemsFechados = closedStartups.reverse();
    this.existItemAbertos(this.itemsAbertos.length);
    this.existItemFechados(this.itemsFechados.length);
    this.totalItens = this.itemsAbertos.length;
    this.totalItensClosed = this.itemsFechados.length;
    this.pages = this.calcPages();
    this.startIndex = this.currentPage * this.itensPerPage;
    this.endIndex = parseInt(this.startIndex) + parseInt(this.itensPerPage);
    this.currentItens = this.itemsAbertos.slice(this.startIndex, this.endIndex);
    this.$store.commit("$SETISLOADING");
  },
  methods: {

    displayNewList(e) {
      this.listPaginated = e
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
      if(metrology){
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
      const allStartups = await http.listAllStartups();
      let openedStartups = [];
      allStartups.data.forEach((startup) => {
        startup.day = dayjs(startup.day).locale("pt-br").format("DD/MM/YYYY");
        startup.start_time = dayjs(startup.start_time)
          .locale("pt-br")
          .format("HH:mm:ss");
        if (startup.open === true) {
          openedStartups.push(startup);
        }
      });
      this.itemsAbertos = openedStartups.reverse();
      this.currentItens = this.itemsAbertos.slice(this.startIndex, this.endIndex);
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
    existItemAbertos(abertos) {
      this.$emit("returnItemAbertos", abertos);
    },
    existItemFechados: async function (fechados) {
      this.$emit("returnItemFechados", fechados);
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

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.noStartup {
  width: 100%;
  background-color: red;
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

.opcoes:hover .dropdown-content {
  display: block;
}

.tableContent {
  margin-top: 40px;
  font-size: 14px;
}

.tableContent table {
  background-color: var(--bg_white);
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  overflow-x: scroll;
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
  font-size: 13px;
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

.btnOpcoes {
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.btnOpcoes i {
  margin: 0 10px 0 10px;
}

.fa-ellipsis-h {
  color: var(--card_green);
  font-size: 25px;
}

.fa-edit {
  color: var(--card_blue);
}

.fa-file-excel {
  color: var(--card_green);
}

.btns {
  display: none;
}

@media (max-width: 1100px) {
  legend {
    text-align: center;
  }

  .btns {
    display: flex;
    padding: 10px 30px 10px 30px;
  }

  .tableContent {
    padding: 0;
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
    border-bottom: 1.6px solid var(--card_green);
  }
}
</style>
