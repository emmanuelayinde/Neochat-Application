import { IChatPreview } from "./chat.type"


export interface screenProps extends IChatPreview {
    screen: screenTypes
}
export type tabTypes = 'user-chats' | 'user-groups' | 'stories' | 'user-profile' | 'call-history'
export type screenTypes = 'chat' | 'group' | 'story' | 'profile' | 'new-story'
export type themeModeTypes = 'dark' | 'light' | 'system'


// export type screenTypes = 'chat' | 'group' | 'story' | 'profile' | 'new-story'