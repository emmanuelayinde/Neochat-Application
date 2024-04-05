import React from 'react'

import { IMessageProps } from '../../@types'
import { envConfig } from '../../utils/config'
import { AudioCallMessage, FileMessage, ImageMessage, TextMessage, VideoCallMessage, VoiceMessage } from '../'

const ChatMessageDisplay = ({ message }: { message: IMessageProps }) => {
    const currentUser = envConfig.USER_ID

    if (message.type === 'text-message') return <TextMessage currentUser={currentUser} message={message} />
    else if (message.type === 'image-message') return <ImageMessage currentUser={currentUser} message={message} />
    else if (message.type === 'voice-message') return <VoiceMessage currentUser={currentUser} message={message} />
    else if (message.type === 'audio-message') return <AudioCallMessage currentUser={currentUser} message={message} />
    else if (message.type === 'video-message') return <VideoCallMessage currentUser={currentUser} message={message} />
    else if (message.type === 'file-message') return <FileMessage currentUser={currentUser} message={message} />
    else return
}

export default ChatMessageDisplay