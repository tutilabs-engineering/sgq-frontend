<template>
  <fieldset className="tableContent">
    
    <table v-if="statusTable" cellpadding="0" cellspacing="0">
      <div class="btns">
        <button @click="statusTable = true" class="btn startup-opened">
          Startups Abertas
        </button>
        <button @click="statusTable = false" class="btn startup">
          Startups Fechadas
        </button>
      </div>

      <thead>
        <th>
          <button @click="statusTable = true" class="btn startup-opened">
            Startups Abertas
          </button>
        </th>
        <th>
          <button @click="statusTable = false" class="btn startup">
            Startups Fechadas
          </button>
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>

      <thead>
        <th>Cód. Startup</th>
        <th>Cód. Produto</th>
        <th>Cód. Cliente</th>
        <th>Máquina</th>
        <th>Data</th>
        <th>Hora</th>
        <th>Criador</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="item in itemsAbertos" :key="item.id">
          <td style="display: none"></td>
          
          <td class="codeStartup" data-title="Cód. Startup">{{ item.code_startup }}</td>
          <td data-title="Cód. Produto">{{ item.op.code_product }}</td>
          <td data-title="Cód. Cliente">{{ item.op.code_client }}</td>
          <td data-title="Maquina">{{ item.op.machine }}</td>
          <td data-title="Data">{{ item.day }}</td>
          <td data-title="Hora">{{ item.start_time }}</td>
          <td data-title="Usuario">{{ item.userThatCreate.name }}</td>
          <td class="lastTd" data-title="Opcoes">
            <div className="opcoes">
              <i class="fas fa-ellipsis-h"></i>
              <div class="dropdown-content">
                <button className="btnOpcoes" @click="OpenReportStartup(item.id)">
                  <i class="fas fa-edit"></i>
                </button>
                <button className="btnOpcoes">
                  <i class="fas fa-file-excel"></i>
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
            Startups Abertas
          </button>
        </th>
        <th>
          <button @click="statusTable = false" class="btn startup-closed">
            Startups Fechadas
          </button>
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>
      <thead>
        <th>Cód. Startup</th>
        <th>Produto</th>
        <th>Cliente</th>
        <th>Máquina</th>
        <th>Data</th>
        <th>Hora</th>
        <th>Criador</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="item in itemsFechados" :key="item.id">
          {{item}}
          <td style="display: none"></td>
          <td class="codeStartup" data-title="Cód. Startup">{{ item.code_startup }}</td>
          <td data-title="Produto">{{ item.op.code_product }}</td>
          <td data-title="Cliente">{{ item.op.code_client }}</td>
          <td data-title="Maquina">{{ item.op.machine }}</td>
          <td data-title="Data">{{ item.day }}</td>
          <td data-title="Hora">{{ item.start_time }}</td>
          <td data-title="Usuario">{{ item.userThatCreate.name }}</td>
          <td class="lastTd" data-title="Opcoes">
            <div className="opcoes">
              <i class="fas fa-ellipsis-h"></i>
              <div class="dropdown-content">
                <button className="btnOpcoes">
                  <i class="fas fa-edit"></i>
                </button>
                <button className="btnOpcoes">
                  <i class="fas fa-file-excel"></i>
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

import http from "../../services/startup/"

export default {
  setup() {},
  name: "Table",
  data() {
    return {
      itemsAbertos: Array,
      itemsFechados: Array,
      statusTable: true,
    };
  },

  


  created: async function() {
    
    this.$store.commit("$SETISLOADING");
    const allStartups = await http.listAllStartups()
    let openedStartups = [];
    let closedStartups = [];
    allStartups.data.forEach((startup) => {
      startup.day = startup.day.split("T")[0]
      startup.day = this.formatDate(startup.day)
      startup.start_time = startup.start_time.split("T")[1].split(".")[0]
      if(startup.open === true) {
        openedStartups.push(startup)
      }else {
        closedStartups.push(startup)
      }
    });
    this.itemsAbertos = openedStartups
    this.itemsFechados = closedStartups

    this.$store.commit("$SETISLOADING");
  },
  methods: {
    OpenReportStartup: function(id_startup) {
      this.$router.push({path: "/create-startup-by-id", query: {id: id_startup}})
    },

    formatDate(date) {
      this.year = date.slice(0, -6)
      this.month = date.slice(5, -3)
      this.day = date.slice(-2)
      return date = `${this.day}/${this.month}/${this.year}`
    },
  }
};
</script>

<style scoped>
fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
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

@media (max-width: 1080px) {

  .btns {
    display: flex;
    padding: 10px 30px 10px 30px;
  }

  .tableContent{
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

  [data-title]{
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
