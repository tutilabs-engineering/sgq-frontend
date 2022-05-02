import { http } from "../config"

export default {
  listProducts: async () => {
    return await http.get("product/sap")
  },

  searchProductByCodeProduct: async (code_product) => {
    return await http.get(`product/sap/${code_product}`)
  }
}
