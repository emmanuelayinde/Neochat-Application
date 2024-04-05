import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, View } from '../styled'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { avatar } from '../../../assets';
import { RootStackNavigationProps } from '../../@types';

const VideoCallUI = () => {
    const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();

    return (
        <View>
            {/* Back Button */}
            <View className='absolute top-0 w-full flex-row items-center justify-between p-2 z-10'>
                <Pressable
                    onPress={() => navigation.goBack()}
                    android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
                    className='w-10 h-10 items-center justify-center overflow-hidden rounded-full'>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
            </View>

            {/* Video Feed */}
            <View className='flex-1 w-full  h-full'>
                <Image source={{ uri: avatar }} className='w-full h-full' resizeMode='cover' />
            </View>
        </View>
    )
}

export default VideoCallUI