/**
 * Authentication service for API interactions
 * Handles user login, password reset, and token management
 */

import { API_URL } from "@constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ForgotPasswordParams, LoginParams } from "types";

/**
 * Authenticate user with email and password
 * Makes API call to sign in endpoint and stores authentication token
 * @param body - Login credentials containing email and password
 * @throws Error if login fails due to invalid credentials or network issues
 */
export async function authServiceLogin(body : LoginParams) {
    try {
        const response = await axios.post(`${API_URL}/auth/sign-in`, body);

        const data = response.data;
        storeToken(data.token); // Store authentication token for future requests

    } catch (error) {
        console.error(error);
        throw new Error('Login failed');
    }
}

/**
 * Request password reset for a user account
 * Sends new password data to the backend for account recovery
 * @param body - Password reset data including email and new password
 * @returns Response data from the password reset request
 * @throws Error if the password reset request fails
 */
export async function authServiceForgotPassword(body : ForgotPasswordParams ) {
    try {
        const response = await axios.post(`${API_URL}/auth/forgot-password`, body);
        return response.data;

    } catch (error) {
        console.error(error);
        throw new Error('Forgot password request failed');
    }
}

/**
 * Store authentication token in device storage
 * Saves JWT token for persistent login across app sessions
 * @param value - JWT token string to store
 */
async function storeToken(value: string) {
    try {
        await AsyncStorage.setItem('token', value);
    } catch (e) {
        console.error('Failed to save the token to storage', e);
    }
}