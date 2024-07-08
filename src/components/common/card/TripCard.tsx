import React from 'react';
import Typography from '../Typography';
import styled from 'styled-components';
import { COLORS } from '../../../styles/colors';
import { IoClose } from 'react-icons/io5';

type TripCardProps = {
  title: string;
  location: string;
  date: string;
};

export const TripCard = ({ title, location, date }: TripCardProps) => {
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

      <Typography $variant={'subtitle2'} $color="gray60">
        {date}
      </Typography>
    </TripCardStyle>
  );
};

const TripCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  height: 260px;
  padding: 30px;
  background-color: ${COLORS.white};
  border-radius: 20px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
