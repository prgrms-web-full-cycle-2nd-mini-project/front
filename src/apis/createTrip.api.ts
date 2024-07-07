import { TripData, TripDetail } from '../types/trip';
import axiosInstance from './axiosInstance';

export const createTrip = async (tripData: TripData): Promise<TripDetail[]> => {
  const response = await axiosInstance.post('/trips', tripData);
  console.log(response.data);
  return response.data;
};
