import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "./store";
import { Socket } from "socket.io-client";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


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


export interface socketState {
  isConnected: boolean,
  socketId: string | null,
  socket: Socket | null,
}


