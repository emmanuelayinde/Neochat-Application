import React, { FC } from 'react'
import { Pressable } from './styled'

interface PressablePropsType {
    children?: React.ReactNode,
    rippleColor?: string,
    handleOnPress?: () => void
    classes?: string
}

const PressableWithRipple: FC<PressablePropsType> = ({ children, rippleColor = '#4b5563', handleOnPress, classes, ...others }) => {

    return (
        <Pressable
            onPress={handleOnPress ? () => handleOnPress() : (() => { })
            }
            className={`w-8 h-8 overflow-hidden rounded-md items-center justify-center ${classes}`
            }
            android_ripple={{ color: rippleColor, borderless: false, foreground: true }}
            {...others}
        >
            {children}
        </Pressable >
    )
}

export default PressableWithRipple