import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTrip } from '../apis/trip.api';

export const useCreateTrip = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTrip,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['trips'] });
    },
  });
};
