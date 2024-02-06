import api from ".";

export interface httpResponseType {
  statusCode: number;
  error: boolean;
  data: {};
  message: string;
  cl: NodeIterator;
}

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
): Promise<httpResponseType | null> => {
  try {
    const response = await api.post("/auth/register", {
      name,
      email,
      password,
      confirmPassword,
    });

    console.log("API.....", response.config, response.headers);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log({ error });
    return null;
  }
};


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
): Promise<httpResponseType | null> => {
  try {
    const response = await api.post("/auth/login", {
      emailOrUsername,
      password,
    });
    return response.data;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const sendPasswordResetLink = async (
  email: string
): Promise<httpResponseType | null> => {
  try {
    const response = await api.put("/auth/forgot-password", {
      email,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log({ error });
    return null;
  }
};
