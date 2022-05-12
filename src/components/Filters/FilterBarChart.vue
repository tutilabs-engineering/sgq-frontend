<template>
  <input type="date" v-model="config.date" />
<<<<<<< HEAD
  <select v-model="config.product">
    <option value="">Produto</option>
    <option v-for="l in listProduct" :key="l.code_product" :value="l.code_product">{{l.desc_product}}</option>
=======
  
  <select v-model="config.product">
    <option value="">Produto</option>
    <option v-for="l in listProduct" :key="l.code_product" :value="l.code_product">{{l.desc_product}}</option>

 
>>>>>>> 51e00e294d89b443bdf2dbb4aab91d2308d94d5a
  </select>
  <select  v-model="config.client">
    <option value="">Cliente</option>
    <option v-for="l in listClient" :key="l.code_client" :value="l.code_client">{{l.client}}</option>
<<<<<<< HEAD
  </select>
  <select  v-model="config.machine">
    <option value="">Máquina</option>
    <option v-for="l in listMachine" :key="l.machine" :value="l.machine">{{l.machine}}</option>
=======

  </select>

  <select  v-model="config.machine">
    <option value="">Máquina</option>
    <option v-for="l in listMachine" :key="l.machine" :value="l.machine">{{l.machine}}</option>

>>>>>>> 51e00e294d89b443bdf2dbb4aab91d2308d94d5a
  </select>
</template>
<script>
import dayjs from 'dayjs'
import http from "../../services/dashboard/Dashboard"
export default {
  name: "FilterBarChart",
  data(){
    return{
      config : {
        date : dayjs().format('YYYY-MM-DD'),
        machine : "",
        client : "",
        product : ""
      },
      listProduct : [],
      listClient : [],
      listMachine : []
    }
  },
  async created(){
   const listFilter =  await http.ListAllFilter();
   this.listMachine = listFilter.data.list.listMachine
      this.listClient = listFilter.data.list.listClient
         this.listProduct = listFilter.data.list.listProduct
  },
  watch : {
    config : {
      deep: true,
      immediate : true,
      handler(newValue){
         this.$emit("getSelectedConfig",newValue)
      }
    }
  }
};
</script>
<style scoped>
input,
select {
  background: #E9DFDF;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
}
</style>