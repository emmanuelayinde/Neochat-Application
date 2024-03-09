
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { profileData, profileLayoutType } from '../../components/User/type'
import { UserProfile } from '../../components'
import { useRoute } from '@react-navigation/native'
import { RootStackScreenProps } from '../../navigations/types'
import { Text } from '../../components/styled'

const ProfileScreen = () => {
  const [profileLayout, setProfileLayout] = useState<profileLayoutType>('hydrogen')
  const [userData, setUserData] = useState<profileData | null>(null)

  const route = useRoute<RootStackScreenProps<'Profile'>['route']>()
  const { userId } = route.params


  useEffect(() => {
    const fetchUser = () => {
      setUserData({ data: {}, isMine: userId === '1' })
    }

    return fetchUser()
  }, [userId])


  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1 }}>
      <StatusBar style='dark' />

      {userData ? <UserProfile profileLayout={profileLayout} userData={userData} /> : <Text>No profile data</Text>}

    </SafeAreaView>
  )
}

export default ProfileScreen