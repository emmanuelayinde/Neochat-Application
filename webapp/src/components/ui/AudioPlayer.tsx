import { useCallback, useMemo, useRef } from 'react'
import { useWavesurfer } from '@wavesurfer/react'
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js'


interface IProps {
    src: string,
}


const AudioPlayer = ({ src }: IProps) => {
    const containerRef = useRef(null)

    const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
        container: containerRef,
        height: 100,
        width: 240,
        waveColor: '',
        progressColor: '',
        url: src,
        plugins: useMemo(() => [Timeline.create()], []),
    })

    const onPlayPause = useCallback(() => {
        wavesurfer && wavesurfer.playPause()
    }, [wavesurfer])


    return (
        <div ref={containerRef} />
    )
}



export default AudioPlayer

