<template>
  <Popper
    class="popper"
    :content="textContentPopper"
    hover="true"
    placement="bottom"
  >
    <router-link :to="link">
      <div
        class="cardStatus"
        :style="{ color: colore, borderLeft: '7px solid' }"
      >
        <div className="cardStatusText">
          <h3>{{ status }}</h3>
          <spam>{{ qtde }}</spam>
        </div>
        <i :class="img" class="cardImg"></i>
      </div>
    </router-link>
  </Popper>
</template>

<script>
import Popper from "vue3-popper";

export default {
  name: "Card",
  props: ["status", "qtde", "img", "colore", "link", "textContentPopper"],
  components: {
    Popper,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
:deep(.popper) {
  background: var(--card_green);
  padding: 5px;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
  height: 25px;
}

a {
  width: 100%;
  text-decoration: none;
}

.cardStatus:hover {
  background-color: rgba(255, 255, 255, 0.932);
  transform: scale(1.02);
}

.cardStatus {
  /* margin: 30px 10px 0px 10px; */
  width: 100%;
  height: 120px;
  background-color: var(--bg_white);
  border: 1px solid rgba(37, 36, 36, 0.281);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px 0px 25px;
  border-radius: 10px 5px 5px 10px;
}

.popper {
  /* width: max(7rem, 30vw); */
  width: 100%;
  margin: 0 !important;
  border: none !important;
  z-index: 0 !important;
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

@media (max-width: 1100px) {
  .popper {
    width: 100%;

  }
}

@media (max-width: 500px) {
  .cardStatus {
    width: 90vw;
  }
}
</style>

