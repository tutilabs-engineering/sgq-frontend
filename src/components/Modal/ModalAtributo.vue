<template>
  <div>
    <transition name="model">
      <form action="">
        <div class="modal_mask">
          <div class="modal_content">
            <div class="modal_header">
              <h1>Tabela de Atributos</h1>
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
                  <input type="text" readonly :value="dataProduct.name_product" />
                </div>

                <!-- <div class="input">
                  <p>Cód. Cliente</p>
                  <input type="text" readonly value="xxxxxx-xxx" />
                </div>

                <div class="input">
                  <p>Descrição Cliente</p>
                  <input type="text" readonly :value="dataProduct.cliente" />
                </div> -->
              </div>

              <div class="perguntas">
                <div class="headerPerguntas">
                  <div class="titleHeader">Pergunta</div>
                  <div class="titleHeader">Atenção</div>
                  <div class="titleHeader">Status</div>
                  <div class="titleHeader">Opções</div>
                </div>

                <div class="headerPergunta">
                  <div
                    v-show="index !== 0"
                    v-for="todo in listQuestions"
                    :key="todo.id"
                    class="testeLi"
                    :id="index"
                  >
                    <div class="titleHeader">
                      {{ todo.question }}
                    </div>

                    <div class="titleHeader">
                      <input
                        @click="changeAttention(todo.id, !todo.attention)"
                        type="checkbox"
                        :name="index"
                        v-model="todo.attention"
                      />
                      
                    </div>
                    <div class="titleHeader">
                 
                      <input type="button"
                        @click.prevent="changeStatus($event, todo.id)"
                        :id="index"
                        value="Habilitado"
                        class="btnH"
                        v-if="todo.is_enabled"
                      >
                        <input type="button"
                        v-else
                        @click.prevent="changeStatus($event, todo.id)"
                        :id="index"
                        value="Desabilitado"
                        class="btnD"
                      >
             
                    </div>

                    <div class="titleHeader">

                      <input type="button"
                        @click.prevent="deleteQuestion(todo.id)"
                        :id="index"
                        value="Deletar"
                        class="btn-delete"
                      >
                      
             
                    </div>
                    
                  </div>
                </div>
              </div>
              <div class="incrementAtributo">
                <form action="" @submit.prevent="CreateNewQuestion">
                  <h3>ADICIONAR PERGUNTA:</h3>
                  <div class="inputAdd">
                    <input type="text" v-model="dataAttribute.question"/>
                    <button class="btnHabilitar">
                      <i class="fas fa-plus"></i> Adicionar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </form>
    </transition>
  </div>

  <button class="btnAt" @click="$emit('changeStatus')">AT</button>
</template>

<script>


import http from "../../services/productAnalysis/Attributes"

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
      listQuestions: [],
      todos: [{}],
      nextTodoId: 0,
      textBtn: "Habilitar",
      btnDesabilitado: false,
      dataAttribute: {
        cod_sap: "(Remover isso do back-end)",
        cod_product: this.dataProduct.code_product,
        attention: true,
        question: "",
        is_enabled: true
      }
    };
  },
  props: {
    dataProduct: Object,
  },
  methods: {

    
    renderListAttribute: async function () {
      await http.FindAttributesByCodeProduct(this.dataProduct.code_product).then( (res) => {
      if(res) {
         this.listQuestions = res.data.list 
      }
    })
    },

    deleteQuestion: async function(id){
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
      await http.DeleteQuestionById(id);
      this.renderListAttribute()
      this.$store.commit("$SETISLOADING");
      Toast.fire({
              icon: "error",
              title: "Pergunta deletada!",
              background: "#FFA490",
            });
    },

    getComments(value) {
      this.comments = value;
    },

    CreateNewQuestion: async function() {
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
      
      try {
        const response = await http.CreateAttribute(this.dataAttribute);
        
        this.renderListAttribute()
        this.dataAttribute.question = ""
        Toast.fire({
                icon: "success",
                title: "Pergunta criada com sucesso!",
                background: "#A8D4FF",
              });
        this.$store.commit("$SETISLOADING");
        return response;
      } catch {
        Toast.fire({
              icon: "error",
              title: "Pergunta já existente!",
              background: "#FFA490",
            });
        
        this.$store.commit("$SETISLOADING");
      }
    },
    
    trocaStatus() {
      this.textBtn = "Desabilitado";
      this.btnDesabilitado = true;
    },

    async changeAttention(id, attentionValue) {
      this.$store.commit("$SETISLOADING");
      await http.ChangeAttentionByAttributes(id, attentionValue)
      this.$store.commit("$SETISLOADING");
    },

    async changeStatus($event,id) {
      this.$store.commit("$SETISLOADING");
        var btnTarget =$event.target;
        if(btnTarget.value === "Habilitado"){
          btnTarget.value="Desabilitado"
          btnTarget.className="btnD"
          await http.ChangeStatusByAttributes(id,  false)
          this.$store.commit("$SETISLOADING");
      
      }else{
        btnTarget.value="Habilitado"
        btnTarget.className="btnH"
        await http.ChangeStatusByAttributes(id,  true)
        this.$store.commit("$SETISLOADING");
      }
    }
  },

  created: async function (){
    this.$store.commit("$SETISLOADING");
    await http.FindAttributesByCodeProduct(this.dataProduct.code_product).then( (res) => {
      if(res) {
         this.listQuestions = res.data.list
         
        this.$store.commit("$SETISLOADING");
      }
       
    })

  }


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

.modal_mask .modal_body {
  width: 98%;
  height: 90%;
  margin: auto;
  margin-top: 10vh;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 15px;
}

.btnAt {
  width: 100px;
  background: var(--card_blue);
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

.input p {
  font-weight: bold;
  color: var(--black_text);
}

.title_modal input:hover {
  transform: rotate(180deg);
}

/*   scroll */

::-webkit-scrollbar {
    width: 0px;
}

/* -------- Style Atributo ------- */
#inputImage {
  display: none;
}

.modal_mask .modal_body .inputsHeader {
  width: 100%;
  display: flex;
  justify-content: start;
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
  border-radius: 5px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.perguntas {
  width: 100%;
  overflow-y: auto;
  position: relative;
  padding: 1rem 0;
  height: 60%;
}

.perguntas .headerPerguntas {
  width: 100%;
  display: flex;
  gap: 0.5rem;
}

.perguntas .headerPergunta {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.perguntas .headerPergunta .testeLi {
  width: 100%;
  display: flex;
  gap: 0.5rem;
  text-align: center;
  justify-content: center;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.075);
}
.perguntas .headerPergunta .titleHeader {
  position: relative;
  width: 33%;
  margin: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.perguntas .headerPerguntas .titleHeader {
  position: relative;
  width: 33%;
  margin: 30px 0 30px 0;
  text-align: center;
  font-weight: 600;
  color: var(--black_text);
}

.perguntas .headerPergunta .titleHeader .btnHabilitar {
  width: 33%;
  padding: 0.3rem 0;
  background: var(--btn_blue);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: var(--main_primaryWhite);
  font-weight: bold;
  letter-spacing: 3px;
}

.perguntas .headerPergunta .titleHeader .btnDesabilitar {
  width: 40%;
  padding: 0.3rem 0;
  background: var(--btn_gray);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: var(--main_primaryWhite);
  font-weight: bold;
  letter-spacing: 3px;
}

.incrementAtributo {
  width: 100%;
  padding: 1rem;
  border-top: 1px solid black;
  margin-top: 20px;
  text-align: start;
}

.incrementAtributo .inputAdd {
  width: 100%;
  display: flex;
  margin-top: 10px;
}

.incrementAtributo .inputAdd input {
  position: relative;
  width: 50%;
  border-radius: 5px 0 0 5px;
  border: 1px solid rgb(173, 173, 173);
  padding: 0.2rem 1rem;
  outline: none;
}

.incrementAtributo .inputAdd button {
  width: 100px;
  height: 45px;
  color: var(--main_primaryWhite);
  background: var(--bg_green);
  padding: 0.25rem;
  text-align: center;
  border-radius: 0 5px 5px 0;
  border: none;
  cursor: pointer;
}

.btnH, .btnD, .btn-delete {
  width: 100px;
  border: none;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  outline: none;
  cursor: pointer;
}

.btnH {
  background-color: var(--card_blue);
}

.btnD {
  background-color: var(--card_red);
}

.btn-delete {
  background-color: var(--card_red);
}



@media (max-width: 768px) {
  .modal_mask .modal_body .inputsHeader .input {
    width: 49%;
  }

  .title_modal input {
    font-size: 20px;
    width: 50px;
    height: 50px;
  }

  .incrementAtributo .inputAdd input {
    width: 100%;
  }
}

@media (max-width: 425px) {
  .title_modal input {
    font-size: 20px;
    width: 50px;
    height: 50px;
  }

  .modal_mask .modal_body .inputsHeader .input {
    width: 100%;
  }

  .perguntas .headerPerguntas .titleHeader {
    width: 100%;
    font-weight: bold;
  }
}
</style>
