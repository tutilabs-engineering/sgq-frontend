import axios from "axios"

const http = axios.create({
    baseURL: "http://185.209.179.253:7600",
    headers: {
        "Accept": "application/json",
        "Content": "application/json"
    }
})

http.interceptors.request.use(function (config) {
    let token = sessionStorage.getItem("token");

    if(!token) {
        token = "";
    }

    config.headers.Authorization = `Bearer ${token}`;
    return config;
},
  (error) => {
    console.log(error)  
    return Promise.reject(error)} 
)
export { http };