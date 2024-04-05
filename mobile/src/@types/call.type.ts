// Call 

export type callTypes = 'voice' | 'video'
export type callOrigin = '1-1-chat' | 'group-chat'

export type callStatus = 'missed' | 'canceled' | 'received' | 'sent'

export enum callStatusColor {
    MISSED = '#Dc3545',
    SENT = '#0085ca',
    RECEIVED = '#28a745',
    CANCELED = '#ff6700',
}

export type callStatusIconName = 'call-missed' | 'call-made' | 'call-received' | 'call-merge'



export interface callProps {
    caller: string,
    time: string,
    status: callStatus,
    avatar: string | undefined
    duration: string
}