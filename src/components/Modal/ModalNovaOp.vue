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
            
            <div class="content-modal-op">
              <div class="info-modal-op">

                <div class="input">
                  <label for="op">Ordem de Produção</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP" v-model.lazy="code_op">
                </div>

                <div class="input">
                  <label for="op">Ordem de Produção</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP" v-model.lazy="code_op">
                </div>

                <div class="input">
                  <label for="op">Ordem de Produção</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP" v-model.lazy="code_op">
                </div>

                <div class="input">
                  <label for="op">Ordem de Produção</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP" v-model.lazy="code_op">
                </div>


              </div>
              <div class="historic-op"></div>
            </div>

          </div>
        </div>
      </form>
    </transition>
  </div>

  <i class="fas fa-plus-circle" @click="$emit('openModalNovaOp')"></i>
  

</template>

<script>

export default {
  components: {},
  name: "Modal",
  emits: ["openModalNovaOp"],
  data() {
    return {
    };
  },
  props: {
    titleModal: String,
    id: Number,
    modalNovaOp: String,
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
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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

.fa-plus-circle {
  color: var(--card_orange);
  font-size: 25px;
  cursor: pointer;
}
.content-modal-op {
  width: 100%;
  height: 100%;
  display: flex;
}
.info-modal-op {
  padding: 20px;
  width: 70%;
  height: 100%;
  border-radius: 10px 10px 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 70px;
  padding: 5px;
  border-radius: 5px 5px 0 0;
}

.input label {
  font-weight: 600;
  font-size: 18px;
  color: var(--black_text);
}

.input input {
  background-color: transparent;
  border: none;
  transition: 1s;
  outline: none;
  font-size: 15px;
  height: 52px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.39);
}

.historic-op {
  width: 30%;
  height: 100%;
}


@media (max-width: 768px) {
  .modal_mask .modal_body .inputsHeader .input {
    width: 49%;
  }
  .info-modal-op, .historic-op {
    width: 100%;
    border-right: 0;
  }

  .info-modal-op {
    grid-template-columns: 1fr 1fr;
  }

  .content-modal-op {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .title_modal input {
    width: 4vw;
    height: 4vw;
    font-size: 2vw;
  }

  .incrementAtributo .inputAdd input {
    width: 100%;
  }

  .fa-plus-circle {
    margin: 20px;
  }
}

@media (max-width: 425px) {
  .title_modal input {
    width: 7vw;
    height: 7vw;
    font-size: 4vw;
  }

  .info-modal-op {
    grid-template-columns: 1fr;
  }

  .input {
    align-items: center;
    width: 100%;
  }

  .modal_mask .modal_body .inputsHeader .input {
    width: 100%;
  }

}
</style>
