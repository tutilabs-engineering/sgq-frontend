<template>
  <div class="content-startupCadastro">
    <fieldset class="form">
      <legend>O.P vinculada</legend>
      <div class="input">
        <label for="op">Ordem de Produção</label>
        <input
          type="text"
          name="client"
          id="op"
          placeholder="Digite o código OP"
          disabled
          :value="headerSecondary.code_op"
        />
      </div>

      <div class="input">
        <label for="client">Cliente</label>
        <input
          type="text"
          name="client"
          id="client"
          placeholder="ex: Yamaha"
          :value="headerSecondary.client"
          disabled
        />
      </div>

      <div class="input">
        <label for="client">Código cliente</label>
        <input
          type="text"
          name="client"
          id="client"
          placeholder="ex: 64321KSS J300 FA"
          :value="headerSecondary.codeClient"
          disabled
        />
      </div>

      <div class="input">
        <label for="client">Produto</label>
        <input
          type="text"
          name="client"
          id="client"
          :value="headerSecondary.product"
          disabled
        />
      </div>

      <div class="input">
        <label for="client">Código Produto</label>
        <input
          type="text"
          name="client"
          id="client"
          :value="headerSecondary.codeProduct"
          disabled
        />
      </div>

      <div class="input">
        <label for="client">Quantidade Planejada</label>
        <input
          type="text"
          name="client"
          id="client"
          :value="headerSecondary.quantity"
          disabled
        />
      </div>

    </fieldset>
  </div>
</template>

<script>
import http from "../../services/startup/index";
// import dayjs from 'dayjs'

export default {
  created: async function () {
    await http.listDataByCodeOp(this.codeSecondary).then((res) => {
      this.headerSecondary.code_op = res.data.results[0].DocNum;
      this.headerSecondary.client = res.data.results[0].CardName;
      this.headerSecondary.codeClient = res.data.results[0].U_CodCliente;
      this.headerSecondary.product = res.data.results[0].ProdName;
      this.headerSecondary.codeProduct = res.data.results[0].ItemCode;
      this.headerSecondary.quantity = res.data.results[0].PlannedQty;
    });
  },

  props: ["codeSecondary"],
  data() {
    return {
      headerSecondary: {
        code_op: "",
        client: "",
        codeClient: "",
        product: "",
        codeProduct: "",
        quantity: "",
      },
    };
  },

  //   watch: {
  //     code_op (newValor) {
  //       this.$store.commit("$SETCODEOP", this.code_op);
  //       this.$emit("returnCodeOp", newValor)

  //     },

  //   }
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
  font-size: 25px;
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
