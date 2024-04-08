// import axios, { AxiosError } from "axios";
// import api from ".";
// import { IChatPreview, httpResponseType } from "../../@types";


// /**
//  * Fetch user chats
//  *
//  * @param userId
//  * @returns
//  */
// export const fetchUserChats = async (): Promise<httpResponseType<IChatPreview[]>> => {
//   try {
//     const response = await api.get(`chat/user-chats`)
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       // Axios error
//       const axiosError = error as AxiosError;
//       const errorResponse = axiosError.response?.data as httpResponseType<{}>
//       console.log({
//         error: errorResponse.error,
//         message: errorResponse.message,
//         statusCode: errorResponse.statusCode
//       })
//       return {
//         error: errorResponse.error,
//         message: errorResponse.message,
//         statusCode: errorResponse.statusCode
//       }
//     } else {
//       return {
//         error: true,
//         message: 'Something went wrong',
//         statusCode: 500,
//       }
//     }
//   }
// }