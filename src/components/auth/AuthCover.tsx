import React from 'react';
import styled from 'styled-components';
import { LeftPageContainerStyle } from '../../styles/BookStyleStyles';

export default function AuthCover() {
  return (
    <LeftPageContainerStyle>
      <CoverDescriptions>
        <CoverTitle>TRIP PLAN</CoverTitle>
        <CoverSubtitle>여행 투두 리스트를 만들어볼까요?</CoverSubtitle>
      </CoverDescriptions>
      <CoverImage src="/src/assets/airplane.png" />
    </LeftPageContainerStyle>
  );
}

const CoverDescriptions = styled.div`
  text-align: center;
`;

const CoverTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const CoverSubtitle = styled.div`
  font-size: 1.2rem;
  margin-top: 20px;
`;

const CoverImage = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 80px;
`;
