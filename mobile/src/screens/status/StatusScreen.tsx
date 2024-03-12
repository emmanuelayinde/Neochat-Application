import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, View } from '../../components/styled'
import { NewStatusPreview, StatusFloatingButton, UserStatusPreview } from '../../components'
import { recentStatus, viewedStatus } from '../../utils/data'


const StatusScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#f9f9f9', flex: 1, position: 'relative' }}>
      <StatusBar style='dark' />

      <ScrollView>
        {/* NEW STATUS */}
        <NewStatusPreview />
        {/* RECENT STATUS */}
        <View className='bg-black px-4 py-1'>
          <Text className='text-white ' >
            Recent Status
          </Text>
        </View>

        {recentStatus.map((item, key) => <UserStatusPreview key={key} avatar={item.avatar} status={item.status} time={item.time} user={item.user} />)}

        {/* VIEWED STATUS */}
        <View className='bg-black px-4 py-1'>
          <Text className='text-white ' >
            Viewed Status
          </Text>
        </View>

        {viewedStatus.map((item, key) => <UserStatusPreview key={key} avatar={item.avatar} status={item.status} time={item.time} user={item.user} />)}


        {/* <FlatList
          data={recentStatus}
          renderItem={({ item }) => <UserStatusPreview avatar={item.avatar} status={item.status} time={item.time} user={item.user} />}
          keyExtractor={(item) => item.user}
          contentContainerStyle={{ paddingVertical: 0 }}
        /> */}
        {/* <FlatList
          data={viewedStatus}
          renderItem={({ item }) => <UserStatusPreview avatar={item.avatar} status={item.status} time={item.time} user={item.user} />}
          keyExtractor={(item) => item.user}
          contentContainerStyle={{ paddingVertical: 0 }}
        /> */}
      </ScrollView>

      <StatusFloatingButton />

    </SafeAreaView>
  )
}

export default StatusScreen