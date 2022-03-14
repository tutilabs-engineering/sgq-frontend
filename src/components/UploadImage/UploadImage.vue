<template>
  <div class="content-imgPreview">
    <img :src="preview" class="img-fluid" />
    <label for="my-file">Select Image</label>
    <input type="file" accept="image/*" @change="previewImage" class="form-control-file" id="my-file">
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      preview: null,
      image: null,
    };
  },

  methods: {
    previewImage: function(e) {
      let imgInput = e.target
      if (imgInput.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        }
      this.image=imgInput.files[0];
      reader.readAsDataURL(imgInput.files[0]);
      }
    }
  },

}
</script>

<style scoped>
  .content-imgPreview {
    width: auto;
    height: 200px;
    border: 1px solid rgba(37, 36, 36, 0.281);
    border-radius: 10px 10px 10px 10px;
    background-image: url("https://i.fbcd.co/products/resized/resized-750-500/563d0201e4359c2e890569e254ea14790eb370b71d08b6de5052511cc0352313.jpg");
    background-size:contain;
    background-repeat: no-repeat;
    background-position: center;
    
  }

  .img-fluid {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 10px 10px 10px;
  }
</style>