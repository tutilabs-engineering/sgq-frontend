<template>

  <div class="defaultInterface">
    <div v-if="telaLogin">
      <Login />
    </div>
    
    <div v-else class="content" :style="{ 'margin-left': sidebarWidth}">
      
      <SideBar />
      <!--<NavBar />-->
      <router-view />
      
      
    </div>
  </div>

</template>

<script>
//import NavBar from "./components/NavBar";

import SideBar from './components/SideBar/SideBar.vue'
import {sidebarWidth} from './components/SideBar/state'
import Login from "./views/Login.vue";
import Routes from "./router/index";

//axios

export default {
  components: {
    SideBar,
    //NavBar,
    Login,
  },
  setup(){
    return {sidebarWidth}
  },
  computed: {
    telaLogin() {
      return this.$route.name === "Login";
    },
  },

  mounted() {

    const currentPath = window.location.pathname;
    var routesExists = Routes.options.routes;

    var result = routesExists.find(element => element.path == currentPath);


    if(result == undefined && localStorage.getItem("token") == undefined) {
      this.$router.push({path: "/notFound"});
    }

    var nameURL = window.location.pathname
     var display = document.querySelector(".defaultInterface");
    if(nameURL == "/login"){
     
      display.style.display="block"
    }else{
      
      display.style.display="block"
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
  --main-color:#43CC74;
  --font-color: #1B1A1A;
  --button-color-01: #FFAE3D ;
  --button-color-02: #5F9DFF;
  --button-color-03: #FF5349;
  --background-color: #ECECEC;
  --card-color: #fff;
  --card-color-hover: #FEFEFE;
}


@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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
