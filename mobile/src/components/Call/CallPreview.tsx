
import React, { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from '../styled'
import { avatar } from '../../../assets'
import { MaterialIcons } from '@expo/vector-icons';
import { callProps, callStatusColor, callStatusIconName } from '../../@types';


const CallPreview = (props: callProps) => {
    const [statusBaseParams, setStatusBaseParams] = useState<{ color: string, icon: callStatusIconName } | undefined>(undefined)

    useEffect(() => {
        // return () => {
        switch (props.status) {
            case 'sent':
                setStatusBaseParams({ color: callStatusColor.SENT, icon: 'call-made' })
                break;
            case 'received':
                setStatusBaseParams({ color: callStatusColor.RECEIVED, icon: 'call-received', })
                break;
            case 'missed':
                setStatusBaseParams({ color: callStatusColor.MISSED, icon: 'call-missed', })
                break;
            case 'canceled':
                setStatusBaseParams({ color: callStatusColor.CANCELED, icon: 'call-merge', })
                break;
            default:
                return;
        }
        // }
    }, [])

    return (
        <Pressable>
            <View className='w-full h-fit py-2 px-4 flex-row justify-between items-center'>
                <View className='space-x-4 flex-row items-center '>
                    {/*  */}
                    <Pressable className={`&& 'border-2 border-primary'} w-12 h-12 rounded-full`}>
                        <Image className='w-full h-full rounded-full' resizeMode='contain' source={{ uri: props.avatar || avatar }} />
                    </Pressable>
                    <View className='space-y-1'>
                        <Text className='text-lg font-bold capitalize text-[#090909]'>{props.caller}</Text>
                        <View className='items-center flex-row space-x-1'>
                            <MaterialIcons name={statusBaseParams?.icon} color={statusBaseParams?.color} size={16} />
                            <Text className='text-xs font-normal text-primaryText' style={{ color: statusBaseParams?.color }}>{props.status}</Text>
                        </View>
                    </View>
                </View>
                {/*  */}
                <View className='items-end space-y-2' >
                    <View className='items-center justify-centerw-fit p-1'>
                        <Text className=' font-semibold text-sm'>
                            {props.time}
                        </Text>
                    </View>
                    <Text>
                        {props.duration}
                    </Text>

                </View>
            </View>
        </Pressable>
    )
}

export default CallPreview