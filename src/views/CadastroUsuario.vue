
<template>
  <div class="gerenciamento-user">
    <div class="perfil">
      <div class="user">
        <div class="perfil-img"><i class="fas fa-user-alt"></i></div>
        <h2>Gerenciamento de usuário</h2>
      </div>
      <h2>Cadastro</h2>

      <form action="" class="cadastro-user-data" @submit.prevent="RegisterUser">
        <div class="input">
          <label for="">Nome</label>
          <input
            type="text"
            placeholder="ex: João das Neves"
            v-model="userRegister.name"
          />
        </div>

        <div class="input">
          <label for="">Matrícula</label>
          <input
            type="text"
            placeholder="Matrícula do usuário"
            v-model="userRegister.register"
          />
        </div>

        <div class="input">
          <label for="">Email</label>
          <input
            type="text"
            placeholder="ex: nome@tuti.com.br"
            v-model="userRegister.email"
          />
        </div>

        <div class="input">
          <label for="">CPF</label>
          <input
            type="text"
            placeholder="CPF do usuário"
            v-model="userRegister.cpf"
          />
        </div>

        

        <div class="input-acessLevel">
          <label for="user-name">Nível de Acesso</label>
          <select
            name="lvAcess"
            id="lvAcess"
            class="select-lvAcess"
            v-model="userRegister.fk_role"
          >
            <option
              v-for="(option, index) in options"
              :value="option.value"
              :key="index"
            >
              {{ option.text }}
            </option>
          </select>
        </div>

        <div class="buttons-action">
          <button class="btn save-btn" type="submit">Salvar</button>
        </div>
      </form>
    </div>

    <div v-for="tudo of Tudousers" :key="tudo.id">
      <h2>{{ tudo }}</h2>
    </div>

    <TableUsers :listUsers="users" />
  </div>
</template>

<script>
import TableUsers from "../components/TableUsers/TableUsers.vue";
import http from "../services/account/Users";

export default {
  components: { /*InputPerfil,*/ TableUsers },

  name: "CadastroUsuario",
  data() {
    return {
      users: [],
      userRegister: {
        name: "",
        email: "",
        cpf: "",
        register: "",
        fk_role: "",
      },
      options: [
        { text: "Escolha", value: "" },
        { text: "ADM", value: 1 },
        { text: "Gestor", value: 2 },
        { text: "Inspetor", value: 3 },
        { text: "Analista", value: 4 },
        { text: "Metrologista", value: 5 },
      ],
    };
  },

  created: async function () {
    this.$store.commit("$SETISLOADING");
    await http.listUsers().then((res) => {
      this.users = res.data.users;
    });
    this.$store.commit("$SETISLOADING");
  },

  methods: {
    RegisterUser: async function () {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-right',
        iconColor: 'white',
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

      const name = this.userRegister.name;
      const email = this.userRegister.email;
      const cpf = this.userRegister.cpf;
      const register = this.userRegister.register;
      const role = this.userRegister.fk_role;

      if (!name || !email || !cpf || !register || !role) {
        return Toast.fire({
          icon: 'error',
          title: "Necessário preencher todos os campos!",
          background: "#FFA490",
        })
      }

      this.$store.commit("$SETISLOADING");
      const userRegister = this.userRegister;
      await http
        .registerUser(userRegister)
        .then((response) => {
          if (response.status === 201) {
            Toast.fire({
              icon: 'success',
              title: 'Usuário cadastrado com sucesso',
              background: "#A8D4FF",
            })
            window.location.reload(true);
          }
        })
        .catch((error) => {
          return Toast.fire({
            icon: 'warning',
            title: `Verifique se todos os campos estão corretos!, error: ${error.response.data.message}`,
            background: "#E8EB7C",
            iconColor: "#545454"
          })  
        });

      this.$store.commit("$SETISLOADING");
    },
  },
};
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
  background-color: var(--main_primaryWhite);
  padding: 10px;
  justify-content: center;
  height: 80px;
  border-radius: 10px;
  color: var(--black_text);
  font-weight: 600;
}

.input input {
  border: none;
  outline: none;
  height: 50px;
  padding: 0px 5px 0 5px;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px var(--main_primaryWhite) inset;
}

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

.perfil h2 {
  color: var(--black_text);
  margin-bottom: 20px;
}

.perfil h3 {
  color: var(--green_text);
  margin-bottom: 20px;
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
  font-weight: 600;
}

.buttons-action {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
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

/*
.cancel-btn {
    grid-column: 3;
}

*/

.save-btn {
  width: 100%;
  grid-column: 4;
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

@media (max-width: 765px) {
  .gerenciamento-user {
    margin-top: 5vh;
  }
  .cadastro-user-data {
    grid-template-columns: 1fr;
  }
  .perfil {
    width: 80%;
  }

  .buttons-action {
    grid-template-columns: 1fr;
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
