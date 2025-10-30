import { create } from 'zustand';

type AppStore = {
  isAuthenticated: boolean,
  setIsAuthenticated: (value: boolean) => void,
  userId: string | null,
  setUserId: (id: string | null) => void,
}

export const useAppStore = create<AppStore>()(
  (set) => ({
    isAuthenticated: false,
    userId: null,
    setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
    setUserId: (id: string | null) => set({ userId: id }),
    logout: () => set({ isAuthenticated: false, userId: null }),
  })
);