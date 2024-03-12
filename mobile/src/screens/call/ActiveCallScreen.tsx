import React, { useCallback, useMemo, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Image, Pressable, Text, View } from '../../components/styled'
import { useNavigation } from '@react-navigation/native'
import { Ionicons, Feather } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { avatar } from '../../../assets'
import { RootStackNavigationProps } from '../../navigations/types'


const ActiveCallScreen = () => {
  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();

  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['15%', "25%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1, position: 'relative' }}>
      <StatusBar style='dark' />



      {/*  */}
      <View className='absolute top-8 w-full flex-row items-center justify-between p-4 z-10'>
        <Pressable
          onPress={() => navigation.goBack()}
          android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
          className='w-8 h-8 items-center justify-center overflow-hidden rounded-full'>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
      </View>



      <View className='flex-1 w-full  h-full'>
        <Image source={{ uri: avatar }} className='w-full h-full' resizeMode='stretch' />
      </View>



      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        // detached={true}
        // bottomInset={40}
        onChange={handleSheetChanges}
      >
        <View className='w-full p-4 flex-row items-center justify-evenly backdrop-blur-lg'>
          <View className='items-center'>
            <Pressable
              className='overflow-hidden w-12 h-12 rounded-full items-center justify-center bg-gray-300'
              android_ripple={{ color: '#056526', borderless: false, foreground: true }}
            >
              <Feather name="mic-off" size={24} color="white" />
            </Pressable>
            <Text>Speaker</Text>
          </View>
          <View className='items-center'>
            <Pressable
              className='overflow-hidden w-12 h-12 rounded-full items-center justify-center bg-[#Dc3545]'
              android_ripple={{ color: '#056526', borderless: false, foreground: true }}
            >
              <Feather name="phone-off" size={24} color="white" />
            </Pressable>
            <Text>Hang up</Text>
          </View>
          <View className='items-center'>
            <Pressable
              className='overflow-hidden w-12 h-12 rounded-full items-center justify-center bg-gray-300'
              android_ripple={{ color: '#056526', borderless: false, foreground: true }}
            >
              <Ionicons name="md-volume-mute-outline" size={24} color="white" />
            </Pressable>
            <Text>Mute</Text>
          </View>


        </View>
      </BottomSheet>

    </SafeAreaView>
  )
}

export default ActiveCallScreen