import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RootNavigator } from './src/navigations';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
import SocketProvider from './src/utils/socket';



export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <Provider store={store}>
                <SocketProvider>
                    <SafeAreaProvider style={{ flex: 1 }}>
                        <BottomSheetModalProvider>
                            <NavigationContainer>
                                <RootNavigator />
                                <Toast visibilityTime={4000} />
                            </NavigationContainer>
                        </BottomSheetModalProvider>
                    </SafeAreaProvider>
                </SocketProvider>
            </Provider>
        </GestureHandlerRootView>
    );
}
