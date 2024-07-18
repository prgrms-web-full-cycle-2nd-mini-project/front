import React from 'react';
import styled from 'styled-components';
import { ISchedule } from '../../../../apis/tripDetail';
import TripDetailScheduleItem from './TripDetailScheduleItem';
import Typography from '../../../common/Typography';

interface ITripDetailScheduleListProps {
  scheduleListData: ISchedule[];
  tripId: string;
}

export default function TripDetailScheduleList({
  scheduleListData,
  tripId,
}: ITripDetailScheduleListProps) {
  return (
    <TripDetailScheduleListStyle>
      {scheduleListData.length === 0 && (
        <EmptyBox>
          <img src="/src/assets/empty.png" />
          <Typography $variant={'title1'} $color="gray50">
            추가된 일정이 없습니다.
          </Typography>
        </EmptyBox>
      )}
      {scheduleListData.map((schedule, idx) => (
        <TripDetailScheduleItem
          idx={idx}
          key={schedule.id}
          scheduleData={schedule}
          tripId={tripId}
        />
      ))}
    </TripDetailScheduleListStyle>
  );
}

const TripDetailScheduleListStyle = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const EmptyBox = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  img {
    width: 100px;
    opacity: 0.3;
  }
`;
