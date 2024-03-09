import httpStatus, { BAD_REQUEST } from "http-status"
import { CALL_TYPE, CallModel } from "../models"
import { IServicePropWithoutId } from "../schema"
import { Call } from "../models/callModel"


// Initial Call
export const initialCall = async (callerId: string, calleeId: string, callType: CALL_TYPE): Promise<IServicePropWithoutId<Call>> => {
    try {
         await CallModel.create({
            caller: callerId,
            callee: calleeId,
            type: callType,
            status: 'initial'
        })
        return {
            error: false,
            message: 'Call initiated',
            statusCode: httpStatus.CREATED
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


// Update Call
export const updateCall = async (callId: string): Promise<IServicePropWithoutId<Call>> => {
    try {
        const call = await CallModel.findById({ callId })
        if (call?.status === 'ended') {
            return {
                error: false,
                message: 'You can not update non-active call',
                statusCode: httpStatus.BAD_REQUEST
            }
        }
        return {
            error: false,
            message: 'Call initiated',
            statusCode: httpStatus.OK
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

// Get Single Call
export const getSingleCall = async (callId: string): Promise<IServicePropWithoutId<Call>> => {
    try {
        const call = await CallModel.findById({ callId })

        if (!call) {
            return {
                error: true,
                message: 'No call record found',
                statusCode: BAD_REQUEST,
            }
        }
        return {
            error: false,
            message: 'Call fetched',
            statusCode: httpStatus.OK,
            data: call
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


// Get User Calls
export const getUserCallHistory = async (userId: string): Promise<IServicePropWithoutId<Call[]>> => {
    try {
        const userCalls = await CallModel.find({ caller: userId, callee: userId })

        return {
            error: false,
            message: 'Call fetched',
            statusCode: httpStatus.OK,
            data: userCalls
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
