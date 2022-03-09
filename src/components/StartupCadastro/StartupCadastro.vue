<template>
  <div class="content-startupCadastro">
    <div class="input">
        <label for="client">Cliente</label>
        <input type="text" name="client" id="client" placeholder="type qualquer coisa">
      </div>
    <div class="form">

      


      <div class="form-col">
        <label>OP</label>
        <input
          type="text"
          v-model.lazy="code_op"
          id=""
        />

        <label>Cliente</label>
        <input type="text" name="" id="" :value="headerInfo.client"/>

        <label>Código Cliente</label>
        <input type="text" name="" id="" :value="headerInfo.codeClient"/>
      </div>

      <div class="form-col">
        <label>Produto</label>
        <input type="text" name="" id="" :value="headerInfo.product"/>

        <label>Código Produto</label>
        <input type="text" name="" id="" :value="headerInfo.codeProduct"/>

        <label>Quantidade</label>
        <input type="number" name="" id="" :value="headerInfo.quantity"/>
      </div>

      <div class="form-col">
        <label>Data</label>
        <input type="date" name="" id="" :value="headerInfo.date"/>

        <label>Hora inicial</label>
        <input type="time" name="" id="" :value="headerInfo.startTime"/>

        <label>Hora Final</label>
        <input type="time" name="" id=""/>
      </div>
    </div>
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
  background-color: var(--card-color);
  padding: 20px 0 20px 0;
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
  border-radius: 10px 10px 10px 10px;
  border-right: 7px solid var(--button-color-01);
}

.form-col {
  margin: 0px 30px 0 30px;
  display: flex;
  flex-direction: column;
}

.form-col label {
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 5px;
}

.form-col input {
  padding: 0 5px 0 5px;
  width: auto;
  border: 1px solid rgba(0, 0, 0, 0.514);
  border-radius: 5px;
  height: 30px;
  outline: none;
  margin-bottom: 10px;
}


.input {
  background-color: var(--bg_gray);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 55px;
  padding: 5px;
  border-radius: 5px 5px 0 0;
}

.input input {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--black_text);
  outline: none;
}

@media (max-width: 1017px) {
  .form {
    padding: 12px;
    max-width: 80%;
    flex-direction: column;
  }
}
</style>
