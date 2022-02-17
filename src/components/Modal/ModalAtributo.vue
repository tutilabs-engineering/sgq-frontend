<template>
  <div v-if="myModel">
    <transition name="model">
      <form action="">
        <div class="modal_mask">
          <div class="modal_content">
            <div class="modal_header">
              <div class="title_modal">
                <h4>{{ titleModal }}</h4>
                <input
                  type="button"
                  value="X"
                  colorButton="red"
                  @click="openModal"
                />
              </div>
            </div>

            <div class="modal_body">
              <div class="inputsHeader">
                <div class="input">
                  <p>SAP:</p>
                  <input type="text" readonly />
                </div>

                <div class="input">
                  <p>PRODUTO:</p>
                  <input type="text" readonly />
                </div>

                <div class="input">
                  <p>CLIENTE:</p>
                  <input type="text" readonly />
                </div>

                <div class="input">
                  <p>DESCRIÇÃO DO CLIENTE:</p>
                  <input type="text" readonly />
                </div>
              </div>

              <div class="titleBody">
                <h3>VARIÁVEL</h3>
              </div>

              <div class="inputsHeader" v-for="index in count" :key="index">
                <h4>{{ index }}</h4>
                <div class="inputIdentificacao">
                  <p>IDENTIFICAÇÃO:</p>
                  <input type="text" />
                </div>

                <div class="inputCota">
                  <p>COTA:</p>
                  <input type="text" />
                </div>

                <div class="inputCota">
                  <p>MÁX:</p>
                  <input type="text" />
                </div>

                <div class="inputCota">
                  <p>MIN:</p>
                  <input type="text" />
                </div>

                <div class="inputUpLoad">
                  <label for="inputImage"><i class="fas fa-upload"></i></label>
                  <input ref="file" type="file" id="inputImage" />
                </div>
              </div>

              <div class="attributeVariable">
                <div class="inputIdentificacao">
                  <p>IDENTIFICAÇÃO:</p>
                  <input type="text" />
                </div>

                <div class="inputCota">
                  <p>COTA:</p>
                  <input type="text" />
                </div>

                <div class="inputCota">
                  <p>MÁX:</p>
                  <input type="text" />
                </div>

                <div class="inputCota">
                  <p>MIN:</p>
                  <input type="text" />
                </div>

                <div class="inputUpLoad">
                  <label @click="incrementVariable"
                    ><i class="fas fa-plus"></i
                  ></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </transition>
  </div>

  <!-- <div v-if="myModel">
    <transition name="model">
      <form action="">
        <div class="modal_mask">
          <div class="modal_content">
            <div class="modal_header">
              <div class="title_modal">
                <h4>{{ titleModal }}</h4>
                <input
                  type="button"
                  value="X"
                  colorButton="red"
                  @click="openModal"
                />
              </div>
            </div>

            <div class="modal_body">
              <div class="column_1">
                <slot> </slot>
              </div>
              <div class="column_2">
                <div class="card_informations">texto</div>
                <div class="card_end">testo</div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </transition>
  </div> -->
  <button class="btnVa" @click="openModal">AT</button>
  <button class="btnAt" @click="openModal">VA</button>
</template>

<script>
export default {
  components: {},
  name: "Modal",
  data() {
    return {
      myModel: false,
      actionButton: "Insert",
      dynamicTitle: "Add Data",
      comments: "",
      count: 0,
    };
  },
  props: {
    titleModal: String,
    id: Number,
  },
  methods: {
    openModal() {
      this.myModel = !this.myModel;
    },

    getComments(value) {
      this.comments = value;
    },
    incrementVariable() {
      if (this.count < 10) {
        this.count++;
        let display = document.querySelector(".card_enable");
        display.classList.add("mostrarCard");
        let remove = document.querySelector(".icon_remove");
        remove.classList.add("enable_remove");
      }
    },
  },
};
</script>

<style scoped>
#inputImage {
  display: none;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(182, 181, 181);
}

::-webkit-scrollbar-thumb {
  background: var(--bg_green);
  border-radius: 15px;
}

.modal_mask {
  position: fixed;
  display: table;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(90, 90, 90, 0.911);
}

.modal_mask .modal_content {
  position: relative;
  width: 80%;
  height: 90%;
  margin: 30px auto;
  background: var(--bg_white);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.modal_mask .modal_content .modal_header {
  width: 100%;
  height: 3.5rem;
  line-height: 3.5rem;
  background: var(--bg_green);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

.modal_mask .modal_content .modal_header .title_modal {
  width: 90%;
  margin: auto;
  color: var(--main_primaryWhite);
  font-size: 1.5rem;
  display: flex;
  text-align: start;
  align-items: center;
  justify-content: space-between;
}

.modal_mask .modal_body {
  width: 98%;
  height: 90%;
  margin: auto;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 15px;
}

.modal_mask .modal_body .inputsHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 20px;
}

.modal_mask .modal_body .inputsHeader h4 {
  margin-top: 20px;
  font-size: 1.5rem;
}

.modal_mask .modal_body .inputsHeader .input {
  width: 24%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .inputsHeader .input input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .inputsHeader .inputIdentificacao {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .inputsHeader .inputIdentificacao input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .inputsHeader .inputCota {
  width: 10%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .inputsHeader .inputCota input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .inputsHeader .inputUpLoad {
  width: 10%;
  height: 40px;
  background: var(--card_blue);
  border-radius: 20px;
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal_mask .modal_body .inputsHeader .inputUpLoad .fa-upload {
  color: var(--main_primaryWhite);
  font-size: 1.4rem;
  cursor: pointer;
}

.modal_mask .modal_body .attributeVariable {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  margin-top: 20px;
  flex-wrap: wrap;
  border-top: 2px solid black;
  padding-top: 20px;
}

.modal_mask .modal_body .attributeVariable .inputIdentificacao {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .attributeVariable .inputIdentificacao input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .attributeVariable .inputCota {
  width: 10%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .attributeVariable .inputCota input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .attributeVariable .inputUpLoad {
  width: 10%;
  height: 40px;
  background: var(--card_green);
  border-radius: 20px;
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal_mask .modal_body .attributeVariable .inputUpLoad .fa-plus {
  color: var(--main_primaryWhite);
  font-size: 1.4rem;
  cursor: pointer;
}

.modal_mask .modal_body .titleBody {
  margin: 1rem 0;
  text-align: start;
}

.btnAt {
  width: 50%;
  background: var(--card_orange);
  border: none;
  border-radius: 10px;
  padding: 0.2rem 0rem;
  color: var(--main_primaryWhite);
  text-align: center;
  cursor: pointer;
}

.btnVa {
  width: 50%;
  background: var(--card_blue);
  border: none;
  border-radius: 10px;
  padding: 0.2rem 0rem;
  color: var(--main_primaryWhite);
  text-align: center;
  cursor: pointer;
}
.card_end {
  justify-content: flex-end;
  display: flex;
}

.title_modal input {
  width: 2vw;
  height: 2vw;
  border-radius: 8px;
  background: red;
  color: white;
  border: none;
  font-size: 0.8vw;
}
.title_modal input:hover {
  width: 2vw;
  height: 2vw;
  border-radius: 8px;
  background: rgb(158, 3, 3);
  color: white;
  border: none;
  font-size: 0.8vw;
}

.column_1 {
  overflow-y: scroll;
}

.column_2 {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.modal_mask .modal_body .cards {
  width: 100%;
  grid-column: 1/4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  text-align: start;
}

.modal_mask .modal_body .cards .card_informations {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--white);
  padding: 20px;
  border-radius: 10px;
}

.modal_mask .modal_body .cards .card_informations .title {
  width: 100%;
  color: var(--green);
}

.modal_mask .modal_body .button_modal {
  width: 100%;
  position: relative;
  grid-column: 1/4;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: flex-end;
  padding: 25px;
  justify-items: end;
  display: flex;
}

@media (max-width: 770px) {
  .title_modal input {
    width: 25px;
    height: 25px;
    font-size: 10px;
  }

  .modal_mask .modal_body .titleBody {
    text-align: center;
  }

  .modal_mask .modal_body .inputsHeader {
    justify-content: center;
  }

  .modal_mask .modal_body .inputsHeader .input {
    width: 100%;
  }

  .modal_mask .modal_body .inputsHeader .inputIdentificacao {
    width: 100%;
  }

  .modal_mask .modal_body .inputsHeader .inputCota {
    width: 100%;
  }

  .modal_mask .modal_body .inputsHeader .inputUpLoad {
    width: 100%;
  }

  .modal_mask .modal_body .attributeVariable {
    padding: 2rem 0;
  }

  .modal_mask .modal_body .attributeVariable .inputIdentificacao {
    width: 100%;
  }

  .modal_mask .modal_body .attributeVariable .inputCota {
    width: 100%;
  }

  .modal_mask .modal_body .attributeVariable .inputUpLoad {
    width: 100%;
  }
}
/* 
@media (max-width: 1240px) {
  .modal_mask .modal_body .cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 1100px) {
  .modal_mask .modal_body .button_modal {
    grid-template-columns: 3fr 1fr;
  }
}

@media (max-width: 907px) {
  .modal_mask .modal_body .cards {
    grid-template-columns: 1fr;
  }

  .modal_mask .modal_body .button_modal {
    grid-template-columns: 2fr 1fr;
  }
}

@media (max-width: 780px) {
  .modal_mask .modal_body .title {
    text-align: center;
  }
  .modal_mask .modal_body .button_modal {
    grid-template-columns: 1fr;
    padding: 15px 0;
    grid-gap: 10px;
    display: flex;
    flex-direction: column;
  }
} */
</style>
