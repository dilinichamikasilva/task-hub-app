import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Tasks = () => {
  const router = useRouter()
  return (
    <View className="flex-1 bg-gray-50">
      
      <View className="pt-16 pb-4 px-6">
        <Text className="text-3xl font-bold text-gray-800">
          Tasks
        </Text>
        <Text className="text-gray-500 mt-1">
          Manage your daily work
        </Text>
      </View>

      <View className="flex-1 px-6">
        <View className="bg-white rounded-2xl p-4 shadow-sm">
          <Text className="text-gray-700 font-semibold mb-2">
            Task List
          </Text>

          <Text className="text-gray-400 text-sm">
            No tasks yet. Tap + to add one.
          </Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        className="absolute bottom-6 right-6 bg-blue-600 w-16 h-16 rounded-full items-center justify-center shadow-lg"
        onPress={() => router.push("/tasks/form")}
      >
        <MaterialIcons name="add" size={32} color="#fff" />
      </TouchableOpacity>

    </View>
  )
}

export default Tasks
