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
import { registerUser } from "@/services/authService"
import { useLoader } from "@/hooks/useLoader"

const Register = () => {
  const router = useRouter()
  const { showLoader, hideLoader  , isLoading} = useLoader()

  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = async () => {
    if (!fullname || !email || !password || !confirmPassword || isLoading) {
      Toast.show({
        type: "error",
        text1: "Missing fields",
        text2: "All fields are required",
      })
      return
    }

    if (password !== confirmPassword) {
      Toast.show({
        type: "error",
        text1: "Password mismatch",
        text2: "Passwords do not match",
      })
      return
    }

    try {
      showLoader()

      await registerUser(fullname, email, password)

      Toast.show({
        type: "success",
        text1: "Account created 🎉",
        text2: "You can now log in",
      })

      router.replace("/login")
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Registration failed",
        text2: error.message || "Something went wrong",
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
            Register
          </Text>

          <TextInput
            placeholder="Name"
            placeholderTextColor="#9CA3AF"
            value={fullname}
            onChangeText={setFullname}
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-800"
          />

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
            className="border border-gray-300 rounded-xl px-4 py-3 mb-4 text-gray-800"
          />

          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#9CA3AF"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            className="border border-gray-300 rounded-xl px-4 py-3 mb-6 text-gray-800"
          />

          <Pressable
            onPress={handleRegister}
            className="bg-blue-600 py-3 rounded-xl active:bg-blue-700"
          >
            <Text className="text-white text-center font-semibold text-lg">
              Register
            </Text>
          </Pressable>

          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-600 mr-1">
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text className="text-blue-600 font-semibold">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Register
