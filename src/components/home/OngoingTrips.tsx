import React from 'react';
import { IMainTripData, TripDetail } from '../../types/trip';
import styled from 'styled-components';

import { TripCard } from '../common/card/TripCard';
import { TripMainCard } from '../common/card/TripMainCard';

type OngoingTripsProps = {
  mainTrips: TripDetail[] | undefined;
  isLoading: boolean;
};

export const OngoingTrips = ({ mainTrips, isLoading }: OngoingTripsProps) => {
  if (!mainTrips || mainTrips.length === 0) {
    return null;
  }

  const mainTrip = mainTrips[0];
  const { completedCount, totalCount, title, location, date } = mainTrip;
  const subTrips = mainTrips.slice(1, 5);
  const calculatePercent = ({
    totalCount,
    completedCount,
  }: {
    totalCount: number;
    completedCount: number;
  }): number => {
    return totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  };

  return (
    <div>
      <div>
        <TripMainCard
          title={title}
          location={location}
          date={date}
          percent={calculatePercent({ completedCount, totalCount })}
        />
      </div>
      <SubCard>
        {subTrips.map((trips) => {
          return (
            <TripCard
              key={trips.title}
              title={trips.title}
              location={trips.location}
              date={trips.date}
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
  display: flex;
  gap: 20px;
`;
