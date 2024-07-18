import React from 'react';
import styled from 'styled-components';
import Typography from '../common/Typography';
import { MdLogout } from 'react-icons/md';
import { COLORS } from '../../styles/colors';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const { userLogout } = useAuth();

  return (
    <HeaderStyle>
      <Typography $variant={'largetitle'}>TRIP PLAN</Typography>
      <div className="logout">
        <button type="button" onClick={userLogout}>
          <Typography $variant={'title1'}>로그아웃</Typography>
        </button>
        <LoginIcon onClick={userLogout} />
      </div>
    </HeaderStyle>
  );
};
const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  .logout {
    display: flex;
    align-items: center;
  }
`;

const LoginIcon = styled(MdLogout)`
  cursor: pointer;
  margin-left: 20px;
  font-size: 30px;
  color: ${COLORS.secondary};
`;
