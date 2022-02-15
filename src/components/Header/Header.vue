<template>
  <div class="header">
    <span
      class="collapse-icon"
      @click="toggleSidebar"
      :class="{ 'rotate-180': collapsed }"
      ><i class="fas fa-bars"></i
    ></span>
    <h2 class="title">{{ titlePage }}</h2>
  </div>
</template>

<script>
import { collapsed, sidebarWidth } from "../SideBar/state";

export default {
  setup() {
    return { collapsed, sidebarWidth };
  },

  props: ["titlePage"],

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
  position: relative;
  width: calc(100% - 210px);
  height: 90px;
  margin-left: 210px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: var(--bg_white);
  box-shadow: 0 0.2rem 0.2rem rgb(156 156 156);
}

.header.activeHeader {
  width: calc(100% - 60px);
  margin-left: 60px;
  transition: 0.5s;
}

.collapse-icon {
  font-size: 26px;
  color: var(--main-color);
  padding: 0.75em;
  transition: 0.3s linear;
  cursor: pointer;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.3s linear;
}

.title {
  font-size: max(1.3rem, 1rem);
  color: var(--font-color);
  margin-left: 5px;
}
</style>

