import axios from "axios"

//LOCAL

const http = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Accept": "application/json",
        "Content": "application/json"
    }
})

// API SAP

// const httpSAP = axios.create({
//   baseURL: "http://192.168.7.212:3300/api/v1/sap/tutilabs/ops/",
//   headers: {
//     "Accept": "application/json",
//     "Content": "application/json"
//   }
// })

// SERVER

// const http = axios.create({
//   baseURL: "http://185.209.179.253:7600",
//   headers: {
//     "Accept": "application/json",
//     "Content": "application/json"
//   }
// })

http.interceptors.request.use(function (config) {
  let token = sessionStorage.getItem("token");

  if (!token) {
    token = "";
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;
},
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
export { http, };