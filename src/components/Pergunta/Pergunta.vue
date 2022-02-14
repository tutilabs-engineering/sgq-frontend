<template>
    <div class="question">

                <div class="statusColor"><i class="fa fa-check-circle" aria-hidden="true"></i></div>

                <div class="aboutQuestion">
                    <label for="res">Cavidade</label>
                    <input type="text" placeholder="Aguardando Resposta">
                </div>

                <div class="checkboxQuestion">
                    <input type="radio" name="option" id="AP">
                    <label for="Ap">AP</label>

                    <input type="radio" name="option" id="RP">
                    <label for="Ap">RP</label>

                    <select name="radio">
                        <option value="valor1">Valor 1</option>
                        <option value="valor2">Valor 2</option>
                        <option value="valor3">Valor 3</option>
                    </select>

                    <input type="radio" name="option" id="AP">
                    <label for="Ap">GM</label>

                    <input type="file" name="" id="file">
                </div>

                <div class="status">
                    <h2>AQ</h2>
                </div>  

            </div>

</template>

<script>
export default {

}
</script>

<style>


.question {
    background-color: var(--card-color);
    width: 100%;
    height: auto;
    border-right: 7px solid var(--button-color-01);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.statusColor {
    width: 5%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    color: var(--main-color);
}

.statusColor i {
    margin-left: 20px;
}

.checkboxQuestion {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
}

.checkboxQuestion input, .checkboxQuestion label, .checkboxQuestion select {
    margin: 0 10px 0 0;
}

.status{
    width: 10%;
    height: 100%;
}

.aboutQuestion {
    padding-top: 10px;
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.status {
    border-left: 1px solid #11101d54;
    padding: 20px;
}

</style>