<template>
  <div id="main">
    <h2 class="titulo">Atributos</h2>

    <div class="campos">
      <div class="camposInput">
        <h4>Código Produto:</h4>
        <input class="inputs" id="product" type="text" value="123" readonly />

        <h4 class="produto">Produto:</h4>
        <input class="inputs" id="product" type="text" value="Produto A" readonly />
      </div>

      <div class="camposInput">
        <h4>Código Cliente:</h4>
        <input class="inputs" id="client" type="text" value="3243" readonly />

        <h4>Cliente:</h4>
        <input class="inputs" id="client" type="text" value="Visteon" readonly />
      </div>
    </div>

    <div class="tabela">
      <table class="tab">
        <tr>
          <th></th>
          <td>CAVIDADE 1</td>
          <td>CAVIDADE 2</td>
          <td>CAVIDADE 3</td>
        </tr>
        <tr>
          <th>Indentificação 1</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Indentificação 2</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>Indentificação 3</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <div class="button">
        <button class="cancel" style="cursor: pointer">CANCELAR</button>
        <button class="save" style="cursor: pointer">SALVAR</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Attributes",

  mounted(){
    
  }
};
</script>

<style scoped>
.titulo {
  color: #2daa7d;
  font-size: 30px;
}

.inputs {
  padding: 8px;
  margin-right: 1rem;
  width: 80%;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
}

.produto {
  margin-right: 2rem;
}

.camposInput {
  width: 40%;
}

.campos {
  margin-inline: 0%;
  color: #707070;
  font-size: 12px;
  display: flex;
  margin-top: 15px;
  width: 70%;
}

.cliente {
  display: grid;
}

input.produto {
  padding-inline: 2rem;
  margin-bottom: 20px;
  border: 1px solid gray;
}

input.cliente {
  padding-inline: 2rem;
  margin-bottom: 20px;
  border: 1px solid gray;
}

.tabela {
  margin: 1rem 0 0 0;
  align-items: center;
  align-content: center;
}

.tabela .tab {
  position: relative;
  width: 100%;
}

.tabela .tab,
td,
th {
  border: 1px solid gray;
  border-collapse: collapse;
  padding: 10px;
  padding-inline-end: 16px;
  margin-top: 2rem;
  text-align: center;
  
}


.button {
  margin-top: 2rem;
  display: flex;
  border-radius: 1rem;
  justify-content: right;
}

.save {
  background-color: #1cc88a;
  color: white;
  width: 100px;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
}

.save:hover {
  background-color: #03ac6eb9;
  transition: all 0.3s ease;
}

.cancel {
  background: #dad7d7;
  width: 100px;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  margin: 0 1rem 0 0;
}

.cancel:hover {
  background-color: rgba(182, 178, 178, 0.63);
  color: rgb(0, 0, 0);
  transition: all 0.3s ease;
}
</style>