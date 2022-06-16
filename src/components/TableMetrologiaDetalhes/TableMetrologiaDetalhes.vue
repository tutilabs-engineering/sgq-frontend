<template>
<div class="tableContent">
 
      <table cellpadding="0" cellspacing="0">
 
        <thead>
          <th>Identificação</th>
          <th v-for="x in arrayFilter(variables[0].items)" :key="x.id">{{"min - Cavidade " + x.position_cavity + " - max"}}</th>
        </thead>

        <tbody>
          
          <tr v-for="i in variables" :key="i" >
               <td> {{ i.variable}} </td>
               <td v-for="item in arrayFilter(i.items)" :key="item" data-title="Cavidade">
                <div class="cavity-area" v-if="item !== null">
               
                  <span>min - {{item.variable.min}}</span>
                   <input @change="verifyValue(item.value, item.variable.min, item.variable.max)" class="input-test" type="number" :min="item.variable.min" :max="item.variable.max" v-model="item.value" required v-if="statusInput" disabled>

                   <input @change="verifyValue(item.value, item.variable.min, item.variable.max)" class="input-test" type="number" :min="item.variable.min" :max="item.variable.max" v-model="item.value" required v-else>

                   <span>{{item.variable.max}} - max</span>
            
                </div>
               </td>   
          </tr>
             
           
        </tbody>
      </table>

  </div>
</template>

<script>
export default {

    data(){
      return {
        statusInput: false,
      }
    },

    created: async function() {
      this.inputToggle()
    },

    props: {
        variables: Object,
        inputStatus: Boolean,
    },
    methods : {
      inputToggle(){
        if(this.inputStatus == true){
          this.statusInput = true
        }else {
          this.statusInput = false
        }
      },

      arrayFilter(arr){
         var arraySemVazios = arr.filter(function (i) {
         return i;
       });

       return arraySemVazios

       },

       verifyValue(item, min, max){
         if(item < min || item > max){
           console.log("Deu ruim");
         }
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
input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;

}
table {
  width: 100%;
  padding: 20px;
  background-color: transparent;
}

table th {
  font-size: 10px;
  color:  var(--black_text);
  padding: 10px 10px 10px 10px;
}

.tableContent tr {
  height: 60px;
  font-size: 10px;
  word-wrap: break-word;
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
  color: var(--black_text);
}

.cavity-area {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cavity-area span {
  flex-direction: column;
  font-size: 10px;
}

.input-test{
  border: none;
  margin: 0 20px 0 20px;
  border: 1px solid rgba(37, 36, 36, 0.281);
  border-radius: 5px;
  width: 20%;
  outline: none;
  height: 40px;
  text-align: center;

}


@media (max-width: 965px) {

  .tableContent {
    color: var(--black_text);
  }

  .tableContent {
    font-size: 10px;
  }
  
  .tableContent thead {
    
    display: none;
  }

  .tableButton {
    display: block;
  }

  .tableContent td {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    
  }

  .tableContent td:first-of-type {
    margin-top: 30px;
    font-size: 9px;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .tableContent td:not(:first-of-type):before {
    font-size: 9px;
    content: attr(data-title);
    display: block;

  }

}
</style>