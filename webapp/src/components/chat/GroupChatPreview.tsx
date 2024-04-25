import { IChatPreview, screenTypes } from '../../@types'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../redux/type'
import { setCurrentScreen } from '../../redux/reducer/layoutReducer'
import { ChatAvatar, ChatMessagePreview } from '..'
import { avatars } from '../../data/avatar'

interface IProps extends IChatPreview {
    screen: screenTypes,
    isActive: boolean
}

function GroupChatPreview({ chatId, participants, lastMessage, isActive, screen }: IProps) {
    const { } = useAppSelector(state => state.layoutReducer)
    const dispatch = useAppDispatch()

    const navigateToChat = () => {
        dispatch(setCurrentScreen({ chatId, participants, lastMessage, screen }))
    }

    return (
        <Flex onClick={navigateToChat}
            className={`relative w-full rounded-md px-2 py-3 gap-2 cursor-pointer  ${isActive ? 'bg-brand-secondary/75 hover:bg-brand-secondary/90' : 'hover:bg-primary dark:hover:bg-primary-dark '}`}
        >
            {isActive && <div className='absolute left-0 w-1 h-12 rounded-full bg-brand-primary' />}

            <HStack alignItems={'center'} gap={4} className='w-full'>
                <Box>
                    <ChatAvatar
                        onlineStatus='online'
                        url={participants[0].avatar || avatars[6].url}
                    />
                </Box>

                <Flex flexDirection={'column'} alignItems={'flex-start'} className={`w-[calc(100%-64px)]`}>
                    <Flex alignItems={'center'} justifyContent={'space-between'} className='w-full'>
                        <Text> {participants[0].name}</Text>
                        <Text as={'p'} className='text-xs'>just now</Text>
                    </Flex>
                    <Box className='w-full'>
                        {lastMessage ?
                            <ChatMessagePreview currentUserId='user-1' message={lastMessage} /> :
                            <Text>Say 'hi' </Text>
                        }
                    </Box>
                </Flex>
            </HStack>
        </Flex>
    )
}

export default GroupChatPreview