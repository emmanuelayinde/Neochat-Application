import httpStatus from "http-status"
import { MessageModel } from "../models"
import { IServicePropWithoutId } from "../schema"
import { Message } from "../models/messageModel"
import { validateTTL } from "../utils"


// Get messages
export const getMessages = async (chatId: string): Promise<IServicePropWithoutId<Message[]>> => {
    try {
        const chatMessages = await MessageModel.find({ chatId })
        return {
            error: true,
            message: 'Messages fetched',
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