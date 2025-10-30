import { API_URL } from "@constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getToken } from "utils";


export const userService = {
    getUserProfile: async (userId: string) => {
        try {
            // Obtener el token de AsyncStorage
            const token = await getToken();

            const response = await axios.get(`${API_URL}/students/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            
            return response.data;
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw new Error('Failed to fetch user profile');
        }
    }
};

export default userService;