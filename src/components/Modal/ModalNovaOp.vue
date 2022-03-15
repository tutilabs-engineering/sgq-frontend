<template>
  <div v-if="modalNovaOp">
    <transition name="model">
      <form action="">
        <div class="modal_mask">
          <div class="modal_content">
            <div class="modal_header">
              <div class="title_modal">
                <h4>Adicionar nova OP</h4>
                <input
                  type="button"
                  value="X"
                  colorButton="red"
                  @click="$emit('openModalNovaOp')"
                />
              </div>
            </div>

            <div class="info-modal-op"></div>
            <div class="historic-op"></div>

            
          </div>
        </div>
      </form>
    </transition>
  </div>

  <button class="btnAt" @click="$emit('openModalNovaOp')">AT</button>
</template>

<script>
import { useToast } from "vue-toastification";
export default {
  components: {},
  name: "Modal",
  emits: ["openModalNovaOp"],
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
    modalNovaOp: String,
  },
  methods: {
    getComments(value) {
      this.comments = value;
    },

    addNovaPergunta() {
      if (this.newTodoText === "") {
        const toast = useToast();
        toast.error("Adicione ao menos uma pergunta");
      } else if (this.count < 10) {
        this.count++;
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText,
        });
        this.newTodoText = "";
      }
      if (this.count === 10) {
        const toast = useToast();
        toast.error("Número máximo de perguntas atingidas.");
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
  background: rgba(90, 90, 90, 0.513);
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

}
</style>
