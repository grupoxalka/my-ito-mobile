import { API_URL } from "@constants";
import axios from "axios";
import { ForgotPasswordParams, LoginParams } from "types";
import { setToken } from "utils";

export const authService = {
    async login(body: LoginParams) {
        try {
            const response = await axios.post(`${API_URL}/auth/sign-in`, body);
            const data = response.data;
            setToken(data.token);
        } catch (error: any) {
            console.error('Login error:', error.message);
            if (error.response?.status === 502) {
                throw new Error('El servidor no está disponible. Por favor, intenta más tarde.');
            }
            throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
        }
    },

    async forgotPassword(body: ForgotPasswordParams) {
        try {
            const response = await axios.post(`${API_URL}/auth/forgot-password`, body);
            return response.data;
        } catch (error: any) {
            console.error('Forgot password error:', error.message);
            if (error.response?.status === 502) {
                throw new Error('El servidor no está disponible. Por favor, intenta más tarde.');
            }
            throw new Error(error.response?.data?.message || 'Error al recuperar contraseña');
        }
    }
};