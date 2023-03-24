import axios from "axios";

/**
 * Creation axios instance for simpler usage inside the ther files.
 * Contains the baseUrl of axios instance for rest-api connection.
 */
export default axios.create({
  baseURL: "http://localhost:3001/api/v1/",
});