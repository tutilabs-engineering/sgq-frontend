<template>

    <div class="content-configuracao">

        <div class="cardsConfiguracao">

            <CardsConfiguracao icon="fas fa-user-alt" title="Perfil" link="/perfil"/>

            <CardsConfiguracao  icon="fas fa-user-cog" title="Gerenciamento de Usuário" link="/cadastroUsuario" />

        </div> 
        
    </div>

</template>

<script>

import CardsConfiguracao from '../components/CardsConfiguracoes/CardsConfiguracao.vue'

export default {

    name:"Configuracoes",
    components: {CardsConfiguracao}

}
</script>

<style scoped>

.content-configuracao{
    width: 100%;
    height: calc(90vh - 90px);
    display: flex;
    justify-content: center;
    align-items: center;

}

.cardsConfiguracao {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px 70px;
}


@media (max-width: 765px){

    .content-configuracao{
        margin-top: 12vh;
    }

    .cardsConfiguracao{
        grid-template-columns: 1fr;

    }
}



</style>