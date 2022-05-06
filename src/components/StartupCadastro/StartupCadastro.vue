<template>
  <div class="content-startupCadastro">
    
    <fieldset class="search-field">
      <legend><i class="fas fa-filter"></i>Buscar OP</legend>
      <input type="text" placeholder="" v-model="code_op">
      <button @click="searchByCodeOp(code_op)"><i class="fas fa-search"></i> Buscar</button>
    </fieldset>
    
    <fieldset class="form">

      
      <legend>Start-Injeção</legend>

      
      
      <div class="input">
        <label for="client">Cliente</label>
        <input type="text" name="client" id="client" placeholder="ex: Tutiplast" :value="headerInfo.client" disabled>
      </div>

      <div class="input" v-if="headerInfo.codeClient === null">
        <label for="client">Código cliente</label>
        <input type="text" name="client" id="client" placeholder="ex: 64321KSS J300 FA" v-model="codeClientManualInput" >
      </div>

      <div class="input" v-else>
        <label for="client">Código cliente</label>
        <input type="text" name="client" id="client" placeholder="ex: 64321KSS J300 FA" :value="headerInfo.codeClient" disabled>
      </div>

      <div class="input">
        <label for="client">Produto</label>
        <input type="text" name="client" id="client" placeholder="ex: Visor Central Fan" :value="headerInfo.product" disabled>
      </div>

      <div class="input">
        <label for="client">Código Produto</label>
        <input type="text" name="client" id="client" placeholder="ex: xx.xxx.xxxxxx.xx-xx" :value="headerInfo.codeProduct" disabled>
      </div>

      <div class="input">
        <label for="client">Quantidade</label>
        <input type="text" name="client" id="client" placeholder="ex: 456" :value="headerInfo.quantity" disabled>
      </div>

      <div class="input">
        <label for="client">Máquina</label>
        <input type="text" name="client" id="client" placeholder="ex: MAQ01" v-model="headerInput.machine">
      </div>

      <div class="input">
        <label for="client">Molde</label>
        <input type="text" name="client" id="client" placeholder="ex: MOD04" v-model="headerInput.product_mold">
      </div>

      <div class="input">
        <label for="client">Data</label>
        <input type="text" name="client" id="client" placeholder="ex: ##/##/####" :value="headerInfo.date" disabled>
      </div>

      <div class="input">
        <label for="client">Hora inicial</label>
        <input type="text" name="client" id="client" placeholder="ex: 14:56 pm"  :value="headerInfo.startTime" disabled>
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
      headerInput: {
        machine: "",
        product_mold: "",
        day: "",
        start_time: "",
      },
      codeClientManualInput: "",
      
    };
  },
  props: {
    headerInfo: Object
  },
  methods: {
    searchByCodeOp(newValor){
      console.log(newValor);
      this.$store.commit("$SETCODEOP", this.code_op);
      this.$emit("returnCodeOp", newValor)
    },
    
  },
  watch: {
 
    headerInput: {
      deep: true,
      immediate: true,
      handler(){
        this.$store.commit("$SETDATACREATESTARTUP", {header: {
        client: this.headerInfo.client,
        code_client: this.headerInfo.codeClient || this.codeClientManualInput,
        code_product: this.headerInfo.codeProduct,
        desc_product: this.headerInfo.product,
        quantity: this.headerInfo.quantity,
        product_mold: this.headerInput.product_mold,
        machine: this.headerInput.machine,
        day: this.headerInfo.date,
        start_time: this.headerInfo.startTime,
      }}
      );
      }
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
  flex-direction: column;
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

.formOP {
  margin-bottom: 30px;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg_gray);
}

.search-field {
  background-color: transparent;
  width: 50%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

.search-field input {
  width: 70%;
  height: 40px;
  border: none;
  border: 1px solid rgba(37, 36, 36, 0.281);
  border-radius: 5px;
  outline: none;
  padding: 10px;
}

.search-field button{
  max-width: 20%;
  min-width: 30%;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: var(--card_green);
  color: #fff;
  font-weight: 400;
  cursor: pointer;
}

.btn {
  height: 50px;
  width: 120px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;
  color: #fff;
  background-color: var(--card_blue);
}

.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70px;
  padding: 5px;
  border-radius: 5px 5px 0 0;
}
.inputOp {
  display: flex;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px white inset;
}

.inputOp input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px var(--bg_gray) inset;
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

input::placeholder {
  font-size: 13px;
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

  .formOP {
    width: 100%;
  }

  .inputOp {
    width: 90%;
  }

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
