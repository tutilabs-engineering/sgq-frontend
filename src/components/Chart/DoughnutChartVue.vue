<template>
  <div>
    <apexchart
      width="100%"
      :type="options.chart.type"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarChartVue",
  data: function () {
    return {
      series: [44, 55, 59, 80, 100, 34, 44, 55, 59, 80, 12, 34],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "Start/0001",
          "Start/0002",
          "Start/0003",
          "Start/0004",
          "Start/0005",
          "Start/0006",
          "Start/0007",
          "Start/0008",
          "Start/0009",
          "Start/0010",
          "Start/0011",
          "Start/0012",
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%",
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
});
</script>
