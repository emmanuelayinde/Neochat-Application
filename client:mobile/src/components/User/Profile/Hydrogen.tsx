import React, { FC } from 'react'
import { BlurView, Image, Pressable, Text, View } from '../../styled'
import { profileData } from '../type'
import { BGImage, Logo } from '../../../../assets'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const HydrogenProfileLayout: FC<{ data: profileData }> = ({ data }) => {
  const navigation = useNavigation()
  return (
    <View className="relative flex-1 items-center justify-start bg-white">

      <View className='absolute top-0 z-10 flex flex-row  items-center justify-between w-full p-4' >
        <Pressable onPress={navigation.goBack} className='rounded-full p-1 overflow-hidden' android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}>
          <AntDesign name='arrowleft' size={28} color={'#fff'} />
        </Pressable>
        <Pressable className='bg-gray-200/80 rounded-full p-1 overflow-hidden' android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}>
          <AntDesign name='setting' size={28} color={'#fff'} />
        </Pressable>
      </View>

      <Image source={BGImage} resizeMode='cover' className='w-full h-52' />
      <BlurView
        intensity={10}
        tint="light"
        className='w-full absolute top-0 h-52'
      />

      <View className='-mt-12 w-full flex items-center'>
        <View className='w-24 h-24 border-2 shadow-sm border-white bg-white rounded-full overflow-hidden flex justify-center items-center' >
          <Image source={Logo} className="w-24 h-24 bg-white" resizeMode="contain" />
        </View>
        <View className='flex items-center justify-center'>
          <Text className='text-2xl font-semibold'>
            Emmanuel Ishola
          </Text>
          <Text className='text-sm'>
            - (EngrSoluTion) -
          </Text>
        </View>

      </View>
    </View>
  )
}

export default HydrogenProfileLayout