import React, { useEffect, useState } from 'react';
import { IMainTripData, TripDetail } from '../../types/trip';

import { Tab, TabList } from './Tab';
import styled from 'styled-components';

import { CompletedTrips } from './CompletedTrips';
import { OngoingTrips } from './OngoingTrips';
import { useTrip } from '../../hooks/useTrip';

export const TripList = () => {
  const [mainTrips, setMainTrips] = useState<TripDetail[] | undefined>([]);
  const [activeTab, setActiveTab] = useState<Tab>('ongoing');

  const { data: ongoingTripsData, isLoading: isOngoingLoading } = useTrip(true);
  // const { data: completedTripsData, isLoading: isCompletedLoading } =
  //   useTrip(true);

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
