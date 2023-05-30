<template>
  <div>
    <div class="content-search-op">
      <h2>Buscar Startups vinculadas à OP</h2>
      <input type="number" name="" id="" v-model="numberOp" placeholder="00000">
      <button class="btn" @click="searchOP">Buscar</button>



      <fieldset>
        <legend class="legenda-warning">Ordem de produção</legend>

        <table v-if="startupsInOp.length !== 0">
          <tr>
            <th>Código Startup</th>
            <th>Código Produto</th>
            <th>Máquina</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
          <tr v-for="startup in startupsInOp" :key="startup">
            <td>{{startup.code_startup}}</td>
            <td>{{startup.op.code_product}}</td>
            <td>{{startup.op.machine}}</td>
            <td>{{formatDate(startup.day)}}</td>
            <td style="display: flex; gap: 10px; flex-direction: center; align-items: center; justify-content: center;">
              <button @click="OpenReportStartup(startup.id)">Consultar</button>
              <button>
                 <a target="_blank" 
                 :href="`http://185.209.179.253:7550/?startup=${startup.id}`"
                 >
                    PIQ
                </a>
                </button>
              </td>
      
            
          </tr>
        </table>

        <span v-else>Não há resultados</span>

      </fieldset>


    </div>



  </div>

</template>

<script>
import http from '../services/startup/index'
import dayjs from "dayjs";
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
      this.$store.commit("$SETISLOADING");
      this.listStartups = []
      this.startupsInOp = []
      await http.listAllStartups(0, 10, Number(this.numberOp)).then((res) => {
        console.log(res);
        this.listStartups = res.data.list
        this.showAllOps()
      })
    },
    async RedirectPIQ(){
      this.r
    },

    formatDate(date) {
      return dayjs(date).format('DD/MM/YYYY - HH:mm')
    },

    showAllOps() {
      this.listStartups.map((item) => {
        if (item.op.code_op === this.numberOp) {
          this.startupsInOp.push(item)
          console.log(this.startupsInOp);
        }

      })

      this.$store.commit("$SETISLOADING");

    },

    OpenReportStartup: function (id_startup) {
      this.$router.push({
        path: "/create-startup-by-id",
        query: { id: id_startup },
      });
    },
  }

};
</script>

<style scoped>

.btn_visualizar_o {
  border: 2px solid var(--card_green);
  width: 120px;
  height: 40px;
  border-radius: 5px;
  color: var(--black_text);
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;

}

fieldset {
  margin-top: 20px;
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  background-color: var(--bg_white);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
legend {
  font-size: 15px;
  font-weight: 600;
  color: var(--black_text);
}

table td {
  text-align: center;
}

table tr button {
  width: 100%;
  cursor: pointer;
  border-radius: 0.25rem;
  background-color: var(--bg_green);
  height: 2.5rem;
  color: #ffffff;
  border:none;
  text-decoration: none;
}

table tr button a {
  background: #10b981;
  color: #ffffff;
  border:none;
  text-decoration: none;
}

h2 {
  margin-bottom: 1rem;
}

.content-search-op {
  color: var(--black_text);
}
.content-search-op input {
  height: 2rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: none;
  border: 1px solid var(--black_text);
  
}

.content-search-op button {
  width: 5rem;
  height: 2rem;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  color: #ffff;
  background-color: var(--bg_green);
}

</style>