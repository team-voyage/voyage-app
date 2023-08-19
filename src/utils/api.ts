import axios from "axios";

const api = axios.create({
  baseURL: "https://voyage-one.vercel.app",
});

export const source = axios.CancelToken.source();

export default api;