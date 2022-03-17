<template>
  <div>
    <transition name="model">
      <form action="">
        <div class="modal_mask">
          <div class="modal_content">
            <div class="modal_header">
              <div class="title_modal">
                <h4>Atributo</h4>
                <input
                  type="button"
                  value="X"
                  colorButton="red"
                  @click="$emit('changeStatus')"
                />
              </div>
            </div>

            <div class="modal_body">
              <div class="inputsHeader">
                <div class="input">
                  <p>Cód. Produto</p>
                  <input
                    type="text"
                    readonly
                    :value="dataProduct.codigo_produto"
                  />
                </div>

                <div class="input">
                  <p>Produto</p>
                  <input type="text" readonly :value="dataProduct.descricao" />
                </div>

                <div class="input">
                  <p>Cód. Cliente</p>
                  <input type="text" readonly value="xxxxxx-xxx" />
                </div>

                <div class="input">
                  <p>Descrição Cliente</p>
                  <input type="text" readonly :value="dataProduct.cliente" />
                </div>
              </div>

              <div class="perguntas">
                <div class="headerPerguntas">
                  <div class="titleHeader">Pergunta</div>
                  <div class="titleHeader">Atenção</div>
                  <div class="titleHeader">Status</div>
                </div>

                <div class="headerPergunta">
                  <div
                    v-show="index !== 0"
                    v-for="(todo, index) in todos"
                    v-bind:key="todo.id"
                    v-on:remove="todos.splice(index, 1)"
                    class="testeLi"
                    :id="index"
                  >
                    <div class="titleHeader">
                      {{ todo.title }}
                    </div>

                    <div class="titleHeader">
                      <input
                        @click="trocaStatus"
                        type="radio"
                        :name="index"
                        id=""
                      />
                    </div>
                    <div class="titleHeader">
                      <button
                        :id="index"
                        class="btnHabilitar"
                        :class="{ btnDesabilitar: btnDesabilitado }"
                      >
                        {{ textBtn }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="incrementAtributo">
                <form action="" @submit.prevent="CreateNewQuestion">
                  <h3>ADICIONAR PERGUNTA:</h3>
                  <div class="inputAdd">
                    <input type="text" v-model="dataAttribute.question"/>
                    <button class="btnHabilitar">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </form>
    </transition>
  </div>

  <button class="btnAt" @click="$emit('changeStatus')">AT</button>
</template>

<script>

import http from "../../services/productAnalysis/Attributes"

export default {
  components: {},
  name: "Modal",
  emits: ["changeStatus"],
  data() {
    return {
      actionButton: "Insert",
      dynamicTitle: "Add Data",
      comments: "",
      count: 0,
      todos: [{}],
      nextTodoId: 0,
      textBtn: "Habilitar",
      btnDesabilitado: false,
      dataAttribute: {
        cod_sap: "(Remover isso do back-end)",
        cod_product: this.dataProduct.codigo_produto,
        attention: true,
        question: "",
        is_enabled: true
      }
    };
  },
  props: {
    dataProduct: Object,
  },
  methods: {
    getComments(value) {
      this.comments = value;
    },

    CreateNewQuestion: async function() {
      const newQuestion = await http.CreateAttribute(this.dataAttribute);
      console.log(newQuestion)
    },

    trocaStatus() {
      this.textBtn = "Desabilitado";
      this.btnDesabilitado = true;
    },
  },
};
</script>

<style scoped>
/* -------- Style Modal -------- */
.modal_mask {
  position: fixed;
  display: table;
  z-index: 1000;
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
  border-radius: 10px;
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
}

.modal_mask .modal_content .modal_header .title_modal {
  width: 100%;
  margin: auto;
  padding: 0 2%;
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

.btnAt {
  width: 100px;
  background: var(--card_blue);
  border: none;
  border-radius: 10px;
  padding: 0.2rem 0rem;
  color: var(--main_primaryWhite);
  text-align: center;
  cursor: pointer;
}

.title_modal input {
  width: 40px;
  height: 40px;
  padding: 5px 5px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: var(--white);
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
  transition: 1s;
}

.title_modal input:hover {
  transform: rotate(180deg);
}


/* -------- Style Atributo ------- */
#inputImage {
  display: none;
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

.perguntas {
  width: 100%;
  overflow-y: auto;
  position: relative;
  padding: 1rem 0;
  height: 60%;
}

.perguntas .headerPerguntas {
  width: 100%;
  display: flex;
  gap: 0.5rem;
}

.perguntas .headerPergunta {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.perguntas .headerPergunta .testeLi {
  width: 100%;
  display: flex;
  gap: 0.5rem;
}
.perguntas .headerPergunta .titleHeader {
  position: relative;
  width: 33%;
  margin-bottom: 30px;
}

.perguntas .headerPerguntas .titleHeader {
  position: relative;
  width: 33%;
  margin-bottom: 30px;
}

.perguntas .headerPergunta .titleHeader .btnHabilitar {
  width: 33%;
  padding: 0.3rem 0;
  background: var(--btn_blue);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: var(--main_primaryWhite);
  font-weight: bold;
  letter-spacing: 3px;
}

.perguntas .headerPergunta .titleHeader .btnDesabilitar {
  width: 40%;
  padding: 0.3rem 0;
  background: var(--btn_gray);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: var(--main_primaryWhite);
  font-weight: bold;
  letter-spacing: 3px;
}

.incrementAtributo {
  width: 100%;
  padding: 1rem;
  border-top: 1px solid black;
  margin-top: 20px;
  text-align: start;
}

.incrementAtributo .inputAdd {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.incrementAtributo .inputAdd input {
  position: relative;
  width: 50%;
  border-radius: 10px 0 0 10px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.incrementAtributo .inputAdd button {
  width: 70px;
  color: var(--main_primaryWhite);
  background: var(--bg_green);
  padding: 0.25rem;
  text-align: center;
  border-radius: 0 10px 10px 0;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .modal_mask .modal_body .inputsHeader .input {
    width: 49%;
  }

  .title_modal input {
    font-size: 20px;
    width: 50px;
    height: 50px;
  }

  .incrementAtributo .inputAdd input {
    width: 100%;
  }
}

@media (max-width: 425px) {
  .title_modal input {
    font-size: 20px;
    width: 50px;
    height: 50px;
  }

  .modal_mask .modal_body .inputsHeader .input {
    width: 100%;
  }

  .perguntas .headerPerguntas .titleHeader {
    width: 100%;
    font-weight: bold;
  }
}
</style>
