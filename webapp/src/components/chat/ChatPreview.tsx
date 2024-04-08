import { IChatPreview, screenTypes } from '../../@types'
import { Flex, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../redux/type'
import { setCurrentScreen } from '../../redux/reducer/layoutReducer'
import { ChatAvatar, LastChatMessage } from '..'
import { avatars } from '../../data/avatar'

interface IProps extends IChatPreview {
    screen: screenTypes,
    isActive: boolean
}

function ChatPreview({ chatId, participants, lastMessage, isActive, screen }: IProps) {
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
            <Flex alignItems={'center'} gap={4}>
                <ChatAvatar
                    onlineStatus='online'
                    url={participants[0].avatar || avatars[6].url}
                />

                <Flex flexDirection={'column'}>
                    <Text> {participants[0].name}</Text>
                    {lastMessage ?
                        <LastChatMessage currentUserId='me' message={lastMessage} /> :
                        <Text>Say 'hi' to your new contact</Text>
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ChatPreview