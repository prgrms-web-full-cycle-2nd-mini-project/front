import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
type Prop = {
  $percent: number | undefined;
};
export const Gauge = ({ $percent }: Prop) => {
  return (
    <GaugeStyle>
      <GaugeBar $percent={$percent} />
    </GaugeStyle>
  );
};

const GaugeStyle = styled.div`
  width: 100%;
  height: 15px;
  background-color: ${COLORS.gray20};
  border-radius: 20px;
`;

const GaugeBar = styled.div<{ $percent: number | undefined }>`
  width: ${({ $percent }) => $percent}%;
  height: 15px;
  background-color: ${COLORS.gray90};
  border-radius: 20px;
`;
