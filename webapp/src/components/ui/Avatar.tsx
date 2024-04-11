import { Avatar, AvatarBadge } from '@chakra-ui/react'
import { CustomTooltip } from '..'
import { useAppDispatch } from '../../redux/type'
import { setCurrentTab } from '../../redux/reducer/layoutReducer'
import { chatStatus } from '../../@types'


interface IProps {
    url: string,
    className?: string
}


export const AvatarUI = ({ url, className }: IProps) => {
    const dispatch = useAppDispatch()

    return (
        <CustomTooltip label='user profile' >
            <Avatar
                src={url} rounded={4} className={`${className} cursor-pointer`}
                onClick={() => dispatch(setCurrentTab('user-profile'))}
            />
        </CustomTooltip>
    )
}

interface IPropsBadge {
    url: string,
    onlineStatus?: chatStatus,
    className?: string,
    hasActiveStatus?: boolean,
}

export const BadgedAvatar = ({ onlineStatus, hasActiveStatus = false, url, className }: IPropsBadge) => {
    return (
        <Avatar src={url} className={`${className} ${hasActiveStatus && 'ring-4 ring-brandPrimary'} cursor-pointer`}>
            {onlineStatus == 'away' && <AvatarBadge boxSize='0.9em' borderWidth={'2px'} bg='gray' />}
            {onlineStatus == 'offline' && <AvatarBadge boxSize='0.9em' borderWidth={'2px'} bg='tomato' />}
            {onlineStatus == 'online' && <AvatarBadge boxSize='0.9em' borderWidth={'2px'} bg='green.500' />}
        </Avatar>
    )
}