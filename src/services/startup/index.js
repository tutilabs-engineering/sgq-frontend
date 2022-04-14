import { http } from "../config"

export default {
  listDataByCodeOp: async (code_op) => {
    return await http.get(`/reportStartup/dataOp/${code_op}`)
    // return await httpSAP.get(`/${code_op}`)
  },

  listAllStartups: async () => {
    return await http.get(`/reportStartup`)
  },

  listAllDefaultQuestions: async () => {
    return http.get(`/reportStartup/defaultQuestions`)
  },

  createNewStartup: async (data) => {
    return http.post(`/reportStartup/`, data)
  },
  fillReportStartup: async (id_startup,data) => {
    return http.post(`/reportStartup/fill/${id_startup}`, data)
  },

  listCountOfStartupsByStatus: async () => {
    return http.get(`/reportStartup/management/count`)
  },

  findReportStartupById: async (id) => {
    return http.get(`/reportStartup/${id}`)
  }
}