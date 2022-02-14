<template>
<div>
<line-chart :chart-data="labels">

</line-chart>
</div>
</template>

<script>
import { Bar } from "vue-chartjs"

export default {
  name: "Grafico",
  extends: Bar,

  data: () => ({
    chartdata: {
      labels: ["January", "February"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 20]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted(){
    this.renderChart(this.chartdata, this.options);
  },
}


</script>


<style>

</style>