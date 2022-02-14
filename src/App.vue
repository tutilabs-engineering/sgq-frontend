<template>
  <div class="defaultInterface">
    <div v-if="telaLogin">
      <Login />
    </div>

    <div v-else class="content" :style="{ 'margin-left': sidebarWidth }">
      <SideBar />
      <!--<NavBar />-->
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

//axios

export default {
  components: {
    SideBar,
    //NavBar,
    Login,
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
  --bg-gray: #f5f5f5;

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
  background-color: var(--background-color);
}
.defaultInterface {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.content {
  justify-content: center;
  display: flex;
  background-color: var(--background-color);
  height: 100vh;
}
</style>
