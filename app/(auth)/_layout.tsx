import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right"
            }}
        >
            <Stack.Screen name="login" options={            //name eka router name eka wenna one (file name eka)
                {title:"Login"}
            } />
             <Stack.Screen name="regiter" options={
                {title:"Register"}
            } />

        </Stack>
    )
}

export default AuthLayout