<template>
 
  <router-link :to="link" v-if="type=='local'" class="card">
    <div class="cardSettings">
      <h3>
        {{title}}
      </h3>
          <i :class="icon"></i>
    </div>
    
  </router-link>


  <a :href="link" target="_blank" v-else class="card">
    <div class="cardSettings">
      <h3>
        {{title}}
      </h3>
          <i :class="icon"></i>
    </div>
    
  </a>


  

</template>

<script>
export default {
  name: "CardConfiguracao",
  props: ["title", "icon", "link", "type"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.cardSettings {
  width: 35%;
}

.card {
  width: 50%;
  display: flex;
  justify-content: center;
  border: 1px solid rgba(37, 36, 36, 0.281);
  background-color: #fff;
  
}


.cardSettings {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 50px 0 50px;
  justify-content: space-between;
  align-items: center;
  border: none;
  background-color: transparent;
  
}

.cardConfiguracao:hover {
  border: 3px solid rgba(37, 36, 36, 0.281);
}

.fas {
  font-size: 80px;
}

a {
  height: 200px;
  color: var(--card_green);
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  text-align: center;
  transition: 0.5s;
  border-radius: 10px;
}
a:hover {
  transform: translateX(4%);
}

h3 {
  color: var(--black_text);
  font-size: 25px;
  font-weight: 600;
}

@media (max-width: 1000px){
  .card {
    width: 90%;
  }
}


@media (max-width: 700px) {

  .card {
    width: 90%;
  }
  .cardSettings {
    width: 90%;
    flex-direction: column-reverse;
    justify-content: space-around;
  }

  a {
    width: 100%;
    height: 150px;
  }

  .fas {
    font-size: 50px;
  }

  h1 {
    font-size: 20px;
  }
  /* a {
    padding: 0;
    margin-bottom: 30px;
    width: 100%;
  } */
}
</style>
