import axios from "axios"

const httpPIQ = axios.create({
    baseURL: "http://185.209.179.253:8800",
    headers: {
        "Accept": "application/json",
        "Content": "application/json"
    }
  })


export { httpPIQ };