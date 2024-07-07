/* {
  id: "여행 id",
	title: "여행 제목",
	date: "YYYY-MM-DD",
  location: "여행 장소 이름",
  xCoordinate: x좌표,
  yCoordinate: y좌표,
  schedules: [
    {
      id: "일정 id",
      todo: "할 일",
      location: "여행 장소 이름",
      xCoordinate: x좌표,
      yCoordinate: y좌표,
      startTime: "YYYY-MM-DD HH:mm:ss",
      endTime: "YYYY-MM-DD HH:mm:ss",
      isChecked: T/F
	  },
    …
  ]
} */

export interface ISchedule {
  id: string;
  todo: string;
  location: string;
  xCoordinate: number;
  yCoordinate: number;
  startTime: string;
  endTime: string;
  isChecked: boolean;
}

export interface ITripDetailResponse {
  id: string;
  title: string;
  date: string;
  location: string;
  xCoordinate: number;
  yCoordinate: number;
  schedules: ISchedule[];
}
