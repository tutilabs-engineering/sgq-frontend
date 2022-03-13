<template>
  <router-link :to="link">
    <div class="cardStatus" :style="{ color: colore, borderLeft: '7px solid' }">
      <div className="cardStatusText">
        <h3>{{ status }}</h3>
        <spam>{{ qtde }}</spam>
      </div>
      <i :class="img" class="cardImg"></i>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Card",
  props: ["status", "qtde", "img", "colore", "link"],
  data() {
    return {};
  },
};
</script>

<style scoped>

a {
  text-decoration: none;
}


.cardStatus {
  /* margin: 30px 10px 0px 10px; */
  width: 250px;
  height: 120px;
  background-color: var(--bg_white);
  border: 1px solid rgba(37, 36, 36, 0.281);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px 0px 25px;
  border-radius: 10px 5px 5px 10px;
}

.cardStatusText h3 {
  font-size: 17px;
}

.cardStatusText spam {
  font-size: 20px;
  color: var(--font-color);
  font-weight: 700;
  opacity: 0.9;
}

.cardImg {
  font-size: 30px;
}
</style>

