<template>
    <div class="sidebar" :style="{width: sidebarWidth}">

      <div v-if="collapsed" class="sidebarClosed">
          <div class="option_link_title titleIcon"><i class="fas fa-vial" @click="() => this.$router.push({name: 'Principal'})"></i></div>

          <div class="option_link linkTo"><i class="fas fa-chart-bar" @click="() => this.$router.push({name:'Dashboard'})"></i></div>

          <div class="option_link linkTo"><i class="fas fa-clone" @click="() => this.$router.push({name:'Status'})"></i></div>

          <div class="option_link linkTo"><i class="fas fa-check-circle" @click="() => this.$router.push({name: 'Startup'})"></i></div>

          <div class="option_link linkTo"><i class="fas fa-desktop" @click="() => this.$router.push({name: 'attributes'})"></i></div>

          <div class="option_link linkTo"><i class="fas fa-chart-pie"></i></div>

          <div class="option_link linkTo"><i class="fas fa-boxes"></i></div>

          <div class="option_link linkTo"><i class="fa fa-search"></i></div>

          <div class="option_link linkTo" @click="() => this.$router.push({name: 'metrologia'})"><i class="fas fa-ruler-combined"></i></div>

          <div class="option_link linkTo"><i class="fas fa-cogs"></i></div>

          <div class="option_link linkTo" @click="Exit"><i class="fas fa-door-open"></i></div>
      
      </div>

      
      <div v-else class="sidebarOpened">

          <div class="option_link_title titleIcon" @click="() => this.$router.push({name: 'Principal'})"><i class="fas fa-vial" ></i><h3 class="link_title">SGQ</h3></div>

          <div class="option_link linkTo linkOpened" @click="() => this.$router.push({name:'Dashboard'})"><i class="fas fa-chart-bar" ></i><span class="link_name">Dashboard</span></div>

          <div class="option_link linkTo linkOpened" @click="() => this.$router.push({name:'Status'})"><i class="fas fa-clone" ></i><span class="link_name">Criar Startup</span></div>

          <div class="option_link linkTo linkOpened" @click="() => this.$router.push({name: 'Startup'})"><i class="fas fa-check-circle" ></i><span class="link_name">Startup</span></div>

          <div class="option_link linkTo linkOpened" @click="() => this.$router.push({name: 'attributes'})"><i class="fas fa-desktop" ></i><span class="link_name">Atributos</span></div>

          <div class="option_link linkTo linkOpened"><i class="fas fa-chart-pie"></i><span class="link_name">Gráficos</span></div>

          <div class="option_link linkTo linkOpened"><i class="fas fa-boxes"></i><span class="link_name">Plugins</span></div>

          <div class="option_link linkTo linkOpened"><i class="fa fa-search"></i><span class="link_name">Explorar</span></div>

          <div class="option_link linkTo linkOpened" @click="() => this.$router.push({name: 'metrologia'})"><i class="fas fa-ruler-combined"></i><span class="link_name">Metrologia</span></div>

          <div class="option_link linkTo linkOpened"><i class="fas fa-cogs"></i><span class="link_name">Configurações</span></div>

          <div class="option_link linkTo linkOpened" @click="Exit"><i class="fas fa-door-open"></i><span class="link_name">Sair</span></div>

      </div>


        
    </div>
</template>

<script>
import jwt from "jsonwebtoken"


import { collapsed, toggleSidebar, sidebarWidth} from './state'

export default ({
    props: {},
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth}
    },
    data(){
      return{
        username: ""
      }
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
    Exit: function() {
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
    }
  }

})
</script>


<style scoped>

.sidebar {
    color: #FFF;
    height: auto;
    background-color: var(--main-color);
    float: left;
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;
    transition: 0.1s ease;
    display: flex;
    flex-direction: column;
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

.option_link, .option_link_title {
  cursor: pointer;
  margin-left: 10px;
  display: flex;
  align-items: center;
  transition: 0.3s;
  font-size: 25px;
}

.option_link_title {
  font-size: 35px;
}

.sidebarClosed div {
  margin-left: 0px;
}

.linkOpened:hover {
  margin-left: 25px;
}

.link_name {
  margin-left: 10px;
  font-size: 18px;
}



</style>
