<template>
    <div class="question">
        <fieldset>
            <div class="first-row">
                <i class="fa fa-check-circle" aria-hidden="true"></i>
                <div class="aboutQuestion">
                    <label for="res">Cavidade</label>
                    <input type="text" placeholder="Aguardando Resposta">
                </div>
            </div>
                <!-- <div class="statusColor"><i class="fa fa-check-circle" aria-hidden="true"></i></div>

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
                </div> -->
        </fieldset>
    </div>

</template>

<script>
export default {

}
</script>

<style>


.question {
    background-color: var(--card-color);
    width: auto;
    height: 200px;
    border-right: 7px solid var(--button-color-01);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.first-row {
    display: flex;
    justify-content: space-between;
}




</style>