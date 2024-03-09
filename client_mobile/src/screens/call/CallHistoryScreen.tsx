import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { ScrollView } from '../../components/styled'
import { callHistory } from '../../utils/data'
import { CallPreview } from '../../components'

const CallHistoryScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1, position: 'relative' }}>
      <StatusBar style='dark' />

      <ScrollView>
        {callHistory.map((call, key) => <CallPreview avatar={call.avatar} caller={call.caller} duration={call.duration} status={call.status} time={call.time} key={key} />)}
      </ScrollView>
    </SafeAreaView>
  )
}

export default CallHistoryScreen