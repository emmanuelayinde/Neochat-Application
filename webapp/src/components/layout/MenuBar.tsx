import { Flex, IconButton, Stack, Tooltip, VStack } from '@chakra-ui/react'
import { AppLogo, MenuIcon, UserAvatar } from '..'
import { menuTabs } from '../../data'
import { useAppDispatch, useAppSelector } from '../../redux/type'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { avatars } from '../../data/avatar'
import { setCurrentTab, setThemeMode } from '../../redux/reducer/layoutReducer'


function MenuBar() {
    const { currentTabs, themeMode } = useAppSelector(state => state.layoutReducer)
    const dispatch = useAppDispatch()



    const toggleThemeMode = () => {
        if (themeMode === 'dark') dispatch(setThemeMode('light'))
        else dispatch(setThemeMode('dark'))
    }


    return (
        <Flex direction={'column'} alignItems={'center'} justifyContent={'space-between'} width={'80px'} maxWidth={'80px'} height={'100%'} className='dark:bg-primary-dark py-4'>
            {/* Logo */}
            <VStack gap={12} width={'100%'} className=''>
                <Stack>
                    <AppLogo />
                </Stack>

                {/* Menu */}
                <Stack width={'100%'} gap={4}>
                    {menuTabs.map(tab =>
                        <MenuIcon
                            handleNavigation={() => dispatch(setCurrentTab(tab.id))}
                            icon={tab.icon}
                            label={tab.label}
                            isActive={tab.id === currentTabs}
                        />
                    )}
                </Stack>
            </VStack>

            {/* User Avatar & Darkmode Icon */}
            <Stack >
                <Tooltip hasArrow label={'Toggle dark mode'} placement='right'>
                    <IconButton onClick={toggleThemeMode} aria-label='theme-mode' icon={themeMode === 'dark' ? <SunIcon /> : <MoonIcon />} />
                </Tooltip>
                <UserAvatar url={avatars[0].url} />
            </Stack>
        </Flex>
    )
}

export default MenuBar