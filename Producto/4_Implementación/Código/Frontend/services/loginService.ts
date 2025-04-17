

import { API_URL } from '@env' // Cambiar por tu IP local si usás un dispositivo real

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status == 401) {
      const error = await response.json();
      return { token: null, user: null, errors: error.message };

    }

    const data = await response.json();


    return { token: data.token, user: data.user, errors: null };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}