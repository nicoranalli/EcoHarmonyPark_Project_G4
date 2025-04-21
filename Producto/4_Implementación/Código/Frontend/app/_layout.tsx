import { Stack, useRouter } from 'expo-router';
import './globals.css';
import { useEffect } from 'react';
import { Linking } from 'react-native';
import { TicketProvider } from '../context/ticketContext';
import Toast from 'react-native-toast-message';


export default function RootLayout() {
  const router = useRouter();

  // Manejo de deep links
  useEffect(() => {
    const handleDeepLink = (event: { url: string }) => {
      const url = new URL(event.url);

      console.log('Deep link URL:', url); // Debugging line
      // Manejar rutas de Mercado Pago
      if (url.pathname.includes('/payment/success')) {
        router.push('/(tabs)/tickets/paymentResult?status=success');
      } else if (url.pathname.includes('/payment/failure')) {
        router.push('/(tabs)/tickets/paymentResult?status=failure');
      }
    };

    Linking.addEventListener('url', handleDeepLink);

    return () => {
      Linking.removeAllListeners('url');
    };
  }, []);

  return (
    <TicketProvider>

      <Stack screenOptions={{ headerShown: false }}

      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />

      </Stack>

      <Toast />
    </TicketProvider>
  );
}