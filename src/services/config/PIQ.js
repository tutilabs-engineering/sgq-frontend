import axios from "axios"
import Cookie from 'js-cookie'

const httpPIQ = axios.create({
    baseURL: "http://185.209.179.253:8800",
    headers: {
        "Accept": "application/json",
        "Content": "application/json",
        'Authorization': 'Bearer ' + Cookie.get("token")
    }
  })


export { httpPIQ };