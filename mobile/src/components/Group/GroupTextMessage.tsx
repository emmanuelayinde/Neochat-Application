
import React from 'react'
import { Pressable, Text, View, screenWidth, screenHeight } from '../styled';
import { Ionicons } from '@expo/vector-icons';

export interface GroupMessageProps {
  isSender: boolean

}

const GroupTextMessage = (prop: GroupMessageProps) => {
  const maxWidth = screenWidth * 0.7

  return (
    <View className={` ${prop.isSender ? 'justify-start' : 'justify-end'} px-2 py-1 w-full flex-row`}>
      <Pressable
        className={`${prop.isSender ? 'bg-gray-400' : 'bg-primary/80'} w-full p-2 rounded-md overflow-hidden `}
        style={{ maxWidth: maxWidth }}
        android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
      >
        <Text className={`${prop.isSender ? 'text-white' : 'text-gray-50'} font-medium `}>
          Message comes here
          Message comes here
          Message comes here
          Message comes here
          Message comes here
          Message comes here
          Message comes here
        </Text>
        <View className='w-full flex-row justify-end items-center space-x-1'>
          <Text className='text-xs font-normal text-white'>
            12:30pm
          </Text>
          {!prop.isSender && <Ionicons name="checkmark-done-sharp" size={14} color="#43c651" />}
        </View>
      </Pressable>
    </View>
  )
}

export default GroupTextMessage