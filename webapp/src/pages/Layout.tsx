import { Box, Flex, } from '@chakra-ui/react'
import { HomeDispalay, LeftBar, MenuBar } from '../components'
import { screenTypes } from '../@types'
import { useAppSelector } from '../redux/type'
import { GroupChat, NewUserStories, PersonalChat, UserProfile, UserStories } from '.'

function Layout() {
    const { currentScreen } = useAppSelector(state => state.layoutReducer)

    console.log({ currentScreen })


    return (
        <Box width={"100vw"} maxWidth={'1920px'} height={'100vh'} className='bg-primary dark:bg-primary-dark text-black dark:text-white mx-auto'>
            <Flex direction={'row'} height={'100%'}>
                {/* MenuBar */}
                <MenuBar />

                {/* SideBar */}
                <LeftBar />

                {/* Main View */}
                <Flex width={'100%'} className='bg-primary dark:bg-primary-dark text-black dark:text-white'>
                    {currentScreen ? getActivePage(currentScreen.screen) : <HomeDispalay />}
                </Flex>

            </Flex>
        </Box>
    )
}

export default Layout

export const getActivePage = (activeTab: screenTypes) => {
    if (activeTab === 'chat') return <PersonalChat />
    else if (activeTab === 'group') return <GroupChat />
    else if (activeTab === 'profile') return <UserProfile />
    else if (activeTab === 'story') return <UserStories />
    else if (activeTab === 'new-story') return <NewUserStories />
    else return
}