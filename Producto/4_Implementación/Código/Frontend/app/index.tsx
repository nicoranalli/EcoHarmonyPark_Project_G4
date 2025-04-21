import { View, Text, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from '@/services/auth/loginService';
import { Alert } from 'react-native';
import { loginSchema } from '@/utils/schemas/appSchemas';
import { useRouter } from 'expo-router';

/**
 * Pantalla de inicio de sesión
 */

type Form = {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const router = useRouter();


  const [form, setForm] = useState<Form>({
    email: 'nicoranalli9@gmail.com',
    password: '123456',
  });

  const handleLogin = async () => {
    try {

      const validatedData = loginSchema.safeParse(form);
      if (!validatedData.success) {
        Alert.alert('Error', validatedData.error.errors[0].message);
        return;
      }
      const { token, user, errors } = await login(form.email, form.password);

      if (errors) {
        Alert.alert('Error', errors);
        return;
      }
      await AsyncStorage.setItem('token', token);

      router.push('/(tabs)/tickets');

    } catch (error) {
      Alert.alert('Error inesperado');
    }
  };
  return (

    <SafeAreaView style={{ backgroundColor: 'F6F1E8' }} className='flex-1 '>

      <Image
        source={require('../assets/images/logo-Photoroom.png')}
        className='w-41 h-40 justify-center items-center mt-5'
        style={{ alignSelf: 'center' }}
        resizeMode="contain"
        alt="Logo de EcoHarmonyApp"
      />

      <View className="p-6 grow shrink basis-0  ">

        <View>
          <Text className='font-bold  text-4xl text-center'>Bienvenido</Text>
          <Text className='text-center text-gray-500 text-2xl'>a EcoHarmonyApp!</Text>
        </View>


        <View>
          <View>
            <Text className='font-semibold text-2xl '>Email</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              className='border-2 h-12 border-gray-300 rounded-lg p-2 mt-2'
              placeholder='correo@gmail.com.ar'
              placeholderTextColor="#6b7280"
              value={form.email}
              onChangeText={email => setForm({ ...form, email })}

            />
          </View>

          <View>
            <Text className='font-semibold text-2xl mt-5 '>Contraseña</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="email-address"
              className='border-2 h-12 border-gray-300 rounded-lg p-2 mt-2'
              placeholder='********'
              placeholderTextColor="#6b7280"
              value={form.password}
              secureTextEntry={true}
              onChangeText={password => setForm({ ...form, password })}

            />
          </View>


          <View className='mt-4 mb-6'>
            <TouchableOpacity
              onPress={handleLogin}
              className='bg-lime-600 rounded-lg p-4 mt-4'>
              <Text className='font-bold text-center text-stone-100 '>Ingresar</Text>
            </TouchableOpacity>
          </View>


          <View className='flex-row justify-center'>
            <Text className='text-gray-500'>¿No tienes cuenta?</Text>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <Text className='font-semibold text-lime-600'> Registrate</Text>
            </TouchableOpacity>
          </View>
        </View>


      </View>
    </SafeAreaView>


  )
}

