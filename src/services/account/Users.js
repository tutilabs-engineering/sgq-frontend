import { http } from "../config";
// const login = "sessions"
// const users = "users/"

export default {

    sessions: async (dataLogin) => {
        return await http.post("sessions", dataLogin)
    },

    findUserById: (id) => {
        return http.get(`users/${id}`)
    }

    // verify: async () => {
    //     return await http.post("/verifyToken")
    // }

}