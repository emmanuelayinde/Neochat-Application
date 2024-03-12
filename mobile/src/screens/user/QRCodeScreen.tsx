
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View } from '../../components/styled'

const QRCodeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
    <StatusBar style='dark' />

    <View>
        <Text>QRCode Screen</Text>
    </View>
</SafeAreaView>
  )
}

export default QRCodeScreen