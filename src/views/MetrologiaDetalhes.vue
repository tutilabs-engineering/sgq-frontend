<template>

<div class="content-metrologiaDetalhes">
      <fieldset class="form">
        <legend>Metrologia</legend>
        
      <div class="input">
        <label for="code_product">Código Produto</label>
        <input type="text" name="code_product" id="code_product" placeholder="Digite o código OP" :value="opById.header.code_product" disabled>
      </div>

      <div class="input">
        <label for="client">Código Cliente</label>
        <input type="text" name="client" id="client" placeholder="ex: Yamaha"  :value="opById.header.code_client" disabled>
      </div>

      <div class="input">
        <label for="client">Produto</label>
        <input type="text" name="client" id="client" placeholder="ex: Yamaha"  :value="opById.header.desc_product" disabled>
      </div>

      <div class="input">
        <label for="client">Cliente</label>
        <input type="text" name="client" id="client" placeholder="ex: Yamaha" :value="opById.header.client" disabled> 
      </div>

     </fieldset>
 <form>
     <fieldset>
       <legend>Preenchimento</legend>

      <TableMetrologiaDetalhes @variablesModification="captureDataFromVariables" :variables="opById.metrology_items"/>

    </fieldset>

    <div class="btn">
      <button type="submit" class="btn-save" @click.prevent="saveData">SALVAR</button>
    </div>
 </form>

</div>
  
</template>

<script>
import  http  from '../services/metrology/Metrology'
import TableMetrologiaDetalhes from '../components/TableMetrologiaDetalhes/TableMetrologiaDetalhes.vue'
import  userId  from '../utils/dataUser'

export default {
    components: { TableMetrologiaDetalhes},
    name: "MetrologiaDetalhes",
    data(){
        return {
          newDataVariables : [],
          dataVariables: [],
          opById: [],
          qtdeCavidade: 0,
        };
    },

    created: async function(){
      
       const id = this.$route.query.id
       await http.FindMetrologyById(id).then( (res) => {
        this.opById = res.data.list
      })
      
     
    },
    methods : {
      captureDataFromVariables(val){
        // Capture data in table details metrology to salve(this.$emit)
         this.dataVariables = val
      }, 

      async saveData(){
         //Loading Construct Data Metrology to save in database
        this.constructDataMetrology();
   
      const startup = this.$route.query.id
      const user = await userId.DataUser().then((res)=>{
        return res.data.user.id
      })
       const data = {
          user,
          metrology : this.newDataVariables
        }
         
      const Toast = this.$swal.mixin({
                    toast: true,
                    position: 'top-right',
                    iconColor: '#ff5349',
                    customClass: {
                    popup: 'colored-toast',
                    title: 'title-swal-text'
                    },
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                    },
                    showConfirmButton: false,
                    timer: 2500,
                    timerProgressBar: true
                })
               
                
         await http.UpdateDataMetrologyOfStartup(startup, data).then((res)=>{
      
          console.log(res);

         }).catch((error)=>{
           Toast.fire({
                        icon: 'warning',
                        title: error.response.data.message,
                        background: "#fff",
                    })
         })
      },
      constructDataMetrology(){
          this.newDataVariables = []
          this.dataVariables.map((element)=>{
             element.items.map((item)=>{
               if(item != null){
                 this.newDataVariables.push({id: item.metrology_id, value: item.value})
               }
             })
         })
        
      }
    }


    
}
</script>

<style scoped>

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
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

.form {
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
}

.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70px;
  padding: 5px;
  border-radius: 5px 5px 0 0;
}

.input label {
  font-weight: 600;
  font-size: 18px;
  color: var(--black_text);
}

.input input {
  background-color: transparent;
  border: none;
  transition: 1s;
  outline: none;
  font-size: 15px;
  height: 52px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.39);
}

.btn {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.btn-save {
  width: 120px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;
  color: var(--main_primaryWhite);
  background-color: var(--card_green);
}

@media (max-width: 1114px) and (min-width: 766px){
  .legend {
    text-align: center;
  }
    .form {
    padding: 12px;
    grid-template-columns: auto;
  }
}

@media (max-width: 765px){
  legend {
    text-align: center;
  }
    .form {
    padding: 12px;
    grid-template-columns: 1fr;
  }
}

</style>