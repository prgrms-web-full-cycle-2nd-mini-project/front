export type TripData = {
  title: string;
  date: string;
  location: string;
  xCoordinate: number;
  yCoordinate: number;
};

export type LocationList = {
  location: string;
  xCoordinate: number;
  yCoordinate: number;
};

export type TripDetail = {
  id: string;
  title: string;
  date: string;
  location: string;
  completedCount: number;
  totalCount: number;
};

export type Pagination = {
  totalPage: number;
  currentPage: number;
};

export interface ITripResponse {
  trips: TripDetail[];
  pagination: Pagination;
}
