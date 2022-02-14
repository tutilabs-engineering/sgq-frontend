<template>
    <div>
      
        <h2>Tabela de Reprovados</h2>

              <table class="table table-sm">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>PRODUTOS</th>
                        <th>AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Produto A</td>
                        <td>
                          <div class="btn-actions">
                            <button @click="OpenModal()" class="btnView"><i class="far fa-eye"></i>Visualizar</button>
                          </div>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Produto B</td>
                        <td>
                          <div class="btn-actions">
                            <button @click="OpenModal()" class="btnView"><i class="far fa-eye"></i> Visualizar</button>
                          </div>
                        </td>
                    </tr>
                </tbody>
       </table>

       <div class="modal">
           <!-- <ModalStatus/> -->
       </div>
    </div>
</template>

<script>

// import ModalStatus from "../components/ModalStatus.vue"

export default {
    components:{
        // ModalStatus
    },
    methods: {

    }
}



</script>

<style scoped>
h2{
  margin: 1rem 1rem;
  font-size: 1.8rem;
  color: rgb(45, 46, 45);
}
.table.table-sm{
  height: 150px;
  background-color: #fdfcfc;
  box-shadow: rgba(0, 0, 0, 0.404) 0px 3px 8px;
  width: 95%;
}
table, td ,th{
    border: solid 0.8px rgba(0, 0, 0, 0.11);
}
.table{
  margin: 3rem auto;
  padding: 3rem 0;

}
table{
  border-collapse: collapse;
}

th{
  font-weight: 700;
  color: rgb(80, 79, 79);
  padding:30px;
  border-bottom: rgb(184, 184, 184) solid;
}
td{
    padding: 10px;
    text-align: center;
}
.iconsAction{
  width: 10%;
  margin-left: 2.5%;
  padding: .2rem;
  display: grid;
  grid-template: 1fr/1fr 1fr 1fr;
  grid-gap: 0.3rem;
}
.btn-actions {
  text-align: center;
}
.btn-actions button{
  font-size: 1.2rem;
  border: none;
  cursor: pointer;
  margin: 0 2px;
}
button{
  background-color: rgb(190, 187, 9);
  color: white;
  padding: 5px 8px;
  border-radius: 5px;
}
button:hover {
  background-color: rgb(170, 170, 11);
}

tr:nth-child(even) {
  background-color: #e2dede;
  text-align: center;
}
</style>