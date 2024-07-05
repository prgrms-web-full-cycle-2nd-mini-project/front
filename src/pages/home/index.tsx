import React from 'react';

import { Header } from '../../components/home/Header';
import styled from 'styled-components';

export default function Home() {
  return (
    <HomeStyle>
      <Header />
    </HomeStyle>
  );
}

const HomeStyle = styled.div``;
