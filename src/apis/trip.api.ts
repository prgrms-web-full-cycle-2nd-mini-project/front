import { ITripResponse, TripData } from '../types/trip';
import axiosInstance from './axiosInstance';

export const createTrip = async (
  tripData: TripData,
): Promise<ITripResponse> => {
  const response = await axiosInstance.post('/trips', tripData);

  return response.data;
};

type TripProps = {
  plan: string;
  current: number;
};

const fetchTripsByPage = async ({
  plan,
  current,
}: TripProps): Promise<ITripResponse> => {
  const response = await axiosInstance.get(
    `/trips?plan=${plan}&page=${current}`,
  );

  return response.data;
};

export const fetchMainTrips = async (tripPlan: boolean) => {
  if (tripPlan) {
    return await fetchTripsByPage({ plan: 'true', current: 1 });
  }
  // 완료된 여행 로직 추가
  return await fetchTripsByPage({ plan: 'false', current: 1 });
};

export const fetchDeleteTrip = async (tripId: string) => {
  const response = await axiosInstance.delete(`/trips/${tripId}`);

  return response.data;
};
