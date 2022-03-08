<template>
  <DoughnutChart :chartData="testData" @chart-render="teste" />
</template>

<script>
import { defineComponent } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "DoughnutChartVue",
  components: { DoughnutChart },
  setup() {
    const testData = {
      labels: ["Paris", "Nîmes", "Toulon", "Perpignan", "Autre"],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
        },
      ],
    };

    function teste() {
      document.addEventListener("click", () => {
        console.log(testData.labels[0]);
      });
    }

    return { testData, teste };
  },
});
</script>
