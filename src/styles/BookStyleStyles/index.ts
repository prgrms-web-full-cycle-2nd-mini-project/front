import styled from 'styled-components';

export const LeftPageContainerStyle = styled.section`
  padding: 20px 20px;
  height: 100%;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  border-right: 2px solid #dee8e0;
`;

export const RightPageContainerStyle = styled.section`
  padding: 20px 20px;
  height: 100%;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BookStyleContainer = styled.main`
  display: flex;
  min-height: 600px;
  height: 90vh;
  max-height: 800px;
  justify-content: space-between;
  align-items: center;
  /* margin: 80px auto; */
  background-color: white;
  outline: 1px solid #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
