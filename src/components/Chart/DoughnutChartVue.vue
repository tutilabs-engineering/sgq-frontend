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
  props : {
    dados : Array
  },
  watch : {
    dados(newValue){
       console.log(newValue);
       this.series = newValue

    }
  },
  data: function () {
    return {
      series: this.dados,
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: [
          "Cavidade",
          "Ciclo",
          "Matéria-prima",
          "Masters",
          "Peso médio liquido",
          "Ficha de instrução de trabalho",
          "Ficha técnica de injeção",
          "Plano de inspeção de qualidade",
          "Plano de atenção",
          "Padrão homologado",
          "Fluxo da operação",
          "Postiço do molde",
          "Datador do molde atualizado",
          "Recursos mão de obra",
          "Embalagem conforme FIT",
          "Etiqueta da embalagem de acordo com o produto cliente"

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
