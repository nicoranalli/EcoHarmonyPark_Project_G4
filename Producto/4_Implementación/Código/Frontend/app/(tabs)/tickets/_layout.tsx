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


    </Stack>
  );
}