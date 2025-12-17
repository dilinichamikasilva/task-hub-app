import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="login" options={
                {title:"Login"}
            } />
             <Stack.Screen name="regiter" options={
                {title:"Register"}
            } />

        </Stack>
    )
}

export default AuthLayout