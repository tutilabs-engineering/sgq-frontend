<template>
  <div class="btns">
    <!-- <button class="btn-fill-save btn" v-on:click="fillValue">Preencher + Opções</button> -->
    <div class="btns-options">
      <button class="btn-cancel btn" @click="cancelNewStartup">Cancelar</button>
      <button class="btn-save btn" @click="saveNewStartup">
        Criar Startup
      </button>
    </div>
  </div>
</template>

<script>
import http from "../../services/startup/index";

export default {
  name: "BtnStartupCreate",
  data() {
    return {
      fillStatus: false,
      isQuestionOpen: false,
      machineInSap: false
    };
  },

  methods: {
    fillValue() {
      if (this.$store.getters.$GETCODEOP == "") {
        const Toast = this.$swal.mixin({
          toast: true,
          position: "top-right",
          iconColor: "#ff5349",
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
        Toast.fire({
          icon: "warning",
          title: "Informe a Ordem de Produção",
          background: "#fff",
        });
      } else {
        this.fillStatus = !this.fillStatus;
        this.$emit("returnFillStatus", this.fillStatus);
      }
    },

    cancelNewStartup: async function () {
      this.$swal
        .fire({
          title: "Você realmente deseja cancelar a criação desta Startup?",
          text: "Você pode voltar depois",
          icon: "warning",
          reverseButtons: true,
          showCancelButton: true,
          cancelButtonColor: "#d33",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Sim, desejo cancelar",
          cancelButtonText: "Não",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$router.push({ name: "Startup" });
          }
        });
    },

    saveNewStartup: async function () {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "#3fc36d",
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
      if (this.$store.getters.$GETCODEOP == "") {
        Toast.fire({
          icon: "warning",
          title: "Informe a Ordem de Produção",
          background: "#fff",
        });
      } else {
        if (this.fillStatus) {
          // Campo de perguntas aberto
          this.ValidateQtyAnsweredQuestions();
        } else {
          const data = await this.$store.getters.$GETDATACREATESTARTUP;

          await http.listAllMachines().then( (res) => {
              res.data.results.map( async (item) => {

                if(item.VisResCode === await data.header.machine) {
                  this.machineInSap = true
                }
              })
            })
          if (data && this.machineInSap) {
            

            await http
              .createNewStartup(data)
              .then((res) => {
                Toast.fire({
                  icon: "success",
                  title: "Salvo com sucesso",
                  background: "#fff",
                });

                this.$swal
                  .fire({
                    title: "Tudo certo!",
                    text: "A Startup foi cadastrada com Sucesso!",
                    imageUrl: "/img/allright.gif",
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: "Custom image",
                  })
                  .then(() => {
                    this.$router.push({ name: "Startup" });
                  });
              })
              .catch((error) => {
                if (
                  error.response.data.message ===
                  "Already exists a startup open with this code_op"
                ) {
                  Toast.fire({
                    icon: "warning",
                    title:
                      "Já existe uma Startup aberta com esta Ordem de Produção",
                    background: "#e3e745",
                  });
                } else if (
                  error.response.data.message ===
                  "Does not exists variables in this product"
                ) {
                  Toast.fire({
                    icon: "warning",
                    title:
                      "Não existem variáveis cadastradas para este produto",
                    background: "#e3e745",
                  });
                } else if (
                  error.response.data.message ===
                  "A ultima Startup precisa ser preenchida."
                ) {
                  Toast.fire({
                    icon: "warning",
                    title:
                      "A ultima Startup com está maquina precisa ser preenchida.",
                    background: "#e3e745",
                  });
                } else if (
                  error.response.data.message ===
                  "Already exists a startup closed and approved with this code_op"
                ) {
                  Toast.fire({
                    icon: "warning",
                    title: "Existem Startup fechada ou aprovada com esta OP.",
                    background: "#e3e745",
                  });
                } else {
                  Toast.fire({
                    icon: "warning",
                    title: "Verifique se todos os campos foram preenchidos",
                    background: "#e3e745",
                  });
                }
                if (error.response.status === 401) {
                  Toast.fire({
                    icon: "warning",
                    title:
                      "Apenas Analista, Metrologista e Inspetor podem cadastrar uma Startup",
                    background: "#e3e745",
                  });
                }
              });
              this.machineInSap = false
          } else {
            Toast.fire({
                    title: "FORMATO DE MÁQUINA INVÁLIDA. POR FAVOR, UTILIZE APENAS AS OPÇÕES LISTADAS!",
                    background: "#ff1230",
            });
          }
        }
      }
      this.$store.commit("$SETISLOADING");
    },

    ValidateQtyAnsweredQuestions() {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-right",
        iconColor: "#3fc36d",
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
        this.$store.getters.$GETQTDEPERGUNTASPADROES != 16 ||
        this.$store.getters.$GETQTDEPERGUNTASESPECIFICAS !=
          this.$store.getters.$GETQTDEESPECIFICAS
      ) {
        Toast.fire({
          icon: "warning",
          title: "Verifique se todas as Perguntas foram respondidas",
          background: "#E8EB7C",
        });
      } else {
        Toast.fire({
          icon: "success",
          title: "Preenchimento realizado com sucesso",
          background: "#fff",
        });
      }
    },
  },
};
</script>

<style scoped>
.btns {
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}

.btn-fill-save,
.btns-options {
  grid-column: 3;
}

.btns-options {
  display: flex;
  justify-content: space-between;
}

.btn-save,
.btn-cancel {
  width: 49%;
}

.btn {
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;
  color: var(--main_primaryWhite);
}

.btn-save {
  background-color: var(--card_green);
}

.btn-fill-save {
  background-color: var(--card_blue);
}

.btn-cancel {
  background-color: var(--card_red);
}

@media (max-width: 48em) {
  .btns {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    margin-top: 20px;
  }

  .btn-fill-save,
  .btns-options {
    grid-column: 1;
  }
}
</style>
