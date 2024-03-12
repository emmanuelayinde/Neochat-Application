import React, { FC } from 'react'
import { BlurView, Image, ImageBackground, Pressable, Text, View } from '../../styled'
import { profileData } from '../type'
import { BGImage, Logo } from '../../../../assets'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LithiumProfileLayout: FC<{ data: profileData }> = ({ data }) => {
  const navigation = useNavigation()
  return (
    <View className="flex-1 items-center justify-start bg-white">

      <ImageBackground source={BGImage} resizeMode="cover" className='flex flex-row  items-center justify-around w-full' >
        <BlurView
          intensity={10}
          tint="light"
          className='w-full flex flex-row items-center justify-around px-4 py-8 '
        >
          {/* <View className='top-0 absolute flex flex-row  items-center justify-start w-full py-2 px-4' >
          <Pressable onPress={navigation.goBack} className='rounded-full p-1 overflow-hidden' android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}>
            <AntDesign name='arrowleft' size={28} color={'#fff'} />
          </Pressable>
        </View> */}


          <Pressable onPress={navigation.goBack} className='rounded-full p-1 overflow-hidden' android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}>
            <AntDesign name='arrowleft' size={28} color={'#fff'} />
          </Pressable>

          <View className='flex items-center'>
            <View className='w-24 h-24 border-2 shadow-sm border-white bg-white rounded-full overflow-hidden flex justify-center items-center' >
              <Image source={Logo} className="w-24 h-24 bg-white" resizeMode="contain" />
            </View>
            <View className='flex items-center justify-center'>
              <Text className='text-2xl text-white font-semibold'>
                Emmanuel Ishola
              </Text>
              <Text className='text-sm text-white'>
                - (EngrSoluTion) -
              </Text>
            </View>

          </View>

          <Pressable className='bg-gray-200/80 rounded-full p-1 overflow-hidden' android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}>
            <AntDesign name='setting' size={28} color={'#fff'} />
          </Pressable>

        </BlurView>
      </ImageBackground>


      {/* <BlurView
        intensity={10}
        tint="light"
        className='w-full absolute top-0 h-52'
     /> */}



    </View>
  )
}

export default LithiumProfileLayout