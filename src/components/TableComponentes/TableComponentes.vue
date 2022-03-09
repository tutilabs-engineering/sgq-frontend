<template>
  <div className="tableContent">
    <table cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th colspan="5"><h2>Componentes</h2></th>
        </tr>
      </thead>

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
.tableContent {
  padding: 0px 25px 0px 25px;
  width: 100%;
  overflow-x: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.tableContent table {
  background-color: var(--card-color);
  width: 85%;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.466);
  overflow-x: scroll;
  border-right: 7px solid var(--button-color-03);
}

table th {
  height: 50px;
  font-size: 17px;
  color: #292828;
  padding: 10px 10px 0 10px;
}

.tableContent tr {
  height: 60px;
}

table td {
  border-top: 0.4px solid rgba(0, 0, 0, 0.199);
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