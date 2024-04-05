import React, { useEffect, useState } from 'react'

import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View } from '../../components/styled'
import { ChatFooter, ChatHead, ChatMessageDisplay } from '../../components'
import { useRoute } from '@react-navigation/native'
import { socket } from '../../utils/socket'
import { IChatProps, RootStackScreenProps, socketEvents } from '../../@types'


const OneToOneChat = () => {
  const route = useRoute<RootStackScreenProps<'OneToOneChat'>['route']>()

  const [message, setMessage] = useState('')
  const [recording, isRecording] = useState(false)
  const [chatMessages, setChatMessages] = useState<IChatProps>()

  useEffect(() => {
    socket.emit<socketEvents>('fetchChatMessages', { chatId: route?.params?.chatId })

    socket?.on<socketEvents>('chatMessages', (res) => {
      if (!res.error) { setChatMessages(res?.data); }
    })
    return () => {
      socket?.removeAllListeners()
    }
  }, [])

  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
      <StatusBar style='dark' />
      {/* Header  */}
      <ChatHead data={route.params} />
      {/* Chat Field */}

      <View className='flex-1 w-full bg-gray-100'>
        <ScrollView>
          {chatMessages && chatMessages?.messages && chatMessages?.messages?.map(message => <ChatMessageDisplay key={message._id} message={message} />)}
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