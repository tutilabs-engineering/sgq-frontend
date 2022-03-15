<template>
  <div>
    <div class="background">
      <div class="container">
        <header>
          <h2>dvfdgv</h2>
          <button class="btnExit">X</button>
        </header>
        <main class="content-main">
          <div class="productHeader">
            <div>
              <p>Código do produto</p>
              <input type="text" />
            </div>
            <div>
              <p>Produto</p>
              <input type="text" />
            </div>
            <div>
              <p>Cliente</p>
              <input type="text" />
            </div>
            <div>
              <p>Descrição do cliente</p>
              <input type="text" />
            </div>
          </div>

          <div class="ModalContent">
            <div class="content-attributes" v-if="dataAttribute">
              <table class="questions">
                <thead>
                  <th>Pergunta</th>
                  <th>Atenção</th>
                  <th>Status</th>
                </thead>
                <tbody>
                  <tr>
                    <td>dsbv</td>
                    <td>dsbv</td>
                    <td>dsbv</td>
                  </tr>
                </tbody>
              </table>
              <div class="fieldOfAttribute">
                <div>
                  <p>Adicionar Pergunta</p>
                  <input type="text" />
                  <button>+</button>
                </div>
              </div>
            </div>

            <div class="content-variable" v-else>
              <div class="variables">
                <div>
                  <p>Identificação</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Cota</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Max</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Min</p>
                  <input type="text" />
                </div>
                <button>upload</button>
              </div>
              <div class="fieldOfAttribute">
                <div>
                  <p>Identificação</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Cota</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Max</p>
                  <input type="text" />
                </div>
                <div>
                  <p>Min</p>
                  <input type="text" />
                </div>
                <button>+</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataAttribute: true,
    };
  },
};
</script>

<style scoped>
.background {
  position: fixed;
  display: table;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(65, 64, 64, 0.596);
}
.container {
  background-color: var(--main_primaryWhite);
  width: 80vw;
  height: 90vh;
  border-radius: 20px;
}
.container header {
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5% 2%;
  background-color: var(--bg_green);
  color: var(--main_primaryWhite);
}
.btnExit {
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  border: none;
  color: var(--main_primaryWhite);
  background-color: rgb(223, 97, 97);
  cursor: pointer;
  font-weight: 600;
}

.btnExit:hover {
  background-color: rgb(148, 7, 7);
}

.productHeader {
  display: flex;
  justify-content: space-around;
  padding: 1%;
}
.productHeader input {
  outline: none;
  border: none;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  padding: 5px;
  border-radius: 8px;
  color: var(--black_text);
}

.content-attributes table {
  background-color: var(--bg_white);
  width: 100%;
  background: burlywood;
  text-align: center;
  overflow-x: scroll;
}

@media (max-width: 425px) {
  .container {
    background-color: var(--main_primaryWhite);
    width: 98%;
    border-radius: 20px;
  }
}
</style>