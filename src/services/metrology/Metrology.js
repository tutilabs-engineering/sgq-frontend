import { http } from "../config";

export default {
    ListMetrologyHistory: async () => {
        return await http.get("metrology/history")
    },

    ListMetrologySolicitations: async () => {
        return await http.get("metrology/solicitations")
    },

    FindMetrologyById: async (startup) => {
        return await http.get(`metrology/${startup}`)
    },
    JoinMetrologyByUserId: async (user, startup) => {
        console.log(user, startup);
        return await http.patch(`metrology/join/${startup}`, {user})
    },
    
    UpdateDataMetrologyOfStartup: async (startup,data) => {
      return await http.put(`metrology/data/${startup}`,data)
  }


}