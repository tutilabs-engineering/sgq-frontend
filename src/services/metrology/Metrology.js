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

}