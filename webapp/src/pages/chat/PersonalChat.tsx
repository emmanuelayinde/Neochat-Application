import { Flex, VStack } from "@chakra-ui/react"
import { ChatBody, ChatFooter, ChatHeader } from "../../components"


function PersonalChat() {
  return (
    <VStack justifyContent={'flex-end'} className="w-full h-full overflow-hidden">
      <ChatHeader />
      <Flex flexGrow={1}>
        <ChatBody />
      </Flex>
      <ChatFooter />
    </VStack>
  )
}

export default PersonalChat