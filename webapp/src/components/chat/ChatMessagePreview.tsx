import { ILastMessage } from "../../@types"
import { Flex, Text } from '@chakra-ui/react'
import { CheckBadgeIcon, FileIcon, FilmIcon, MicIcon, MusicIcon, PhotoIcon, ViewOnceIcon } from "../../assets"


interface ILastMessageProps {
    message: ILastMessage,
    currentUserId: string,
}


const ChatMessagePreview = ({ message, currentUserId }: ILastMessageProps) => {
    if (message.isViewOnce) {
        return <ViewOnceMessage />
    }
    switch (message.type) {
        case 'text-message':
            return <TextMessage
                message={message}
                isMine={message.sender._id === currentUserId}
            />

        case 'image-message':
            return <ImageMessage />

        case 'audio-message':
            return <AudioMessage />

        case 'voice-message':
            return <VoiceMessage />

        case 'video-message':
            return <VideoMessage />

        case 'file-message':
            return <FileMessage />

        default:
            return <UnsupportedMessage />
    }
}

export default ChatMessagePreview


// Text Message Component
export const TextMessage = ({ message, isMine }: { message: ILastMessage, isMine: boolean }) => {
    return (
        <Flex gap={2} alignItems={'center'} className="w-full">
            {isMine && <CheckBadgeIcon />}
            <Text as={'p'} className="text-xs w-full inline overflow-hidden whitespace-nowrap">
                {message?.text}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit natus et dolor dicta animi cumque illo cum assumenda, corrupti magnam nemo beatae deleniti facere doloribus labore sit minus minima rem. */}
            </Text>
        </Flex>
    )
}


// Image Message Component
export const ImageMessage = () => {
    return (<Flex gap={1.5} alignItems={'center'} className="w-full">
        {/* {isMine && <CheckBadgeIcon />} */}
        <Flex gap={1.5} alignItems={'center'}>
            <PhotoIcon />
            <Text as={'p'} className="text-xs w-full inline overflow-hidden whitespace-nowrap">
                Photo
            </Text>
        </Flex>
    </Flex>)
}

// Video Message Component
export const VideoMessage = () => {
    return (
        <Flex gap={2} alignItems={'center'} className="w-full">
            {/* {isMine && <CheckBadgeIcon />} */}
            <Flex gap={1.5} alignItems={'center'}>
                <FilmIcon />
                <Text as={'p'} className="text-xs w-full inline overflow-hidden whitespace-nowrap">
                    Video
                </Text>
            </Flex>
        </Flex>
    )
}

// Audio Message Component
export const AudioMessage = () => {
    return (
        <Flex gap={2} alignItems={'center'} className="w-full">
            {/* {isMine && <CheckBadgeIcon />} */}
            <Flex gap={1.5} alignItems={'center'}>
                <MusicIcon />
                <Text as={'p'} className="text-xs w-full inline overflow-hidden whitespace-nowrap">
                    Audio
                </Text>
            </Flex>
        </Flex>
    )
}


// File Message Component
export const FileMessage = () => {
    return (
        <Flex gap={2} alignItems={'center'} className="w-full">
            {/* {isMine && <CheckBadgeIcon />} */}
            <Flex gap={1.5} alignItems={'center'}>
                <FileIcon />
                <Text as={'p'} className="text-xs w-full inline overflow-hidden whitespace-nowrap">
                    File
                </Text>
            </Flex>
        </Flex>
    )
}


// Voice Message Component
export const VoiceMessage = () => {
    return (
        <Flex gap={2} alignItems={'center'} className="w-full">
            {/* {isMine && <CheckBadgeIcon />} */}
            <Flex gap={1.5} alignItems={'center'}>
                <MicIcon />
                <Text as={'p'} className="text-xs w-full inline overflow-hidden whitespace-nowrap">
                    Voice note
                </Text>
            </Flex>
        </Flex>
    )
}

// ViewOnce Message Component
export const ViewOnceMessage = () => {
    return (
        <Flex gap={2} alignItems={'center'} className="w-full">
            {/* {isMine && <CheckBadgeIcon />} */}
            <Flex gap={1.5} alignItems={'center'}>
                <ViewOnceIcon />
                <Text as={'p'} className="text-xs w-full inline overflow-hidden whitespace-nowrap">
                    View once
                </Text>
            </Flex>
        </Flex>
    )
}


// Unsupportted Message Component
export const UnsupportedMessage = () => {
    return (
        <>Unsupportted</>
    )
}



