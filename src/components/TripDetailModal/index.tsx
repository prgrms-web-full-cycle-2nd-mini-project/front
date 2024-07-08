import React from 'react';
import useTripDetail from '../../hooks/useTripDetail';
import { Box, Modal } from '@mui/material';
import Typography from '../common/Typography';
import styled from 'styled-components';
import { BookStyleContainer } from '../../styles/BookStyleStyles';
import TripDetailLeft from './TripDetailLeft';
import TripDetailRight from './TripDetailRight';

interface ITripDetailModalProps {
  tripId: string;
}

export default function TripDetailModal({ tripId }: ITripDetailModalProps) {
  const { tripDetailData } = useTripDetail(tripId);
  console.log(tripDetailData);

  return (
    <Modal
      open={true}
      onClose={() => {}}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh', // 화면 전체 높이
        }}
      >
        <BookStyleContainer>
          <TripDetailLeft />
          <TripDetailRight />
        </BookStyleContainer>
      </Box>
    </Modal>
  );
}
