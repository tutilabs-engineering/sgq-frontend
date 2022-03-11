<template>
<div class="tableContent">
 
      <table cellpadding="0" cellspacing="0">

        <thead>
          <th>Identificação</th>
          <th v-for="cavidade in qtdeCavidade" :key="cavidade">{{ "Cavidade " + cavidade}}</th>
        </thead>

        <tbody>
          <tr v-for="i in 3" :key="i">
            <td>{{"Identificador " + i}}</td>
            <td v-for="cavidade in qtdeCavidade" :key="cavidade"><input type="text" placeholder="Informe o valor"></td>
          </tr>
        </tbody>
      </table>
 
  </div>
</template>

<script>
export default {
    props: {
        numberCavidade: Number,
    },

    data() {
        return {
            qtdeCavidade: parseInt( this.numberCavidade)
        }
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

input {
    border-radius: 10px;
    border: none;
    width: 80%;
    padding: 10px;
    outline: none;
    border: var(--black_text);
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