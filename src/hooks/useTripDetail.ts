import {
  InvalidateQueryFilters,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  fetchCreateTripSchedule,
  fetchDeleteTrip,
  fetchDeleteTripSchedule,
  fetchGetTripDetail,
  fetchUpdateTrip,
  fetchUpdateTripCheck,
  fetchUpdateTripSchedule,
  ITripDetailRequest,
  ITripScheduleRequest,
} from '../apis/tripDetail.api';
import { queryClient } from '../apis/queryClient';
import { ISchedule } from '../apis/tripDetail';

export default function useTripDetail(tripId: string) {
  const { data, isLoading } = useQuery({
    queryKey: ['trip', tripId],
    queryFn: async () => {
      const response = await fetchGetTripDetail(tripId);

      return response;
    },
    staleTime: 0,
    refetchOnWindowFocus: true,
  });

  return { tripDetailData: data, isLoading };
}

export const useUpdateTripDetail = (tripId: string) => {
  const { mutate } = useMutation({
    mutationFn: (tripDetail: ITripDetailRequest) =>
      fetchUpdateTrip(tripId, tripDetail),
    onSuccess: () => {
      queryClient.invalidateQueries(['trip', tripId] as InvalidateQueryFilters);
    },
  });

  const updateTripDetail = (tripDetail: ITripDetailRequest) => {
    mutate(tripDetail);
  };

  return { updateTripDetail };
};

export const useCreateTripSchedule = (tripId: string) => {
  const { mutate } = useMutation({
    mutationFn: ({
      tripId,
      schedule,
    }: {
      tripId: string;
      schedule: ITripScheduleRequest;
    }) => fetchCreateTripSchedule(tripId, schedule),
    onSuccess: () => {
      queryClient.invalidateQueries(['trip', tripId] as InvalidateQueryFilters);
    },
  });

  const createTripSchedule = (schedule: ITripScheduleRequest) => {
    mutate({ tripId, schedule });
  };

  return { createTripSchedule };
};

export const useUpdateTripSchedule = (tripId: string) => {
  const { mutate } = useMutation({
    mutationFn: ({
      tripId,
      scheduleId,
      schedule,
    }: {
      tripId: string;
      scheduleId: string;
      schedule: Omit<ISchedule, 'id'>;
    }) => fetchUpdateTripSchedule(tripId, scheduleId, schedule),
    onSuccess: () => {
      queryClient.invalidateQueries(['trip', tripId] as InvalidateQueryFilters);
    },
  });

  const updateTripSchedule = (
    scheduleId: string,
    schedule: Omit<ISchedule, 'id'>,
  ) => {
    mutate({ tripId, scheduleId, schedule });
  };

  return { updateTripSchedule };
};

export const useUpdateTripCheck = (tripId: string) => {
  const { mutate } = useMutation({
    mutationFn: ({
      tripId,
      scheduleId,
      isChecked,
    }: {
      tripId: string;
      scheduleId: string;
      isChecked: boolean;
    }) => fetchUpdateTripCheck(tripId, scheduleId, isChecked),
    onSuccess: () => {
      queryClient.invalidateQueries(['trip', tripId] as InvalidateQueryFilters);
    },
  });

  const updateTripCheck = (scheduleId: string, isChecked: boolean) => {
    mutate({ tripId, scheduleId, isChecked });
  };

  return { updateTripCheck };
};

export const useDeleteTripSchedule = (tripId: string) => {
  const { mutate } = useMutation({
    mutationFn: (scheduleId: string) =>
      fetchDeleteTripSchedule(tripId, scheduleId),
    onSuccess: () => {
      queryClient.invalidateQueries(['trip', tripId] as InvalidateQueryFilters);
    },
  });

  const deleteTripSchedule = (scheduleId: string) => {
    mutate(scheduleId);
  };

  return { deleteTripSchedule };
};
