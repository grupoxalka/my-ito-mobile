import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';
import { useAppStore } from 'store';

interface JWTPayload {
  userId: string;
  exp?: number;
}

export const useAuth = () => {
  const { setIsAuthenticated, setUserId } = useAppStore();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token) {
          const decoded = jwtDecode<JWTPayload>(token);
          
          // Verificar si el token ha expirado
          if (decoded.exp && decoded.exp * 1000 < Date.now()) {
            await AsyncStorage.removeItem("token");
            setIsAuthenticated(false);
            setUserId(null);
            return;
          }
          
          setUserId(decoded.userId);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setUserId(null);
        }
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsAuthenticated(false);
        setUserId(null);
      }
    };
    
    checkAuth();
  }, [setIsAuthenticated, setUserId]);
};