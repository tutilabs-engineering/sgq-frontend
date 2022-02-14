<template>
  
	<div class="container">

		<h1 class="title">SGQ</h1>
		<span class="subtitle">Sistema de Garantia de Qualidade</span>

		<form class="form" @submit.prevent="Login">
			<label for="matricula" class="labelForm">Matricula</label>
			<input class="inputForm" type="number" name="" id="" placeholder="Digite a sua matricula" v-model="login.matricula">

			<label for="senha" class="labelForm">Senha</label>
			<input class="inputForm" type="password" placeholder="*****" v-model="login.senha">

			<input class="btnLogin" type="submit" value="Entrar">
      </form>
   

  </div>
</template>
<script>

import http from "../services/login";

export default {
  data() {
    return {
      login: {
        matricula: "",
        senha: ""
      }
    }
  },
  methods: {
    Login: function() {
      if(this.login.matricula == "" || this.login.senha == "") {
        const Toast =  this.$swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
              toast.addEventListener('mouseenter', this.$swal.stopTimer)
              toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'warning',
          title: 'Registration and password fields must be completed.'
        })

      } else {
        http.login(this.login).then((response) => {
          
          if(response.data.token.length > 0) {
            localStorage.setItem("token", response.data.token);
            this.$router.push({path: "/startup"});
            const Toast =  this.$swal.mixin({
              toast: true,
              position: 'top-start',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
              didOpen: (toast) => {
                  toast.addEventListener('mouseenter', this.$swal.stopTimer)
                  toast.addEventListener('mouseleave', this.$swal.resumeTimer)
              }
            })
            Toast.fire({
              icon: 'success',
              title: 'Logged'
            })
          } else {
            alert("error")
          }

        }).catch((error) => {
          const Toast =  this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', this.$swal.stopTimer)
                toast.addEventListener('mouseleave', this.$swal.resumeTimer)
            }
          })
          Toast.fire({
            icon: 'error',
            title: error.response.data.message
          })
        })
      }
    }
  }
};
</script>
<style scoped>


body,
html {
  font-family: "Source Sans Pro", sans-serif;
  background-color: #0A7A46;
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

.title {
	font-size: 70px;
	margin-bottom: 10px;
	color: var(--font-color);
}

.subtitle {
	text-align: center;
	margin-bottom: 50px;
	font-size: 30px;
	color: var(--font-color);
  opacity: 0.7;
}

.form {
	width: 60vw;
	display: flex;
	justify-content: center;
	flex-direction: column;
	
}

.labelForm {
	color: var(--font-color);
	font-size: 20px;
	margin-bottom: 5px;
  
}

.inputForm {
	background-color: transparent;
	height: 40px;
	margin-bottom: 20px;
	border: 0;
	outline: none;
	border: none;
	border-bottom: 2px solid var(--main-color);
	font-size: 20px;
}

.inputForm::placeholder {
	font-size: 16px;
  color: var(--font-color);
  opacity: 0.5;
}

.btnLogin {
  background-color: var(--main-color);
	margin-top: 20px;
	cursor: pointer;
	font-weight:600;
	color: #fff;
	font-size: 25px;
	height: 50px;
  border: none;
	border-radius: 20px;
	transition: 0.4s;
}

.btnLogin:hover {
	color: #fff;
	background-color: var(--button-color-02);
}




@media (max-width: 765px){
	.form {
		width: 60vw;
	}
}

@media (min-width: 765px){
	.form {
		width: 400px;
	}
}



</style>
