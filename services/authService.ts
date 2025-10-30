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
        } catch (error) {
            console.error(error);
            throw new Error('Login failed');
        }
    },

    async forgotPassword(body: ForgotPasswordParams) {
        try {
            const response = await axios.post(`${API_URL}/auth/forgot-password`, body);
            return response.data;
        } catch (error) {
            console.error(error);
            throw new Error('Forgot password request failed');
        }
    }
};