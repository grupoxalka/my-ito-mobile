import { useEffect } from 'react';
import { useAppStore } from 'store';
import { decodeToken, getToken, isTokenValid, removeToken } from 'utils';

export const useAuth = () => {
  const { setIsAuthenticated, setUserId } = useAppStore();

  useEffect(() => {
    const checkAuth = async () => {

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