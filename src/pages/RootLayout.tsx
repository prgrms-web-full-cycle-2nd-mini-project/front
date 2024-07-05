import React, { useEffect } from 'react'; // Add this line
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuthStore } from '../stores/authStore';

export default function RootLayout() {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/login');
  //   }
  // }, [isLoggedIn, navigate]);

  return (
    <>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  // 너비 추가
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
`;
