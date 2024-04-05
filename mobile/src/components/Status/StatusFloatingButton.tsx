
import React from 'react'
import { Pressable, View } from '../styled'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProps } from '../../@types';


const StatusFloatingButton = () => {
    const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>()

    return (
        <Pressable
            onPress={e => navigation.navigate('NewMediaStatus')}
            android_ripple={{ color: '#056526', borderless: false, foreground: true }}
            className='overflow-hidden absolute bottom-5 right-5 w-12 h-12 rounded-full items-center justify-center bg-primary'>
            <Entypo name='video-camera' size={24} color={'#f9f9f9'} />
        </Pressable>
    )
}

export default StatusFloatingButton