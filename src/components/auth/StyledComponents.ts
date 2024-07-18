import styled from 'styled-components';
import Typography from '../common/Typography';

export const FormTitle = styled(Typography)`
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const FormStyle = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FieldsetStyle = styled.fieldset`
  border: none;
  margin: 10px;
  width: 80%;
`;

export const SubmitButton = styled.button`
  width: 50%;
  padding: 10px;
  background-color: black;
  border: none;
  border-radius: 100px;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  margin-top: 20px;

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export const InputStyle = styled.input<{
  $isValid: boolean;
  $isSubmitted: boolean;
}>`
  width: 100%;
  padding: 10px;
  border: none;
  margin-bottom: 5px;
  background-color: inherit;
  border-bottom: ${({ $isValid: isValid, $isSubmitted: isSubmitted }) =>
    isSubmitted && !isValid ? '1px solid crimson' : '1px solid #ccc'};
  font-size: 16px;
  transition: border-bottom 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ $isValid: isValid, $isSubmitted: isSubmitted }) =>
      isSubmitted && !isValid ? 'crimson' : '#333'};
  }
`;

export const SignUpLink = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #888;

  a {
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;
