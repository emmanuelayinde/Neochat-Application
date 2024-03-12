import React from 'react'
import { Image, TouchableOpacity, View } from '../styled'
import { avatar } from '../../../assets'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProps } from '../../navigations/types'
import { FontAwesome5 } from '@expo/vector-icons'
import { Animated, StyleSheet } from 'react-native'
import { avatarType, avatars } from '../../utils/avatar'


const DynamicHeader = ({ scrollOffsetY }: { scrollOffsetY: Animated.Value }) => {
    const navigation = useNavigation<RootStackNavigationProps<'ChatsTab'>>()

    const minHeaderHeight = 52
    const maxHeaderHeight = 150
    const scrollDistance = 200
    // const scrollDistance = maxHeaderHeight - minHeaderHeight


    // Animate Header Height
    const headerScrollHeight = scrollOffsetY.interpolate({
        inputRange: [0, scrollDistance],
        outputRange: [maxHeaderHeight, minHeaderHeight],
        extrapolate: "clamp"
    });

    // Animate Story Position
    const statusMargin = scrollOffsetY.interpolate({
        inputRange: [0, scrollDistance],
        outputRange: [8, -8],
        extrapolate: "clamp"
    });

    // Animate New Status avatar
    const newStatusOpacity = scrollOffsetY.interpolate({
        inputRange: [0, scrollDistance],
        outputRange: [1, 0],
        extrapolate: "clamp"
    });

    // Animate status size

    const newStatusSize = scrollOffsetY.interpolate({
        inputRange: [0, scrollDistance],
        outputRange: [55, 36],
        extrapolate: "clamp"
    });

    // Status position
    const statusTopValue = scrollOffsetY.interpolate({
        inputRange: [0, scrollDistance],
        outputRange: [80, 8],
        extrapolate: "clamp"
    });

    return (
        <>
            <Animated.View style={[styles.header, { height: headerScrollHeight }]} >
                {/* Story */}
                <Animated.ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ position: 'absolute', left: 4, top: statusTopValue }}
                >
                    <TouchableOpacity style={{ opacity: newStatusOpacity }} className={`relative rounded-full mr-2`} onPress={() => navigation.navigate('NewMediaStatus')}>
                        <Image source={{ uri: avatar }} resizeMode='contain' className='w-full h-full rounded-full' />
                        <View className='absolute -bottom-1 -right-1 flex items-center justify-center bg-white w-5 h-5 rounded-full'>
                            <FontAwesome5 name="plus" size={12} color="black" />
                        </View>
                    </TouchableOpacity>
                    {
                        [avatars[2], avatars[3], avatars[4], avatars[5], avatars[2], avatars[3], avatars[4], avatars[5], avatars[2], avatars[3], avatars[4], avatars[5]].
                            map((item, key) => <StatusHandleDisplay key={item._id + key} item={item} newStatusSize={newStatusSize} statusMargin={statusMargin} />)
                    }
                    {/* <FlatList
                        data={[avatars[2], avatars[3], avatars[4], avatars[5], avatars[2], avatars[3], avatars[4], avatars[5], avatars[2], avatars[3], avatars[4], avatars[5]]}
                        renderItem={({ item }) => <StatusHandleDisplay item={item} newStatusSize={newStatusSize} statusMargin={statusMargin} />}
                        keyExtractor={item => item._id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    /> */}
                </Animated.ScrollView>

                {/*  */}
                <View className='absolute top-4 right-4 flex items-start h-full'>
                    <TouchableOpacity className='w-10 h-10 rounded-full' onPress={() => navigation.navigate('Profile', { userId: '1' })}>
                        <Image source={{ uri: avatar }} resizeMode='contain' className='w-full h-full rounded-full' />
                    </TouchableOpacity>
                </View>
            </Animated.View>
        </>

    )
}
export default DynamicHeader


export const StatusHandleDisplay = ({ item, newStatusSize, statusMargin }: { item: avatarType, newStatusSize: Animated.AnimatedInterpolation<string | number>, statusMargin: Animated.AnimatedInterpolation<string | number> }) => {
    const navigation = useNavigation<RootStackNavigationProps<'ChatsTab'>>()
    return (<TouchableOpacity style={{ marginRight: statusMargin }} className='rounded-full border-2 border-primary' onPress={() => navigation.navigate('StatusDisplayScreen', { content: '1', type: 'image', viewedByMe: true })}>
        <Image source={{ uri: item.url }} resizeMode='contain' className='w-full h-full rounded-full' />
    </TouchableOpacity>)
}



const styles = StyleSheet.create({
    header: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 52,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#f9f9f9'
    }
})