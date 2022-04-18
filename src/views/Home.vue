<template>
  <div class="home">
    <div class="iconIdentification">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <div class="machine">
      <label for="">Máquina</label>
      <input type="text" v-model="dataMachine" />
    </div>
    <div class="stopwatch">
      <label for="">Cronômetro</label>
      <i class="fas fa-stopwatch"></i>
      <input type="text" readonly v-model="dataStopwatch" @click="barProgess" />
    </div>
    <div class="statusProgress">
      <label for="">Status de progresso (máx. 45min)</label>
      <div class="barProgress">
        <input
          :style="[
            this.dataStopwatch === 45
              ? [estilo, `width: 100%`]
              : [estilo, `width: ${this.dataStopwatch * 2.2}%`],
          ]"
          type="text"
          readonly
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      dataStopwatch: 45,
      estilo: {
        background: "blue",
        outline: "none",
        border: "none",
        borderRadius: "7px",
      },
    };
  },
  methods: {
    barProgess() {
      if (this.dataStopwatch === 45) {
        return alert(this.dataStopwatch);
      }
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 4fr;
  gap: 1rem;
}

.home .iconIdentification {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
}

.home .iconIdentification .top {
  width: 5vw;
  height: 6vh;
  background: var(--card_green);
}

.home .iconIdentification .bottom {
  width: 5vw;
  height: 2vh;
  background: var(--card_green);
}

.home .machine,
.stopwatch,
.statusProgress {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.home .stopwatch .fas {
  position: absolute;
  margin-top: 32px;
  margin-left: 10px;
}

.home .machine input {
  border: 1px solid var(--btn_gray);
  border-radius: 0.5rem;
  padding: 0.3rem 1rem;
  outline: none;
}
.home .stopwatch input {
  border: 1px solid var(--btn_gray);
  border-radius: 0.5rem;
  padding: 0.3rem 1rem;
  outline: none;
  padding-left: 2rem;
}

.home .statusProgress .barProgress {
  border: 1px solid var(--btn_gray);
  width: 100%;
  display: flex;
  background: var(--bg_white);
  border-radius: 0.5rem;
  padding: 0.3rem;
}

@media (max-width: 425px) {
  .home {
    display: flex;
    flex-direction: column;
  }

  .home .iconIdentification .top {
    width: 20vw;
  }

  .home .iconIdentification .bottom {
    width: 20vw;
  }
}
</style>
