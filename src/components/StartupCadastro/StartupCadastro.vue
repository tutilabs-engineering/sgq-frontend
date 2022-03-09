<template>
  <div class="content-startupCadastro">
    
    <fieldset class="form">

      
      <legend>Start-Injeção</legend>

      <div class="input">
        <label for="op">Ordem de Produção</label>
        <input type="text" name="client" id="op" placeholder="type qualquer coisa" v-model.lazy="code_op">
      </div>
      
      

      <div class="input">
        <label for="client">Cliente</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa" :value="headerInfo.client">
      </div>

      <div class="input">
        <label for="client">Código cliente</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa" :value="headerInfo.codeClient">
      </div>

      <div class="input">
        <label for="client">Produto</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa" :value="headerInfo.product">
      </div>

      <div class="input">
        <label for="client">Quantidade</label>
        <input type="number" name="client" id="client" placeholder="type qualquer coisa" :value="headerInfo.quantity">
      </div>

      <div class="input">
        <label for="client">Data</label>
        <input type="date" name="client" id="client" placeholder="type qualquer coisa" :value="headerInfo.date">
      </div>

      <div class="input">
        <label for="client">Hora inicial</label>
        <input type="time" name="client" id="client" placeholder="type qualquer coisa" :value="headerInfo.startTime">
      </div>

      <div class="input">
        <label for="client">Hora final</label>
        <input type="time" name="client" id="client" placeholder="type qualquer coisa">
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
    headerInfo: Object
  },
  methods: {},
  watch: {
    code_op (newValor) {
      this.$emit("returnCodeOp", newValor)
    }
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
  height: 60px;
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
}

.input input:focus {
  border-bottom: 1px solid var(--black_text);
}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

@media (max-width: 1017px) {
  .form {
    padding: 12px;
    max-width: 80%;
    grid-template-columns: auto;
  }
}
</style>
