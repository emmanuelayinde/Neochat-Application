
import React from 'react'
import { Text, View } from '../../components/styled'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const SettingScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
            <StatusBar style='dark' />

            <View>
                <Text>Profile SettingScreen</Text>
            </View>
        </SafeAreaView>
    )
}

export default SettingScreen