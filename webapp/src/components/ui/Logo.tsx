import { Flex, Image } from '@chakra-ui/react'
import { useAppSelector } from '../../redux/type'
import { DarkLogo, LightLogo } from '../../assets'


interface IProps {
    className?: string
}

function Logo({ className }: IProps) {
    const { themeMode } = useAppSelector(state => state.layoutReducer)
    return <>
        <Flex aria-label='neochat logo' rounded={4} className='overflow-hidden p-1'>
            <Image
                src={themeMode === 'dark' ? DarkLogo : LightLogo}
                className={`w-full h-full  ${className}`}
            />
        </Flex>
    </>
}

export default Logo