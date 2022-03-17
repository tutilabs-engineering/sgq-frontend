<template>
  <div v-if="modalAtributo">
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
                  @click="$emit('openModalAtributo')"
                />
              </div>
            </div>

            <div class="modal_body">
              <div class="inputsHeader">
                <div class="input">
                  <p>Código Produto:</p>
                  <input type="text" readonly :value="productsCodigo"/>
                </div>

                <div class="input">
                  <p>Produto:</p>
                  <input type="text" readonly :value="productsDescricao"/>
                </div>

                <div class="input">
                  <p>Cliente:</p>
                  <input type="text" readonly :value="productsCliente"/>
                </div>

                <div class="input">
                  <p>Descrição Cliente:</p>
                  <input type="text" readonly />
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
                <form action="" @submit.prevent="addNovaPergunta">
                  <h3>ADICIONAR PERGUNTA:</h3>
                  <div class="inputAdd">
                    <input type="text" v-model="newTodoText" />
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

  <button class="btnAt" @click="$emit('openModalAtributo')">AT</button>
</template>

<script>
export default {
  components: {},
  name: "Modal",
  emits: ["openModalAtributo"],
  data() {
    return {
      actionButton: "Insert",
      dynamicTitle: "Add Data",
      comments: "",
      count: 0,
      newTodoText: "",
      todos: [{}],
      nextTodoId: 0,
      textBtn: "Habilitar",
      btnDesabilitado: false,
    };
  },
  props: {
    titleModal: String,
    id: Number,
    modalAtributo: String,
    productsCodigo: String,
    productsDescricao: String,
    productsCliente: String,

  },
  methods: {
    getComments(value) {
      this.comments = value;
    },

    addNovaPergunta() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
          title: "title-swal-text",
        },
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      if (this.newTodoText === "") {
        Toast.fire({
          icon: "error",
          title: "Adicione ao menos uma pergunta",
          background: "#FFA490",
        });
      }
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
  padding: 5px 10px;
  border-radius: 50%;
  border: none;
  color: var(--white);
  background-color: rgb(223, 97, 97);
  cursor: pointer;
  font-weight: 600;  
}

.title_modal input:hover {
  background-color: rgb(148, 7, 7);
}

/* Style ScrollBar -------- */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgb(182, 181, 181);
  border-radius: 15px;
}

::-webkit-scrollbar-thumb {
  background: var(--bg_green);
  border-radius: 15px;
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
    width: 4vw;
    height: 4vw;
    font-size: 2vw;
  }

  .incrementAtributo .inputAdd input {
    width: 100%;
  }
}

@media (max-width: 425px) {
  .title_modal input {
    width: 7vw;
    height: 7vw;
    font-size: 4vw;
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
