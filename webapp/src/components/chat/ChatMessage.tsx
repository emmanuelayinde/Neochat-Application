import { IMessageProps } from "../../@types"
import { Box, Flex, Text } from '@chakra-ui/react'


interface IMsgProps {
    message: IMessageProps,
    currentUserId: string,
}


const ChatMessage = ({ message, currentUserId }: IMsgProps) => {
    // console.log(message.sender._id, { currentUserId })

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
                    {message?.text}
                </Text>
            </Box>


        </Flex>
    )
}




// Image Message Component
export const ImageMessage = ({ message, isMine }: { message: IMessageProps, isMine: boolean }) => {
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