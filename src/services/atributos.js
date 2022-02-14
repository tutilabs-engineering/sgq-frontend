import { http } from "./config";
const url = "question"

export default {

    listAllQuestionsAttributes: () =>{

        return http.get(url);

    },

    createQuestion: (question) =>{
        return http.post(url, question); //question passed as parameter, is the question inserted in the input
    },

    changeStatus: (questionEdit)=>{
        return http.put(url, questionEdit)
    },

    changeAttetion: (editAttetion)=>{
        return http.put(url + "/attetion", editAttetion)
    },
    
    listQuestionsByProductCode: (codeProduct) =>{
        return http.get(url + "/bycode/" + codeProduct)
    }
}