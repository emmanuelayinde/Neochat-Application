import React, { useCallback, useMemo, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Pressable, Text, View } from '../../components/styled'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons, Feather } from '@expo/vector-icons';
import BottomSheet from '@gorhom/bottom-sheet';
import { VideoCallUI, VoiceCallUI } from '../../components'
import { RootStackNavigationProps, RootStackScreenProps } from '../../@types'


const OutgoingCallScreen = () => {
  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();
  const route = useRoute<RootStackScreenProps<'OutgoingCall'>['route']>()

  const { callType, calleeId, calleeSocketId, callerId, chatId, origin } = route.params


  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['2.5%', '15%', "20%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1, position: 'relative' }}>
      <StatusBar style='dark' />

      {/*  */}
      {callType === 'video' ? <VideoCallUI /> : <VoiceCallUI />}


      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      // enablePanDownToClose={true}
      // detached={true}
      // bottomInset={80}
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
              <Ionicons name="mic-off" size={24} color="white" />
            </Pressable>
            <Text>Mute</Text>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default OutgoingCallScreen