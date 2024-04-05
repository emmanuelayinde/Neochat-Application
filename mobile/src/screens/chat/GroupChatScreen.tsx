
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from '../../components/styled'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { avatar } from '../../../assets'
import { GroupChatPreview } from '../../components'
import { avatars } from '../../utils/avatar'
import { ChatStackScreenProps, RootStackNavigationProps } from '../../@types'
import { useNavigation } from '@react-navigation/native'



const GroupChatScreen = () => {
  const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();


  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9' }}>
      <StatusBar style='dark' />

      {/* Header  */}
      <View className='flex-row items-center justify-between w-full h-fit py-2 px-4 bg-[#f9f9f9]' >
        <Text className='font-bold text-2xl' >neoChatApp</Text>
        <TouchableOpacity className=' rounded-full border-2 border-primary' onPress={() => navigation.navigate('Profile', { userId: '123' })}>
          <Image source={{ uri: avatar }} resizeMode='contain' className='w-9 h-9 rounded-full' />
        </TouchableOpacity>
      </View>
      {/* Chats List */}
      <ScrollView className='py-2 bg-[#f1f1f1] w-full h-full'>
        <GroupChatPreview
          avatar={avatars[7].url}
          lastMessage={{ text: 'Thank you', user: 'Engr SoluTion' }}
          lastSeen='2 hours'
          groupName='Dev Ishola'
          newNessageCounter={9}
        />
        <GroupChatPreview
          avatar={avatars[9].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'

          newNessageCounter={4}
        />
        <GroupChatPreview
          avatar={avatars[2].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'

          newNessageCounter={4}
        />
        <GroupChatPreview
          avatar={avatars[3].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'

          newNessageCounter={4}
        />
        <GroupChatPreview
          avatar={avatars[13].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'
          newNessageCounter={9}
        />
        <GroupChatPreview
          avatar={avatars[7].url}
          lastMessage={{ text: 'Thank you', user: 'Engr SoluTion' }}
          lastSeen='2 hours'
          groupName='Dev Ishola'
          newNessageCounter={9}
        />
        <GroupChatPreview
          avatar={avatars[9].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'
          newNessageCounter={4}
        />
        <GroupChatPreview
          avatar={avatars[2].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'

          newNessageCounter={4}
        />
        <GroupChatPreview
          avatar={avatars[3].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'

          newNessageCounter={4}
        />
        <GroupChatPreview
          avatar={avatars[13].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'

          newNessageCounter={9}
        />

        <GroupChatPreview
          avatar={avatars[9].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'

          newNessageCounter={4}
        />
        <GroupChatPreview
          avatar={avatars[2].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'

          newNessageCounter={4}
        />
        <GroupChatPreview
          avatar={avatars[3].url}
          lastMessage={{ text: 'Okay dear, I will be there. Thank you for informing and reminding me', user: 'Engr SoluTion' }}
          lastSeen='3 mins'
          groupName='Emmanuel Ishola'
          newNessageCounter={4}
        />
      </ScrollView>

    </SafeAreaView>

  )
}

export default GroupChatScreen