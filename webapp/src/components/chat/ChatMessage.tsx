import { ChatAudio, ChatAvatar, ChatDocument, ChatImageGallery, ChatVoicePlayer } from ".."
import { IMessageProps } from "../../@types"
import { Box, Flex, Text } from '@chakra-ui/react'
import { images } from "../../data"
import { formatDate } from "../../utils/time.utils"
import { OpenedViewOnceIcon, ViewOnceIcon } from "../../assets"
import { useState } from "react"


interface IMsgProps {
    message: IMessageProps,
    currentUserId: string,
}


const ChatMessage = ({ message, currentUserId }: IMsgProps) => {
    if (message.isViewOnce) {
        return <ViewOnceMessage
            message={message}
            isMine={message.sender._id === currentUserId}
        />
    }
    switch (message.type) {
        case 'text-message':
            return <TextMessage
                message={message}
                isMine={message.sender._id === currentUserId}
            />

        case 'image-message':
            return <ImageMessage
                message={message}
                isMine={message.sender._id === currentUserId}
            />

        case 'audio-message':
            return <AudioMessage
                message={message}
                isMine={message.sender._id === currentUserId}
            />

        case 'voice-message':
            return <VoiceMessage
                message={message}
                isMine={message.sender._id === currentUserId}
            />

        case 'video-message':
            return <VideoMessage
                message={message}
                isMine={message.sender._id === currentUserId}
            />

        case 'file-message':
            return <FileMessage
                message={message}
                isMine={message.sender._id === currentUserId}
            />

        default:
            return <UnsupportedMessage
                message={message}
                isMine={message.sender._id === currentUserId}
            />
    }
}

export default ChatMessage

// Text Message Component
export const TextMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
    return (
        <Flex
            gap={2}
            alignItems={'flex-end'}
            width={'100%'}
            justifyContent={isMine ? 'flex-end' : 'flex-start'}
            id={`personal-message-${message._id}`}
            className="p-4"
        >
            <Flex
                order={!isMine ? 2 : undefined}
                gap={2}
                flexDirection={'column'}
                className={`w-fit min-w-32 max-w-[90%] md:max-w-[60%] lg:max-w-[55%] p-4 rounded-lg dark:bg-secondary-dark/90`}
            >
                <Flex justifyContent={'space-between'} alignItems={'center'} className="">
                    <Text>{message.sender.name}</Text>
                    <Box>
                        <Text className="text-xs italic">{formatDate(message.createdAt.getTime().toString())}</Text>
                    </Box>
                </Flex>
                <Text>
                    {message?.text}
                </Text>
            </Flex>

            {!isMine && <ChatAvatar url={message.sender.avatar || ''} radius={4} />}
        </Flex>
    )
}


// Image Message Component
export const ImageMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
    return (
        <Flex
            gap={2}
            alignItems={'flex-end'}
            width={'100%'}
            justifyContent={isMine ? 'flex-end' : 'flex-start'}
            id={`personal-message-${message._id}`}
            className="p-4"
        >
            <Flex
                order={!isMine ? 2 : undefined}
                gap={2}
                flexDirection={'column'}
                className={`w-fit min-w-32 max-w-[90%] md:max-w-[60%] lg:max-w-[55%] p-4 rounded-lg dark:bg-secondary-dark/90`}
            >
                {!isMine && <Flex justifyContent={'space-between'} alignItems={'center'} gap={8}>
                    <Text>{message.sender.name}</Text>
                    <Text className="text-xs italic">{formatDate(message.createdAt.getTime().toString())}</Text>
                </Flex>}

                <ChatImageGallery
                    // images={[images[0]]}
                    // images={[images[0], images[1]]}
                    // images={[images[0], images[1], images[2]]}
                    // images={[images[0], images[1], images[2], images[3]]}
                    images={[images[0], images[1], images[2], images[3], images[4], images[5]]}
                />
                <Text>
                    {message?.text}
                </Text>
            </Flex>

            {!isMine && <ChatAvatar url={message.sender.avatar || ''} radius={4} />}
        </Flex>

    )
}

// Video Message Component
export const VideoMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
    return (
        <Flex
            gap={2}
            alignItems={'flex-end'}
            width={'100%'}
            justifyContent={isMine ? 'flex-end' : 'flex-start'}
            id={`personal-message-${message._id}`}
            className="p-4"
        >
            <Flex
                order={!isMine ? 2 : undefined}
                gap={2}
                flexDirection={'column'}
                className={`w-fit min-w-32 max-w-[90%] md:max-w-[60%] lg:max-w-[55%] p-4 rounded-lg dark:bg-secondary-dark/90`}
            >
                {!isMine && <Flex justifyContent={'space-between'} alignItems={'center'} gap={8}>
                    <Text>{message.sender.name}</Text>
                    <Text className="text-xs italic">{formatDate(message.createdAt.getTime().toString())}</Text>
                </Flex>}

                <ChatImageGallery
                    // images={[images[0]]}
                    // images={[images[0], images[1]]}
                    // images={[images[0], images[1], images[2]]}
                    // images={[images[0], images[1], images[2], images[3]]}
                    images={[images[0], images[1], images[2], images[3], images[4], images[5]]}
                />
                <Text>
                    {message?.text}
                </Text>
            </Flex>

            {!isMine && <ChatAvatar url={message.sender.avatar || ''} radius={4} />}
        </Flex>

    )
}

// Audio Message Component
export const AudioMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
    return (
        <Flex
            gap={2}
            alignItems={'flex-end'}
            width={'100%'}
            justifyContent={isMine ? 'flex-end' : 'flex-start'}
            id={`personal-message-${message._id}`}
            className="p-4"
        >            <Box
            order={!isMine ? 2 : undefined}
            gap={2}
            flexDirection={'column'}
            className={`w-fit min-w-32 max-w-[90%] md:max-w-[60%] lg:max-w-[55%] p-4 rounded-lg dark:bg-secondary-dark/90`}
        >
                {!isMine && <Flex justifyContent={'space-between'} alignItems={'center'} gap={8}>
                    <Text>{message.sender.name}</Text>
                    <Text className="text-xs italic">{formatDate(message.createdAt.getTime().toString())}</Text>
                </Flex>}

                <ChatAudio />
                <Text>
                    {message?.text}
                </Text>
            </Box>

            {!isMine && <ChatAvatar url={message.sender.avatar || ''} radius={4} />}
        </Flex>
    )
}


// File Message Component
export const FileMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
    return (
        <Flex
            gap={2}
            alignItems={'flex-end'}
            width={'100%'}
            justifyContent={isMine ? 'flex-end' : 'flex-start'}
            id={`personal-message-${message._id}`}
            className="p-4"
        >
            <Box
                order={!isMine ? 2 : undefined}
                gap={2}
                flexDirection={'column'}
                className={`w-fit min-w-32 max-w-[90%] md:max-w-[60%] lg:max-w-[55%] p-4 rounded-lg dark:bg-secondary-dark/90`}
            >
                {!isMine && <Flex justifyContent={'space-between'} alignItems={'center'} gap={8}>
                    <Text>{message.sender.name}</Text>
                    <Text className="text-xs italic">{formatDate(message.createdAt.getTime().toString())}</Text>
                </Flex>}

                <ChatDocument />
                <Text>
                    {message?.text}
                </Text>
            </Box>
            {!isMine && <ChatAvatar url={message.sender.avatar || ''} radius={4} />}
        </Flex>
    )
}


// Voice Message Component
export const VoiceMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
    return (
        <Flex
            gap={2}
            alignItems={'flex-end'}
            width={'100%'}
            justifyContent={isMine ? 'flex-end' : 'flex-start'}
            id={`personal-message-${message._id}`}
            className="p-4"
        >
            <Box
                order={!isMine ? 2 : undefined}
                gap={2}
                flexDirection={'column'}
                className={`w-fit min-w-32 max-w-[90%] md:max-w-[60%] lg:max-w-[55%] p-4 rounded-lg dark:bg-secondary-dark/90`}
            >
                {!isMine && <Flex justifyContent={'space-between'} alignItems={'center'} gap={8}>
                    <Text>{message.sender.name}</Text>
                    <Text className="text-xs italic">{formatDate(message.createdAt.getTime().toString())}</Text>
                </Flex>}

                <Box className="w-full">
                    <ChatVoicePlayer
                        src={'https://s3.eu-central-1.wasabisys.com/audio.com.audio/transcoding/08/14/1792984687881408-1792984689998249-1792984728055753.mp3?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=W7IA3NSYSOQIKLY9DEVC%2F20240414%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20240414T000443Z&X-Amz-SignedHeaders=host&X-Amz-Expires=518400&X-Amz-Signature=b140243e416965f72c565d2858a0283e01d5ef0fad53fc8607b5913ea661ba33'}
                    />
                </Box>
            </Box>
            {!isMine && <ChatAvatar url={message.sender.avatar || ''} radius={4} />}
        </Flex>
    )
}


// ViewOnce Message Component
export const ViewOnceMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <Flex
            gap={2}
            alignItems={'flex-end'}
            width={'100%'}
            justifyContent={isMine ? 'flex-end' : 'flex-start'}
            id={`personal-message-${message._id}`}
            className="p-4"
        >
            <Box
                order={!isMine ? 2 : undefined}
                gap={2}
                flexDirection={'column'}
                className={`w-fit min-w-32 max-w-[90%] md:max-w-[60%] lg:max-w-[55%] p-4 rounded-lg dark:bg-secondary-dark/90`}
            >
                {!isMine && <Flex justifyContent={'space-between'} alignItems={'center'} gap={8}>
                    <Text>{message.sender.name}</Text>
                    <Text className="text-xs italic">{formatDate(message.createdAt.getTime().toString())}</Text>
                </Flex>}

                <Flex onClick={() => setIsOpened(true)} alignItems={'center'} gap={2} className="w-full cursor-pointer">
                    {isOpened ? <OpenedViewOnceIcon /> : <ViewOnceIcon />}
                    <Text className="capitalize">
                        {
                            message.type === 'image-message' ? 'photo' :
                                message.type === 'video-message' ? 'video' :
                                    message.type === 'voice-message' ? 'voice' :
                                        message.type === 'text-message' ? 'text' : ''
                        }
                    </Text>
                </Flex>
            </Box>
            {!isMine && <ChatAvatar url={message.sender.avatar || ''} radius={4} />}
        </Flex>
    )
}


// Unsupportted Message Component
export const UnsupportedMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
    // console.log({ isMine })

    return (
        <Flex
            width={'100%'}
            justifyContent={isMine ? 'flex-end' : 'flex-start'}
            id={`personal-message-${message._id}`}
            className="border-2"
        >
            <Box
                className={`w-fit min-w-32 max-w-[90%] md:max-w-[60%] lg:max-w-[55%] border`}
            >
                <Text>
                    {isMine}
                    UnsupportedMessage
                </Text>
            </Box>


        </Flex>
    )
}



