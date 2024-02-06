
import React from 'react'
import { Image, Pressable, Text, View } from '../styled'
import { useNavigation } from '@react-navigation/native'
import SwipeableChatPreview from './SwipeableChatPreview'
import { RootStackNavigationProps } from '../../navigations/types'


interface ChatPreviewType {
    hasStatus: boolean,
    avatar: string | undefined,
    isGroup: boolean,
    lastMessage: string | undefined,
    newNessageCounter: number | undefined,
    lastSeen: string,
    name: string
}


const ChatPreview = ({ avatar, name, isGroup, hasStatus, lastMessage, lastSeen, newNessageCounter }: ChatPreviewType) => {
    const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();

    const handlePageRoute = (isGroup: boolean | undefined) => {
        if (isGroup) {
            navigation.navigate('GroupChat')
        }
        else {
            navigation.navigate('OneToOneChat')
        }
    }
    return (
        <SwipeableChatPreview>
            <Pressable onPress={() => handlePageRoute(isGroup)}>
                <View className='w-full h-fit py-2 px-4 flex-row justify-between border-b-2 border-b-white items-center'>
                    <View className='space-x-4 flex-row items-center '>
                        {/*  */}
                        <Pressable className={`${hasStatus && 'border-2 border-primary'} w-12 h-12 z-20 rounded-full`}>
                            <Image className='w-full h-full rounded-full' resizeMode='contain' source={{ uri: avatar || avatar }} />
                        </Pressable>
                        <View className='space-y-2'>
                            <Text className='text-lg font-bold capitalize text-[#090909]'>{name}</Text>
                            <Text className='text-xs font-normal text-primaryText '>{lastMessage && lastMessage?.length > 45 ? lastMessage?.slice(0, 45) + '...' : lastMessage}</Text>
                        </View>
                    </View>
                    {/*  */}
                    <View className='items-end space-y-2' >
                        <View className='items-center justify-center bg-primary rounded-full w-5 h-5'>
                            <Text className='text-white font-semibold text-sm'>
                                {newNessageCounter}+
                            </Text>
                        </View>
                        <Text>
                            {lastSeen}
                        </Text>

                    </View>
                </View>
            </Pressable>   
        </SwipeableChatPreview>
    )
}

export default ChatPreview