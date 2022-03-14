<template>
  <div class="content-imgPreview">
    <div class="container-img">
      <img :src="preview" class="img-fluid" />
    </div>
    <label :for="myFile" class="selectImg">Selecione a Imagem</label>
    <input type="file"  @change="previewImage" class="form-control-file" :id="myFile">
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      preview: "https://i.fbcd.co/products/resized/resized-750-500/563d0201e4359c2e890569e254ea14790eb370b71d08b6de5052511cc0352313.jpg",
      image: null,
      myFile: "my-file" + this.id
    };
  },

  props: {
    id: Number,
  },

  methods: {
    showModalImg () {
      console.log("Mostrando imagem em tela cheia")
    },

    previewImage: function(e) {
      let imgInput = e.target
      if (imgInput.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
      this.image=imgInput.files[0];
      reader.readAsDataURL(this.image);
      }
    }
  },

}
</script>

<style scoped>
  .content-imgPreview {
    margin-top: 50px;
    width: auto;
    height: 350px;
    border: 1px solid rgba(37, 36, 36, 0.281);
    border-radius: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

  }

  .container-img {
    height: 300px;
    width: 100%;
  }

  .img-fluid {
    display: block;
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
  }

  .selectImg {
    background-color: rgba(0, 0, 0, 0.411);
    color: #fff;
    cursor: pointer;
    border: 1px 0 0 1px;
    width: 100%;
    height: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
</style>