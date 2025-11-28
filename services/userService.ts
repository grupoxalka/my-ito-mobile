import { API_URL } from "@constants";
import axios from "axios";
import { Schedule } from "types";
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
        } catch (error: any) {
            console.error('Error fetching user profile:', error.message);
            // Si el servidor está caído, devolver null en lugar de lanzar error
            if (error.response?.status === 502 || error.code === 'ERR_NETWORK') {
                console.warn('Servidor no disponible, usando modo offline');
                return null;
            }
            throw new Error('Failed to fetch user profile');
        }
    },

    getStudentSchedule: async (studentId: string): Promise<Schedule[]> => {
        try {
            // Obtener el token de AsyncStorage
            const token = await getToken();

            const response = await axios.get(`${API_URL}/students/${studentId}/schedule`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            return response.data;
        } catch (error: any) {
            console.error('Error fetching student schedule:', error.message);
            // Si el servidor está caído, devolver array vacío en lugar de lanzar error
            if (error.response?.status === 502 || error.code === 'ERR_NETWORK') {
                console.warn('Servidor no disponible, usando modo offline');
                return [];
            }
            throw new Error('Failed to fetch student schedule');
        }
    }
};

export default userService;