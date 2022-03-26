<template>
  <fieldset className="tableContent">
    <legend>Análise de Startup - Reprovadas</legend>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <th>Cód.Startup</th>
        <th>Produtos</th>
        <th>Cliente</th>
        <th>Máquina</th>
        <th>Data</th>
        <th>Inspetor</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="item in itemsFechados" :key="item.id">
          <td style="display: none"></td>
          <td data-title="Codigo">{{ item.codigo }}</td>
          <td data-title="Produto">{{ item.produto }}</td>
          <td data-title="Cliente">{{ item.cliente }}</td>
          <td data-title="Maquina">{{ item.maquina }}</td>
          <td data-title="Data">{{ item.data }}</td>
          <td data-title="Inspetor">{{ item.inspetor }}</td>
          <td class="lastTd" data-title="Opcoes">
            <div class="opcoes">
              <button className="btn_visualizar">
              <i class="fas fa-eye"></i>
              Visualizar
            </button>
            </div>
            
          </td>
        </tr>
      </tbody>
    </table>
  </fieldset>
</template>

<script>
export default {
  setup() {},
  name: "Table",
  props: ["titleTable", "iconeAdicionar", "iconeFile", "iconeEdit"],
  data() {
    return {
      itemsAbertos: [
        {
          id: 1,
          produto: "produto D",
          codigo: "521",
          cliente: "Honda",
          maquina: "Injetora",
          data: "22-03-2022",
          inspetor: "Jorge",
        },
        {
          id: 2,
          produto: "produto E",
          codigo: "523",
          cliente: "Yamaha",
          maquina: "Injetora",
          data: "23-03-2022",
          inspetor: "Renato",
        },
        {
          id: 3,
          produto: "produto F",
          codigo: "242",
          cliente: "Tutu",
          maquina: "Injetora",
          data: "24-03-2022",
          inspetor: "Guilherme",
        },
      ],
      itemsFechados: [
        {
          id: 1,
          produto: "produto A",
          codigo: "241",
          cliente: "Yamaha",
          maquina: "Injetora",
          data: "21-02-2022",
          inspetor: "Jorge",
        },
        {
          id: 2,
          produto: "produto B",
          codigo: "598",
          cliente: "Yamaha",
          maquina: "Injetora",
          data: "21-03-2022",
          inspetor: "Jorge",
        },
        {
          id: 3,
          produto: "produto C",
          codigo: "242",
          cliente: "Tutu",
          maquina: "Injetora",
          data: "22-01-2022",
          inspetor: "Guilherme",
        },
      ],
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

.opcoes {
  display: flex;
  justify-content:center;
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
  position: relative;
  display: flex;
  justify-content: space-around;
  background: var(--btn_blue);
  padding: 0.5rem;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: var(--main_primaryWhite);
  align-items: center;
  width: 80%;
  margin: auto;
  cursor: pointer;
}

.btn_visualizar, .fa-eye {
  font-size: 20px;
  color: var(--main_primaryWhite);
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
