import { http } from "../config";

export default {
  ListAllDataFilter: async ({machine = "", code_product = "",code_client = "",day}) => {
    return await http.post("/dashboard/time", { 
      machine,
      code_product,
      code_client,
      day
    })
  },
  ListAllFilter: async () => {
    return await http.get("/dashboard/data-filter")
  },

  DefaultQuestionsDisapproved: async ({  
  date_start ,
  date_end
   }) => {
    return await http.post("/dashboard/defaultQuestionsDisapproved/filter",{date_start,date_end})
  },


}