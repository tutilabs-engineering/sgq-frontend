<template>
  <fieldset className="tableContent">
    <legend>Análise de Produto</legend>
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
        <tr v-for="product in listProducts" :key="product.id">
          <td style="display: none"></td>
          <td data-title="Codigo">{{ product.codigo_produto }}</td>
          <td data-title="Produto">{{ product.descricao }}</td>
          <td data-title="Cliente">c c </td>
          <td data-title="Maquina">fdbfd</td>
          <td data-title="Data">fdbfdb</td>
          <td data-title="Inspetor">fdbfd</td>
          <td class="lastTd" data-title="Opcoes">
            <div class="opcoes">
              <ModalAtributo
                :modalAtributo="modalAtributo"
                @open-modal-atributo="openModalAtributo"
              />
              <ModalVariavel
                :modalVariavel="modalVariavel"
                @open-modal-variavel="openModalVariavel"
              />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </fieldset>
</template>

<script>
import ModalAtributo from "../components/Modal/ModalAtributo.vue";
import ModalVariavel from "../components/Modal/ModalVariavel.vue";
import http from "../services/productAnalysis/Products"

export default {
  components: { ModalAtributo, ModalVariavel },
  setup() {},
  name: "Table",
  emits: ["modalAtributo", "modalVariavel"],
  data() {
    return {
      listProducts: [],
      modalAtributo: false,
      modalVariavel: false,
    };
  },
  methods: {
    openModalAtributo() {
      this.modalAtributo = !this.modalAtributo;
    },
    openModalVariavel() {
      this.modalVariavel = !this.modalVariavel;
    },
  },
  created: async function() {
    const products = await http.listProducts();
    this.listProducts = products.data.list
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

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

.tableContent {
  position: relative;
  width: 100%;
}

.titleTable {
  color: var(--black_text);
  text-align: center;
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

@media (max-width: 1000px) {
  legend {
    text-align: center;
  }
  .opcoes {
    justify-content: end;
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

  [data-title] {
    color: var(--black_text);
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
}
</style>
