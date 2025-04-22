import { Stack, useSegments } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Componente de botón único con lógica condicional
const CustomBackButton = () => {
  const segments = useSegments();

  // Determinar si estamos en las pantallas críticas
  const isSpecialScreen = segments.some(s => 
    s === 'paymentResult' || s === 'ticketsHistory'
  );

  const handlePress = () => {
    if (isSpecialScreen) {
      router.replace('/(tabs)/tickets')
      ; // Menú principal
    } else {
      router.back(); // Comportamiento normal
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ marginLeft: 15 }}
    >
      <Ionicons name="arrow-back" size={24} color="#31572C" />
    </TouchableOpacity>
  );
};

export default function TicketsLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleStyle: { fontFamily: 'Poppins_600SemiBold' },
        headerTintColor: '#31572C',
        headerLeft: () => <CustomBackButton /> // Mismo botón para todos
      }}
    >
      {/* Todas las pantallas heredan el mismo botón */}
      <Stack.Screen name="index" options={{ title: 'Entradas', headerShown:false }} />
      <Stack.Screen name="form" options={{ title: 'Comprar entrada' }} />
      <Stack.Screen name="paymentResult" options={{ title: 'Resultado', }} />
      <Stack.Screen name="paymentMethod" options={{ title: 'Método de pago', }} />
      <Stack.Screen name="ticketsHistory" options={{ title: 'Historial' }} />
      <Stack.Screen name="ticketDetail" options={{ title: 'Detalle del ticket' }} />

    </Stack>
  );
}