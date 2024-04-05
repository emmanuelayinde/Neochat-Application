import React, { useState } from 'react'
import { Image, Pressable, Text, View } from '../styled'
import { useNavigation } from '@react-navigation/native'
import SwipeableChatPreview from './SwipeableChatPreview'
import { RootStackNavigationProps } from '../../navigations/types'
import { IChatPreview } from '../../@types'
import { avatar } from '../../../assets'
import { envConfig } from '../../utils/config'


const ChatPreview = ({ chat, isGroup }: { chat: IChatPreview, isGroup: boolean }) => {
  const [hasStatus, setHasStatus] = useState<boolean>(false)
  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();



  const handlePageRoute = (isGroup: boolean | undefined) => {
    if (isGroup) {
      navigation.navigate('GroupChat')
    }
    else {
      const secondParticipant = chat.participants.filter(participant => participant._id !== envConfig.USER_ID)[0]
      navigation.navigate('OneToOneChat', {
        chatId: chat?._id,
        userId: secondParticipant?._id,
        name: secondParticipant?.name,
        avatar: secondParticipant?.avatar,
        lastSeen: secondParticipant?.lastSeen,
        isOnline: secondParticipant?.isOnline,
      })
    }
  }
  return (
    <SwipeableChatPreview>
      <Pressable onPress={() => handlePageRoute(isGroup)}>
        <View className='w-full h-fit py-2 px-4 flex-row justify-between border-b-2 border-b-white items-center'>
          <View className='space-x-4 flex-row items-center '>
            {/*  */}
            <Pressable className={`${hasStatus && 'border-2 border-primary'} w-12 h-12 z-20 rounded-full`}>
              <Image className='w-full h-full rounded-full' resizeMode='contain' source={{ uri: chat.participants[1].avatar || avatar }} />
            </Pressable>
            <View className='space-y-2'>
              <Text className='text-lg font-bold capitalize text-[#090909]'>{chat.participants[1].name}</Text>
              <Text className='text-xs font-normal text-primaryText '>{!chat.lastMessage ? 'New chat with ' + chat.participants[1].username : chat.lastMessage?.text?.length > 45 ? chat.lastMessage?.text?.slice(0, 45) + '...' : chat.lastMessage?.text}</Text>
            </View>
          </View>
          {/*  */}
          <View className='items-end space-y-2' >
            <View className='items-center justify-center bg-primary rounded-full w-5 h-5'>
              <Text className='text-white font-semibold text-sm'>
                9+
              </Text>
            </View>
            <Text>
              12 / 23 / 34
            </Text>

          </View>
        </View>
      </Pressable>
    </SwipeableChatPreview>
  )
}

export default ChatPreview