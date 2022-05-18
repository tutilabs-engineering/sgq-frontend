<template>

  <input type="date" @change="handler"  v-model="config.date_start"  />
  <input type="date" @change="handler"  v-model="config.date_end" />

   <select   @change="handler" v-model="config.workShift">
    <option :value="0"> Turno </option>
    <option :value="1">1 Turno</option>
    <option :value="2">2 Turno</option>
    <option :value="3">3 Turno</option>
  </select>

 <!-- <select name="" id="">
    <option value="">Start-up</option>
    <option value="">Start-up</option>
    <option value="">Start-up</option>
    <option value="">Start-up</option>
  </select>
  <select name="" id="">
    <option value="">Produto</option>
    <option value="">Produto</option>
    <option value="">Produto</option>
    <option value="">Produto</option>
  </select>
  <select name="" id="">
    <option value="">Cliente</option>
    <option value="">Cliente</option>
    <option value="">Cliente</option>
    <option value="">Cliente</option>
  </select>
  <select name="" id="">
    <option value="">Turno</option>
    <option value="">Turno</option>
    <option value="">Turno</option>
    <option value="">Turno</option>
  </select>
  <select name="" id="">
    <option value="">Máquina</option>
    <option value="">Máquina</option>
    <option value="">Máquina</option>
    <option value="">Máquina</option>
  </select> -->
</template>

<script>
import dayjs from "dayjs"
export default {
  name: "FilterBarChart",
  data(){
    return { 
      config : {
      date_start : dayjs().format("YYYY-MM-DD"),
      date_end : dayjs().add(6, "day").format("YYYY-MM-DD"),
      workShift: 0
      
    }
    }
  },
  methods : {
      async handler(){
         await this.$emit("getSelectedSecondConfig",this.config)
      }
    
  }
};
</script>

<style scoped>
input,
select {
  background: #e9dfdf;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  outline: none;
  border-radius: 5px;
}
</style>
