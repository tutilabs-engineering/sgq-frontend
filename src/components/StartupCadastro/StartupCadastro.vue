<template>
  <div class="content-startupCadastro">
    <fieldset class="search-field">
      <legend><i class="fas fa-filter"></i>Buscar OP</legend>
      <input type="text" placeholder="" v-model="code_op" />
      <button @click="searchByCodeOp(code_op)">
        <i class="fas fa-search"></i> Buscar
      </button>
    </fieldset>

    <fieldset class="form">
      <legend>Start-Injeção</legend>

      <div class="input">
        <label for="client">Cliente</label>
        <input
          type="text"
          name="client"
          id="client"
          :value="headerInfo.client"
          disabled
        />
      </div>

      <div class="input" v-if="headerInfo.codeClient === null">
        <label for="client">Código cliente</label>
        <input
          type="text"
          name="client"
          id="client"
          v-model="codeClientManualInput"
        />
      </div>

      <div class="input" v-else>
        <label for="client">Código cliente</label>
        <input
          type="text"
          name="client"
          id="client"
          :value="headerInfo.codeClient"
          disabled
        />
      </div>

      <div class="input">
        <label for="client">Produto</label>
        <input
          type="text"
          name="client"
          id="client"
          :value="headerInfo.product"
          disabled
        />
      </div>

      <div class="input">
        <label for="client">Código Produto</label>
        <input
          type="text"
          name="client"
          id="client"
          :value="headerInfo.codeProduct"
          disabled
        />
      </div>

      <div class="input">
        <label for="client">Quantidade Planejada</label>
        <input
          type="text"
          name="client"
          id="client"
          :value="headerInfo.quantity"
          disabled
        />
      </div>

      <div class="input inputMaq">
        <label for="client">Máquina</label>
        <input
          type="text"
          list="maquinas"
          name="client"
          id="client"
          v-model="headerInput.machine"
        />

        <datalist id="maquinas">
          <option
            v-for="(maquina, index) in maqOptions"
            :value="maquina.description"
            :key="index"
          >
            {{ maquina.value }}
          </option>
        </datalist>
      </div>

      <div class="input">
        <label for="client">Molde</label>
        <input
          type="text"
          list="moldes"
          name="client"
          id="client"
          v-model="headerInput.product_mold"
        />

        <datalist id="moldes">
          <option
            v-for="(molde, index) in moldOptions"
            :value="molde.description"
            :key="index"
          >
            {{ molde.value }}
          </option>
        </datalist>
      </div>

      <div class="input">
        <label for="client">Data</label>
        <input
          type="text"
          name="client"
          id="client"
          :value="formatYear(headerInfo.date)"
          disabled
        />
      </div>

      <div class="input">
        <label for="client">Hora inicial</label>
        <input
          type="text"
          name="client"
          id="client"
          placeholder="---"
          :value="formatHour(headerInfo.start_time)"
          disabled
        />
      </div>
      <div class="input">
        <label for="client">Plano de inspeção</label>
        <input
          type="text"
          name="client"
          id="client"
          v-model="headerInput.piq"
        />
      </div>
      <div class="input">
        <label for="client">NQA</label>
        <input
          type="text"
          name="client"
          id="client"
          v-model="headerInput.nqa"
        />
      </div>
      <div class="input">
        <label for="client">Nível</label>
        <input
          type="text"
          name="client"
          id="client"
          v-model="headerInput.level"
        />
      </div>
    </fieldset>
  </div>
</template>

<script>
import http from "../../services/startup";
import dayjs from "dayjs";

export default {
  data() {
    return {
      code_op: "",
      headerInput: {
        machine: "",
        product_mold: "",
        day: "",
        start_time: "",
        nqa: "",
        piq: "",
        level: "",
      },
      codeClientManualInput: "",

      maqOptions: [],
      moldOptions: [],
    };
  },
  props: {
    headerInfo: Object,
  },
  methods: {
    searchByCodeOp(newValor) {
      this.$store.commit("$SETCODEOP", this.code_op);
      this.$emit("returnCodeOp", newValor);
    },

    formatYear(date) {
      return dayjs(date).format("DD/MM/YYYY");
    },

    formatHour(date) {
      return dayjs(date).format("HH:mm:ss");
    },
  },

  created: async function () {
    await http
      .listAllMachines()
      .then((res) => {
        this.maqOptions = res.data;
      })
      .catch((error) => {
        console.log(error);
      });

    await http
      .listAllMolds()
      .then((res) => {
        this.moldOptions = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  watch: {
    headerInput: {
      deep: true,
      immediate: true,
      handler() {
        this.$store.commit("$SETDATACREATESTARTUP", {
          header: {
            client: this.headerInfo.client,
            code_client:
              this.headerInfo.codeClient || this.codeClientManualInput,
            code_product: this.headerInfo.codeProduct,
            desc_product: this.headerInfo.product,
            quantity: this.headerInfo.quantity,
            product_mold: this.headerInput.product_mold,
            machine: this.headerInput.machine,
            day: this.headerInfo.date,
            start_time: this.headerInfo.startTime,
            nqa: Number(this.headerInput.nqa),
            level: this.headerInput.level,
            piq: this.headerInput.piq,
          },
        });
      },
    },
  },
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
  color: var(--black_text);
  width: 100%;
  height: 100%;
  background-color: var(--bg_white);
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
  padding: 20px;
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

.search-field button {
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
  color: var(--black_text);
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
  .search-field {
    width: 100%;
  }
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
