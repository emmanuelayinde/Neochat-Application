import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export interface userState {
  user: {} | null;
}
