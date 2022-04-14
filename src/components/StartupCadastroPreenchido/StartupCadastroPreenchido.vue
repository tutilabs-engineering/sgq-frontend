<template>
  <div class="content-startupCadastro">
    
    <fieldset class="form">

      
      <legend>Start-Injeção</legend>

      <div class="input">
        <label for="op">Ordem de Produção</label>
        <input type="text" name="client" id="op" placeholder="Digite o código OP" :value="headerPreenchida.code_op" disabled>
      </div>
      
      <div class="input">
        <label for="client">Cliente</label>
        <input type="text" name="client" id="client" placeholder="ex: Yamaha" :value="headerPreenchida.client" disabled>
      </div>

      <div class="input">
        <label for="client">Código cliente</label>
        <input type="text" name="client" id="client" placeholder="ex: 64321KSS J300 FA" :value="headerPreenchida.codeClient" disabled>
      </div>

      <div class="input">
        <label for="client">Produto</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa" :value="headerPreenchida.product" disabled>
      </div>

      <div class="input">
        <label for="client">Código Produto</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa" :value="headerPreenchida.codeProduct" disabled>
      </div>

      <div class="input">
        <label for="client">Quantidade</label>
        <input type="number" name="client" id="client" placeholder="type qualquer coisa" :value="headerPreenchida.quantity" disabled>
      </div>

      <div class="input">
        <label for="client">Máquina</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa" :value="headerPreenchida.machine" disabled>
      </div>

      <div class="input">
        <label for="client">Molde</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa" :value="headerPreenchida.product_mold" disabled>
      </div>

      <div class="input">
        <label for="client">Data</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa" :value="headerPreenchida.day" disabled>
      </div>

      <div class="input">
        <label for="client">Hora inicial</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa" :value="headerPreenchida.start_time" disabled>
      </div>

    </fieldset>
  </div>
</template>

<script>
// import http from "../../services/startup";

export default {
  data() {
    return {
      code_op: "",

      
    };
  },
  props: {
    headerPreenchida: Object
  },
  methods: {},
  watch: {
    code_op (newValor) {
      this.$store.commit("$SETCODEOP", this.code_op);
      this.$emit("returnCodeOp", newValor)

    },


  }
};

</script>

<style scoped>
.content-startupCadastro {
  padding: 20px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
}

.form {
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}

.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
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

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

@media (max-width: 965px) {

  .content-startupCadastro {
    padding: 0;
  }
  .form {
    padding: 12px;
    grid-template-columns: auto;
  }

  legend {
    text-align: center;
  }
}
</style>
