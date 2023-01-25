<template>
  <div
    v-for="(defaultQuestion, index) in defaultQuestions"
    :key="defaultQuestion.fk_default_question"
  >
    <div class="question">
      <fieldset>
        <div class="first-row">
          <div v-if="defaultQuestion.status == 0">
            <i class="far fa-circle" aria-hidden="true"></i>
          </div>

          <div v-if="defaultQuestion.status == 1">
            <i class="fa fa-check-circle" aria-hidden="true"></i>
          </div>
          <div v-if="defaultQuestion.status == 2">
            <i class="fa fa-times-circle"></i>
          </div>
          <div v-if="defaultQuestion.status == 3">
            <i class="fa fa-exclamation-circle"></i>
          </div>
          <div v-if="defaultQuestion.status == 4">
            <i class="fa fa-check-circle fa-blue" aria-hidden="true"></i>
          </div>

          <label for="res">{{ defaultQuestion.title }}</label>
        </div>

        <div class="second-row">
          <input
            type="text"
            v-model="defaultQuestion.description"
            placeholder="Aguardando Resposta"
          />
        </div>

        <div class="third-row">
          <div class="input">
            <input
              type="radio"
              v-model="defaultQuestion.status"
              :name="idQuestion"
              id="AP"
              value="1"
              @change="changeIcon(1)"
              @click="isAnswerd"
            />
            <label for="Ap">C</label>
          </div>

          <div class="input">
            <input
              type="radio"
              v-model="defaultQuestion.status"
              :name="idQuestion"
              id="AP"
              value="2"
              @change="changeIcon(2)"
              @click="isAnswerd"
            />
            <label for="Ap">NC</label>
          </div>

          <div class="input">
            <input
              type="radio"
              v-model="defaultQuestion.status"
              :name="idQuestion"
              id="AP"
              value="4"
              @change="changeIcon(4)"
              @click="isAnswerd"
            />
            <label for="Ap">NA</label>
          </div>
        </div>

        <div class="fourth-row">
          <div class="input">
            <input
              type="radio"
              v-model="defaultQuestion.status"
              :name="idQuestion"
              id="AP"
              value="3"
              @change="changeIcon(3)"
              @click="isAnswerd"
            />
            <label for="Ap">GM</label>
          </div>

          <div v-if="!defaultQuestion.file" class="labelFile">
            <label :for="defaultQuestion.fk_default_question" 
              >Enviar Arquivo</label
            >

            <input
              type="file"
              :name="defaultQuestion.fk_default_question"
              :id="defaultQuestion.fk_default_question"
              class="input_file"
              @change="addFile($event, index)"
            />
          </div>

          <div v-else>
            <button class="btn btn-visualizar"  @click="openImgPreview(defaultQuestion.preview)">Visualizar</button>
            <button class="btn btn-remover" @click="removeFile(defaultQuestion.fk_default_question)">Remover</button>
          </div>

        </div>
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    defaultQuestions: Array,
    idQuestion: String,
  },

  methods: {
    openImgPreview(imgPreview) {

      
      this.$swal
        .fire({
          // title: "Tudo certo!",
          // text: "A Startup foi cadastrada com Sucesso!",
          imageUrl: imgPreview,
          imageWidth: 'auto',
          imageHeight: 'auto',
          imageAlt: "Custom image",
        })
 
    },

    removeFile(id) {
      // eslint-disable-next-line vue/no-mutating-props
      const index = this.defaultQuestions.findIndex((element) => element.fk_default_question === id);
      // eslint-disable-next-line vue/no-mutating-props
      this.defaultQuestions[index].file = undefined;
      // eslint-disable-next-line vue/no-mutating-props
      this.defaultQuestions[index].preview = undefined;

    },

    changeIcon(e) {
      this.valueQuestion = e;
    },

    isAnswerd() {
      this.answered = true;
    },
    addFile(event, index) {
         // Referência ao elemento de entrada DOM
      var input = event.target;
      // Certifique-se de que possui um arquivo antes de tentar lê-lo
      if (input.files && input.files[0]) {
      // eslint-disable-next-line vue/no-mutating-props
      this.defaultQuestions[index].file = input.files[0];
        // create a new FileReader to read this image and convert to base64 format
        var reader = new FileReader();
        // crie um novo FileReader para ler esta imagem e converter para o formato base64
        reader.onload = (e) => {
          // Note: função de seta usada aqui, de modo que "this.imageData" se refira ao componente imageData do Vue
          // Leia a imagem como base64 e defina como imageData
           // eslint-disable-next-line vue/no-mutating-props
           this.defaultQuestions[index].preview = e.target.result;
        };
        // Inicie o trabalho do leitor - leia o arquivo como url de dados (formato base64)
        reader.readAsDataURL(input.files[0]);
        //Acionar $Emit para enviar o objeto quando um File for adicionado
      }
    },
  },

  watch: {
    defaultQuestions: {
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

      isFile: false,
    };
  },
};
</script>

<style scoped>

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

.btn {
  cursor: pointer;
  border: none;
  margin: 3px;
  border-radius: 5px;
  width: 100px; 
  color: #fff;
}

.btn-visualizar {
  background-color: var(--card_blue);
}

.btn-remover {
  background-color: var(--card_red);
}

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: var(--bg_white);
  color: var(--black_text);
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
  border-radius: 5px;
  color: #fff;
  text-align: center;
  display: block;
}

.labelFile label {
  cursor: pointer;
  background-color: var(--card_green);
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