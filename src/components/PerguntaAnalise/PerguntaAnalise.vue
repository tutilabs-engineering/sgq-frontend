<template>
<div v-for="(specificQuestion, index) in specificQuestionsFormat" :key="specificQuestion.fk_specific_question">

  <div class="question" v-show="specificQuestion.is_enabled" >
    <fieldset v-bind:class="classCard">

      <div class="first-row">

        <div v-if="specificQuestion.status == 0">
          <i class="far fa-circle" aria-hidden="true"></i>
        </div>

        <div v-if="specificQuestion.status == 1">
          <i class="fa fa-check-circle" aria-hidden="true"></i>
        </div>
        <div v-if="specificQuestion.status == 2">
          <i class="fa fa-times-circle"></i>
        </div>
        <div v-if="specificQuestion.status == 3">
          <i class="fa fa-exclamation-circle"></i>
        </div>
        <div v-if="specificQuestion.status == 4">
          <i class="fa fa-check-circle fa-blue" aria-hidden="true"></i>
        </div>

        <label for="res">{{ specificQuestion.question }}</label>
      </div>

      <div class="second-row">
        <input type="text" v-model="specificQuestion.description" placeholder="Aguardando Resposta" />
      </div>

      <div class="third-row">
        <div class="input">
          <input type="radio" :name="specificQuestion.status" v-model="specificQuestion.status" :value="1" id="AP" @change="changeIcon(1)" @click="isSpecificAnswerd"/>
          <label for="Ap">C</label>
        </div>

        <div class="input">
          <input type="radio" :name="specificQuestion.status" v-model="specificQuestion.status" :value="2"  id="AP"  @change="changeIcon(2)" @click="isSpecificAnswerd"/>
          <label for="Ap">NC</label>
        </div>

        <div class="input">
          <input type="radio" :name="specificQuestion.status" v-model="specificQuestion.status" id="AP" :value="3"   @change="changeIcon(3)" @click="isSpecificAnswerd"/>
          <label for="Ap">NA</label>
        </div>
      </div>

      <div class="fourth-row">
        <div class="input">
          <input type="radio" :name="specificQuestion.status" v-model="specificQuestion.status" id="AP" :value="4"   @change="changeIcon(4)" @click="isSpecificAnswerd"/>
          <label for="Ap">GM</label>
        </div>
        <label :for="specificQuestion.fk_specific_question" class="labelFile">Enviar Arquivo</label>
        <input type="file" :name="specificQuestion.fk_specific_question" :id="specificQuestion.fk_specific_question" class="input_file"  @change="addFile($event,index)" />
      </div>

    </fieldset>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    idQuestion: String,
    flag: String,
    specificQuestions: Array,
 

  },

  created: async function () {
     
    this.specificQuestionsFormat = await this.specificQuestions.map((item) => {
      return { 
      attention: item.attention,
      is_enabled: item.is_enabled, 
      question: item.question,
      fk_specific_question: item.id,
      description:'',
      status:0,
      file: ""
      }
    })

    if(this.flag === true){
        this.classCard = "card-flag"
        return this.classCard
    }else {
        this.classCard = "card"
        return this.classCard
    }        
  },

  methods: {
    changeIcon(e){
      this.valueQuestion = e 
    },

    isSpecificAnswerd(){
      this.specificAnswered = true
    },
     addFile(event,index){
      // eslint-disable-next-line vue/no-mutating-props
      this.specificQuestionsFormat[index].file = event.target.files[0]
    }
  },

  watch: {
    specificQuestionsFormat: {
      deep:true,
      immediate:true,
      handler(newValue){
      //  console.log(newValue);
      this.$emit("returnSpecificAnswered", newValue)

      }
    }
  },

  data() {
    return {
      valueQuestion: 0,
      specificAnswered: false,
      specificQuestionsFormat: [],
      responsee: {
        id: this.idQuestion,

      },
      classCard: "",
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
  color: var(--card_blue);
}

.fa-circle {
  color: var(--black_text);
}
</style>