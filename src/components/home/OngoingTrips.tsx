import React from 'react';
import { TripDetail } from '../../types/trip';
import styled from 'styled-components';

import { TripCard } from '../common/card/TripCard';
import { TripMainCard } from '../common/card/TripMainCard';
import Typography from '../common/Typography';

type OngoingTripsProps = {
  mainTrips: TripDetail[] | undefined;
  isLoading: boolean;
};

export const calculatePercent = ({
  totalCount,
  completedCount,
}: {
  totalCount: number;
  completedCount: number;
}): number => {
  return totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
};

export const OngoingTrips = ({ mainTrips, isLoading }: OngoingTripsProps) => {
  if (!mainTrips || mainTrips.length === 0) {
    return (
      <EmptyBox>
        <img src="/src/assets/empty.png" />
        <Typography $variant={'title1'} $color="gray50">
          계획 중인 여행이 없습니다.
        </Typography>
      </EmptyBox>
    );
  }
  if (isLoading) {
    return (
      <Typography $variant={'title1'}>일정을 가지고 오고 있습니다.</Typography>
    );
  }

  const mainTrip = mainTrips[0];
  const { id, completedCount, totalCount, title, location, date } = mainTrip;
  const subTrips = mainTrips.slice(1, 5);

  return (
    <div>
      <div>
        <TripMainCard
          title={title}
          location={location}
          date={date}
          percent={calculatePercent({ completedCount, totalCount })}
          tripId={id}
        />
      </div>
      <SubCard>
        {subTrips.map((trips) => {
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
    </div>
  );
};

const SubCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  flex-wrap: wrap;
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
