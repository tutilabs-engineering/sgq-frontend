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
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
        },
        colors: ["#3FC36D", "#E3E745"],
        xaxis: {
          type: "datetime",
          categories: [
            "03/01/2011 GMT",
            "03/02/2011 GMT",
            "03/03/2011 GMT",
            "03/04/2011 GMT",
            "03/05/2011 GMT",
            "03/06/2011 GMT",
          ],
        },
      },
      series: [
        {
          name: "PREENCHIMENTO",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "METROLOGIA",
          data: [13, 23, 20, 8, 13, 27],
        },
      ],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
    };
  },
});
</script>
