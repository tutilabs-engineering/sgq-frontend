import { http } from "../config"

export default {
  CreateAttribute: async (data) => {
    return await http.post("attribute", data)
  },
}
