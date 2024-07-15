import React from 'react';
import styled from 'styled-components';
import { ISchedule } from '../../../../apis/tripDetail';
import TripDetailScheduleItem from './TripDetailScheduleItem';

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
