import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import Toast from 'react-native-toast-message'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { LoaderProvider } from '@/context/LoaderContext'

const RootLayout = () => {
    const insets = useSafeAreaInsets()
    console.log(insets)

    return (
       // <SafeAreaView className="flex-1">
        <LoaderProvider>
            <View style={{
                flex:1,
                marginTop: insets.top
            }}
        >
            <Slot />
            <Toast />
        </View>
        </LoaderProvider>
       
       
    )
}

export default RootLayout