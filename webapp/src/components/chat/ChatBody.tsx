import { personalChatMessages } from '../../data'
import { ChatMessage } from '..'
import { VStack } from '@chakra-ui/react'


function ChatBody() {
  return (
    <VStack
      gap={1}
      flexGrow={1}
      // className='border-2 border-red-500'
    >
      {personalChatMessages.map((message, key) =>
        <ChatMessage
          key={key}
          currentUserId="user-1"
          message={message}
        />)}
    </VStack>
  )
}

export default ChatBody