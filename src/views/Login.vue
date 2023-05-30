<template>
  <div class="content-login">
    <h1 class="title">SGQ</h1>
    <span class="software-title">Sistema de Garantia de Qualidade <br />Módulo Startup</span>

    <form class="form-login" @submit.prevent="Login">
      <label for="matricula" class="title-label">Matricula</label>
      <input class="inputForm" type="text" placeholder="Digite a sua matricula" v-model="dataLogin.register" />

      <label for="senha" class="title-label">Senha</label>
      <input class="inputForm" type="password" placeholder="*****" v-model="dataLogin.password" />

      <button class="btnLogin">Acessar</button>
    </form>

    <span class="version">Versão {{this.$store.state.version}}</span>

    <button class="darkModeButton" v-if="theme === 'darkMode'" @click="toggleTheme"><img src="../../public/icons/moon.svg" alt="">night </button>
    <button class="darkModeButton" v-else  @click="toggleTheme"><img src="../../public/icons/sun.svg" alt="">day</button>

  </div>
</template>
<script>
import http from "../services/account/Users";
import Cookie from 'js-cookie'

export default {
  data() {
    return {
      dataLogin: {
        register: "",
        password: "",
      },
      errorValidation: false,
      img_login: "/img/img_login.png",
      theme: ''
    };
  },



  created (){
    this.theme = localStorage.getItem('theme')
    console.log(localStorage.getItem('theme'));
  },

  methods: {
    toggleTheme() {
      this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
            document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
            localStorage.setItem('theme', this.theme); // stores theme value on local storage
    },

    Login: async function () {
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

      const access = this.dataLogin;
      this.$store.commit("$SETISLOADING");
      await http
        .sessions(access)
        .then(async (response) => {
          if (response.status === 200) {
            const token = await response.data.token;
            Cookie.set("token",token)
            if (token) {
              Toast.fire({
                icon: 'success',
                title: 'Logado com sucesso',
                background: "#A8D4FF",
              })
            }
            return await this.$router.push({ name: "Startup" });
          }
        })
        .catch((error) => {
          const errorMsg = error.response.data.message
          if (errorMsg === "register or password incorrect") {
            return Toast.fire({
              icon: 'error',
              title: 'Matrícula ou senha incorreta!',
              background: "#FFA490",
            })
          }
          if (errorMsg === "User is disabled") {
            return Toast.fire({
              icon: 'warning',
              title: 'Usuário desabilitado!',
              background: "#E8EB7C",
              iconColor: "#545454"
            })
          }
          return Toast.fire({
            icon: 'error',
            title: 'Erro no servidor!',
            background: "#FFA490",
          })
        });
      this.$store.commit("$SETISLOADING");
    },
  },
};
</script>
<style scoped>
.content-login {
  width: 100vw;
  height: 100vh;
  background-color: var(--bg_green);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title,
.software-title {
  color: var(--main_primaryWhite);
}

.title {
  font-size: 3.5rem;
}

.software-title {
  font-size: 1.5rem;
  text-align: center;
}

.form-login {
  margin-top: 2rem;
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
}

.title-label {
  margin: 1rem 0 0.3rem 0;
  color: var(--main_primaryWhite);
  font-weight: 500;
}

.inputForm {
  width: 25rem;
  background-color: transparent;
  height: 2.5rem;
  border-radius: 0.25rem;
  border: none;
  border: 2px solid var(--main_primaryWhite);
  padding: 0.7rem
}

.inputForm:focus {
  outline: 0
}

.btnLogin {
  border-radius: 0.25rem;
  border: none;
  margin-top: 1.5rem;
  width: 25rem;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--bg_green);
  background-color: var(--main_primaryWhite);
  transition: 0.3s;
  cursor: pointer;
}

.btnLogin:hover {
  background-color: var(--btn_blue);
  color: var(--main_primaryWhite);
}

.version {
  margin-top: 2rem;
  color: var(--main_primaryWhite);
  font-size: 0.9rem;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.613);
}

input[type="text"],
input[type="password"] {
  -moz-appearance: textfield;
  color: var(--main_primaryWhite);
  font-size: 1rem;
}

.darkModeButton {
  width: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--main_primaryWhite);
}


@media (max-width: 500px) {
  .form-login {
    width: 85%;
  }

  .inputForm, .btnLogin {
    width: 100%;
  }
}

</style>
