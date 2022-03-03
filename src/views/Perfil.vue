<template>
    <div class="content-perfil" v-if="editStatus">

        <div class="perfil">
            <div class="user">
                <div class="perfil-img"><i class="fas fa-user-alt"></i></div>
                <h2>Perfil</h2>
            </div>

            <h3>Dados do usuário</h3>

            <form class="user-data">
                
                <div class="inputs">
                    <InputPerfil title="Nome Completo" :value="user.name" :type="text" :placeholder="'Maria do Bairro'" :disabled="1"/>
                    <InputPerfil title="Matricula" :value="user.register" :type="number" :placeholder="'ex: 8946987'" :disabled="1"/>
                    <InputPerfil title="Email" :value="user.email" :type="email" :placeholder="'ex: joaozinho@tuti.com'" :disabled="1"/>
                    <InputPerfil title="CPF" :value="user.cpf" :type="text" :placeholder="'ex: 03992355202'" :disabled="1"/>
                </div>
                
                <div class="footer-user-data">
                    <h3>Sistema</h3>
                    <div class="input system-black">
                        <label for="user-name">Nível de Acesso</label>
                        <select name="lvAcess" id="lvAcess" class="select-lvAcess" disabled>

                            <option value="adm">{{user.cargo}}</option>

                        </select>
                    </div>


                    <button class="btn btn-edit" @click="editStatus = false">Editar</button>
                </div>

            </form>
                
            </div>
       
    </div>

    <div class="content-perfil" v-else>

        <div class="perfil">
            <div class="user">
                <div class="perfil-img"><i class="fas fa-user-alt"></i></div>
                <h2>Editar Usuário</h2>
            </div>

            <h3>Dados do usuário</h3>

            <form class="user-data" @submit.prevent="UpdateUser">

                <div class="inputs">
                    <div class="input">
                            <label for="">Nome</label>
                            <input type="text" placeholder="ex: João das Neves" v-model="user.name">
                        </div>

                        <div class="input">
                            <label for="">Email</label>
                            <input type="text" placeholder="ex: nome@tuti.com.br" v-model="user.email">
                        </div>

                        <div class="input">
                            <label for="">CPF</label>
                            <input type="text" placeholder="CPF do usuário" v-model="user.cpf">
                        </div>

                        <div class="input">
                            <label for="">Matrícula</label>
                            <input type="text" placeholder="Matrícula do usuário" v-model="user.register">
                        </div>

                </div>
                
                <h3>Sistema</h3>
                <div class="footer-user-data">
                    
                    <div class="input system-black">
                        <label for="user-name">Nível de Acesso</label>
                            <select name="lvAcess" id="lvAcess" class="select-lvAcess" v-model="user.lvAccess">
                                <option v-for="(option, index) in options"
                                :value="option.value"
                                :key="index">{{option.text}}</option>
                            </select>
                    </div>
                    
                    <span @click="editStatus = true" class="btn-cancel">Cancelar</span>
                    <button class="btn btn-salve" type="submit">Salvar</button>
                    

                </div>

            </form>
                
            </div>
       
    </div>
  
</template>

<script>

import jwt from "jsonwebtoken";
import InputPerfil from "../components/InputsPerfil/InputPerfil.vue";
import http from "../services/account/Users"
import { useToast } from "vue-toastification";

export default {

    components: { InputPerfil},
    name: "Perfil",
    

    data(){
		return {
            user: {
                id: "",
                name: "",
                email: "",
                register: "",
                cpf: "",
                cargo: "",
                lvAccess: "",

            },

           


            isDisable: true,
            editStatus: true,
            
            options: [
                {text: "Escolha", value: ""},
                {text: "ADM", value: 1},
                {text: "Gestor", value: 2},
                {text: "Inspetor", value: 3},
                {text: "Analista", value: 4},
                {text: "Metrologista", value: 5},
            ]
        }	
	},

    methods: {

        teste() {
            const toast = useToast();
            toast.success("Testando");
        },

        UpdateUser: async function() {
            this.$store.commit("$SETISLOADING");
            const userUpdated = {
                id: this.user.id,
                name: this.user.name,
                email: this.user.email,
                register: this.user.register,
                cpf: this.user.cpf,
                fk_role: this.user.lvAccess
            }
        
            await http.updateUserById(userUpdated).then( (response) => {
                if(response.status === 200){
                    this.$store.commit("$SETISLOADING");
                    const toast = useToast()
                    toast.success("Usuário atualizado com sucesso");
                    this.editStatus = !this.editStatus
                   
                }
            }).catch( (error) => {
                this.$store.commit("$SETISLOADING");
                const toast = useToast()
                toast.error("Verifique se todos os campos estão corretos " + error.response.data.message)
                return console.log(error.response.data.message)
            })
            
        },

    },

    
    created: async function () { 

    const secretQuefunciona = "cf2cf1732834hh4hsg657tvdbsi84732492ccF=2=eyfgewyf6329382¨&%$gydsu";

    const token = sessionStorage.getItem("token");

    if (token) {
      try {
        const {sub} = await jwt.verify(token, secretQuefunciona);
        this.$store.commit("$SETISLOADING")
        await http.findUserById(sub).then((res) => {
        this.user.id = res.data.user.id
          this.user.name = res.data.user.name
          this.user.email = res.data.user.email
          this.user.register = res.data.user.register
          this.user.cpf = res.data.user.cpf
          this.user.cargo = res.data.user.role.description
          this.user.lvAccess = res.data.user.role.id

          
        }).catch((error) => console.log("error", error))
        this.$store.commit("$SETISLOADING")
      } catch (error) {
        console.log(error)
      }

    }

    
  },


}
</script>

<style scoped>

.content-perfil {
    width: 100%;
    height: calc(90vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;

}

.perfil {
    width: 70%;
    height: auto;
}


.perfil h2  {
    color: var(--black_text);
}

.perfil h3 {
    color: var(--green_text);
    margin-bottom: 20px;
}


.user {
    display: flex;
    align-items: center;
    font-size: 30px;
    margin-bottom: 35px;
}

.fa-user-alt {
    color: var(--main_primaryWhite);
    font-size: 50px;
}

.input {
    display: flex;
    flex-direction: column;
    background-color: var(--main_primaryWhite);
    padding: 10px;
    justify-content: center;
    height: 80px;
    border-radius: 10px;
    color: var(--black_text);
}

.input input {
    border: none;
    outline: none;
    height: 50px;
    padding: 0px 5px 0 5px;
}

.perfil-img {
    border-radius: 10px;
    height: 70px;
    width: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--green_text);
    margin-right: 10px;
}

.inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 20px;
}

.footer-user-data {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

.system-black {
    color: var(--main_primaryWhite);
    background-color: var(--black_text);
    grid-column-start: 1;
    grid-column-end: 3;
}

.btn {
    color: var(--black_text);
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    height: 60px;
    border-radius: 10px;
    border: none;
    grid-column-start: 4;
    grid-column-end: 4;
}

.btn-edit {
    background-color: var(--btn_gray);
}

.btn-salve {
    background-color: var(--btn_blue);
    color: var(--main_primaryWhite);
}

.select-lvAcess {
    margin-top: 5px;
    outline: none;
    background-color: var(--main_primaryWhite);
    border: none;
    border-radius: 5px;
    height: 30px;
    font-weight: 600;
}
.select-lvAcess * {
    background-color: var(--black_text);
    color: var(--main_primaryWhite);
}


@media (max-width: 765px){
    .user-data, .footer-user-data {
        grid-template-columns: 1fr;
    }

    .perfil {
        margin-top: 12vh;
        width: 80%;
    }

    .btn-edit {
        margin-top: 20px;
        grid-column: auto;
    }
}



</style>