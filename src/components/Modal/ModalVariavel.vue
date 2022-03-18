<template>
  <div>
    <transition name="model">
      <form action="">
        <div class="modal_mask">
          <div class="modal_content">
            <div class="modal_header">
              <div class="title_modal">
                <h4>Variável</h4>
                <input
                  type="button"
                  value="X"
                  colorButton="red"
                  @click="$emit('changeStatus')"
                />
              </div>
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
                <div class="inputsHeader" v-for="index in count" :key="index">
                  <h4>{{ index }}</h4>
                  <div class="inputIdentificacao">
                    <p>IDENTIFICAÇÃO:</p>
                    <input type="text" />
                  </div>

                  <div class="inputCota">
                    <p>COTA:</p>
                    <input type="text" />
                  </div>

                  <div class="inputCota">
                    <p>MÁX:</p>
                    <input type="text" />
                  </div>

                  <div class="inputCota">
                    <p>MIN:</p>
                    <input type="text" />
                  </div>

                  <div class="inputUpLoad">
                    <label for="inputImage"
                      ><i class="fas fa-upload"></i
                    ></label>
                    <input ref="file" type="file" id="inputImage" />
                  </div>
                </div>
              </div>

              <div class="attributeVariable">
                <div class="inputIdentificacao">
                  <p>IDENTIFICAÇÃO:</p>
                  <input type="text" v-model="variavel.identificacao" />
                </div>

                <div class="inputCota">
                  <p>COTA:</p>
                  <input type="text" v-model="variavel.cota" />
                </div>

                <div class="inputCota">
                  <p>MÁX:</p>
                  <input type="text" v-model="variavel.max" />
                </div>

                <div class="inputCota">
                  <p>MIN:</p>
                  <input type="text" v-model="variavel.min" />
                </div>

                <div class="inputUpLoad" @click="incrementVariable">
                  <label><i class="fas fa-plus"></i></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </transition>
  </div>
  <button class="btnVa" @click="$emit('changeStatus')">VA</button>
</template>

<script>

import http from "../../services/productAnalysis/Variables"

export default {
  components: {},
  name: "Modal",
  emits: ["changeStatus"],
  data() {
    return {
      actionButton: "Insert",
      dynamicTitle: "Add Data",
      comments: "",
      count: 0,
      variavel: {
        identificacao: "",
        cota: "",
        max: "",
        min: "",
      },
    };
  },
  props: {
    dataProduct: Object,
  },
  methods: {
    getComments(value) {
      this.comments = value;
    },
    incrementVariable() {
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
        this.variavel.identificacao === "" ||
        this.variavel.cota === "" ||
        this.variavel.max === "" ||
        this.variavel.min === ""
      ) {
        Toast.fire({
          icon: "error",
          title: "Preencha todos os campos!",
          background: "#FFA490",
        });
      }
    },
  },
  created: async function (){
    await http.FindVariableByCodeProduct(this.dataProduct.codigo_produto).then( (res) => {
    console.log(res.data)
    })
  }
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
  width: 80%;
  height: 90%;
  margin: 30px auto;
  background: var(--bg_white);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}

.modal_mask .modal_content .modal_header {
  width: 100%;
  height: 3.5rem;
  line-height: 3.5rem;
  background: var(--bg_green);
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


/* -------- Style Variavel ------- */
#inputImage {
  display: none;
}

.modal_mask .modal_body {
  width: 98%;
  height: 90%;
  margin: auto;
  position: relative;
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

.modal_mask .modal_body .inputsHeader h4 {
  margin-top: 20px;
  font-size: 1.5rem;
}

.modal_mask .modal_body .inputsHeader .input {
  width: 24%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .inputsHeader .input input {
  width: 100%;
  border-radius: 10px;
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
  width: 10%;
  height: 40px;
  background: var(--card_blue);
  border-radius: 20px;
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal_mask .modal_body .inputsHeader .inputUpLoad .fa-upload {
  color: var(--main_primaryWhite);
  font-size: 1.4rem;
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
  border-top: 2px solid black;
  padding-top: 20px;
}

.modal_mask .modal_body .attributeVariable .inputIdentificacao {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal_mask .modal_body .attributeVariable .inputIdentificacao input {
  width: 100%;
  border-radius: 10px;
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
  border-radius: 10px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.modal_mask .modal_body .attributeVariable .inputUpLoad {
  width: 10%;
  height: 40px;
  background: var(--card_green);
  border-radius: 20px;
  margin-top: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--main_primaryWhite);
  cursor: pointer;
  font-size: 1.4rem;
}

.modal_mask .modal_body .attributeVariable .inputUpLoad .fa-plus {
  cursor: pointer;
}

.modal_mask .modal_body .titleBody {
  margin: 1rem 0;
  text-align: start;
}

.modal_mask .modal_body .variavel_increment {
  width: 100%;
  height: 45%;
  overflow-y: auto;
  position: relative;
  padding: 0 0.5rem;
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
