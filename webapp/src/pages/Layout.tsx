import { Box, Flex, } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { LeftBar, MenuBar } from '../components'

function Layout() {


    return (
        <Box width={"100vw"} maxWidth={'1920px'} height={'100vh'} className='bg-primary dark:bg-primary-dark text-black dark:text-white mx-auto'>
            <Flex direction={'row'} height={'100%'}>

                {/* MenuBar */}
                <MenuBar />

                {/* SideBar */}
                <LeftBar />

                {/* Main View */}
                <Flex width={'100%'} className='bg-primary dark:bg-primary-dark text-black dark:text-white px-2 py-4'>
                    <Outlet />
                </Flex>

            </Flex>
        </Box>
    )
}

export default Layout