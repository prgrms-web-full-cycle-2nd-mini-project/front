import { useQuery } from '@tanstack/react-query';
import { fetchMainTrips } from '../apis/trip.api';

export function useTrip(tripPlan: boolean, current: number) {
  const { data, isLoading } = useQuery({
    queryKey: ['trips', tripPlan, current],
    queryFn: async () => {
      const response = await fetchMainTrips(tripPlan, current);
      return response;
    },
  });
  return { data, isLoading };
}
