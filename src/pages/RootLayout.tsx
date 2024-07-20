import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuthStore } from '../stores/authStore';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function RootLayout() {
  const { verifyAuth } = useAuth();
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();
  const [isFirstRendered, setIsFirstRendered] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      await verifyAuth();
      //// console.log(isLoggedIn);

      if (!isLoggedIn && !isFirstRendered) {
        navigate('/login');
      }

      setIsFirstRendered(false);
      setIsLoading(false);
    };

    checkAuth();
  }, [isLoggedIn]);

  if (isLoading && !isLoggedIn) {
    return <LoadingSpinner />;
  }

  return (
    <ContentContainer>
      <Outlet />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
