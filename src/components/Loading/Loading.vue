<template>
  <div class="loading-content">
    <h2 class="title">SGQ</h2>
    <div class="quadrado"></div>
    <p class="version">Versão 1.4.6</p>
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
  background-color: rgba(255, 255, 255, 0.966);
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
  margin-top: 20px;
}

@keyframes title-transform {
  0% {
    opacity: 0.1;
  }
  25% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

@keyframes cubo-transform {
  0% {
    border-radius: 0 0 0 0;
    opacity: 0.1;
  }

  25% {
    border-radius: 0 100% 0 0;
    background-color: var(--card_red);
    opacity: 0.5;
  }

  50% {
    border-radius: 0 100% 100% 0;
    background-color: var(--card_green);
    opacity: 1;
  }

  75% {
    border-radius: 0 100% 100% 100%;
    background-color: var(--card_blue);
    opacity: 0.5;
  }

  100% {
    border-radius: 100% 100% 100% 100%;
    opacity: 1;
  }
}
</style>
