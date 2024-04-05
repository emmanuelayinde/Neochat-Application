import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from '../styled'
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { avatar } from '../../../assets';
import { IChatHeadProps, RootStackNavigationProps, callTypes } from '../../@types';
import { envConfig } from '../../utils/config';


const ChatHead = ({ data }: { data: IChatHeadProps }) => {
    const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();
    const currentUserId = envConfig.USER_ID


    const handleOutgoingCall = (callType: callTypes) => {
        return navigation.navigate('OutgoingCall', {
            calleeId: data.userId,
            calleeSocketId: data.socketId || '',
            callerId: currentUserId,
            callType: callType,
            chatId: data.chatId,
            origin: '1-1-chat'
        })
    }

    return (
        <View className='flex-row items-center justify-between w-full h-14 p-2 bg-[#f9f9f9]' >
            {/* Avatar */}
            <View className='flex-row space-x-2 items-center'>
                <Ionicons name="arrow-back" size={24} color="#090909" />
                <TouchableOpacity className=' rounded-full border-2 border-primary' onPress={() => navigation.navigate('Profile', { userId: data.userId })}>
                    <Image source={{ uri: data?.avatar || avatar }} resizeMode='contain' className='w-9 h-9 rounded-full' />
                </TouchableOpacity>
                <View>
                    <Text className='text-lg font-bold capitalize text-[#090909]'>{data.name}</Text>
                    <Text className='text-sm font-normal text-primaryText capitalize '>

                        {data?.isOnline ?? data.lastSeen ? 'lastSeen' : 'offline'}
                    </Text>
                </View>
            </View>
            {/* Menu and Calls Icons */}
            <View className='flex-row items-center space-x-1'>
                <Pressable onPress={() => handleOutgoingCall('voice')} className='w-9 h-9 items-center justify-center p-1 rounded-full' android_ripple={{ color: '#d1d5db', borderless: true, foreground: true, radius: 22 }} >
                    <Ionicons name="call" size={24} color="#374151" />
                </Pressable>
                <Pressable onPress={() => handleOutgoingCall('video')} className='w-9 h-9 items-center justify-center p-1 rounded-full' android_ripple={{ color: '#d1d5db', borderless: true, foreground: true, radius: 22 }} >
                    <Ionicons name="videocam" size={24} color="#374151" />
                </Pressable>
                <Pressable className='w-9 h-9 items-center justify-center p-1 rounded-full' android_ripple={{ color: '#d1d5db', borderless: true, foreground: true, radius: 22 }} >
                    <Entypo name='dots-three-vertical' color={'#374151'} size={24} />
                </Pressable>
            </View>
        </View>
    )
}

export default ChatHead