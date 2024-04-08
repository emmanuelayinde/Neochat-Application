import { IChatPreview, IGroupChatPreview } from "./chat.type"

export interface IChatPageProps extends IChatPreview { screen: screenTypes }
export interface IGroupPageProps extends IGroupChatPreview { screen: screenTypes }


export type screenProps = IChatPageProps | IGroupPageProps
export type tabTypes = 'user-chats' | 'user-groups' | 'stories' | 'user-profile' | 'call-history'
export type screenTypes = 'chat' | 'group' | 'story' | 'profile' | 'new-story'
export type themeModeTypes = 'dark' | 'light' | 'system'


// export type screenTypes = 'chat' | 'group' | 'story' | 'profile' | 'new-story'