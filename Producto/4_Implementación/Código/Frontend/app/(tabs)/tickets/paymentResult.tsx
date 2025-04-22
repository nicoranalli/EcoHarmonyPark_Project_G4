import { router, useLocalSearchParams } from 'expo-router';
import Background from '@/components/BackgroundScreen';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { View, Text, TouchableOpacity, Image} from 'react-native';
import { useTicket } from '@/context/ticketContext';
import { useEffect } from 'react';
import { saveTickets } from '@/services/tickets/ticketsService';
import Toast from 'react-native-toast-message';

export default function PaymentResultScreen() {
  const params = useLocalSearchParams();
  const method = params.method as string;

  const { tickets, date, total, reset } = useTicket();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Correo enviado',
      text2: 'Se ha enviado un correo con los detalles de la compra',
    });
  }

  console.log(method)
  useEffect(() => {

   saveTickets(tickets, date, total, method);
   setTimeout(() => {
    showToast();
   }, 2000);

  }
  , [tickets, date, total]);


  
  return (
    <Background>
      <View className='flex-1 grow shrink basis-0 justify-center items-center'>

        {method == 'card'  ? (
          <>
            <AntDesign name="checkcircle" size={120} color="#31572C" />
            <Text className='text-4xl font-bold text-center mt-4 mb-2'>¡Compra confirmada!</Text>
            <Text className='text-gray-600 text-center mt-2'>Recibirás un correo con los {'\n'}detalles de la compra
              y el QR para ingresar al parque.</Text>
          <TouchableOpacity
            onPress={() => { router.replace('../tickets/ticketsHistory') }}
>
            <Text className='text-lime-600 font-bold text-lg mt-4'>Ver tus entradas</Text>
          </TouchableOpacity>
          </>

        ) : method == 'cash' ? (
          <>
            <AntDesign name="checkcircle" size={120} color="#31572C" />
            <Text className='text-4xl font-bold text-center mt-4 mb-2'>Reserva confirmada!</Text>
            <Text className='text-gray-600 text-center mt-2'>Recibirás un correo con los {'\n'}detalles de la reserva
              y el paso a paso del pago en boleteria.</Text>
          <TouchableOpacity
            onPress={() => { router.replace('../tickets/ticketsHistory') }}
            >
            <Text className='text-lime-600 font-bold text-lg mt-4'>Ver tus entradas</Text>
          </TouchableOpacity>
          </>

        ) : (
          <>
            <MaterialIcons name="cancel" size={120} color="#C72C3B" />
            <Text className='text-4xl font-bold text-center mt-2 '>¡Compra fallida!</Text>
            <Text className='text-gray-600 text-center mt-2'>Por favor, intenta nuevamente.</Text>
          </>
        )}

      </View>
    </Background>
  );
}

