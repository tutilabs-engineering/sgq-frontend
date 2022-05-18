import axios from "axios"

const http = axios.create({
    baseURL: "http://185.209.179.253:7600/api/v1/sap/tutilabs/ops/",
    headers: {
        "Accept": "application/json",
        "Content": "application/json"
    }
  })


export { http };