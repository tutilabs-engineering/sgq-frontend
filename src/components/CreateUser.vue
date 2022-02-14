<template>
    <div>
        <h2>Cadastro de Usuário</h2>
        <div>
            <form action="">
                <input id="name" type="text" placeholder="José Silva Carvalho" v-model="name">
                <input id="email" type="email" placeholder="josesilva@gmail.com" v-model="email">
                <input id="register" type="number" placeholder="15681" v-model="register">
                <select id="office" @change="officeValue">
                    <option value="">Selecione</option>
                    <option value="1">Admin Master</option>
                    <option value="2">Gestor</option>
                    <option value="3">Inspetor</option>
                    <option value="4">Analista</option>
                    <option value="5">Metrolgia</option>
                </select>
                <button @click="Register" >Cadastrar</button>
            </form>
        </div>
    </div>
</template>

<script>

import axios from "axios"

export default {
    data(){
        return {
            name: "",
            email: "",
            password: "",
            register: "",
            office: ""
        }
    },
    methods:{

        officeValue(event){
            this.office = event.target.value
        },

        Register(e){

            axios.post("http://localhost:8686/user",{

                nome: this.name,
                email: this.email,
                senha: this.name.substr(0,3).toUpperCase()+"@tuti"+this.register,
                // senha: 3 primeiras letras do nome maiúsculas + "@tuti" + "matricula" 
                matricula: this.register,
                cargo: this.office

            }).then(res=>{

                var result = res.data
                if(result){

                    const Toast =  this.$swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 4000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Cadastrado com Sucesso!'
                    })

                    // var name = document.getElementById("name");
                    // name.value="";

                    // var email = document.getElementById("email");
                    // email.value="";

                    // var register = document.getElementById("register");
                    // register.value="";

                    // var office = document.getElementById("office");
                    // office.value="";

                }

            }).catch(error=>{
                console.log(error.response)
                var msg = error.response.data.error;
                
                if(this.name == "" || this.email == "" || this.password == "" || this.register == "" || this.office == ""){
                     const Toast =  this.$swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 8000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'warning',
                        title: 'Preencha todos os campos corretamente'
                    })
                }
                else{

                    if(this.office < 1 || this.office > 5){
                        console.log("Erro: O cargo deve estar entre 1 e 5!")
                    }else{
                        console.log(error.response.data)
                    }
                }

                console.log(msg)
                if(msg == undefined){
                    const Toast =  this.$swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 8000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', this.$swal.stopTimer)
                            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'error',
                        title: 'Usuário já existe'
                    })
                }
               
            })
            e.preventDefault();

        },
        showAlert(e) {
            // Use sweetalert2
            const Toast =  this.$swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 8000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
            })

            Toast.fire({
                icon: 'warning',
                title: 'Preencha todos os campos'
            })

            e.preventDefault();
        },
    },



}
</script>

<style scoped>

</style>