import { View, Text } from 'react-native'
import React from 'react'
import { IMessageProps } from '../../../@types'

const VoiceMessage = ({ message, currentUser }: { message: IMessageProps, currentUser: string }) => {
  return (
    <View>
      <Text>VoiceMessage</Text>
    </View>
  )
}

export default VoiceMessage