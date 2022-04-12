<template>
<div class="tableContent">
 
      <table cellpadding="0" cellspacing="0">

        <thead>
          <th>Identificação</th>
          <th v-for="x in arrayFilter(variables[0].items)" :key="x.id">{{ "Cavidade " + x.position_cavity}}</th>
        </thead>

        <tbody>
          
          <tr v-for="i in variables" :key="i" >
               
               <td> {{ i.variable}} </td>
               <td v-for="item in arrayFilter(i.items)" :key="item">
                <div v-if="item !== null">
                   <input class="input-test" type="number" :min="item.variable.min" :max="item.variable.max" v-model="item.value" required >
                </div>
               </td>   
          </tr>
             
           
        </tbody>
      </table>

  </div>
</template>

<script>
export default {

    props: {
        variables: Object,
    },
    methods : {
        arrayFilter(arr){
         var arraySemVazios = arr.filter(function (i) {
         return i;
       });

       return arraySemVazios

       }
    },
    watch : {
      variables : {
            deep: true,
            immediate:true,
            handler(newValue){
             this.$emit("variablesModification",newValue)
            }
      }
    }
  


    
};

</script>

<style scoped>

fieldset {
  width: 100%;
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: -20px;
}

legend {
  font-size: 30px;
  font-weight: 600;
  color: var(--black_text);
}

.tableContent {
  width: 100%;
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

.table td {
  text-align: center;
  border-top: 0.4px solid rgba(0, 0, 0, 0.199);
}

.inputdataCav {
  padding: 0 10px 0 10px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid var(--black_text);
  outline: none;
}


.tableContent td {
  text-align: center;
  height: 30px;
  padding: 0 10px 0 10px;
}

.input-test{       
  
  width: 40%;
  height: 40px;
  text-align: center;
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