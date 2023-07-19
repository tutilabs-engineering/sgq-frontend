<template>
  <div class="container">
    <div class="upload">
      <img :src="file" alt="" v-if="uploadImg" />
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
            @change="insertImageFile"
          />
        </div>
        <button @click="teste">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      uploadImg: false,
    };
  },

  methods: {
    insertImageFile(e) {
      this.uploadImg = true;
      const file = e.target.files[0];
      this.file = URL.createObjectURL(file);
    },
    teste() {
      this.$emit("salvar");
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
}

#inputImage {
  display: none;
}
</style>
