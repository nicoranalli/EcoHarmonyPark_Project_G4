import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ticket } from "@/context/ticketContext";
const API_URL = 'http://192.168.0.237:4000/' 


export const saveTickets = async (tickets: Ticket[], date: Date, total: number, paymentMethod: string) => {

  try {
    const token = await AsyncStorage.getItem('token');

    if (!token) {
      throw new Error('Token not found');


    }

    const response = await fetch(`${API_URL}tickets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        tickets,
        date,
        total,
        method: paymentMethod,
      }),
    }
    )
    const data = await response.json();

    console.log('Response from saveTickets:', data); // Debugging line

    if (!response.ok) {
      const error = await response.json();
      return { success: '', errors: error.message };

    }

    return { success: 'Se guardó el ticket', errors: null };

  }


  catch (error) {
    return { success: '', errors: 'Error inesperado' };
  }

}

export const getTickets = async () => {

  try {

    const token = await AsyncStorage.getItem('token');

    if (!token) {
      throw new Error('Token not found');
    }

    const response = await fetch(`${API_URL}tickets`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    }
    )

    const data = await response.json();

    if (!response.ok) {
      const error = await response.json();
      return { errors: error.message, tickets: [] };

    }
    
    return { errors: null, tickets: data.tickets };

  } catch (error) {
    return { errors: 'Error inesperado', tickets: [] };
  }
}

export const getOperation = async (operationId: string) => {
}