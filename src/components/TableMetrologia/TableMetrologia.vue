<template>
  <fieldset className="tableContent">
    <legend>Metrologia</legend>
    <table v-if="statusTable" cellpadding="0" cellspacing="0">
      <div class="btns">
        <button @click="statusTable = true" class="btn startup-opened">
          Solicitações
        </button>
        <button @click="statusTable = false" class="btn startup">
          Histórico
        </button>
      </div>

      <thead>
        <th>
          <button @click="statusTable = true" class="btn startup-opened">
            Solicitações
          </button>
        </th>
        <th>
          <button @click="statusTable = false" class="btn startup">
            Histórico
          </button>
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>

      <thead>
        <th>O.Produção</th>
        <th>Cod. Produto</th>
        <th>Produto</th>
        <th>Técnico</th>
        <th>Opção</th>
      </thead>

      <tbody>

        <tr v-for="metrologySolicitation in metrologySolicitationsList" :key="metrologySolicitation.id">
          <td style="display: none"></td>
          <td class="codeStartup" data-title="O.P">{{ metrologySolicitation.startup.op.code_op}}</td>
          <td data-title="Cod. Produto">{{ metrologySolicitation.startup.op.code_product}}</td>
          <td data-title="Produto">{{ metrologySolicitation.startup.op.desc_product}}</td>
          
          <td data-title="Técnico">
            <button class="btn-ingressar" v-if="userAssociated" @click="ingressar(metrologySolicitation.startup.op.code_op)">Ingressar</button>
            <span v-else>{{metrologySolicitation.associatedUser}}</span>
            
         </td>
          <td class="lastTd" data-title="Opção">
            <button class="btn-preencher" @click="() => this.$router.push({ name: 'MetrologiaDetalhes' })">Preencher</button>
          </td>
        </tr>


        
      </tbody>
    </table>

    <table v-else cellpadding="0" cellspacing="0">
      <div class="btns">
        <button @click="statusTable = true" class="btn startup">
          Histórico
        </button>
        <button @click="statusTable = false" class="btn startup-closed">
          Solicitações
        </button>
      </div>

      <thead>
        <th>
          <button @click="statusTable = true" class="btn startup">
            Solicitações
          </button>
        </th>
        <th>
          <button @click="statusTable = false" class="btn startup-closed">
            
            Histórico
          </button>
        </th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </thead>


      <thead>
        <th>O.Produção</th>
        <th>Cod. Produto</th>
        <th>Produto</th>
        <th>Data de Envio</th>
        <th>Data de Abertura</th>
        <th>Data de Finalização</th>
        <th>Opção</th>
      </thead>

      <tbody>
        <tr v-for="metrologyHistory in metrologyHistoryList" :key="metrologyHistory.id">
          <td style="display: none"></td>
          <td class="codeStartup" data-title="O.P">{{ metrologyHistory.startup.op.code_op}}</td>
          <td data-title="Cod. Produto">{{metrologyHistory.startup.op.code_product}}</td>
          <td data-title="Produto">{{metrologyHistory.startup.op.desc_product}}</td>
          <td data-title="Data de Envio">{{formatDate(metrologyHistory.sendToMetrology) }}</td>
          <td data-title="Data de Abertura">{{formatDate(metrologyHistory.metrologyHistory.startDate)}}</td>
          <td data-title="Data de Finalização">{{formatDate(metrologyHistory.metrologyHistory.endDate)}}</td>
          <td class="lastTd" data-title="Opção">
            <button class="btn-view">Visualizar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </fieldset>
</template>

<script>

import  http  from '../../services/metrology/Metrology'
import  userId  from '../../utils/dataUser'
export default {
  data() {
    return {
      metrologyHistoryList: [],
      metrologySolicitationsList: [],
      statusTable: true,
      userAssociated: true,
      day: "",
      month: "",
      year: "",
      user_id: "",
    };
  },

  created: async function() {

    // this.user_id = dataUser().user.id
         await userId.DataUser().then((res)=>{
           console.log(res.data.user.id);
         })


        //Lista histórico de Metrologia
        await http.ListMetrologyHistory().then( (res) => {
          this.metrologyHistoryList = res.data.list
          console.log(this.metrologyHistoryList)
          
        })
        //Lista solictações
        await http.ListMetrologySolicitations().then( (res) => {
          this.metrologySolicitationsList = res.data.list

          if(this.metrologySolicitation.associatedUser === null){
            this.userAssociated = true
          }else {
            this.userAssociated = false
          }
        })


  },

  methods: {
    formatDate(date) {
      date = date.slice(0, -14);
      this.year = date.slice(0, -6)
      this.month = date.slice(5, -3)
      this.day = date.slice(-2)
      return date = `${this.day}/${this.month}/${this.year}`
    },

    ingressar: async function(code_op){
      await http.JoinMetrologyByUserId(this.user_id, code_op).then( (res) => {
        console.log(this.user_id, code_op);
        console.log("Deu certo", res);
      })
    }
  }
      
};
</script>

<style scoped>
.dropdown-content {
  display: none;
  background-color: #fff;
  border-radius: 10px;
  min-width: 50px;
  border: 1px solid rgba(37, 36, 36, 0.281);  
  padding: 15px 5px;
  z-index: 1;
}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

.opcoes:hover .dropdown-content {
  display: block;
}

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.tableContent {
  width: 100%;
  margin-bottom: 20px;

}

.tableContent table {
  background-color: var(--bg_white);
  width: 100%;
  border-radius: 10px 10px 10px 10px;

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
  font-size: 17px;
  text-align: center;
  height: 50px;
  padding: 0 10px 0 10px;
}

/* BTNS */

.menuBtn {
  width: 100%;
  display: flex;
  height: 80px;
  align-items: center;
  justify-content: space-between;
}

.btn {
  background-color: transparent;
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  color: var(--black_text);
  font-size: max(0.8rem, 1vw);
  font-weight: bold;
  border: none;
  font-weight: 300px;
}

.startup-opened,
.startup-closed {
  background-color: var(--bg_green);
  border: 3px solid var(--main-color);
  color: #fff;
}

.opcoes {
  display: flex;
  flex-direction: column;
}

.btn-view, .btn-preencher, .btn-ingressar {
    cursor: pointer;
    color: var(--main_primaryWhite);
    border: none;
    background-color: var(--btn_blue);
    height: 2.5rem;
    width: 4.6rem;
    border-radius: 5px;
}

.btn-preencher {
    background-color: var(--card_orange);
}

.btn-ingressar {
  background-color: var(--card_green);;
}

.btns {
  display: none;
}

@media (max-width: 880px) {

  .btns {
    display: flex;
    padding: 10px 20px 10px 20px;
  }
  .tableContent thead {
    display: none;
  }

  .tableButton {
    display: block;
  }

  .tableContent table {
    border-radius: 10px 10px 0 0;
  }

  .tableContent td {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  [data-title]{
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

  .lastTd {
    border-bottom: 1px solid var(--green_text);
  }
  .codeStartup {
    font-weight: 600;
    font-size: 20px;
  }

  legend {
    text-align: center;
  }
}
</style>
