<template>
  <div>
    <UpdateImagem
      v-if="showUpdateImage"
      @salvarImagem="salvarImagem"
      @closeModal="closeModal"
    />
    <transition name="model">
      <form action="">
        <div class="modal_mask">
          <div class="modal_content">
            <div class="modal_header">
              <h1>Tabela de Variáveis</h1>
              <input
                type="button"
                value="X"
                colorButton="red"
                @click="$emit('changeStatus')"
              />
            </div>

            <div class="modal_body">
              <div class="inputsHeader">
                <div class="input">
                  <p>Cód. Produto</p>
                  <input
                    type="text"
                    readonly
                    :value="dataProduct.code_product"
                  />
                </div>

                <div class="input">
                  <p>Descrição Produto</p>
                  <input
                    type="text"
                    readonly
                    :value="dataProduct.name_product"
                  />
                </div>
              </div>

              <div class="variaveis">
                <div class="headerVariaveis">
                  <div class="titleHeader">Identificação</div>
                  <div class="titleHeader">Cota</div>
                  <div class="titleHeader">Máximo</div>
                  <div class="titleHeader">Mínimo</div>
                  <div class="titleHeader">Preview</div>
                  <div class="titleHeader">Opções</div>
                </div>

                <div class="headerVariavel">
                  <div
                    class="testeLi"
                    v-for="(variable, index) in variables"
                    :key="index"
                  >
                    <div class="titleHeader">
                      {{ variable.description }}
                    </div>

                    <div class="titleHeader">
                      {{ variable.cota }}
                    </div>

                    <div class="titleHeader">
                      {{ variable.max }}
                    </div>

                    <div class="titleHeader">
                      {{ variable.min }}
                    </div>

                    <div class="titleHeader">
                      <img
                        v-on:click="
                          openImgPreview(
                            constURL + '/variables/' + variable.file
                          )
                        "
                        style="height: 50px"
                        :src="constURL + '/variables/' + variable.file"
                        alt=""
                        class="titleHeaderImg"
                      />
                    </div>

                    <div class="titleHeader">
                      <button
                        class="editar"
                        @click.prevent="updateVariable(variable.id)"
                      >
                        Editar
                      </button>
                      <button
                        class="delete"
                        @click.prevent="deleteVariable(variable.id)"
                      >
                        Deletar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <form
                class="attributeVariable"
                @submit.prevent="RegisterVariable"
              >
                <div class="inputIdentificacao">
                  <p>Identificação:</p>
                  <input
                    type="text"
                    v-model="list.description"
                    placeholder="B - Comprimento total (Tipo de Equipamento)"
                  />
                </div>

                <div class="inputCota">
                  <p>Nominal:</p>
                  <input
                    type="text"
                    v-model="list.cota"
                    step="any"
                    placeholder="12.5"
                  />
                </div>

                <div class="inputCota">
                  <p>Máximo:</p>
                  <input
                    type="text"
                    v-model="list.max"
                    step="any"
                    placeholder="12.6"
                  />
                </div>

                <div class="inputCota">
                  <p class="titleHeader">Mínimo:</p>
                  <input
                    type="text"
                    v-model="list.min"
                    step="any"
                    placeholder="12.3"
                  />
                </div>

                <div class="inputUpLoad" v-if="statusButtonImage">
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

                <button
                  class="inputUpLoad inputImageDelete"
                  @click="changeStatusButtonImage"
                  v-else
                >
                  Remover
                </button>

                <button type="submit" class="inputUpLoad">
                  <span> <i class="fas fa-plus"></i> Enviar</span>
                </button>

                <div
                  class="alertMax"
                  v-show="parseInt(list.max) < parseInt(list.min)"
                >
                  <p>OBS: O campo máximo tem que ser maior que o mínimo</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </form>
    </transition>
  </div>
  <button class="btnVa" @click="$emit('changeStatus')">VA</button>
</template>

<script>
import http from "../../services/productAnalysis/Variables";
import UpdateImagem from "../UploadImage/UpdateImagem.vue";

export default {
  components: { UpdateImagem },
  name: "Modal",
  emits: ["changeStatus"],
  data() {
    return {
      showUpdateImage: false,
      variables: [{}],
      actionButton: "Insert",
      dynamicTitle: "Add Data",
      comments: "",
      count: 0,
      list: {
        cod_sap: this.dataProduct.codigo_produto,
        cod_product: this.dataProduct.code_product,
        description: "",
        cota: 0,
        max: 0,
        min: 0,
        file: "",
      },
      statusButtonImage: true,
      imgObject: {},
      constURL: this.$store.state.urlImg,
      imagem: "",
      idImg: "",
    };
  },
  props: {
    dataProduct: Object,
  },

  created: async function () {
    this.$store.commit("$SETISLOADING");
    await http
      .FindVariableByCodeProduct(this.dataProduct.code_product)
      .then((res) => {
        this.variables = res.data.list;
      });
    this.$store.commit("$SETISLOADING");
  },

  methods: {
    async salvarImagem(img) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
          title: "title-swal-text",
        },
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      const formData = new FormData();

      formData.append("file", img);

      await http
        .UpdateImagem(this.idImg, formData)
        .then((res) => {
          Toast.fire({
            icon: "success",
            title: "Imagem inserida com sucesso!",
            background: "#A8D4FF",
          });
        })
        .catch((error) => {
          if (error.response.data.message) {
            Toast.fire({
              icon: "error",
              title: "Variável já possui imagem associada a ela!",
              background: "#FFA490",
            });
          }
        });
      this.showUpdateImage = false;
      this.reloadList();
    },
    closeModal() {
      this.showUpdateImage = false;
    },
    insertImageFile(e) {
      this.list.file = e.target.files[0];
      this.createImage(e.target.files[0]);
      // if (this.list.file != "") {
      //   this.statusButtonImage = false;
      // }
    },

    openImgPreview(imgPreview) {
      this.$swal.fire({
        // title: "Tudo certo!",
        // text: "A Startup foi cadastrada com Sucesso!",
        imageUrl: imgPreview,
        imageWidth: "auto",
        imageHeight: "auto",
        imageAlt: "Custom image",
      });
    },

    createImage(imgFile) {
      // let image = new Image()
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.imgObject = e.target.result;
      };

      reader.readAsDataURL(imgFile);
    },

    changeStatusButtonImage() {
      this.statusButtonImage = true;
      this.list.file = "";
      this.imgObject = "";
    },

    getComments(value) {
      this.comments = value;
    },

    async reloadList() {
      await http
        .FindVariableByCodeProduct(this.dataProduct.code_product)
        .then((res) => {
          this.variables = res.data.list;
        });
    },

    /* Register Variable */
    async RegisterVariable() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
          title: "title-swal-text",
        },
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });

      if (
        !this.list.description ||
        !this.list.cota ||
        !this.list.max ||
        !this.list.min
      ) {
        Toast.fire({
          icon: "error",
          title: "Preencha todos os campos!",
          background: "#FFA490",
        });
        return;
      }

      if (!this.list.file) {
        Toast.fire({
          icon: "error",
          title: "Imagem obrigatória!",
          background: "#FFA490",
        });
        return;
      }

      this.$store.commit("$SETISLOADING");

      const formData = new FormData();
      formData.append("description", this.list.description);
      formData.append("cod_product", this.list.cod_product);
      formData.append("cota", this.list.cota);
      formData.append("max", this.list.max);
      formData.append("min", this.list.min);
      formData.append("file", this.list.file);

      await http
        .CreateVariable(formData)
        .then((res) => {
          if (res.status === 201) {
            Toast.fire({
              icon: "success",
              title: "Variável criada com sucesso!",
              background: "#A8D4FF",
            });
            this.list.description = "";
            this.list.cota = "";
            this.list.max = "";
            this.list.min = "";
            this.changeStatusButtonImage();
          }
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
      this.reloadList();
      this.$store.commit("$SETISLOADING");
    },

    updateVariable(id) {
      this.idImg = id;
      this.showUpdateImage = true;
    },

    /* Delete Variable */
    deleteVariable: async function (id) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "white",
        customClass: {
          popup: "colored-toast",
          title: "title-swal-text",
        },
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        },
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      this.$store.commit("$SETISLOADING");
      await http
        .DeleteVariable(id)
        .then((res) => {
          if (res.data.message === "Deleted") {
            Toast.fire({
              icon: "success",
              title: "Variável deletada com sucesso!",
              background: "#A8D4FF",
            });
          }
        })
        .catch((error) => {
          if (error.response.status === 401) {
            Toast.fire({
              icon: "warning",
              title:
                "Esta variável está sendo utilizada. Não será possível deleta-la!",
              background: "#e3e745",
            });
          }
        });
      this.reloadList();
      this.$store.commit("$SETISLOADING");
    },
  },
};
</script>

<style scoped>
/* -------- Style Modal -------- */
.modal_mask {
  position: fixed;
  display: table;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  background: rgba(90, 90, 90, 0.911);
}

.modal_mask .modal_content {
  position: relative;
  width: 95%;
  height: 90vh;
  margin: 30px auto;
  background: var(--bg_white);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.variaveis {
  width: 100%;
  overflow-y: auto;
  position: relative;
  padding: 1rem 0;
  height: 60%;
}

.variaveis .headerVariaveis {
  width: 100%;
  display: flex;
  gap: 0.5rem;
}

.variaveis .headerVariavel {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.variaveis .headerVariavel .testeLi {
  width: 100%;
  display: flex;
  gap: 0.5rem;
  text-align: center;
  justify-content: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.075);
}

.variaveis .headerVariavel .titleHeader {
  position: relative;
  width: 33%;
  margin: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.titleHeaderImg {
  cursor: pointer;
}
.variaveis .headerVariaveis .titleHeader {
  position: relative;
  width: 33%;
  margin: 30px 0 30px 0;
  text-align: center;
  font-weight: 600;
  color: var(--black_text);
}

.modal_header {
  width: 95%;
  height: 10vh;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg_white);
  padding: 20px;
  z-index: 90;
  border-radius: 10px;
}

.modal_header h1 {
  color: var(--black_text);
  line-height: 30px;
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

.modal_header input:hover {
  background-color: var(--card_red);
  transform: rotate(180deg);
  border-radius: 50%;
  color: #fff;
}

.modal_mask .modal_content .modal_header .title_modal {
  width: 100%;
  margin: auto;
  padding: 0 2%;
  color: var(--main_primaryWhite);
  font-size: 1.5rem;
  display: flex;
  text-align: start;
  align-items: center;
  justify-content: space-between;
}

.btnVa {
  width: 100px;
  background: var(--card_orange);
  border: none;
  border-radius: 10px;
  padding: 0.2rem 0rem;
  color: var(--main_primaryWhite);
  text-align: center;
  cursor: pointer;
}

.title_modal input {
  width: 40px;
  height: 40px;
  padding: 5px 5px;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  color: var(--white);
  background-color: transparent;
  cursor: pointer;
  font-weight: 600;
  transition: 1s;
}

.title_modal input:hover {
  transform: rotate(180deg);
}

/* scroll  */

::-webkit-scrollbar {
  width: 10px;
  display: block;
}

/* Track */
::-webkit-scrollbar-track {
  background: #cccaca;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* -------- Style Variavel ------- */
#inputImage {
  display: none;
}

.modal_mask .modal_body {
  width: 98%;
  height: 90%;
  margin: auto;
  position: relative;
  margin-top: 10vh;
  top: 0;
  left: 0;
  padding: 0 15px;
  overflow: hidden;
}

.modal_mask .modal_body .inputsHeader {
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.3rem;
  margin-top: 20px;
}

.idInput,
.idMax,
.idMin,
.idCota {
  color: var(--black_text);
  font-weight: bold;
  font-size: 13px;
}

.modal_mask .modal_body .inputsHeader h4 {
  margin-top: 20px;
  font-size: 1.5rem;
  color: var(--black_text);
}

.input p {
  font-weight: bold;
  color: var(--black_text);
}

.modal_mask .modal_body .inputsHeader .input {
  width: 24%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .inputsHeader .input input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .inputsHeader .inputIdentificacao {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .inputsHeader .inputIdentificacao input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .inputsHeader .inputCota {
  width: 10%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .inputsHeader .inputCota input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .inputsHeader .inputUpLoad {
  width: 100px;
  height: 40px;
  background: var(--card_blue);
  border-radius: 5px;
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal_mask .modal_body .inputsHeader .inputUpLoad .fa-upload {
  color: var(--main_primaryWhite);
  font-size: 1rem;
  cursor: pointer;
}

.modal_mask .modal_body .attributeVariable {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
  border-top: 2px solid var(--black_text);
}

.modal_mask .modal_body .attributeVariable .inputIdentificacao {
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .attributeVariable .inputIdentificacao input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .attributeVariable .inputCota {
  width: 10%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .attributeVariable .inputCota input {
  width: 100%;
  border-radius: px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .attributeVariable .alertMax {
  background: var(--card_red);
  color: var(--bg_white);
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  border-radius: 0.5rem;
}

.modal_mask .modal_body .attributeVariable .inputUpLoad {
  width: 10%;
  height: 35px;
  background: var(--card_green);
  border-radius: 5px;
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main_primaryWhite);
  cursor: pointer;
  font-size: 15px;
  border: none;
}

.modal_mask .modal_body .attributeVariable .inputImage {
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: var(--card_blue);
}

.inputImageDelete {
  color: #fff;
  background-color: var(--card_red) !important;
}

.fa-paperclip {
  color: #fff;
}

.modal_mask .modal_body .titleBody {
  margin: 1rem 0;
  text-align: start;
  color: var(--black_text);
}

.modal_mask .modal_body .variavel_increment {
  width: 100%;
  height: 45%;
  overflow-y: auto;
  position: relative;
  padding: 0 0.5rem;
}

.delete {
  background-color: var(--card_red);
  color: var(--main_primaryWhite);
  width: 100px;
  height: 35px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 400;
}

.editar {
  background-color: var(--card_blue);
  color: var(--main_primaryWhite);
  width: 100px;
  height: 35px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 400;
}

.fas {
  margin-right: 10px;
}

@media (max-width: 770px) {
  .variaveis {
    font-size: 0.65rem;
  }
  .title_modal input {
    font-size: 20px;
    width: 50px;
    height: 50px;
  }

  .modal_mask .modal_body .titleBody {
    text-align: center;
  }

  .modal_mask .modal_body .inputsHeader {
    justify-content: center;
  }

  .modal_mask .modal_body .inputsHeader .input {
    width: 100%;
  }

  .modal_mask .modal_body .inputsHeader .inputIdentificacao {
    width: 100%;
  }

  .modal_mask .modal_body .inputsHeader .inputCota {
    width: 100%;
  }

  .modal_mask .modal_body .inputsHeader .inputUpLoad {
    width: 100%;
  }

  .modal_mask .modal_body .attributeVariable {
    padding: 0.3rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .modal_mask .modal_body .attributeVariable .inputIdentificacao {
    width: 100%;
  }

  .modal_mask .modal_body .attributeVariable .inputCota {
    width: 100%;
  }

  .modal_mask .modal_body .attributeVariable .inputUpLoad {
    width: 100%;
  }
}
</style>
