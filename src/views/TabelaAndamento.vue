<template>
  <fieldset className="tableContent">
    <legend>Análise de Startup - Em Andamento</legend>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <th>Cod. OP</th>
        <th>Cod. Cliente</th>
        <th>Máquina</th>
        <th>Data</th>
        <th>Inspetor</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="item in listConditional" :key="item.id">
          <td style="display: none"></td>
           <td data-title="Cod.OP">{{ item.op.code_product }}</td>
          <td data-title="Cod. Cliente">{{ item.op.code_client }}</td>
          <td data-title="Maquina">{{ item.op.machine }}</td>
          <td data-title="Data">{{ formatDate(item.day) }}</td>
          <td data-title="Técnico">{{ item.userThatCreate.name }}</td>
          <td class="lastTd" data-title="Opcoes">
            <div className="opcoes">
              <i class="fas fa-ellipsis-h"></i>
              <div class="dropdown-content">
                <button className="btnOpcoes">
                  <i class="fas fa-plus-circle"></i>
                </button>
                <button className="btnOpcoes">
                  <i class="fas fa-file-alt"></i>
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </fieldset>
</template>

<script>
import http from "../services/startup/"
export default {
  setup() {},
  name: "Table",

  methods: {
  formatDate(date) {
      date = date.slice(0, -14);
      this.year = date.slice(0, -6)
      this.month = date.slice(5, -3)
      this.day = date.slice(-2)
      return date = `${this.day}/${this.month}/${this.year}`
    },
  },
    created: async function() {
    this.$store.commit("$SETISLOADING");
    const listCount = await http.listCountOfStartupsByStatus()
    this.listConditional = listCount.data.reportStartups.conditional
    this.$store.commit("$SETISLOADING");
  },

  data() {
    return {
      listConditional: [],
    };
  },
};
</script>

<style scoped>
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

.fa-plus-circle {
  color: var(--card_orange);
}
.fa-file-alt {
  color: var(--card_blue);
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
