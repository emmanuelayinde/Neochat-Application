import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, View } from '../../components/styled'
import { GroupChatHead, GroupChatFooter, GroupMediaMessage, GroupTextMessage } from '../../components'


const GroupChat = () => {
  const [message, setMessage] = useState('')
  const [recording, isRecording] = useState(false)


  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
      <StatusBar style='dark' />

      {/* Header  */}
      <GroupChatHead data={{}} />

      {/* Chat Field */}
      <View className='flex-1 w-full bg-gray-100'>
        <ScrollView>
          <GroupMediaMessage isSender={true}  />
          <GroupTextMessage isSender={false} />
          <GroupMediaMessage isSender={false} />
          <GroupTextMessage isSender={false} />
          <GroupMediaMessage isSender={true} />
          <GroupTextMessage isSender={false} />
          <GroupTextMessage isSender={false} />
          <GroupMediaMessage isSender={false} />
          <GroupTextMessage isSender={false} />
          <GroupMediaMessage isSender={true} />
          <GroupTextMessage isSender={false} />
          <GroupMediaMessage isSender={true} />
        </ScrollView>
      </View>


      {/* Footer */}
      <GroupChatFooter
        messageInput={message}
        setMessageInput={setMessage}
        isRecording={recording}
        setIsRecording={isRecording} />

    </SafeAreaView >
  )
}

export default GroupChat