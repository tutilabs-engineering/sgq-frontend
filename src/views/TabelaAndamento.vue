<template>
  <fieldset className="tableContent" v-if="isOp === true">
    <legend>Análise de Startup - Condicional</legend>
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
        <tr v-for="item in displayedPosts" :key="item.id">
          <td style="display: none"></td>
          <td data-title="Cod. Startup">{{ item.code_startup }}</td>
          <td data-title="Cod. OP">{{ item.op.code_op }}</td>
          <td data-title="Cod. Produto">{{ item.op.code_product }}</td>
          <td data-title="Cod. Cliente">{{ item.op.code_client }}</td>
          <td data-title="Maquina">{{ item.op.machine }}</td>
          <td data-title="Data">{{ formatDate(item.day) }}</td>
          <td data-title="Técnico">{{ item.userThatCreate.name }}</td>
          <td class="lastTd" data-title="Opcoes">
            <div className="opcoes">
              <button
                className="btn_visualizar"
                @click="OpenReportStartup(item.id)"
              >
                <i class="fa fa-eye"></i>
                Visualizar
              </button>
              <ModalNovaOp
                :modalNovaOp="modalNovaOp"
                :nameRouter="nameRouter"
                @open-modal-novaOp="openModalNovaOp"
                :startup="item"
                :startup_id="item.id"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination-component">
      <button
        class="btn-pagination"
        type="button"
        v-if="page != 1"
        @click="page--"
      >
        Prev
      </button>
      <button
        class="btn-pagination"
        type="button"
        v-for="pageNumber in pages.slice(page - 1, page + 5)"
        :key="pageNumber"
        @click="page = pageNumber"
      >
        {{ pageNumber }}
      </button>
      <button
        class="btn-pagination"
        type="button"
        @click="page++"
        v-if="page < pages.length"
      >
        Next
      </button>
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
import ModalNovaOp from "../components/Modal/ModalNovaOp.vue";
export default {
  name: "Table",
  components: {
    ModalNovaOp,
  },
  emits: ["modalNovaOp"],

  methods: {
    setPages() {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    
    OpenReportStartup: function (id_startup) {
      this.$router.push({
        path: "/create-startup-by-id",
        query: { id: id_startup },
      });
    },
    verifyOP: async function (list_op) {
      if (list_op == 0) {
        return false;
      } else {
        return true;
      }
    },

    openModalNovaOp() {
      this.modalNovaOp = !this.modalNovaOp;
    },

    formatDate(date) {
      date = date.slice(0, -14);
      this.year = date.slice(0, -6);
      this.month = date.slice(5, -3);
      this.day = date.slice(-2);
      return (date = `${this.day}/${this.month}/${this.year}`);
    },
  },
  created: async function () {
    this.$store.commit("$SETISLOADING");
    const listCount = await http.listCountOfStartupsByStatus();
    this.listConditional = listCount.data.reportStartups.conditional.reverse();
    this.isOp = await this.verifyOP(this.listConditional.length);

    //pagination
    this.posts = this.listConditional

    this.$store.commit("$SETISLOADING");
  },

  watch: {
    posts() {
      this.setPages();
    }
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },

  data() {
    return {
      listConditional: [],
      isOp: false,
      modalNovaOp: false,
      nameRouter: "TabelaAndamento",

      btnChanged: false,

      posts: [""],
      page: 1,
      perPage: 10,
      pages: [],
    };
  },
};
</script>

<style scoped>
.pagination-component {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.btn-pagination {
  cursor: pointer;
  color: #fff;
  width: 40px;
  height: 30px;
  border: none;
  margin: 2px;
  background-color: var(--bg_green);
  border-radius: 5px;
}

.btn-pagination:focus {
  background-color: var(--card_blue);
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

.tableContent table {
  background-color: var(--bg_white);
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  overflow-x: scroll;
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
  border-radius: 10px;
  color: #292828;
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
  justify-content: center;
  align-items: center;
  gap: 5px;
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

.fa-plus-circle {
  color: var(--card_orange);
}
.fa-file-alt {
  color: var(--card_blue);
}

.fa-eye {
  color: #fff;
  font-size: 20px;
}

.btns {
  display: none;
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
