import React, { useEffect } from 'react'; // Add this line
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthStore } from '../stores/authStore';

export default function RootLayout() {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
}

const ContentContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
