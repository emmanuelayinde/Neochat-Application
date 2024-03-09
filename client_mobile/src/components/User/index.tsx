import React, { FC } from 'react'
import { profilePropType } from './type'
import { HeliumProfile, HydrogenProfile, LithiumProfile } from './Profile';


const UserProfile: FC<profilePropType> = ({ profileLayout, userData }) => {
    switch (profileLayout) {
        case 'hydrogen':
            return <HydrogenProfile data={userData} />
        case 'helium':
            return <HeliumProfile data={userData} />
        case 'lithium':
            return <LithiumProfile data={userData} />
        default:
            return
    }

}

export default UserProfile