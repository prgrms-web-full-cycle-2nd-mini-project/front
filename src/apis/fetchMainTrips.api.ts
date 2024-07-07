import { TripDetail } from '../types/trip';
import axiosInstance from './axiosInstance';

type Props = {
  plan: string;
  current: number;
};

const fetchTripsByPage = async ({
  plan,
  current,
}: Props): Promise<TripDetail[]> => {
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
};
