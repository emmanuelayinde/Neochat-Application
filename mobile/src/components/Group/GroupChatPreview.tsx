
import React from 'react'
import { Image, Pressable, Text, View } from '../styled'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProps } from '../../navigations/types'


interface GroupChatPreviewType {
    avatar: string | undefined,
    lastMessage: { user: string, text: string } | undefined,
    newNessageCounter: number | undefined,
    lastSeen: string,
    groupName: string
}


const GroupChatPreview = ({ avatar, groupName, lastMessage, lastSeen, newNessageCounter }: GroupChatPreviewType) => {
    const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();
    return (
        <Pressable onPress={() => navigation.navigate('GroupChat')}>
            <View className='w-full h-fit py-2 px-4 flex-row justify-between items-center'>
                <View className='space-x-4 flex-row items-center '>
                    {/*  */}
                    <Pressable className={` w-12 h-12 rounded-full`}>
                        <Image className='w-full h-full rounded-full' resizeMode='contain' source={{ uri: avatar || avatar }} />
                    </Pressable>
                    <View className='space-y-2'>
                        <Text className='text-lg font-bold capitalize text-[#090909]'>{groupName}</Text>
                        {
                            lastMessage && <View className='flex-row space-x-1 items-center' >
                                <Text className='text-xs font-semibold text-primaryText '>{lastMessage?.user?.length > 25 ? lastMessage?.user.slice(0, 25) + '...' : lastMessage?.user} : </Text>
                                <Text className='text-xs font-normal text-primaryText '>{lastMessage?.text?.length > 45 ? lastMessage?.text.slice(0, 45) + '...' : lastMessage?.text}</Text>
                            </View>
                        }
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
    )
}

export default GroupChatPreview