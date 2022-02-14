<template>
  <div class="main">
    <div class="topnav" id="myTopnav">
      <h3>Variavel</h3>
    </div>
    <div class="header">
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

    <div class="tab">
      <div class="cabecalho">
        <h4 class="title"># Variavel</h4>
      </div>
      <div class="conteudo">
        <div class="num"></div>
        <div>
          <!-- v-for="(add, index) in count" :key="index" -->
          <div class="principal" v-for="variable of listVariables" :key="variable.id">
            <div class="info">
              <div class="input-id" >
                <h3>{{variable.id}}</h3>
              </div>
              <div class="inputs">
                <p>Identificação:</p>
                <input type="text" :value="variable.identificacao" readonly/>
              </div>
              <div class="inputs">
                <p>Cota:</p>
                <input type="text" :value="variable.cota" readonly/>
              </div>
              <div class="inputs">
                <p>Máx:</p>
                <input type="text" :value="variable.max" readonly/>
              </div>
              <div class="inputs">
                <p>Min:</p>
                <input type="text" :value="variable.min" readonly/>
              </div>
              <div class="inputs">
                <p>Croqui:</p>
                <label for="inputimage"><i class="fas fa-upload"></i></label>
                <input @change="UploadFile" ref="file" type="file" id="inputimage"/>
                <button @click="DeleteVariable(variable.id)" class="delete-btn"><i class="fas fa-trash-alt"></i></button>
              </div>
            </div>
          </div>
          <form @submit.prevent="AddVariable">
            <div class="insert">
              <div class="inputs">
                  <p>Identificação:</p>
                  <input type="text" v-model="insertVariable.identificacao"/>
                </div>
                <div class="inputs">
                  <p>Cota:</p>
                  <input type="text" v-model="insertVariable.cota"/>
                </div>
                <div class="inputs">
                  <p>Máx:</p>
                  <input type="text" v-model="insertVariable.max"/>
                </div>
                <div class="inputs">
                  <p>Min:</p>
                  <input type="text" v-model="insertVariable.min"/>
                  <div class="div-add">
                    <button type="submit" class="btn-add">+ adicionar</button>
                  </div>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import http from "../services/variables"

export default {
  name: "Modalvar",
  data() {
    return {
      header: [],
      productCode: this.$route.query.id,
      listVariables: [],
      insertVariable:{
        identificacao: "",
        cota: "",
        max: "",
        min: "",
        id_produto: this.$route.query.id
      }
    };
  },
  methods: {
    DeleteVariable: function(idVariable){
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          http.deleteVariable(idVariable).then(()=>{

            this.$swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ).then(()=>{
              location.reload()
            }).catch((error)=>{
              console.log(error)
            })

          }).catch((error)=>{
            console.log(error.response)
          })
        }
      })
    },
    AddVariable: function(){
      http.createVariable(this.insertVariable).then((response)=>{
        console.log(response.data)
        location.reload()
      }).catch((error)=>{
        console.log(error.response)
      })
    },
    UploadFile: function(e){

    
      console.log(e.target.files[0])

     


      // http.inserFile(e.target.files[0]).then((response)=>{
      //   console.log(response)
      // }).catch((error)=>{
      //   console.log(error)
      // })
    }
  },
  mounted() {
    http.findByProductCode(this.productCode).then((response)=>{
      this.listVariables = response.data.allVariables
      this.header = response.data.dataSAP[0];
    }).catch((error)=>{
      console.log(error.response.data)
    })
  }
};
</script>

<style scoped>
.main {
  width: 100%;
  background-color: white;
}

.main .topnav {
  background-color: #04aa6d;
  color: white;
  text-decoration: none;
  font-size: 17px;
  padding: 14px 16px;
}
.header{
  width: 100%;
  justify-content: space-between;
  padding: 2rem;
  display: flex;
  overflow-x: auto;
}
.header div{
  margin: 0 2%;
  width: 100%;
}

.header p{
  margin-bottom: 5px;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.header input{
  padding: .4rem;
  border: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.267) 0px 1px 3px 0px, rgba(27, 31, 35, 0.493) 0px 0px 0px 1px;
  outline-color: green;
  background-color: rgb(245, 240, 240);
  width: 100%;
}

.title{
  margin: 0 1rem;
  font-weight: 500;
}

.main .tab {
  width: 100%;
}

.main .tab .cabecalho {
  border-bottom: 1px solid black;
  padding: 5px 0;
  margin-bottom: 2rem;
}


/* .main .tab .principal .info .inputs .btn-delete:active {
  background: rgba(255, 0, 0, 0.671);
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.main .tab .principal .info .inputs .delete {
  position: relative;
  width: 50%;
} */

.thead {
  color: gray;
}

.body {
  display: flex;
  flex-direction: row;
}

.main .add {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5rem;
}

.main .add .fa-plus {
  position: relative;
  background-color: green;
  color: white;
  padding: 8px;
  border-radius: 5px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.main .add .fa-plus:hover {
  background: rgb(11, 139, 11);
}

.main .add .fa-plus:active {
  background: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.info{
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 0 auto;
}
.info input{
  padding: .4rem;
  border: none;
  margin-top: 5px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.267) 0px 1px 3px 0px, rgba(27, 31, 35, 0.493) 0px 0px 0px 1px;
  outline: none;
  width: 95%;
  background-color: rgb(245, 240, 240);
}
.insert{
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 12rem auto;
}
.insert input{
  padding: .4rem;
  border: none;
  margin-top: 5px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.267) 0px 1px 3px 0px, rgba(27, 31, 35, 0.493) 0px 0px 0px 1px;
  outline: none;
  width: 95%;
}
#inputimage{
  display: none;
}

.inputs{
  width: 100%;
  align-items: center;
}
.fas.fa-upload{
  background: rgb(84, 84, 228);
  color: white;
  padding:0.4rem;
  border-radius: 4px;
  margin: 5px 0;
  width: 45%;
  text-align: center;
  cursor: pointer;
}
.fas.fa-trash-alt{
  color: white;
}
.delete-btn{
  color: white;
  background: rgb(233, 92, 92);
  padding:0.4rem;
  border-radius: 4px;
  margin: 5px 0;
  width: 50%;
  border: none;
  margin-left: 5%;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
}
#input-btn{
  display: flex;
}
.input-id{
  display: flex; 
  align-items: center;
  margin-right: 1rem;
  color: rgb(39, 37, 37);
}
.input-id h3{
  font-weight: 400;
}

.inputs .btn-add{
  margin-top: 10px;
}

.div-add{
  width: 96%;
  text-align: right;
  margin-bottom: 4rem;
}

.btn-add{
  color: white;
  background-color: rgb(71, 148, 71);
  padding: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>