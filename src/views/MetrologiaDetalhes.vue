<template>

<div class="content-metrologiaDetalhes">
    

      <fieldset class="form">
        <legend>Metrologia</legend>

      <div class="input">
        <label for="op">Código Produto</label>
        <input type="text" name="client" id="op" placeholder="Digite o código OP">
      </div>

      <div class="input">
        <label for="client">Código Cliente</label>
        <input type="text" name="client" id="client" placeholder="ex: Yamaha">
      </div>

      <div class="input">
        <label for="client">Produto</label>
        <input type="text" name="client" id="client" placeholder="ex: Yamaha">
      </div>

      <div class="input">
        <label for="client">Cliente</label>
        <input type="text" name="client" id="client" placeholder="ex: Yamaha">
      </div>

     </fieldset>

     <fieldset>
       <legend>Preenchimento</legend>

      <TableMetrologiaDetalhes />

    </fieldset>

</div>
  
</template>

<script>

import TableMetrologiaDetalhes from '../components/TableMetrologiaDetalhes/TableMetrologiaDetalhes.vue'

export default {
    components: { TableMetrologiaDetalhes},
    name: "MetrologiaDetalhes",
    data(){
        return {};
    }


}
</script>

<style scoped>

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}


fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.form {
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
}

.input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70px;
  padding: 5px;
  border-radius: 5px 5px 0 0;
}

.input label {
  font-weight: 600;
  font-size: 18px;
  color: var(--black_text);
}

.input input {
  background-color: transparent;
  border: none;
  transition: 1s;
  outline: none;
  font-size: 15px;
  height: 52px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.39);
}

@media (max-width: 1114px) and (min-width: 766px){
  .legend {
    text-align: center;
  }
    .form {
    padding: 12px;
    grid-template-columns: auto;
  }
}

@media (max-width: 765px){
  legend {
    text-align: center;
  }
    .form {
    padding: 12px;
    grid-template-columns: 1fr;
  }
}

</style>