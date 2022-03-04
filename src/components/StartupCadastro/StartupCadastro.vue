<template>
  <div class="content-startupCadastro">
    <div class="form">
      <div class="form-col">
        <label>OP</label>
        <input
          type="text"
          @change="ReturnDataOp"
          v-model="code_op"
          name=""
          id=""
        />

        <label>Cliente</label>
        <input type="text" name="" id="" v-model="autoReturn.client" />

        <label>Código Cliente</label>
        <input type="text" name="" id="" v-model="autoReturn.codeClient" />
      </div>

      <div class="form-col">
        <label>Produto</label>
        <input type="text" name="" id="" v-model="autoReturn.product" />

        <label>Código Produto</label>
        <input type="text" name="" id="" v-model="autoReturn.codeProduct" />

        <label>Quantidade</label>
        <input type="number" name="" id="" />
      </div>

      <div class="form-col">
        <label>Data</label>
        <input type="date" name="" id="" v-model="autoReturn.date" />

        <label>Hora inicial</label>
        <input type="time" name="" id="" v-model="autoReturn.startTime" />

        <label>Hora Final</label>
        <input type="time" name="" id="" />
      </div>
    </div>
  </div>
</template>

<script>
import http from "../../services/startup";
export default {
  data() {
    return {
      code_op: "",
      autoReturn: {
        client: "",
        codeClient: "",
        product: "",
        codeProduct: "",
        date: "",
        startTime: "",
      },
    };
  },
  methods: {
    ReturnDataOp: async function () {
      function GetDate() {
        const date = new Date();
        let day = date.getDay();
        let month = date.getMonth() + 1;
        const year = date.getFullYear();

        if (day !== 1) {
          day = day - 1;
        }
        if (day.toString().length === 1) {
          day = `0${day}`;
        }
        if (month < 10) {
          month = `0${month}`;
        }

        return `${year}-${month}-${day}`;
      }
      function GetHour() {
        const date = new Date();

        let hour = date.getHours();
        let minutes = date.getMinutes();

        return `${hour}:${minutes}`;
      }

      const opData = await http.listDataByCodeOp(this.code_op);
      this.autoReturn.client = opData.data.data_op.client;
      this.autoReturn.codeClient = opData.data.data_op.code_client;
      this.autoReturn.product = opData.data.data_op.product;
      this.autoReturn.codeProduct = opData.data.data_op.code_product;
      this.autoReturn.date = GetDate();
      this.autoReturn.startTime = GetHour();
    },
  },
};
</script>

<style scoped>
.content-startupCadastro {
  padding: 20px;
  margin-top: 1vh;
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

@media (max-width: 1017px) {
  .form {
    padding: 12px;
    max-width: 80%;
    flex-direction: column;
  }
}
</style>
