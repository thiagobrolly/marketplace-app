import { Text, TouchableOpacity, View } from 'react-native';
import { useRegisterViewModel } from './useRegister.viewModel';

export function RegisterView({
  onSubmit,
  errors
}: ReturnType<typeof useRegisterViewModel>) {
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={onSubmit}
        className="mt-4 bg-blue-500 px-4 py-2 rounded"
      >
        <Text>Registrar</Text>
      </TouchableOpacity>

      {errors && <Text>{ JSON.stringify(errors) }</Text>}
    </View>
  );
}
