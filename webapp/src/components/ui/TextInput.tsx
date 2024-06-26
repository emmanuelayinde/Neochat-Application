import { Box, HStack, Input } from '@chakra-ui/react'
import React from 'react'



interface IProps {
    placeholder: string,
    value?: string,
    styles?: string,
    leftItem?: React.ReactNode,
    rightItem?: React.ReactNode,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onKeyUp?: () => void,
    onKeyDown?: () => void,
}


export const ChatInput = ({ styles, onChange, onKeyDown, onKeyUp, value, placeholder, leftItem = undefined, rightItem = undefined }: IProps) => {
    console.log(styles, onKeyDown, onKeyUp, value)
    return (
        <HStack gap={2} width={'100%'} alignItems={'center'}>

            {leftItem && <Box className='scale-75 transition-all duration-300'>
                {leftItem}
            </Box>}

            <Input
                placeholder={placeholder}
                className='flex-1 !p-0'
                border={'none'}
                _focus={{
                    border: 'none',
                }}
                _focusVisible={{
                    border: 'none',
                }}

                onChange={onChange}
            />

            {
                rightItem && <Box className='scale-75 transition-all duration-300'>
                    {rightItem}
                </Box>
            }
        </HStack>

    )
}
