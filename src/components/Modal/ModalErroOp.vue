<template>
  <div v-if="modalMensagemErroOp">
    <transition name="model">
      <div class="modal_mask">
        <div class="modal_content">
          <div class="modal_body">
            <div class="icon">
              <i class="fas fa-times-circle"></i>
            </div>
            <div class="text">
              <h3>Falha na criação</h3>
              <pre>
                A máquina selecionada possui uma start em andamento! 
                É necessário a finalização dela para poder criar outra
              </pre>
            </div>
            <button class="startUp" @click="startAndamento">
              Visualizar startups em andamento
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>

  <button className="btnOpcoes" @click="$emit('OpenModalErro')">
    Modal Erro OP
  </button>
</template>

<script>
export default {
  name: "ModalErroOp",
  props: ["modalMensagemErroOp"],
  emits: ["OpenModalErro"],
  methods: {
    startAndamento() {
      this.$router.push({ path: "/startups-andamentos" });
    },
  },
};
</script>

<style scoped>
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
  width: 70%;
  height: 70%;
  margin: 70px auto;
  background: var(--bg_white);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.modal_mask .modal_body {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal_mask .modal_body .icon {
  font-size: 4rem;
  color: var(--card_red);
}

.modal_mask .modal_body .text {
  text-align: center;
}

.modal_mask .modal_body .startUp {
  background: var(--btn_blue);
  border: none;
  color: var(--main_primaryWhite);
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}
</style>
