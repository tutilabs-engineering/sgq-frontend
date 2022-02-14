<template>
  <div>
    <h2>Analise de Produtos</h2>

    <table class="table table-sm">
      <thead>
        <tr>
          <th>Cod. Produto</th>
          <th>Produto</th>
          <th>Cod. Cliente</th>
          <th>Cliente</th>
          <th>Opção</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product of listProducts" :key="product.id">
          <td>{{product.cod_produto}}</td>
          <td>{{product.produto}}</td>
          <td>{{product.cod_cliente}}</td>
          <td>{{product.cliente}}</td>
          <td>
            <div class="btn-actions">
                <button @click="OpenAttribute(product.cod_produto)" class="btnAT">AT</button>
                <button @click="OpenVariable(product.cod_produto)" class="btnVA">VA</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import http from "../services/tabelaAnalista"

export default {
  data(){
    return{
      listProducts: []
    }
  },
  components: {

  },
  mounted(){

    http.listAllDataProducts().then((response)=>{
      this.listProducts = response.data.AlldataOp
    }).catch((error)=>{
      console.log(error.response)
    })
  },
  methods: {
    OpenAttribute: function(codeProduct){
      this.$router.push({path: "/modalatr", query: {id: codeProduct}})
    },
    OpenVariable: function(codeProduct){
      this.$router.push({path: "/modalvar", query: {id: codeProduct}})
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 1rem 1rem;
  font-size: 1.8rem;
  color: rgb(45, 46, 45);
  color:#1CC88A;
}
.table.table-sm {
  height: 150px;
  background-color: #fdfcfc;
  box-shadow: rgba(0, 0, 0, 0.404) 0px 3px 8px;
  width: 100%;
}

.table {
  margin: 3rem auto;
  padding: 3rem 0;
}
table {
  border-collapse: collapse;
  text-align: center;
}

th {
  font-weight: 700;
  color: rgb(80, 79, 79);
  padding: 30px;
  border-bottom: rgb(184, 184, 184) solid;
}
td {
  padding: 10px;
}
.iconsAction {
  width: 10%;
  margin-left: 2.5%;
  padding: 0.2rem;
  display: grid;
  grid-template: 1fr/1fr 1fr 1fr;
  grid-gap: 0.3rem;
}
.btn-actions {
  text-align: center;
}
.btn-actions button {
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin: 0 2px;
  background-color: blue;
  color: white;
  padding: 5px 8px;
  border-radius: 5px;
}

.btn-actions button:hover {
  background: rgb(38, 63, 170);
}

button.btnVA {
  background-color: green;
  color: white;
  padding: 5px 8px;
  border-radius: 5px;
}

button.btnVA:hover {
  background: rgb(24, 187, 24);
}
</style>