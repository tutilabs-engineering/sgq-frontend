<template>
  <div>
    <h2>Metrologia</h2>

    <table class="table table-sm">
      <thead>
        <tr>
          <th>OP</th>
          <th>Cod. Produto</th>
          <th>Produto</th>
          <th>Técnico</th>
          <th>Data de Abertura</th>
          <th>Opção</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>123456</td>
          <td>123</td>
          <td>Produto A</td>
          <td>Luan de Souza</td>
          <td>20-09-2021</td>
          <td><input @click="OpenMetrologia" class="optionBtn" type="button" value="VISUALIZAR"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  components: {
  },
  methods: {
    OpenMetrologia: function() {
      this.$router.push("/attributes")
    }
  },
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

.optionBtn {
  background: #0077FF;
  color: white;
  font-size: 13px;
  cursor: pointer;
  border-radius: 8px;
  border: none;
  padding: 3px 8px;
}

.optionBtn:hover {
  background: #0253af;
}
</style>