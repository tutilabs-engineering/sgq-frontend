<template>
<div class="tableContent">
    <fieldset>
      <legend>Dados Técnicos</legend>
      
      <table cellpadding="0" cellspacing="0">

        <thead>
          <th>Cavidade</th>
          <th>Ciclo</th>
        </thead>

        <tbody>
          <tr>
            <td>{{techniqueInfo.cavity}}</td>
            <td>{{techniqueInfo.cycle}}</td>
          </tr>
        </tbody>
      </table>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: {
    techniqueInfo: Object
  }
};

</script>

<style scoped>

fieldset {
  border: 1px solid rgba(37, 36, 36, 0.281);
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

.tableContent {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
}

table {
  width: 100%;
  padding: 20px;
  background-color: transparent;
}

table th {
  font-size: 17px;
  color:  var(--black_text);
  padding: 10px 10px 10px 10px;
}

.tableContent tr {
  height: 60px;
}

table td {
  text-align: center;
  border-top: 0.4px solid rgba(0, 0, 0, 0.199);
}

.tableContent td {
  text-align: center;
  height: 30px;
  padding: 0 10px 0 10px;
}

@media (max-width: 965px) {
  .tableContent {
    padding: 0;
  }

  legend {
    text-align: center;
  }
}
</style>