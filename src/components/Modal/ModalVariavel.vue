<template>
  <div>
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
                    :value="dataProduct.codigo_produto"
                  />
                </div>

                <div class="input">
                  <p>Produto</p>
                  <input type="text" readonly :value="dataProduct.descricao" />
                </div>

                <div class="input">
                  <p>Cód. Cliente</p>
                  <input type="text" readonly value="XXXXXXXX-XX" />
                </div>

                <div class="input">
                  <p>Descrição Cliente</p>
                  <input type="text" readonly :value="dataProduct.cliente" />
                </div>
                
              </div>

              <div class="titleBody">
                <h3>VARIÁVEL</h3>
              </div>

              <div class="variavel_increment">
                <div
                  class="inputsHeader"
                  v-for="(variable, index) in variables"
                  :key="index"
                >
                  <h4>{{ index + 1 }}</h4>
                  <div class="inputIdentificacao">
                    <p class="idInput">Identificação</p>
                    <p>{{ variable.description }}</p>
                  </div>

                  <div class="inputCota">
                    <p class="idCota">COTA:</p>
                    <p>{{ variable.cota }}</p>
                  </div>

                  <div class="inputCota">
                    <p class="idMax">MÁX:</p>
                    <p>{{ variable.max }}</p>
                  </div>

                  <div class="inputCota">
                    <p class="idMin">MIN:</p>
                    <p>{{ variable.min }}</p>
                  </div>

                  

                  <div class="delete" @click="deleteVariable(variable.id)">
                    <span>Deletar</span>
                  </div>

                </div>
              </div>

              <form
                class="attributeVariable"
                @submit.prevent="RegisterVariable"
              >
                <div class="inputIdentificacao">
                  <p>IDENTIFICAÇÃO:</p>
                  <input type="text" v-model="list.description" placeholder="Identificação 01"/>
                </div>

                <div class="inputCota">
                  <p>COTA:</p>
                  <input type="text" v-model="list.cota" step="any" placeholder="12.5"/>
                </div>

                <div class="inputCota">
                  <p>MÁX:</p>
                  <input type="text" v-model="list.max" step="any" placeholder="12.6"/>
                </div>

                <div class="inputCota">
                  <p>MIN:</p>
                  <input type="text" v-model="list.min" step="any" placeholder="12.3"/>
                </div>
                
                <div class="inputUpLoad" v-if="statusButtonImage">
                    
                    <label for="inputImage" class="inputImage"
                      ><i class="fas fa-paperclip"></i
                    > <span>Anexar</span></label>
                    
                    <input ref="file" type="file"  class="inputUpLoad" id="inputImage" @change="insertImageFile"/>
 
                </div>
                <button class="inputUpLoad inputImageDelete" @click="changeStatusButtonImage" v-else>Remover</button>

                <button type="submit" class="inputUpLoad">
                  <span> <i class="fas fa-plus"></i> Enviar</span>
                </button>

                <div class="alertMax" v-show="list.max < list.min">
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

export default {
  components: {},
  name: "Modal",
  emits: ["changeStatus"],
  data() {
    return {
      variables: [{}],
      actionButton: "Insert",
      dynamicTitle: "Add Data",
      comments: "",
      count: 0,
      list: {
        cod_sap: this.dataProduct.codigo_produto,
        cod_product: this.dataProduct.codigo_produto,
        description: "",
        cota: 0,
        max: 0,
        min: 0,
        file: "",
      },
      statusButtonImage: true
    };
  },
  props: {
    dataProduct: Object,
  },

  created: async function () {
    this.$store.commit("$SETISLOADING");
    await http
      .FindVariableByCodeProduct(this.dataProduct.codigo_produto)
      .then((res) => {
        this.variables = res.data.list;
      });
    this.$store.commit("$SETISLOADING");
  },

  methods: {

    insertImageFile (e) {
      this.list.file = e.target.files[0]
      if(this.list.file != "") {
         this.statusButtonImage = false
      }
    },

    changeStatusButtonImage() {
      this.statusButtonImage = true
      this.list.file = "";
    },

    getComments(value) {
      this.comments = value;
    },

    async reloadList() {
      await http
        .FindVariableByCodeProduct(this.dataProduct.codigo_produto)
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

      const inputDescription = this.list.description;
      const inputCota = this.list.cota;
      const inputMax = this.list.max;
      const inputMin = this.list.min;

      this.$store.commit("$SETISLOADING");

      const formData = new FormData()
      formData.append("description", this.list.description)
      formData.append("cod_product", this.list.cod_product)
      formData.append("cota", this.list.cota)
      formData.append("max", this.list.max)
      formData.append("min", this.list.min)
      formData.append("file", this.list.file)

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
            this.changeStatusButtonImage()
          }

        })
        .catch((error) => {
          if (!inputDescription || !inputCota || !inputMax || !inputMin) {
            Toast.fire({
              icon: "error",
              title: "Preencha todos os campos!",
              background: "#FFA490",
            });
          }
          return error;
        });
      this.reloadList();
      this.$store.commit("$SETISLOADING");
    },

    /* Delete Variable */
    async deleteVariable(id) {
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
      await http.DeleteVariable(id).then((res) => {
        if (res.data.message === "Deleted") {
          Toast.fire({
            icon: "success",
            title: "Variável deletada com sucesso!",
            background: "#A8D4FF",
          });
        }
      }).catch( (error) => {
        if(error.response.status === 401){
            Toast.fire({
            icon: "warning",
            title: "Esta variável está sendo utilizada. Não será possível deleta-la!",
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
  z-index: 1000;
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


.modal_header {
  width: 95%;
  height: 10vh;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding:20px;
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
    width: 0px;
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
}

.modal_mask .modal_body .inputsHeader {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-top: 20px;
}

.idInput, .idMax, .idMin, .idCota {
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
  gap: 1rem;
  margin-top: 20px;
  flex-wrap: wrap;
  border-top: 2px solid var(--black_text);
  padding-top: 20px;
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

.modal_mask .modal_body .attributeVariable .inputImage{
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

.modal_mask .modal_body .variavel_increment .delete {
  background-color: var(--card_red);
  color: var(--main_primaryWhite);
  width: 100px;
  height: 35px;
  margin-top: 20px;
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
    padding: 2rem 0;
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
