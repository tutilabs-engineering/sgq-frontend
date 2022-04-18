import axios from "axios"

const http = axios.create({
    baseURL: "http://192.168.7.212:3300/api/v1/sap/tutilabs/ops/",
    headers: {
        "Accept": "application/json",
        "Content": "application/json"
    }
  })


export { http };