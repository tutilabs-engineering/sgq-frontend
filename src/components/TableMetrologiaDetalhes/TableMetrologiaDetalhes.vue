<template>
  <div className="table-metrologia">
    <table cellpadding="0" cellspacing="0">

      <thead>
        <th>Coordenada</th>
        <th>Cavidade 1</th>
        <th>Cavidade 2</th>
        <th>Cavidade 3</th>
        <th>Cavidade 4</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td style="display: none"></td>
          <td class="codeStartup" data-title="Coordenada">{{ user.cordenada }}</td>
          <td data-title="Cavidade 1">{{ user.cavidade01 }} cm</td>
          <td data-title="Cavidade 2">{{ user.cavidade02 }} cm</td>
          <td data-title="Cavidade 3">{{ user.cavidade03 }} cm</td>
          <td data-title="Cavidade 4">{{ user.cavidade04 }} cm</td>
          <td class="lastTd" data-title="Opcoes">
            <button class="btn btn-view">Visualizar</button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  setup() {},
  name: "Table",
  data() {
    return {
      users: [
        {
          id: 1,
          cordenada: "Iden 01",
          cavidade01: "4",
          cavidade02: "1",
          cavidade03: "2",
          cavidade04: "3",
        },
        {
          id: 2,
          cordenada: "Iden 02",
          cavidade01: "2",
          cavidade02: "1",
          cavidade03: "7",
          cavidade04: "1",
        },
        {
          id: 3,
          cordenada: "Iden 03",
          cavidade01: "3",
          cavidade02: "2",
          cavidade03: "1",
          cavidade04: "2",
        },
        {
          id: 4,
          cordenada: "Iden 04",
          cavidade01: "4",
          cavidade02: "1",
          cavidade03: "2",
          cavidade04: "3",
        },
        
      ],
      statusTable: true,
    };
  },
};
</script>

<style scoped>

.table-metrologia {
  width: 70%;
  margin-top: 60px;

}

.table-metrologia table {
  background-color: var(--bg_white);
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
}

table th {
  height: 50px;
  font-size: 17px;
  color: var(--black_text);
  padding: 10px 10px 0 10px;
}

.table-metrologia tr {
  height: 100px;
}

table td {
  border-top: 0.4px solid rgba(0, 0, 0, 0.199);
}

.table-metrologia td {
  text-align: center;
  height: 50px;
  padding: 0 10px 0 10px;
}

.opcoes {
  display: flex;
  flex-direction: column;
}

.btn {
  cursor: pointer;
  border-radius: 5px;
  width: 80px;
  height: 30px;
  border: none;
  color: var(--main_primaryWhite);
  background-color: var(--btn_blue);
}

.btns {
  display: none;
}

@media (max-width: 1114px) and (min-width: 800px){
    .table-metrologia table {
        font-size: 13px;
    }

    .table-metrologia th {
        font-size: 12px;
    }
}

@media (max-width: 800px) {

  .table-metrologia {
    width: 100%;
  }
  .table-metrologia thead {
    display: none;
  }

  .tableButton {
    display: block;
  }

  .table-metrologia table {
    border-radius: 10px 10px 0 0;
  }

  .table-metrologia td {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  [data-title]{
    color: var(--black_text);
  }


  .table-metrologia td:first-of-type {
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .table-metrologia td:not(:first-of-type):before {
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
}
</style>
