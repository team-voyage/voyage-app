import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.145.139:3000",
});

export default api;