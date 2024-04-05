
import React, { useState } from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from '../../components/styled'
import { BGImage, Logo } from '../../../assets'
import InputField from '../../components/Form/InputField'
import { useNavigation } from '@react-navigation/native'
import { RootStackNavigationProps } from '../../@types'


const ResetPasswordScreen = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const navigation = useNavigation<RootStackNavigationProps<"ChatsTab">>();

    return (
        <View className='flex-1 items-center justify-start'>
            <Image source={BGImage} resizeMode='cover' className='h-96 w-full ' />
            <View className='w-full h-full -mt-44 p-6 bg-white rounded-tl-[75px] space-y-6 items-center justify-start'>
                <Image source={Logo} className='w-16 h-16' resizeMode='contain' />
                <Text className='text-primaryText text-xl font-bold'>
                    Set new password
                </Text>

                <View >
                    <InputField iconName='lock' placeholder='Enter Password' setValue={setPassword} value={password} isPassword={true} />
                    <InputField iconName='lock' placeholder='Confirm Password' setValue={setConfirmPassword} value={confirmPassword} isPassword={true} />
                    <TouchableOpacity>
                        <View className='w-full flex-row items-center justify-center rounded-lg py-2 my-3 bg-primary '>
                            <Text className='font-semibold text-xl text-white'>
                                Update Password
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View className='flex-row items-center justify-center space-x-2'>
                    <Text className='text-sm font-semibold text-primaryText'>
                        Remember your password?
                    </Text>
                    <Pressable onPress={() => navigation.navigate('Login')}>
                        <Text className='text-primary text-sm font-semibold '>
                            Sign In
                        </Text>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default ResetPasswordScreen