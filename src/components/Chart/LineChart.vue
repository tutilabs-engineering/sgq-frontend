<template>
    <div id="chart">
        {{dashLineData}}
        <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
    props: {
        time: Array,
        dashLineData: Array,
    },

    watch: {
        time(newValue){
            this.chartOptions = {
                xaxis: {
                    categories: newValue
                }
            }
        }
    },


    data() {
        return {

            
            series: [
                {
                    name: "Aprovados",
                    data: [28, 29, 33, 36, 32, 32, 33]
                },
                {
                    name: "Aprovados Condicionalmente",
                    data: [12, 11, 14, 18, 17, 13, 13]
                },
                {
                    name: "Reprovados",
                    data: [10, 43, 64, 18, 14, 7, 10]
                }
            ],
            chartOptions: {
                chart: {
                    height: 500,
                    type: 'line',
                    dropShadow: {
                        enabled: false,
                        color: '#000',
                        top: 18,
                        left: 7,
                        blur: 10,
                        opacity: 0.2
                    },
                    toolbar: {
                        show: false
                    }
                },
                colors: ['green', 'yellow', 'red'],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Teste de Título',
                    align: 'left'
                },
                grid: {
                    borderColor: '#e7e7e7',
                    row: {
                        colors: ['#ffff', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                markers: {
                    size: 1
                },
                xaxis: {
                    type: "datetime",
                    categories: this.time,
                    title: {
                        text: 'Data'
                    }
                },
                yaxis: {
                    title: {
                        text: 'Quantidade'
                    },
                    min: 5,
                    max: 90
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                }
            },
        }
    }

}
</script>

<style>
</style>