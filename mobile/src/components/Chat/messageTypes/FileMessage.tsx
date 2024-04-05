
import React from 'react'
import { Pressable, Text, View, screenWidth, Image } from '../../styled';
import { Ionicons } from '@expo/vector-icons';
import { BGImage } from '../../../../assets';
import { IMessageProps } from '../../../@types';

export interface MessageProps {
    isSender: boolean
    caption?: string | undefined
}

const FileMessage = ({ message, currentUser }: { message: IMessageProps, currentUser: string }) => {
    const maxWidth = screenWidth * 0.7

    return (
        <View>

        </View>
    )
}

export default FileMessage