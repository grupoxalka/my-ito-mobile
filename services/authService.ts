import { API_URL } from "@constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

interface LoginParams {
    email: string;
    password: string;
}
export async function authServiceLogin({ email, password }: LoginParams) {
    try {
        const response = await axios.post(`${API_URL}/auth/sign-in`, {
            email,
            password
        });

        if (response.status !== 200) {
            throw new Error('Login failed');
        }
        const data = response.data;
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