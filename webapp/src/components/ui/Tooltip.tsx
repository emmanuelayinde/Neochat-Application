import { PlacementWithLogical, Tooltip } from '@chakra-ui/react'
import React from 'react'

interface IProps {
    children: React.ReactNode,
    label: string,
    hasArrow?: boolean,
    placement?: PlacementWithLogical,
    className?: string
}


function CustomTooltip({ children, label, className, hasArrow = true, placement = 'right' }: IProps) {
    return (
        <Tooltip hasArrow={hasArrow} label={label} placement={placement} className={className}>
            {children}
        </Tooltip>
    )
}

export default CustomTooltip
