<template>

    <div class="content-startupCadastro">
        <div class="form">    
            <div class="form-col">
                <label>OP</label>
                <input type="text" name="" id="" />

                <label>Cliente</label>
                <input type="text" name="" id="" />

                <label>Código Cliente</label>
                <input type="text" name="" id="" />
            </div>

            <div class="form-col">
                <label>Produto</label>
                <input type="text" name="" id="" />

                <label>Código Produto</label>
                <input type="text" name="" id="" />

                <label>Quantidade</label>
                <input type="number" name="" id="" />
            </div>

            <div class="form-col">
                <label>Data</label>
                <input type="date" name="" id="" />

                <label>Hora inicial</label>
                <input type="time" name="" id="" />

                <label>Hora Final</label>
                <input type="time" name="" id="" />
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .content-startupCadastro {
        padding: 20px;
        margin-top: 1vh;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
    }

    .form {
        background-color: var(--card-color);
        padding: 20px 0 20px 0;
        width: 85%;
        height: 100%;
        display: flex;
        justify-content: center;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
        border-radius: 10px 10px 10px 10px;
        border-right: 7px solid var(--button-color-01);
    }
    
    .form-col {
        margin: 0px 30px 0 30px;
        display: flex;
        flex-direction: column;
    }

    .form-col label {
        font-weight: 600;
        font-size: 17px;
        margin-bottom: 5px;
    }

    .form-col input {
        padding: 0 5px 0 5px;
        width: auto;
        border: 1px solid rgba(0, 0, 0, 0.514);
        border-radius: 5px;
        height: 30px;
        outline: none;
        margin-bottom: 10px;
    
    }

    @media (max-width: 1017px){
        .form {
            padding: 12px;
            max-width: 80%;
            flex-direction: column;
        }
    }

    


</style>
