import axios from "axios"
import { http } from "../config"
import { httpPIQ } from "../config/PIQ"

export default {
  createPIQ: async (piq) => {
    // return await httpPIQ.post("/startup", piq )
  },
  listDataByCodeOp: async (code_op) => {
    const response = await axios.get(`http://185.209.179.253:3000/api/v1/sap/tutilabs/ops/${code_op}`)
    return response
  },

  listAllStartups: async (skip = 0, take = 10, fk_op = undefined, status = 0, machine) => {
    return await http.get(`/reportStartup`, {
      params: {
        fk_op,
        skip,
        take,
        status,
        machine
      }

    })
  },

  listAllStartupsClosed: async (skip = 0, take = 10, fk_op = undefined, status = 1, machine) => {
    return await http.get(`/reportStartup`, {
      params: {
        fk_op,
        skip,
        take,
        status,
        machine
      }

    })
  },

  listAllDefaultQuestions: async () => {
    return http.get(`/reportStartup/defaultQuestions`)
  },

  createNewStartup: async (data) => {
    return http.post(`/reportStartup/`, data)
  },

  fillReportStartup: async (id_startup, data) => {
    return http.post(`/reportStartup/fill/${id_startup}`, data)
  },

  listCountOfStartupsByStatus: async (skip = 0, take = 0, fk_op = undefined, status = 0) => {
    return http.get(`/reportStartup`, {
      params: {
        fk_op,
        skip,
        take,
        status
      }

    })
  },

  filterStartupsByStatus: async (skip = 0, take = 10, status = 1) => {
    return http.get(`/reportStartup/management/count`, {
      params: {
        skip,
        take,
        status
      }

    })
  },


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
    return http.post(`/reportStartup/management/count_filter`, { start_time, end_time }
    )
  },

  createPointPoint: async (data) => {
    return http.post('/pointToPoint', data)
  }


}
