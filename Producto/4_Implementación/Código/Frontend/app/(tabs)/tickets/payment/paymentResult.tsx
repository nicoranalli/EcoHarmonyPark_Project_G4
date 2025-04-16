import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function PaymentResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const success = params.status === 'success';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {success ? '¡Pago Exitoso!' : 'Pago Fallido'}
      </Text>
      <Text style={styles.message}>
        {success
          ? 'Tu pago se ha procesado correctamente.'
          : 'Hubo un problema procesando tu pago.'}
      </Text>
      <Button
        title="Volver al inicio"
        onPress={() => router.push('/(tabs)/tickets')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  message: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center'
  }
});