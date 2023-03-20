import axios from "./axios";
const LOGIN_URL = "auth/login";
const REGISTER_URL = "auth/register";


class AuthProvider {
  static async login(email, password) {
    const authPayload = JSON.stringify({ email, password });

    const { response } = await axios.post(LOGIN_URL, authPayload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // user exists, store user data
    if (response.data.success) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    // if user does not exist
    // returns error data
    // (assuming it is handled in the rest-api)
    return response.data;
  }

  static async register(email, password) {
    const registerPayload = JSON.stringify({ email, password });

    const { response } = await axios.post(REGISTER_URL, registerPayload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.success) {
      //Redirect to login page
      // il redirect e' meglio se lo gestisci
      // nel componente in React.
      // Ma se non vuoi sbatterti troppo
      // fai pure `location.href = '/route'`.
    }

    return response.data;
  }

  static logout() {
    localStorage.removeItem('user');
  }

  static getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthProvider();