import React, { FC } from 'react'
import { BlurView, Image, ImageBackground, Pressable, Text, View } from '../../styled'
import { BGImage, Logo } from '../../../../assets'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { profileData } from '../../../@types';


const HeliumProfileLayout: FC<{ data: profileData }> = ({ data }) => {
  const navigation = useNavigation()
  return (
    <View className="flex-1 items-center justify-start bg-white">


      <ImageBackground source={BGImage} resizeMode="cover" className='w-full'>
        <BlurView
          intensity={10}
          tint="light"
          className='w-full flex flex-row items-center justify-between p-4'
        >
          <Pressable onPress={navigation.goBack} className='rounded-full p-1 overflow-hidden' android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}>
            <AntDesign name='arrowleft' size={28} color={'#f9f9f9'} />
          </Pressable>
          <Pressable className='bg-gray-200/80 rounded-full p-1 overflow-hidden' android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}>
            <AntDesign name='setting' size={28} color={'#f9f9f9'} />
          </Pressable>
        </BlurView>
      </ImageBackground>

      <View className='w-full p-4 flex-row  items-center justify-between'>
        <View className='flex '>
          <Text className='text-2xl font-semibold'>
            Emmanuel Ishola
          </Text>
          <Text className='text-sm'>
            EngrSoluTion
          </Text>
        </View>

        <View className='w-20 h-20 border-2 shadow-sm border-gray-400 bg-white rounded-full overflow-hidden flex justify-center items-center' >
          <Image source={Logo} className="w-20 h-20 bg-white" resizeMode="contain" />
        </View>


      </View>
    </View>
  )
}

export default HeliumProfileLayout