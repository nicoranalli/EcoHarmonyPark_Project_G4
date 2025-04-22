// hooks/useLoadFonts.ts
import { useFonts } from 'expo-font';
import {
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

export default function useLoadFonts() {
  const [fontsLoaded] = useFonts({
    Montserrat:     Montserrat_400Regular,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold,
  });

  return fontsLoaded;
}
