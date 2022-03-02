<template>
    <div class="content-perfil">

        <div class="perfil">
            <div class="user">
                <div class="perfil-img"><i class="fas fa-user-alt"></i></div>
                <h2>Perfil</h2>
            </div>

            <h3>Dados do usuário</h3>

            <div class="user-data">
                    
                <InputPerfil title="Nome Completo" :value="user.nomeCompleto" :type="text" :placeholder="'Maria do Bairro'"/>
                <InputPerfil title="Matricula" :value="user.matricula" :type="number" :placeholder="'ex: 8946987'"/>
                <InputPerfil title="Email" :value="user.email" :type="email" :placeholder="'ex: joaozinho@tuti.com'"/>
                <InputPerfil title="CPF" :value="user.cpf" :type="text" :placeholder="'ex: 03992355202'"/>
                <InputPerfil title="Cargo" :value="user.cargo" :type="text" :placeholder="'ex: Gestor'"/>

            </div>
                <h3>Sistema</h3>
                <div class="footer-user-data">
                    <div class="input system-black">
                        <label for="user-name">Nível de Acesso</label>
                        <select name="lvAcess" id="lvAcess" class="select-lvAcess" disabled>

                            <option value="adm">{{user.cargo}}</option>
                            <!-- FAZER V-FOR NA PARTE DE EDITAR -> V-FOR NO SELECT-->
                        </select>
                    </div>

                    <button class="btn-edit">Editar</button>
                </div>

            </div>
       
    </div>
  
</template>

<script>

import jwt from "jsonwebtoken";
import InputPerfil from "../components/InputsPerfil/InputPerfil.vue";
import http from "../services/account/Users"


export default {

    components: { InputPerfil},
    name: "Perfil",

    data(){
		return {
            user: {
                id: 1,
                nomeCompleto: "",
                email: "",
                matricula: "",
                cpf: "",
                cargo: "",
                lvAccess: ""
            },
        }	
	},

    
    created: async function () { 

    const secretQuefunciona = "cf2cf1732834hh4hsg657tvdbsi84732492ccF=2=eyfgewyf6329382¨&%$gydsu";

    const token = sessionStorage.getItem("token");

    if (token) {
      try {
        const {sub} = await jwt.verify(token, secretQuefunciona);
        this.$store.commit("$SETISLOADING")
        await http.findUserById(sub).then((res) => {
          this.user.nomeCompleto = res.data.user.name
          this.user.email = res.data.user.email
          this.user.matricula = res.data.user.register
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
}

.perfil

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

.user-data {
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

.btn-edit {
    color: var(--black_text);
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    height: 80px;
    border-radius: 10px;
    border: none;
    background-color: var(--btn_gray);
    grid-column: 4;
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