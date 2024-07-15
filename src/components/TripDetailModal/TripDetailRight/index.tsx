import React, { useEffect } from 'react';
import { RightPageContainerStyle } from '../../../styles/BookStyleStyles';
import Typography from '../../common/Typography';
import TripDetailScheduleList from './TripDetailScheduleList';
import styled from 'styled-components';
import { ISchedule } from '../../../apis/tripDetail';
import { useInfoStore } from '../../../stores/mapStore';

interface ITripDetailRightProps {
  scheduleListData: ISchedule[];
  tripId: string;
}

export default function TripDetailRight({
  scheduleListData,
  tripId,
}: ITripDetailRightProps) {
  const { setInfos } = useInfoStore();

  useEffect(() => {
    const infos = scheduleListData.map((schedule, idx) => {
      return {
        id: schedule.id,
        addressName: schedule.location,
        position: { lat: schedule.yCoordinate, lng: schedule.xCoordinate },
        idx: idx,
      };
    });
    setInfos(infos);
  }, [scheduleListData]);

  return (
    <RightPageContainerStyle>
      <TripDetailRightStyle>
        <TripDetailRightTitle>
          <Typography $variant="title2">여행 일정</Typography>
        </TripDetailRightTitle>
        <TripDetailScheduleList
          scheduleListData={scheduleListData}
          tripId={tripId}
        />
      </TripDetailRightStyle>
    </RightPageContainerStyle>
  );
}

const TripDetailRightStyle = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TripDetailRightTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
