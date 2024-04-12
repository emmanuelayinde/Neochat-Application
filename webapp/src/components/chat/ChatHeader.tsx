import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react"
import { ChatAvatar, IconButton } from ".."
import { avatars } from "../../data/avatar"
import { PhoneIcon, SearchIcon, VideoIcon } from "../../assets"
import { palletes } from "../../data"
import { useAppDispatch, useAppSelector } from "../../redux/type"
import { toggleChatDrawer } from "../../redux/reducer/chatReducer"


interface IProps {
    isGroup?: boolean
}


function ChatHeader({ isGroup = false }: IProps) {
    const { themeMode } = useAppSelector(state => state.layoutReducer)

    const dispatch = useAppDispatch()


    const toggleDrawer = () => {
        return dispatch(toggleChatDrawer())
    }


    return (
        <Box className="w-full h-20 overflow-hidden border-b">
            <Flex gap={4} alignItems={'center'} justifyContent={'space-between'} className="w-full h-full">

                {/* User Avatar Details */}
                <Flex
                    flex={1}
                    className="p-2"
                    onClick={toggleDrawer}
                >
                    <HStack className="w-fit rounded-md p-2 cursor-pointer"
                        _hover={{
                            bgColor: themeMode === 'dark' ? palletes.dark.secondary : palletes.light.secondary,
                            color: themeMode === 'dark' ? palletes.dark.icon : palletes.light.icon,
                        }}
                    >
                        <ChatAvatar url={avatars[0].url} />
                        <Stack justifyContent={'center'} alignItems={'flex-start'} className="">
                            <Text className="text-md font-semibold leading-3">Engr SoluTion</Text>
                            <Text className="text-xs leading-3">Last seen: 1st June, 2024</Text>
                        </Stack>
                    </HStack>
                </Flex>

                {/* Menu and Calls Button */}
                <Flex gap={2} className="p-2">
                    {!isGroup && <IconButton label="voice-call" styles="">
                        <PhoneIcon />
                    </IconButton>}

                    {!isGroup && <IconButton label="video-call">
                        <VideoIcon />
                    </IconButton>}

                    <IconButton label="call">
                        <SearchIcon />
                    </IconButton>
                </Flex>
            </Flex>
        </Box>
    )
}

export default ChatHeader