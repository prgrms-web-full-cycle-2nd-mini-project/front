import { useQuery } from '@tanstack/react-query';
import { fetchMainTrips } from '../apis/trip.api';

export function useTrip(tripPlan: boolean) {
  const { data, isLoading } = useQuery({
    queryKey: ['trip', tripPlan],
    queryFn: async () => {
      const response = await fetchMainTrips(tripPlan);
      return response;
    },
  });
  return { data, isLoading };
}
