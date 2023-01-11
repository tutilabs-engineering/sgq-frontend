<template>
  <fieldset className="tableContent">
    <legend>Startups Reprovadas</legend>
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
        <tr v-for="item in listDisapproved" :key="item.id">
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

    <button @click="init()" class="btn-pagination" v-if="currentPage !== 0">Inicio</button>

    <button @click="back()" class="btn-pagination" v-if="currentPage !== 0">Voltar</button>

    <button @click="next()" class="btn-pagination">Proximo</button>
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
      currentPage: 0,
      btnChanged: false,

      posts: [""],
      page: 1,
      perPage: 9,
      pages: [],
    };
  },
  computed: {
    displayedPosts() {
      return this.paginate(this.posts);
    },
  },

  watch: {
    posts() {
      this.setPages();
    },
  },

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

    async filterListStartups() {
      await http.filterStartupsByStatus(this.currentPage, 10, 2).then((res) => {
        this.listDisapproved = res.data.listAllStartups
      })
    },


    async init() {
      this.$store.commit("$SETISLOADING");
      this.currentPage = 0
      await this.filterListStartups()
      this.$store.commit("$SETISLOADING");
    },

    async back () {
      this.$store.commit("$SETISLOADING");
      this.currentPage = this.currentPage - 10
      await this.filterListStartups()
      this.$store.commit("$SETISLOADING");
    },

    async next () {
      this.$store.commit("$SETISLOADING");
      this.currentPage = this.currentPage + 10
      await this.filterListStartups()
      this.$store.commit("$SETISLOADING");
    }
  },

  created: async function () {
    this.$store.commit("$SETISLOADING");
    await this.filterListStartups()
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

.btn-pagination {
  cursor: pointer;
  color: #fff;
  border: none;
  margin: 2px;
  background-color: var(--bg_green);
  border-radius: 5px;
  padding: 0.4rem;
  width: 80px;
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

.tableContent {
  position: relative;
  width: 100%;
  font-size: 0.85rem;
  background-color: var(--bg_white);
  border: 1px solid rgba(37, 36, 36, 0.281);
  border-radius: 0.4rem;
  padding: 20px;
  color: var(--black_text);
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
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--black_text);
}

.opcoes:hover .dropdown-content {
  display: block;
}

.opcoes {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.tableContent table {
  background-color: var(--bg_white);
  width: 100%;
  border-radius: 10px 10px 10px 10px;
}

table th {
  height: 50px;
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
  .opcoes {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }

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
