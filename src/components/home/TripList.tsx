import React, { useEffect, useState } from 'react';
import { fetchMainTrips } from '../../apis/fetchMainTrips.api';
import { IMainTripData, TripDetail } from '../../types/trip';
import Typography from '../common/Typography';
import { COLORS } from '../../styles/colors';
import { Tab, TabList } from './Tab';
import styled from 'styled-components';

export const TripList = () => {
  const [mainTrips, setMainTrips] = useState<IMainTripData[] | undefined>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMainTrips(true);
      setMainTrips(result);
    };

    fetchData();
  }, []);

  return (
    <TripListStyle>
      <TabList />
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
