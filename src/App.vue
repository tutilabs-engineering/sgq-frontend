<template>

  <div v-if="telaLogin">
    <Login />
  </div>

  <div v-else>

    <div v-if="this.$store.getters.$GETISLOADING">
        <Loading /> 
    </div>

    <SideBar />
    <Header titlePage="Sistema de Gerenciamento de Qualidade" />

    <div class="content">
      <router-view />
    </div>
  </div>

</template>

<script>
//import NavBar from "./components/NavBar";

import SideBar from "./components/SideBar/SideBar.vue";
import { sidebarWidth } from "./components/SideBar/state";
import Login from "./views/Login.vue";
import Routes from "./router/index";
import Header from "./components/Header/Header.vue";

import Loading from './components/Loading/Loading.vue'

//axios

export default {

  data() {
    return {
      isLoading: this.$store.getters.$GETISLOADING,
    }
  },
  components: {
    SideBar,
    Loading,
    Login,
    Header,
  },
  setup() {
    return { sidebarWidth };
  },
  computed: {
    telaLogin() {
      return this.$route.name === "Login";
    },
  },

  mounted() {
    const currentPath = window.location.pathname;
    var routesExists = Routes.options.routes;

    var result = routesExists.find((element) => element.path == currentPath);

    if (result == undefined && localStorage.getItem("token") == undefined) {
      this.$router.push({ path: "/notFound" });
    }

    var nameURL = window.location.pathname;
    var display = document.querySelector(".defaultInterface");
    if (nameURL == "/login") {
      display.style.display = "block";
    } else {
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
  --green_text: #3fc36d;
  --bg_green: #3fc36d;
  --bg_gray: #f5f5f5;
  --bg_white: #ffffff;

  /* cards */
  --card_green: #3fc36d;
  --card_orange: #ffae3d;
  --card_red: #ff5349;
  --card_blue: #5f9dff;
  --card_white: #ffffff;

  /* buttons */
  --btn_blue: #5f9dff;
  --btn_green: #3fc36d;
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
  padding: 40px;
  transition: 0.5s;
}

.content.activeContent {
  width: calc(100% - 60px);
  margin-left: 60px;
  transition: 0.5s;
}
</style>
