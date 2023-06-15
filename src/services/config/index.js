import axios from "axios"
import Cookie from 'js-cookie'

//LOCAL

// const http = axios.create({
//   baseURL: "http://192.168.2.9:8300",
//   headers: {
//     "Accept": "application/json",
//     "Content": "application/json"
//   }
// })

// API SAP

// const httpSAP = axios.create({
//   baseURL: "http://185.209.179.253:3000/api/v1/sap/tutilabs/ops/",
//   headers: {
//     "Accept": "application/json",
//     "Content": "application/json"
//   }
// })


// SERVER ->

 const http = axios.create({
   baseURL: "http://185.209.179.253:8200",
   headers: {
     "Accept": "application/json",
     "Content": "application/json"
  }
 })

//const http = axios.create({
 // baseURL: "http://localhost:8000",
  //headers: {
    //"Accept": "application/json",
    //"Content": "application/json"
 // }
//})

http.interceptors.request.use(function (config) {
  let token = Cookie.get("token");

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
export { http };
