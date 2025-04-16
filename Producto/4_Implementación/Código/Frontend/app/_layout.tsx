import { Stack, useRouter } from 'expo-router';
import './globals.css';
import { useEffect } from 'react';
import { Linking } from 'react-native';

export default function RootLayout() {
    const router = useRouter();

    // Manejo de deep links
    useEffect(() => {
      const handleDeepLink = (event: { url: string }) => {
        const url = new URL(event.url);

        // Manejar rutas de Mercado Pago
        if (url.hostname .includes('/payment/success')) {
          router.push('/(tabs)/tickets/payment/paymentResult?status=success');
        } else if (url.hostname .includes('/payment/failure')) {
          router.push('/(tabs)/tickets/payment/paymentResult?status=failure');
        }
      };

      Linking.addEventListener('url', handleDeepLink);

      return () => {
        Linking.removeAllListeners('url');
      };
    }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}

    >
      <Stack.Screen name="(tabs)"  options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}