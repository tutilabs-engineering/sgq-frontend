<template>
  <div>

    <apexchart width="100%" :type="options.chart.type" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "BarChartVue",
  props: {
    dashData: Array,
    dashTime: Array,
  },

  data: function () {
    return {
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: false,
          toolbar: {
            show: false,
          },
        },
        colors: ["#3FC36D"],
        xaxis: {
          type: "datetime",
          categories: this.dashTime
        },

        title: {
          text: 'Quantidade de Startups Preenchidas',
            floating: false,
            offsetY: 0,
            offsetX: 0,
            align: 'center',
            margin: 10,
            style: {
              fontSize: '16px',
              color: '#444444',
              fontFamily: 'Poppins'
            }
        },
      },

      
      series: [
        {
          name: "Startups Preenchidas",
          data: this.dashData.startup,
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
  watch: {
    dashTime(newValue) {

      this.options = {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        colors: ["#3FC36D"],
        xaxis: {
          type: "datetime",
          categories: newValue
        },
      }
      this.series = [
        {
          name: "Startups Preenchidas",
          data: this.dashData.startup,
        },
      ];
    }
  }


});
</script>