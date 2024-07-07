import { TripData } from '../types/trip';
import axiosInstance from './axiosInstance';

export const addTrip = async (tripData: TripData) => {
  const response = await axiosInstance.post('/trips', tripData);

  return response.data;
};
