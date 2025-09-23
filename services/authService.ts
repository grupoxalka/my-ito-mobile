import { API_URL } from "@constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ForgotPasswordParams, LoginParams } from "types";


export async function authServiceLogin(body : LoginParams) {
    try {
        const response = await axios.post(`${API_URL}/auth/sign-in`, body);

        const data = response.data;
        storeToken(data.token);

    } catch (error) {
        console.error(error);
        throw new Error('Login failed');
    }
}

export async function authServiceForgotPassword(body : ForgotPasswordParams ) {
    try {
        const response = await axios.post(`${API_URL}/auth/forgot-password`, body);
        return response.data;

    } catch (error) {
        console.error(error);
        throw new Error('Forgot password request failed');
    }
}

async function storeToken(value: string) {
    try {
        await AsyncStorage.setItem('token', value);
    } catch (e) {
        console.error('Failed to save the token to storage', e);
    }
}