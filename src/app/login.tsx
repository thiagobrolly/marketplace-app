import { router } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-purple-base">Login Page</Text>

      <TouchableOpacity
        onPress={() => {
          router.push('/register');
        }}
      >
        <Text className="text-xl text-blue-500 mt-4">Go to Register</Text>
      </TouchableOpacity>
    </View>
  );
}
