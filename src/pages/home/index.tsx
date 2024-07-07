import React from 'react';

import { Header } from '../../components/home/Header';
import styled from 'styled-components';
import Typography from '../../components/common/Typography';

import { AddTripForm } from '../../components/home/AddTripForm';

export default function Home() {
  return (
    <HomeStyle>
      <Header />
      <div className="addForm">
        <div className="info">
          <Typography
            $variant="title1"
            $color="secondary"
            $style={{ marginBottom: '10px' }}
          >
            여행 준비, 오늘부터 시작
          </Typography>
          <Typography $variant="title2">지금 여행 계획을 작성하세요</Typography>
        </div>
        <div className="form">
          <AddTripForm />
        </div>
      </div>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  .addForm {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .info {
      flex: 1;
      min-width: 500px;
      margin-bottom: 30px;
    }

    .form {
      flex: 1.5;
      min-width: 500px;
    }
  }
`;
