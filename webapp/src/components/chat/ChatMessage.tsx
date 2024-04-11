import { ILastMessage, IMessageProps } from "../../@types"


interface IMsgProps {
    message: IMessageProps,
    currentUserId: string,
}

export const ChatMessage = ({ message, currentUserId }: IMsgProps) => {
    console.log({ message, currentUserId })
    return (
        <div>ChatMessageDisplay</div>
    )
}


interface ILastMessageProps {
    message: ILastMessage,
    currentUserId: string,
}


export const LastChatMessagePreview = ({ message, currentUserId }: ILastMessageProps) => {
    console.log({ message, currentUserId })
    return <p>last message</p>
}