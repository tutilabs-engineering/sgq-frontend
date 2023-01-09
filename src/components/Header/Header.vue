<template>
  <div class="header">
    <h5 class="title">{{ titlePage }}</h5>
    <span class="version">Versão 1.7.3</span>
  </div>
</template>

<script>
import { collapsed, sidebarWidth } from "../SideBar/state";

export default {
  setup() {
    return { collapsed, sidebarWidth };
  },

  props: ["titlePage"],

  created (){
    this.theme = localStorage.getItem('theme')
    console.log(localStorage.getItem('theme'));
  },

  methods: {
    toggleSidebar() {
      let activeSidebar = document.querySelector(".sidebar");
      let activeContent = document.querySelector(".content");
      let activeHeader = document.querySelector(".header");

      activeSidebar.classList.toggle("activeSidebar");
      activeContent.classList.toggle("activeContent");
      activeHeader.classList.toggle("activeHeader");
    },

  },
};
</script>


<style scoped>
.header {
  position: fixed;
  width: calc(100% - 210px);
  height: 3.5rem;
  margin-left: 210px;
  transition: 0.5s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  background-color: var(--bg_white);
  border-bottom: 1px solid rgba(37, 36, 36, 0.281);
  z-index: 10;
}

.version {
  color: var(--black_text);
  font-size: 12px;
}

.header.activeHeader {
  width: calc(100% - 60px);
  margin-left: 60px;
  transition: 0.5s;
}

.collapse-icon {
  font-size: 26px;
  color: var(--green_text);
  padding: 0.75em;
  transition: 0.3s linear;
  cursor: pointer;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.3s linear;
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

.title {
  font-size: max(1.3rem, 0.7rem);
  color: var(--black_text);
  margin-left: 5px;
  line-height: 25px;
}

@media (max-width: 768px){
  .header {
    display: none;
  }
}
</style>

