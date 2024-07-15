// src/stores/useTripStore.ts
import create from 'zustand';

type Tab = 'ongoing' | 'completed';

interface TripState {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useTripStore = create<TripState>((set) => ({
  activeTab: 'ongoing',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
