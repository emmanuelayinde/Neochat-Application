
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { textStatusScreenColor } from '../../utils/data'
import { Pressable, Text, View } from '../../components/styled';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import TextEditor from '../../components/Editor/TextEditor';
import { RootStackNavigationProps } from '../../@types';



const NewTextStatusScreen = () => {
  const [statusText, setStatusText] = useState('')
  const [bgColor, setbgColor] = useState(textStatusScreenColor[1])
  const [duration, setDuration] = useState(24)
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false)



  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();

  return (
    <SafeAreaView style={{ backgroundColor: bgColor, opacity: 0.8, flex: 1, position: 'relative' }}>
      <StatusBar style='dark' />
      <View style={{ backgroundColor: bgColor }} className='w-full flex-1 z-10'>
        {/* HEADER */}
        <View className='flex-row items-start justify-between px-4 py-2 w-full'>
          <Pressable
            onPress={() => navigation.goBack()}
            android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
            className='w-8 h-8 items-center justify-center overflow-hidden rounded-full'>
            <FontAwesome5 name="times" size={24} color="#f9f9f9" />
          </Pressable>
          <View className='items-center flex-col space-y-2'>
            <Pressable
              onPress={() => setIsColorPickerOpen(!isColorPickerOpen)}
              android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
              className='w-8 h-8 items-center justify-center overflow-hidden rounded-full'>
              <Ionicons name="color-palette-sharp" size={24} color="#f9f9f9" />
            </Pressable>

            {isColorPickerOpen &&
              <View className='space-y-2 absolute top-8'>{
                textStatusScreenColor.map(color => <Pressable
                  key={color}
                  onPress={() => { setbgColor(color); setIsColorPickerOpen(false) }}
                  android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
                  className={`w-8 h-8 items-center justify-center overflow-hidden rounded-full border-2 border-white ${color === bgColor && 'ring ring-offset-2 ring-white'} `}
                  style={{ backgroundColor: color }} />)}
              </View>}

          </View>
        </View>
        {/*  */}
        <View className='flex-1 w-full justify-center items-center '>
          <View className=' flex-1 justify-center items-center mx-auto'>
            {/* <TextInput
              multiline
              placeholder='Your Status Goes Here'
              maxLength={700}
              className='w-full flex-1 text-center hidden border text-white text-lg font-semibold placeholder:text-white placeholder:text-2xl '
              value={statusText}
              onChangeText={setStatusText}
            /> */}

            <TextEditor />

          </View>
        </View>


        {/* FOOTER */}
        <View className=' flex-row items-center justify-between px-4 py-2 w-full'>
          <Pressable
            android_ripple={{ color: '#056526', borderless: false, foreground: true }}
            className='w-6 h-6 items-center justify-center rounded-full border border-dashed border-white'>
            <Text className='font-bold text-sm text-white'>
              {duration}
            </Text>
          </Pressable>
          <Pressable
            className='overflow-hidden w-12 h-12 rounded-full items-center justify-center bg-primary'
            android_ripple={{ color: '#056526', borderless: false, foreground: true }}
          >
            <FontAwesome name="send" size={24} color="#f9f9f9" />
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default NewTextStatusScreen