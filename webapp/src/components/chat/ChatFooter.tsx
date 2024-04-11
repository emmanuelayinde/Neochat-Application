import { Flex, HStack } from "@chakra-ui/react"
import { useAppSelector } from "../../redux/type"
import { IconButton, ChatInput } from ".."
import { useEffect, useState } from "react"
import { AttachmentIcon, EmojiIcon, MicIcon, SendIcon } from "../../assets"
import { palletes } from "../../data"


function ChatFooter() {
    const [isVoiceMode, setIsVoiceMode] = useState(true)

    const [text, setText] = useState('')

    const { themeMode } = useAppSelector(state => state.layoutReducer)


    useEffect(() => {
        if (text && text.length >= 1) setIsVoiceMode(false)
        else setIsVoiceMode(true)
    }, [text])


    return (
        <HStack
            gap={2}
            className="w-full px-4 py-2 border-t " >
            <Flex flex={1}
                backgroundColor={themeMode === 'dark' ? palletes.dark.secondary : palletes.light.secondary}
                rounded={8}
            >

                <Flex flex={1}>
                    <ChatInput
                        onChange={e => setText(e.target.value)}

                        leftItem={<IconButton onHoverBgColor={palletes.secondary} label="Emoji icon">
                            <EmojiIcon />
                        </IconButton>}
                        rightItem={<IconButton onHoverBgColor={palletes.secondary} label="media attachment icon" >
                            <AttachmentIcon />
                        </IconButton>}
                        placeholder="Message"
                        styles="!border-0 !hover:border-0 active:border-0 !outline-none" />
                </Flex>

            </Flex>
            {/*  */}
            <IconButton isBgTransparent={false} BgColor={themeMode === 'dark' ? palletes.dark.secondary : palletes.light.secondary} styles="bg-white" label="send btn">
                {isVoiceMode ? <MicIcon /> : <SendIcon />}
            </IconButton>
        </HStack >
    )
}

export default ChatFooter