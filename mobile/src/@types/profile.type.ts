export type profileLayoutType = 'hydrogen' | 'helium' | 'lithium'

export interface profileData {
    isMine: boolean,
    data: {},
    stories?: [],
}

export interface profilePropType {
    profileLayout: profileLayoutType,
    userData: profileData
}