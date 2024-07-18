import React, { lazy, Suspense, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { useDeleteTrip } from '../../../hooks/useDeleteTrip';
import { COLORS } from '../../../styles/colors';
import { formatISODate } from '../../../utils/formatData';
import { Gauge } from '../Gauge';
import Typography from '../Typography';
import LoadingSpinner from '../LoadingSpinner';

const TripDetailModal = lazy(() => import('../../TripDetailModal'));

export type TripCardProps = {
  title: string;
  location: string;
  date: string;
  percent?: number;
  tripId: string;
};

export const TripCard = ({
  title,
  location,
  date,
  percent,
  tripId,
}: TripCardProps) => {
  const mutation = useDeleteTrip();
  const [open, setOpen] = useState(false);

  const deleteTrip = (id: string, event: React.MouseEvent) => {
    event.stopPropagation();
    mutation.mutate(id);
  };

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <TripCardStyle onClick={handleClick}>
        <div>
          <div className="title">
            <Typography
              $variant={'cardTitle'}
              $style={{ marginBottom: '20px' }}
            >
              {title}
            </Typography>
            <button onClick={(e) => deleteTrip(tripId, e)}>
              <IoClose style={{ fontSize: '25px' }} />
            </button>
          </div>

          <Typography $variant={'title3'}>{location}</Typography>
        </div>
        <div>
          <Typography
            $variant={'subtitle2'}
            $color="gray60"
            $style={{ marginBottom: '10px' }}
          >
            {formatISODate(date)}
          </Typography>
          <Gauge $percent={percent} />
        </div>
      </TripCardStyle>
      <Suspense
        fallback={<LoadingSpinner />}
      >
        {open && (
          <TripDetailModal
            tripId={tripId}
            onClose={() => setOpen(false)}
            open={open}
          />
        )}
      </Suspense>
    </>
  );
};

const TripCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 270px;
  padding: 30px;
  background-color: ${COLORS.white};
  border-radius: 20px;
  cursor: pointer;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
