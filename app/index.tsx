import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import "../global.css"
import { Redirect } from 'expo-router'

const index = () => {
    return (
        <Redirect href="/login" />
    )
}

export default index