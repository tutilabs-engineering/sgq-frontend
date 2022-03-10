import { http } from "../config"

export default {
  listDataByCodeOp: async (code_op) => {
    return await http.get(`/dataOp/${code_op}`)
  },

  listAllDefaultQuestions: async () => {
    return http.get(`/defaultQuestions`)
  }
}