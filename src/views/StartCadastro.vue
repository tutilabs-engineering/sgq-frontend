<template>
	<div class="content-startup">
		<Header titlePage="Criação de Startup"/>
		
		<StartupCadastro />
  
    
    <div class="navbar">
      <h3>START-INJEÇÃO/CÉLULA(Cadastro)</h3>
    </div>
    <div class="header">
      <div>
        <p>OP:</p>
        <input type="text" name="" id="" />
        <p>Cliente</p>
        <input type="text" name="" id="" />
        <p>Código Cliente</p>
        <input type="text" name="" id="" />
      </div>

      <div>
        <p>Produto</p>
        <input type="text" name="" id="" />
        <p>Código Produto</p>
        <input type="text" name="" id="" />
        <p>Quantidade</p>
        <input type="text" name="" id="" />
      </div>

      <div>
        <p>Data</p>
        <input type="date" name="" id="" />
        <p>Hora inicial</p>
        <input type="time" name="" id="" />
        <p>Hora Final</p>
        <input type="time" name="" id="" />
      </div>
    </div>
    <hr />
    <div class="technicalData">
      <h2>Dados Técnicos</h2>
      <div class="box">
        <div class="tableLine">
          <div class="cavidade">
            <p>Cavidade</p>
            <div class="cavidadeData">
              <p>0003513-0000</p>
            </div>
          </div>
          <div class="ciclo">
            <p>Ciclo</p>
            <div class="cicloData">
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
      <h2 id="ComponentsH2ComponentsH2">Componentes</h2>
      <div class="boxComponents">
        <table class="TableComponents">
          <thead class="Componentsthead">
            <tr>
              <th>#N° do Item</th>
              <th>Descrição</th>
              <div>
                <th>UM</th>
                <th>Planejado</th>
              </div>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <main class="DefaultQuestions">
      <h2>Perguntas Padrões</h2>

      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Cavidade:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Ciclo:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Matéria-Prima:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Masters:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Peso médio Liquido:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Ficha de instrução de trabalho:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Ficha técnica de Injeção:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Plano de inspeção de Qualidade:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Plano de Atenção:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Padrão Homologado:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Fluxo da operação:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Postiço do molde:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Datador do molde atualizado:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Recursos mão de obra</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">Embalagem conforme FIT:</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputs">
          <div>
            <p class="titleBox">
              Etiqueta da embalagem de acordo com o produto cliente:
            </p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <main class="technicalData">
      <h2>Tabela de Analise</h2>

      <div class="boxDefaultQuestions">
        <div class="flag" id="flag"></div>
        <div class="campInputsAnTable">
          <div>
            <p class="titleBox">Cavidade</p>
            <input
              disabled
              type="text"
              class="inputText"
              placeholder="Aguardando a resposta..."
              name=""
              id=""
            />
          </div>

          <div class="input-radio">
            <div class="radio" id="status">
              <p>AP</p>
              <input
                type="radio"
                class="ap"
                name="statusCavidade"
                id=""
                value="1"
                @click="approved"
              />
            </div>

            <div class="radio" id="status">
              <p>RP</p>
              <input
                type="radio"
                class="rp"
                name="statusCavidade"
                id=""
                value="2"
                @click="disapproved"
              />
              <select disabled name="" id="selectRp">
                <option value="testelalala">Selecione</option>
                <option value="testelalala">testelalala</option>
                <option value="testelalala">testelalala</option>
              </select>
            </div>

            <div class="radio" id="picture">
              <input
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              />
              <p>GM</p>
              <label for="file" class="fileIcon"
                ><i class="fas fa-file-import"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>

            <div class="radio" id="view">
              
                type="radio"
                class="gm"
                name="statusCavidade"
                id=""
                value="3"
                @click="gm"
              
              <p>CROQUI</p>
              <label for="view" class="fileIcon_view"
                ><i class="fas fa-eye"></i
              ></label>
              <input type="file" name="" id="file" />
            </div>
          </div>
        </div>
      </div>
    </main>

    <main>
      <table class="tabAnalise">
        <tr>
          <th>COORDENADA</th>
          <td>CAVIDADE 1</td>
          <td>CAVIDADE 2</td>
          <td>CAVIDADE 3</td>
          <td>OPÇÕES</td>
        </tr>
        <tr>
          <th>Indentificação 1</th>
          <td>N cm</td>
          <td>N cm</td>
          <td>N cm</td>
          <td><input class="inpBtn" type="button" value="VISUALIZAR" /></td>
        </tr>
        <tr>
          <th>Indentificação 2</th>
          <td></td>
          <td></td>
          <td></td>
          <td><input class="inpBtn" type="button" value="VISUALIZAR" /></td>
        </tr>
        <tr>
          <th>Indentificação 3</th>
          <td></td>
          <td></td>
          <td></td>
          <td><input class="inpBtn" type="button" value="VISUALIZAR" /></td>
        </tr>
      </table>

      <div class="btns">
        <div class="btn-tab">
          <input class="btn-met" type="button" value="METROLOGIA" />
        </div>

        <div class="btn-tab-gm">
          <p>GM</p>
          <input class="gm" type="text" value="" disabled />
        </div>
      </div>
    </main>

    <div class="upload-btn">
      <div class="but_uplad" @click="teste">
        <label
          for="inputimage"
          class="fileIcon_image"
          :class="{ inputimageOcultar: ocultar }"
        >
        </label>
        <div class="output" :class="{ outputMostrar: ocultar }">
          <img id="output" />
        </div>
      </div>
      <div class="but_uplad" @click="teste">
        <label
          for="inputimage"
          class="fileIcon_image"
          :class="{ inputimageOcultar: ocultar }"
        >
          <input
            type="file"
            accept="image/*"
            @change="loadFile"
            id="inputimage"
          />
          <img src="img_form/img_add.png" alt="" />
        </label>
        <div class="output" :class="{ outputMostrar: ocultar }">
          <img id="output" />
        </div>
      </div>

      <div class="but_uplad" @click="mostrar">
        <label
          for="inputimage"
          class="fileIcon_image"
          :class="{ inputimageOcultar: ocultar1 }"
        >
          <input
            type="file"
            accept="image/*"
            @change="loadFile1"
            id="inputimage"
          />
          <img src="img_form/img_add.png" alt="" />
        </label>
        <div class="output" :class="{ inputimageOcultar: ocultar1 }">
          <img id="output1" />
        </div>
      </div>
    </div>

    <div class="buttonFinal">
      <button id="cancel" style="cursor: pointer">CANCELAR</button>
      <button id="save" style="cursor: pointer">SALVAR</button>
    </div>

    </div>

   
  
</template>

<script>

import Header from '../components/Header/Header.vue'
import StartupCadastro from '../components/StartupCadastro/StartupCadastro.vue'

export default {
  data() {
    return {
      ocultar: false,
      ocultar1: false,
    };
  },

  components: {Header, StartupCadastro},
  methods: {
    approved() {
      var flag = document.getElementById("flag");
      flag.style.backgroundColor = "green";
      var inputText = document.querySelector(".inputText");
      inputText.setAttribute("placeholder", "Conforme!");
      inputText.setAttribute("disabled", "disabled");
      var selectRp = document.getElementById("selectRp");
      selectRp.setAttribute("disabled", "disabled");
    },
    disapproved() {
      var flag = document.getElementById("flag");
      flag.style.backgroundColor = "red";
      var inputText = document.querySelector(".inputText");
      inputText.setAttribute("placeholder", "Motivo da reprovação?");
      inputText.removeAttribute("disabled");
      var selectRp = document.getElementById("selectRp");
      selectRp.removeAttribute("disabled");
    },
    gm() {
      var flag = document.getElementById("flag");
      flag.style.backgroundColor = "yellow";
      var inputText = document.querySelector(".inputText");
      inputText.setAttribute("placeholder", "Aguardando a resposta...");
      inputText.removeAttribute("disabled");
    },
    loadFile(event) {
      var output = document.getElementById("output");
      output.src = URL.createObjectURL(event.target.files[0]);
    },
    loadFile1(event) {
      var output1 = document.getElementById("output1");
      output1.src = URL.createObjectURL(event.target.files[0]);
    },
    teste() {
      // this.ocultar = true
      // this.ocultar = true
      alert("Teste");
    },
    mostrar() {
      // this.ocultar1 = true
      // this.ocultar1 = true
      alert("Teste13456");
    },
  },
};
</script>

<style scoped>

.content-startup {
  width: 100%;
}


.selectBox {
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.39) 0px 0px 0px 1px;
  padding: 5px;
  font-size: 14px;
  outline-color: green;
  margin-left: 0.5rem;
  border-radius: 4px;
}
.fas.fa-upload {
  font-size: 1rem;
  margin-left: 0.5rem;
  color: white;
  background-color: gray;
  padding: 5px 20px;
  border-radius: 4px;
  cursor: pointer;
}
.fas.fa-upload:hover {
  background-color: rgb(28, 167, 28);
}
label {
  color: #575757;
  text-decoration: none;
  font-weight: bold;
}
[aria-label] {
  position: relative;
}
[aria-label]::after {
  content: attr(aria-label);
  display: none;
  position: absolute;
  top: 110%;
  left: 0px;
  z-index: 5000;
  pointer-events: none;
  padding: 8px 10px;
  text-decoration: none;
  font-size: 0.9em;
  color: #fff;
  background-color: rgb(56, 56, 56);
  font-size: 16px;
}
[aria-label]:hover::after {
  display: block;
}
#file {
  display: none;
}
.modal {
  background-color: white;
  width: 100%;
  margin: 1rem auto;
  overflow: y;
}
.navbar {
  background-color: rgb(39, 148, 39);
  color: white;
  padding: 0.5rem;
}
.header {
  padding: 2rem;
  display: grid;
  grid-template: 1fr/ 1fr 1fr 1fr;
  grid-gap: 2rem;
}
.header input {
  width: 95%;
  height: 30px;
  margin: 0.5rem 0;
  outline-color: green;
  padding: 4px 10px;
  font-size: 16px;
}
.technicalData {
  padding: 2rem;
}
.technicalData .box {
  box-shadow: rgba(0, 0, 0, 0.404) 0px 3px 8px;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
}
.technicalData h2 {
  color: rgb(22, 153, 22);
}
.tableLine {
  width: 100%;
  display: flex;
}
.cavidade {
  border-right: 1px solid;
  width: 25%;
}
.cavidade p {
  padding: 10px;
}
.cavidadeData {
  border-top: 1px solid;
}
.ciclo {
  width: 100%;
}
.ciclo p {
  padding: 10px;
}
.cicloData {
  border-top: 1px solid;
}
.boxComponents {
  box-shadow: rgba(0, 0, 0, 0.404) 0px 3px 8px;
  margin: 1rem 0;
  border-radius: 10px;
  display: flex;
}
.boxComponents th {
  padding: 10px;
  font-weight: 600;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
.boxComponents td {
  padding: 10px;
  text-align: center;
}
.Componentsthead {
  font-weight: 400;
}
.TableComponents {
  width: 100%;
}
#ComponentsH2 {
  margin-top: 3rem;
}
main {
  padding: 2rem;
}
.defaultQuestions {
  padding: 2rem;
   border-bottom: 1px solid black;
  padding-bottom: 2rem;
  margin-bottom: 2rem; 
}
.DefaultQuestions h2 {
  color: rgb(22, 153, 22);
}
.boxDefaultQuestions {
  background-color: white;
  box-shadow: rgba(21, 21, 32, 0.39) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  display: flex;
  margin-top: 2rem;
  border-radius: 1rem;
}
.flag {
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.116) 0px 18px 36px -18px inset;
  height: 6vh;
  width: 8%;
  border-radius: 1rem 0 1.5rem;
}
.campInputs {
  padding: 2rem 2rem 2rem 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
.campInputsAnTable {
  padding: 2rem 2rem 2rem 1rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.input-radio {
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 5px;
  margin-left: 1rem;
  font-size: 13px;
}
.radio {
  display: flex;
  align-items: center;
}
.radio input {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.fileIcon {
  background-color: rgb(162, 163, 162);
  text-align: center;
  padding: 4px 1rem;
  margin-left: 0.5rem;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}
.fileIcon:hover {
  background-color: rgb(57, 57, 223);
}
.fas.fa-file-import {
  font-size: 20px;
  color: white;
}
.fileIcon_view {
  background-color: #0077ffaf;
  text-align: center;
  padding: 3px 2rem;
  margin-left: 0.5rem;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}
.fileIcon_view:hover {
  background-color: #0357b8;
}
.fas.fa-eye-import {
  font-size: 20px;
  color: white;
}
.divAQ {
  padding: 30px;
  margin-left: 1rem;
  border-left: solid rgba(54, 54, 54, 0.774);
}
.lineVertical {
  width: 1.5px;
  height: 100%;
  background-color: rgba(54, 54, 54, 0.774);
}
.inputText {
  padding: 10px;
  border-radius: 4px;
  border: none;
  margin-top: 5px;
  box-shadow: rgba(0, 0, 0, 0.356) 0px 1px 3px 0px,
    rgba(22, 25, 29, 0.486) 0px 0px 0px 1px;
  outline: none;
}
.titleBox {
  font-weight: 500;
}
.tabAnalise {
  position: relative;
  width: 100%;
  border: 1px solid gray;
  border-collapse: collapse;
}
.tabAnalise td {
  text-align: center;
  position: relative;
  border: 1px solid gray;
  border-collapse: collapse;
  font-size: 15px;
}
.tabAnalise th {
  position: relative;
  border: 1px solid gray;
  border-collapse: collapse;
  padding: 10px;
  margin-top: 2rem;
  font-size: 18px;
  font-weight: 500;
}
input.inpBtn {
  background: #0077ffaf;
  color: white;
  text-align: center;
  padding: 3px 1rem;
  margin-left: 0.5rem;
  font-size: 12px;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}
input.inpBtn:hover {
  background-color: #0357b8;
}
input.gm {
  width: 30%;
}
input.btn-met {
  background-color: #1cc88a;
  color: white;
  padding: 12px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}
input.btn-met:hover {
  background-color: #179e6d;
}
.btns {
  position: relative;
  margin-top: 3rem;
  display: flex;
  grid-gap: 5rem;
  border-bottom: 1px solid black;
  padding-bottom: 3rem;
}
.btn-tab-gm {
  display: flex;
  grid-gap: 0.5rem;
  padding: 10px;
}
.buttonFinal {
  margin-top: 10rem;
  display: flex;
  border-radius: 1rem;
  justify-content: right;
  grid-gap: 1rem;
}
#save {
  background-color: #1cc88a;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
}
#save:hover {
  background-color: #179e6d;
}
#cancel {
  background: #dad7d7;
  padding: 1rem;
  border: none;
  border-radius: 1rem;
  margin: 0 1rem 0 0;
}
#cancel:hover {
  background: #adabab;
}
.upload-btn {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  font-size: 8rem;
  margin-top: 5rem;
}
.fileIcon_image {
  position: relative;
  color: lightgray;
  padding: 1px;
  cursor: pointer;
}
#inputimage {
  display: none;
}

.inputimageOcultar {
  display: none;
}

.inputimageOcultar1 {
  display: none;
}

.output {
  display: none;
}

.output img {
  width: 200px;
}

.outputMostrar {
  display: block;
}

@media (max-width: 1024px) {

  .campInputsAnTable {
    padding: 2rem 2rem 2rem 1rem;
  }

  .campInputsAnTable .input-radio {
    width: 20rem;
    font-size: 13px;
    margin: 0;
  }

  .fileIcon {
    font-size: 10px;

  }

  #view.radio {
    display: flex;
    flex-direction: column;
    grid-gap: 5px;
    text-align: center;
    justify-content: center;
    padding: 4px 1.5rem 4px 15px;
  }

  .fileIcon_view {
    margin-left: 0;
    width: 0;
    padding: 4px 2rem 4px 15px;
    margin-bottom: 1rem;
  }


  #picture.radio {
    margin-right: .1rem;
    margin-left: -.2rem;
  }

  .fas.fa-eye {
    font-size: 1.1rem;
  }

  .tabAnalise th tr {
    font-size: 1rem;
  }
}

</style>