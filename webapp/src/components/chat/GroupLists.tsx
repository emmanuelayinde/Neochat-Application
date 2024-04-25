import { VStack } from '@chakra-ui/react'
import { userChats } from '../../data'
import { useAppSelector } from '../../redux/type'
import { GroupChatPreview } from '..'

function ChatLists() {
    const { currentScreen } = useAppSelector(state => state.layoutReducer)

    return (
        <VStack gap={4}>
            {userChats.map((chat) =>
                <GroupChatPreview
                    chatId={chat.chatId}
                    participants={chat.participants}
                    key={chat.chatId}
                    lastMessage={chat.lastMessage}
                    isActive={currentScreen?.chatId === chat.chatId}
                    screen='group'
                />)}
        </VStack>
    )
}


export default ChatLists