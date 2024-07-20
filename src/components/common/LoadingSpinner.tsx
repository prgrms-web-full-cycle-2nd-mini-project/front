import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';
import Box from '@mui/material/Box';

const LoadingSpinner = () => {
  return (
    <LoadingContainer>
      <CircularProgress />
    </LoadingContainer>
  );
};

export default LoadingSpinner;

const LoadingContainer = styled(Box)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;
