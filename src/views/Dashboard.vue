<template>

  <div class="cards">
    <Card
        status="APROVADOS"
        :qtde="startupsManagement.approved"
        img="fas fa-check-square"
        colore="#43CC74"
        link="/startups-aprovadas" textContentPopper="Clique para ver mais detalhes"
      />
      <Card
        status="CONDICIONAL"
        :qtde="startupsManagement.conditional"
        img="fas fa-tasks"
        colore="#FFAE3D"
        link="/startups-andamentos" textContentPopper="Clique para ver mais detalhes"
      />
      <Card
        status="REPROVADOS"
        :qtde="startupsManagement.disapproved"
        img="fas fa-times"
        colore="#FF5349"
        link="/startups-reprovadas" textContentPopper="Clique para ver mais detalhes"
      />
      <Card
        status="FECHADOS"
        :qtde="startupsManagement.closed"
        img="fas fa-door-closed"
        colore="#5F9DFF"
        link="#" textContentPopper=""
      />
  </div>
  <div class="barCHart_content">
    <div class="barChart">
      <BarChartVue :dashData="dashData" :dashTime="dashTime" />
    </div>
    <div class="barChart_filter">
      <!-- <div class="legend_chart">
        <div class="startUp_fill">
          <span class="circle_fill"></span>
          <p>Preenchimento</p>
        </div>
        <div class="metrology">
          <span class="circle_metrology"></span>
          <p>Metrologia</p>
        </div>
      </div> -->

      <div class="legend_chart">
        <div class="title_filter">
          <i class="fas fa-filter"></i>
          <p>Filtro</p>
        </div>
        <FilterBarChart @getSelectedConfig="getSelectedConfig" />
      </div>
    </div>
  </div>

  <div class="barCHart_content">
    <div class="barChart">
      <DoughnutChart :dados="dadosDash2" />
    </div>
    <div class="barChart_filter">
      <div class="legend_chart">
        <div class="title_filter">
          <i class="fas fa-filter"></i>
          <p>Filtro</p>
        </div>
        <FilterDoughnutChart @getSelectedSecondConfig="getSelectedSecondConfig" />
      </div>

    </div>
  </div>

</template>

<script>
import httpCards from '../services/startup/index'
import http from "../services/dashboard/Dashboard";
import BarChartVue from "../components/Chart/BarChartVue.vue";
import Card from "../components/Card/Card.vue"
import DoughnutChart from "../components/Chart/DoughnutChartVue.vue";
import FilterBarChart from "../components/Filters/FilterBarChart.vue";
import FilterDoughnutChart from "../components/Filters/FilterDoughnutChart.vue";
import dayjs from "dayjs";

export default {
  components: {
    FilterBarChart,
    BarChartVue,
    Card,
    DoughnutChart,
    FilterDoughnutChart,
  },
  name: "Dashboard",
  data() {
    return {
      cdate: dayjs().format("YYYY-MM-DD"),
      dashData: {
        startup: [],
        metrology: [],
      },
      dashDataMetrologyQuantity: [],
      dashTime: [],
      dadosDash2: [],
      startupsManagement: {
        approved: "",
        conditional: "",
        disapproved: "",
        closed: "",
      }
    };
  },
  async created() {
    await this.$store.commit("$SETISLOADING");

    const result = await http.ListAllDataFilter({
      day: dayjs().format("YYYY-MM-DD"),
    });

    await result.data.list.map((item) => {
      this.dashData.startup.push(item.startup.quantitystartup);
      this.dashTime.push(item.date);
      this.dashData.metrology.push(item.metrology.quantitymetrology);
    });

    const result2 = await http.DefaultQuestionsDisapproved({
      date_start: dayjs().format("YYYY-MM-DD"),
      date_end: dayjs().add(6, "day").format("YYYY-MM-DD")
    })

    this.dadosDash2.push(
      result2.data.cavidade,
      result2.data.ciclo,
      result2.data.datadorMoldeAtualizado,
      result2.data.embalagemConformeFit,
      result2.data.etiquetaEmbalagemDeAcordoProdutoCliente,
      result2.data.fichaInstrucaoDeTrabalho,
      result2.data.fichaTecnicaInjecao,
      result2.data.fluxoOperacao,
      result2.data.masters,
      result2.data.materiaPrima,
      result2.data.padraoHomologado,
      result2.data.pesoMedioLiquido,
      result2.data.planoAtencao,
      result2.data.planoInspecaoQualidade,
      result2.data.posticoDoMolde,
      result2.data.recursosMaoDeObra,
    );

    const listCount = await httpCards.listCountOfStartupsByStatus()
    this.startupsManagement.approved = listCount.data.approved
    this.startupsManagement.disapproved = listCount.data.disapproved
    this.startupsManagement.conditional = listCount.data.conditional
    this.startupsManagement.closed = listCount.data.closed


    await this.$store.commit("$SETISLOADING");

  },

  methods: {
    async getSelectedConfig(data) {
      const time = [];
      const startup = [];
      const metrology = [];

      const result = await http.ListAllDataFilter({
        day: data.date,
        machine: data.machine,
        code_product: data.product,
        code_client: data.client,
        workShift: data.workShift
      });

      await result.data.list.map((item) => {
        startup.push(item.startup.quantitystartup);
        time.push(item.date);
        metrology.push(item.metrology.quantitymetrology);
      });

      this.dashData.startup = startup;
      this.dashTime = time;
      this.dashData.metrology = metrology;

    },

    async getSelectedSecondConfig(dataDate) {
      await this.$store.commit("$SETISLOADING");

      const result2 = await http.DefaultQuestionsDisapproved(dataDate);
      this.dadosDash2 = []
      this.dadosDash2.push(
        result2.data.cavidade,
        result2.data.ciclo,
        result2.data.datadorMoldeAtualizado,
        result2.data.embalagemConformeFit,
        result2.data.etiquetaEmbalagemDeAcordoProdutoCliente,
        result2.data.fichaInstrucaoDeTrabalho,
        result2.data.fichaTecnicaInjecao,
        result2.data.fluxoOperacao,
        result2.data.masters,
        result2.data.materiaPrima,
        result2.data.padraoHomologado,
        result2.data.pesoMedioLiquido,
        result2.data.planoAtencao,
        result2.data.planoInspecaoQualidade,
        result2.data.posticoDoMolde,
        result2.data.recursosMaoDeObra,
      );

      await this.$store.commit("$SETISLOADING");

    }
  },
}
</script>

<style scoped>
.cards {
  margin: 10px 0 40px 0;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 0;
}

@media(max-width:1100px) {
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }
}


input,
select {
  background: #e9dfdf;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  outline: none;
}

.barCHart_content {
  width: 100%;
  display: flex;
  gap:30px;
  margin-top: 30px;
}

.barCHart_content:first-child {
  margin-bottom: 2rem;
}

.barCHart_content .barChart {
  width: 75%;
  background: var(--bg_white);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(37, 36, 36, 0.281);
}

.barCHart_content .barChart_filter {
  width: 25%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.barCHart_content .barChart_filter .legend_chart {
  width: 100%;
  background: var(--bg_white);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid rgba(37, 36, 36, 0.281);
  border-radius: 10px;
}

.barCHart_content .barChart_filter .legend_chart .startUp_fill,
.metrology,
.title_filter,
.checkBox_filter {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.barCHart_content .barChart_filter .legend_chart .startUp_fill .circle_fill {
  width: 30px;
  height: 30px;
  background: var(--bg_green);
  border-radius: 50%;
}

.barCHart_content .barChart_filter .legend_chart .metrology .circle_metrology {
  width: 30px;
  height: 30px;
  background: var(--flag_yellow);
  border-radius: 50%;
}

.barCHart_content .barChart_filter .legend_chart_checkbox {
  width: 100%;
  background: var(--bg_white);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.barCHart_content .barChart_filter .legend_chart .checkBox_filter {
  overflow: auto;
}

@media (max-width: 1000px) {
  .barCHart_content {
    flex-direction: column-reverse;
  }

  .barCHart_content .barChart_filter {
    width: 100%;
  }

  .barCHart_content .barChart {
    width: 100%;
    padding: 2rem 0;
  }
}
</style>