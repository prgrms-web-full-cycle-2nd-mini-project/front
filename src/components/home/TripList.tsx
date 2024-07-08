import React, { useEffect, useState } from 'react';
import { fetchMainTrips } from '../../apis/fetchMainTrips.api';
import { IMainTripData, TripDetail } from '../../types/trip';

import { Tab, TabList } from './Tab';
import styled from 'styled-components';

import { CompletedTrips } from './CompletedTrips';
import { OngoingTrips } from './OngoingTrips';

export const TripList = () => {
  const [mainTrips, setMainTrips] = useState<TripDetail[] | undefined>([]);
  const [activeTab, setActiveTab] = useState<Tab>('ongoing');
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMainTrips(true);
      console.log(result);
      if (result && result.trips) {
        setMainTrips(result.trips);
      }
    };

    fetchData();
  }, []);

  return (
    <TripListStyle>
      <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'ongoing' ? (
        <OngoingTrips mainTrips={mainTrips} />
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
