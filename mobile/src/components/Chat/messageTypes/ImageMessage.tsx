import React from 'react'
import { Pressable, Text, View, screenWidth, Image } from '../../styled';
import { Ionicons } from '@expo/vector-icons';
import { BGImage } from '../../../../assets';
import { IMessageProps } from '../../../@types';


const ImageMessage = ({ message, currentUser }: { message: IMessageProps, currentUser: string }) => {
  const maxWidth = screenWidth * 0.7

  return (
    <View className={` ${message.sender._id === currentUser ? 'justify-start' : 'justify-end'} px-2 py-1 w-full flex-row`}>
      <Pressable
        className={`${message.sender._id === currentUser ? 'bg-gray-400' : 'bg-primary/80'} w-full p-2 rounded-md overflow-hidden `}
        style={{ maxWidth: maxWidth }}
        android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
      >
        <View className='relative w-full h-fit max-h-64' >
          <Image
            source={BGImage}
            resizeMode='cover'
            className='w-full h-full rounded-md'
          />

          {!message.text && <View className={`${message.sender._id === currentUser ? 'bg-gray-400' : 'bg-[#056526]'} absolute right-1 bottom-1 w-fit flex-row justify-end items-center space-x-1 p-2 rounded-md`}>
            <Text className='text-xs font-normal text-white'>
              12:30pm
            </Text>
            {message.sender._id != currentUser && <Ionicons name="checkmark-done-sharp" size={14} color="#43c651" />}
          </View>
          }

        </View>
        {message.text && (<>
          <Text className={`${message.sender._id === currentUser ? 'text-white' : 'text-gray-50'} font-medium `}>
            {message.text}
          </Text>
          <View className='w-full flex-row justify-end items-center space-x-1'>
            <Text className='text-xs font-normal text-white'>
              12:30pm
            </Text>
            {message.sender._id != currentUser && <Ionicons name="checkmark-done-sharp" size={14} color="#43c651" />}
          </View></>)}
      </Pressable>
    </View>
  )
}

export default ImageMessage