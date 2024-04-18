import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react'
import { useWavesurfer } from '@wavesurfer/react'
import RecordPlugin from 'wavesurfer.js/dist/plugins/record.esm.js'
// import Hover from 'wavesurfer.js/dist/plugins/hover.esm.js'
import { Box, Divider, Flex, HStack, Text } from "@chakra-ui/react"
import { PauseIcon, PlayIcon, TimesIcon, TrashIcon, ViewOnceIcon } from "../../assets"
import { palletes } from '../../data'
import audio from '../../assets/audio/audio.mp4'
import { formatDuration } from '../../utils/time.utils'
import { IconButton } from '..'
import { recordingEventTypes } from '../../@types/chat.type'
import { useAppSelector } from '../../redux/type'


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
    isVoiceMode: boolean,
    setIsVoiceMode: React.Dispatch<React.SetStateAction<boolean>>,
    setIsVoiceRecording: React.Dispatch<React.SetStateAction<boolean>>,
    // isRecording: boolean,
    // setIsRecording: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChatVoiceRecorder = ({ setIsVoiceRecording, isVoiceMode, setIsVoiceMode }: IVoiceRecorderProps) => {
    const [currentRecordingInSecs, setCurrentRecordingInSecs] = useState<string | undefined>()
    const [_, setCurrentRecordedBlob] = useState<Blob | null>(null)

    const { themeMode } = useAppSelector(state => state.layoutReducer)

    const wavesurferRecorderRef = useRef<RecordPlugin>()
    const recordingWaveContainer = useRef(null)

    const { wavesurfer, isReady } = useWavesurfer({
        container: recordingWaveContainer,
        height: 30,
        waveColor: isVoiceMode ? (themeMode === 'dark' ? palletes.dark.text : palletes.light.text) : palletes.secondary,
        progressColor: palletes.primary,
        cursorWidth: 0,
        barWidth: 2,
        barGap: 4,
        barHeight: 2,
        barRadius: 5,
        fillParent: true,
    })

    useEffect(() => {
        if (wavesurfer) {
            // Initialize WaveSurfer Recording Plugin
            wavesurferRecorderRef.current = wavesurfer?.registerPlugin(
                RecordPlugin.create({ scrollingWaveform: true })
            )

            wavesurferRecorderRef.current?.on('record-end', (blob) => {
                const recordedUrl = URL.createObjectURL(blob)
                setCurrentRecordedBlob(blob)
                wavesurfer?.load(recordedUrl)
                console.log("onStoppedRecording event fired")
            })

            wavesurferRecorderRef.current?.on('record-progress', (seconds) => {
                setCurrentRecordingInSecs(formatDuration(seconds))
                console.log("onRecordingInProgress event fired")
            })

            wavesurfer?.on('error', (error) => console.log({ error }))

            console.log("All Good")

            // wavesurferRecorderRef.current.startRecording()
            startRecording()
        }

        // return () => {
        //     wavesurfer?.destroy()
        // }
    }, [wavesurfer])


    // useEffect(() => {
    //     switch (event) {
    //         case 'start-recording':
    //             console.log('1')
    //             startRecording()
    //             return;

    //         case 'pause-recording':
    //             console.log('2')
    //             pauseRecording()
    //             return;

    //         case 'resume-recording':
    //             console.log('3')
    //             resumeRecording()
    //             return;

    //         case 'stop-recording':
    //             console.log('4')
    //             stopRecording()
    //             return;

    //         case 'delete-recording':
    //             console.log('5')
    //             deleteRecording()
    //             return;
    //         default:
    //             return;
    //     }

    //     // return () => {
    //     //     setEvent(null)
    //     // }
    // }, [event])

    // console.log({ event }, 'is paused? ' + wavesurferRecorderRef.current?.isPaused())


    const startRecording = async () => {
        if (wavesurferRecorderRef.current?.isRecording() || wavesurferRecorderRef.current?.isPaused()) {
            // stopRecording()
            console.log('⚡ Stopped Recording...')

            return
        }

        setCurrentRecordedBlob(null)

        const deviceId = await RecordPlugin.getAvailableAudioDevices().then((devices) => {
            return devices[0].deviceId
        })

        wavesurferRecorderRef.current?.startRecording({ deviceId }).then(() => {
            console.log('⚡ Started Recording...')
            return
        })
    }

    const stopRecording = () => {
        if (wavesurferRecorderRef.current && (wavesurferRecorderRef.current?.isRecording() || wavesurferRecorderRef.current?.isPaused())) {
            wavesurferRecorderRef.current?.stopRecording()
            setIsVoiceMode(false)
            console.log('🔥secondary Recording stopped')
        }
    }

    const pauseRecording = async () => {
        console.log("Recording paused...")
        if (wavesurferRecorderRef.current?.isRecording() && !wavesurferRecorderRef.current?.isPaused()) {
            wavesurferRecorderRef.current?.pauseRecording()

            return
        }
    }

    const resumeRecording = async () => {
        console.log("Recording resumed...")
        if (wavesurferRecorderRef.current?.isPaused()) {
            wavesurferRecorderRef.current?.resumeRecording()

            return
        }
    }

    const deleteRecording = async () => {
        if (wavesurferRecorderRef.current) {
            setCurrentRecordedBlob(null)
            setCurrentRecordingInSecs(undefined)
            wavesurferRecorderRef.current?.destroy()
            wavesurfer?.destroy()
            setIsVoiceRecording(false)
            console.log("Recording deleted...")
        }
    }


    console.log("is Recording ===> ", wavesurferRecorderRef.current?.isRecording())
    console.log({ isReady })

    return (
        <HStack gap={2} alignItems={'center'} justifyContent={'flex-end'} className='w-full px-2 '>
            <IconButton
                label='delete recording'
                onHoverColor={palletes.danger}
                onClick={() => deleteRecording()}
            >
                <TrashIcon />
            </IconButton>
            <Text className='text-sm'>
                {currentRecordingInSecs ?? '00:00'}
            </Text>

            <Box className='w-full max-w-48 mx-2'>
                <div ref={recordingWaveContainer}
                    style={{
                        visibility: isReady ? 'visible' : 'hidden'
                    }}
                />
            </Box>

            <IconButton
                onClick={() => wavesurferRecorderRef.current?.isPaused() ? resumeRecording() : pauseRecording()}
                label='toggle play/pause recording'
                color={palletes.danger}
                onHoverColor={palletes.danger}
                styles={`border !rounded-full scale-75  !border-danger`}
            >
                {wavesurferRecorderRef.current?.isPaused() ? <PlayIcon /> : <PauseIcon />}
            </IconButton>

            <Divider orientation='vertical' className='mx-1' />

            <IconButton label='make voice note view-once'>
                <ViewOnceIcon />
            </IconButton>

            <IconButton
                label="send btn"
                styles="bg-white"
                onClick={() => { stopRecording() }}
            // isBgTransparent={false}
            // onHoverColor={palletes.primary}
            // onHoverBgColor={themeMode === 'dark' ? palletes.dark.primary : palletes.light.primary}
            // BgColor={themeMode === 'dark' ? palletes.dark.secondary : palletes.light.secondary} 
            >
                <TimesIcon stroke={palletes.danger} />
            </IconButton>

        </HStack>
    )
}