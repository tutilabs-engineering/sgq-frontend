<template>
<div v-for="(answeredQuestion, index) in answeredQuestions" :key="answeredQuestion.fk_specific_question">

  <div class="question" v-show="answeredQuestion.is_enabled" >
    <fieldset v-bind:class="classCard">

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
        <div v-if="answeredQuestion.status == 3">
          <i class="fa fa-exclamation-circle"></i>
        </div>
        <div v-if="answeredQuestion.status == 4">
          <i class="fa fa-check-circle fa-blue" aria-hidden="true"></i>
        </div>

        <label for="res">{{ answeredQuestion.question }}</label>
      </div>

      <div class="second-row">
        <input type="text" v-model="answeredQuestion.description" placeholder="Aguardando Resposta" disabled/>
      </div>

      <div class="third-row">
        <div class="input">
          <input type="radio" :name="idQuestion" v-model="answeredQuestion.status" value="1" id="AP" @change="changeIcon(1)" @click="isSpecificAnswerd" disabled/>
          <label for="Ap">C</label>
        </div>

        <div class="input">
          <input type="radio" :name="idQuestion" v-model="answeredQuestion.status" value="2"  id="AP"  @change="changeIcon(2)" @click="isSpecificAnswerd" disabled/>
          <label for="Ap">NC</label>
        </div>

        <div class="input">
          <input type="radio" :name="idQuestion" v-model="answeredQuestion.status" id="AP" value="3"   @change="changeIcon(3)" @click="isSpecificAnswerd" disabled/>
          <label for="Ap">NA</label>
        </div>
      </div>

      <div class="fourth-row">
        <div class="input">
          <input type="radio" :name="idQuestion" v-model="answeredQuestion.status" id="AP" value="4"   @change="changeIcon(4)" @click="isSpecificAnswerd" disabled/>
          <label for="Ap">GM</label>
        </div>
        <button class="btn btn-visualizar" @click="openImgPreview(answeredQuestion.file)" v-if="answeredQuestion.file != ''">
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
    answeredSpecficsQuestions: Object,
    idQuestion: String,
  },

  created: async function () {
 
    if(this.flag === true){
        this.classCard = "card-flag"
        return this.classCard
    }else {
        this.classCard = "card"
        return this.classCard
    }        
  },

  methods: {

    openImgPreview(imgPreview) {
      const rota = this.$store.state.urlImg
      console.log(rota);
      this.$swal.fire({
        // title: "Tudo certo!",
        // text: "A Startup foi cadastrada com Sucesso!",
        imageUrl: `${rota}/startup/questionsUploads/${imgPreview}`,
        imageWidth: "auto",
        imageHeight: "auto",
        imageAlt: "Custom image",
      });
    },

    changeIcon(e){
      this.valueQuestion = e 
    },

    isSpecificAnswerd(){
      this.specificAnswered = true
    },
     addFile(event,index){
      // eslint-disable-next-line vue/no-mutating-props
      this.answeredSpecficsQuestions[index].file = event.target.files[0]
    }
  },

  watch: {
    answeredQuestion: {
      deep:true,
      immediate:true,
      handler(newValue){
      this.$emit("returnSpecificAnswered", newValue)

      }
    }
  },

  data() {
    return {
      valueQuestion: 0,
      specificAnswered: false,
      flag: this.answeredSpecficsQuestions.attention,
      answeredQuestions: this.answeredSpecficsQuestions,
      response: {
        id: this.idQuestion,
      },
      classCard: "",
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

.card-flag {
  border: 1px solid rgba(37, 36, 36, 0.281);
  border-right: 10px solid var(--flag_yellow);
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.card {
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