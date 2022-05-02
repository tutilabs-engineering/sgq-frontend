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
        // xaxis: {
        //   type: "datetime",
        //   categories: this.dashDate,
        // },
      },
      series: [
        {
          name: "PREENCHIMENTO",
          data: this.dashData
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
  props : {
    dashData : Array
  },

  watch:{
    dashData(newValue){
   this.series = [{
          name: "Preenchimento",
          data: newValue,
        },
        // {
        //   name: "Metrologia",
        //   data: newValue, 
      // }
        ]
 
},



  }

});
</script>
