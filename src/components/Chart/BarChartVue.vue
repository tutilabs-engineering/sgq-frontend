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
          stacked: true,
          toolbar: {
            show: true,
          },
        },
        colors: ["#3FC36D", "#E3E745"],
        xaxis: {
          type: "datetime",
          categories: this.dashTime
        },
      },
      series: [
        {
          name: "PREENCHIMENTO",
          data: this.dashData.startup,
        },
        {
          name: "Metrologia",
          data: this.dashData.metrology,
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
    dashTime(newValue){
  
          this.options ={
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
          categories: newValue
        },
      }
       this.series = [
        {
          name: "Preenchimento",
          data: this.dashData.startup,
        },
           {
          name: "Metrologia",
          data: this.dashData.metrology,
        }
      ];
    }
    }
     

});
</script>