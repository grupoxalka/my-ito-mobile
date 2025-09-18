import { API_URL } from "@constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LoginParams {
    email: string;
    password: string;
}
export async function authServiceLogin({ email, password }: LoginParams) {
    try {
        const response = await fetch(`${API_URL}/auth/sign-in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        storeToken(data.token);

    } catch (error) {
        console.error(error);
        throw new Error('Login failed');
    }
}

async function storeToken(value: string) {
  try {
    await AsyncStorage.setItem('token', value);
  } catch (e) {
    console.error('Failed to save the token to storage', e);
  }
}