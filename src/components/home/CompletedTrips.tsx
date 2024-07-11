import React from 'react';
import { TripDetail } from '../../types/trip';
import styled from 'styled-components';
import { TripCard } from '../common/card/TripCard';
import { calculatePercent } from './OngoingTrips';

type CompletedTripsProps = {
  mainTrips: TripDetail[] | undefined;
  isLoading: boolean;
};

export const CompletedTrips = ({
  mainTrips,
  isLoading,
}: CompletedTripsProps) => {
  if (!mainTrips) {
    return null;
  }
  if (isLoading) {
    return <p>일정을 가지고 오고 있습니다.</p>;
  }

  return (
    <SubCard>
      {mainTrips.map((trips) => {
        return (
          <TripCard
            key={trips.id}
            title={trips.title}
            location={trips.location}
            date={trips.date}
            tripId={trips.id}
            percent={calculatePercent({
              completedCount: trips.completedCount,
              totalCount: trips.totalCount,
            })}
          />
        );
      })}
    </SubCard>
  );
};

const SubCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 네 개의 열로 설정 */
  gap: 20px;
  flex-wrap: wrap;
`;
