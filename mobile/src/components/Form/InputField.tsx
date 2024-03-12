
import React, { Dispatch, SetStateAction, useState } from 'react'
import { View, TextInput, TouchableOpacity } from '../styled'
import { MaterialIcons, Entypo } from '@expo/vector-icons';


interface InputTextProps {
    iconName: keyof typeof MaterialIcons.glyphMap,
    placeholder: string,
    isPassword?: boolean,
    value: string | undefined,
    setValue: Dispatch<SetStateAction<string>>
}


const InputField = (prop: InputTextProps) => {
    const [showPassword, setShowPassword] = useState(false)


    const handleValue = (text: string) => {
        prop.setValue(text)
    }

    return (
        <View className='w-full flex-row items-center justify-between rounded-md space-x-2 px-2 my-2 border border-gray-200'>
            <MaterialIcons size={24} name={prop.iconName} color={'#555'} />

            <TextInput
                value={prop.value}
                onChangeText={handleValue}
                placeholder={prop.placeholder}
                className='flex-1 py-2  text-primaryText '
                secureTextEntry={prop.isPassword && !showPassword}
                autoCapitalize='none'
            />
            {prop.isPassword &&
                <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}>
                    <Entypo name={showPassword ? 'eye-with-line' : 'eye'} size={24} color="#555" />
                </TouchableOpacity>}
        </View>
    )
}


export default InputField