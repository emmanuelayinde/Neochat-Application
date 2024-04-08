import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { useAppSelector } from '../../redux/type'
import { DarkLogo, LightLogo, LockIcon } from '../../assets'

function HomeDisplay() {
    const { themeMode } = useAppSelector(state => state.layoutReducer)

    return (
        <Box className={`relative w-full h-full  ${themeMode === 'dark' ? 'home-bg-dark text-primary' : 'home-bg-light text-primary-dark'}`}>
            <Flex flexDirection={'column'} className='w-full h-full justify-center items-center '  >
                <Image src={themeMode === 'dark' ? DarkLogo : LightLogo} className='w-60' />
                <Flex flexDirection={'column'} alignItems={'center'} >
                    <Text variant={'h3'} as={'p'} className='text-4xl font-semibold'>NeoChat Web App.</Text>
                    <Text>Sending and Receive message with or without your phone with you.</Text>
                    <Text>Your chats, calls, stories and settings are sync from your phone to your web app.</Text>
                </Flex>
                <Flex className='absolute left-0 bottom-5 w-full justify-center items-center gap-1.5'>
                    <Icon as={LockIcon} />
                    <Text className='text-primaryText text-sm' >Enjoy end-to-end encryption <span className='text-xs italic'>(E2EE)</span> like never before.</Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default HomeDisplay