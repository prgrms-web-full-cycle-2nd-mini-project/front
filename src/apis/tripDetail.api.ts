import axiosInstance from './axiosInstance';
import { ISchedule, ITripDetailResponse } from './tripDetail';

export const fetchGetTripDetail = async (tripId: string) => {
  const response = await axiosInstance.get<ITripDetailResponse>(
    `/trips/${tripId}`,
  );

  return response.data;
};

export interface ITripDetailRequest {
  title: string;
  date: string;
  location: string;
  xCoordinate: number;
  yCoordinate: number;
}

export const fetchUpdateTrip = async (
  tripId: string,
  tripDetail: ITripDetailRequest,
) => {
  const response = await axiosInstance.put(`/trips/${tripId}`, {
    title: tripDetail.title,
    date: tripDetail.date,
    location: tripDetail.location,
    xCoordinate: tripDetail.xCoordinate,
    yCoordinate: tripDetail.yCoordinate,
  });

  return response.data;
};

export const fetchUpdateTripCheck = async (
  tripId: string,
  scheduleId: string,
  isChecked: boolean,
) => {
  const response = await axiosInstance.put(
    `/trips/${tripId}/schedules/${scheduleId}/check`,
    {
      isChecked,
    },
  );

  return response.data;
};

export const fetchUpdateTripSchedule = async (
  tripId: string,
  scheduleId: string,
  schedule: Omit<ISchedule, 'id'>,
) => {
  const response = await axiosInstance.put(
    `/trips/${tripId}/schedules/${scheduleId}`,
    schedule,
  );

  return response.data;
};

export const fetchDeleteTrip = async (tripId: string) => {
  const response = await axiosInstance.delete(`/trips/${tripId}`);

  return response.data;
};

export const fetchDeleteTripSchedule = async (
  tripId: string,
  scheduleId: string,
) => {
  const response = await axiosInstance.delete(
    `/trips/${tripId}/schedules/${scheduleId}`,
  );

  return response.data;
};
