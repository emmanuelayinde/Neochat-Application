import { Flex, HStack, VStack } from "@chakra-ui/react"
import { ChatBody, ChatDrawer, ChatFooter, ChatHeader } from "../../components"
import { useAppSelector } from "../../redux/type"


function PersonalChat() {
  const { isChatDrawerOpen } = useAppSelector(state => state.chatReducer)
  return (
    <HStack gap={0} direction={'row'} className="w-full">
      <VStack direction={'column'} justifyContent={'flex-end'} className="w-full h-full overflow-hidden">
        <ChatHeader />
        <Flex
          flexGrow={1}
          className="h-auto overflow-auto"
        >
          <ChatBody />
        </Flex>
        <ChatFooter />
      </VStack>
      {isChatDrawerOpen && <ChatDrawer />}
    </HStack>
  )
}

export default PersonalChat





{/* <Drawer isOpen={true} onClose={() => console.log('closed drawer')}  >
    <p>Chat </p>
  </Drawer> */}