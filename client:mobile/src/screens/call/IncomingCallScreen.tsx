import { Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const IncomingCallScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1, position: 'relative' }}>
      <StatusBar style='dark' />

      <Text>
        Incoming video call
      </Text>
    </SafeAreaView>


  )
}

export default IncomingCallScreen