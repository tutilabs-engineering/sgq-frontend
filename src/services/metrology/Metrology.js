import { http } from "../config";

export default {
    ListMetrologyHistory: async () => {
        return await http.get("metrology/history")
    },

    ListMetrologySolicitations: async () => {
        return await http.get("metrology/solicitations")
    },

    FindMetrologyById: async (id) => {
        return await http.get(`metrology/${id}`)
    },

    JoinMetrologyByUserId: async (id, code_startup) => {
        return await http.patch(`metrology/join/${code_startup}`, {id})
    }


}