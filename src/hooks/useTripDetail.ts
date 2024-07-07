import { useQuery } from '@tanstack/react-query';
import { fetchGetTripDetail } from '../apis/tripDetail.api';

export default function useTripDetail(tripId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ['trip', tripId],
    queryFn: async () => {
      const response = await fetchGetTripDetail(tripId);

      return response;
    },
  });

  return { tripDetailData: data, isLoading };
}
