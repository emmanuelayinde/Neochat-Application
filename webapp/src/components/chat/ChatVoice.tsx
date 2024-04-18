import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react'
import { useWavesurfer } from '@wavesurfer/react'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'
// import Hover from 'wavesurfer.js/dist/plugins/hover.esm.js'
import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/react"
import { PauseIcon, PlayIcon, TrashIcon, ViewOnceIcon } from "../../assets"
import { palletes } from '../../data'
import audio from '../../assets/audio/audio.mp4'
import { formatDuration } from '../../utils/time.utils'
import { IconButton } from '..'
import { recordingEventTypes } from '../../@types/chat.type'


interface IVoicePlayerProps {
    src: string,
    waveHeight?: number | 'auto',
}

export const ChatVoicePlayer = ({ src = audio, waveHeight = 60 }: IVoicePlayerProps) => {
    const [speed, setSpeed] = useState<number>(1)
    const voiceWaveRef = useRef(null)

    const { wavesurfer, isPlaying, currentTime, isReady, } = useWavesurfer({
        container: voiceWaveRef,
        url: src,
        height: waveHeight,
        waveColor: palletes.secondary,
        progressColor: palletes.primary,
        cursorWidth: 0,
        barGap: 2,
        barHeight: 2,
        barRadius: 10,
        fillParent: true,
        plugins: useMemo(() => [], []),

        // plugins: [
        //     Hover.create({
        //         lineColor: '#ff0000',
        //         lineWidth: 1.5,
        //         labelBackground: '#555',
        //         labelColor: '#fff',
        //         labelSize: '11px',
        //     }),
        // ],
    })

    const onPlayPause = useCallback(() => {
        if (wavesurfer) wavesurfer.playPause()
    }, [wavesurfer])


    const togglePlayBackSpeed = useCallback(() => {
        if (wavesurfer) {
            if (speed >= 2) { wavesurfer?.setPlaybackRate(0.5); setSpeed(0.5) }
            else { wavesurfer?.setPlaybackRate(speed + 0.5); setSpeed(speed + 0.5) }
        }
    }, [wavesurfer, speed])

    return (
        <Flex gap={2} alignItems={'center'} width={'100%'} className='mb-1'>
            <Flex alignItems={'center'} gap={2}>
                {/* <MicIcon styles={`w-8`} fill={`${isPlaying ? palletes.danger : palletes.success}`} /> */}
                {isPlaying &&
                    <Box onClick={togglePlayBackSpeed} className={`rounded-md w-fit px-3 py-1 cursor-pointer bg-white/20`}>
                        <Text className='text-sm font-medium italic'>{speed}x</Text>
                    </Box>
                }
                <Box onClick={() => onPlayPause()} className={`cursor-pointer`}>
                    {isReady && isPlaying ? <PauseIcon styles='w-8' /> : <PlayIcon styles='w-8' />}
                </Box>
            </Flex>

            <HStack gap={2} alignItems={'center'} className='w-full h-fit' >
                <div ref={voiceWaveRef} className='min-w-40 w-full' />
                {isPlaying &&
                    <Box className={`rounded-md w-fit h-fit px-2 py-1 cursor-pointer bg-white/20`}>
                        <Text className='text-sm font-medium italic'>{formatDuration(currentTime)}</Text>
                    </Box>
                }
            </HStack>
        </Flex>
    )
}


interface IVoiceRecorderProps {
    event: recordingEventTypes | null,
    setEvent: React.Dispatch<React.SetStateAction<recordingEventTypes | null>>,
    // isRecording: boolean,
    // setIsRecording: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChatVoiceRecorder = ({ event, setEvent }: IVoiceRecorderProps) => {
    const [currentRecordingInSecs, setCurrentRecordingInSecs] = useState<string | undefined>()
    const [_, setCurrentRecordedBlob] = useState<Blob | null>(null)

    const wavesurferRecorderRef = useRef<RecordPlugin>()
    const recordingWaveContainer = useRef(null)

    const { wavesurfer } = useWavesurfer({
        container: recordingWaveContainer,
        height: 60,
        waveColor: palletes.secondary,
        progressColor: palletes.primary,
        cursorWidth: 0,
        barGap: 2,
        barHeight: 2,
        barRadius: 10,
        fillParent: true,
    })

    useEffect(() => {
        // Initialize WaveSurfer Recording Plugin
        wavesurferRecorderRef.current = wavesurfer?.registerPlugin(
            RecordPlugin.create({ scrollingWaveform: true })
        )

        wavesurferRecorderRef.current?.on('record-end', (blob) => {
            const recordedUrl = URL.createObjectURL(blob)
            setCurrentRecordedBlob(blob)
            wavesurfer?.load(recordedUrl)
        })

        wavesurferRecorderRef.current?.on('record-progress', (seconds) => {
            setCurrentRecordingInSecs(formatDuration(seconds))
        })

        wavesurfer?.on('error', (error) => console.log({ error }))

        return () => {
            wavesurfer?.destroy()
        }
    }, [wavesurfer])


    useEffect(() => {
        switch (event) {
            case 'start-recording':
                console.log('1')
                startRecording()
                break;

            case 'pause-recording':
                console.log('2')
                pauseRecording()
                break;

            case 'resume-recording':
                console.log('3')
                resumeRecording()
                break;

            case 'stop-recording':
                console.log('4')
                stopRecording()
                break;

            case 'delete-recording':
                console.log('5')
                deleteRecording()
                break;
            default:
                break;
        }

        // return () => {
        //     setEvent(null)
        // }
    }, [event])

    console.log({ event }, 'is paused? ' + wavesurferRecorderRef.current?.isPaused())


    const startRecording = async () => {
        if (wavesurferRecorderRef.current?.isRecording() || wavesurferRecorderRef.current?.isPaused()) {
            stopRecording()
            return
        }

        setCurrentRecordedBlob(null)
        const deviceId = await RecordPlugin.getAvailableAudioDevices().then((devices) => {
            return devices[0].deviceId
        })

        wavesurferRecorderRef.current?.startRecording({ deviceId }).then(() => {
            console.log('⚡ Starting Recording...')
            return
        })
    }

    const stopRecording = () => {
        if (wavesurferRecorderRef.current && (wavesurferRecorderRef.current?.isRecording() || wavesurferRecorderRef.current?.isPaused())) {
            wavesurferRecorderRef.current?.stopRecording()
            console.log('🔥🔥🔥 Recording stopped')
        }
    }

    const pauseRecording = async () => {
        if (wavesurferRecorderRef.current?.isRecording() || !wavesurferRecorderRef.current?.isPaused()) {
            wavesurferRecorderRef.current?.pauseRecording()
            return
        }
    }

    const resumeRecording = async () => {
        if (wavesurferRecorderRef.current?.isRecording() || !wavesurferRecorderRef.current?.isPaused()) {
            wavesurferRecorderRef.current?.resumeRecording()
            return
        }
    }

    const deleteRecording = async () => {
        if (wavesurferRecorderRef.current) {
            setCurrentRecordedBlob(null)
            wavesurferRecorderRef.current?.destroy()
        }
    }

    return (
        <HStack gap={2} alignItems={'center'} justifyContent={'flex-end'} className='w-full px-2 '>
            <IconButton label='delete recording' onHoverColor={palletes.danger} onClick={() => setEvent('delete-recording')} >
                <TrashIcon />
            </IconButton>
            <Text className='text-sm'>
                {currentRecordingInSecs ?? '00:00'}
            </Text>

            <Box className='w-full max-w-48 border mx-2'>
                <div ref={recordingWaveContainer} />
            </Box>

            <IconButton
                onClick={() => setEvent(wavesurferRecorderRef.current?.isPaused() ? 'resume-recording' : 'pause-recording')}
                label='toggle play/pause recording'
                color={palletes.danger}
                styles={`border !rounded-full scale-75  !border-danger`}
            >
                {wavesurferRecorderRef.current?.isPaused() ? <PlayIcon /> : <PauseIcon />}
            </IconButton>

            <Divider orientation='vertical' className='mx-1' />

            <IconButton label='make voice note view-once' onClick={() => { }}>
                <ViewOnceIcon />
            </IconButton>

        </HStack>
    )
}