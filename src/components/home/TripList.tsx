import React, { useState } from 'react';

import { Tab, TabList } from './Tab';
import styled from 'styled-components';

import { CompletedTrips } from './CompletedTrips';
import { OngoingTrips } from './OngoingTrips';
import { useTrip } from '../../hooks/useTrip';

export const TripList = () => {
  const [activeTab, setActiveTab] = useState<Tab>('ongoing');
  const [currentPage, setCurrentPage] = useState(1);
  const { data: ongoingTripsData, isLoading: isOngoingLoading } = useTrip(
    true,
    1,
  );

  const { data: completedTripsData, isLoading: isCompletedLoading } = useTrip(
    false,
    currentPage,
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
        <CompletedTrips
          mainTrips={completedTripsData?.trips}
          isLoading={isCompletedLoading}
        />
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
