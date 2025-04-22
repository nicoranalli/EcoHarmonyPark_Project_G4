import { Stack, useRouter } from 'expo-router';
import './globals.css';
import { useEffect } from 'react';
import { Linking, View } from 'react-native';

import { TicketProvider } from '../context/ticketContext';
import Toast from 'react-native-toast-message';


export default function RootLayout() {



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
