<template>

    <div class="loader-wrapper">
      <span class="loader"><span class="loader-inner"></span></span>
      <h3>Aguarde, Carregando...</h3>
  </div>
</template>

<script>
export default {

  
};
</script>

<style scoped>
.loader-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
}

.loader {
  display: inline-block;
  width: 35px;
  height: 35px;
  position: relative;
  border: 3px solid black;
  top: 50%;
  animation: loader 2s infinite ease;
}
.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: rgba(5, 153, 5, 0.644);
  animation: loader-inner 3s infinite ease-in;
}
.loader-wrapper h3 {
  position: absolute;
  bottom: 40%;
  left: -5rem;
}
@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg)
  }
  
  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
@keyframes loader-inner {
  0% {
    heigth: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}
</style>



