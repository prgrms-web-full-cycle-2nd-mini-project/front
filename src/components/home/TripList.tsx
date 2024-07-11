import React, { useState } from 'react';

import { Tab, TabList } from './Tab';
import styled from 'styled-components';

import { CompletedTrips } from './CompletedTrips';
import { OngoingTrips } from './OngoingTrips';
import { useTrip } from '../../hooks/useTrip';

export const TripList = () => {
  const [activeTab, setActiveTab] = useState<Tab>('ongoing');

  const { data: ongoingTripsData, isLoading: isOngoingLoading } = useTrip(
    true,
    1,
  );

  return (
    <TripListStyle>
      <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
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
