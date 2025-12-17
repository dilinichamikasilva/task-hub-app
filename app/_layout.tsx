import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

const RootLayout = () => {
    const insets = useSafeAreaInsets()
    console.log(insets)

    return (
       // <SafeAreaView className="flex-1">
        <View style={{
                flex:1,
                marginTop: insets.top
            }}
        >
            <Slot />
        </View>
       
       
    )
}

export default RootLayout