import { useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchDeleteTrip } from '../apis/trip.api';

export const useDeleteTrip = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: fetchDeleteTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trips'] });
    },
  });
};
