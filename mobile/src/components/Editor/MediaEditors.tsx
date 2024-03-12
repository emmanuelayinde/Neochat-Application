import { View, Text } from 'react-native'
import React from 'react'
import PhotoEditor from './PhotoEditor'
import { MediaEditorProps } from './type'
import VideoEditor from './VideoEditor'



const MediaEditors = (props: MediaEditorProps) => {

    return (
        props.for === 'photo' ? <PhotoEditor /> : <VideoEditor />
    )
}

export default MediaEditors