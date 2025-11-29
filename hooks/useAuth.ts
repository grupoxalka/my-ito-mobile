import { useEffect } from 'react';
import { useAppStore } from 'store';
import { decodeToken, getToken, isTokenValid, removeToken } from 'utils';

export const useAuth = () => {
  const { setIsAuthenticated, setUserId } = useAppStore();

  useEffect(() => {
    const checkAuth = async () => {
      // 🔧 MODO OFFLINE TEMPORAL - omite el chequeo de auth
      const isOfflineMode = process.env.EXPO_PUBLIC_OFFLINE_MODE === "true";

      if (isOfflineMode) {
        // Simula un usuario autenticado en modo offline
        setIsAuthenticated(true);
        setUserId("offline-user-dev");
        return;
      }

      const resetAuth = () => {
        setIsAuthenticated(false);
        setUserId(null);
      };

      try {
        const token = await getToken();

        if (!token) {
          resetAuth();
          return;
        }

        if (!isTokenValid(token)) {
          await removeToken();
          resetAuth();
          return;
        }

        // Decode token to get user ID
        const decoded = decodeToken(token);

        if (!decoded) {
          await removeToken();
          resetAuth();
          return;
        }

        // Update global state
        setUserId(decoded.userId);
        setIsAuthenticated(true);

      } catch (error) {
        console.error("Error checking auth:", error);
        resetAuth();
      }
    };

    checkAuth();
  }, [setIsAuthenticated, setUserId]);
};