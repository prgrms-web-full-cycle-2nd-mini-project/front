import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { SignupProps } from '../../pages/Signup';
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import Typography from '../common/Typography';

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitted },
  } = useForm<SignupProps>({
    mode: 'onChange',
  });
  const { userSignup, errorMessage } = useAuth();

  const handleSignup = (data: SignupProps) => {
    userSignup(data);
  };

  return (
    <SignupFormStyle>
      <Typography $variant="title1">회원가입</Typography>
      <form onSubmit={handleSubmit(handleSignup)}>
        <fieldset>
          <InputStyle
            type="email"
            placeholder="이메일을 입력해주세요"
            {...register('email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            isSubmitted={isSubmitted}
            isValid={!errors.email}
          />
          {isSubmitted && errors.email && (
            <Typography $variant="body1" $color="error">
              올바른 이메일을 입력해주세요
            </Typography>
          )}
        </fieldset>
        <fieldset>
          <InputStyle
            isValid={!errors.password}
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: true,
              minLength: 6,
            })}
            isSubmitted={isSubmitted}
          />
          {isSubmitted && errors.password ? (
            <Typography $variant="body1" $color="error">
              비밀번호는 6자 이상이어야 합니다
            </Typography>
          ) : (
            <Typography $variant="body1" $color="gray50">
              비밀번호는 6자 이상이어야 합니다
            </Typography>
          )}
        </fieldset>
        <button type="submit" disabled={!isValid}>
          가입하기
        </button>
        {errorMessage && (
          <Typography $variant="body1" $color="error">
            {errorMessage}
          </Typography>
        )}
      </form>
      <SignUpLink>
        계정이 없으신가요? <Link to="/login">로그인</Link>
      </SignUpLink>
    </SignupFormStyle>
  );
}

export const SignupFormStyle = styled.div`
  width: 600px;
  padding: 40px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  fieldset {
    border: none;
    margin: 10px;
    width: 80%;
  }

  button {
    width: 50%;
    padding: 10px;
    background-color: black;
    border: none;
    border-radius: 100px;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
    margin-top: 20px;
  }

  button:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`; 

export const InputStyle = styled.input<{
  isValid: boolean;
  isSubmitted: boolean;
}>`
  width: 100%;
  padding: 10px;
  border: none;
  margin-bottom: 5px;

  background-color: inherit;
  border-bottom: ${({ isValid, isSubmitted }) =>
    isSubmitted && !isValid ? '1px solid crimson' : '1px solid #ccc'};
  font-size: 16px;
  transition: border-bottom 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ isValid, isSubmitted }) =>
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
