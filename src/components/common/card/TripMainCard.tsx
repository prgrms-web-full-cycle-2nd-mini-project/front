import React, { useState } from 'react';
import Typography from '../Typography';
import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';
import { IoClose } from 'react-icons/io5';
import { formatISODate } from '../../../utils/formatData';
import { TripCardProps } from './TripCard';
import { Gauge } from '../Gauge';

import { useDeleteTrip } from '../../../hooks/useDeleteTrip';
import TripDetailModal from '../../TripDetailModal';

export const TripMainCard = ({
  title,
  location,
  date,
  percent,
  tripId,
}: TripCardProps) => {
  const mutation = useDeleteTrip();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const deleteTrip = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    mutation.mutate(id);
  };
  return (
    <TripCardStyle onClick={handleClick}>
      <div className="title">
        <Typography
          $variant={'title1'}
          $color="secondary"
          $style={{ marginBottom: '20px' }}
        >
          {location}
        </Typography>
        <Typography $variant={'largetitle'} $style={{ marginBottom: '20px' }}>
          {title}
        </Typography>
        <Typography
          $variant={'title3'}
          $color="gray80"
          $style={{ marginBottom: '10px' }}
        >
          {formatISODate(date)}
        </Typography>
        <Gauge $percent={percent} />
      </div>
      <div className="sub">
        <img src="/src/assets/airplane.png" />
        <button onClick={(e) => deleteTrip(tripId, e)}>
          <IoClose style={{ fontSize: '25px' }} />
        </button>
      </div>
      <TripDetailModal
        tripId={tripId}
        onClose={() => setOpen(false)}
        open={open}
      />
    </TripCardStyle>
  );
};

const TripCardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 30px;
  background-color: ${COLORS.white};
  border-radius: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  .sub {
    display: flex;
    align-items: flex-start;
    gap: 30px;
    img {
      width: 150px;
      height: 150px;
    }
  }
`;
