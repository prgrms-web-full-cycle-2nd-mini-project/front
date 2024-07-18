import React from 'react';
import { LeftPageContainerStyle } from '../../../styles/BookStyleStyles';
import TripDetailTitle from './TripDetailTitle';
import AddScehduleForm from './AddScehduleForm';
import TripDetailMap from './TripDetailMap';
import { ITripDetailResponse } from '../../../apis/tripDetail';
import styled from 'styled-components';

interface ITripDetailLeftProps {
  tripDetailData: ITripDetailResponse;
}

export default function TripDetailLeft({
  tripDetailData,
}: ITripDetailLeftProps) {
  return (
    <LeftPageContainerStyle>
      <TripDetailLeftStyle>
        <TripDetailTitle tripDetailData={tripDetailData} />
        <TripDetailMap
          lat={tripDetailData.yCoordinate}
          lng={tripDetailData.xCoordinate}
        />
        <AddScehduleForm tripId={tripDetailData.id} />
      </TripDetailLeftStyle>
    </LeftPageContainerStyle>
  );
}

const TripDetailLeftStyle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
