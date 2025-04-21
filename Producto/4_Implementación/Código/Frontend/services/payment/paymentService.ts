// app/services/payment.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Linking } from "react-native";
const API_URL = 'http://172.20.10.9:4000/' 

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

    console.log('Token:', token); // Debugging line

    const res = await fetch(`${API_URL}payment/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: amount }),
      });

    const response = await res.json();

    console.log('Response from createPreference:', response); // Debugging line

    const checkoutUrl = response.init_point;
    await Linking.openURL(checkoutUrl);


  } catch (error) {
    console.error('Error creating preference:', error);
    throw error;
  }
};