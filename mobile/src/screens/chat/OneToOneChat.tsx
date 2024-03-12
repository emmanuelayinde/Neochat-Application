import React, { useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View } from '../../components/styled'
import { ChatFooter, ChatHead, MediaMessage, TextMessage } from '../../components'


const OneToOneChat = () => {

  const [message, setMessage] = useState('')
  const [recording, isRecording] = useState(false)



  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
      <StatusBar style='dark' />

      {/* Header  */}
      <ChatHead />

      {/* Chat Field */}
      <View className='flex-1 w-full bg-gray-100'>
        <ScrollView>
          <MediaMessage isSender={true} />
          <TextMessage isSender={false} />
          <MediaMessage isSender={false} />
          <TextMessage isSender={false} />
          <MediaMessage isSender={true} />
          <TextMessage isSender={false} />
          <MediaMessage isSender={false} />
          <MediaMessage isSender={true} />
          <TextMessage isSender={false} />
          <MediaMessage isSender={false} />
          <TextMessage isSender={false} />
          <MediaMessage isSender={true} />
          <TextMessage isSender={false} />
          <MediaMessage isSender={false} />
        </ScrollView>
      </View>


      {/* Footer */}
      <ChatFooter
        messageInput={message}
        setMessageInput={setMessage}
        isRecording={recording}
        setIsRecording={isRecording} />

    </SafeAreaView >
  )
}

export default OneToOneChat