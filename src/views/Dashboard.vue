<template>
  <div class="header">
    <h2 id="h2Dashboard">Dashboard</h2>

    <div class="timeStartup">
      <h3>Tempo de Start-UP</h3>
      <div class="mainGraphic">
        <!-- ----------------------------------AQUI VAI O GRAFICO-------------------------------------- -->
          <div class="graphicBarra">
          <div id="graphicBar">
            <column-chart
              sufixo=" % "
              loading=" Carregando, Aguarde ..."
              width=" 800px "
              height=" 500px "
              :data="[
                ['012/21', 32],
                ['024/21', 46],
                ['004/21', 28],
                ['099/21', 85],
                ['013/21', 54],
                ['025/21', 10],
                ['005/21', 58],
                ['899/21', 22],
                ['052/21', 95],
              ]"
            ></column-chart>
          </div>
        </div>
        <!-- ------------------------------------------------------------------------------------------------ -->

        <div class="filterSelect">
          <div class="subTitle">
            <div class="preenchimento">
              <div class="circle"></div>
              <p>Preenchimento</p>
            </div>

            <div class="metrologia">
              <div class="circle"></div>
              <p>Metrologia</p>
            </div>
          </div>

          <div class="menuFilter">
            <h2>
              <p><i class="fas fa-filter"></i></p>
              Filtro
            </h2>

            <div>
              <div class="select">
                <p>Data</p>
                <input type="date" />
              </div>

              <div class="select">
                <p>Turno</p>
                <select name="" id="turno">
                  <option value="">TURNO 1</option>
                  <option value="">TURNO 2</option>
                  <option value="">TURNO 3</option>
                </select>
              </div>

              <div class="select">
                <p>Cliente</p>
                <select name="" id="cliente">
                  <option value="">CLIENTE 1</option>
                  <option value="">CLIENTE 2</option>
                  <option value="">CLIENTE 3</option>
                  <option value="">CLIENTE 4</option>
                  <option value="">CLIENTE 5</option>
                </select>
              </div>

              <div class="select">
                <p>Produto</p>
                <select name="" id="produto">
                  <option value="">PRODUTO 1</option>
                  <option value="">PRODUTO 2</option>
                  <option value="">PRODUTO 3</option>
                  <option value="">PRODUTO 4</option>
                  <option value="">PRODUTO 5</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
  <div class="main">
    <div class="headerTitle">
      <h3>Falhas do Processo</h3>
    </div>

    <div class="test">
      <!-- -------------------------------AQUI VAI O OUTRO GRAFICO----------------------------------- -->
      <div class="graphic">
        <div class="graphicPier">
          <pie-chart
            sufixo=" % "
            loading=" Carregando, Aguarde ..."
            id=" users-chartPier "
            width=" 800px "
            height=" 500px "
            empty=" No data "
            :data="[
              ['Falha 1', 20],
              ['Falha 2', 23],
              ['Outros', 45],
            ]"
          >
          </pie-chart>
        </div>
      </div>
      <!-- ------------------------------------------------------------------------------------------------ -->

      <div class="testFail">
        <div class="titleFail">
          <h3>FALHAS</h3>
        </div>

        <div id="listTestFail">
          <div class="listFail">
            <input type="checkbox" />
            Falhas 1
          </div>
          <div class="listFail">
            <input type="checkbox" />
            Falhas 2
          </div>
          <div class="listFail">
            <input type="checkbox" />
            Falhas 3
          </div>
          <div class="listFail">
            <input type="checkbox" />
            Falhas 4
          </div>
          <div class="listFail">
            <input type="checkbox" />
            Falhas 5
          </div>
          <div class="listFail">
            <input type="checkbox" />
            Falhas 6
          </div>
          <div class="listFail">
            <input type="checkbox" />
            Falhas 7
          </div>
          <div class="listFail">
            <input type="checkbox" />
            Falhas 8
          </div>
          <div class="listFail">
            <input type="checkbox" />
            Falhas 9
          </div>
          <div class="listFail">
            <input type="checkbox" />
            Falhas 10
          </div>
        </div>
      </div>

      <div class="filterSelectFail">
        <div class="menuFilterFail">
          <h2>
            <p><i class="fas fa-filter"></i></p>
            Filtro
          </h2>

          <div>
            <div class="selectFail">
              <p>Data</p>
              <input type="date" />
            </div>

            <div class="selectFail">
              <p>Turno</p>
              <select name="" id="turno">
                <option value="">TURNO 1</option>
                <option value="">TURNO 2</option>
                <option value="">TURNO 3</option>
              </select>
            </div>

            <div class="selectFail">
              <p>Cliente</p>
              <select name="" id="cliente">
                <option value="">CLIENTE 1</option>
                <option value="">CLIENTE 2</option>
                <option value="">CLIENTE 3</option>
                <option value="">CLIENTE 4</option>
                <option value="">CLIENTE 5</option>
              </select>
            </div>

            <div class="selectFail">
              <p>Produto</p>
              <select name="" id="produto">
                <option value="">PRODUTO 1</option>
                <option value="">PRODUTO 2</option>
                <option value="">PRODUTO 3</option>
                <option value="">PRODUTO 4</option>
                <option value="">PRODUTO 5</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

 

<script>

</script>


<style scoped>
#users-chartBar{
  position: relative !important;
} 
* {
  margin: 0;
  padding: 0;
  box-sizing: none;
}
.header {
  margin-bottom: 5rem;
}
.header h3 {
  color: #1cc88a;
  font-weight: 500;
  margin-bottom: 3rem;
  margin-top: 1rem;
  font-size: 20px;
}
#h2Dashboard {
  color: #1cc88a;
  font-weight: 700;
  margin-bottom: 2rem;
  font-size: 26px;
}

.mainGraphic {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.subTitle {
  display: flex;
  background-color: rgb(245, 240, 240);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}
.subTitle p {
  margin-left: 0.5rem;
}
.circle {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.preenchimento {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}
.preenchimento .circle {
  background-color: rgb(104, 170, 104);
}
.metrologia {
  display: flex;
  align-items: center;
}
.metrologia .circle {
  background-color: yellow;
}
.menuFilter {
  background-color: rgb(245, 240, 240);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}
.menuFilter h2 {
  display: flex;
  margin-bottom: 1rem;
  color: rgb(63, 60, 60);
  font-weight: 500;
}
.menuFilter p {
  margin-right: 10px;
}
.select {
  margin: 10px;
}
.select input {
  padding: 6px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: rgb(214, 210, 210);
  font-size: 16px;
  color: rgb(63, 60, 60);
  outline: none;
}
.select select {
  padding: 6px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: rgb(214, 210, 210);
  font-size: 16px;
  color: rgb(63, 60, 60);
  outline: none;
}
.headerTitle {
  color: #1cc88a;
  margin-top: 1rem;
}
.titleFail {
  color: #1cc88a;
  margin-bottom: 1rem;
  font-size: 18px;
}
.filterSelectFail {
  display: flex;
  background-color: rgb(245, 240, 240);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 1rem 0.5rem;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}
.menuFilterFail h2 {
  display: flex;
  grid-gap: 10px;
}
.menuFilterFail {
  margin-right: 5rem;
  margin-bottom: 1rem;
  color: rgb(63, 60, 60);
  font-weight: 500;
}
.selectFail {
  margin: 10px;
}
.selectFail input {
  padding: 6px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: rgb(214, 210, 210);
  font-size: 16px;
  color: rgb(63, 60, 60);
  outline: none;
}
.selectFail select {
  padding: 6px;
  width: 100%;
  border-radius: 4px;
  border: none;
  background-color: rgb(214, 210, 210);
  font-size: 16px;
  color: rgb(63, 60, 60);
  outline: none;
}
.test {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
}
.testFail { 
  border: none;
}
#listTestFail {
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  background-color: rgb(230, 224, 224);
  padding: 1.5rem 10rem 7rem 1rem;
  border-radius: 10px;
  height: 300px;
  overflow-y: auto;
}
.graphicBarra {
  z-index: 1;
  width: 100%;
}

.graphicPier {
   z-index: 1;
}
</style>
