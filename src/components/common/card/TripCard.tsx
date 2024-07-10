import React from 'react';
import Typography from '../Typography';
import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';
import { IoClose } from 'react-icons/io5';
import { formatISODate } from '../../../utils/formatData';
import { Gauge } from '../Gauge';
import { fetchDeleteTrip } from '../../../apis/tripDetail.api';

export type TripCardProps = {
  title: string;
  location: string;
  date: string;
  percent?: number;
};

export const TripCard = ({ title, location, date, percent }: TripCardProps) => {
  return (
    <TripCardStyle>
      <div>
        <div className="title">
          <Typography $variant={'cardTitle'} $style={{ marginBottom: '20px' }}>
            {title}
          </Typography>
          <button>
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
        <Gauge percent={percent} />
      </div>
    </TripCardStyle>
  );
};

const TripCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: 270px;
  padding: 30px;
  background-color: ${COLORS.white};
  border-radius: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
