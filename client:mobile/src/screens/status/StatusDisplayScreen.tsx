
import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useMemo, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BottomSheetTextInput, Image, Pressable, Text, TextInput, View } from '../../components/styled'
import { FontAwesome5, Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { avatar } from '../../../assets';
import BottomSheet from '@gorhom/bottom-sheet';
import { RootStackNavigationProps } from '../../navigations/types';

const StatusDisplayScreen = () => {
  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['10%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1, position: 'relative' }}>
      <StatusBar style='dark' />

      {/* Status */}
      <View className='absolute top-8 w-full flex-row items-center justify-between p-4 z-10'>
        <Pressable
          onPress={() => navigation.goBack()}
          android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
          className='w-8 h-8 items-center justify-center overflow-hidden rounded-full'>
          <FontAwesome5 name="times" size={24} color="black" />
        </Pressable>

        <View className='flex-row items-center space-x-2'>
          <View className='items-end'>
            <Text className='text-lg font-semibold'>
              SoluTion
            </Text>
            <Text className='text-sm font-medium'>
              - 2/5
            </Text>
          </View>
          <Pressable
            android_ripple={{ color: '#4b5563', borderless: false, foreground: true }}
            className='w-11 h-11 items-center justify-center overflow-hidden rounded-full'>
            <Image source={{ uri: avatar }} className='w-full h-full rounded-full' resizeMode='contain' />
          </Pressable>
        </View>
      </View>


      {/*  */}
      <View className='w-full h-full flex-1'>
        <Image source={{ uri: avatar }} className='w-full h-full' />
      </View>


      <View className='absolute bottom-0 w-full flex-row justify-center'>
        <Entypo name="chevron-up" size={30} color="black" onPress={() => bottomSheetRef.current?.expand()} />
      </View>

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        detached={true}
        enablePanDownToClose
        onChange={handleSheetChanges}

      >
        <View className='flex-1 space-x-2 flex-row items-center px-1 rounded-md'>
          <BottomSheetTextInput
            // value={prop.messageInput}
            // onChangeText={prop.setMessageInput}
            placeholder={'Message'}
            className='flex-1 p-2 min-h-[45px] rounded-md  text-primaryText border-primaryText border'
          />
          <Pressable
            className='overflow-hidden w-12 h-12 rounded-full items-center justify-center bg-primary'
            android_ripple={{ color: '#056526', borderless: false, foreground: true }}
          >
            <FontAwesome name="send" size={24} color="#f9f9f9" />
          </Pressable>
        </View>
      </BottomSheet>
    </SafeAreaView>

  )
}

export default StatusDisplayScreen