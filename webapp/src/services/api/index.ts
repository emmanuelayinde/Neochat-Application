import axios from "axios";
import { envConfig } from '../../utils/config'


export default axios.create({
  baseURL: envConfig.SERVER_URL_LOCAL + '/api/v1/',
  timeout: 10000,
  headers: {
    Authorization: `bearer ${envConfig.USER_TOKEN}`
  }
});


export const apiEndpoints = {
  // CHats Endpoints
  chats: {
    fetchUserChats: (userId: string) => ({
      route: `/chat/user-chats/${userId}`,
      method: 'get'
    }),
  }
}
