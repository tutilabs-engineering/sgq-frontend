<template>
  <div class="content-novaStartup" v-if="!isFilled">
    <div class="cards-status">
      <fieldset>
        <span class="statup-header">Situação</span>
        <span class="startup-preenchida">
          {{ verifyOpenStartup(data_startup) }}</span
        >
      </fieldset>

      <fieldset>
        <span class="statup-header">Preench.</span>
        <span class="startup-preenchida">
          {{ verifyFillStartup(data_startup) }}</span
        >
      </fieldset>

      <fieldset>
        <span class="statup-header">Startup</span>
        <span class="startup-preenchida">{{ code_startup }}</span>
      </fieldset>
    </div>

    <StartupCadastroPreenchido
      @returnCodeOp="ReturnCodeOp"
      :headerPreenchida="headerPreenchida"
    />
    <TableCavidadePreenchido :techniqueInfo="techniqueInfo" />
    <TableComponentesPreenchido :componentsInfo="componentsInfo" />
    <ListaPerguntasPreenchida
      :id_startup="id_startup"
      :qtdeCavidade="techniqueInfo.cavity"
      :startupData="data_startup"
    />
    <!-- Verificar Status de Metrologia -->
    <div :class="metrologyStyle">
      {{ verifyMetrology(data_startup) }}
    </div>

    <!-- <BtnStartupCreate @returnFillStatus="changedShowQuestions" /> -->
    <div class="group-buttons">
      <div class="btns-options">
        <button
          class="btn-cancel btn"
          @click="() => this.$router.push({ name: 'Startup' })"
        >
          Cancelar
        </button>
        <div v-if="verifyMetrologyStatus(data_startup)">
          <button
            class="btn-save btn"
            @click="saveFillReportStartup(data_startup)"
          >
            Finalizar
          </button>
        </div>
        <div v-else>
          <button
            class="btn-save-fill btn"
            @click="saveFillReportStartup(data_startup)"
          >
            Preencher
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="content-novaStartup" v-else>
    <div style="display: flex; gap: 20px; padding-right: 20px">
      <fieldset>
        <span class="statup-header">Situação</span>
        <span class="startup-preenchida">
          {{ verifyOpenStartup(data_startup) }}</span
        >
      </fieldset>

      <fieldset>
        <span class="statup-header">Status</span>
        <span class="startup-preenchida" v-if="data_startup.status.id == 1"
          >Aprovado</span
        >
        <span
          class="startup-nao-preenchida"
          v-else-if="data_startup.status.id == 2"
          >Reprovado</span
        >
        <span
          class="startup-preenchida-com-condicional"
          v-else-if="data_startup.status.id == 3"
          >Aprovado condicionalmente</span
        >
      </fieldset>
      <fieldset>
        <span class="statup-header">Startup</span>
        <span class="startup-preenchida">{{ code_startup }}</span>
      </fieldset>
    </div>

    <StartupCadastroPreenchido
      @returnCodeOp="ReturnCodeOp"
      :headerPreenchida="headerPreenchida"
    />

    <div v-for="code in code_secondary" :key="code.id">
      <SecondaryOP :codeSecondary="code" />
    </div>

    <TableCavidadePreenchido :techniqueInfo="techniqueInfo" />
    <TableComponentesPreenchido :componentsInfo="componentsInfo" />

    <ListaPerguntas :startupData="data_startup" />

    <div
      v-if="data_startup.metrology_items.length > 0"
      class="metrologyInStartup"
    >
      <fieldset>
        <legend>Metrologia</legend>
        <div class="form">
          <div class="input">
            <label for="client">Horário Inicial</label>
            <input
              type="text"
              name="client"
              id="client"
              placeholder="ex: Yamaha"
              :value="
                formatHour(data_startup.metrology[0].metrologyHistory.startDate)
              "
              disabled
            />
          </div>

          <div class="input">
            <label for="client">Horário Final</label>
            <input
              type="text"
              name="client"
              id="client"
              placeholder="ex: Yamaha"
              :value="
                formatHour(data_startup.metrology[0].metrologyHistory.endDate)
              "
              disabled
            />
          </div>

          <div class="input">
            <label for="client">Técnico Agregado</label>
            <input
              type="text"
              name="client"
              id="client"
              placeholder="ex: Yamaha"
              :value="data_startup.metrology[0].metrologyHistory.user.name"
              disabled
            />
          </div>
        </div>

        <TableMetrologiaDetalhes
          :variables="data_startup.metrology_items"
          :inputStatus="true"
        />
      </fieldset>
    </div>
  </div>
</template>

<script>
import SecondaryOP from "../components/SecondaryOP/SecondaryOP.vue";
import TableCavidadePreenchido from "../components/TableCavidadePreenchido/TableCavidadePreenchido.vue";
import TableComponentesPreenchido from "../components/TableComponentesPreenchido/TableComponentesPreenchido.vue";
import StartupCadastroPreenchido from "../components/StartupCadastroPreenchido/StartupCadastroPreenchido.vue";
import ListaPerguntasPreenchida from "../components/ListaPerguntasPreenchida/ListaPerguntasPreenchida.vue";
import ListaPerguntas from "../components/ListaPerguntas/ListaPerguntas.vue";
import TableMetrologiaDetalhes from "../components/TableMetrologiaDetalhes/TableMetrologiaDetalhes.vue";

import dayjs from "dayjs";
import http from "../services/startup";
import startup from "../services/startup";

export default {
  data() {
    return {
      metrologyStyle: "alert-metrology-aproved",
      id_startup: this.$route.query.id,
      verifyAMetrology: null,
      headerPreenchida: {
        code_op: "",
        client: "",
        codeClient: "",
        product: "",
        codeProduct: "",
        quantity: "",
        machine: "",
        product_mold: "",
        date: "",
        startTime: "",
        nqa: 0,
      },

      techniqueInfo: {
        cavity: "",
        cycle: "",
      },
      dataInfo: {
        code_op: "",
        user_id: "",
      },

      code_secondary: [],
      code_startup: "",

      isFilled: false,
      data_startup: {},

      componentsInfo: [],
      showQuestions: true,

      perguntasRespondidas: this.data_startup,
    };
  },
  components: {
    StartupCadastroPreenchido,
    TableCavidadePreenchido,
    TableComponentesPreenchido,
    ListaPerguntasPreenchida,
    ListaPerguntas,
    SecondaryOP,
    TableMetrologiaDetalhes,
  },

  created: async function () {
    await http.findReportStartupById(this.id_startup).then((res) => {
      this.data_startup = res.data;
      this.code_startup = this.data_startup.code_startup;
      this.headerPreenchida.code_op = this.data_startup.op.code_op;
      this.headerPreenchida.client = this.data_startup.op.client;
      this.headerPreenchida.codeClient = this.data_startup.op.code_client;
      this.headerPreenchida.product = this.data_startup.op.desc_product;
      this.headerPreenchida.codeProduct = this.data_startup.op.code_product;
      this.headerPreenchida.machine = this.data_startup.op.machine;
      this.headerPreenchida.product_mold = this.data_startup.op.product_mold;
      this.headerPreenchida.day = this.data_startup.day;
      this.headerPreenchida.start_time = this.data_startup.created_at;
      this.headerPreenchida.nqa = this.data_startup.nqa;
      this.techniqueInfo.cavity = this.data_startup.op.cavity;
      this.techniqueInfo.cycle = this.data_startup.op.cycle;

      this.componentsInfo = this.data_startup.op.components;

      this.isFilled = this.data_startup.filled;

      this.code_secondary = res.data.op.added_op;
    });

    await http.listDataByCodeOp(this.headerPreenchida.code_op).then((res) => {
      this.headerPreenchida.quantity = res.data.results[0].PlannedQty;
    });
  },
  methods: {
    formatDate(date) {
      date = date.slice(0, -14);
      this.year = date.slice(0, -6);
      this.month = date.slice(5, -3);
      this.day = date.slice(-2);
      return (date = `${this.day}/${this.month}/${this.year}`);
    },

    formatHour(date) {
      return dayjs(date).format("HH:mm:ss - DD/MM/YYYY");
    },

    verifyOpenStartup(startup) {
      if (startup.open && startup.filled) {
        return "Rodando";
      } else if (!startup.open && startup.filled) {
        return "Fechado";
      } else {
        return "Aguardando";
      }
    },

    verifyFillStartup(startup) {
      // Se startup não estiver fechada e não foi preenchida nenhuma vez
      if (startup.filled == false && !startup.report_startup_fill) {
        return "Em Aberto";
      } else if (startup.filled == false && startup.report_startup_fill) {
        return "Em Andamento";
      }

      return "Preenchido";
    },

    verifyMetrologyStatus(startup) {
      if (startup.metrology) {
        if (startup.metrology.length > 0) {
          if (!startup.metrology[0].metrology) {
            // metrologia preenchida
            return true;
          }
        }
      }
      return false;
    },
    verifyMetrology(startup) {
      if (startup.metrology) {
        if (startup.metrology.length <= 0) {
          this.verifyAMetrology = true;
          return "Variaveis em Metrologia inexistente, está Startup pode ser fechada diretamente.";
          // Nao Existe metrologia
        }
        if (startup.metrology.length > 0) {
          if (startup.metrology[0].metrology) {
            // Verificar se a metroliga está fechada
            // True ela esta aberta
            //  False ela está fechada
            this.verifyAMetrology = false;
            this.metrologyStyle = "alert-metrology";
            return "Variaveis em Metrologia Não preenchidas, está Startup não pode ser fechada porém os dados podem ser salvos.";
          }
          this.verifyAMetrology = true;
          return "Variaveis em Metrologia preenchidas, está Startup pode ser fechada.";
        }
      }
      this.verifyAMetrology = true;
      return "Variaveis em Metrologia inexistente, está Startup pode ser fechada diretamente.";
    },
    async saveFillReportStartup(startup) {
      //
      this.$store.commit("$SETISLOADING");

      const data = this.$store.getters.$GETDATAFILLREPORTSTARTUP;

      const form = new FormData();

      data.default_question.map(item => {
        if (item.file != null) {
          form.append(`${item.fk_default_question}`, item.file);
          item.file = "";
        }
      });

      data.specific_questions.map(item => {
        if (item.file != null) {
          form.append(`${item.fk_specific_question}`, item.file);
          item.file = "";
        }
      });

      form.append("img_1", data.img_1);
      form.append("img_2", data.img_2);
      form.append("img_3", data.img_3);
      form.append("default_questions", JSON.stringify(data.default_question));
      form.append(
        "specific_questions",
        JSON.stringify(data.specific_questions)
      );
 


      await http.fillReportStartup(this.id_startup, form).then(async (res)=>{
        if (this.verifyAMetrology) {
        const piq = {
          id: startup.id,
          number_startup: startup.code_startup,
          number_op: startup.code_op,
          code_product: startup.op.code_product,
          description_product:  startup.op.desc_product,
          mold: startup.op.product_mold,
          machine: startup.op.machine,
          description_client: startup.op.client,
          code_client: startup.op.code_client,
          userWhoFill: {
            id: startup.userWhoCreate.id,
            name: startup.userWhoCreate.name,
            email: startup.userWhoCreate.email,
            register: startup.userWhoCreate.register,
            is_enabled: true,
            role: {
              id: startup.userWhoCreate.role.id,
              description: startup.userWhoCreate.role.description,
            },
          },
          attributeQuestionJSON: data.specific_questions,
          variablesQuestionJSON: startup.metrology_items,
          status: 1,
          nqa: this.data_startup.nqa
        };
        await http.createPIQ(piq)
      }
      })

      this.$store.commit("$SETISLOADING");

      this.$swal
        .fire({
          title: "Tudo certo!",
          text: "A Startup foi preenchida com sucesso!",
          imageUrl: "/img/allright.gif",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image"
        })
        .then(() => {
          this.$router.push({ name: "Startup" });
        });
    },

    changedShowQuestions(e) {
      this.showQuestions = e;
    },

    ReturnCodeOp: async function (code_op) {
      this.dataInfo.code_op = code_op;
      function GetDateTime() {
        function GetDate() {
          const date = new Date();
          let day = date.getDay();
          let month = date.getMonth() + 1;
          const year = date.getFullYear();

          if (day !== 1) {
            day = day - 1;
          }
          if (day.toString().length === 1) {
            day = `0${day}`;
          }
          if (month < 10) {
            month = `0${month}`;
          }

          return `${year}-${month}-${day}`;
        }
        function GetStartHour() {
          const date = new Date();

          let hour = date.getHours();
          let minutes = date.getMinutes();

          if (hour < 10) {
            return `0${hour}:${minutes}`;
          }
          return `${hour}:${minutes}`;
        }
        return { GetDate, GetStartHour };
      }

      const dataOp = await http.listDataByCodeOp(code_op);
      const data = dataOp.data.data_op;
      this.headerInfo.client = data.client;
      this.headerInfo.codeClient = data.code_client;
      this.headerInfo.product = data.product;
      this.headerInfo.codeProduct = data.code_product;
      this.headerInfo.date = GetDateTime().GetDate();
      this.headerInfo.startTime = GetDateTime().GetStartHour();

      //techniqueData

      // //componentsInfo

      data.components.map((item) => {
        this.componentsInfo.push({
          description: item.description,
          item_number: item.ItemCode,
          planned: item.PlannedQty,
          um: item.UM,
        });
      });

      this.$store.commit("$SETDATACREATESTARTUP", {
        techniqueData: this.techniqueInfo,
        components: this.componentsInfo,
      });
    },
  },
};
</script>

<style scoped>
.form {
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: var(--bg_white);
  border-radius: 10px 10px 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
  color: var(--black_text);
}
.metrologyInStartup {
  padding-right: 40px;
}

.cards-status {
  display: flex;
  gap: 20px;
  padding-right: 20px;
}

.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  color: var(--black_text);
  border: none;
  transition: 1s;
  outline: none;
  font-size: 15px;
  height: 52px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.39);
}

.alert-metrology-aproved {
  width: 100%;
  padding: 10px;
  background: var(--card_green);
  border-radius: 4px;
  color: #fff;
  margin-bottom: 4px;
}
.alert-metrology {
  width: 100%;
  padding: 10px;
  background: var(--card_red);
  border-radius: 4px;
  color: #fff;
  margin-bottom: 4px;
}

fieldset {
  margin-left: 20px;
  width: 100%;
  border: 1px solid rgba(37, 36, 36, 0.281);
  font-size: 20px;
  font-weight: 600;
  background-color: var(--bg_white);
  color: var(--black_text);
}

legend {
  font-size: 10px;
  font-weight: 600;
  color: var(--black_text);
}

.startup-nao-preenchida {
  color: var(--card_red);
  font-size: 0.85rem;
}

.statup-header {
  font-size: 0.85rem;
}

.startup-preenchida {
  color: var(--card_green);
  font-size: 0.85rem;
}

.startup-preenchida-com-condicional {
  color: var(--flag_yellow);
  font-size: 0.85rem;
}

.content-novaStartup {
  width: 100%;
}

.group-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.btns {
  padding: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
}

.btn-fill-save,
.btns-options {
  grid-column: 4;
}

.btns-options {
  display: flex;
  gap: 10px;
  /* justify-content: space-between; */
}

.btn-save,
.btn-save-fill .btn-cancel {
  width: 79%;
}

.btn {
  height: 50px;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.1rem;
  color: var(--main_primaryWhite);
}

.btn-save {
  background-color: var(--card_green);
  width: auto;
}

.btn-save-fill {
  background-color: var(--card_blue);
  width: auto;
}

.btn-fill-save {
  background-color: var(--card_blue);
}

.btn-cancel {
  background-color: var(--card_red);
}

@media (max-width: 48em) {
  fieldset {
    margin-left: 0;
    width: 100%;
    text-align: center;
  }
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

@media (max-width: 1114px) and (min-width: 766px) {
  .legend {
    text-align: center;
  }
  .form {
    padding: 12px;
    grid-template-columns: auto;
  }

  .cards-status {
    display: flex;
    gap: 20px;
    padding-right: 0;
  }
}

@media (max-width: 765px) {
  .cards-status {
    display: flex;
    gap: 20px;
    padding-right: 0;
  }

  legend {
    text-align: center;
  }
  .form {
    padding: 12px;
    grid-template-columns: 1fr;
  }

  .metrologyInStartup {
    padding-right: 0px;
  }
}
</style>
