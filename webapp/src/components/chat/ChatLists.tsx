import { VStack } from '@chakra-ui/react'
import ChatPreview from './ChatPreview'
import { userChats } from '../../data'
import { useAppSelector } from '../../redux/type'

function ChatLists() {
    const { currentScreen } = useAppSelector(state => state.layoutReducer)
    
    return (
        <VStack gap={4}>
            {userChats.map((chat) =>
                <ChatPreview
                    chatId={chat.chatId}
                    participants={chat.participants}
                    key={chat.chatId}
                    lastMessage={chat.lastMessage}
                    isActive={currentScreen?.chatId === chat.chatId}
                    screen='chat'
                />)}
        </VStack>
    )
}

export default ChatLists