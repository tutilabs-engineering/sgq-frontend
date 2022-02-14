<template>
    <div className="tableContent"> 

            <table cellpadding="0" cellspacing="0">
                <thead>
                   <tr><th colspan="4"><h2>Dados Técnicos</h2></th></tr>
                </thead>

                <thead>
                    <th>Cavidade</th>
                    <th>Ciclo</th>
                </thead>

                <tbody>
                    <tr>
                        <td>4</td>
                        <td>34.3</td>
                    </tr>
                </tbody>
            </table>
        </div>
</template>

<script>
export default {
    setup(){

    },
    name: 'TableCavidade'

}
</script>

<style scoped>

.tableContent {
    padding: 0px 25px 0px 25px;
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
    border-right: 7px solid var(--button-color-02);
}

table th {
    font-size: 17px;
    color: var(--font-color);
    padding: 10px 10px 10px 10px;
}

.tableContent tr {
    height: 60px;
}

table td {
    text-align: center;
    border-top: 0.4px solid rgba(0, 0, 0, 0.199);
}

.tableContent td {
    text-align: center;
    height: 30px;
    padding: 0 10px 0 10px;     
}




</style>