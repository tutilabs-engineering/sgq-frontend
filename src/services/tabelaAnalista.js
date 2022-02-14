import { http } from "./config";
const url = "tableProduct";

export default {

    listAllDataProducts: () =>{

        return http.get(url);

    },

}