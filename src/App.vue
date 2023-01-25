<template>
  <div v-if="ModalNotFound">
    <ModalNotFound />
  </div>

  <div v-if="ModalErrorPermission">
    <ModalErrorPermission />
  </div>

  <div v-if="EmConstrucao">
    <EmConstrucao />
  </div>

  <div v-if="telaLogin">
    <Login />
  </div>

  <div v-else>
    <div v-if="this.$store.getters.$GETISLOADING">
      <Loading />
    </div>

    <SideBar />
    <Header titlePage="Módulo Startup" />

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>

import Login from "./views/Login.vue";
import Routes from "./router/index";
import Header from "./components/Header/Header.vue";
import ModalNotFound from "./components/ModalError/RouteNotFoundError.vue"
import ModalErrorPermission from "./components/ModalError/AccessError.vue"
import EmConstrucao from "./components/ModalError/EmConstrucao.vue"
import Loading from "./components/Loading/Loading.vue";
import SideBar from "./components/SideBar/SideBar.vue"



export default {
  data() {
    return {
      isLoading: this.$store.getters.$GETISLOADING,
    };
  },
  components: {
    EmConstrucao,
    ModalNotFound,
    ModalErrorPermission,
    SideBar,
    Loading,
    Login,
    Header,
  },

  computed: {
    telaLogin() {
      return this.$route.name === "Login";
    },
    ModalNotFound() {
      return this.$route.name === "NotFound";
    },
    ModalErrorPermission() {
      return this.$route.name === "ErrorPermission";
    },
    EmConstrucao() {
      return this.$route.name === "EmConstrucao";
    }
  },

  mounted() {
    let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
        document.documentElement.setAttribute('data-theme', localTheme);


    const currentPath = window.location.pathname;
    var routesExists = Routes.options.routes;

    var result = routesExists.find((element) => element.path == currentPath);

    if (result == undefined && localStorage.getItem("token") == undefined) {
      this.$router.push({ path: "/notFound" });

    }

    var nameURL = window.location.pathname;
    if (!navigator.onLine) {
      const Toast = this.$swal.mixin({
                    toast: true,
                    position: 'top-right',
                    iconColor: '#ff5349',
                    customClass: {
                    popup: 'colored-toast',
                    title: 'title-swal-text'
                    },
                    didOpen: (toast) => {
                    toast.addEventListener('mouseenter', this.$swal.stopTimer)
                    toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                    },
                    showConfirmButton: false,
                    timer: 0,
                    timerProgressBar: false
                })
                Toast.fire({
                        icon: 'warning',
                        title: 'Verifique a sua conexão de rede',
                        background: "#fff",
                })
    } 
    var display = document.querySelector(".defaultInterface");
    if (nameURL == "/login") {
      display.style.display = "block";
    }
  },
  methods: {
    mudar() {
      this.renderizar = !this.renderizar;
    },
  },
};
</script>

<style>
:root {
  /* colors */
  --main_primaryWhite: #ffffff;
  --black_text: #444444;
  --green_text: #10b981;
  --bg_green: #10b981;
  --bg_gray: #f5f5f5;
  --bg_white: #ffffff;

  /* cards */
  --card_green: #10b981;
  --card_orange: #fb923c;
  --card_red: #ef4444;
  --card_blue: #0ea5e9;
  --card_white: #ffffff;

  /* buttons */
  --btn_blue: #0ea5e9;
  --btn_green: #10b981;
  --btn_gray: #e9dfdf;
  --btn_white: #ffffff;

  /* flag */
  --flag_yellow: #e3e745;

  /* / border radius / */
  --radius: 1rem;
  --circuleRadius: 50%;

  /* / shadow / */
  --shadow: 0px 0px 1rem #d2d2d2a6;

  /* / padding / */
  --paddingInput: 1rem;
  --negativeSpace: 2vw;
  /* / weight */
  --bold: 600;
  --regular: 400;
}

[data-theme="darkMode"] {
  --main_primaryWhite: #e6e9e4;
  --black_text: #e6e9e4;
  --green_text: #010202;
  --bg_green: #010202;
  --bg_gray: #181A1B;
  --bg_white: #1C1E1F;

  --btn_white: #1C1E1F;
  --card_white: #1C1E1F;
  --bg_white: #1C1E1F;
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background-color: var(--bg_gray);
}

input[type="number"]:disabled {
  border: 1px solid var(--black_text);
  background-color: var(--bg_white);
  color: var(--black_text);
}

.defaultInterface {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  width: calc(100% - 210px);
  height: 100%;
  margin-left: 210px;
  padding: 4rem 1.5rem;
  transition: 0.5s;
}

.content.activeContent {
  width: calc(100% - 60px);
  margin-left: 60px;
  transition: 0.5s;
}

@media (max-width: 48em) {
  .content {
    width: 100vw;
    margin-left: 0;
    padding: 100px 4%;
  }
}
</style>
