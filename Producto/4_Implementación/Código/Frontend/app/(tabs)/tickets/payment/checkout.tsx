import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { createPreference } from '../../../../services/payment/payment'// Asegúrate de que la ruta sea correcta
import BackgroundScreen from '@/components/BackgroundScreen';
import { set } from 'zod';

export default function CheckoutScreen() {
  const router = useRouter();
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processPayment = async () => {
      try {
        await createPreference(100); // Cambia 100 por el monto real que necesites
      } catch (error) {
        router.push('/(tabs)/tickets/payment/paymentResult');
      }

    };

    processPayment();
    setTimeout(() => {
      setLoading(false); // Cambia el estado de carga después de 2 segundos
      }, 10000); // Simula un tiempo de carga de 2 segundos

  }, []);

  useEffect(() => {
    if (!loading) {
      router.push('/(tabs)/tickets/payment/paymentResult?status=success');
    }
  }, [loading])

  return <BackgroundScreen loading={true} />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  webview: {
    flex: 1
  }
});