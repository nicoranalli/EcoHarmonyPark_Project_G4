import { Stack } from 'expo-router';
import './globals.css';
import { Text as RNText } from 'react-native';
import { TicketProvider } from '../context/ticketContext';
import Toast from 'react-native-toast-message';
import useLoadFonts from '@/hooks/useLoadFonts';
import { useEffect } from 'react';
import React from 'react';


function setDefaultTextFont(fontFamily: string) {
  const TextProto = RNText as any;

  const oldRender = TextProto.render;
  TextProto.render = function (...args: any) {
    const origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [{ fontFamily }, origin.props.style],
    });
  };
}

export default function RootLayout() {

  const fontsLoaded = useLoadFonts();

  useEffect(() => {
    if (fontsLoaded) {
      setDefaultTextFont('Montserrat');
    }
  }, [fontsLoaded]);

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
