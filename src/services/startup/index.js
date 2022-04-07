import { http } from "../config"

export default {
  listDataByCodeOp: async (code_op) => {
    return await http.get(`/reportStartup/dataOp/${code_op}`)
  },

  listAllDefaultQuestions: async () => {
    return http.get(`/reportStartup/defaultQuestions`)
  }
}