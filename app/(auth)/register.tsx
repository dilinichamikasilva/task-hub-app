import { View, Text, TextInput, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard , Alert } from 'react-native'
import React , { useState} from 'react'
import { useRouter } from 'expo-router'
import { registerUser } from '@/services/authService'

const Register = () => {
  const router = useRouter()

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {

    if (!fullname || !email || !password || !confirmPassword) {
      Alert.alert("Error", "All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await registerUser(fullname, email, password);

      Alert.alert("Success", "Account created successfully");
      router.replace("/login"); 
    } catch (error: any) {
      Alert.alert("Registration failed", error.message);
    } finally {
      setLoading(false);
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false} >
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
                disabled={loading}
                className="bg-blue-600 py-3 rounded-xl active:bg-blue-700"
                >
                <Text className="text-white text-center font-semibold text-lg">
                    {loading ? "Registering..." : "Register"}
                </Text>
            </Pressable>

            <View className="flex-row justify-center mt-6">
                <Text className="text-gray-600 mr-1">
                    Already have an account?
                </Text>
                {/* <TouchableOpacity onPress={() => router.replace('/register')}>
                    <Text className="text-blue-600 font-semibold">
                        Login
                    </Text>
                </TouchableOpacity> */}
                <TouchableOpacity 
                onPress={() => {
                        //router.push('/login')
                        router.back()
                    }
                    
                    }>
                    <Text className="text-blue-600 font-semibold">
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

            

        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

export default Register
