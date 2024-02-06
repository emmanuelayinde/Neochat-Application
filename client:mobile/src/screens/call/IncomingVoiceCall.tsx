import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from '../../components/styled'
import { callHistory } from '../../utils/data'
import { CallPreview } from '../../components'

const IncomingVoiceCallScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1, position: 'relative' }}>
      <StatusBar style='dark' />

      <Text>
        Incoming voice call
      </Text>
    </SafeAreaView>


  )
}

export default IncomingVoiceCallScreen