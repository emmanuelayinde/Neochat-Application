export interface IUserData {
    _id: string,
    avatar: string | null,
    name: string,
    username: string,
    email: string,
    isOnline: boolean | undefined,
    lastSeen: Date | undefined
  }
  
  
  export interface IUserProps {
    user: IUserData | null;
    userToken: string | null
  }
  