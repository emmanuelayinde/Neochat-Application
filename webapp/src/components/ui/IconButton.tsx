import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { useAppSelector } from '../../redux/type'
import { palletes } from '../../data'

interface IProps {
    children: React.ReactNode,
    label: string,
    styles?: string,
    BgColor?: string,
    color?: string,
    onHoverBgColor?: string,
    onHoverColor?: string,
    isBgTransparent?: boolean,
    onClick?: () => void
}

function IconButtonUI({ children, label, styles, color = undefined, BgColor = undefined, onHoverBgColor, onHoverColor, isBgTransparent = true, onClick = undefined }: IProps) {
    const { themeMode } = useAppSelector(state => state.layoutReducer)

    return (
        <IconButton
            aria-label={label}
            className={styles}
            backgroundColor={isBgTransparent ? 'transparent' : BgColor}
            color={color ? color : themeMode === 'dark' ? palletes.dark.icon : palletes.light.icon}
            onClick={onClick}
            _hover={{
                bgColor: onHoverBgColor ? onHoverBgColor : themeMode === 'dark' ? palletes.dark.secondary : palletes.light.secondary,
                color: onHoverColor ? onHoverColor : themeMode === 'dark' ? palletes.dark.icon : palletes.light.icon,
            }}
        >
            {children}
        </IconButton>
    )
}

export default IconButtonUI