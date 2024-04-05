import React, { useEffect, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, } from '../../components/styled'
import { ChatPreview, ChatPreviewLoadingSkeleton, DynamicHeader } from '../../components'
import { Animated } from 'react-native'
import useCurrentUser from '../../hooks/useUser'
import { socketEvents, IChatPreview } from '../../@types'
import { socket } from '../../utils/socket'
import { useChat } from '../../hooks'
import { FlashList as InfiniteFlatList } from '@shopify/flash-list'


const PersonalChatScreen = () => {
  const { currentUser } = useCurrentUser()
  const [userChats, setUserChats] = useState([])

  const scrollOffsetY = useRef(new Animated.Value(0)).current

  useEffect(() => {
    socket?.on<socketEvents>('fetchUserChats', (res) => console.log({ res }))
    return () => {
      socket?.removeAllListeners()
    }
  }, [])

  const { data, isError, isLoading } = useChat()

  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9' }}>
      <StatusBar style='dark' />
      <DynamicHeader scrollOffsetY={scrollOffsetY} />
      {/* Chats List */}
      <ScrollView >
        {isLoading ? <ChatPreviewLoadingSkeleton /> : !isError && data && <InfiniteFlatList<IChatPreview>
          data={data}
          renderItem={({ item }) => <ChatPreview
            chat={item}
            isGroup={false}
          />}
          estimatedItemSize={20}
        />}
      </ScrollView>
    </SafeAreaView>
  )
}

export default PersonalChatScreen