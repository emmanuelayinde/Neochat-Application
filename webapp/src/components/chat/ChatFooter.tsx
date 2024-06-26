import { Flex, HStack } from "@chakra-ui/react"
import { useAppSelector } from "../../redux/type"
import { IconButton, ChatInput, ChatVoiceRecorder } from ".."
import { useEffect, useState } from "react"
import { AttachmentIcon, EmojiIcon, MicIcon, SendIcon } from "../../assets"
import { palletes } from "../../data"
import { recordingEventTypes } from "../../@types"
// import EmojiPickerUi from "../ui/EmojiPicker"


function ChatFooter() {
    const [isFileSelectorOpen, setIsFileSelectorOpen] = useState(false)
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)
    const [isVoiceMode, setIsVoiceMode] = useState(true)
    const [isVoiceRecording, setIsVoiceRecording] = useState(false)
    const [recordingEvent, setRecordingEvent] = useState<recordingEventTypes | null>(null)
    const [text, setText] = useState('')

    const { themeMode } = useAppSelector(state => state.layoutReducer)


    const toggleRecording = () => {
        if (isVoiceRecording) {
            setRecordingEvent('stop-recording')
            setIsVoiceRecording(false)
            console.log('stopped')
        }
        else {
            setRecordingEvent('start-recording')
            setIsVoiceRecording(true)
            console.log('started')

        }
    }


    const sendText = () => {
        return
    }

    const toogleFileSelectors = () => {
        if (isEmojiPickerOpen) setIsEmojiPickerOpen(false)
        setIsFileSelectorOpen(!isFileSelectorOpen)
    }

    const toogleEmojiPicker = () => {
        if (isFileSelectorOpen) setIsFileSelectorOpen(false)
        setIsEmojiPickerOpen(!isEmojiPickerOpen)
    }

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
                {/* {isEmojiPickerOpen && <EmojiPickerUi />} */}
                <Flex flex={1}>
                    {isVoiceRecording ?
                        <ChatVoiceRecorder
                            event={recordingEvent}
                            setEvent={setRecordingEvent}
                            setIsVoiceMode={setIsVoiceMode}
                            isVoiceMode={isVoiceMode}
                            setIsVoiceRecording={setIsVoiceRecording}
                        />
                        :
                        <ChatInput
                            onChange={e => setText(e.target.value)}
                            leftItem={
                                <IconButton
                                    label="Emoji icon"
                                    isBgTransparent={!isEmojiPickerOpen}
                                    BgColor={themeMode === 'dark' ? palletes.dark.primary : palletes.light.primary}
                                    onClick={() => toogleEmojiPicker()}
                                    onHoverColor={palletes.secondary}
                                    onHoverBgColor={themeMode === 'dark' ? palletes.dark.primary : palletes.light.primary}
                                >
                                    {/* {isEmojiPickerOpen ? <TimesIcon stroke={palletes.danger} /> : <EmojiIcon stroke={isFileSelectorOpen ? palletes.danger : undefined} />} */}
                                    <EmojiIcon stroke={isEmojiPickerOpen ? palletes.danger : undefined} />
                                </IconButton>}
                            rightItem={
                                <IconButton
                                    onClick={() => toogleFileSelectors()}
                                    label="media attachment icon"
                                    isBgTransparent={!isFileSelectorOpen}
                                    BgColor={themeMode === 'dark' ? palletes.dark.primary : palletes.light.primary}
                                    onHoverColor={palletes.secondary}
                                    onHoverBgColor={themeMode === 'dark' ? palletes.dark.primary : palletes.light.primary}
                                >
                                    {/* {isFileSelectorOpen ? <TimesIcon stroke={palletes.danger} /> : <AttachmentIcon stroke={isFileSelectorOpen ? palletes.danger : undefined} />} */}

                                    <AttachmentIcon stroke={isFileSelectorOpen ? palletes.danger : undefined} />
                                </IconButton>}
                            placeholder="Message"
                            styles="!border-0 !hover:border-0 active:border-0 !outline-none"
                        />
                    }
                </Flex>
            </Flex>

            <IconButton
                onClick={() => { isVoiceMode ? toggleRecording() : sendText() }}
                isBgTransparent={false}
                onHoverColor={palletes.primary}
                onHoverBgColor={themeMode === 'dark' ? palletes.dark.primary : palletes.light.primary}
                BgColor={themeMode === 'dark' ? palletes.dark.secondary : palletes.light.secondary} styles="bg-white" label="send btn"
            >
                {isVoiceMode ? <MicIcon /> : <SendIcon />}
            </IconButton>
        </HStack >
    )
}

export default ChatFooter