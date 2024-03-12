export interface httpResponseType<T> {
    statusCode: number;
    error: boolean;
    data?: T;
    message: string;
  }