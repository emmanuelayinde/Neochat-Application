import { Flex } from '@chakra-ui/react'
import { useAppSelector } from '../../redux/type'
import { tabTypes } from '../../@types'

import { Stories, UserCallHistory, UserChatLists, UserGroupLists, UserProfile } from '..'


function LeftBar() {
    const { currentTabs } = useAppSelector(state => state.layoutReducer)

    return (
        <Flex direction={'column'} width={'375px'} height={'100%'} className='bg-secondary dark:bg-secondary-dark px-2 py-4'>
            {/* Menu */}
            {getActiveSideBar(currentTabs)}
        </Flex>
    )
}

export default LeftBar

export const getActiveSideBar = (activeTab: tabTypes) => {
    if (activeTab === 'user-chats') return <UserChatLists />
    else if (activeTab === 'user-groups') return <UserGroupLists />
    else if (activeTab === 'call-history') return <UserCallHistory />
    else if (activeTab === 'stories') return <Stories />
    else if (activeTab === 'user-profile') return <UserProfile />
    else return
}