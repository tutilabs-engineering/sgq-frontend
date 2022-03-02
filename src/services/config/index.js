import axios from "axios"

const http = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        "Accept": "application/json",
        "Content": "application/json"
    }
})

// const httpLogin = axios.create({
//     baseURL: "http://localhost:8000/"
// })


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