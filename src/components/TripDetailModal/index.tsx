import React from 'react';
import useTripDetail from '../../hooks/useTripDetail';
import { Box, Modal } from '@mui/material';
import styled from 'styled-components';
import { BookStyleContainer } from '../../styles/BookStyleStyles';
import TripDetailLeft from './TripDetailLeft';
import TripDetailRight from './TripDetailRight';

interface ITripDetailModalProps {
  tripId: string;
  onClose: () => void;
  open: boolean;
}

export default function TripDetailModal({
  tripId,
  onClose,
  open,
}: ITripDetailModalProps) {
  const { tripDetailData, isLoading } = useTripDetail(tripId);

  return (
    tripDetailData && (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <BackdropStyle onClick={onClose}>
          <ContentStyle onClick={(e) => e.stopPropagation()}>
            <TripDetailLeft tripDetailData={tripDetailData} />
            <TripDetailRight
              scheduleListData={tripDetailData.schedules}
              tripId={tripDetailData.id}
            />
          </ContentStyle>
        </BackdropStyle>
      </Modal>
    )
  );
}

const BackdropStyle = styled(Box)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContentStyle = styled(BookStyleContainer)`
  cursor: default;
`;
