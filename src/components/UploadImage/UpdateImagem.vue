<template>
  <div class="container">
    <div class="upload">
      <div class="modal_header">
        <h1>Anexar Imagem</h1>
        <input type="button" value="X" @click="closeModal" />
      </div>
      <img :src="file1" alt="" v-if="uploadImg" />
      <div class="uploadImg">
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
        <button @click="salvarImagem">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      file1: "",
      uploadImg: false,
    };
  },

  props: {
    idImg: {
      type: String,
      required: true,
    },
  },

  methods: {
    insertImageFile(e) {
      this.uploadImg = true;
      this.file = e.target.files[0];
      this.file1 = URL.createObjectURL(this.file);
    },
    salvarImagem() {
      this.$emit("salvarImagem", this.file);
    },
    closeModal() {
      this.$emit("closeModal");
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
  width: 30%;
  padding: 2rem;
  background: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.upload img {
  width: 100px;
  height: 100px;
}

.upload button {
  width: 100px;
  height: 40px;
  background: var(--card_blue);
  border-radius: 5px;
  margin-top: 23px;
  border: none;
  color: white;
  cursor: pointer;
}
.inputUpLoad {
  width: 100px;
  height: 40px;
  background: var(--card_blue);
  border-radius: 5px;
  margin-top: 23px;
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
