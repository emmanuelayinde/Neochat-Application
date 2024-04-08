import { screenProps, screenTypes, tabTypes, themeModeTypes } from ".";
import store from "../redux/store";


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type DispatchFunc = () => AppDispatch;

export interface ILayoutProps {
    currentTabs: tabTypes,
    currentScreen: screenProps | undefined,
    themeMode: themeModeTypes
}

