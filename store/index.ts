/**
 * Global application state store using Zustand
 * Manages authentication state across the entire application
 */

import { create } from 'zustand'

/**
 * Application state interface
 * Defines the structure of the global app state
 */
type AppStore = {
  isAuthenticated: boolean,                    // Current user authentication status
  setIsAuthenticated: (value: boolean) => void, // Function to update authentication status
}

/**
 * Global app store hook
 * Provides access to authentication state and setters throughout the app
 * Used to determine if user is logged in and needs to see login screen
 */
export const useAppStore = create<AppStore>()((set) => ({
  isAuthenticated: false, // Default to not authenticated
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));