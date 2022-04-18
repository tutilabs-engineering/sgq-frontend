<template>
    <div class="btns">
        <!-- <button class="btn-fill-save btn" v-on:click="fillValue">Preencher + Opções</button> -->
        <div class="btns-options">
            <button class="btn-cancel btn">Cancelar</button>
            <button class="btn-save btn" @click="saveNewStartup">Criar Startup</button>
        </div>
    </div>
</template>

<script>
import  http  from '../../services/startup/index'

export default {
    name: "BtnStartupCreate",
    data () {
        return{
            fillStatus: false,
            isQuestionOpen: false
        }
    },

    methods: {
        fillValue (){
            if(this.$store.getters.$GETCODEOP == ""){
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
                Toast.fire({
                        icon: 'warning',
                        title: 'Informe a Ordem de Produção',
                        background: "#fff",
                    })
                
            }else {
                this.fillStatus = !this.fillStatus
                this.$emit("returnFillStatus", this.fillStatus)
            }
            
        },

        saveNewStartup: async function (){

            const Toast = this.$swal.mixin({
                      toast: true,
                      position: 'top-right',
                      iconColor: '#3fc36d',
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


            this.$store.commit("$SETISLOADING");
            if(this.$store.getters.$GETCODEOP == ""){
                Toast.fire({
                    icon: 'warning',
                    title: 'Informe a Ordem de Produção',
                    background: "#fff",
                })
            }else { 
                if(this.fillStatus){
                // Campo de perguntas aberto
                this.ValidateQtyAnsweredQuestions()
                }else {
                    

                    
                    const data = await this.$store.getters.$GETDATACREATESTARTUP
                    if(data){ 
                    await http.createNewStartup(data).then( (res) => {
                        
                        console.log("Nova Startup Salva", res);
                        Toast.fire({
                            icon: 'success',
                            title: 'Salvo com sucesso',
                            background: "#fff",
                        })
                    }).catch ( (error) => {
                        console.log(error.response);
                        if(error.response.status === 400) {
                            Toast.fire({
                            icon: 'warning',
                            title: 'Não foi possível cadastrar esta Startup, ela já está em Andamento',
                            background: "#e3e745",
                        })
                        }else if(error.response.status === 401) {
                            Toast.fire({
                            icon: 'warning',
                            title: 'Apenas Analista, Metrologista e Inspetor podem cadastrar uma Startup',
                            background: "#e3e745",
                        })
                        }
                  
                    })
                    }
              
                }
            }
            this.$store.commit("$SETISLOADING");
        },

        ValidateQtyAnsweredQuestions () {
            const Toast = this.$swal.mixin({
                toast: true,
                position: 'top-right',
                iconColor: '#3fc36d',
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

            
            if (this.$store.getters.$GETQTDEPERGUNTASPADROES != 16 || this.$store.getters.$GETQTDEPERGUNTASESPECIFICAS != this.$store.getters.$GETQTDEESPECIFICAS) {
                Toast.fire({
                    icon: 'warning',
                    title: 'Verifique se todas as Perguntas foram respondidas',
                    background: "#E8EB7C",
                })
            }else {
                Toast.fire({
                    icon: 'success',
                    title: 'Preenchimento realizado com sucesso',
                    background: "#fff",
                })
            }

        }
    },


}
</script>

<style scoped>

    .btns {
        padding: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        grid-gap: 5px;
    }

    .btn-fill-save, .btns-options {
        grid-column: 3;
   
    }

    .btns-options {
        display: flex;
        justify-content: space-between;
    }

    .btn-save, .btn-cancel {
        width: 49%;
    }

    .btn {
        height: 50px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        font-size: 1.1rem;
        color: var(--main_primaryWhite);
    }

    .btn-save {
        background-color: var(--card_green);
    }

    .btn-fill-save {
        background-color: var(--card_blue);
    }

    .btn-cancel {
        background-color: var(--card_red);
    }

    @media (max-width: 48em){
        .btns {
            display: grid;
            grid-template-columns: 1fr;
            padding: 0;
            margin-top: 20px;
        }

        .btn-fill-save, .btns-options {
            grid-column: 1;
        }
    }
    


</style>