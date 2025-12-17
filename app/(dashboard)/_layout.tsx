import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

const tabs = [
    {name : "home" , icon: "home" , title: "Home"},
    {name : "tasks" , icon: "list" , title: "Tasks"},
    {name : "news" , icon: "article" , title: "News"},
    {name : "profile" , icon: "person" , title: "Profile"}
] as const

const DashboardLayout = () => {
  return (
    <Tabs 
        screenOptions={{
            headerShown:false
        }}
        // tabBar={(props) => <></>}    //tabbar eka customize karala hadanna puluwan 
    >

    {tabs.map((tab) => (
        <Tabs.Screen
            name={tab.name}
            options={{
                tabBarIcon: ({color , size}) => (
                    <MaterialIcons name={tab.icon} color={color} size={size} />
                )
            }}
        />
    ))}
    </Tabs>
  ) 
}

export default DashboardLayout