import { ITripResponse, TripData } from '../types/trip';
import axiosInstance from './axiosInstance';

type TripProps = { plan: boolean; current: number };

export const createTrip = async (
  tripData: TripData,
): Promise<ITripResponse> => {
  const response = await axiosInstance.post('/trips', tripData);

  return response.data;
};

const fetchTripsByPage = async ({
  plan,
  current,
}: TripProps): Promise<ITripResponse> => {
  const response = await axiosInstance.get(`/trips`, {
    params: {
      plan,
      page: current,
    },
  });

  return response.data;
};

export const fetchMainTrips = async (tripPlan: boolean, current: number) => {
  const planValue = tripPlan ? true : false;

  return await fetchTripsByPage({ plan: planValue, current });
};

export const fetchDeleteTrip = async (tripId: string) => {
  const response = await axiosInstance.delete(`/trips/${tripId}`);

  return response.data;
};
