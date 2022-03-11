<template>
  <div class="question">
    <fieldset>
      <div class="first-row">

        <div v-if="valueQuestion == 0">
          <i class="far fa-circle" aria-hidden="true"></i>
        </div>

        <div v-if="valueQuestion == 1">
          <i class="fa fa-check-circle" aria-hidden="true"></i>
        </div>
        <div v-if="valueQuestion == 2">
          <i class="fa fa-times-circle"></i>
        </div>
        <div v-if="valueQuestion == 3">
          <i class="fa fa-exclamation-circle"></i>
        </div>
        <div v-if="valueQuestion == 4">
          <i class="fa fa-check-circle fa-blue" aria-hidden="true"></i>
        </div>

        <label for="res">{{ description }}</label>
      </div>

      <div class="second-row">
        <input type="text" placeholder="Aguardando Resposta" />
      </div>

      <!-- <form @submit.prevent="getResponse"> -->
      <div class="third-row">
        <div class="input">
          <input type="radio" :name="idQuestion" id="AP" @change="changeIcon(1)"/>
          <label for="Ap">C</label>
        </div>

        <div class="input">
          <input type="radio" :name="idQuestion" id="AP"  @change="changeIcon(2)"/>
          <label for="Ap">NC</label>
        </div>

        <div class="input">
          <input type="radio" :name="idQuestion" id="AP"  @change="changeIcon(3)"/>
          <label for="Ap">NA</label>
        </div>
      </div>

      <div class="fourth-row">
        <div class="input">
          <input type="radio" :name="idQuestion" id="AP"  @change="changeIcon(4)"/>
          <label for="Ap">GM</label>
        </div>
        <label for="file" class="labelFile">Enviar Arquivo</label>
        <input type="file" name="file" id="file" class="input_file" />
      </div>

      <!-- </form> -->
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    idQuestion: String,
  },

  methods: {
    changeIcon(e){
      this.valueQuestion = e
      console.log(this.valueQuestion)
    }
  },

  data() {
    return {
      valueQuestion: 0,
      responsee: {
        id: this.idQuestion,

      }
    };
  },
};
</script>

<style>
.question {
  background-color: var(--card-color);
  width: auto;
  height: 200px;
  border-right: 7px solid var(--button-color-01);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.fa, .far {
  margin-right: 10px;
  font-size: 30px;
  color: var(--card_green);
}

.first-row {
  width: 100%;
  display: flex;
  align-items: center;
}

.first-row label {
  font-size: 16px;
  font-weight: 600;
  color: var(--black_text);
  max-height: 50px;
  width: 100%;
}

.second-row {
  width: 100%;
  margin: 10px 0px;
}

.second-row input {
  width: 100%;
  border: none;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.226);
  padding: 0 10px 0 10px;
  outline: none;
}

.third-row {
  display: flex;
  justify-content: space-between;
}

input[type="file"] {
  display: none;
}

input[type="radio"] {
  margin-right: 10px;
}

.fourth-row {
  margin: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.labelFile {
  font-size: 13px;
  width: 40%;
  background-color: var(--card_green);
  border-radius: 5px;
  color: #fff;
  text-align: center;
  display: block;
  cursor: pointer;
}


.fa-times-circle {
  color: var(--card_red);
}

.fa-exclamation-circle {
  color: var(--card_orange);
}

.fa-blue {
  color: var(--flag_yellow);
}

.fa-circle {
  color: var(--black_text);
}
</style>