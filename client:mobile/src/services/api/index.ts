import axios from "axios";

const SERVER_URL = "https://neochat-server.onrender.com/api/v1";
const SERVER_URL_LOCAL = "http://localhost:8000/api/v1";

export default axios.create({
  baseURL: SERVER_URL,
  timeout: 10000,
  headers:{}
});
