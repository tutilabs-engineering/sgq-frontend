import { http } from "../config";
// const login = "sessions"
// const users = "users/"

export default {

    sessions: async (dataLogin) => {
        return await http.post("sessions", dataLogin)
    },

    findUserById: (id) => {
        return http.get(`users/${id}`)
    },

    listUsers: () => {
        return http.get('users')
    },

    registerUser: async (data) => {
        return await http.post('users', data)
    },

    validate: () => {
        return http.get("validateToken")
    },

    updateUser: (dataUpdateUser) => {
        return http.put("users", dataUpdateUser)
    }

}