import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from '../../components/styled'
import { StatusBar } from 'expo-status-bar'

const SearchScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#f9f9f9' }}>
            <StatusBar style='dark' />


            <Text>Search Seacrch</Text>
        </SafeAreaView>
    )
}

export default SearchScreen