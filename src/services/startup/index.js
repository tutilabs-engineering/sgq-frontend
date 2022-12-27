import axios from "axios"
import { http} from "../config"

export default {
  listDataByCodeOp: async (code_op) => {
    const response = await axios.get(`http://185.209.179.253:3000/api/v1/sap/tutilabs/ops/${code_op}`)
    return response
  },

  listAllStartups: async (skip=0, take=10, fk_op=undefined, status=0) => {
    return await http.get(`/reportStartup`, {
      params: {
        fk_op,
        skip,
        take,
        status
      }

    })
  },

  listAllStartupsClosed: async (skip=0, take=10, fk_op=undefined, status=1) => {
    return await http.get(`/reportStartup`, {
      params: {
        fk_op,
        skip,
        take,
        status
      }

    })
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

  listCountOfStartupsByStatus: async (skip=0, take=0, fk_op=undefined, status=0) => {
    return http.get(`/reportStartup`, {
      params: {
        fk_op,
        skip,
        take,
        status
      }

    })
  },

  filterStartupsByStatus: async (skip=0, take=10, status=1) => {
    return http.get(`/reportStartup/management/count`, {
      params: {
        skip,
        take,
        status
      }

    })
  },

  // listCountOfStartupsByStatus: async () => {
  //   return http.get(`/reportStartup?skip=0&take=0`)
  // },

  findReportStartupById: async (id) => {
    return http.get(`/reportStartup/${id}`)
  },

  addOpInStartup: async (id_startup, data) => {
    return http.post(`/reportStartup/addOp/${id_startup}`, data)
  },

  listAllMachines: async () => {
    return http.get(`/reportStartup/machines/list`)
  },

  listAllMolds: async () => {
    return http.get(`/reportStartup/molds/list`)
  },

  filterStartups: async (start_time, end_time) => {
    return http.post(`/reportStartup/management/count_filter`, { start_time, end_time}
    )
  }


}