<template>
  <div class="content-perfil" v-if="editStatus">
    <fieldset class="perfil">
      <legend><i class="fas fa-user-check"></i> Perfil</legend>

      <form class="user-data">
        <div class="inputs">
          <InputPerfil
            title="Nome"
            :value="user.name"
            :type="text"
            :placeholder="'Maria do Bairro'"
            :disabled="1"
          />
          <InputPerfil
            title="Matricula"
            :value="user.register"
            :type="number"
            :placeholder="'ex: 8946987'"
            :disabled="1"
          />
          <InputPerfil
            title="Email"
            :value="user.email"
            :type="email"
            :placeholder="'ex: joaozinho@tuti.com'"
            :disabled="1"
          />
          <InputPerfil
            title="CPF"
            :value="user.cpf"
            :type="text"
            :placeholder="'ex: 03992355202'"
            :disabled="1"
          />

          <div class="input system-white">
            <label for="user-name">Unidade</label>
            <select name="lvAcess" id="lvAcess" class="select-lvAcess" disabled>
              <option value="adm">{{ user.unidadeNome }}</option>
            </select>
          </div>

          <div class="input system-white">
            <label for="user-name">Turno</label>
            <select name="lvAcess" id="lvAcess" class="select-lvAcess" disabled>
              <option value="adm">{{ user.turnoNome }}</option>
            </select>
          </div>


        </div>

        <div class="footer-user-data">
          <h3>Sistema</h3>
          <div class="input system-black">
            <label for="user-name">Nível de Acesso</label>
            <select name="lvAcess" id="lvAcess" class="select-lvAcess" disabled>
              <option value="adm">{{ user.cargo }}</option>
            </select>
          </div>

          <div class="btns btn-edit-false">
            <button class="btn btn-edit" @click="editStatus = false">
              Editar
            </button>
          </div>
        </div>
      </form>
    </fieldset>
  </div>

  <div class="content-perfil" v-else>
    <fieldset class="perfil">
      <legend><i class="fas fa-user-edit"></i>Edição</legend>

      <form class="user-data" @submit.prevent="UpdateUser">
        <div class="inputs">
          <div class="input">
            <label for="">Nome</label>
            <input
              type="text"
              placeholder="ex: João das Neves"
              v-model="user.name"
            />
          </div>

          <div class="input">
            <label for="">Matrícula</label>
            <input
              type="text"
              placeholder="Matrícula do usuário"
              v-model="user.register"
            />
          </div>

          <div class="input">
            <label for="">Email</label>
            <input
              type="text"
              placeholder="ex: nome@tuti.com.br"
              v-model="user.email"
            />
          </div>

          <div class="input">
            <label for="">CPF</label>
            <input
              type="text"
              placeholder="CPF do usuário"
              v-model="user.cpf"
            />
          </div>

          <div class="input system-white">
          <label for="user-name">Unidade</label>
          <select
            name="lvAcess"
            id="lvAcess"
            class="select-lvAcess"
            v-model="user.unidade"
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

        <div class="input system-white">
          <label for="user-name">Turno</label>
          <select
            name="lvAcess"
            id="lvAcess"
            class="select-lvAcess"
            v-model="user.turno"
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

          
        </div>

        <div class="footer-user-data">
          <h3>Sistema</h3>
          <div class="input system-black">
            <label for="user-name">Nível de Acesso</label>
            <select
              name="lvAcess"
              id="lvAcess"
              class="select-lvAcess"
              v-model="user.lvAccess"
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

          <div class="btns">
            <button class="btn btn-cancel" @click="editStatus = true">
              Cancel
            </button>

            <button class="btn btn-save" type="submit">Salvar</button>
          </div>
        </div>
      </form>
    </fieldset>
  </div>
</template>

<script>
import InputPerfil from "../components/InputsPerfil/InputPerfil.vue";
import http from "../services/account/Users";

export default {
  components: { InputPerfil },
  name: "Perfil",

  data() {
    return {
      userId: this.$route.query.id,
      user: {
        id: "",
        name: "",
        email: "",
        register: "",
        cpf: "",
        cargo: "",
        lvAccess: "",
        unidade: "",
        unidadeNome: ""
      },

      isDisable: true,
      editStatus: true,

      options: [
        { text: "Escolha", value: "" },
        { text: "ADM", value: 1 },
        { text: "Gestor", value: 2 },
        { text: "Analista", value: 3 },
        { text: "Metrologista", value: 4 },
        { text: "Inspetor", value: 5 },
      ],

      units: [
        {text: "Escolha", value: ""},
        {text: "Matriz", value: 1},
        {text: "Filial", value: 2 },
      ],

      turnos: [
        {text: "Escolha", value: ""},
        {text: "1° Turno", value: 1},
        {text: "2° Turno", value: 2 },
        {text: "3° Turno", value: 3 },
        {text: "Comercial", value: 4 },
      ]
    };
  },

  created: async function() {
      try {
        
        this.$store.commit("$SETISLOADING");
        
        await http
          .findUserById(this.userId)
          .then((res) => {
            this.user.id = res.data.user.id;
            this.user.name = res.data.user.name;
            this.user.email = res.data.user.email;
            this.user.register = res.data.user.register;
            this.user.cpf = res.data.user.cpf;
            this.user.cargo = res.data.user.role.description;
            this.user.lvAccess = res.data.user.role.id;
            this.user.unidade = res.data.user.unity.id;
            this.user.unidadeNome = res.data.user.unity.name;
            this.user.turno = res.data.user.office_hour.id;
            this.user.turnoNome = res.data.user.office_hour.description

          })
          .catch((error) => console.log("error", error));
        this.$store.commit("$SETISLOADING");
      } catch (error) {
        console.log(error);
      }
  },

  methods: {
      UpdateUser: async function () {
      window.location.reload(true);
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


      this.$store.commit("$SETISLOADING");
      const userUpdated = {
        id: this.user.id,
        name: this.user.name,
        email: this.user.email,
        register: this.user.register,
        cpf: this.user.cpf,
        fk_role: this.user.lvAccess,
        fk_unity: this.user.unidade,
        fk_office_hour: this.user.turno
      };

      await http
        .updateUserById(userUpdated)
        .then((response) => {
          if (response.status === 200) {
            Toast.fire({
              icon: 'success',
              title: 'Usuário atualizado com sucesso',
              background: "#A8D4FF",
            })
            this.editStatus = !this.editStatus;
            window.location.reload()
          }
          
        })
        .catch((error) => {
          this.$store.commit("$SETISLOADING");
          return Toast.fire({
            icon: 'warning',
            title: `Verifique se todos os campos estão corretos!, error: ${error.response.data.message}`,
            background: "#E8EB7C",
            iconColor: "#545454"
          })
        });
    },
  },
};
</script>

<style scoped>
.content-perfil {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.perfil {
  width: 90%;
  height: auto;
}

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  border: none;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
}

legend {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--black_text);
}

.perfil h2 {
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

.btns {
  grid-column: 4;
  display: flex;
  justify-content: flex-end;
}

.btn {
  color: var(--black_text);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  height: 60px;
  width: 50%;
  border-radius: 10px;
  border: none;
  grid-column-start: 4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-edit {
  background-color: var(--btn_gray);
}

.btn-save {
  background-color: var(--btn_blue);
  color: var(--main_primaryWhite);
}

.btn-cancel {
  margin-right: 10px;
  cursor: pointer;
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

@media (max-width: 765px) {

  legend {
    text-align: center;
  }
  .inputs {
    grid-template-columns: 1fr;
  }

  .perfil {
    width: 100%;
  }

  .btn {
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 60px;
    margin: 10px 0 10px 0;
  }

  .footer-user-data {
    display: flex;
    flex-direction: column;
    -ms-flex-order: 1;
  }

  .perfil h2 {
    font-size: 1.7rem;
    line-height: 30px;
  }
}
</style>