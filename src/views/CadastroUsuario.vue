
<template>
  <div class="gerenciamento-user">
    <fieldset class="perfil">
      <legend class="firstLegend"><i class="fas fa-user-plus"></i> Cadastrar Usuário</legend>

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
             v-mask="'###.###.###-##'"
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

        <div class="input-acessLevel">
          <label for="user-name">Unidade</label>
          <select
            name="lvAcess"
            id="lvAcess"
            class="select-lvAcess"
            v-model="userRegister.fk_unity"
          >
            <option
              v-for="(unity, index) in units"
              :value="unity.value"
              :key="index"
            >
              {{ unity.text }}
            </option>
          </select>
        </div>

        <div class="input-acessLevel">
          <label for="user-name">Turno</label>
          <select
            name="lvAcess"
            id="lvAcess"
            class="select-lvAcess"
            v-model="userRegister.fk_office_hour"
          >
            <option
              v-for="(turno, index) in turnos"
              :value="turno.value"
              :key="index"
            >
              {{ turno.text }}
            </option>
          </select>
        </div>

        <div class="buttons-action">
          <button class="btn save-btn" type="submit">Salvar</button>
        </div>
      </form>
    </fieldset>

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
        fk_unity: "",
        fk_office_hour: ""
      },
      options: [
        { text: "Escolha", value: "" },
        { text: "ADM", value: 1 },
        { text: "Gestor", value: 2 },
        { text: "Analista", value: 3 },
        { text: "Metrologista", value: 4 },
        { text: "Inspetor", value: 5 },
      ],

      units: [
        { text: "Escolha", value: "" },
        { text: "Matriz", value: "1" },
        { text: "Filial", value: "2" },
      ],

      turnos: [
        { text: "Escolha", value: "" },
        { text: "1° Turno", value: 1 },
        { text: "2° Turno", value: 2 },
        { text: "3° Turno", value: 3 },
        { text: "Comercial", value: 4 },
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
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
          title: "title-swal-text",
        },
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });

      const name = this.userRegister.name;
      const email = this.userRegister.email;

      // 
      this.userRegister.cpf = this.userRegister.cpf.replace(".","")
      this.userRegister.cpf = this.userRegister.cpf.replace(".","")
      this.userRegister.cpf = this.userRegister.cpf.replace("-","")
      
      const cpf = this.userRegister.cpf;
      const register = this.userRegister.register;
      const role = this.userRegister.fk_role;
      const unity = this.userRegister.fk_unity;
      const office_hour = this.userRegister.fk_office_hour;


      if (!name || !email || !cpf || !register || !role || !unity || !office_hour) {
        return Toast.fire({
          icon: "error",
          title: "Necessário preencher todos os campos!",
          background: "#FFA490",
        });
      }

      this.$store.commit("$SETISLOADING");
      const userRegister = this.userRegister;
      await http
        .registerUser(userRegister)
        .then((response) => {
          if (response.status === 201) {
            Toast.fire({
              icon: "success",
              title: "Usuário cadastrado com sucesso",
              background: "#A8D4FF",
            });
            window.location.reload(true);
          }
        })
        .catch((error) => {
          return Toast.fire({
            icon: "warning",
            title: `Verifique se todos os campos estão corretos!, error: ${error.response.data.message}`,
            background: "#E8EB7C",
            iconColor: "#545454",
          });
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
  border-radius: 5px;
  color: var(--black_text);
  font-weight: 600;
  border: 1px solid rgba(37, 36, 36, 0.281);
}

.input input {
  border: none;
  outline: none;
  height: 50px;
  padding: 0px 5px 0 5px;
}

fieldset {
  /* border: 1px solid rgba(37, 36, 36, 0.281); */
  border: none;
  width: 100%;
  background-color: transparent;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
}

.firstLegend {
  margin-bottom: 15px;
  margin-left: 20px;
}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px var(--main_primaryWhite) inset;
}

.gerenciamento-user {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.perfil {
  width: 90%;
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
  border-radius: 5px;
  color: var(--black_text);
  font-weight: 600;
  border: 1px solid rgba(37, 36, 36, 0.281);
}

.buttons-action {
  grid-column: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.btn {
  color: var(--black_text);
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  height: 60px;
  border-radius: 5px;
  border: none;
  background-color: var(--btn_gray);
}

.save-btn {
  width: 130px;
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
  border: none;
  background-color: var(--main_primaryWhite);
  color: var(--btn_green);
  font-weight: 600;
}

@media (max-width: 765px) {
  legend {
    text-align: center;
  }

  .firstLegend {
    margin-left: 0;
  }
  .cadastro-user-data {
    grid-template-columns: 1fr;
  }

  .save-btn {
    width: 100%;
  }
  .perfil {
    width: 100%;
  }

  .buttons-action {
    grid-column: 1;
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
    font-size: 1.3rem;
    text-align: center;
  }
}
</style>
