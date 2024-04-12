import { ILastMessage } from "../../@types"

interface ILastMessageProps {
    message: ILastMessage,
    currentUserId: string,
}

function ChatMessagePreview({ message, currentUserId }: ILastMessageProps) {
    console.log({ message, currentUserId })
    return (
        <div>pre</div>
    )
}

export default ChatMessagePreview