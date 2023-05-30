<template>
  <header class="header">
    <a @click="() => this.$router.push({ name: 'Startup' })" class="logo"><i class="fas fa-vial"></i>SGQ</a>

    <input class="menu-btn" type="checkbox" id="menu-btn" v-model="checkboxValue" />
    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
    <ul class="menu">

      <li @click="changeCheckboxValue">
        <a @click="() => this.$router.push({ name: 'Startup' })">
          <i class="fas fa-check-circle"></i>
          Startup
        </a>
      </li>
      <li @click="changeCheckboxValue">
        <a @click="() => this.$router.push({ name: 'Status' })"><i class="fas fa-clone"></i>Criar Startup</a>
      </li>
      <li @click="changeCheckboxValue">
        <a @click="() => this.$router.push({ name: 'BuscarOp' })"><i class="fas fa-search"></i>Buscar</a>
      </li>
      <li @click="changeCheckboxValue">
        <a @click="() => this.$router.push({ name: 'Dashboard' })">
          <i class="fas fa-chart-bar"></i>Dashboard</a>
      </li>
      <li @click="changeCheckboxValue">
        <a @click="() => this.$router.push({ name: 'AnaliseDeProdutos' })"><i class="fas fa-desktop"></i>Análise</a>
      </li>
      <li @click="changeCheckboxValue">
        <a @click="() => this.$router.push({ name: 'metrologia' })"><i class="fas fa-ruler-combined"></i>Metrologia</a>
      </li>
      <li @click="changeCheckboxValue">
        <a @click="() => this.$router.push({ name: 'Configuracoes' })"><i class="fas fa-tools"></i>Configuracoes</a>
      </li>
      <li @click="changeCheckboxValue">
        <a @click="Exit"><i class="fas fa-door-open"></i>Sair</a>
      </li>

      <li>
        <button class="darkModeButton" v-if="theme === 'darkMode'" @click="toggleTheme"><img src="../../../public/icons/moon.svg" alt="">night </button>
        
        <button class="darkModeButton" v-else  @click="toggleTheme"><img src="../../../public/icons/sun.svg" alt="">day</button>
      </li>


      

    </ul>

    
    
  </header>
</template>

<script>
import jwt from "jsonwebtoken";
import http from "../../services/account/Users";
import Cookie from 'js-cookie'

export default {
  created: async function () {
    // const secret = process.env.SECRET

    const secretQuefunciona =
      "cf2cf1732834hh4hsg657tvdbsi84732492ccF=2=eyfgewyf6329382¨&%$gydsu";

    const token = Cookie.get("token");

    if (token) {
      try {
        const { sub } = await jwt.verify(token, secretQuefunciona);
        await http
          .findUserById(sub)
          .then((res) => {
            return (this.username = res.data.user.name);
          })
          .catch((error) => console.log("error", error));
      } catch (error) {
        console.log(error);
      }
    }
  },

  methods: {
    changeCheckboxValue() {
      this.checkboxValue = !this.checkboxValue;
    },

    toggleTheme() {
      this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
            document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
            localStorage.setItem('theme', this.theme); // stores theme value on local storage
    },

    Exit: function () {
      this.$swal
        .fire({
          title: "Até a proxima, " + this.username.split(" ")[0] + "!",
          imageUrl: "/img/logout_img.gif",
          imageWidth: 550,
          imageHeight: 300,
          imageAlt: "Custom image",
        })
        .then(() => {
          this.$router.push({ name: "Login" });
          Cookie.remove("token");
        });
    },
  },
  data() {
    return {
      username: "",
      checkboxValue: false,
      theme: 'darkMode'
    };
  },
};
</script>

<style scoped>
/* header */
.header {
  width: 210px;
  height: auto;
  z-index: 99;
  position: fixed;
  background-color: var(--bg_green);
  color: var(--main_primaryWhite);
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  cursor: pointer;
}

.header li a{
  font-weight: 400;
  color: #fff;
  display: block;
  padding: 20px 20px;
  text-decoration: none;
}

.header li {
  transition: 0.3s;
}

.header li:hover {
  margin-left: 5px;
}

.header .logo {
  display: block;
  float: left;
  font-weight: 600;
  color: #fff;
  font-size: 1.8rem;
  padding: 10px 20px;
  margin-left: 10px;
  text-decoration: none;
}

.logo {
  cursor: pointer;
}

.darkModeButton {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  padding: 20px 30px;
  background: transparent;
  color: var(--main_primaryWhite);
}

.darkModeButton img {
  margin-right: 10px
}

/* menu */
.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */
.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 30px;
  position: relative;
  user-select: none;
}

.menu {
  display: flex;
  flex-direction: column;
  background-color: var(--green_text);
  width: 100%;
  height: 100vh;
}

.fas {
  margin-right: 10px;
}

.header .menu-icon .navicon {
  background: var(--main_primaryWhite);
  display: block;
  height: 3px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 25px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: var(--main_primaryWhite);
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 6px;
}

.header .menu-icon .navicon:after {
  top: -6px;
}

/* menu btn */
.header .menu-btn {
  display: none;
}

.header .menu-btn:checked~.menu {
  max-height: 600px;
}

.header .menu-btn:checked~.menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked~.menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked~.menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked~.menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked~.menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (max-width: 768px) {
  .header {
    width: 100vw;
    height: 65px;
  }

  .darkModeButton {
    padding: 20px 20px;
  }
}

@media (min-width: 769px) {
  .header li {
    float: left;
  }

  .header li a {
    padding: 20px 30px;
  }

  .header .menu {
    clear: none;
    float: right;
    max-height: none;
  }

  .header .menu-icon {
    display: none;
  }

  .header .menu-btn:checked~.menu {
    max-height: 100%;
  }
}
</style>
