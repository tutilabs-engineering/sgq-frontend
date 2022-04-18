import axios from "axios"
import { http} from "../config"

export default {
  listDataByCodeOp: async (code_op) => {
    const response = await axios.get(`http://192.168.7.212:3300/api/v1/sap/tutilabs/ops/${code_op}`)
    console.log(response);
    return response

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