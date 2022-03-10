<template>
    <div class="btns">
        <button class="btn-fill-save btn">Preencher + Opções</button>
        <div class="btns-options">
            <button class="btn-cancel btn">Cancelar</button>
            <button class="btn-save btn">Salvar</button>
        </div>
    </div>
</template>

<script>
export default {

    name: "BtnStartupCreate",
}
</script>

<style scoped>

    .btns {
        padding: 20px;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        grid-gap: 5px;
    }

    .btn-fill-save, .btns-options {
        grid-column: 3;
   
    }

    .btns-options {
        display: flex;
        justify-content: space-between;
    }

    .btn-save, .btn-cancel {
        width: 49%;
    }

    .btn {
        height: 50px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        font-size: 1.1rem;
        color: var(--main_primaryWhite);
    }

    .btn-save {
        background-color: var(--card_green);
    }

    .btn-fill-save {
        background-color: var(--card_blue);
    }

    .btn-cancel {
        background-color: var(--card_red);
    }



    @media (max-width: 48em){
        .btns {
            display: grid;
            grid-template-columns: 1fr;
            padding: 0;
            margin-top: 20px;
        }

        .btn-fill-save, .btns-options {
            grid-column: 1;
        }
    }
    


</style>