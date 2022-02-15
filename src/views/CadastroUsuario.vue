<template>
    <div class="cadastro-perfil">
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

                    <div>
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
                <h3>Sistema</h3>
                <div class="footer-cadastro-user-data">
                    <div class="input system-black">
                        <label for="user-name">Nível de Acesso</label>
                        <select name="lvAcess" id="lvAcess" class="select-lvAcess">
                            <option value="adm">ADM</option>
                            <option value="gestor">Gestor</option>
                            <option value="analista">Analista</option>
                            <option value="metrologista">Metrologista</option>
                            <option value="inspetor">Inspetor</option>
                            </select>
                    </div>

                    <button class="btn-edit">Editar</button>
                </div>

            </div>
       
    </div>
  
</template>

<script>

import InputPerfil from "../components/InputsPerfil/InputPerfil.vue";


export default {

    components: { InputPerfil},

    name: "CadastroUsuario",
    data(){
		return {
            user: {
                id: 1,
                nomeCompleto: "Maria de Fátima Marques",
                email: "marifatima@tuti.com",
                matricula: "5677898",
                cpf: "96378925802",
                cargo: "Técnica",
            }
        
        
        }
		
	},


}
</script>

<style scoped>

.cadastro-perfil {
    width: 100%;
    height: calc(90vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;

}


.perfil {
    width: 80%;
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

.cadastro-user-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-bottom: 20px;
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
    .cadastro-user-data {
        grid-template-columns: 1fr;
    }

    .perfil {
        margin-top: 50px;
        width: 80%;
    }

    .btn-edit {
        margin-top: 20px;
        grid-column: auto;
    }
}



</style>