import React from 'react';
import styled from 'styled-components';

export default function AuthCover() {
  return (
    <AuthCoverStyle>
      <div className="cover-descriptions">
        <div className="cover-title">TRIP PLAN</div>
        <div className="cover-subtitle">여행 투두 리스트를 만들어볼까요?</div>
      </div>
      <img src="/src/assets/airplane.png" />
    </AuthCoverStyle>
  );
}

const AuthCoverStyle = styled.div`
  padding: 0 20px;
  width: 600px;
  height: 100%;
  border-right: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cover-title {
    font-size: 2rem;
    font-weight: 700;
  }

  .cover-subtitle {
    font-size: 1.2rem;
    margin-top: 20px;
  }

  img {
    width: 250px;
    height: 250px;
    margin-top: 80px;
  }
`;
