<template>
  <div v-if="modalNovaOp" >
    <transition name="model" >
        <div class="modal_mask" >
          <div class="modal_content">
            <div class="modal_header">
              <h1>Adicionar nova Startup</h1>
              <input
                  type="button"
                  value="X"
                  colorButton="red"
                  @click="$emit('openModalNovaOp')"
                />

            </div>
          
            <div class="content-modal-op">

              <div class="formOrdemProducao">

                <div class="input inputOp">
                  <label for="client"><i class="fas fa-filter"></i>Buscar OP</label>
                  <input type="text" name="client" id="op" placeholder="ex: 2345" v-model="code_op">
                </div>

                <button type="submit" class="btn btn-search" @click="searchByCodeOp(code_op)"><i class="fas fa-search"></i> Buscar</button>
              </div>

              <fieldset class="info-modal-op">

                <div class="input">
                  <label for="op">Código OP</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP" v-model.lazy="code_op">
                </div>


                <div class="input">
                  <label for="op">Cód. Startup</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP" :value="startup.code_startup" disabled>
                </div>

                <div class="input">
                  <label for="op">Máquina</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP" v-model="headerInfo.codeProduct">
                </div>

                <div class="input">
                  <label for="op">Molde</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP">
                </div>

                <div class="input">
                  <label for="op">Cliente</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP" v-model.lazy="headerInfo.codeProduct">
                </div>

                <div class="input">
                  <label for="op">Código Cliente</label>
                  <input type="text" name="client" id="op" placeholder="Digite o código OP" v-model.lazy="headerInfo.codeProduct">
                </div>

     
              </fieldset>

              <TableComponentes :componentsInfo="componentsInfo"/>

              <fieldset class="historic-op">
                <legend>Histórico de Op's desta startup</legend>
                <li><i class="fa fa-calendar-check"></i> <span>123-234-200-4322-01</span></li>
                <li><i class="fa fa-calendar-check"></i> <span>123-234-200-4322-02</span></li>

              </fieldset>

              

              <div class="btns">
                  <button class="btn btn-cancel" @click="$emit('openModalNovaOp')">cancelar</button>
                  <button class="btn btn-save" @click="returnInfoOp">salvar</button>
                </div>

              

              
            </div>

          </div>
        </div>
    </transition>
  </div>

  <i class="fas fa-plus-circle" @click="$emit('openModalNovaOp')"></i>
  

</template>

<script>

import TableComponentes from "../TableComponentes/TableComponentes.vue";


import http from "../../services/startup/index";


export default {
  components: {TableComponentes},
  name: "Modal",
  emits: ["openModalNovaOp"],
  data() {
    return {
      headerInfo: {
        client: "",
        codeClient: "",
        product: "",
        codeProduct: "",
        quantity: "",
        date: "",
        startTime: "",
        endTime: "",
      },

      code_op: "",

      dataNewOpInStartup: {
        code_op: 48954,
        machine: "",
        product_mold: "",
        client: "",
        code_client: "",
        components: [
          {
            description: "",
            item_number: "",
            planned: "",
            um: ""
          },
        ]
      }

    };
  },

  props: {
    startup: String,
    titleModal: String,
    id: Number,
    modalNovaOp: String,
  },

  methods: {
 
    returnInfoOp: async function() {
      await http.listDataByCodeOp(this.code_op).then( (res) => {
        console.log(res.data.results[0]);
        this.headerInfo.client = res.data.results[0].CardName;
        this.headerInfo.codeClient = res.data.results[0].U_CodCliente;
        this.headerInfo.product = res.data.results[0].ProdName;
        this.headerInfo.codeProduct = res.data.results[0].ItemCode;

        this.componentsInfo = []

        res.data.results[0].Itens.map( (item) => {
          this.componentsInfo.push( {
            description: item.Descrição,
            item_number: item.ItemCode,
            planned: item.PlannedQty,
            um: item.InvntryUom
          })
        })

      })
    },

    saveNewOpInStartup: async function(){
      console.log(this.startup);
      // await http.addOpInStartup(id, this.dataNewOpInStartup).then( (res) => {
      //   console.log("deu certo", res);
      // }).catch( (error) => {
      //   console.log(error);
      // })
    }
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
  background: rgba(90, 90, 90, 0.513);
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

.modal_mask .modal_body {
  width: 98%;
  height: 90%;
  margin: auto;
  margin-top: 11vh;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 15px;
}

.title_modal input {
  padding: 5px 10px;
  border-radius: 20%;
  border: none;
  color: var(--white);
  background-color: rgb(223, 97, 97);
  cursor: pointer;
  font-weight: 600;  
}

.title_modal input:hover {
  background-color: rgb(148, 7, 7);
}

fieldset {
  border: none;
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 30px;

}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}



/* Style ScrollBar -------- */

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

.fa-plus-circle {
  color: var(--card_orange);
  font-size: 25px;
  cursor: pointer;
}
.content-modal-op {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.inputOp {
  margin-top: 10vh;
  width: 33%;
}

.formOrdemProducao {
  padding-left: 20px;
}

.info-modal-op {
  padding: 20px;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
}

.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 70px;
  padding: 5px;
  border-radius: 5px 5px 0 0;
}

.input label {
  font-weight: 600;
  font-size: 18px;
  color: var(--black_text);
}

.input input {
  background-color: transparent;
  border: none;
  transition: 1s;
  outline: none;
  font-size: 15px;
  height: 52px;
  width: 100%;
  border-bottom: 2px solid rgba(128, 128, 128, 0.39);
}

.btns {
  width: 100%;
  grid-column-start: 2;
  margin-top: 30px;
  display: flex;
  justify-content: end;
  padding: 40px;
}

.btn {
  color: var(--black_text);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer !important;
  height: 50px;
  max-width: 15vw;
  min-width: 15vw;
  margin: 5px;
  border-radius: 5px;
  border: none;
  grid-column-start: 4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-search {
  background-color: var(--card_green);
  color: #fff;
}

.btn-save {
  background-color: var(--card_blue);
  color: #fff;
}

.btn-cancel {
  color: #fff;
  background-color: var(--card_red);
}

.historic-op {
  padding-top: 20px;
  width: 100%;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.397);
}

.historic-op li {
  margin-top: 10px;
  list-style: none;
}

.fa {
  color: var(--card_green);
}


@media (max-width: 768px) {

  .inputOp {
      margin-top: 10vh;
      width: 100%;
  }
  .modal_mask .modal_body .inputsHeader .input {
    width: 49%;
  }

  .modal_content {
    height: 90% !important;
  }

  .info-modal-op, .historic-op {
    width: 100%;
    height: auto;
    border-left: 0;
  }

  .info-modal-op {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .content-modal-op {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  .title_modal input {
    width: 4vw;
    height: 4vw;
    font-size: 2vw;
  }

  .incrementAtributo .inputAdd input {
    width: 100%;
  }

  .fa-plus-circle {
    margin: 20px;
  }

  .btns {
    justify-content: center;
  }

  .btn {
    max-width: 90vw;
    min-width: 15vw;
    width: 100%;
  }
}

@media (max-width: 425px) {
  .title_modal input {
    width: 7vw;
    height: 7vw;
    font-size: 4vw;
  }

  .info-modal-op {
    grid-template-columns: 1fr !important;
  }

  .input {
    width: 100%;
  }

  .btns {
    grid-column-start: auto;
    justify-content: center;
  }

  .modal_mask .modal_body .inputsHeader .input {
    width: 100%;
  }

}
</style>
