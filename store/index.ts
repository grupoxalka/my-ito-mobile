import { create } from 'zustand'

type AppStore = {
  isAuthenticated: boolean,
  setIsAuthenticated: (value: boolean) => void,
}

export const useAppStore = create<AppStore>()((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
}));