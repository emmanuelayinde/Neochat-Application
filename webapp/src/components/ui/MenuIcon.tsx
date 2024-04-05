import { Flex, Icon,Tooltip } from '@chakra-ui/react'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/16/solid'


interface IProps {
    isActive: boolean,
    icon: string,
    label: string,
    handleNavigation: () => void,
    className?: string,
    others?: string
}


function MenuIcon({ isActive, icon, label, handleNavigation }: IProps) {
    return (
        <Tooltip hasArrow label={label} placement='right'>
            <Flex onClick={handleNavigation}
                alignItems={'center'}
                justifyContent={'center'}
                className={`${isActive && 'bg-brand-primary/40 border-b-4 border-primary md:border-l-4 md:border-b-0'} w-full px-2 py-3 cursor-pointer`}>
                <Icon as={ChatBubbleBottomCenterIcon} aria-label={label} boxSize={6} />
            </Flex>
        </Tooltip>
    )
}

export default MenuIcon