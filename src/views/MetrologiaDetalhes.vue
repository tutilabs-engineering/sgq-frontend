<template>

<div class="content-metrologiaDetalhes">
    <h2>METROLOGIA</h2>

    <div class="input-metrologiaDetalhes">
        <InputMetrologia title="Código Produto" :type="text" :placeholder="'ex: 00.1234/01'"/>

        <InputMetrologia title="Código Cliente" :type="text" :placeholder="'ex: Empresa 01'"/>

        <InputMetrologia title="Produto" :type="text" :placeholder="'ex: Maquineta'"/>

        <InputMetrologia title="Cliente" :type="text" :placeholder="'ex: 0154879/02'"/>

    </div>

    <TableMetrologiaDetalhes />

</div>
  
</template>

<script>

import InputMetrologia from '../components/InputsMetrologia/InputMetrologia.vue'
import TableMetrologiaDetalhes from '../components/TableMetrologiaDetalhes/TableMetrologiaDetalhes.vue'

export default {
    components: {InputMetrologia, TableMetrologiaDetalhes},
    name: "MetrologiaDetalhes",
    data(){
        return {};
    }


}
</script>

<style scoped>

.content-metrologiaDetalhes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.content-metrologiaDetalhes h2 {
    margin-top: 20px;
    text-align: center;
    color: var(--black_text);
}

.input-metrologiaDetalhes {
    margin-top: 20px;
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
}

@media (max-width: 1114px) and (min-width: 766px){
    .input-metrologiaDetalhes {
        width: 70%;
        grid-template-columns: 1fr;
    }
}

@media (max-width: 765px){
    .input-metrologiaDetalhes {
        width: 100%;
        grid-template-columns: 1fr;
    }
}

</style>