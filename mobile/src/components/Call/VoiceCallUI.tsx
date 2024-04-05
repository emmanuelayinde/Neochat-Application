import React from 'react'
import { Pressable, View } from '../styled'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MainVideoFeed from './MainVideoFeed';
import SubVideoFeed from './SubVideoFeed';
import { RootStackNavigationProps } from '../../@types';

const VoiceCallUI = () => {
    const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();


    return (
        <View>
            <View className='absolute top-8 w-full flex-row items-center justify-between p-4 z-10'>
                <Pressable
                    onPress={() => navigation.goBack()}
                    android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
                    className='w-8 h-8 items-center justify-center overflow-hidden rounded-full'>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
            </View>

            <View className='flex-1 w-full  h-full'>
                <MainVideoFeed />
                <SubVideoFeed />
            </View>
        </View>
    )
}

export default VoiceCallUI