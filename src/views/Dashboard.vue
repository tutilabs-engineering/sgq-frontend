<template>
  <div class="barCHart_content">
    <div class="barChart">
      <h3>Quantidade</h3>
      <BarChartVue :dashData="dashData" :dashTime="dashTime" />
    </div>
    <div class="barChart_filter">
      <div class="legend_chart">
        <div class="startUp_fill">
          <span class="circle_fill"></span>
          <p>Preenchimento</p>
        </div>
        <div class="metrology">
          <span class="circle_metrology"></span>
          <p>Metrologia</p>
        </div>
      </div>

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
      <h3>Falha de Perguntas Padrão</h3>
      <DoughnutChart />
    </div>
    <div class="barChart_filter">
      <div class="legend_chart">
        <div class="title_filter">
          <i class="fas fa-filter"></i>
          <p>Filtro</p>
        </div>
        <FilterDoughnutChart />
      </div>

      <div class="legend_chart_checkbox">
        <p>Falhas</p>
        <div class="checkBox_filter">
          <input type="checkbox" name="" id="" />
          <label for="">Falha 01</label>
        </div>
        <div class="checkBox_filter">
          <input type="checkbox" name="" id="" />
          <label for="">Falha 02</label>
        </div>
        <div class="checkBox_filter">
          <input type="checkbox" name="" id="" />
          <label for="">Falha 03</label>
        </div>
        <div class="checkBox_filter">
          <input type="checkbox" name="" id="" />
          <label for="">Falha 04</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from "../services/dashboard/Dashboard";
import BarChartVue from "../components/Chart/BarChartVue.vue";
import DoughnutChart from "../components/Chart/DoughnutChartVue.vue";
import FilterBarChart from "../components/Filters/FilterBarChart.vue";
import FilterDoughnutChart from "../components/Filters/FilterDoughnutChart.vue";
import dayjs from "dayjs";

export default {
  components: {
    FilterBarChart,
    BarChartVue,
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
    };
  },
  async created() {
    const result = await http.ListAllDataFilter({
      day: dayjs().format("YYYY-MM-DD"),
    });
    await result.data.list.map((item) => {
      this.dashData.startup.push(item.startup.quantitystartup);
      this.dashTime.push(item.date);
      this.dashData.metrology.push(item.metrology.quantitymetrology);
    });
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
  },
}
</script>

<style scoped>
input,
select {
  background: #e9dfdf;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}
.barCHart_content {
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 3rem;
}

.barCHart_content:first-child {
  margin-bottom: 2rem;
}

.barCHart_content .barChart {
  width: 100%;
  background: var(--bg_white);
  padding: 2rem;
}

.barCHart_content .barChart_filter {
  width: 100%;
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

@media (max-width: 768px) {
  .barCHart_content {
    grid-template-columns: 1fr;
  }

  .barCHart_content .barChart {
    padding: 2rem 0;
  }
}
</style>