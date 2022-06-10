<template>

<div class="content-metrologiaDetalhes">
      <div v-show="alert" class="aviso-metrologia">
            <div>
        A metrologia só pode ser preenchida pelo usuario que ingressou.
            </div>
        </div>
      <fieldset class="form">
        <legend>Metrologia</legend>
        
      <div class="input">
        <label for="code_product">Código Produto</label>
        <input type="text" placeholder="Digite o código OP" :value="opById.header.code_product" disabled>
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

      <div class="input">
        <label for="client">Técnico Agregado</label>
        <input type="text" name="client" id="client" placeholder="ex: Yamaha" :value="opById.header.user.name" disabled> 
      </div>

      <div class="input">
        <label for="client">Horário Inicial</label>
        <input type="text" name="client" id="client" placeholder="ex: Yamaha" :value="formatDate(opById.header.user.startDate)" disabled> 
      </div>

     </fieldset>
 <form>
     <fieldset>
       <legend>Preenchimento</legend>

      <TableMetrologiaDetalhes @variablesModification="captureDataFromVariables" :variables="opById.metrology_items" :inputStatus="false"/>

    </fieldset>

    <div class="btn">
      <button type="submit" class="btn-save" @click.prevent="saveData">Draft</button>
      <button type="button" class="btn-close" @click="finishMetrology">Finalizar</button>
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
          alert: false,
          newDataVariables : [],
          dataVariables: [],
          opById: [],
          qtdeCavidade: 0,
          exit: "",
              opById: {
              metrology_items: [
                {
                  items : []
                }
              ],
              header : {
              code_product : "",
              code_client: "",
              desc_product: "",
              client:"",
              user : {
                    id: "",
                   name : "",
                   startDate: ""
              }
            }
          },
        };
    },

    created: async function(){
       
      this.$store.commit("$SETISLOADING");
       const id = this.$route.query.id
       
       await http.FindMetrologyById(id).then( (res) => {
        this.opById = res.data.list
      });

      const user = await userId.DataUser().then((res)=>{
        return res.data.user.id
      })
              
       if(this.opById.header.user.id !=  user){
           this.alert = true
       }
        this.$store.commit("$SETISLOADING");
     
    },
    methods : {

    dataUpdate: async function (){
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
           this.exit = res

         }).catch((error)=>{
           Toast.fire({
                        icon: 'warning',
                        title: error.response.data.message,
                        background: "#fff",
                    })
         })
    },

    formatDate(date) {
      date = date.slice(0, -14);
      this.year = date.slice(0, -6)
      this.month = date.slice(5, -3)
      this.day = date.slice(-2)
      return date = `${this.day}/${this.month}/${this.year}`
    },


      captureDataFromVariables(val){
        // Capture data in table details metrology to salve(this.$emit)
         this.dataVariables = val
      }, 

      async saveData(){
         //Loading Construct Data Metrology to save in database
        await this.constructDataMetrology();
        await this.dataUpdate();

        this.$swal.fire({
            title: 'Preenchimento salvo!',
            text: "Você pode voltar depois para finalizá-la",
            icon: 'success',
            reverseButtons: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Okay',
            cancelButtonText: 'Não'
          }).then( (result) => {
            if(result.isConfirmed) {
              this.$router.push({ name: "metrologia" });
            }
          })

          
      },


      constructDataMetrology: async function (){
          this.newDataVariables = []
          this.dataVariables.map((element)=>{
             element.items.map((item)=>{
               if(item != null){
                 this.newDataVariables.push({id: item.metrology_id, value: item.value})
               }
             })
         })
        
      },
async finishMetrology(){
      await this.constructDataMetrology();
      await this.dataUpdate();
      const startup = this.$route.query.id
      const user = await userId.DataUser().then((res)=>{
        return res.data.user.id
      })

           
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

 await this.$swal.fire({
    title: 'Você realmente quer terminar esta revisão de metrologia?',
    text: "Depois de concluído, será associado a Startup",
    icon: 'warning',
    showCancelButton: true,
    reverseButtons: true,
    cancelButtonColor: '#d33',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'Concluir'
}).then(async (result) => {
  if (result.isConfirmed) {
   
   await http.FinishMetrologyByUserId(startup,user).then((res)=>{
     console.log(res);
     Toast.fire({
      icon : "success",
      title :  "Metrologia finalizada com sucesso!",
     });
     this.$router.push({ name: "metrologia" });


   }).catch(()=>{

   Toast.fire({
     icon : "error",
     title :  "Verifique se os valores estão dentro dos limites máximos e mínimos",
    })
   })
    
 
  }
})

    }

},

}
</script>

<style scoped>
.aviso-metrologia{
    padding: 10px;;
    text-align: center;
    background: var(--card_red);
    border-radius: 10px;
    color: #ffff;
}

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
  gap:3px;
}

.btn-save {
  width: 120px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;
  color: var(--main_primaryWhite);
  background-color: var(--card_orange);
}

.btn-close {
  width: 120px;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;
  color: var(--main_primaryWhite);
   background-color: var(--card_blue);
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