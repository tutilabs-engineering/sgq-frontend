<template>
  <div class="container">
    <div class="login">
      <div class="login_left">
        <img :src="img_login" alt="teste" />
      </div>
      <div class="login_right">
        <h1 class="title">SGQ</h1>
        <span class="subtitle">Sistema de Garantia de Qualidade</span>

        <form class="form" @submit.prevent="Login">
          <label for="matricula" class="labelForm">Matricula</label>
          <input
            class="inputForm"
            type="text"
            name=""
            id=""
            placeholder="Digite a sua matricula"
            v-model="dataLogin.register"
          />

          <label for="senha" class="labelForm">Senha</label>
          <input
            class="inputForm"
            type="password"
            placeholder="*****"
            v-model="dataLogin.password"
          />

          <input class="btnLogin" type="submit" value="Entrar" />
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import http from "../services/account/Users"

export default {
  data() {
    return {
      dataLogin: {
        register: "",
        password: ""
      },
      errorValidation: false,
      img_login: "/img/img_login.png",
    };
  },

  methods: {
    Login: async function() {
      const access = this.dataLogin;

      await http.sessions(access).then((response) => {
        if(response.status === 200) {
          const token = response.data.token
          sessionStorage.setItem("token", token)
          
          window.alert("Logado")
          return this.$router.push({name: "Startup"})
        }
      }).catch((error) => {
        return window.alert(error.response.data.message)
      })
    }
  }
};
</script>
<style scoped>
body,
html {
  font-family: "Source Sans Pro", sans-serif;
  background-color: #0a7a46;
  padding: 0;
  margin: 0;
}

.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container .login {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.container .login .login_left {
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .login .login_left img {
  width: 90%;
}

.container .login .login_right {
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--card_green);
}

.container .login .login_right .title {
  font-size: 70px;
  margin-bottom: 10px;
  color: var(--main_primaryWhite);
}

.container .login .login_right .subtitle {
  text-align: center;
  margin-bottom: 50px;
  font-size: 30px;
  color: var(--main_primaryWhite);
}

.container .login .login_right .form {
  width: 56%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.container .login .login_right .form .labelForm {
  color: var(--font-color);
  font-size: 20px;
  margin-bottom: 5px;
  color: var(--main_primaryWhite);
}

.container .login .login_right .form .inputForm {
  background-color: transparent;
  height: 40px;
  margin-bottom: 20px;
  border: 0;
  outline: none;
  border: none;
  border-bottom: 2px solid var(--card_white);
  font-size: 20px;
  color: var(--main_primaryWhite);
  opacity: 0.8;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--green_text) inset;
}

/* Cor do texto do autocomplete */
input:-webkit-autofill {
    -webkit-text-fill-color: var(--main_primaryWhite) !important;
}

.inputForm::placeholder {
  outline: none;
  font-size: 16px;
  color: var(--font-color);
  opacity: 0.5;
}

.container .login .login_right .form .btnLogin {
  background: var(--btn_white);
  margin-top: 20px;
  cursor: pointer;
  font-weight: 600;
  color: var(--green_text);
  font-size: 25px;
  height: 50px;
  border: none;
  border-radius: 20px;
  transition: 0.4s;
}

@media (max-width: 768px) {
  .container .login .login_left {
    display: none;
  }

  .container .login .login_right {
    width: 100%;
  }
}

@media (max-width: 425px) {
  .container .login .login_right .form {
    width: 80%;
  }
}
</style>
