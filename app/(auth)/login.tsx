import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native"
import React, { useState } from "react"
import { useRouter } from "expo-router"
import Toast from "react-native-toast-message"
import { loginUser } from "@/services/authService"
import { useLoader } from "@/hooks/useLoader"

const Login = () => {
  const router = useRouter()
  const { showLoader, hideLoader } = useLoader()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Missing fields",
        text2: "Email and password are required",
      })
      return
    }

    try {
      showLoader()

      await loginUser(email, password)

      Toast.show({
        type: "success",
        text1: "Welcome back 👋",
        text2: "Login successful",
      })

      router.replace("/home")
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Login failed",
        text2: error.message || "Invalid credentials",
      })
    } finally {
      hideLoader()
    }
  }

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
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-800"
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-800"
          />

          <Pressable
            onPress={handleLogin}
            className="bg-blue-600 py-3 rounded-xl active:bg-blue-700"
          >
            <Text className="text-white text-center font-semibold text-lg">
              Login
            </Text>
          </Pressable>

          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-600 mr-1">
              Don&apos;t have an account?
            </Text>
            <TouchableOpacity onPress={() => router.push("/register")}>
              <Text className="text-blue-600 font-semibold">Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Login
