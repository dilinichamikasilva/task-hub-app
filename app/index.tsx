import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import React from 'react'
import "../global.css"
import { Redirect } from 'expo-router'
import { useAuth } from '@/hooks/useAuth'

const index = () => {
    const {user , loading} = useAuth()

    if(loading){
        return <View className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="#1e40af" />
        </View>
    }

    if(user){
        return (<Redirect href="/home" />)
    }else{
        return (<Redirect href="/login" />)
    }

    
}

export default index