import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-bottom: 1.2px solid #c4c4c4;
  width: 100%;
  margin-bottom: 10px;
  transition: border-bottom 0.3s;
  padding: 5px 5px 10px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-bottom: 1.2px solid lightgreen;
  }
`;
