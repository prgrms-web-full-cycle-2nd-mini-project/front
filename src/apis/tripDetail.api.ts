import axiosInstance from './axiosInstance';
import { ITripDetailResponse } from './tripDetail';

export const fetchGetTripDetail = async (tripId: string) => {
  const response = await axiosInstance.get<ITripDetailResponse>(
    `/trips/${tripId}`,
  );

  return response.data;
};

export const fetchDeleteTrip = async (tripId: string) => {
  const response = await axiosInstance.delete(`/trips/${tripId}`);

  return response.data;
};

export const fetchUpdateTrip = async (
  tripId: string,
  title: string,
  date: string,
  location: string,
  xCoordinate: number,
  yCoordinate: number,
) => {
  const response = await axiosInstance.put<ITripDetailResponse>(
    `/trips/${tripId}`,
    {
      title,
      date,
      location,
      xCoordinate,
      yCoordinate,
    },
  );

  return response.data;
};
