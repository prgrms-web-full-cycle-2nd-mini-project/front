import React from 'react';
import Typography from '../Typography';
import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';
import { IoClose } from 'react-icons/io5';
import { formatISODate } from '../../../utils/formatData';
import { TripCardProps } from './TripCard';

export const TripMainCard = ({ title, location, date }: TripCardProps) => {
  return (
    <TripCardStyle>
      <div className="title">
        <Typography $variant={'largetitle'}>{title}</Typography>

        <Typography
          $variant={'title1'}
          $color="secondary"
          $style={{ marginBottom: '20px' }}
        >
          {location}
        </Typography>
        <Typography $variant={'title3'} $color="gray80">
          {formatISODate(date)}
        </Typography>
      </div>
      <div className="sub">
        <img src="/src/assets/airplane.png" />
        <button>
          <IoClose style={{ fontSize: '25px' }} />
        </button>
      </div>
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