<template>
  <div class="question">
    <fieldset>
      <div class="first-row">
        <i class="fa fa-check-circle" aria-hidden="true"></i>
        <label for="res">{{ description }}</label>
      </div>

      <div class="second-row">
        <input type="text" placeholder="Aguardando Resposta" />
      </div>

      <div class="third-row">
        <div class="input">
          <input type="radio" :name="idQuestion" id="AP" />
          <label for="Ap">C</label>
        </div>

        <div class="input">
          <input type="radio" :name="idQuestion" id="AP" />
          <label for="Ap">NC</label>
        </div>

        <div class="input">
          <input type="radio" :name="idQuestion" id="AP" />
          <label for="Ap">NA</label>
        </div>
      </div>

      <div class="fourth-row">
        <div class="input">
          <input type="radio" :name="idQuestion" id="AP" />
          <label for="Ap">NA</label>
        </div>
        <label for="file" class="labelFile">Enviar Arquivo</label>
        <input type="file" name="file" id="file" class="input_file" />
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    idQuestion: String,
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

.fa {
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
  font-size: 20px;
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
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  display: block;
  cursor: pointer;
}
</style>