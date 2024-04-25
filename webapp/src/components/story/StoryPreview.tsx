import { userStoryPreviewProps, screenTypes } from '../../@types'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../../redux/type'
import { setCurrentScreen } from '../../redux/reducer/layoutReducer'
import { ChatAvatar as UserAvatar } from '..'

interface IProps extends userStoryPreviewProps {
    screen: screenTypes,
    isActive: boolean
}

function StoryPreview({ avatar, isActive, screen, stories, time, user }: IProps) {
    const { } = useAppSelector(state => state.layoutReducer)
    const dispatch = useAppDispatch()

    const navigateToUserStory = () => {
        dispatch(setCurrentScreen({ screen, }))
    }

    return (
        <Flex onClick={navigateToUserStory}
            className={`relative w-full rounded-md px-2 py-3 gap-2 cursor-pointer  ${isActive ? 'bg-brand-secondary/75 hover:bg-brand-secondary/90' : 'hover:bg-primary dark:hover:bg-primary-dark '}`}
        >
            {isActive && <div className='absolute left-0 w-1 h-12 rounded-full bg-brand-primary' />}

            <HStack alignItems={'center'} gap={4} className='w-full'>
                <Box>
                    <UserAvatar url={avatar} />
                </Box>

                <Flex flexDirection={'column'} alignItems={'flex-start'} className={`w-[calc(100%-64px)]`}>
                    <Flex alignItems={'center'} justifyContent={'space-between'} className='w-full'>
                        <Text> {user}</Text>
                        <Text as={'p'} className='text-xs'>just now</Text>
                    </Flex>
                    <Box className='w-full'>
                        {time} {stories.length}
                    </Box>
                </Flex>
            </HStack>
        </Flex>
    )
}

export default StoryPreview