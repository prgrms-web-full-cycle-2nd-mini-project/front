import React from 'react';
import { IMainTripData, TripDetail } from '../../types/trip';
import styled from 'styled-components';

import { TripCard } from '../common/card/TripCard';
import { TripMainCard } from '../common/card/TripMainCard';

type OngoingTripsProps = {
  mainTrips: TripDetail[] | undefined;
};

export const OngoingTrips = ({ mainTrips }: OngoingTripsProps) => {
  if (!mainTrips || mainTrips.length === 0) {
    return null;
  }

  const mainTrip = mainTrips[0];

  const subTrips = mainTrips.slice(1, 5);

  return (
    <OngoingTripsStyle>
      <ListBox>
        <MainCard>
          <TripMainCard
            title={mainTrip.title}
            location={mainTrip.location}
            date={mainTrip.date}
          />
        </MainCard>
        <SubCard>
          {subTrips.map((trips) => {
            return (
              <TripCard
                title={trips.title}
                location={trips.location}
                date={trips.date}
              />
            );
          })}
        </SubCard>
      </ListBox>
    </OngoingTripsStyle>
  );
};

const OngoingTripsStyle = styled.div``;
const ListBox = styled.div``;
const MainCard = styled.div``;
const SubCard = styled.div`
  display: flex;
  gap: 24px;
`;
