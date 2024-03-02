import axios, { AxiosError } from "axios";
import api from ".";
import { IUserData } from "../../redux/type";

export interface httpResponseType<T> {
  statusCode: number;
  error: boolean;
  data?: T;
  message: string;
}


// const retrieveToken = (rawToken: string) => {
//   // response.headers["set-cookie"]?.[0]
//   return rawToken.split(';')[0]
// }

/**
 * Register New User
 *
 * @param emailOrUsername
 * @param password
 * @returns
 */
export const createNewAccount = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): Promise<httpResponseType<IUserData>> => {
  try {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
      confirmPassword,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error
      const axiosError = error as AxiosError;
      const errorResponse = axiosError.response?.data as httpResponseType<{}>
      return {
        error: errorResponse.error,
        message: errorResponse.message,
        statusCode: errorResponse.statusCode
      }
    } else {
      return {
        error: true,
        message: 'Something went wrong',
        statusCode: 500,
      }
    }
  }
}

/**
 * Login User to System
 *
 * @param emailOrUsername
 * @param password
 * @returns
 */
export const login = async (
  emailOrUsername: string,
  password: string
): Promise<httpResponseType<IUserData>> => {
  try {
    const response = await api.post("/auth/login", {
      emailOrUsername,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error
      const axiosError = error as AxiosError;
      const errorResponse = axiosError.response?.data as httpResponseType<{}>
      return {
        error: errorResponse.error,
        message: errorResponse.message,
        statusCode: errorResponse.statusCode
      }
    } else {
      return {
        error: true,
        message: 'Something went wrong',
        statusCode: 500,
      }
    }
  }
}

export const sendPasswordResetLink = async (
  email: string
): Promise<httpResponseType<{}>> => {
  try {
    const response = await api.put("/auth/forgot-password", {
      email,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Axios error
      const axiosError = error as AxiosError;
      const errorResponse = axiosError.response?.data as httpResponseType<{}>
      return {
        error: errorResponse.error,
        message: errorResponse.message,
        statusCode: errorResponse.statusCode
      }
    } else {
      return {
        error: true,
        message: 'Something went wrong',
        statusCode: 500,
      }
    }
  }
}