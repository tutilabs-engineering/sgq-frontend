<template>
  <!-- <div class="cardSettings">
    <router-link :to="link">
      <div class="cardConfiguracao">
        <i :class="icon"></i>
        <h2>{{ title }}</h2>
      </div>
    </router-link>
  </div> -->


  <router-link :to="link">
    <fieldset class="cardSettings">
      <legend>
        {{title}}
      </legend>
          <i :class="icon"></i>
    </fieldset>
    
  </router-link>

</template>

<script>
export default {
  name: "CardConfiguracao",
  props: ["title", "icon", "link"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.cardSettings {
  width: 35%;
}


.cardSettings {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid rgba(37, 36, 36, 0.281);
  background-color: #fff;
}

.cardConfiguracao:hover {
  border: 3px solid rgba(37, 36, 36, 0.281);
}

.fas {
  font-size: 120px;
}

a {
  
  height: 300px;
  color: var(--card_green);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  text-align: center;
  
}

legend {
  color: var(--black_text);
  font-size: 25px;
  font-weight: 600;
}


@media (max-width: 425px) {
  .cardSettings {
    width: 80%;
  }
  /* a {
    padding: 0;
    margin-bottom: 30px;
    width: 100%;
  } */
}
</style>
