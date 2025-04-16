import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Background from '@/components/BackgroundScreen';

export default function TicketFormScreen() {


  const [method, setMethod] = useState('Efectivo');



  return (
    <Background>
      <ScrollView showsVerticalScrollIndicator >
        <View>

        
          { }
          <TouchableOpacity
            onPress={() => router.push('/(tabs)/tickets/payment/checkout')}
            className="bg-lime-600 p-5 rounded-2xl items-center shadow-md">

            <MaterialCommunityIcons name="ticket-confirmation" size={32} color="white" />

            <Text className='text-white font-bold text-2xl mt-2'>Pagar</Text>
            <Text className='text-gray-50 font-light text-md mt-1'>Adquirí aca tu pase para el parque!</Text>

          </TouchableOpacity>


        </View>
      </ScrollView>
    </Background>
  );
}

