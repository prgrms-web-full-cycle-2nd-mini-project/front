import React from 'react';
import styled from 'styled-components';

interface BookStyleContainerProps {
  children: React.ReactNode;
}

export default function BookStyleContainer({
  children,
}: BookStyleContainerProps) {
  return <ContainerStyle>{children}</ContainerStyle>;
}

export const ContainerStyle = styled.main`
  display: flex;
  min-height: 600px;
  height: 80vh;
  max-height: 800px;
  justify-content: space-between;
  align-items: center;
  /* margin: 80px auto; */
  background-color: #f9f9f9;
  outline: 1px solid #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
