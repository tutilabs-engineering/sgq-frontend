<template>
  <div class="container">
    <div class="upload">
      <div class="modal_header">
        <h1>Tabela Ponto a Ponto</h1>
        <input type="button" value="X" @click="closeModal" />
      </div>
      <div class="uploadImg">
        <div class="input">
          <label for="">Quantidade de Ponto:</label>
          <input type="text" v-model="qtdPoint" />
        </div>
        <div class="input">
          <label for="">Imagem Produto:</label>
          <div class="inputUpLoad">
            <label for="inputImage" class="inputImage"
              ><i class="fas fa-paperclip"></i> <span>Anexar</span></label
            >
            <input
              ref="file"
              type="file"
              class="inputUpLoad"
              id="inputImage"
              accept=".png, .jpeg, .jpg"
              @change="insertImageFile"
            />
          </div>
        </div>
      </div>
      <img :src="file1" alt="" v-if="uploadImg" />
      <button @click="salvePointiPoint">Salvar</button>
    </div>
  </div>
</template>

<script>
import httpPointPoint from "../../services/startup";

export default {
  data() {
    return {
      file: "",
      file1: "",
      uploadImg: false,
      qtdPoint: "",
    };
  },

  props: {
    idImg: {
      type: String,
      required: true,
    },
    dataProduct: {
      type: [Array, Object],
      required: true,
    },
  },

  methods: {
    insertImageFile(e) {
      this.uploadImg = true;
      this.file = e.target.files[0];
      this.file1 = URL.createObjectURL(this.file);
    },
    async salvePointiPoint() {
      const formData = new FormData();

      formData.append("quantity", Number(this.qtdPoint));
      formData.append("code_product", this.dataProduct.code_product);
      formData.append("file", this.file);
      await httpPointPoint
        .createPointPoint(formData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      this.$emit("changeStatus");
    },
    closeModal() {
      this.$emit("changeStatus");
    },
  },
};
</script>

<style scoped>
.container {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgb(131 131 131 / 40%);
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.upload {
  width: 50%;
  padding: 2rem;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.upload img {
  min-width: 400px;
  min-height: 300px;
}

.modal_header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal_header input {
  width: 30px;
  height: 30px;
  background-color: var(--card_red);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  transition: 0.5s;
}

.uploadImg {
  display: flex;
  gap: 3rem;
  justify-content: center;
}

.input {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.upload img {
  width: 100px;
  height: 100px;
}

.upload button {
  width: 160px;
  height: 40px;
  background: var(--card_blue);
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.2rem;
}
.inputUpLoad {
  width: 100%;
  height: 40px;
  background: var(--card_blue);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
}

.inputUpLoad label {
  cursor: pointer;
}

#inputImage {
  display: none;
}
</style>
