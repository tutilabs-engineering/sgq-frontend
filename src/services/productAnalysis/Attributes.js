import { http } from "../config"

export default {
  CreateAttribute: async (data) => {
    return await http.post("attribute", data)
  },

  FindAttributesByCodeProduct: async (code_product) => {
    return await http.get(`attribute/${code_product}`)
  },
}
