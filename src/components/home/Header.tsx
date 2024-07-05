import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import { MdLogout } from 'react-icons/md';
import { COLORS } from '../../styles/colors';

export const Header = () => {
  return (
    <HeaderStyle>
      <Typography $variant={'largetitle'}>TRIP PLAN</Typography>
      <div className="logout">
        <button type="button">
          <Typography $variant={'title1'}>로그아웃</Typography>
        </button>
        <MdLogout
          style={{
            marginLeft: '20px',
            fontSize: '30px',
            color: COLORS.secondary,
          }}
        />
      </div>
    </HeaderStyle>
  );
};
const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logout {
    display: flex;
    align-items: center;
  }
`;
