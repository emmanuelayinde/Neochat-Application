import { Flex, Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, Tooltip, VStack } from '@chakra-ui/react'
import { AppLogo, MenuIcon, UserAvatar } from '..'
import { menuTabs } from '../../data'
import { useAppDispatch, useAppSelector } from '../../redux/type'
import { avatars } from '../../data/avatar'
import { setCurrentTab, setThemeMode } from '../../redux/reducer/layoutReducer'
import { MoonIcon, SunIcon } from '../../assets'


function MenuBar() {
    const { currentTabs, themeMode } = useAppSelector(state => state.layoutReducer)
    const dispatch = useAppDispatch()

    const toggleThemeMode = () => {
        if (themeMode === 'dark') dispatch(setThemeMode('light'))
        else dispatch(setThemeMode('dark'))
    }

    return (
        <Flex direction={'column'} alignItems={'center'} justifyContent={'space-between'} width={'80px'} maxWidth={'80px'} height={'100%'} className='dark:bg-primary-dark px-2 py-4'>
            {/* Logo */}
            <VStack gap={12} width={'100%'} className=''>
                <Stack>
                    <AppLogo />
                </Stack>

                {/* Menu */}
                <Stack width={'100%'} gap={4}>
                    {menuTabs.map(tab =>
                        <MenuIcon
                            key={tab.id}
                            handleNavigation={() => dispatch(setCurrentTab(tab.id))}
                            icon={tab.icon}
                            label={tab.label}
                            isActive={tab.id === currentTabs}
                        />
                    )}
                </Stack>
            </VStack>

            {/* User Avatar & Darkmode Icon */}
            <Stack gap={4}>
                <Tooltip hasArrow label={themeMode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} placement='right'>
                    <Flex width={'100%'} onClick={toggleThemeMode} justifyContent={'center'} >
                        <Icon as={themeMode === 'dark' ? SunIcon : MoonIcon} />
                    </Flex>
                </Tooltip>

                <Menu>
                    <MenuButton
                        transition='all 0.2s'
                    // _hover={{ bg: 'gray.400' }}
                    // _expanded={{ bg: 'blue.400' }}
                    // _focus={{ boxShadow: 'outline' }}
                    >

                        <UserAvatar url={avatars[0].url} />
                    </MenuButton>
                    <MenuList className='bg-red-500 text-gray-500'>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Setting</MenuItem>
                        <MenuDivider />
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
                </Menu>


            </Stack>
        </Flex>
    )
}

export default MenuBar