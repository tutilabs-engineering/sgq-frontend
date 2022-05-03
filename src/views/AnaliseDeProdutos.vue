<template>
  <fieldset class="search-field">
    <legend><i class="fas fa-filter"></i>Buscar Produto</legend>
    <input type="text" v-mask="'##.###.######.##-##'" placeholder="Teste" v-model="codeProductValue">
    <button @click="searchProduct()"><i class="fas fa-search"></i> Buscar</button>
  </fieldset>

  <fieldset className="tableContent" v-if="!isSearched">
    <legend>Análise de Produto</legend>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <th>Cód. Produto</th>
        <th>Produto</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="product in listAllProducts" :key="product.id">
          <td style="display: none"></td>
          <td data-title="Cód. Prod.">{{ product.code_product }}</td>
          <td data-title="Produto">{{ product.name_product }}</td>
          <td class="lastTd" data-title="Opções">
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

  <fieldset className="tableContent" v-else>
    <legend>Análise de Produto</legend>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <th>Cód. Produto</th>
        <th>Produto</th>
        <th>Opções</th>
      </thead>

      <tbody>
        <tr v-for="product in returnProductSearched" :key="product.id">
          <td style="display: none"></td>
          <td data-title="Cód. Prod.">{{ product.code_product }}</td>
          <td data-title="Produto">{{ product.name_product }}</td>
          <td class="lastTd" data-title="Opções">
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
      returnProductSearched: [],
      listAllProducts: [],
      modalAttributeOpen: false,
      modalVariableOpen: false,
      dataHeader: Object,
      codeProductValue: "",
      isSearched: false,
    };
  },

  watch: {
    codeProductValue(newValue, oldValue){
      if(newValue === "" || oldValue === ""){
        this.isSearched = false
      }
    }
  },
  methods: {

    searchProduct: async function (){
      
      if(this.codeProductValue != ""){
        this.$store.commit("$SETISLOADING");
        this.isSearched = !this.isSearched;
        this.returnProductSearched = []
        await http.searchProductByCodeProduct(this.codeProductValue).then( (res) => {
          this.returnProductSearched.push(res.data)
        }).catch( (error) => {
          console.log(error);
          this.isSearched = !this.isSearched;
          console.log("Código invalido");
      })
        this.$store.commit("$SETISLOADING"); 
      }else {
        console.log("Informe o codigo");
      }
      
    },

    StartComponentAttribute: function (dataProduct) {
      this.modalAttributeOpen = !this.modalAttributeOpen;
      this.dataHeader = dataProduct;
      console.log(this.dataHeader);
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
    this.listAllProducts = await http.listProducts();
    this.listAllProducts = this.listAllProducts.data.list;
    console.log(this.listAllProducts);
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

.search-field {
  background-color: transparent;
  width: 50%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

.search-field input {
  width: 60%;
  height: 40px;
  border: none;
  border: 1px solid rgba(37, 36, 36, 0.281);
  border-radius: 5px;
  outline: none;
  padding: 10px;
}

.search-field button{
  max-width: 20%;
  min-width: 40%;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--card_green);
  color: #fff;
  font-weight: 400;
  cursor: pointer;
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

@media (max-width: 765px) {
  .search-field {
      width: 100%;
      display: flex;
  }
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
    min-height: 70px;
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

 

 
}
</style>
