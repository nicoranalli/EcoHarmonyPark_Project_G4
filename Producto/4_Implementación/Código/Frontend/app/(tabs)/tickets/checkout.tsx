import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { createPreference } from '../../../services/payment/paymentService'// Asegúrate de que la ruta sea correcta
import BackgroundScreen from '@/components/BackgroundScreen';
import MercadoPagoRedirectScreen from '@/components/MercadoPagoRedirect';

export default function CheckoutScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [continueMP, setContinue] = useState<boolean>(false);
  const params = useLocalSearchParams();
  const { amount } = params as { amount: string };
  


  const processPayment = async () => {
    try {
      await createPreference(+amount); // Cambia 100 por el monto real que necesites
    } catch (error) {
      router.push('./(tabs)/tickets/paymentResult');
    }

  }

  useEffect(() => {

    if (continueMP) {
      processPayment();
      setTimeout(() => {
        setLoading(false); // Cambia el estado de carga después de 10 segundos
      }, 10000); // Simula un tiempo de carga de 10 segundos
      // Llama a la función para procesar el pago
    }

  }, [continueMP])

  useEffect(() => {
    if (!loading) {
      router.replace('./paymentResult?method=card');
    }
  }, [loading])

  const handleCambioEstado = () => {
    console.log('handleCambioEstado called'); // Debugging line
    setContinue(true);
  }



  return <BackgroundScreen>
    <MercadoPagoRedirectScreen onContinuar={handleCambioEstado} />
  </BackgroundScreen>

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