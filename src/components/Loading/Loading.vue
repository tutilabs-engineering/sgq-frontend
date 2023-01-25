<template>
  <div class="loading-content">
    <h2 class="title">SGQ</h2>
    
    <span class="loader"></span>
    <h3 class="name-module">STARTUP DIGITAL</h3>
    
    <p class="version">Versão 1.7.3</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayLoading: this.isLoading,
    };
  },
  props: ["isLoading"],

  methods: {
    mostrarLoading() {
      if (this.isLoading === false) {
        this.displayLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.loading-content {
  width: 100vw;
  height: 100vh;
  background-color: var(--bg_white);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10000;
}

.quadrado {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  animation: cubo-transform 2s infinite;
}

.title {
  color: var(--black_text);
  font-size: 70px;
  animation: title-transform 1s;
}

.displayLoading {
  display: none;
}

.version {
  color: var(--black_text);
}.loader {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  overflow: hidden;
}

.name-module {
  color: var(--black_text);
}
.loader::after {
  content: '';  
  width: 96px;
  height: 4.8px;
  background: var(--green_text);
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  animation: hitZak 1s ease-in-out infinite alternate;
}

@keyframes hitZak {
  0% {
    left: 0;
    background: var(--card_blue);
    transform: translateX(-1%);
  }

  50% {
    left: 50%;
    background: var(--green_text);
    transform: translateX(-55%);
  }
  100% {
    left: 100%;
    background: var(--card_red);
    transform: translateX(-99%);
  }
}
    
</style>
