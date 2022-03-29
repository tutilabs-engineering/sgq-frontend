<template>
<div class="tableContent">
 
      <table cellpadding="0" cellspacing="0">

        <thead>
          <th>Identificação</th>
          <th v-for="variable in variables" :key="variable.id">{{ "Cavidade"}}</th>
        </thead>

        <tbody>
          <tr v-for="variable in variables" :key="variable.id">
            <td>{{variable.description}}</td>
            <td v-for="variableCota in variables" :key="variableCota.id"><input  class="inputdataCav" type="text" placeholder="Informe o valor"></td>
          </tr>
        </tbody>
      </table>
 
  </div>
</template>

<script>

import http from "../../services/productAnalysis/Variables";

export default {
    props: {
        numberCavidade: Number,
        codProd: String,
    },

    data() {
        return {
            variables: [{}],
            qtdeCavidade: this.numberCavidade
        }
    },

    created: async function (){
      await http
        .FindVariableByCodeProduct(this.codProd)
        .then((res) => {
          this.variables = res.data.list;
          console.log(this.variables)
        }).catch ((error) => {
          console.log(error)
        });
    }
  
};

</script>

<style scoped>

fieldset {
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: -20px;
}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

.tableContent {
  width: 100%;
  display: flex;
  justify-content: center;
}

table {
  width: 100%;
  padding: 20px;
  background-color: transparent;
}

table th {
  font-size: 17px;
  color:  var(--black_text);
  padding: 10px 10px 10px 10px;
}

.tableContent tr {
  height: 60px;
}

.table td {
  text-align: center;
  border-top: 0.4px solid rgba(0, 0, 0, 0.199);
}

.inputdataCav {
  padding: 0 10px 0 10px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid var(--black_text);
  outline: none;
}


.tableContent td {
  text-align: center;
  height: 30px;
  padding: 0 10px 0 10px;
}

@media (max-width: 965px) {
  .tableContent {
    padding: 0;
  }

  legend {
    text-align: center;
  }
}
</style>