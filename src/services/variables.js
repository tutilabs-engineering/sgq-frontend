import { http } from "./config";
const url = "variable";

export default{

    findByProductCode: (codeProduct) =>{

        return http.get(url + "/bycode/" + codeProduct);

    },
    deleteVariable: (idVariable) =>{

        return http.delete(url + "/"+ idVariable);

    },
    createVariable: (variable) => {
        return http.post(url, variable)
    },

    insertFile: (data) => {
        return http.put(url, data)
    }

}