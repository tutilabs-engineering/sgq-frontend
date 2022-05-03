import { http } from "../config"

export default {
  listProducts: async () => {
    return await http.get("product-internal")
    // lista todos o produtos cadastrados no banco
  },

  searchProductByCodeProduct: async (code_product) => {
    return await http.get(`product/sap/${code_product}`)
  }
}
