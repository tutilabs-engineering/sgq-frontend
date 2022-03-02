<template>
  <div class="errorBackground"></div>
</template>

<script>
export default {
  mounted() {
    this.$swal
      .fire({
        title: "Opss",
        text: "A página que está procurando não existe!",
        imageUrl: "/img/cao_404.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      })
      .then(() => {
        this.$router.push({ name: "Startup" });
      });
  },
};
</script>

<style scoped>
.errorBackground {
  background-color: rgb(255, 255, 255);
  width: 100vw;
  height: 110vh;
  padding-top: 0px;
  margin-left: -210px;
  margin-top: -100px;
  z-index: 1000;
  position: absolute;
}
</style>