import React from 'react'
import { Image, Pressable, Text, View } from '../styled'
import { Entypo } from '@expo/vector-icons';
import { avatar } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProps } from '../../@types';



const NewStatusPreview = () => {
    const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();
    return (
        <Pressable onPress={() => navigation.navigate('NewMediaStatus')} android_ripple={{ color: '#4b5563', borderless: false, foreground: false }} className='flex-row space-x-4 items-center py-2 my-2 px-4'>
            <View className={`w-12 h-12 rounded-full relative`}>
                <Image className='w-full h-full rounded-full' resizeMode='contain' source={{ uri: avatar }} />
                <View className='absolute bottom-0 right-0 z-20 bg-primary w-5 h-5 rounded-full justify-center items-center p-[2px]'>
                    <Entypo name='plus' color={'#f9f9f9'} size={16} />
                </View>
            </View>
            <View className='space-y-1'>
                <Text className='text-lg font-semibold text-gray-900'>
                    My status
                </Text>
                <Text className='text-sm font-medium text-gray-400'>
                    Tap here to create a media status | Video or Image
                </Text>
            </View>
        </Pressable>
    )
}

export default NewStatusPreview