import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createTrip } from '../apis/createTrip.api';
import { TripData, TripDetail } from '../types/trip';

export default function useCreateTrip() {
  const queryClient = useQueryClient();

  // return useMutation((newTrip: TripData) => createTrip(newTrip), {
  //   onSuccess: (data: TripDetail[]) => {
  //     console.log(data);
  //     // 쿼리를 무효화하고 다시 가져오기
  //     queryClient.invalidateQueries(['trips']);
  //   },
  // });
}
