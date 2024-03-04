import httpStatus from "http-status"
import { ChatModel, MESSAGE_TYPE, MessageModel } from "../models"
import { IServicePropWithoutId } from "../schema"
import { Message } from "../models/messageModel"
import { validateTTL } from "../utils"
import { Chat } from "../models/chatModel"


export interface messageProps {
    from: string,
    to: string,
    chatId: string | null,
    message: {
        type: MESSAGE_TYPE,
        text?: string,
        files?: (Buffer | string)[],
        voiceNote?: Buffer | string
        isViewOnce?: boolean,
        editted?: string,
        isReference?: boolean,
        isReferenceTo?: string,
    }
}

export const getAllUserChats = async (userId: string): Promise<IServicePropWithoutId<Chat[]>> => {
    try {
        const chats = await ChatModel.find({
            // participants: userId
        })
            // .select('participants lastMessage')
            // .populate('participants', 'name avatar username')
            // .populate('lastMessage', 'sender type isReply text voiceNote isViewOnce')
            .sort({ 'updatedAt': 'desc' })
        // .skip()
        // .limit()

        console.log({ chats, userId })
        return {
            error: false,
            message: 'Chats fetched',
            statusCode: httpStatus.OK,
            data: chats
        }
    } catch (error) {
        console.log({ error })
        return {
            error: true,
            message: httpStatus["500_MESSAGE"],
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        }
    }
}

// Get messages
export const getChatMessages = async (chatId: string): Promise<IServicePropWithoutId<Chat>> => {
    try {
        const chatMessages = await ChatModel.findById(chatId)
            .select('messages')

        if (!chatMessages) {
            return {
                error: true,
                message: 'No chat found',
                statusCode: httpStatus.BAD_REQUEST
            }
        }
        return {
            error: false,
            message: 'Chat fetched fetched',
            statusCode: httpStatus.OK,
            data: chatMessages
        }
    } catch (error) {
        console.log({ error })
        return {
            error: true,
            message: httpStatus["500_MESSAGE"],
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        }
    }
}

// Get single message
export const getMessageById = async (messageId: string): Promise<IServicePropWithoutId<Message>> => {
    try {
        const message = await MessageModel.findById({ messageId })

        if (!message) {
            return {
                error: true,
                message: 'No message found',
                statusCode: httpStatus.OK,
            }
        }
        return {
            error: false,
            message: 'Message fetched',
            statusCode: httpStatus.OK,
            data: message
        }
    } catch (error) {
        console.log({ error })
        return {
            error: true,
            message: httpStatus["500_MESSAGE"],
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        }
    }
}


// Post 1-1 message to chat
export const postMessageToChat = async (data: messageProps): Promise<IServicePropWithoutId<Message>> => {
    try {
        let chat
        // Create new chat if there is none
        if (data.chatId) {
            chat = await ChatModel.findById(data.chatId)
        } else {
            chat = await ChatModel.create({
                participants: [data.from, data.to],
                type: data.message['type'],
                isViewOnce: data.message['isViewOnce'],
                text: data.message['type'],
                files: data.message['files'],
                voiceNote: data.message['voiceNote']
            })
        }

        const newMessage = await MessageModel.create({
            chatId: chat?.id,
            sender: data.from,
            messageType: '1-1',
            ...data.message
        })

        newMessage.save()
        chat!.messages.push(newMessage._id)
        chat!.lastMessage = newMessage.id
        chat!.save()

        return {
            error: false,
            message: 'Message sent',
            statusCode: httpStatus.OK,
            data: newMessage
        }
    } catch (error) {
        console.log({ error })
        return {
            error: true,
            message: httpStatus["500_MESSAGE"],
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        }
    }
}


// Post group message to group chat


// Forward 1-1 message 


// Forward group message


// Delete message that is less than 15mins
export const deleteMessage = async (messageId: string, userId: string): Promise<IServicePropWithoutId<object>> => {
    try {
        const message = await MessageModel.findById({ messageId }).select('createdAt')

        if (!message) {
            return {
                error: true,
                message: 'No message found',
                statusCode: httpStatus.OK,
            }
        }

        // Make sure the user updating the message is the sender
        if (message.sender.id !== userId) {
            return {
                error: true,
                message: "You can not delete other user message",
                statusCode: httpStatus.UNAUTHORIZED
            }
        }

        // Check if the message was sent 15mins ago
        const timeExceeded = validateTTL('2024-02-26T10:30:00Z')
        if (!timeExceeded) {
            return {
                error: true,
                message: 'Deletion time exceeded',
                statusCode: httpStatus.BAD_REQUEST,
            }
        }

        await message.deleteOne()
        return {
            error: false,
            message: 'Chat message deleted',
            statusCode: httpStatus.OK,
        }
    } catch (error) {
        console.log({ error })
        return {
            error: true,
            message: httpStatus["500_MESSAGE"],
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        }
    }
}



// Update message than is less than 15mins 
// content: Partial<Message>
export const updateChatMessage = async (messageId: string, userId: string): Promise<IServicePropWithoutId<Message>> => {
    try {
        const message = await MessageModel.findById({ messageId })

        if (!message) {
            return {
                error: true,
                message: 'No message found',
                statusCode: httpStatus.OK,
            }
        }

        // Make sure the user updating the message is the sender
        if (message.sender.id !== userId) {
            return {
                error: true,
                message: "You can not update other user message",
                statusCode: httpStatus.UNAUTHORIZED
            }
        }

        // Check if the message was sent 15mins ago
        const timeExceeded = validateTTL('2024-02-26T10:30:00Z')
        if (!timeExceeded) {
            return {
                error: true,
                message: 'Update time exceeded',
                statusCode: httpStatus.BAD_REQUEST,
            }
        }

        // await message.updateOne({
        //     ...
        // })

        return {
            error: false,
            message: 'Message updated',
            statusCode: httpStatus.OK,
        }
    } catch (error) {
        console.log({ error })
        return {
            error: true,
            message: httpStatus["500_MESSAGE"],
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        }
    }
}

// Clear chat
export const clearChatMessages = async (chatid: string): Promise<IServicePropWithoutId<object>> => {
    try {
        const chatMessage = await MessageModel.findById({ chatid })

        if (!chatMessage) {
            return {
                error: true,
                message: 'No message found in chat',
                statusCode: httpStatus.OK,
            }
        }

        await chatMessage.deleteOne()
        return {
            error: false,
            message: 'Chat message cleared',
            statusCode: httpStatus.OK,
        }
    } catch (error) {
        console.log({ error })
        return {
            error: true,
            message: httpStatus["500_MESSAGE"],
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        }
    }
}