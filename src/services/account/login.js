import { http } from "../config";
const url = "user/login"

export default {

    login: (login) =>{

        return http.post(url, login);

    }
}