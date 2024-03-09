import React from 'react'
import { ScrollView, Text, View } from "../styled"

const ChatPreviewLoadingSkeleton = () => {

    return (
        <ScrollView>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
                .map((key) => <ChatPreviewSkeleton key={key} />)
            }
        </ScrollView>
    )
}

export default ChatPreviewLoadingSkeleton

export const ChatPreviewSkeleton = () => {
    return (
        <View className='w-full h-24'>
            <Text>Loading ........</Text>
        </View>
    )
}