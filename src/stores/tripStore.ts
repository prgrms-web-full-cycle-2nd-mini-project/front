import { create } from 'zustand';
import { TripDetail } from '../types/trip';
interface StoreState {
  trips: TripDetail[];
  addTrip: (trip: TripDetail[]) => void;
}

export const useTripStore = create<StoreState>((set) => ({
  trips: [],
  addTrip: (newTrips) =>
    set((state) => ({
      trips: [...state.trips, ...newTrips],
    })),
}));
