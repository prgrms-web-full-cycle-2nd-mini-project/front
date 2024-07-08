import React from 'react';
import { IMainTripData, TripDetail } from '../../types/trip';
import styled from 'styled-components';

import { TripCard } from '../common/card/TripCard';

type OngoingTripsProps = {
  mainTrips: TripDetail[] | undefined;
};

export const OngoingTrips = ({ mainTrips }: OngoingTripsProps) => {
  return (
    <OngoingTripsStyle>
      <ListBox>
        <MainCard></MainCard>
        <SubCard>
          {mainTrips?.slice(1, 5).map((trips) => {
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
