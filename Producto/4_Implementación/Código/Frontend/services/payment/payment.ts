// app/services/payment.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from "react-native";
import { API_URL } from "@env"; // Cambiar por tu IP local si usás un dispositivo real

export interface CreatePreferenceResponse {
  id: string;
  init_point: string;
  sandbox_init_point: string;
}

export const createPreference = async (amount: number) => {
  try {

    const token = await AsyncStorage.getItem('token');   
    
    if (!token) {
      throw new Error('Token not found');

    }


    const res = await fetch(`${API_URL}payment/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: amount }),
      });

    const response = await res.json();

    const checkoutUrl = response.init_point;
    await Linking.openURL(checkoutUrl);


  } catch (error) {
    console.error('Error creating preference:', error);
    throw error;
  }
};