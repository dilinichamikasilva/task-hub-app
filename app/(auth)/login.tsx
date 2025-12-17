import { View, Text, TextInput, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Login = () => {
  const router = useRouter()

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex-1 justify-center items-center bg-gray-50 px-6">
      
        <View className="w-full max-w-md bg-white rounded-2xl p-6 shadow-md">
        
            <Text className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
            </Text>

            <TextInput
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-800"
            />

            <TextInput
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-800"
            />

            <Pressable className="bg-blue-600 py-3 rounded-xl active:bg-blue-700" 
            onPress={() => router.replace("/home")}>
            <Text className="text-white text-center font-semibold text-lg">
                Login
            </Text>
            </Pressable>

            <View className="flex-row justify-center mt-6">
                <Text className="text-gray-600 mr-1">
                    Don't have an account?
                </Text>
                {/* <TouchableOpacity onPress={() => router.replace('/register')}>
                    <Text className="text-blue-600 font-semibold">
                    Register
                    </Text>
                </TouchableOpacity> */}
                <TouchableOpacity onPress={() => router.push('/register')}>
                    <Text className="text-blue-600 font-semibold">
                    Register
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Login
