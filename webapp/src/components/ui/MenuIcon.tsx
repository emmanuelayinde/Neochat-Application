import { As, Flex, Icon, Tooltip } from '@chakra-ui/react'

interface IProps {
    isActive: boolean,
    icon: As,
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
                className={`relative w-full rounded-md px-2 py-3 cursor-pointer  ${isActive ? 'bg-brand-secondary/75 hover:bg-brand-secondary/90' : 'hover:bg-secondary dark:hover:bg-secondary-dark '}`}
            >
                {isActive && <div className='absolute left-0 w-1 h-6 rounded-full bg-brand-primary' />}
                <Icon as={icon} aria-label={label} boxSize={6} />
            </Flex>
        </Tooltip>
    )
}

// {isActive && 'bg-brand-primary/40 border-b-4 border-brand-primary md:border-l-4 md:border-b-0'}  

export default MenuIcon


