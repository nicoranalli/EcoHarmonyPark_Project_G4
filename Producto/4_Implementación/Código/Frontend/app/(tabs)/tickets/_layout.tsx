import { Stack, useRouter, useLocalSearchParams } from 'expo-router';

export default function TicketsLayout() {

  const router = useRouter();
  const params = useLocalSearchParams();
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{ title: 'Entradas' }}
      />
      <Stack.Screen
        name="form"
        options={{
          title: 'Comprar entrada',
          headerShown: true, // Mostrar header para esta pantalla
          headerBackTitle: 'Atrás', // Texto del botón de retroceso
        }}
      />

      <Stack.Screen
        name="paymentMethod"
        options={{
          title: 'Método de pago',
          headerShown: true, // Mostrar header para esta pantalla
          headerBackTitle: 'Atrás', // Texto del botón de retroceso
        }}
      />


      <Stack.Screen
        name="checkout"
        options={{
          title: 'Checkout',
          headerShown: true, // Mostrar header para esta pantalla
          headerBackTitle: 'Atrás', // Texto del botón de retroceso
        }}
      />

     <Stack.Screen
        name="paymentResult"
        options={{
          title: 'Resultado de compra',
          headerShown: true, // Mostrar header para esta pantalla
          headerBackTitle: 'Atrás', // Texto del botón de retroceso
        }}
      />
      <Stack.Screen
        name="ticketsHistory"
        options={{
          title: '',
          headerShown: true, // Mostrar header para esta pantalla
          headerBackTitle: 'Atrás', // Texto del botón de retroceso
        }}
      />
      <Stack.Screen
        name="ticketDetail"
        options={{
          title: 'Detalle de entrada',
          headerShown: true, // Mostrar header para esta pantalla
          headerBackTitle: 'Atrás', // Texto del botón de retroceso
        }}
      />

   


    </Stack>
  );
}