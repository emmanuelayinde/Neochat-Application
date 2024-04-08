import { VStack } from '@chakra-ui/react'
import ChatPreview from './ChatPreview'
import { userChats } from '../../data'

function ChatLists() {
    return (
        <VStack gap={4}>
            {userChats.map((chat, index) =>
                <ChatPreview
                    chatId={chat.chatId}
                    user={chat.user}
                    key={chat.chatId}
                    lastMessage={chat.lastMessage}
                    isActive={index / 2 === 0 ? true : false}
                    screen='chat'
                />)}
        </VStack>
    )
}

export default ChatLists