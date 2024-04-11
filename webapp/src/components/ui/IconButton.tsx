import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../redux/type'
import { palletes } from '../../data'

interface IProps {
    children: React.ReactNode,
    label: string,
    styles?: string,
    BgColor?: string,
    onHoverBgColor?: string,
    onHoverColor?: string,
    isBgTransparent?: boolean,
}

function IconButtonUI({ children, label, styles, BgColor = undefined, onHoverBgColor, onHoverColor, isBgTransparent = true }: IProps) {
    const { themeMode } = useAppSelector(state => state.layoutReducer)

    return (
        <IconButton
            aria-label={label}
            backgroundColor={isBgTransparent ? 'transparent' : BgColor}
            color={onHoverColor ?? themeMode === 'dark' ? palletes.dark.icon : palletes.light.icon}
            className={styles}
            _hover={{
                // bgColor: onHoverBgColor,
                bgColor: onHoverBgColor ? onHoverBgColor : themeMode === 'dark' ? palletes.dark.secondary : palletes.light.secondary,
                color: onHoverColor ? onHoverColor : themeMode === 'dark' ? palletes.dark.icon : palletes.light.icon,
            }}
        // _active={{
        //     bgColor: onHoverBgColor ?? themeMode === 'dark' ? palletes.dark.secondary : palletes.light.secondary,
        //     color: onHoverColor ?? themeMode === 'dark' ? '#f9f9f9' : palletes.light.primary,
        // }}
        >
            {children}
        </IconButton>
    )
}

export default IconButtonUI