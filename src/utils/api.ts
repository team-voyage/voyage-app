import axios from "axios";

const api = axios.create({
  baseURL: "https://voyage-one.vercel.app",
});

export default api;