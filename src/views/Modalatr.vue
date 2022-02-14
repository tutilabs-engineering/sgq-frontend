<template>
  <div>
    <div class="main">
      <div class="topnav" id="myTopnav">
        <h3>Atributo</h3>
      </div>

      <div class="campos">
        <div>
          <p>SAP:</p>
          <input class="inputs" type="text" :value="this.header.cod_sap" readonly/>
        </div>

        <div>
          <p>Produto:</p>
          <input class="inputs" type="text" :value="this.header.produto" readonly/>
        </div>

        <div>
          <p>Cliente:</p>
          <input class="inputs" type="text" :value="this.header.cliente" readonly/>
        </div>

        <div>
          <p>Descrição do Cliente</p>
          <input class="inputs" type="text" :value="this.header.desc_cliente" readonly/>
        </div>
      </div>

      <hr />
      <div class="tableEng">
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>PERGUNTA</td>
              <td>ATENÇÃO</td>
              <td>STATUS</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="question of listQuestions" :key="question.id">
              <td>{{question.id}}</td>
              <td>{{question.pergunta}}</td>
              <td>
                <div class="btn">
                  <form @submit.prevent="AttetionChange" class="formAttetion">
                    <input type="hidden" :value="question.id">
                    <input type="hidden" :value="question.atencao">
                    <input class="boxAttetion" @change="ChangeAttetion" v-if="question.atencao == 'true'" type="checkbox" value="Attetion" checked>
                    <input class="boxAttetion" @change="ChangeAttetion" v-else type="checkbox" value="noAttetion">
                  </form>
                </div>
              </td>
              <td>
                <div class="btn">
                  <form @submit.prevent="statusChange">
                    <input type="hidden" :value="question.id">
                    <input type="hidden" class="btn-status" :value="question.status" >
                    <input v-if="question.status == 'true'" type="submit" class="btnQuestion true" @click="changeColor" value="Habilitado">
                    <input v-else type="submit" class="btnQuestion false" @click="changeColor" value="Desabilitado">
                  </form>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <form @submit.prevent="InsertQuestion" class="question">
        <h1 id="quest">Acrescentar Pergunta:</h1>
        <input type="text" name="perguntas" id="questionbox"/>
        <input type="hidden" name="perguntas" id="status"/>
        <input type="hidden" name="perguntas" id="productCode"/>
        <input type="hidden" name="perguntas" id="date" />
        <button class="add" type="submit"> + </button>
      </form>

    </div>
  </div>

</template>

<script>

import http from "../services/atributos";

export default {
  name: "Modalatr",
  data() {
    return {
      header: [],
      productCode: this.$route.query.id,
      listQuestions: [],
      questionEdit: {
        id: "",
        status: ""
      },
      editAttetion: {
        id: "",
        attetion: ""
      }
    };
  },
  methods: {
    InsertQuestion: function(){

      const today = new Date();

      let day =  today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();

      if(day.toString().length == 1) {
        day = `0${day}`
      }

      const todayDate = year + "-" + month + "-" + day;

      var question = {
        pergunta: document.getElementById("questionbox").value,
        status: "true",
        id_produto: this.productCode,
        data: todayDate
      }

      http.createQuestion(question).then(response=>{
        this.$swal.fire({
          icon: 'success',
          title: response.data.message
        }).then(()=>{
          location.reload();
        }).catch((error)=>{
          console.log(error)
        })
      }).catch(error=>{
        let inputQuestion = document.getElementById("questionbox").value;
        if(inputQuestion == ""){
          this.$swal.fire({
            icon: 'warning',
            title: error.response.data.pergunta.message,
          })         
        }else{
          this.$swal.fire({
            icon: 'error',
            title: error.response.data.error
          })
        }
      })

    },
    statusChange: function(event){



      var idQuestionFromEvent = event.path[0][0].value //Id da pergunta está sendo puxada pelo event
      var btnTarget = event.target[2].value;
      if(btnTarget == "Habilitado"){
        this.questionEdit.id = idQuestionFromEvent
        this.questionEdit.status = "true"
      }else{
        this.questionEdit.id = idQuestionFromEvent
        this.questionEdit.status = "false"
  
      }

      http.changeStatus(this.questionEdit)

    },
    changeColor: function(event){
      var btnTarget = event.target;

      if(btnTarget.value == "Habilitado"){
        btnTarget.style.backgroundColor="red"
        btnTarget.value="Desabilitado"
      }else{
        btnTarget.style.backgroundColor="blue"
        btnTarget.value="Habilitado"
      }
    },
    ChangeAttetion: function(event) {

      var btnTarget = event.target;
      var idQuestion = event.path[1][0].value

      if(btnTarget.value == "Attetion") {
        btnTarget.value = "noAttetion"
        this.editAttetion.id = idQuestion
        this.editAttetion.attetion = "false"
      }else{
        btnTarget.value = "Attetion"
        this.editAttetion.id = idQuestion
        this.editAttetion.attetion = "true"
      }

      http.changeAttetion(this.editAttetion)

    }
  },

  mounted(){

    http.listQuestionsByProductCode(this.productCode).then((response)=>{
      this.listQuestions = response.data.allQuestions;
      this.header = response.data.dataSAP[0];
    }).catch((error)=>{
      console.log(error)
    })
    
  }
}


</script>

<style scoped>

.btnQuestion{
  padding: 5px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
}

#btnAttetion{
  background: #727776;
  color: rgb(255, 255, 255);
}

.btnQuestion.false{
  background: red;
}
.btnQuestion.true{
  background: blue;
}

.boxAttetion {
  cursor: pointer;
}


.main{
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.main .campos {
  width: 100%;
  justify-content: space-between;
  padding: 2rem;
  display: flex;
  overflow-x: auto;
}

.campos div{
  margin: 0 2%;
  width: 100%;
}

.campos p{
  margin-bottom: 5px;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.campos input{
  padding: .4rem;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.267) 0px 1px 3px 0px, rgba(27, 31, 35, 0.493) 0px 0px 0px 1px;
  outline-color: green;
  width: 100%;
  background-color: rgb(245, 240, 240);
}
.topnav{
  background-color: #04aa6d;
  color: white;
  text-decoration: none;
  font-size: 17px;
  padding: 14px 16px;
}

.tableEng {
  width: 100%;
  margin-top: 30px;
  background: var(--white);
  padding: 1.5rem 1.5rem 1.5rem 2.5rem;
  overflow-y: auto;
  height: 400px;
}
.tableEng table {
  width: 100%;
  border-collapse: collapse;
}
.tableEng table thead td {
  font-weight: 700;
}
.tableEng table tr td {
  border-bottom: 1px solid var(--gray);
  text-align: center;
  padding: 15px;
}
.tableEng table tbody tr:hover {
  background: rgba(182, 182, 182, 0.438);
}
.tableEng table tbody .red {
  width: 30px;
  height: 100%;
  background: var(--red);
}
.tableEng table tbody .purple {
  width: 30px;
  height: 100%;
  background: var(--purple);
}
.tableEng table tbody .orange {
  width: 30px;
  height: 100%;
  background: var(--orange);
}
.tableEng table tbody .green {
  width: 30px;
  height: 100%;
  background: var(--green);
}
.tableEng table tbody .blue {
  width: 30px;
  height: 100%;
  background: var(--blue);

}
.tableEng .btnTable {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.tableEng .btnTable .btn:first-child {
  margin-bottom: 10px;

}
.tableEng .btnTable a {
  text-decoration: none;

}

.tableEng tr td .btn {
  display: flex;
  grid-gap: 40px;
  justify-content: center;
}
@media (max-width: 1220px) {
  .tableEng {
    width: 100%;
    margin-top: 30px;
    background: var(--white);
    padding: 1rem;
    overflow-x: scroll;
  }
  .tableEng .btnTable a {
    margin-right: 10px;
  }
}

th,
p {
  font-size: 12px;
  color: gray;
}

.question {
  padding: 2rem;
  white-space: nowrap;
}

#questionbox {
  padding: .4rem;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.267) 0px 1px 3px 0px, rgba(27, 31, 35, 0.493) 0px 0px 0px 1px;
  outline-color: green;
  width: 80%;
}

#quest {
  color: #04aa6d;
  font-size: 15px;
}

.add {
  display: inline-block;
  margin: 1rem;
  padding: 1px 23px 1px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: white;
  background: #04aa6d;
  border: none;
  border-radius: 15px;

}

.add:hover {
  background-color: #3e8e41;
}

.add:active {
  background: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>