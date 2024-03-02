import axios from "axios";
import { envConfig } from "../../utils/config";


export default axios.create({
  baseURL: envConfig.SERVER_URL_LOCAL + '/api/v1/',
  timeout: 10000,
  headers: {}
});
