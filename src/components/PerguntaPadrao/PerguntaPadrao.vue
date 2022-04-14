<template>
<div v-for="(defaultQuestion,index) in defaultQuestions"  :key="defaultQuestion.fk_default_question">
  <div class="question"  >
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
        <input type="text" v-model="defaultQuestion.description" placeholder="Aguardando Resposta" />
      </div>

      <div class="third-row">
        <div class="input">
          <input type="radio" v-model="defaultQuestion.status" :name="idQuestion" id="AP" value="1" @change="changeIcon(1)" @click="isAnswerd"/>
          <label for="Ap">C</label>
        </div>

        <div class="input">
          <input type="radio" v-model="defaultQuestion.status" :name="idQuestion" id="AP"  value="2" @change="changeIcon(2)" @click="isAnswerd"/>
          <label for="Ap">NC</label>
        </div>

        <div class="input">
          <input type="radio" v-model="defaultQuestion.status" :name="idQuestion" id="AP"  value="3" @change="changeIcon(3)" @click="isAnswerd"/>
          <label for="Ap">NA</label>
        </div>
      </div>

      <div class="fourth-row">
        <div class="input">
          <input type="radio" v-model="defaultQuestion.status" :name="idQuestion" id="AP"  value="4" @change="changeIcon(4)" @click="isAnswerd"/>
          <label for="Ap">GM</label>
        </div>
        <label :for="defaultQuestion.fk_default_question" class="labelFile">Enviar Arquivo</label>
     
  
        <input type="file" :name="defaultQuestion.fk_default_question" :id="defaultQuestion.fk_default_question" class="input_file" @change="addFile($event,index)" />
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
    changeIcon(e){
      this.valueQuestion = e
    },

    isAnswerd(){
      this.answered = true
      
    },
     addFile(event,index){
      // eslint-disable-next-line vue/no-mutating-props
      this.defaultQuestions[index].file = event.target.files[0] 
   
    }
  },

  watch: {
    defaultQuestions : {
      deep:true,
      immediate:true,
      handler(newvalue){
         this.$emit("returnAnswered", newvalue)
      
      }
    }
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