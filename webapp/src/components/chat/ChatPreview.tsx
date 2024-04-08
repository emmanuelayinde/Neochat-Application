import { IChatPreview, screenTypes } from '../../@types'
import { Flex } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../redux/type'
import { setCurrentScreen } from '../../redux/reducer/layoutReducer'
import { useEffect, useState } from 'react'
import { ChatAvatar } from '..'
import { avatars } from '../../data/avatar'

interface IProps extends IChatPreview {
    screen: screenTypes,
    isActive: boolean
}

function ChatPreview({ chatId, user, lastMessage, isActive, screen }: IProps) {

    const { } = useAppSelector(state => state.layoutReducer)
    const dispatch = useAppDispatch()


    const navigateToChat = () => {
        dispatch(setCurrentScreen({ chatId, user, lastMessage, screen }))
    }


    return (
        <Flex onClick={navigateToChat}
            // className={`${isActive ? '' : ''} relative`}
            className={`relative w-full rounded-md px-2 py-3 gap-2 cursor-pointer  ${isActive ? 'bg-brand-secondary/75 hover:bg-brand-secondary/90' : 'hover:bg-secondary dark:hover:bg-secondary-dark '}`}
        >
            {isActive && <div className='absolute left-0 w-1 h-6 rounded-full bg-brand-primary' />}
            <Flex>
                <ChatAvatar
                    onlineStatus='online'
                    url={user.avatar || avatars[6].url}
                />

                <Flex>
                    {user.name}
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ChatPreview