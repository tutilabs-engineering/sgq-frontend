<template>
  <fieldset className="tableContent">
    <legend>Análise de Produto</legend>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <th>Cód. Produto</th>
        <th>Produto</th>
        <th>Cód. Cliente</th>
        <th>Cliente</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="product in listProducts" :key="product.id">
          <td style="display: none"></td>
          <td data-title="Cód. Prod.">{{ product.codigo_produto }}</td>
          <td data-title="Produto">{{ product.descricao }}</td>
          <td data-title="Cód. Cli.">xxxxxxxxxxxxxxxxx</td>
          <td data-title="Cliente">{{ product.cliente }}</td>
          <td class="lastTd" data-title="Opcoes">
            <div class="opcoes">
              <button class="btn btn-at" @click="StartComponentAttribute(product)">AT</button>
              <button class="btn btn-va" @click="StartComponentVariable(product)">VA</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <ModalAttribute v-if="modalAttributeOpen" :dataProduct="dataHeader" @changeStatus="changeStatusModalAtrribute"/>
    <ModalVariable v-if="modalVariableOpen" :dataProduct="dataHeader" @changeStatus="changeStatusModalVariable"/>
  </fieldset>
</template>

<script>
import ModalAttribute from "../components/Modal/ModalAtributo.vue";
import ModalVariable from "../components/Modal/ModalVariavel.vue";
import http from "../services/productAnalysis/Products";


export default {
  components: { ModalAttribute, ModalVariable },
  setup() {},
  name: "Table",
  emits: ["modalAtributo", "modalVariavel"],
  data() {
    return {
      listProducts: [],
      listAttributes: [],
      modalAttributeOpen: false,
      modalVariableOpen: false,
      dataHeader: Object,
    };
  },
  methods: {
    StartComponentAttribute: function (dataProduct) {
      this.modalAttributeOpen = !this.modalAttributeOpen;
      this.dataHeader = dataProduct;
    },
    StartComponentVariable: function (dataProduct) {
      this.modalVariableOpen = !this.modalVariableOpen;
      this.dataHeader = dataProduct;
    },

    changeStatusModalAtrribute () {
      this.modalAttributeOpen = !this.modalAttributeOpen
    },
    changeStatusModalVariable () {
      this.modalVariableOpen = !this.modalVariableOpen
    }

  },
  created: async function () {
    this.$store.commit("$SETISLOADING");
    const products = await http.listProducts();
    this.listProducts = products.data.list;
    this.$store.commit("$SETISLOADING");  
  },
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

 .btn {
    border: none;
    width: 50px;
    height: 30px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }

  .btn-at {
    background-color: var(--card_blue);
  }

  .btn-va {
    background-color: var(--card_orange);
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
