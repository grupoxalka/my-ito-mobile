import { TOKEN_KEY } from "@constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
import { JWTPayload } from "types";

/**
 * Formats a timestamp to a readable date in Spanish
 * 
 * @param timestamp - Timestamp in milliseconds since Unix epoch
 * @returns Formatted string as "Publicado el [date]"
 * 
 * @example
 * formatDate(1695565200000) // "Publicado el 24 de septiembre de 2023"
 */
export function formatDate(timestamp: number) {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const formattedDate = date.toLocaleDateString('es-ES', options);
    return `Publicado el ${formattedDate}`;
}

/**
 * Formats a Unix timestamp into a readable date string
 * @param {number} ts - Unix timestamp in milliseconds
 * @returns  Formatted date string (DD/MM/YYYY)
 */
export function formatTimestamp(ts: number) {
    const date = new Date(ts);
    // Format as DD/MM/YYYY (month is 0-indexed, so we add 1)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

/**
 * Retrieves the authentication token from AsyncStorage
 * @returns The stored token or null if not found
 */
export const getToken = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error getting token:', error);
    return null;
  }
};

/**
 * Saves the authentication token to AsyncStorage
 * @param token - The JWT token to store
 */
export const setToken = async (token: string) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Error setting token:', error);
  }
};

/**
 * Removes the authentication token from AsyncStorage
 */
export const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Error removing token:', error);
  }
};

/**
 * Validates if a JWT token is expired
 * @param token - The JWT token to validate
 * @returns true if token is valid, false if expired or invalid
 */
export const isTokenValid = (token: string): boolean => {
  try {
    const decoded = jwtDecode<JWTPayload>(token);
    
    if (decoded.exp && decoded.exp * 1000 < Date.now()) {
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error validating token:', error);
    return false;
  }
};

/**
 * Decodes a JWT token and extracts the payload
 * @param token - The JWT token to decode
 * @returns The decoded payload or null if decoding fails
 */
export const decodeToken = (token: string) => {
  try {
    return jwtDecode<JWTPayload>(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return null;
  }
};