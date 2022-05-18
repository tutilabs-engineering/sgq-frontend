import { http } from "../config";

export default {
  ListAllDataFilter: async ({machine = "", code_product = "",code_client = "",day,workShift}) => {
    return await http.post("/dashboard/time", { 
      machine,
      code_product,
      code_client,
      day,
      workShift,
    })
  },
  ListAllFilter: async () => {
    return await http.get("/dashboard/data-filter")
  },

  DefaultQuestionsDisapproved: async ({  
  date_start ,
  date_end,
  workShift
   }) => {
     console.log({date_start,date_end,workShift});
    return await http.post("/dashboard/defaultQuestionsDisapproved/filter",{date_start,date_end,workShift})
  },


}