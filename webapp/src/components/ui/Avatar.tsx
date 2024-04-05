import { Avatar } from '@chakra-ui/react'
import { CustomTooltip } from '..'
import { useAppDispatch } from '../../redux/type'
import { setCurrentTab } from '../../redux/reducer/layoutReducer'


interface IProps {
    url: string,
    className?: string
}


function AvatarUI({ url, className }: IProps) {
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

export default AvatarUI