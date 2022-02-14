<template>
    <div className="tableContent"> 

            <table cellpadding="0" cellspacing="0">
                <thead>
                   <tr><th colspan="5"><h2>Componentes</h2></th></tr>
                </thead>

                <thead>
                    <th>#</th>
                    <th>N° do Item</th>
                    <th>Descrição</th>
                    <th>UM</th>
                    <th>Planejado</th>
                </thead>

                <tbody>
                    <tr v-for="componente in componentes" :key="componente.id">
                        <td>{{componente.id}}</td>
                        <td>{{componente.numberItem}}</td>
                        <td>{{componente.descricao}}</td>
                        <td>{{componente.um}}</td>
                        <td>{{componente.planejado}}</td> 
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
export default {
    setup(){

    },
    name: 'TableCavidade',
    data() {
        return {
            componentes: [
                {id: 1, numberItem: '1.0.11.20.0045', descricao: 'TINTA 41A0 CZ ESC, 543 ATX PANT, 431C FUNDO BRANC-OSCAR FLUE', um: 'kg', planejado: '0,09'},
                {id: 2, numberItem: '1.0.02.06.0358', descricao: 'PRIMER 3M K520K', um: 'ML', planejado: '0,23'},
                {id: 3, numberItem: '2.1.05.01.0027', descricao: 'ORNAMENTO DO PAINEL FRONTAL DA UNIDADE EVAPORADORAM DE PLASTICO', um: 'PC', planejado: '900,00'},
                {id: 4, numberItem: '1.0.11.20.0025', descricao: 'LOGOTIPO LG AUTO-ADESIVO DE PLASTICO - MEZ653069906', um: 'PC', planejado: '900,00'},
            ]
        }
    }

}
</script>

<style scoped>

.tableContent {
    padding: 0px 25px 0px 25px;
    width: 100%;
    overflow-x: auto;
    padding: 20px;
    display: flex;
    justify-content: center;
}

.tableContent table {
    background-color: var(--card-color);
    width: 85%;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
    overflow-x: scroll;
    border-right: 7px solid var(--button-color-03);
}

table th {
    height: 50px;
    font-size: 17px;
    color: #292828;
    padding: 10px 10px 0 10px;
}

.tableContent tr {
    height: 60px;
}

table td {
    border-top: 0.4px solid rgba(0, 0, 0, 0.199);
}

.tableContent td {
    text-align: center;
    height: 30px;
    padding: 0 20px 0 20px;     
}


@media (max-width: 765px){
    .tableContent {
        padding-left: 30vh;
    }
}




</style>