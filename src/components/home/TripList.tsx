import React, { useState } from 'react';

import { Tab, TabList } from './Tab';
import styled from 'styled-components';

import { CompletedTrips } from './CompletedTrips';
import { OngoingTrips } from './OngoingTrips';
import { useTrip } from '../../hooks/useTrip';
import { useTripStore } from '../../stores/tripTapStore';

export const TripList = () => {
  const { activeTab } = useTripStore();

  const { data: ongoingTripsData, isLoading: isOngoingLoading } = useTrip(
    true,
    1,
  );

  return (
    <TripListStyle>
      <TabList />
      {activeTab === 'ongoing' ? (
        <OngoingTrips
          mainTrips={ongoingTripsData?.trips}
          isLoading={isOngoingLoading}
        />
      ) : (
        <CompletedTrips />
      )}
    </TripListStyle>
  );
};

const TripListStyle = styled.div`
  ul {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;
