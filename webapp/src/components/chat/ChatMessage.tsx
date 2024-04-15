import { ChatAvatar, ChatImageGallery } from ".."
import { IMessageProps } from "../../@types"
import { Box, Flex, Text } from '@chakra-ui/react'
// import { useAppSelector } from "../../redux/type"
import { images } from "../../data"


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
                {!isMine && <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Text>{message.sender.name}</Text>
                    <Text className="text-xs italic">{message.createdAt.getTime()}</Text>
                </Flex>}
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
    console.log({ message }, 'FILES')
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
                {!isMine && <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Text>{message.sender.name}</Text>
                    <Text className="text-xs italic">{message.createdAt.getTime()}</Text>
                </Flex>}

                <ChatImageGallery
                    // images={[images[0]]}
                // images={[images[0], images[1]]}
                images={[images[0], images[1], images[2]]}
                // images={[images[0], images[1], images[2], images[3]]}
                // images={[images[0], images[1], images[2], images[3], images[4]]}
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
                    {message?.type}
                </Text>
            </Box>


        </Flex>
    )
}




// Audio Message Component
export const AudioMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
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
                    {message?.type}
                </Text>
            </Box>


        </Flex>
    )
}




// File Message Component
export const FileMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
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
                    {message?.type}
                </Text>
            </Box>


        </Flex>
    )
}



// Voice Message Component
export const VoiceMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
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
                    {message?.type}
                </Text>
            </Box>


        </Flex>
    )
}




// ViewOnce Message Component
export const ViewOnceMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
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
                    View Once
                </Text>
            </Box>


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

