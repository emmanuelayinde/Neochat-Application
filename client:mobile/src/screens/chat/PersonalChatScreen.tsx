import React, { useRef } from 'react'
import { ScrollView, } from '../../components/styled'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatPreview, DynamicHeader } from '../../components'
import { avatars } from '../../utils/avatar'
import { RootStackNavigationProps } from '../../navigations/types'
import { useNavigation } from '@react-navigation/native'
import { Animated } from 'react-native'


const PersonalChatScreen = () => {
  const navigation = useNavigation<RootStackNavigationProps<'ChatsTab'>>()
  const scrollOffsetY = useRef(new Animated.Value(0)).current

  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9' }}>
      <StatusBar style='dark' />

      <DynamicHeader scrollOffsetY={scrollOffsetY} />
      

      {/* Chats List */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={4}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }], { useNativeDriver: false })}
        className='py-2 bg-[#f1f1f1] w-full h-full divide-y-2 divide-double divide-black'
      >
        <ChatPreview
          avatar={avatars[7].url}
          lastMessage='Thank you...'
          lastSeen='2 hours'
          name='Dev Ishola'
          hasStatus={false}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[9].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[2].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[3].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[13].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[7].url}
          lastMessage='Thank you'
          lastSeen='2 hours'
          name='Dev Ishola'
          hasStatus={false}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[9].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[2].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[3].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />

        <ChatPreview
          avatar={avatars[13].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[7].url}
          lastMessage='Thank you'
          lastSeen='2 hours'
          name='Dev Ishola'
          hasStatus={false}
          isGroup={false}
          newNessageCounter={9}
        />
        <ChatPreview
          avatar={avatars[9].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[2].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
        <ChatPreview
          avatar={avatars[3].url}
          lastMessage='Okay dear, I will be there. Thank you for informing and reminding me'
          lastSeen='3 mins'
          name='Emmanuel Ishola'
          hasStatus={true}
          isGroup={false}
          newNessageCounter={4}
        />
      </ScrollView>

    </SafeAreaView>

  )
}

export default PersonalChatScreen