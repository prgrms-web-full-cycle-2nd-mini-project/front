import React from 'react';
import styled, { css, keyframes } from 'styled-components';
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

const shine = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const GaugeBar = styled.div<{ $percent: number | undefined }>`
  width: ${({ $percent }) => ($percent ? `${$percent}%` : '0%')};
  height: 15px;
  background-color: ${COLORS.gray90};
  border-radius: 20px;
  transition: border 0.3s ease;
  ${({ $percent }) =>
    $percent === 100 &&
    css`
      background-color: ${COLORS.secondary};
      animation: ${shine} 1s infinite;
    `}
`;
