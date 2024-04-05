import { IconButton, Image } from '@chakra-ui/react'
import { useAppSelector } from '../../redux/type'
import { DarkLogo, LightLogo } from '../../assets'


interface IProps {
    className?: string
}

function Logo({ className }: IProps) {
    const { themeMode } = useAppSelector(state => state.layoutReducer)
    return <>
        <IconButton aria-label='neochat logo' rounded={4} className='overflow-hidden'>
            <Image
                src={themeMode === 'dark' ? DarkLogo : LightLogo}
                className={`w-full h-full  ${className}`}
            />
        </IconButton>
    </>
}

export default Logo