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

const wave = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const GaugeBar = styled.div<{ $percent: number | undefined }>`
  width: ${({ $percent }) => ($percent ? `${$percent}%` : '0%')};
  height: 15px;
  background-color: ${COLORS.secondary};
  border-radius: 20px;

  ${({ $percent }) =>
    $percent === 100
      ? css`
          background-image: linear-gradient(
            90deg,
            rgba(103, 140, 110, 0.5) 0%,
            rgba(138, 174, 145, 0.75) 25%,
            #9abaa2 50%,
            rgba(138, 174, 145, 0.75) 75%,
            rgba(103, 140, 110, 0.5) 100%
          );
          background-size: 200px 100%;
          animation: ${wave} 1.5s infinite linear;
        `
      : css`
          background: ${COLORS.gray60};
        `}

  transition: width 0.3s ease;
`;
