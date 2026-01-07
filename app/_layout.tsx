import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import Toast from 'react-native-toast-message'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { LoaderProvider } from '@/context/LoaderContext'
import { AuthProvider } from '@/context/Authcontext'

const RootLayout = () => {
    const insets = useSafeAreaInsets()
    console.log(insets)

    return (
       // <SafeAreaView className="flex-1">
        <LoaderProvider>
            <AuthProvider>
                <View style={{
                    flex:1,
                    marginTop: insets.top
                }}>
                    <Slot />
                    <Toast />
                </View>
            </AuthProvider>
        </LoaderProvider>
       
       
    )
}

export default RootLayout