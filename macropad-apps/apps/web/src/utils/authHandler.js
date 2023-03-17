import axios from "../api/axios";
const LOGIN_URL = "auth/login";
const REGISTER_URL = "auth/register";



const handleLogin = async (email,password) => {
    try {
        const json = JSON.stringify({email: email, password: password});
        const response = await axios.post(LOGIN_URL, json, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return 200;
        console.log("Uscito success");

      } catch (err) {
        console.log(err);
        if (!err?.response) {
          //setErrMsg("No Server Response");
          console.log("No Server Response");
          return 500;
        } else if (err.response?.status === 400) {
          //setErrMsg("Missing Username or Password");
          console.log("Missing Username or Password");
          return 400;
        } else if (err.response?.status === 401) {
          //setErrMsg("Unauthorized");
          console.log("Unauthorized");
          return 401;
        } else {
          //setErrMsg("Login Failed");
          console.log("Login Failed");
        }
        //errRef.current.focus();
      }
}


const handleRegister = async (e) => {

} 

export { handleLogin, handleRegister };