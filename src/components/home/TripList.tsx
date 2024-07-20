import { useState } from 'react';

import { TabList } from './Tab';
import styled from 'styled-components';

import { CompletedTrips } from './CompletedTrips';
import { OngoingTrips } from './OngoingTrips';
import { useTripStore } from '../../stores/tripTapStore';

export const TripList = () => {
  const { activeTab } = useTripStore();

  return (
    <TripListStyle>
      <TabList />
      {activeTab === 'ongoing' ? <OngoingTrips /> : <CompletedTrips />}
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
