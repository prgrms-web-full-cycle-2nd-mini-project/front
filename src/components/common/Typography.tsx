import React from 'react';
import { TAG_MAPPING, TypoProps } from '../../types/typography';
import styled, { css } from 'styled-components';
import { FONT_STYLE } from '../../styles/typography';
import { COLORS } from '../../styles/colors';

const Typography = ({
  $variant,
  $color,
  children,
  $style,
  ...props
}: TypoProps) => {
  const Component = TAG_MAPPING[$variant] || 'p';
  return (
    <StyledTypography
      as={Component}
      $variant={$variant}
      $color={$color}
      $style={$style}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled.div<TypoProps>`
  ${({ $variant, $color, $style }) => css`
    font-size: ${FONT_STYLE.fontSize[$variant] || '16px'};
    font-weight: ${FONT_STYLE.fontWeight[$variant] || 400};
    line-height: ${FONT_STYLE.lineHeight[$variant] || 1};
    color: ${$color ? COLORS[$color] : COLORS.gray100};
    ${$style}
  `};
`;

export default Typography;
