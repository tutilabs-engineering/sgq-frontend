import { http } from "../config"

export default {
  listProducts: async () => {
    return await http.get("product/sap")
  },
}
