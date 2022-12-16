<template>
  <div>
    <div class="content-search-op">
      <h2>Buscar Startups vinculadas à OP</h2>
      <input type="number" name="" id="" v-model="numberOp">
      <button @click="searchOP">Buscar</button>



      <fieldset>
        <legend class="legenda-warning">Ordem de produção</legend>

        <table v-if="startupsInOp.length !== 0">
          <tr>
            <th>Código Startup</th>
            <th>Código Produto</th>
            <th>Status</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
          <tr v-for="startup in startupsInOp" :key="startup">
            <td>{{startup.code_startup}}</td>
            <td>{{startup.op.code_product}}</td>
            <td>{{startup.status.description}}</td>
            <td>{{startup.day}}</td>
            <button>Consultar</button>
          </tr>
        </table>

      </fieldset>



      <pre>{{
          startupsInOp
      }}</pre>
    </div>



  </div>

</template>

<script>
import http from '../services/startup/index'
export default {
  name: "BuscarOp",
  data() {
    return {
      numberOp: "",
      listStartups: [],
      startupsInOp: [],
    }

  },

  methods: {
    async searchOP() {
      this.listStartups = []
      this.startupsInOp = []
      await http.listAllStartups(0, 10, Number(this.numberOp)).then((res) => {
        console.log(res);
        this.listStartups = res.data.list
        this.showAllOps()
      })
    },

    showAllOps() {
      this.listStartups.map((item) => {
        if (item.op.code_op === this.numberOp) {
          this.startupsInOp.push(item)
          console.log(this.startupsInOp);
        }

      })

    }
  }

};
</script>

<style scoped>

</style>