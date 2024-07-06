import React, { useEffect } from 'react'; // Add this line
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuthStore } from '../stores/authStore';
import { useAuth } from '../hooks/useAuth';

export default function RootLayout() {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();
  const { verifyAuth } = useAuth();

  useEffect(() => {
    const checkAuth = async () => {
      await verifyAuth();

      if (!isLoggedIn) {
        navigate('/login');
      }
    };

    checkAuth();
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
