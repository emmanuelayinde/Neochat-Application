import { Divider, VStack } from '@chakra-ui/react'
import { recentStories, viewedStories } from '../../data'
import StoryPreview from './StoryPreview'


function Stories() {
    return (
        <VStack gap={4}>
            {recentStories.map((userStories) =>
                <StoryPreview
                    avatar={userStories.avatar}
                    stories={userStories.stories}
                    time={userStories.time}
                    user={userStories.user}
                    isActive={false}
                    screen='group'
                />)}
            <Divider />
            {viewedStories.map((userStories) =>
                <StoryPreview
                    avatar={userStories.avatar}
                    stories={userStories.stories}
                    time={userStories.time}
                    user={userStories.user}
                    isActive={false}
                    screen='group'
                />)}
        </VStack>
    )
}

export default Stories