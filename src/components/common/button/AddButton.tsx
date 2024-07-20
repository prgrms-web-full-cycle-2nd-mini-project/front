import styled, { css } from 'styled-components';
import { ButtonProps } from '../../../types/button';
import { COLORS } from '../../../styles/colors';
import { IoAddOutline } from 'react-icons/io5';

export const AddButton = ({
  size,
  $limit = false,
  type = 'submit',
  onClick,
}: ButtonProps) => {
  return (
    <Button type={type} size={size} $limit={$limit} onClick={onClick}>
      <IoAddOutline />
    </Button>
  );
};

const sizeStyles = {
  large: css`
    width: 64px;
    height: 64px;
    font-size: 30px;
  `,
  small: css`
    width: 32px;
    height: 32px;
    font-size: 16px;
  `,
};

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.secondary};
  color: ${COLORS.white};
  border-radius: 50%;

  ${({ size = 'large' }) => size && sizeStyles[size]}

  ${({ $limit }) =>
    $limit &&
    css`
      background-color: ${COLORS.gray40};
    `};
`;
