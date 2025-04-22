import { router } from 'expo-router';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Link } from 'expo-router';
import Background from '@/components/BackgroundScreen';

export default function TicketsScreen() {
  return (

    <Background>
      <SafeAreaView className="flex-1 ">

        <View className="p-5 pt-5 rounded-b-3xl shadow-md">
          <Text className='text-4xl font-bold text-center mt-2 '>Gestión de Entradas</Text>
          <Text className=' mt-2 text-center text-gray-600'>¿Que quieres hacer?</Text>


        </View>


        <View className="p-5 mt-5 space-y-5" >

          <TouchableOpacity
            onPress={() => router.push('/(tabs)/tickets/form')}
            className="bg-primary p-5 rounded-2xl items-center shadow-md">

            <MaterialCommunityIcons name="ticket-confirmation" size={32} color="white" />

            <Text className='text-white font-bold text-2xl mt-2'>Comprar entradas</Text>
            <Text className='text-gray-50 font-light text-md mt-1'>Adquirí aca tu pase para el parque!</Text>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push('./tickets/ticketsHistory')}
            className="bg-primary p-5 rounded-2xl items-center shadow-md mt-8">

            <MaterialCommunityIcons name="ticket-account" size={32} color="white" />

            <Text className='text-white font-bold text-2xl mt-2'>Mis entradas</Text>
            <Text className='text-gray-50 font-light text-md mt-1'>Revisa tus entradas adquiridas</Text>
          </TouchableOpacity>
        </View>


      </SafeAreaView>
    </Background>


  );
}