<template>
  <div class="tableContent">
    <fieldset>
      <legend>Componentes</legend>
    <table cellpadding="0" cellspacing="0">
      <thead>
        <th>#</th>
        <th>N° do Item</th>
        <th>Descrição</th>
        <th>UM</th>
        <th>Planejado</th>
      </thead>

      <tbody>
        <tr v-for="component in componentsInfo" :key="component.DocEntry">
          <td>{{ component.DocEntry }}</td>
          <td>{{ component.ItemCode }}</td>
          <td>{{ component.description }}</td>
          <td>{{ component.um }}</td>
          <td>{{ component.PlannedQty }}</td>
        </tr>
      </tbody>
    </table>
    </fieldset>
  </div>
</template>

<script>
export default {
  setup() {},
  name: "TableCavidade",
  data() {
    return {
      
    };
  },
  props: {
    componentsInfo: Array
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
  color: #292828;
  padding: 10px 10px 10px 10px;
}

.tableContent tr {
  height: 60px;
}

table td {
  border-bottom: 0.4px solid rgba(0, 0, 0, 0.199);
}

.tableContent td {
  text-align: center;
  height: 30px;
  padding: 0 20px 0 20px;
}

@media (max-width: 765px) {
  .tableContent {
    padding-left: 30vh;
  }
}
</style>