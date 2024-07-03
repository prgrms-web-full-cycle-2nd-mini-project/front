import { create } from "zustand";

interface StoreState {
  isLoggedIn: boolean;
  storeLogin: () => void;
  storeLogout: () => void;
}

export const useAuthStore = create<StoreState>((set) => ({
  isLoggedIn: false,
  storeLogin: () => {
    set({ isLoggedIn: true });
  },
  storeLogout: () => {
    set({ isLoggedIn: false });
  },
}));
