<template>

    
    <div className="tableContent"> 

        


            <table v-if="statusTable" cellpadding="0" cellspacing="0">

                    <div class="btns">
                        <button @click="statusTable=true" class="btn startup-opened">Startups Abertas</button>
                        <button @click="statusTable=false" class="btn startup"> Startups Fechadas</button>
                    </div>
    
                <thead>
                    <th><button @click="statusTable=true" class="btn startup-opened">Startups Abertas</button></th>
                    <th><button @click="statusTable=false" class="btn startup"> Startups Fechadas</button></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>

                </thead>
                
                <thead>
                    <th>Cód.Startup</th>
                    <th>Produtos</th>
                    <th>Cliente</th>
                    <th>Máquina</th>
                    <th>Data</th>
                    <th>Inspetor</th>
                    <th>Opções</th>
                </thead>

                <tbody>
                    <tr v-for="item in itemsAbertos" :key="item.id">
                        <td style="display:none"></td>
                        <td data-title="Codigo">{{item.codigo}}</td>
                        <td data-title="Produto">{{item.produto}}</td>
                        <td data-title="Cliente">{{item.cliente}}</td>
                        <td data-title="Maquina">{{item.maquina}}</td>
                        <td data-title="Data">{{item.data}}</td>
                        <td data-title="Inspetor">{{item.inspetor}}</td>
                        <td class="lastTd" data-title="Opcoes"><div className="opcoes">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="dropdown-content">

                                <button className="btnOpcoes"><i class='fas fa-edit'></i></button>
                                <button className="btnOpcoes"><i class="fas fa-file-excel"></i></button>
                                <button className="btnOpcoes"><i class="fas fa-door-closed"></i></button> 
                            
                            </div>
                            
                        </div></td>
                    </tr>
                </tbody>
            </table>
           
            <table  v-else cellpadding="0" cellspacing="0">

                <div class="btns">
                        <button @click="statusTable=true" class="btn startup">Startups Abertas</button>
                        <button @click="statusTable=false" class="btn startup-closed"> Startups Fechadas</button>
                    </div>
                
                <thead>
                    <th><button @click="statusTable=true" class="btn startup">Startups Abertas</button></th>
                    <th><button @click="statusTable=false" class="btn startup-closed"> Startups Fechadas</button></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    
                </thead>
                <thead>
                    <th>Cód.Startup</th>
                    <th>Produtos</th>
                    <th>Cliente</th>
                    <th>Máquina</th>
                    <th>Data</th>
                    <th>Inspetor</th>
                    <th>Opções</th>
                </thead>

                <tbody>
                    <tr v-for="item in itemsFechados" :key="item.id">
                        <td style="display:none"></td>
                        <td data-title="Codigo">{{item.codigo}}</td>
                        <td data-title="Produto">{{item.produto}}</td>
                        <td data-title="Cliente">{{item.cliente}}</td>
                        <td data-title="Maquina">{{item.maquina}}</td>
                        <td data-title="Data">{{item.data}}</td>
                        <td data-title="Inspetor">{{item.inspetor}}</td>
                        <td class="lastTd" data-title="Opcoes"><div className="opcoes">
                            <i class="fas fa-ellipsis-h"></i>
                            <div class="dropdown-content">

                                <button className="btnOpcoes"><i class='fas fa-edit'></i></button>
                                <button className="btnOpcoes"><i class="fas fa-file-excel"></i></button>
                                <button className="btnOpcoes"><i class="fas fa-door-closed"></i></button> 
                            
                            </div>
                            
                        </div></td>
                    </tr>
                </tbody>

            </table>

        </div>
</template>

<script>


export default{
    setup() {
        
    },
    name: 'Table',
    data() {
        return {
            itemsAbertos: [
                {id: 1, produto: 'produto D', codigo: '521', cliente: 'Honda',maquina: 'Injetora', data: '22-03-2022', inspetor: 'Jorge'},
                {id: 2, produto: 'produto E', codigo: '523', cliente: 'Yamaha', maquina: 'Injetora', data: '23-03-2022', inspetor: 'Renato'},
                {id: 3, produto: 'produto F', codigo: '242', cliente: 'Tutu', maquina: 'Injetora', data: '24-03-2022', inspetor: 'Guilherme'},
        ], 
            itemsFechados: [
                {id: 1, produto: 'produto A', codigo: '241', cliente: 'Yamaha',maquina: 'Injetora', data: '21-02-2022', inspetor: 'Jorge'},
                {id: 2, produto: 'produto B', codigo: '598', cliente: 'Yamaha', maquina: 'Injetora', data: '21-03-2022', inspetor: 'Jorge'},
                {id: 3, produto: 'produto C', codigo: '242', cliente: 'Tutu', maquina: 'Injetora', data: '22-01-2022', inspetor: 'Guilherme'},
        ],
    statusTable: true,
    }
    }

}

</script>

<style scoped>

.dropdown-content
{
    display: none;
    background-color: #fff;
    border-radius: 10px;
    min-width: 50px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 15px 5px;
    z-index: 1;
    
}

.opcoes:hover .dropdown-content {
    display: block;
}

    

.tableContent {
    padding: 0px 25px 0px 25px;
    margin-top: 40px;
    overflow-x: auto;
    padding: 0 40px 40px 40px;
}

.tableContent table {
    background-color: var(--card-color);
    width: 100%;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
    overflow-x: scroll;

    
}

table th {
    height: 50px;
    font-size: 17px;
    color: #292828;
    padding: 10px 10px 0 10px;
    
    
}



.tableContent tr {
    height: 100px;
}

table td {
    
    border-top: 0.4px solid rgba(0, 0, 0, 0.199);
}

.tableContent td {
    text-align: center;
    height: 50px;
    padding: 0 10px 0 10px;     
}

.tdStatus {
    color: #fff;
    width: 200px;
    height: 30px;
    border-radius: 5px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* BTNS */


.menuBtn {
    width: 100%;
    display: flex;
    height: 80px;
    align-items: center;
    justify-content: space-between;
}

.btn {
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    color: #292828;
    font-size: max(0.8rem, 1vw);
    font-weight: bold;
    border: none;
    font-weight: 300px;

}

.startup-opened, .startup-closed {
    background-color: var(--main-color);
    border: 3px solid var(--main-color);
    color: #fff;
}


.opcoes {
    display: flex;
    flex-direction: column;
}

.btnOpcoes {
    background-color: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

.btnOpcoes i {
    margin: 0 10px 0 10px;
}

.fa-ellipsis-h {
    color: var(--main-color);
    font-size: 25px;
}

.fa-edit{
    color: var(--button-color-01);
}
.fa-file-excel{
    color: var(--main-color);
}
.fa-door-closed{
    color: var(--button-color-02);
}

.btns {
    
    display: none;
}

@media(max-width: 767px){

    .btns {
        display: flex;
        padding: 10px 30px 10px 30px;
    }
    .tableContent thead{
        display: none;
    }

    .tableButton {
        display: block;
    }

    .tableContent td {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    
    .tableContent td:first-of-type {
        font-weight: bold;
        font-size:  1.2rem;
        text-align: center;
        display: flex;
        justify-content: center;

        
    }
 
    .tableContent td:not(:first-of-type):before {
        content: attr(data-title);
        display: block;
        font-weight:bold;
    }

    .lastTd {
        border-bottom: 3px dotted var(--font-color);
    }
    

    
}








</style>
