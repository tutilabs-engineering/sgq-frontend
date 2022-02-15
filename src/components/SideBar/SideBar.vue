<template>
  <div class="sidebar">

    <div  class="sidebarOpened">

      <div class="option_link_title titleIcon" @click="() => this.$router.push({ name: 'Principal' })"> <i class="fas fa-vial"></i> <h3 class="link_title">SGQ</h3></div>

      <div class="option_link linkTo" @click="() => this.$router.push({ name: 'Startup' })"> <i class="fas fa-check-circle"></i><span class="link_name">Startup</span></div>
      
      <div class="option_link linkTo" @click="() => this.$router.push({ name: 'Status' })"> <i class="fas fa-clone"></i><span class="link_name">Criar Startup</span></div>

      <div class="option_link linkTo" @click="() => this.$router.push({ name: 'Dashboard' })"> <i class="fas fa-chart-bar"></i><span class="link_name">Dashboard</span></div>

      <div class="option_link linkTo" @click="() => this.$router.push({ name: 'attributes' })"> <i class="fas fa-desktop"></i><span class="link_name">Análise</span></div>

      <div class="option_link linkTo" @click="() => this.$router.push({ name: 'metrologia' })"> <i class="fas fa-ruler-combined"></i><span class="link_name">Metrologia</span></div>

      <div class="option_link linkTo exit" @click="Exit"> <i class="fas fa-door-open"></i><span class="link_name">Sair</span></div>

    </div>
    
  </div>
</template>

<script>
import jwt from "jsonwebtoken";

import { collapsed, toggleSidebar, sidebarWidth } from "./state";

export default {
  props: {},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
  data() {
    return {
      username: "",
    };
  },

  mounted() {
    const secret =
      "@#$%¨&*(UGYdkjsbvkjdbvbdsojew#$%¨&Hddjdjbskjdepwopwwcjshvcdsjvcds";
    if (localStorage.getItem("token") != undefined) {
      var token = localStorage.getItem("token");
      const decoded = jwt.verify(token, secret);
      console.log(decoded);
      this.username = decoded.name;
    }
  },

  methods: {
    Exit: function () {
      this.$swal
        .fire({
          title: "Até a proxima, " + this.username.split(" ")[0] + "!",
          imageUrl: "/img/qualidade.png",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        })
        .then(() => {
          this.$router.push({ name: "Login" });
          localStorage.removeItem("token");
        });
    },
  },
};
</script>


<style scoped>
.sidebar {
  position: fixed;
  width: 210px;
  height: 100vh;
  background-color: var(--bg_green);
  color: var(--main_primaryWhite);
  overflow: hidden;
  transition: 0.5s;
  padding: 0.5em;
}

.sidebar.activeSidebar {
  width: 60px;
}

.sidebarClosed {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.titleIcon {
  margin-bottom: 40px;
  font-size: 40px;
}

.link_title {
  margin-left: 10px;
  font-size: 40px;
}

.linkTo {
  margin-bottom: 30px;
}

.option_link,
.option_link_title {
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  transition: 0.5s;
  font-size: 25px;
  gap: 0.5rem;
}

.option_link_title {
  font-size: 35px;
}

.sidebarClosed div {
  margin-left: 0px;
}

.link_name {
  margin-left: 10px;
  font-size: 18px;
}

.exit {
  height: 70px;
  width: 100%;
  margin: 0 0 0 -10px;
  padding-left: 20px;
  position: absolute;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.349);
}
</style>
