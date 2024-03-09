
import React, { useState } from 'react'
import { TextInput, View } from '../styled'
import { MaterialIcons } from '@expo/vector-icons';

const PhotoEditor = () => {
  const [caption, setcCaption] = useState<string | undefined>(undefined)


  return (
    <View className=' relative w-full h-full flex-1'>

      <View className='absolute bottom-0 left-0 w-full border blur-md'>

        {/* Footer */}
        <View className='w-full flex-row items-center justify-between rounded-md space-x-2 px-2 my-2 border border-gray-200'>
          <MaterialIcons size={24} name={'countertops'} color={'#555'} />
          <TextInput
            value={caption}
            onChangeText={setcCaption}
            placeholder={'Caption here'}
            className='flex-1 py-2  text-primaryText'
          />
        </View>
        
      </View>
    </View>
  )
}



export default PhotoEditor