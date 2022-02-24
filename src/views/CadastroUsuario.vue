<template>
    <div class="gerenciamento-user">
            <div class="perfil">
                <div class="user">
                    <div class="perfil-img"><i class="fas fa-user-alt"></i></div>
                    <h2>Gerenciamento de usuário</h2>
                </div>
                <h2>Cadastro</h2>

                

                <div class="cadastro-user-data">
                    
                    
                    <InputPerfil title="Nome Completo" :value="user.nomeCompleto" :type="text" :placeholder="'Maria do Bairro'"/>
                    <InputPerfil title="Matricula" :value="user.matricula" :type="number" :placeholder="'ex: 8946987'"/>
                    <InputPerfil title="Email" :value="user.email" :type="email" :placeholder="'ex: joaozinho@tuti.com'"/>
                    <InputPerfil title="CPF" :value="user.cpf" :type="text" :placeholder="'ex: 03992355202'"/>
                    <InputPerfil title="Cargo" :value="user.cargo" :type="text" :placeholder="'ex: Gestor'"/>

                    <div class="input-acessLevel">
                        <label for="user-name">Nível de Acesso</label>
                        <select name="lvAcess" id="lvAcess" class="select-lvAcess">
                            <option value="adm">ADM</option>
                            <option value="gestor">Gestor</option>
                            <option value="analista">Analista</option>
                            <option value="metrologista">Metrologista</option>
                            <option value="inspetor">Inspetor</option>
                            </select>
                    </div>
                </div>

                <div class="buttons-action">
                    <button class="btn cancel-btn">Cancelar</button>
                    <button class="btn save-btn">Salvar</button>
                </div>
            </div>

            <div v-for="tudo of Tudousers" :key="tudo.id">
                <h2>{{tudo}}</h2>
            </div>

         
            <TableUsers :listUsers="users"/>

            

            
    </div>
  
</template>

<script>
import TableUsers from "../components/TableUsers/TableUsers.vue"
import InputPerfil from "../components/InputsPerfil/InputPerfil.vue";
import http from "../services/account/Users"

export default {

    components: {InputPerfil, TableUsers},

    name: "CadastroUsuario",
    data(){
		return {
            users: [],

            user: {
                id: 1,
                nomeCompleto: "Maria de Fátima Marques",
                email: "marifatima@tuti.com",
                matricula: "5677898",
                cpf: "96378925802",
                cargo: "Técnica",
            },
        }
	},

    created: async function () {
        await http.listUsers().then( res => {
            this.users = res.data.users
            console.log(this.users)

        })
    }


}


</script>

<style scoped>

.gerenciamento-user {
    margin-top: 5vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

.user {
    display: flex;
    align-items: center;
    font-size: 25px;
    margin-bottom: 35px;
}

.user h2 {
    line-height: 35px;
}

.fa-user-alt {
    color: var(--main_primaryWhite);
    font-size: 3rem;
}


.perfil-img {
    border-radius: 10px;
    height: 4rem;
    width: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--green_text);
    margin-right: 10px;
}

.cadastro-user-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 20px;
}


.input-acessLevel {
    display: flex;
    flex-direction: column;
    background-color: var(--main_primaryWhite);
    padding: 10px;
    justify-content: center;
    height: 80px;
    border-radius: 10px;
    color: var(--black_text);
}

.buttons-action {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
}


.btn {
    color: var(--black_text);
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    height: 60px;
    border-radius: 10px;
    border: none;
    background-color: var(--btn_gray);
}

.cancel-btn {
    grid-column: 3;
}

.save-btn {
    color: var(--main_primaryWhite);
    background-color: var(--btn_blue);
}

.select-lvAcess {
    margin-top: 5px;
    outline: none;
    background-color: var(--main_primaryWhite);
    border: none;
    border-radius: 5px;
    height: 30px;
}
.select-lvAcess * {
    border: 1px solid red;
    background-color: var(--green_text);
    color: var(--main_primaryWhite);
}


@media (max-width: 765px){

    .gerenciamento-user {
        margin-top: 12vh;

    }
    .cadastro-user-data {
        grid-template-columns: 1fr;
    }
    .perfil {
        width: 80%;
    }

    .buttons-action {
        grid-template-columns: 1fr 1fr;
    }

    .btn {
        margin-top: 20px;
        grid-column: auto;
    }

    .user {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .user h2 {
        font-size: 1rem;
        text-align: center;
    }
}



</style>