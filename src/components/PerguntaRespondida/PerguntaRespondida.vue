<template>
  <div
    v-for="(answeredQuestion, index) in answeredQuestions"
    :key="answeredQuestion.fk_default_question"
  >
    <div class="question">
      <fieldset>
        <div class="first-row">
          <div v-if="answeredQuestion.status == 0">
            <i class="far fa-circle" aria-hidden="true"></i>
          </div>

          <div v-if="answeredQuestion.status == 1">
            <i class="fa fa-check-circle" aria-hidden="true"></i>
          </div>
          <div v-if="answeredQuestion.status == 2">
            <i class="fa fa-times-circle"></i>
          </div>
          <div v-if="answeredQuestion.status == 4">
            <i class="fa fa-check-circle fa-blue" aria-hidden="true"></i>
          </div>
          <div v-if="answeredQuestion.status == 3">
            <i class="fa fa-exclamation-circle"></i>
          </div>

          <label for="res">{{ answeredQuestion.title }}</label>
        </div>

        <div class="second-row">
          <input
            type="text"
            v-model="answeredQuestion.description"
            placeholder="Aguardando Resposta"
            disabled
          />
        </div>

        <div class="third-row">
          <div class="input">
            <input
              type="radio"
              v-model="answeredQuestion.status"
              :name="idQuestion"
              id="AP"
              value="1"
              @change="changeIcon(1)"
              @click="isAnswerd"
              disabled
            />
            <label for="Ap">C</label>
          </div>

          <div class="input">
            <input
              type="radio"
              v-model="answeredQuestion.status"
              :name="idQuestion"
              id="AP"
              value="2"
              @change="changeIcon(2)"
              @click="isAnswerd"
              disabled
            />
            <label for="Ap">NC</label>
          </div>

          <div class="input">
            <input
              type="radio"
              v-model="answeredQuestion.status"
              :name="idQuestion"
              id="AP"
              value="4"
              @change="changeIcon(4)"
              @click="isAnswerd"
              disabled
            />
            <label for="Ap">NA</label>
          </div>
        </div>

        <div class="fourth-row">
          <div class="input">
            <input
              type="radio"
              v-model="answeredQuestion.status"
              :name="idQuestion"
              id="AP"
              value="3"
              @change="changeIcon(3)"
              @click="isAnswerd"
              disabled
            />
            <label for="Ap">GM</label>
          </div>

          <button
            class="btn btn-visualizar"
            @click="openImgPreview(answeredQuestion.file)"
            v-if="answeredQuestion.file != ''"
          >
            Visualizar
          </button>
        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    answeredQuestions: Array,
    idQuestion: String,
  },

  methods: {
    openImgPreview(imgPreview) {
      const rota = this.$store.state.urlImg;
      this.$swal.fire({
        // title: "Tudo certo!",
        // text: "A Startup foi cadastrada com Sucesso!",
        imageUrl: `${rota}/startup/questionsUploads/${imgPreview}`,
        imageWidth: "auto",
        imageHeight: "auto",
        imageAlt: "Custom image",
      });
    },
    changeIcon(e) {
      this.valueQuestion = e;
    },

    isAnswerd() {
      this.answered = true;
    },
    addFile(event, index) {
      // eslint-disable-next-line vue/no-mutating-props
      this.answeredQuestions[index].file = event.target.files[0];
    },
  },

  watch: {
    answeredQuestions: {
      deep: true,
      immediate: true,
      handler(newvalue) {
        this.$emit("returnAnswered", newvalue);
      },
    },
  },

  data() {
    return {
      valueQuestion: 0,
      answered: false,
      response: {
        id: this.idQuestion,
      },
    };
  },
};
</script>

<style>
.question {
  background-color: var(--card-color);
  width: auto;
  height: auto;
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

.fa,
.far {
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
  max-height: 20rem;
  width: 100%;
}

.second-row {
  width: 100%;
  margin: 10px 0px;
}

.btn {
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.btn-visualizar {
  background-color: var(--card_green);
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
  color: var(--card_blue);
}

.fa-circle {
  color: var(--black_text);
}
</style>