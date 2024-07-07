import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps } from '../../types/button';
import { COLORS } from '../../styles/colors';
import { IoAddOutline } from 'react-icons/io5';

export const AddButton = ({
  size = 'large',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <Button size={size} disabled={disabled} onClick={onClick}>
      <IoAddOutline />
    </Button>
  );
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.secondary};
  color: ${COLORS.white};
  border-radius: 50%;
  ${({ size }) =>
    size === 'large' &&
    css`
      width: 64px;
      height: 64px;
      font-size: 30px;
    `}
  ${({ size }) =>
    size === 'small' &&
    css`
      width: 32px;
      height: 32px;
      font-size: 16px;
    `}
    ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${COLORS.gray40};
    `};
`;
