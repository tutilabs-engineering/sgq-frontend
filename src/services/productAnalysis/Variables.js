import { http } from "../config"

export default {
  CreateVariable: async (data) => {
    return await http.post("variable/", data)
  },

  FindVariableByCodeProduct: async (code_product) => {
    return await http.get(`variable/${code_product}`)
  },

  DeleteVariable: async (id) => {
    return await http.delete(`variable/${id}`)
  }

}
