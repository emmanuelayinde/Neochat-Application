

import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from '../styled'
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { avatar } from '../../../assets';
import { RootStackNavigationProps } from '../../navigations/types';

const GroupChatHead = () => {
    const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();

    return (
        <View className='flex-row items-center justify-between w-full h-14 p-2 bg-[#f9f9f9]' >
            {/* Avatar */}
            <View className='flex-row space-x-2 items-center'>
                <Ionicons name="ios-arrow-back-outline" size={24} color="#090909" />
                <TouchableOpacity className=' rounded-full' onPress={() => navigation.navigate('AudioCall')}>
                    <Image source={{ uri: avatar }} resizeMode='contain' className='w-9 h-9 rounded-full' />
                </TouchableOpacity>
                <View className='space-y-2'>
                    <Text className='text-lg font-bold capitalize text-[#090909]'>Group Name</Text>
                    <Text className='text-xs font-normal text-primaryText '>Group members</Text>
                </View>
            </View>
            {/* Menu and Calls Icons */}
            <View className='flex-row items-center space-x-1'>
                <Pressable onPress={() => navigation.navigate('AudioCall')} className='w-9 h-9 items-center justify-center p-1 rounded-full' android_ripple={{ color: '#d1d5db', borderless: true, foreground: true, radius: 22 }} >
                    <Ionicons name="md-call" size={24} color="#374151" />
                </Pressable>
                <Pressable className='w-9 h-9 items-center justify-center p-1 rounded-full' android_ripple={{ color: '#d1d5db', borderless: true, foreground: true, radius: 22 }} >
                    <Entypo name='dots-three-vertical' color={'#374151'} size={24} />
                </Pressable>
            </View>


        </View>
    )
}

export default GroupChatHead