<template>
  <div>
    <input type="radio" id="one" value="first" v-model="picked">
    <label for="one">Buscar por Ordem de Produção</label>
    <br>
    <input type="radio" id="two" value="second" v-model="picked">
    <label for="two">Buscar por numero de startup</label>
    <br>
    <div v-if="picked === 'first'">
      <h2>Buscar por OP</h2>
      <input type="number" name="" id="" v-model="numberOp">
      <button @click="searchOP">Buscar</button>

      <pre>{{
        startupsInOp}}</pre>
    </div>

    <div v-else>
      <h2>Buscar por Número de Startup</h2>
      <input type="number">

    </div>


  </div>

</template>

<script>
import http from '../services/startup/index'
export default {
  data() {
    return {
      picked: "first",
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
          this.startupsInOp = item
          console.log(this.startupsInOp);
        }

      })

    }
  }

};
</script>

<style scoped>

</style>