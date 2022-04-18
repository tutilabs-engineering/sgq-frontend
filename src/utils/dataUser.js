const jwt = require("jsonwebtoken")
const { http } = require('../services/config')

export default { 
  
   async DataUser() {
    const secret =
    "cf2cf1732834hh4hsg657tvdbsi84732492ccF=2=eyfgewyf6329382¨&%$gydsu";

  const token = sessionStorage.getItem("token");

  if (token) {
    try {
      const { sub } = await jwt.verify(token, secret);
      const id = sub
       return await http.get(`users/${id}`)
       .then((res) => { return res })
       .catch((error)=> console.log(error));

    } catch (error) {
      console.log(error);
    }
  }



}
}
