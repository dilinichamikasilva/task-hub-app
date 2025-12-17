import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Home = () => {
  const router = useRouter()

  return (
    <View className="flex-1 items-center justify-center bg-gray-50 px-6">
      
      
      <Text className="text-3xl font-bold text-gray-800">
        Home
      </Text>

      
      <Text className="text-gray-500 mt-3 text-base text-center">
        Welcome to your app 👋
      </Text>

    
      <Pressable
        onPress={() => router.replace('/login')}
        className="mt-8 w-full max-w-xs bg-blue-600 py-3 rounded-xl active:bg-blue-700"
      >
        <Text className="text-white text-center font-semibold text-lg">
          Back to Login
        </Text>
      </Pressable>

    </View>
  )
}

export default Home
